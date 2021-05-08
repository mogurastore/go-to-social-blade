const createTab = ({ i, url }) => {
  const { pathname } = new URL(url);
  const q = pathname.split("/")[2];

  chrome.tabs.create({
    active: true,
    index: i,
    url: `https://socialblade.com/youtube/s/?q=${q}`,
  });
};

chrome.action.onClicked.addListener((tab) => {
  createTab({ i: tab.index + 1, url: tab.url });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "linkUrl") {
    createTab({ i: tab.index + 1, url: info.linkUrl });
  } else if (info.menuItemId === "pageUrl") {
    createTab({ i: tab.index + 1, url: info.pageUrl });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  const documentUrlPatterns = ["https://www.youtube.com/*"];

  chrome.contextMenus.create({
    id: "linkUrl",
    title: "Send the link url",
    contexts: ["link"],
    documentUrlPatterns,
  });
  chrome.contextMenus.create({
    id: "pageUrl",
    title: "Send the page url",
    contexts: ["page"],
    documentUrlPatterns,
  });
});
