var enabled = true;

var accepted = [
  "/events",
  "/messages",
  "/groups",
  "/pages",
  "l.facebook"
];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    sendResponse({
      enabled,
      accepted
    });
  });