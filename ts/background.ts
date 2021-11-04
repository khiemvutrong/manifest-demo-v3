chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.text == "getStuff")
        sendResponse({type:"test"});
});
