"use strict";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "readDom") {
        var tagsH4 = document.getElementsByClassName("gridrow-input");
        var arrInput = (Array.from(tagsH4 || []).map(function (elt) { return elt.value; })).filter(function (elt) { return elt; });
        chrome.storage.sync.set({ res: arrInput[24] }, function () { });
        chrome.storage.sync.set({ status: arrInput[26] }, function () { });
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.color === "green") {
        document.body.style.backgroundColor = "green";
        sendResponse({ status: "done" });
    }
});
