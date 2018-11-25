export function getPlayerAssetUrls(assetCache, player) {
  return {
    country: assetCache.getAssetUrl(player.country, 'regionFlags'),
    sponsor: assetCache.getAssetUrl(player.sponsor, 'playerSponsors'),
    character: assetCache.getAssetUrl(player.character, 'characters'),
  };
};