module.exports = {
  dynamicTask: ({ addResourceAttribute: { resource, attribute, value } }) => {
    const pattern = new RegExp(`<Resource.*?name="${resource}".*?(?=\\/>)`);
    const full    = `${attribute}={${value}}`;

    return [
      {
        task  : 'modify',
        patch : [{ pattern, append: `${full} ` }],
        target: 'App.js',
      }
    ];
  }
};
