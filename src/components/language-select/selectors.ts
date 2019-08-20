import createSelector from "selectorator";

const selectComponentProps = createSelector(
  ["config.language"],
  language => ({
    language
  })
);

export default selectComponentProps;
