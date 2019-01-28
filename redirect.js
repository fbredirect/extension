checkUrl(window.location.href);

function checkUrl(url) {
	if (!url.includes("facebook.com")) {
		return 
	}

	let accepted = [
		"/events",
		"/messages",
		"/groups",
		"/pages"
	];
	let block = true;
	accepted.forEach(a => {
		if (url.includes(a))
			block = false;
	});
	if (block) {
		window.location = "http://fbredirect.github.io/";
	}
}
