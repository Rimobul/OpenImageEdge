function requestOpenImage(info, tab) {
    var imgSrc = info.srcUrl;
    browser.tabs.create({url: imgSrc});
}

browser.contextMenus.create({
    id: "open-image-extension",
    title: "Open image in a new tab",
    contexts: ["image"],
    onclick: requestOpenImage
});
