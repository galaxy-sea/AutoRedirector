
document.getElementById("openOptions").addEventListener("click", function () {
  chrome.tabs.create({ url: "options.html" });
});
