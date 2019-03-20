export default {
  grid: {
    rows: 3,
    columns: 12
  },
  widgets: [
    { width: 3, height: 3, type: "text" },
    { width: 3, height: 1, type: "text" },
    { width: 3, height: 1, type: "text" },
    { width: 3, height: 1, type: "text" },
    { width: 2, height: 1, type: "empty" },
    {
      width: 4,
      height: 1,
      type: "text",
      options: {
        content: "Hello World!"
      }
    },
    { width: 1, height: 1, type: "text" },
    { width: 2, height: 2, type: "text" },
    { width: 3, height: 1, type: "text" },
    { width: 2, height: 1, type: "text" },
    { width: 2, height: 1, type: "text" }
  ],
  theme: "default"
};
