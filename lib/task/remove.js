module.exports = [
  {
    definedTask: 'aor:addNamedImport',
    prepare    : p => Object.assign(p, {
      addNamedImport: {
        name  : 'Delete',
        target: p.aor.app
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
