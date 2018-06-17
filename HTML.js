const React = require('react');
const Bundler = require('parcel-bundler');
const logger = require('parcel-bundler/src/Logger');
const DefaultHTML = require('parcel-bundler/src/packagers/HTMLPackager');
const { ServerStyleSheet } = require('styled-components');
const { renderToString } = require('react-dom/server');
const cheerio = require('cheerio');

module.exports = class extends DefaultHTML {
  async staticBundle(asset) {
      const assets = this.bundler.loadedAssets;
      const appPath = Array.from(assets.keys()).find(path => !!path.toLowerCase().match(/app\.js$/));
      const newBundler = new Bundler(appPath, {});
      let name;
      newBundler.on('bundled', bundle => name = bundle.name);
      await newBundler.bundle();
      const App = require(name).default;

      const sheet = new ServerStyleSheet();
      const markup = renderToString(sheet.collectStyles(
          React.createElement(App, {}, null)
      ));
      const styles = sheet.getStyleTags();
      const $template = cheerio.load(asset.generated.html);
      $template('#app').html(markup);
      $template('head').append(styles);
      asset.generated.html = $template.html();
  }

  async addAsset(asset) {
    if (this.bundler.entryFiles.includes(asset.name)) {
      logger.status('💥', `react-static: Beginning static bundle of entry file ${asset.name}`);
      await this.staticBundle(asset);
    }

    return await super.addAsset(asset);
  }
};
