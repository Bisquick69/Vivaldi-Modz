function toggleTabBar () {
	if (tabStrip.childNodes.length === 2) {
		// tabsContainer.style.height = "1px";
		tabsContainer.style.opacity = "0";
		tabsContainer.style.width = "0px";
		// newTab.style.position = "inherit";
		newTab.style.position = "absolute";
		// newTab.style.margin = "-8px 0 0 -5px"; - for NON-centered Tabz
		newTab.style.margin = "-10px 0px 1px 0px";
		tabStrip.style.height = "0";
		// addressBar.style.paddingTop = "30px";
		// addressBar.style.padding = "0px 0px 0px 4px";
		// TESTIEZ - Move bookmarkbar & addressBar to fill in tabbar empty space when removed
		//bookmarkbar.style.transform = "translateY(-30px)";
		//bookmarkbar.style.position = "absolute !important";
		//bookmarkbar.style.top = "0px !important";
		//addressBar.style.position = "fixed";
		//addressBar.style.top = "28px !important";
	} else {
		// tabsContainer.style.height = "30px";
		tabsContainer.style.opacity = "1";
		tabsContainer.style.width = "180px";
		// newTab.style.position = "absolute";
		// newTab.style.margin = "0";
		tabStrip.style.height = "30px";
		// addressBar.style.paddingTop = "0";
		// addressBar.style.padding = "25px 0 0 4px";
		// TESTIEZ - Restore orig bookmarkbar & addressBar to fill in tabbar empty space when 2+ tabz
		//bookmarkbar.style.top = "30px !important";
		//bookmarkbar.style.position = "fixed";
		//addressBar.style.position = "relative";
		//addressBar.style.top = "58px !important";
	}
}

function observeTabs () {
	toggleTabBar();
	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(toggleTabBar);
	});
	var observerConfig = {
		childList: true
	};
	observer.observe(tabStrip, observerConfig);
}

setTimeout(function wait () {
	// tabsContainer = document.querySelector(".tab-position");
	// tabsContainer = document.querySelector(
	// 	"#tabs-container > div.resize > div > span > div"
	// );
	tabsContainer = document.querySelector(".tab-position");
	tabStrip = document.querySelector(".tab-strip");
	newTab = document.querySelector(".newtab");
	// Trying to get newtab to be unselected
	// let throwawayNode = tabStrip.removeChild(".newtab");
	// ADDING constantz for css select0rz
	//bookmarkbar = document.getElementsByClassName("bookmark-bar");
	// addressBar = document.querySelector(".toolbar-addressBar");
	if (tabStrip) {
		observeTabs();
	} else {
		setTimeout(wait, 300);
	}
}, 300);