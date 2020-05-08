chrome.browserAction.onClicked.addListener((tab) => {
  const { pathname } = new URL(tab.url);
  const q = pathname.split("/")[2];

  chrome.tabs.create({
    index: tab.index + 1,
    url: `https://socialblade.com/youtube/s/?q=${q}`,
  });
});
