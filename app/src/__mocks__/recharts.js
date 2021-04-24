/*
 * Recharts Mock
 * Based on: https://github.com/recharts/recharts/issues/727
 */

const MockResponsiveContainer = (props) => (
  <div data-testid="chart" {...props} />
);

module.exports = {
  ...jest.requireActual("recharts"),
  ResponsiveContainer: MockResponsiveContainer,
};
