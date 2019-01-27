checkUrl(window.location.href);

function checkUrl(fbUrl) {

	let accepted = [
		"/events",
		"/messages",
		"/groups",
		"/pages"
	];
	let block = true;
	accepted.forEach(a => {
		if (fbUrl.includes(a))
			block = false;
	});
	if (block) {
		window.location = "http://fbredirect.github.io/";
	}
		
}
