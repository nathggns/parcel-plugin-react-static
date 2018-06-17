module.exports = bundler => {
  if (!bundler.options.watch) {
        bundler.addPackager('html', require.resolve('./HTML'));
    }
};
