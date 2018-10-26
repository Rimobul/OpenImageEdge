function requestOpenImage(info, tab) {
    var selection = info.selectionText;
    var serviceCall = "https://www.google.com/#q=" + encodeURIComponent(selection);
    browser.tabs.create({url: serviceCall});
}

browser.contextMenus.create({
    id: "OpenImage",
    title: "Open image in a new tab",
    contexts: ['selection'],
    onclick: requestOpenImage
});
