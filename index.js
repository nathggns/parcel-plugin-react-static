module.exports = bundler => {
  bundler.addPackager('html', require.resolve('./HTML'));
};
