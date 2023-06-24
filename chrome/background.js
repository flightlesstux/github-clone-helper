chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^https:\/\/github\.com/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['contentScript.js']
        });
    }
});
