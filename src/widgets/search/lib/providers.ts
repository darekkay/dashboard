export interface SearchProvider {
  title: string;
  pattern: string;
}

const providers: SearchProvider[] = [
  { title: "DuckDuckGo", pattern: "https://duckduckgo.com/?q=%s" },
  { title: "Google", pattern: "https://google.com/search?q=%s" },
  { title: "Bing", pattern: "https://www.bing.com/search?q=%s" },
  {
    title: "YouTube",
    pattern: "https://www.youtube.com/results?search_query=%s"
  },
  { title: "IMDb", pattern: "https://www.imdb.com/find?s=all;q=%s" }
];

export default providers;
