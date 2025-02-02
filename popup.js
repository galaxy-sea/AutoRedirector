
document.getElementById("openOptions").addEventListener("click", function () {
  chrome.tabs.create({ url: "options.html" });
});

document.getElementById("newIssue").addEventListener("click", function () {
  chrome.tabs.create({ url: "https://github.com/galaxy-sea/AutoRedirector/issues/new?template=%E6%96%B0%E7%9A%84%E4%B8%AD%E8%BD%AC%E9%93%BE%E6%8E%A5%E5%8F%8D%E9%A6%88-%E6%88%96-bug%E5%8F%8D%E9%A6%88.md" });
});