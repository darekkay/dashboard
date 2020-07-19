export const categories = [
  "general",
  "media",
  "knowledge",
  "tools",
  "tracking",
  "monitoring",

  // possible categories for future widgets
  // "charts"
  // "productivity"
  // "motivation"
  // "fun"
  // "games"
] as const;

type WidgetCategory = typeof categories[number];

export default WidgetCategory;
