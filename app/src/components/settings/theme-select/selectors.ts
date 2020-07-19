import createSelector from "selectorator";

const selectComponentProps = createSelector(["config.theme"], (theme) => ({
  theme,
}));

export default selectComponentProps;
