
$(document).ready(function () {
    resource = new Object();
});


// Senddata
function sendData(request, callback) {
    var url = request.url;
    var session = resource.session_key;
    request.session_key = session;
    var string = JSON.stringify(request);
    console.log("SEND DATA: " + string);
    $.post(url, request, function () {
        console.log("SendData: " + url + " Succeeded");
    })
        .done(function (response) {
            console.log("SendData: " + url + " Callback:" + callback);
            window.ee.emit(callback, response);
        })
        .fail(function () {
            Error("A Communication Error Occurred While Sending Data to the Server " + url);
        });
}

//Message Alert Handling
function MessageAlert(text) {
    dhx.alert({
        header: "DHTMLX Alert Box",
        text: text,
        buttonsAlignment: "center",
        buttons: ["okay"],
    }).then(function Page(i) {
        console.log('i', i);
        if (i == true){
            window.location = page;
        }else{

        }
   });
}

// Input Message Handling
function MessageResponse(text) {
    dhx.confirm({
        header: "DHTMLX Confirm Box",
        text: text,
    }).then(function (i) {
         console.log('i', i);
    });
}

//Error Handling
function Error(text, value) {
    if (value === "default") {
        css = "";
    } else {
        css = "dhx_message--" + value; // add css modifiers
    }
    //config.text = value.charAt(0).toUpperCase() + value.slice(1);
    dhx.message({
        text: text,
        expire: 30000,
        css: css,
        icon: "dxi-close"
    });
}

//Create Cookie and Session ID
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    const exMinutes = 10; // 1 minute
    d.setTime(d.getTime() + (exMinutes * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    //// Set the time to be the current time plus the number of days
    //d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    // Set SameSite and Secure attributes for cross-site compatibility
    let cookieOptions = "SameSite=None; Secure; " + expires + "; path=/";
    document.cookie = cname + "=" + cvalue + ";" + cookieOptions;
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function getToken(token) {
    const record = await pb.collection('access_via_token').getFirstListItem('token="'+token+'"');
    //console.table(record);
    if (record.valid === true) {
        if (record.created){
            const targetDate = new Date(record.created);
            const currentDate = new Date();
            const timeDifferenceMs = currentDate - targetDate;
            const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);
            // if the token is older than 10 minutes, then it is invalid
            // token expire
            if (timeDifferenceMinutes > 10) {
                const data = {"valid": false,};
                const record = await pb.collection('access_via_token').update(data);
                login()
            }
            return resource.username
        } else {
            login()
        }
    } else {
        login()
    }
}

function checkCookie() {
    const token = getCookie('token');
    if (token !== "") {
        getToken(token)
    } else {
        login()
    }
}
//add code to check for cookie on page load
//document.addEventListener('DOMContentLoaded', checkCookie);




// redirect to login page
function login() {
    window.location.href = 'http://127.0.0.1:8090/login.html';
}

// redirect to admin page
function admin() {
    window.location.href = 'http://127.0.0.1:8090/_/';
}





//Screen Sizing
// Size the background image against screen size
// Needs some work
//window.onload = screenSize;
function screenSize(){

    var w = $(window).width();
    var h = $(window).height();
    
    // $("#content").css('width', w);
    // console.log (w);
    // $("#content").css('height', h);
    // console.log (h);

    var theWindow = $(window),
    $bg = $("#backg"),
    aspectRatio = $bg.width() / $bg.height();

    function resizeBg() {
        if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $bg
                .removeClass()
                .addClass('backgheight');
        } else {
            $bg
                .removeClass()
                .addClass('backgwidth');
        }
    }
    theWindow.resize(resizeBg).trigger("resize");
    //what size is the viewport for nav toggle
    if (window.matchMedia("(max-width: 767px)").matches) {
        console.log("This is a mobile device.");
        //style="margin-right: 20px";
    } else {
        console.log("This is a tablet or desktop.");
    }
}