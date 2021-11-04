chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    if(request.action == "readDom"){
        const tagsH4 = document.getElementsByClassName("gridrow-input");
        const arrInput = (Array.from(tagsH4 || []).map((elt: any) => elt.value)).filter(elt => elt);
        chrome.storage.sync.set({res: arrInput[24]}, function() {});
        chrome.storage.sync.set({status: arrInput[26]}, function() {});
    }
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.color === "green") {
            document.body.style.backgroundColor = "green";
            sendResponse({status: "done"});
        }
    }
);