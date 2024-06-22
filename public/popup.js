const scrapeArticleBtn = document.getElementById("scrape-article");
const printArticleBtn = document.getElementById("print-article");
const articleWrapper = document.getElementById("article-wrapper");

scrapeArticleBtn.addEventListener("click", async (e) => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    const response = await chrome.tabs.sendMessage(tab.id, {
      action: "SCRAPE_ARTICLE",
    });

    if (response.action === "DISPLAY_ARTICLE") {
      for (const paragraphText of response.payload) {
        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = paragraphText;
        articleWrapper.appendChild(paragraphElement);
      }

      scrapeArticleBtn.setAttribute("disabled", "disabled");

      const button = document.createElement("button");
      button.textContent = "Save as PDF";
      
      button.addEventListener("click", () => {
        console.log("Clicked this button");
        window.print();
      });

      articleWrapper.appendChild(button);
    } else {
      throw new Error("Failed to display article");
    }
  } catch (error) {
    console.log(error);
  }
});
