/** Mock the render prop by providing a mock width*/
module.exports = {
  SizeMe: ({ children }) => children({ size: { width: 1000 } }),
};
