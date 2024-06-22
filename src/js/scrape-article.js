const scrapeArticle = () => {
  const paragraphs = [];
  const paragraphElements = document.querySelectorAll(".paragraph-wrapper");

  for (const paragraphElement of paragraphElements) {
    paragraphs.push(paragraphElement.textContent);
  }

  return paragraphs;
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "SCRAPE_ARTICLE") {
    const payload = scrapeArticle();

    sendResponse({
      action: "DISPLAY_ARTICLE",
      payload,
    });
  }
});
