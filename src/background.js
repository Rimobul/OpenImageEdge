function requestOpenImage(info, tab) {
    var imageUrl = info.srcUrl;
    browser.tabs.create({url: imageUrl});
}

function copyTextToClipboard(info, tab) {
    var imageUrl = info.srcUrl;
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = imageUrl;
    document.body.appendChild(copyFrom);
    copyFrom.select();
  
    document.execCommand('copy');
  
    copyFrom.blur();
    document.body.removeChild(copyFrom);
  }

browser.contextMenus.create({
    id: "open-image-extension",
    title: browser.i18n.getMessage("openImgNewTab"),
    contexts: ["image"],
    onclick: requestOpenImage
});

browser.contextMenus.create({
    id: "copy-image-extension",
    title: browser.i18n.getMessage("copyImgAddress"),
    contexts: ["image"],
    onclick: copyTextToClipboard
});
