const assetOrigin = 'https://idea-build-show.lovable.app';

// GitHub Pages and local Vite cannot serve Lovable's CDN paths.
// Normalize both relative pointers and previously saved absolute pointer URLs.
export const assetUrl = (url: string) => {
  const path = url.startsWith('/') ? url : /^https?:\/\//.test(url) ? new URL(url).pathname : null;
  if (!path?.startsWith('/__l5e/assets-v1/')) return url;
  const suffix = url.startsWith('/') ? url : `${path}${new URL(url).search}${new URL(url).hash}`;
  return `${assetOrigin}${suffix}`;
};