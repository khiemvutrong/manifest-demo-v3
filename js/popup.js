console.log('Popup Run');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("domSendContent").addEventListener("click", handlerGetContent);
    document.getElementById("domSetContent").addEventListener("click", handlerSetData);
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