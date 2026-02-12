const inputURL = document.getElementById("url");
const resultURL = document.getElementById("result-url");

async function sendURL() {
	const response = await fetch("/url", {
		method: "POST",
		body: JSON.stringify({
			target_url: inputURL.value,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const json = await response.json();
	if (json.url) {
		resultURL.innerText = json.url;
		resultURL.href = json.url;
		document.getElementById("result-container").style.display = "block";
	}

	inputURL.value = "";
	inputURL.focus();
}
