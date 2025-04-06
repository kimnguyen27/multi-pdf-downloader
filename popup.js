const downloadBtn = document.getElementById("downloadBtn");
const buttonWrapper = document.getElementById("buttonWrapper");
const spinner = document.getElementById("spinner");
const doneMessage = document.getElementById("doneMessage");
const statusText = document.getElementById("statusText");

downloadBtn.addEventListener("click", async () => {
  // Remove the spinner from visibility initially
  spinner.classList.add("hidden");

  // Hide the button and prepare the status text
  buttonWrapper.classList.add("hidden");
  statusText.classList.add("visible");
  statusText.textContent = "Scanning tabs...";

  // Remove padding from buttonWrapper (for visual balance)
  buttonWrapper.classList.add("noPadding");

  const tabs = await chrome.tabs.query({});
  const pdfTabs = tabs.filter(
    (tab) => tab.url && tab.url.toLowerCase().endsWith(".pdf")
  );

  // Show the spinner if PDFs are found
  if (pdfTabs.length > 0) {
    spinner.classList.remove("hidden");
    spinner.classList.add("visible");
  }

  if (pdfTabs.length === 0) {
    statusText.textContent = "No PDFs found in open tabs.";
    // Wait for a reasonable amount of time before resetting the UI
    setTimeout(() => {
      buttonWrapper.classList.remove("hidden");
      statusText.classList.remove("visible");
      buttonWrapper.classList.remove("noPadding");
    }, 2000); // Status text stays visible for 2 seconds before reset
    return;
  }

  if (pdfTabs.length === 1) {
    statusText.textContent = `Found 1 PDF. Downloading...`;
  } else {
    statusText.textContent = `Found ${pdfTabs.length} PDFs. Downloading...`;
  }

  for (const tab of pdfTabs) {
    await chrome.downloads.download({ url: tab.url });
  }

  // Hide spinner and show done message
  spinner.classList.remove("visible");
  spinner.classList.add("hidden");
  doneMessage.classList.remove("hidden");

  // Reset after 5 seconds
  setTimeout(() => {
    doneMessage.classList.add("hidden");
    buttonWrapper.classList.remove("hidden");
    statusText.textContent = "";
    statusText.classList.remove("visible");
    buttonWrapper.classList.remove("noPadding");
  }, 5000); // Reset UI after the downloads are complete
});
