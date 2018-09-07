expect.assertions(1);

process.on('unhandledRejection', err => {
  console.error('Unhandled promise rejection:', err);
  throw err;
});

// https://github.com/jsdom/jsdom/issues/1721
window.URL.createObjectURL = () => undefined;
window.URL.revokeObjectURL = () => undefined;
