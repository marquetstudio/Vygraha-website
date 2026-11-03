/**
 * Utility to resolve public asset paths correctly regardless of whether the app
 * is running in local dev, in AI Studio preview, or deployed under a GitHub Pages subpath
 * (e.g. https://<username>.github.io/<repo-name>/).
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${cleanPath}`;
};
