import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-75c2b73e/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-75c2b73e/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, organization, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Generate unique ID for the submission
    const timestamp = Date.now();
    const submissionId = `contact_${timestamp}`;

    // Store the contact submission
    const contactData = {
      id: submissionId,
      name,
      email,
      organization: organization || '',
      message,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    await kv.set(submissionId, contactData);

    console.log(`Contact form submission received from ${email}`);

    return c.json({ 
      success: true, 
      message: "Your message has been received. We'll get back to you soon!",
      submissionId 
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ 
      error: "Failed to process your message. Please try again later." 
    }, 500);
  }
});

// Get all contact submissions (for admin)
app.get("/make-server-75c2b73e/contacts", async (c) => {
  try {
    const contacts = await kv.getByPrefix("contact_");
    
    // Sort by timestamp, newest first
    const sortedContacts = contacts.sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });

    return c.json({ contacts: sortedContacts, count: sortedContacts.length });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return c.json({ error: "Failed to fetch contacts" }, 500);
  }
});

// Get projects endpoint
app.get("/make-server-75c2b73e/projects", async (c) => {
  try {
    const projects = await kv.getByPrefix("project_");
    return c.json({ projects, count: projects.length });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return c.json({ error: "Failed to fetch projects" }, 500);
  }
});

// Create/Update project endpoint
app.post("/make-server-75c2b73e/projects", async (c) => {
  try {
    const body = await c.req.json();
    const { id, title, category, problem, techStack, results, liveUrl, githubUrl } = body;

    if (!title || !category || !problem || !techStack || !results) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const projectId = id || `project_${Date.now()}`;
    const projectData = {
      id: projectId,
      title,
      category,
      problem,
      techStack,
      results,
      liveUrl: liveUrl || '',
      githubUrl: githubUrl || '',
      updatedAt: new Date().toISOString()
    };

    await kv.set(projectId, projectData);

    return c.json({ success: true, project: projectData });
  } catch (error) {
    console.error("Error saving project:", error);
    return c.json({ error: "Failed to save project" }, 500);
  }
});

// Analytics endpoint - track page views
app.post("/make-server-75c2b73e/analytics/pageview", async (c) => {
  try {
    const body = await c.req.json();
    const { page, referrer, userAgent } = body;

    const viewId = `view_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const viewData = {
      id: viewId,
      page,
      referrer: referrer || 'direct',
      userAgent: userAgent || 'unknown',
      timestamp: new Date().toISOString()
    };

    await kv.set(viewId, viewData);

    return c.json({ success: true });
  } catch (error) {
    console.error("Error tracking pageview:", error);
    return c.json({ error: "Failed to track pageview" }, 500);
  }
});

// Get analytics summary
app.get("/make-server-75c2b73e/analytics/summary", async (c) => {
  try {
    const views = await kv.getByPrefix("view_");
    const contacts = await kv.getByPrefix("contact_");
    
    return c.json({
      totalPageViews: views.length,
      totalContacts: contacts.length,
      recentViews: views.slice(-10).reverse()
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return c.json({ error: "Failed to fetch analytics" }, 500);
  }
});

Deno.serve(app.fetch);