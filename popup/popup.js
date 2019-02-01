window.onload = function () {
	function updateLabel() {
		var enabled = chrome.extension.getBackgroundPage().enabled;
		document.getElementById('toggle_button').value = enabled ? "Disable" : "Enable";
	}
	function checkPage() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {dest: "redirect"}, function(response) {
				console.log("response from redirect", response);
			});
		});
	}

	document.getElementById('toggle_button').onclick = function () {
		var background = chrome.extension.getBackgroundPage();
		background.enabled = !background.enabled;
		updateLabel();
		if (background.enabled) {
			checkPage();
		}
	};
	updateLabel();
}