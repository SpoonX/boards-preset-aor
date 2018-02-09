require('fs').readdirSync(__dirname).forEach(file => {
  if (file === 'index.js') {
    return;
  }

  file = file.replace(/\.js$/, '');

  module.exports[file] = require(`./${file}`);
});
