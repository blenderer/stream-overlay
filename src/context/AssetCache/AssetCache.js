import _keyBy from 'lodash/keyBy';
import _get from 'lodash/get';

export default class AssetCache {
  constructor([...assetConfigs]) {
    this.assetConfigs = assetConfigs;

    this.cache = assetConfigs.reduce((cache, config) => {
      return {
        ...cache,
        [config.name]: _keyBy(config.assets, 'name')
      };
    }, {});
  };

  getAssetUrl(name, assetType) {
    return _get(this.cache, `${assetType}[${name}].url`, '');
  }
}