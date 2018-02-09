module.exports = {
  dynamicTask: ({ addNamedImport: { target, name, module } }) => {
    module              = module || 'admin-on-rest';
    const regexNamed    = new RegExp(`^import (?:\\w+, )?\\{(\\n\\s+)?(?![^}]*\\b${name}\\b)([\\w ,\\n]+)(?=\\b\\s?\\} from ['"]${module}['"];?$)`, 'gmi');
    const regexNewExtra = new RegExp(`import ([^{}]+)(?= from ['"]${module}['"];?)`, 'g');

    return [
      // Add if new named (on existing)
      {
        task  : 'modify',
        patch : [{ pattern: regexNewExtra, append: `, { ${name} }` }],
        target
      },

      // Add if existing named
      {
        task  : 'modify',
        patch : [
          { pattern: regexNamed, custom: (match, newline) => `${match},${newline || ' '}${name}` }
        ],
        target
      }
    ];
  }
};
