enum WidgetCategory {
  General = "general",
  Media = "media",
  Knowledge = "knowledge",
  Tools = "tools",
  Tracking = "tracking",
  Monitoring = "monitoring"

  // Possible categories for future widgets
  // Charts = "charts",
  // Productivity = "productivity",
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
  WidgetCategory.Monitoring
];

export default WidgetCategory;
