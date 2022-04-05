const pageGridHeader = document.querySelector('.page-grid-header');
const pageContent = document.querySelector('page-content.detail-content');

const artice = document.querySelector('.article-page');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'SAVE_ARTICLE_AS_PDF') {
        window.print();
        sendResponse({ response: 'DONE_SAVING_ARTICLE_AS_PDF' });
    }
})



