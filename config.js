let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/fonts/*.{woff,woff2}': 'fonts/'
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};


module.exports = config;
