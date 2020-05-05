chrome.browserAction.onClicked.addListener((tab) => {
  const { origin, pathname } = new URL(tab.url);

  chrome.tabs.create({
    index: tab.index + 1,
    url: `https://socialblade.com/youtube/s/?q=${origin}${pathname}`,
  });
});
