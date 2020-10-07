(function () {
    'use strict';

    function changeThemeColor (themeColor) {
        var metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', themeColor);
    }

    chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
        if (info.status === 'complete' && tab.url.startsWith('https://www.google.com')) {
            chrome.tabs.executeScript(tabId, { code: '(' + changeThemeColor + ')("#005500");' });
        }
    });
})();