$(document).ready(function () {

	Wins = new dhtmlXWindows("web");

	ee = loadEvents();
	window.addEventListener("resize", responsive);
	window.ee.emit("main_layout");
    ee.emit("home");

});

function loadEvents(){	
	ee = new EventEmitter();
	window.ee = ee;

    ee.on("main_layout",function(onLoad){
        mainlayout = new dhtmlXLayoutObject(document.body,"1C");
        mainlayout.cells("a").setText("");
        mainlayout.cells("a").hideHeader();
        
        var mainSidebar = mainlayout.cells("a").attachSidebar({
                parent: "sidebarObj",
                icons_path: "./codebase/icons/",
                template: "icons_text",
                width: 100,
                header: false,
                items: [
                    {id: "a", text: "Home", icon: "home.png", selected: true},
                    {id: "b", text: "Calender", icon: "schedule.png"},
                    {id: "c", text: "Phone Book", icon: "phonebook.png"},
                    {id: "d", text: "Forms & Docs", icon: "analytics.png"},
                    {id: "e", text: "Filing Cabnet", icon: "folder.png"},
                    {id: "f", text: "Email", icon: "email.png"},
                    {id: "g", text: "Tuckshop", icon: "palette.png"},
                    {id: "h", text: "Stats", icon: "clock.png"},
                    {id: "i", text: "Custom", icon: "customize.png"},
                    {id: "j", text: "Settings", icon: "settings.png"},

                ]
        })
        

        mainSidebar.attachEvent("onSelect",function(id){
            if(id=="a"){
                ee.emit("home");
            }else if (id=="b"){
                mainSidebar.cells("b").attachURL('./scheduler/samples/01_initialization_loading/01_basic_init.html');
                ee.emit("");
            }else if (id=="c"){
                ee.emit("phonebook");
 		 var Sidebar_two = mainSidebar.cells("c").attachSidebar({
                    parent: "sidebarObj",
                    icons_path: "./codebase/icons/",
                    template: "icons_text",
                    width: 80,
                    header: false,
                    items: [
                        {id: "a", text: "All", icon: "phonebook.png", selected: true},
                        {id: "b", text: "Add", icon: "plus.png"},
                        {id: "c", text: "Edit", icon: "customize.png"},
                        {id: "d", text: "Remove", icon: "remove.png"},
                    ]
                })
                mainSidebar.attachEvent("onSelect",function(id){
                    if(id=="a"){

                    }else if (id=="b"){

                    }else if (id=="c"){

                    }else if (id=="d"){

                    }
                })    
	    }else if (id=="d"){
                ee.emit("money");
            }else if (id=="e"){
                ee.emit("filingCabinet");
            }else if (id=="f"){
                ee.emit("email");
            }else if (id=="g"){
                mainSidebar.cells("g").attachHTMLString('');
            }else if (id=="h"){
                var Sidebar_two = mainSidebar.cells("h").attachSidebar({
                    parent: "sidebarObj",
                    icons_path: "./codebase/icons/",
                    template: "icons_text",
                    width: 80,
                    header: false,
                    items: [
                        {id: "a", text: "All", icon: "phonebook.png", selected: true},
                        {id: "b", text: "Add", icon: "plus.png"},
                        {id: "c", text: "Edit", icon: "customize.png"},
                        {id: "d", text: "Remove", icon: "remove.png"},
                    ]
                })
                mainSidebar.attachEvent("onSelect",function(id){
                    if(id=="a"){
        
                    }else if (id=="b"){
        
                    }else if (id=="c"){
        
                    }else if (id=="d"){
        
                    }
                })
            }else if (id=="i"){
                ee.emit("");
            }else if (id=="j")
                ee.emit("settings");
            })

        ee.on("settings",function(){
            var display = mainSidebar.cells("j").attachLayout("1C");
            display.cells("a").setText("Settings");
            display.cells("a").attachURL("");
        })
    
        ee.on("home",function(){
            var display = mainSidebar.cells("a").attachLayout("3T");
            display.cells("a").hideHeader();
            display.cells("b").hideHeader();
            display.cells("c").hideHeader();
    
            display.cells("a").setHeight("50%");

            display.cells("b").setWidth("50%");
            display.cells("b").setHeight("50%");
            display.cells("c").setWidth("50%");    
            display.cells("c").setHeight("50%");

            //display.cells("a").attachURL('');

            display.cells("b").attachHTMLString('<canvas id="myChartb" style="width:100%;max-width:700px"></canvas>')

            var xyValues = [
                {x:50, y:7},
                {x:60, y:8},
                {x:70, y:8},
                {x:80, y:9},
                {x:90, y:9},
                {x:100, y:9},
                {x:110, y:10},
                {x:120, y:11},
                {x:130, y:14},
                {x:140, y:14},
                {x:150, y:15}
              ];
              
              new Chart("myChartb", {
                type: "scatter",
                data: {
                  datasets: [{
                    pointRadius: 4,
                    pointBackgroundColor: "rgb(0,0,255)",
                    data: xyValues
                  }]
                },
                options: {
                  legend: {display: false},
                  scales: {
                    xAxes: [{ticks: {min: 40, max:160}}],
                    yAxes: [{ticks: {min: 6, max:16}}],
                  }
                }
              });
              
            display.cells("c").attachHTMLString('<canvas id="myChartc" style="width:100%;max-width:700px"></canvas>')
            
            var xValues = [100,200,300,400,500,600,700,800,900,1000];

            new Chart("myChartc", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{ 
                data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
                borderColor: "red",
                fill: false
                }, { 
                data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
                borderColor: "green",
                fill: false
                }, { 
                data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
                borderColor: "blue",
                fill: false
                }]
            },
            options: {
                legend: {display: false}
            }
            });


        
        })

        ee.on("phonebook",function(){
            var display = mainSidebar.cells("d").attachLayout("3T");
            display.cells("a").hideHeader();
            display.cells("b").hideHeader();
            display.cells("c").hideHeader();
    
            display.cells("a").setHeight("10%");

            display.cells("b").setWidth("50%");
            display.cells("b").setHeight("50%");
            display.cells("c").setWidth("50%");    
            display.cells("c").setHeight("50%");

        })

        ee.on("filingCabinet",function(){
            var Sidebar_two = mainSidebar.cells("e").attachSidebar({
                parent: "sidebarObj",
                icons_path: "./codebase/icons/",
                template: "icons_text",
                width: 100,
                header: false,
                items: [
                    {id: "ea", text: "a", icon: "favourite.png", selected: true},
                    {id: "eb", text: "b", icon: "favourite.png"},
                ]
            })
            mainSidebar.attachEvent("onSelect",function(id){
                if(id=="a"){
    
                }else if (id=="b"){
    
                }
            })
        })

        ee.on("email",function(){
            var Sidebar_two = mainSidebar.cells("f").attachSidebar({
                parent: "sidebarObj",
                icons_path: "./codebase/icons/",
                template: "icons_text",
                width: 100,
                header: false,
                items: [
                    {id: "fa", text: "Outpatient", icon: "fire.png", selected: true},
                    {id: "fb", text: "Rcvry", icon: "fire.png"},
                ]
            })
            mainSidebar.attachEvent("onSelect",function(id){
                if(id=="fa"){
                Sidebar_two.cells("a").attachURL("https://da11.domains.co.za/roundcube/?_task=login&_err=session");
                }else if (id=="fb"){
                mainSidebar.cells("f").attachHTMLString('<a href="https://da11.domains.co.za/roundcube/?_task=login&_err=session" target="blank"></a>');
                }
            })
        })

        ee.on("",function(){
            mainSidebar.cells("").attachURL('');
        })







        
    
    })


    
	// on change funtion to refresh call times count for call times page
	function change(){
		alert("Hello");
	}



    ee.on("PopupWinSearch",function(){
		Wins.createWindow("setwin","100","25","300","300");
		Wins.window("setwin").isModal(true);
		Wins.window("setwin").setText("Search");
		//Wins.window("setwin").centerOnScreen();
		sl = Wins.window("setwin").attachLayout("1C");
		sl.cells("a").hideHeader();
	})

    
    
    
    // example
	ee.on("PopupWin",function(){
		Wins.createWindow("setwin","100","25","800","600");
		Wins.window("setwin").isModal(true);
		Wins.window("setwin").setText("");
		Wins.window("setwin").centerOnScreen();
		sl = Wins.window("setwin").attachLayout("2U");
		sl.cells("a").hideHeader();
		sl.cells("b").hideHeader();
	})
    // example
    ee.on("baymax",function(){
        var display = mainSidebar.cells("a").attachLayout("3L");

        display.cells("a").hideHeader();
        display.cells("b").setText("Image");
        display.cells("c").setText("Details");

        display.cells("a").attachURL('./baymax/index.html');

        display.cells("b").setWidth("50%");
        display.cells("b").setHeight(400);
        display.cells("b").attachHTMLString('<div><img src="./baymax/img/baymax.jpg" style="height:100%; display: block; margin-left: auto; margin-right: auto; width: 50%;"></div>');

        display.cells("c").setWidth("50%");
        display.cells("c").setHeight(400);
    })


    	
	// This must be the last thing... return the events
	return ee;
}



    



function responsive(){
	if(Wins.isWindow("login")){
		Wins.window("login").centerOnScreen();
	}
}

window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

})

function sendData(request,callback){
	var url = request.url;
	// var session = resource.session_key;
	// request.session_key = session;
	var string = JSON.stringify(request);

	//console.log("SEND DATA: "+string);
	$.post(url, request, function() {
		//console.log("SendData: "+url+"Succeeded");
	},"json")
	.done(function(response) {
		//console.log("SendData: "+url+" Callback:"+callback);
		if(response.status == "error"){
			Error(response.data.error);
		}else{
			window.ee.emit(callback,response.data);
		}
	})
	.fail(function() {
		if(callback == "post_poll_alerts"){
			alert("A Communication Error Occurred while Checking for Alerts, Please login again.");
			location.reload();
		}else{
			Error( "A Communication Error Occurred While Sending Data to the Server "+url );
		}
	});
}

function Error(err,tit){
	if(!tit){
		tit = "System Error";
	}
	dhtmlx.alert({
    		title:tit,
    		type:"alert-error",
    		text:err
	});
	console.log("ERROR: "+tit+" "+err);
}

function msg(data){
	dhtmlx.message(data);
}
