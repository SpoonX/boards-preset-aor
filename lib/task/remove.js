module.exports = [
  {
    definedTask: 'aor:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: {
        name  : 'Delete',
        target: `App.js`
      }
    })
  },
  {
    definedTask: 'aor:addResourceAttribute',
    prepare    : p => Object.assign(p, {
      addResourceAttribute: {
        resource : p.name,
        attribute: 'remove',
        value    : 'Delete'
      }
    })
  },
];
