const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// The BeforeInstallPromptEvent is fired at the Window.onbeforeinstallprompt handler before a user is prompted to "install" a web site to a home screen on mobile.
// This interface inherits from the Event interface.
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
// The appinstalled event of the Web Manifest API is fired when the browser has successfully installed a page as an application.
window.addEventListener('appinstalled', (event) => { 
    console.log('👍', 'appinstalled', event);
});
