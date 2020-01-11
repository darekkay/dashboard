module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      md: "768px"
    },

    // Base

    inset: {
      "-1": "-1px",
      "0": "0"
    },

    height: {
      auto: "auto",
      full: "100%"
    },

    maxHeight: {
      full: "100%"
    },

    width: {
      auto: "auto",
      full: "100%"
    },

    minWidth: {
      "250": "250px",
      full: "100%"
    },

    maxWidth: {
      full: "100%"
    },

    // Typography

    fontSize: {
      1: "1.2rem",
      2: "1.4rem",
      3: "1.8rem",
      4: "2rem",
      5: "2.5rem",
      6: "3rem",
      7: "4rem"
    },

    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
      extrabold: "800"
    },

    colors: {
      black: "#000",
      white: "#fff"
    },

    textColor: theme => theme("colors"),

    backgroundColor: theme => theme("colors"),

    // Spacing

    spacing: {
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.5rem",
      "6": "2rem",
      "7": "3rem",
      "8": "4rem",
      "9": "8rem"
    },

    margin: theme => ({
      auto: "auto",
      ...theme("spacing")
    }),
    padding: theme => theme("spacing"),

    // Misc

    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed"
    },

    zIndex: {
      "10": 10
    }
  },
  variants: {
    // Base
    display: [],
    position: [],
    inset: [],
    overflow: [],
    resize: [],
    height: [],
    maxHeight: [],
    width: ["responsive"],
    minWidth: [],
    maxWidth: [],

    // Flexbox

    flexDirection: ["responsive"],
    flexWrap: ["responsive"],
    flexGrow: [],
    flexShrink: [],
    alignItems: ["responsive"],
    justifyContent: ["responsive"],

    // Spacing

    margin: ["responsive"],
    padding: ["responsive"],

    // Typography

    fontSize: [],
    fontWeight: [],
    textColor: [],
    backgroundColor: [],
    fontStyle: [],
    textAlign: ["responsive"],
    textDecoration: ["hover", "focus"],
    textTransform: [],

    // Misc

    cursor: [],
    zIndex: []
  },
  corePlugins: {
    // Base

    display: true,
    position: true,
    inset: true,
    overflow: true,
    resize: true,
    height: true,
    maxHeight: true,
    width: true,
    minWidth: true,
    maxWidth: true,

    // Flexbox

    flexDirection: true,
    flexWrap: true,
    flexGrow: true,
    flexShrink: true,
    alignItems: true,
    justifyContent: true,

    // Spacing

    margin: true,
    padding: true,

    // Typography

    fontSize: true,
    fontWeight: true,
    fontStyle: true,
    textColor: true,
    backgroundColor: true,
    textAlign: true,
    textDecoration: true,
    textTransform: true,

    // Misc

    cursor: true,
    zIndex: true,

    // Disable everything else

    accessibility: false,
    alignContent: false,
    alignSelf: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: false,
    borderRadius: false,
    borderStyle: false,
    borderWidth: false,
    boxShadow: false,
    fill: false,
    flex: false,
    float: false,
    fontFamily: false,
    fontSmoothing: false,
    letterSpacing: false,
    lineHeight: false,
    listStylePosition: false,
    listStyleType: false,

    minHeight: false,
    objectFit: false,
    objectPosition: false,
    opacity: false,
    order: false,
    outline: false,
    placeholderColor: false,
    pointerEvents: false,
    stroke: false,
    tableLayout: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    wordBreak: false
  },
  plugins: []
};
