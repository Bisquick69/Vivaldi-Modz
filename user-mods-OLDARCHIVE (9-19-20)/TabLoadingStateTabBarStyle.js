function initReloadObserver() {

  const browserDiv = document.getElementById('browser'),
        reloadButton = document.querySelector('.button-toolbar.reload');

  if(!browserDiv || !reloadButton) {
    setTimeout(initReloadObserver, 100);
    return;
  }

  const observer = new MutationObserver(mutationsList => {
    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if(mutation.target.classList.contains('loading')) {
          browserDiv.classList.add('active-tab-loading');
        }
        else {
          browserDiv.classList.remove('active-tab-loading');
        }
      }
    }
  });

  observer.observe(reloadButton, { attributes: true });
}

setTimeout(initReloadObserver, 0);