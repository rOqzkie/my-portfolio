import { useEffect, useState } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const GITHUB_USERNAME = 'rOqzkie';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${API_URL}?sort=updated&per_page=100`,
          {
            signal: controller.signal,
            headers: { Accept: 'application/vnd.github.v3+json' },
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();

        // Filter out forked repos and sort by most recently updated
        const filtered = data
          .filter((repo) => !repo.name.startsWith('.'))
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          );

        setRepos(filtered);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError((err as Error).message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();

    return () => controller.abort();
  }, []);

  return { repos, loading, error };
}
