import { useEffect } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

/**
 * Custom hook for tracking analytics events
 * Usage: const { trackEvent, trackPageView } = useAnalytics();
 */
export function useAnalytics() {
  const trackPageView = async () => {
    try {
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-75c2b73e/analytics/pageview`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent
          })
        }
      );
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackEvent = async (eventName: string, eventData?: Record<string, any>) => {
    try {
      console.log('Event tracked:', eventName, eventData);
      // Can be extended to track custom events in the future
    } catch (error) {
      console.error('Event tracking error:', error);
    }
  };

  return { trackPageView, trackEvent };
}

/**
 * HOC component that automatically tracks section views
 */
export function withSectionTracking(Component: React.ComponentType<any>, sectionName: string) {
  return function TrackedComponent(props: any) {
    const { trackEvent } = useAnalytics();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              trackEvent('section_view', { section: sectionName });
            }
          });
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(sectionName.toLowerCase());
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [trackEvent]);

    return <Component {...props} />;
  };
}
