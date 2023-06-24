window.addEventListener('load', (event) => {
    let httpsElements = document.getElementsByClassName('js-clone-url-http');
    let sshElements = document.getElementsByClassName('js-clone-url-ssh');
  
    for(let element of httpsElements) {
      let cloneUrl = element.getAttribute('value');
      if (!cloneUrl.startsWith('git clone ')) {
        let newCloneUrl = 'git clone ' + cloneUrl;
        element.setAttribute('value', newCloneUrl);
        element.parentNode.previousElementSibling.value = newCloneUrl;
      }
    }
  
    for(let element of sshElements) {
      let cloneUrl = element.getAttribute('value');
      if (!cloneUrl.startsWith('git clone ')) {
        let newCloneUrl = 'git clone ' + cloneUrl;
        element.setAttribute('value', newCloneUrl);
        element.parentNode.previousElementSibling.value = newCloneUrl;
      }
    }
  });
  
  document.addEventListener('copy', (event) => {
    let target = event.target;
    if (target.classList.contains('js-clone-url-http') || target.classList.contains('js-clone-url-ssh')) {
      event.preventDefault();
      event.clipboardData.setData('text/plain', target.getAttribute('value'));
    }
  });
  