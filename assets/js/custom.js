$(document).ready(function () {
    var cookieName = "theme_version";
    var user = getCookie(cookieName);
    if (user !== "") {
        $('#latest_version').html(user);
    } else {
        $.get('https://api.github.com/repos/digistlab/digist-theme/releases/latest', function (data) {
                $('#latest_version').html(data.tag_name);
                setCookie(cookieName, data.tag_name);
            }
        );
    }
})
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
