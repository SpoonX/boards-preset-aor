module.exports = {
  templateRoot: __dirname + '/templates',
  tasks       : require('./lib/task/index'),
  parameters  : {
    aor: {
      resources: 'resource/'
    }
  }
};
