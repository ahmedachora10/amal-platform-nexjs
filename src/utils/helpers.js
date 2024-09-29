
export function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    // Loop through the cookies array
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        // Remove leading spaces from the cookie name and check if it matches
        if (name === cookiePair[0].trim()) {
            // Return the cookie value
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if the cookie is not found
    return null;
}

export function CSRFHeader() {
    return {
        'X-CSRF-TOKEN': getCookie('XSRF-TOKEN'),
    }
}