/* Default config: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js */

// TODO: move into @darekkay/styles and inherit

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
      0: "0",
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
      250: "250px",
      full: "100%",
    },

    maxWidth: {
      full: "100%",
    },

    // Typography

    // Update styles/_variables.scss as well
    fontSize: {
      0: "1rem",
      1: "1.2rem",
      2: "1.4rem",
      3: "1.6rem",
      4: "1.8rem",
      5: "2rem",
      6: "2.4rem",
      7: "3rem",
    },

    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
    },

    // Spacing

    spacing: {
      0: "0",
      1: "0.2rem",
      2: "0.5rem",
      3: "0.8rem",
      4: "1rem",
      5: "1.5rem",
      6: "2rem",
      7: "3rem",
      8: "4rem",
      9: "8rem",
    },

    margin: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    padding: (theme) => theme("spacing"),
    space: (theme) => ({
      ...theme("spacing"),
    }),

    // Colors

    colors: {},

    // Misc

    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
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
      10: 10,
      20: 20,
      30: 30,
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
    fontStyle: [],
    lineHeight: [],
    textColor: [],
    backgroundColor: [],
    letterSpacing: [],
    textAlign: ["responsive"],
    textDecoration: ["hover", "focus"],
    textTransform: [],

    // Misc

    boxShadow: [],
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
    lineHeight: true,
    textAlign: true,
    textDecoration: true,
    textTransform: true,

    // Misc

    boxShadow: true,
    cursor: true,
    wordBreak: true,
    zIndex: true,

    // Disable everything else

    accessibility: false,
    alignContent: false,
    alignSelf: false,
    animation: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundColor: false,
    backgroundImage: false,
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
    boxSizing: false,
    clear: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    fill: false,
    flex: false,
    float: false,
    fontFamily: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    gap: false,
    gradientColorStops: false,
    gridAutoColumns: false,
    gridAutoFlow: false,
    gridAutoRows: false,
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    justifyItems: false,
    justifySelf: false,
    letterSpacing: false,
    listStylePosition: false,
    listStyleType: false,
    minHeight: false,
    objectFit: false,
    objectPosition: false,
    opacity: false,
    order: false,
    outline: false,
    overscrollBehavior: false,
    placeholderColor: false,
    placeholderOpacity: false,
    placeContent: false,
    placeItems: false,
    placeSelf: false,
    pointerEvents: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
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
