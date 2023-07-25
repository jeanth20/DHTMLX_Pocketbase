
$(document).ready(function () {

    ee = loadEvents();
    window.ee = ee;
    resource = new Object();
    ee.emit("initiateLogin");
    //ee.emit("initiateHomepage");

});

function loadEvents() {
    ee = new EventEmitter();
    window.ee = ee;

    ee.on("initiateLogin", function (data) {

        const loginForm = new dhx.Form("loginform", {
            css: "dhx_widget--bg_white dhx_layout-cell--bordered",
            padding: 40,

            rows: [
                {
                    type: "container",
                    name: "container",
                },
                {
                    type: "text",
                    name: "login Form",
                    label: "Login",
                    value: "dhtmlx7.local"
                },
                {
                    type: "input",
                    id: "username",
                    name: "username",
                    label: "Username",
                    icon: "mdi mdi-account",
                    placeholder: "Username",
                    required: "true",
                },
                {
                    type: "input",
                    id: "password",
                    name: "password",
                    inputType: "password",
                    icon: "mdi mdi-eye-off",
                    label: "Password",
                    placeholder: "********",
                    required: "true",
                },
                {
                    css: "center-button",
                    cols: [
                        {
                            type: "button",
                            id: "login",
                            name: "login",
                            text: "Login",
                            size: "large",
                            view: "link",
                            circle: "true",
                            full: "true",
                            submit: true,
                            color: "primary",
                        },
                        {
                            type: "button",
                            id: "forgot_password",
                            name: "forgot_password",
                            text: "Forgot Password",
                            size: "medium",
                            view: "link",
                            circle: "true",
                            full: "true",
                            submit: true,
                            color: "secondary",
                        },
                        {
                            type: "button",
                            id: "signup",
                            name: "signup",
                            text: "Sign up",
                            size: "large",
                            view: "link",
                            circle: "true",
                            full: "true",
                            submit: true,
                            color: "secondary",
                        },
                    ],
                },
            ]
        })

        // const html = "<img class ='center-image' src='/codebase/icons/EtivaLeaf2.png' style='height: 50px; width:60px;'>";
        // loginForm.getItem("container").attachHTML(html);
        
        loginForm.events.on("click", function (id) {
            if (id == 'login') {
                var username = $("#username").val();
                var password = $("#password").val();
                if
                    (!username) {
                    Error("You Must Supply a Username to use this Service", "error");
                } else {
                    if (!password) {
                        Error("You Must Supply a Password to use this Service", "error");
                    } else {
                        var request = new Object();
                        request.url = "/user/login";
                        request.username = username;
                        request.password = password;
                        sendData(request, "processLogin");
                    }
                }
            } else if (id == 'forgot_password') {
                Error('Function not yet available', "error");
                ee.emit("eventToggle");
                $("#loginform").show();
                //ee.emit("initiatelogin");
            } else if (id == 'signup') {
                ee.emit("eventToggle");
                $("#signupform").show();
                ee.emit("initiatesignup");
            }
        });

    });
    
    ee.on("processLogin", function (data) {

        var session = data.data.session_key;
        if (session) {

            resource.uid = data.data.user_profile_id;
            resource.username = data.data.username;
            resource.name = data.data.first_name;
            resource.surname = data.data.last_name;
            resource.session_key = data.data.session_key;
            resource.rights = data.data.rights;
            resource.terms = data.data.terms_conditions;
            resource.active = data.data.is_active;
            resource.birthdate = data.data.birthdate;
            resource.id_number = data.data.id_number;
            resource.contact = data.data.contact_details;
            resource.alt_contact = data.data.alt_contact_details;
            resource.email = data.data.email;

            console.table(resource);
            ee.emit("eventToggle");
            $("#layout").show();
            Error('Welcome back, ' + resource.name, "success");
            ee.emit("initiateHomepage");

            // var request = new Object();
            // request.url = "/provider/types";
            // sendData(request,"post_provider_types");

        } else {
            Error("Login failed to return a valid session", "error");
            ee.emit("showLogin");
        }

        // if (data.status == "error") {
        //     Error(data.data.error, "Login Error", "1");
        // }
        // if (data.status == "success") {
        //     ee.emit("eventToggle");
        //     $("#layout").show();
        //     $("#sidebar").show();
            
        //     Error('Welcome back, ' + data.data.first_name + ' ' + data.data.last_name);
        //     ee.emit("initiateHomepage");

        //     window.data = new Object;
        //     window.data = data.data;
        //     var data = data.data;
        //     console.table(window.data);
        // }
    });

    ee.on("initiatesignup", function (data) {
        const signupForm = new dhx.Form("signupform", {
            css: "dhx_widget--bg_white dhx_layout-cell--bordered",
            padding: 40,
            rows: [
                {
                    type: "text",
                    name: "signup Form",
                    label: "Sign up",
                    value: "Dont have an account, sign up now"
                },
                {
                    type: "input",
                    id: "firstName",
                    label: "First Name",
                    value: "",
                    placeholder: "First Name",
                    validation: function (value) {
                        return value && value.length >= 4;
                    },
                    errorMessage: "Invalid Name",
                    successMessage: "Correctly",
                    preMessage: ""
                },
                {
                    type: "input",
                    id: "lastName",
                    label: "Last Name",
                    value: "",
                    placeholder: "Last Name",
                    validation: function (value) {
                        return value && value.length >= 4;
                    },
                    errorMessage: "Invalid Name",
                    successMessage: "Correctly",
                    preMessage: ""
                },
                {
                    type: "input",
                    id: "contactDetails",
                    label: "Contact Details",
                    placeholder: "Cellphone Number",
                    validation: function (value) {
                        return value && value.length == 10;
                    },
                    errorMessage: "Invalid Number",
                    successMessage: "Valid Number",
                    validation: "numeric",
                },
                {
                    type: "input",
                    id: "emailAddress",
                    label: "Email Address",
                    placeholder: "Email address",
                    errorMessage: "Invalid Email",
                    successMessage: "Valid Email",
                    validation: "email",
                },
                {
                    type: "input",
                    id: "user_password",
                    label: "Password",
                    placeholder: "Password",
                    errorMessage: "Invalid Password",
                    successMessage: "Valid Password",
                    validation: "alphanumeric",
                },
                {
                    type: "input",
                    id: "confirm_password",
                    label: "Confirm Password",
                    placeholder: "Confirm Password",
                    errorMessage: "Invalid Password",
                    successMessage: "Valid Password",
                    validation: "alphanumeric",
                },
                {
                    css: "center-button",
                    cols: [
                        {
                            type: "button",
                            id: "signup",
                            name: "signup",
                            text: "Sign up",
                            size: "large",
                            view: "link",
                            circle: "true",
                            full: "true",
                            submit: true,
                            color: "primary",
                        },
                        {
                            type: "button",
                            id: "login",
                            name: "login",
                            text: "Login",
                            size: "large",
                            view: "link",
                            circle: "true",
                            full: "true",
                            submit: true,
                            color: "secondary",
                        },
                    ],
                },
            ]
        })

        signupForm.events.on("click", function (id) {
            if (id == 'signup') {

                var firstName = $("#firstName").val();
                var lastName = $("#lastName").val();
                var contactDetails = $("#contactDetails").val();
                var emailAddress = $("#emailAddress").val();
                var user_password = $("#user_password").val();
                var confirm_password = $("#confirm_password").val();

                if (user_password != confirm_password) {
                    Error("Passwords dont match");
                    Error("Please ensure passwords match");
                } else {
                    var request = new Object();
                    request.url = "/user/signup";
                    request.firstName = firstName;
                    request.lastName = lastName;
                    request.contactDetails = contactDetails;
                    request.emailAddress = emailAddress;
                    request.password = confirm_password;
                    sendData(request, "processsignup");
                }
            } else if (id == 'login') {
                window.location = "index.html";
            }
        });

    });

    ee.on("processsignup", function (data) {
        if (data.status == "error") {
            Error(data.data.error, "Sign up Error", "1");
        }
        if (data.status == "success") {
            MessageAlert("Signup Successful.<br>Please check your email for your Username");
            //ee.emit("initiateLogin");window.location = "index.html",
        }
    });


    ee.on("initiateHomepage", function (data) {
        const layout = new dhx.Layout("layout", {
            type: "line",
            rows: [
                {
                    id: "toolbar",
                    //header: "Header",
                    //collapsable: true,
                    height: "55px",
                    //resizable: true
                },
                {
                    cols: [
                        {
                            id: "sidebar",
                            //collapsable: true,
                            resizable: false,
                            expand: true,
                            width: "content"
            
                        },
                        {
                            id: "content",
                            header: "",
                            html: "<h2>This is where the Content goes</h2>",
                            //width: "content"
                        },
                    ]
                },
                {
                    id: "footer",
                    //header: "Footer",
                    //collapsable: true,
                    height: "55px"
                }
            ]
        });
   
       const logoSVG = document.getElementById("sample_logo").innerHTML;
   
           const structure = [
            {
                "id": "menu",
                "type": "button",
                "view": "link",
                "circle": true,
                "color": "secondary",
                "icon": "mdi mdi-menu",
                "tooltip": "Menu",
                    items: [
                    { 
                        id: "dashboard", 
                        value: "Dashboard", 
                        icon: "mdi mdi-view-dashboard" 
                      },
                      {
                        id: "statistics",
                        value: "Statistics",
                        icon: "mdi mdi-chart-line"
                      },
                      {
                        id: "reports",
                        value: "Reports",
                        icon: "mdi mdi-file-chart"
                      },
                      { 
                        type: "separator" 
                      },
                      { 
                        id: "newsfeed", 
                        value: "News Feed",
                        icon: "mdi mdi-folder-multiple-image"
                      },
                      { 
                        id: "documentation",
                        value: "Documentation and Forms",
                        icon: "mdi mdi-file-outline",
                        items: [
                          {
                            id: "newform",
                            value: "New Form",
                            icon: "mdi mdi-plus",
                            items: [
                                {
                                  id: "newintake",
                                  value: "intake",
                                  icon: "mdi mdi-file-outline"
                                },
                                {
                                  id: "newweekendout",
                                  value: "Weekend Out",
                                  icon: "mdi mdi-file-outline"
                                },
                                {
                                    id: "newcourtorder",
                                    value: "Court Order",
                                    icon: "mdi mdi-file-outline" 
                                },
                                {
                                    id: "newdischarge",
                                    value: "Discharge",
                                    icon: "mdi mdi-file-outline" 
                                },
                                {
                                  id: "newtermination",
                                  value: "Termination",
                                  icon: "mdi mdi-file-outline" 
                                }
                              ]
                          },
                          {
                            id: "viewform",
                            value: "View My Forms",
                            icon: "mdi mdi-file-outline",
                            items: [
                                {
                                  id: "intake",
                                  value: "intake",
                                  icon: "mdi mdi-file-outline"
                                },
                                {
                                  id: "weekendout",
                                  value: "Weekend Out",
                                  icon: "mdi mdi-file-outline"
                                },
                                {
                                    id: "courtorder",
                                    value: "Court Order",
                                    icon: "mdi mdi-file-outline" 
                                },
                                {
                                    id: "discharge",
                                    value: "Discharge",
                                    icon: "mdi mdi-file-outline" 
                                },
                                {
                                  id: "termination",
                                  value: "Termination",
                                  icon: "mdi mdi-file-outline" 
                                }
                              ]
                          },
                        ]
                      },
                    //   { 
                    //     id: "posts", 
                    //     value: "Posts", 
                    //     icon: "mdi mdi-square-edit-outline",
                    //     items: [
                    //       {
                    //         id: "addPost",
                    //         value: "New Post",
                    //         icon: "mdi mdi-plus"
                    //       },
                    //       {
                    //         id: "allPost",
                    //         value: "Posts",
                    //         icon: "mdi mdi-view-list"
                    //       },
                    //       {
                    //         id: "categoryPost",
                    //         value: "Category",
                    //         icon: "mdi mdi-tag" 
                    //       }
                    //     ]
                    //   },
                    //   { 
                    //     id: "messages", 
                    //     value: "Messages", 
                    //     count: 18, 
                    //     icon: "mdi mdi-email-mark-as-unread"
                    //   },
                    //   { 
                    //     id: "links", 
                    //     value: "Links",
                    //     icon: "mdi mdi-link"
                    //   },
                    //   { 
                    //     id: "comments", 
                    //     value: "Comments",
                    //     icon: "mdi mdi-comment-multiple-outline",
                    //     count: "118",
                    //     countColor: "primary",
                    //     items: [
                    //       { 
                    //         id: "myComments", 
                    //         value: "My Comments",
                    //         count: 15,
                    //         icon: "mdi mdi-account",
                    //       },
                    //       { 
                    //         id: "allComments", 
                    //         value: "All Comments",
                    //         count: 103,
                    //         countColor: "primary",
                    //         icon: "mdi mdi-comment-multiple-outline",
                    //       },
                    //     ] 
                    //   },
                    //   { 
                    //     type: "spacer"
                    //   },
                    //   { 
                    //     id: "notification", 
                    //     value: "Notification", 
                    //     count: 25, 
                    //     icon: "mdi mdi-bell", 
                    //     countColor: "primary" 
                    //   },
                    //   { 
                    //     id: "configuration",
                    //     value: "Configuration", 
                    //     icon: "mdi mdi-settings",
                    //     items: [
                    //       { 
                    //         id: "myAccount", 
                    //         value: "My Account",
                    //         icon: "mdi mdi-account-settings"
                    //       },
                    //       { 
                    //         id: "general", 
                    //         value: "General Configuration",
                    //         icon: "mdi mdi-tune"
                    //       }
                    //     ]
                    //   },
                      {
                        value: "log out",
                        id: "logout"
                      }
                    ]
            },
            {
                type: "spacer"
            },
            {
                type: "customHTML",
                html: logoSVG,
                css: "logo-container"
            },
            {
                type: "spacer"
            },
            // {
            //     id: "avatar",
            //     type: "imageButton",
            //     src: "https://snippet.dhtmlx.com/codebase/data/toolbar/01/img/avatar-01.png",
            //     tooltip: "profile",
            //     count: 10,
            //     items: [
            //         {
            //             id: "setting",
            //             value: "settings",                   
            //             icon: "mdi mdi-cog",
            //             tooltip: "Setting",
            //             "type": "button",
            //             "view": "link",
            //             "color": "secondary",
            //             "circle": true,
            //         },
            //         {
            //             type: "button",
            //             value: "private messages",
            //             count: 10
            //         },
            //         {
            //             value: "log out",
            //             id: "logout"
            //         }
            //     ]
            // },
        ]


            // Toolbar initialization
            const toolbar = new dhx.Toolbar(null, {
                css: "dhx_widget--border_bottom"

            });
            // loading structure into Toolbar
            toolbar.data.parse(structure);

            // attaching Toolbar into a Layout cell
            layout.getCell("toolbar").attach(toolbar);

            toolbar.events.on("click", function (id, e) {

                if (id == "dashboard") {
                    console.log(id);
                    $("#content").empty();
                    $("#content").css('margin-top', '-50px');

                    const content = new dhx.Layout("content", {
                        type: "space",
                        rows: [
                            {
                                id: "grid",
                                //height: "100%",
                                height: "800px",
                                width: "100%",
                            },
                        ]
                    });

                    const dataset = new dhx.DataCollection();

                    
                    const grid = new dhx.Grid(null, {
                        columns: [
                            { id: "server", header: [{ text: "Server" },
                            {
                                content: "comboFilter",
                                customFilter: (value, match) => value.length === match.length
                            }], gravity: 1.5 },
                            { width: 400, id: "uptime", header: [{ text: "Uptime" },
                            { 
                                content: "comboFilter",
                                customFilter: (value, match) => value.length === match.length
                            }],},
                            { width: 100, id: "dahdi", header: [{ text: "dahdi" },
                            { 
                                content: "comboFilter",
                                customFilter: (value, match) => value.length === match.length
                            }], },
                            { width: 100, id: "vicidial", header: [{ text: "vicidial" },
                            { 
                                content: "comboFilter",
                                customFilter: (value, match) => value.length === match.length
                            }], },
                            { width: 100, id: "chronyd", header: [{ text: "chronyd" },
                            { 
                                content: "comboFilter",
                                customFilter: (value, match) => value.length === match.length
                            }], },
                            { id: "checked_at", header: [{ text: "Last Checked" },
                            {
                                content: "comboFilter",
                                customFilter: (value, match) => value.length === match.length
                            }], }
                        ],
                    //headerRowHeight: 50,
                    autoWidth: true,
                    css: "alternate_row",
                    data: dataset,
                    });
                    content.getCell("grid").attach(grid);
                    
                    var gridd = sendData(request);
                    var request = new Object();
                    request.url = "/user/dialer_grid";
                    console.log(request);
                    dataset.load(gridd);

                }

                if (id == "statistics") {
                    console.log(id);
                    $("#content").empty();

                }

                if (id == "reports") {
                    console.log(id);
                    $("#content").empty();

                }

                if (id == "account") {
                    console.log(id);
                    $("#content").empty();

                }

                if (id == "") {
                    console.log(id);
                }

                if (id == "logout") {
                    console.log(id);
                    window.location = "index.html";
                }
            });

    });


    //$("#div_k").load("/api/mobi/eoiStatus?oid="+window.data.objectId);









    ee.emit("contentClear", function(){
        $("#content").empty();
    });

    ee.on("eventToggle", function () {
        $("#loginform").hide();
        $("#forgotpasswordform").hide();
        $("#signupform").hide();
        $("#layout").hide();
    });

    //End of LoadEvents
    // This must be the last thing... return the events
    return ee;

}



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
        expire: 3000,
        css: css,
        icon: "dxi-close"
    });
}

//Screen Sizing
// Size the background image against screen size
// Needs some work
window.onload = screenSize;
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

//Create Cookie and Session ID
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function checkCookie() {
    var username = $("#username").val();
    let user = getCookie(username);
    if (user != "") {
        alert("Welcome again " + user);
        console.log("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
            console.log("username", user, 365);
        }
    }
}
