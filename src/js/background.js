chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();

    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        const rule = {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'www.monitor.co.ug', schemes: ['https', 'http'] }
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }
        chrome.declarativeContent.onPageChanged.addRules([rule]);
    })
})