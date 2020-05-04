chrome.browserAction.onClicked.addListener((tab) => {
  const { origin, pathname } = new URL(tab.url);
  const url = `https://socialblade.com/youtube/s/?q=${origin}${pathname}`;

  chrome.tabs.create({ url });
});
