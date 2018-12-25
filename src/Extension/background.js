function requestOpenImage(info, tab) {
    var imgSrc = info.srcUrl;
    browser.tabs.create({url: imgSrc});
}

browser.contextMenus.create({
    id: "open-image-extension",
    title: browser.i18n.getMessage("openImgNewTab"),
    contexts: ["image"],
    onclick: requestOpenImage
});
