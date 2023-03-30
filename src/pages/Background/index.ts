// TODO: Test this. Needs to redirect to onboarding page
// on first install
chrome.runtime.onInstalled.addListener((object) => {
  let internalUrl = chrome.runtime.getURL('onboarding.html');

  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: internalUrl }, (_tab) => {
      console.log(`New tab launched with ${internalUrl}`);
    });
  }
});
