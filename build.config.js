const path = require('path');

module.exports = {
  alias: {
    '@': path.join(__dirname, 'src'),
  },
  env: {
    BUILD_TIMESTAMP: (new Date()).getTime(),
    APP_VERSION: '1',
    APP_BRANCHE: 'master'
  },
  antdLessModifyVars: {
  },
};
