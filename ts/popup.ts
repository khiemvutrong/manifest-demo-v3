document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("domSendContent").addEventListener("click", handlerGetContent);
    document.getElementById("domSetContent").addEventListener("click", handlerSetData);
    document.getElementById("sendMessage").addEventListener("click", handlerSendMessage);
});

function handlerGetContent() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "readDom"});
    });
}

function handlerSetData() {
    chrome.storage.sync.get(['res'], function(result) {
        document.getElementById('res').innerText = result.res ? result.res : null;
    });
    chrome.storage.sync.get(['status'], function(result) {
        document.getElementById('status').innerText = result.status ? result.status : null;
    });
}

async function handlerSendMessage() {2
    let queryOptions = { active: true, currentWindow: true };
    let tab = await chrome.tabs.query(queryOptions);

    // chrome.tabs.sendMessage(tabs[0].id, {color: "#00FF00"}, function(response) {
    //     console.log(response.status);
    // });
}

/**
 *  Get TabId
 * @returns number
 */
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}