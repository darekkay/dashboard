module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      md: "768px",
    },

    // Base

    inset: {
      "-1": "-1px",
      "0": "0",
    },

    height: {
      auto: "auto",
      full: "100%",
    },

    maxHeight: {
      full: "100%",
    },

    width: {
      auto: "auto",
      full: "100%",
    },

    minWidth: {
      "250": "250px",
      full: "100%",
    },

    maxWidth: {
      full: "100%",
    },

    // Typography

    // Update styles/typography.scss as well
    fontSize: {
      0: "1rem",
      1: "1.2rem",
      2: "1.4rem",
      3: "1.8rem",
      4: "2rem",
      5: "2.5rem",
      6: "3rem",
      7: "4rem",
    },

    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    // Spacing

    spacing: {
      "0": "0",
      "1": "0.2rem",
      "2": "0.5rem",
      "3": "0.8rem",
      "4": "1rem",
      "5": "1.5rem",
      "6": "2rem",
      "7": "3rem",
      "8": "4rem",
      "9": "8rem",
    },

    margin: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    padding: (theme) => theme("spacing"),
    space: (theme) => ({
      ...theme("spacing"),
    }),

    // Misc

    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },

    zIndex: {
      "10": 10,
      "20": 20,
      "30": 30,
    },
  },
  variants: {
    // Base
    display: ["responsive"],
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
    space: ["responsive"],

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
    wordBreak: [],
    zIndex: [],
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
    space: true,

    // Typography

    fontSize: true,
    fontWeight: true,
    fontStyle: true,
    textAlign: true,
    textDecoration: true,
    textTransform: true,

    // Misc

    cursor: true,
    wordBreak: true,
    zIndex: true,

    // Disable everything else

    accessibility: false,
    alignContent: false,
    alignSelf: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundColor: false,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: false,
    borderOpacity: false,
    borderRadius: false,
    borderStyle: false,
    borderWidth: false,
    boxShadow: false,
    boxSizing: false,
    clear: false,
    divideColor: false,
    divideOpacity: false,
    divideWidth: false,
    fill: false,
    flex: false,
    float: false,
    fontFamily: false,
    fontSmoothing: false,
    gap: false,
    gridAutoFlow: false,
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
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
    placeholderOpacity: false,
    pointerEvents: false,
    rotate: false,
    scale: false,
    skew: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textColor: false,
    textOpacity: false,
    transitionProperty: false,
    transitionTimingFunction: false,
    transitionDuration: false,
    transitionDelay: false,
    transform: false,
    transformOrigin: false,
    translate: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
  },
  plugins: [],
};
