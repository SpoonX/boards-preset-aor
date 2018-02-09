module.exports = {
  dynamicTask: ({ addTag: { target, before, tag } }) => {
    const pattern = new RegExp(`\n( *)<\\/${before}>`, 'gi');

    return {
      task: 'modify',
      patch: [{ pattern, custom: (match, spaces) => `\n${spaces}  ${tag}${match}` }],
      target,
    };
  }
};
