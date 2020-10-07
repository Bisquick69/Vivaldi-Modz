setTimeout(function reindentTabs() {
    let tabs = document.querySelectorAll('.tab-position > .tab');
    let totalIndent = 0;
    tabs.forEach((tab) => {
        if (tab.classList.contains('pinned'))
            tab.parentElement.style.width = '160px';
        tab.parentElement.style.left = totalIndent.toString() + 'px';
        let width = tab.parentElement.style.width;
        totalIndent += width ? parseInt(width) : 180;
    });
    setTimeout(reindentTabs, 500);
}, 500);