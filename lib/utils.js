const path = require('path');

module.exports.renderRelativeToApp = (p, target, file) => {
  let relativePath = path.relative(
    path.parse(path.resolve(p.appRoot, p.aor.app)).dir,
    path.resolve(p.appRoot, target)
  );

  if (relativePath[0] !== '.') {
    relativePath = '.' + relativePath;
  }

  return path.join(relativePath, file);
};
