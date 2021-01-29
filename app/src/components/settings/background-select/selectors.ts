import createSelector from "selectorator";

const selectComponentProps = createSelector(
  ["config.backgroundUrl"],
  (backgroundUrl) => ({
    backgroundUrl,
  })
);

export default selectComponentProps;
