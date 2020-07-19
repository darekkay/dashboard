/* istanbul ignore file */
export interface WebsiteProvider {
  title: string;
  url: string;
}

const providers: WebsiteProvider[] = [
  { title: "Wikipedia", url: "https://en.m.wikipedia.org/wiki/Main_Page" },
  { title: "Todoist", url: "https://todoist.com" },
  { title: "TickTick", url: "https://ticktick.com/" },
];

export default providers;
