enum WidgetCategory {
  General = "general",
  Media = "media",
  Knowledge = "knowledge",
  Tools = "tools",
  Tracking = "tracking",
  Monitoring = "monitoring",
  Productivity = "productivity"

  // Possible categories for future widgets
  // Charts = "charts",
  // Motivation = "motivation",
  // Fun = "fun",
  // Games = "games"
}

export const categories = [
  WidgetCategory.General,
  WidgetCategory.Media,
  WidgetCategory.Knowledge,
  WidgetCategory.Tools,
  WidgetCategory.Tracking,
  WidgetCategory.Monitoring,
  WidgetCategory.Productivity
];

export default WidgetCategory;
