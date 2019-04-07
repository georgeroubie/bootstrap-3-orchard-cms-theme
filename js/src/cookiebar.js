(function() {
    var message = 'WE USE COOKIES TO TRACK USAGE AND PREFERENCES';
    var acceptText = 'I UNDERSTAND';
    var acceptButton = '<a href="" class="cb-enable waves-effect waves-light btn">' + acceptText + '</a>';
    var policyText = 'READ MORE';
    var policyURL = '';
	var policyButton  = '<a href="' + policyURL + '" class="cb-policy waves-effect waves-light btn" target="_blank">' + policyText + '</a>';
	var COOKIE_ENTRY = 'cb-enabled={value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    var COOKIEBAR_HEIGHT = '30px';

    var retrieveCurrentCookiePreference = function() {
        var cookies = document.cookie.split('; ');
        var cookieValue = ''; 
        for (var i = 0; i < cookies.length; i++) {
            if(cookies[i].split('=')[0] === 'cb-enabled') {
                cookieValue = cookies[i].split('=')[1];
            }
        }
        return cookieValue;
    }

    var createCookieBar = function() {
        var cookieBar = document.createElement('div');
        cookieBar.id = 'cookie-bar';
		cookieBar.className = 'fixed bottom';
        cookieBar.innerHTML = message + acceptButton + (policyURL ? policyButton : '');
        document.body.appendChild(cookieBar);
    }

    var acceptCookiesEvent = function() {
        document.querySelector('#cookie-bar .cb-enable').addEventListener('click', function (event) {
            event.preventDefault();
            var el = document.querySelector('#cookie-bar');
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