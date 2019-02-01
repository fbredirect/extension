var enabled, accepted;

checkUrl();

function checkUrl() {
	let url = window.location.href;

	if (url.includes("facebook.com")) {
		chrome.runtime.sendMessage({dest: "bg"}, function(response) {
			//console.log("response from bg:", response);
			enabled = response.enabled;
			accepted = response.accepted;
		
			if (enabled && accepted) {
				redirect(url, accepted);
			}
		});
	}	
}

function redirect(url, accepted) {
	var block = true;
	accepted.forEach(a => {
		if (url.includes(a))
			block = false;
	});
	if (block) {
		window.location = "http://fbredirect.github.io/";
	}
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    checkUrl();
	});