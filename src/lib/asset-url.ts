const assetOrigin = 'https://idea-build-show.lovable.app';

// Asset pointers are served by Lovable hosting, not by the local Vite server.
export const assetUrl = (url: string) => url.startsWith('/__l5e/assets-v1/') ? `${assetOrigin}${url}` : url;