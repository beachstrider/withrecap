console.debug('background called');

chrome.runtime.onInstalled.addListener((object) => {
  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    let internalUrl = chrome.runtime.getURL('onboarding.html');
    chrome.tabs.create({ url: internalUrl }, (_tab) => {
      console.log(`New tab launched with ${internalUrl}`);
    });
  }
});
