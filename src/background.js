function requestOpenImage(info, tab) {
    var imageUrl = info.srcUrl;
    browser.tabs.create({url: imageUrl});
}

function requestSaveImage(info, tab) {
    var imageUrl = info.srcUrl;
    var downloading = browser.downloads.download({
        url: imageUrl,
        saveAs: true
    });

    downloading.then();
}

browser.contextMenus.create({
    id: "open-image-extension",
    title: browser.i18n.getMessage("openImgNewTab"),
    contexts: ["image"],
    onclick: requestOpenImage
});

browser.contextMenus.create({
    id: "save-image-extension",
    title: browser.i18n.getMessage("saveImgAs"),
    contexts: ["image"],
    onclick: requestSaveImage
})
