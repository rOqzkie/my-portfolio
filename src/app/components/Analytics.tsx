import { useEffect } from 'react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function Analytics() {
  useEffect(() => {
    // Track page view
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

    trackPageView();
  }, []);

  return null;
}
