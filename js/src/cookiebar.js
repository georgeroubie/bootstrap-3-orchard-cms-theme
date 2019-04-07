(function() {
    const message = 'WE USE COOKIES TO TRACK USAGE AND PREFERENCES';
    const acceptText = 'I UNDERSTAND';
    const acceptButton = `<a href="" class="cb-enable waves-effect waves-light btn">'${acceptText}</a>`;
    const policyText = 'READ MORE';
    const policyURL = '';
	const policyButton  = `<a href="'${policyURL}" class="cb-policy waves-effect waves-light btn" target="_blank">${policyText}</a>`;
	const COOKIE_ENTRY = 'cb-enabled={value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    const COOKIEBAR_HEIGHT = '30px';

    const retrieveCurrentCookiePreference = function() {
        const cookies = document.cookie.split('; '); 
        let cookieValue = ''; 
        for (let i = 0; i < cookies.length; i++) {
            if(cookies[i].split('=')[0] === 'cb-enabled') {
                cookieValue = cookies[i].split('=')[1];
            }
        }
        return cookieValue;
    }

    const createCookieBar = function() {
        let cookieBar = document.createElement('div');
        cookieBar.id = 'cookie-bar';
		cookieBar.className = 'fixed bottom';
        cookieBar.innerHTML = message + acceptButton + (policyURL ? policyButton : '');
        document.body.appendChild(cookieBar);
    }

    const acceptCookiesEvent = function() {
        document.querySelector('#cookie-bar .cb-enable').addEventListener('click', (event) => {
            event.preventDefault();
            const el = document.querySelector('#cookie-bar');
            document.cookie = COOKIE_ENTRY.replace('{value}', 'accepted');
            el.style['bottom'] = '-' + COOKIEBAR_HEIGHT;
            setTimeout(function() { el.parentNode.removeChild(el); }, 2000);
        }); 
    }

    if(retrieveCurrentCookiePreference() !== 'accepted') {
        createCookieBar();
        acceptCookiesEvent();
    }
}());