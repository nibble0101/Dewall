const removePaywallAndAdsBtn = document.getElementById('remove-paywall-and-ads-btn');
const printArticleBtn = document.getElementById('print-article-btn');

removePaywallAndAdsBtn.addEventListener('click', async (e) => {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const { response } = await chrome.tabs.sendMessage(tab.id, { action: 'REMOVE_PAYMENT_WALL_AND_ADS' });

        if (response === 'DONE_REMOVING_PAYMENT_WALL_AND_ADS') {
            console.log('Successfully removed payment wall and adverts');
        } else {
            throw new Error('Failed to remove payment wall and adverts');
        }
    } catch (error) {
        console.log(error);

    };
});

printArticleBtn.addEventListener('click', async () => {

    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        await chrome.scripting.insertCSS({ files: ['src/css/print-document.css'], target: { tabId: tab.id } });

        const { response } = await chrome.tabs.sendMessage(tab.id, { action: 'SAVE_ARTICLE_AS_PDF' });
        if (response === 'DONE_SAVING_ARTICLE_AS_PDF') {
            await chrome.scripting.removeCSS({ files: ['src/css/print-document.css'], target: { tabId: tab.id } });
        } else {
            throw new Error('Failed to save article as PDF document');
        }
    } catch (error) {
        console.log(error);

    };
})

