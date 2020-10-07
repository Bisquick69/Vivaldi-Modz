// Move download button to the addressbar
setTimeout(function wait () {
	var toolbar = document.querySelector("div.toolbar-addressbar.toolbar");

	if (toolbar != null) {

		var iconDiv = document.createElement('div');
		iconDiv.setAttribute("class", "button-toolbar");
		iconDiv.setAttribute("style", "order: 3; margin-right: 4px;");
		toolbar.appendChild(iconDiv);

		var downloadbutton = document.querySelector("button[title='Downloads']");
		iconDiv.appendChild(downloadbutton);
		downloadbutton.classList.add("button-toolbar");
		downloadbutton.innerHTML = '<svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11 6C11 5.44772 11.4477 5 12 5H14C14.5523 5 15 5.44772 15 6V10H19L13 16L7 10H11V6Z"></path><path d="M6 20C6 19.4477 6.44772 19 7 19H19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H7C6.44772 21 6 20.5523 6 20Z"></path></svg>';

	} else {
		setTimeout(wait, 300);
	}
}, 300);