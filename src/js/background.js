const baseUrl = "https://www.monitor.co.ug/";

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.disable();

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    const rule = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: "www.monitor.co.ug",
            schemes: ["https", "http"],
          },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    };
    chrome.declarativeContent.onPageChanged.addRules([rule]);
  });
});

// Adds a badge when the browser is pointed to https://www.monitor.co.ug/
// Find a better way of doing this

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const { url } = tab;
  
  if (url.startsWith(baseUrl)) {
    chrome.action.setBadgeText({ text: "ON", tabId }, () => {});
    chrome.action.setBadgeBackgroundColor({ color: "green", tabId }, () => {});
  } else {
  }
});
