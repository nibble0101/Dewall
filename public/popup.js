const btn = document.getElementById('btn');

btn.addEventListener('click', async (e) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['src/content-script.js'],

    })
});

