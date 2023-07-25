
function(a){
    if(r.attachHTMLString!=null&&typeof(a.xmlDoc.responseText)=="string")
    {r.attachHTMLString("<div style='position:relative;width:100%;height:100%;overflow:auto;'>"+a.xmlDoc.responseText+"</div>");
    if(typeof(r._doOnFrameContentLoaded)=="function"){
        r._doOnFrameContentLoaded()}r.dataType="url-ajax"}r=a=null})
    }else{this.conf.url_data.xml_doc=dhx4.ajax.get(c,function(a){
        if(r.attachHTMLString!=null&&typeof(a.xmlDoc.responseText)=="string"){
            r.attachHTMLString("<div style='position:relative;width:100%;height:100%;overflow:auto;'>"+a.xmlDoc.responseText+"</div>");
            if(typeof(r._doOnFrameContentLoaded)=="function"){
                r._doOnFrameContentLoaded()}r.dataType="url-ajax"}r=a=null})}
            }else{
                if(this.dataType=="url"){var l=this.getFrame()
                }else{
                    var l=document.createElement("IFRAME");
                    l.frameBorder=0;
                    l.border=0;
                    l.style.width="100%";
                    l.style.height="100%";
                    l.style.position="relative";
                    this._attachObject(l);
                    this.dataType="url";
                    this._attachURLEvents()}
                    if(h){
                        var n=(typeof(this.conf.url_data.post_ifr)=="undefined");
                        this.conf.url_data.post_ifr=true;
                        if(n){this._attachURLEvents()}l.src="about:blank"
                    }else{
                        l.src=c+window.dhx4.ajax._dhxr(c)}l=null}l=null};
                    dhtmlXCellObject.prototype.reloadURL=function(){
                        if(!(this.dataType=="url"||this.dataType=="url-ajax")){
                            return
                        }
                        if(this.conf.url_data==null){
                            return
                        }this.attachURL(this.conf.url_data.url,this.conf.url_data.ajax,this.conf.url_data.post_data)};
                        dhtmlXCellObject.prototype.attachHTMLString=function(str){
                            this._attachObject(null,null,str);
                            var z=str.match(/<script[^>]*>[^\f]*?<\/script>/g)||[];
                            for(var i=0;i<z.length;i++){var s=z[i].replace(/<([\/]{0,1})script[^>]*>/gi,"");
                            if(s){if(window.execScript){window.execScript(s)}else{window.eval(s)}}}};
                            dhtmlXCellObject.prototype.attachScheduler=function(a,l,c,g){g=g||window.scheduler;
                                var h=false;if(c){var j=document.getElementById(c);if(j){h=true}}
                                if(!h){var e=c||'<div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>';
                                var j=document.createElement("DIV");
                                j.id="dhxSchedObj_"+new Date().getTime();
                                j.style.width="100%";j.style.height="100%";
                                j.style.position="relative";
                                j.style.overflow="hidden";
                                j.className="dhx_cal_container";
                                j.innerHTML='<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div>'+e+'</div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>'}
                                this._attachObject(j);
                                this.dataType="scheduler";
                                this.dataObj=g;
                                this.dataObj.setSizes=function(){
                                    this.update_view()};
                                    g.init(j.id,a,l);
                                    j=null;this.callEvent("_onContentAttach",[]);return this.dataObj};
                                    dhtmlXCellObject.prototype.attachMap=function(a){var c=document.createElement("DIV");
                                    c.style.width="100%";
                                    c.style.height="100%";
                                    c.style.position="relative";
                                    c.style.overflow="hidden";
                                    this._attachObject(c);
                                    if(!a){a={center:new google.maps.LatLng(40.719837,-73.992348),zoom:11,mapTypeId:google.maps.MapTypeId.ROADMAP}
                                    }this.dataType="maps";
                                    this.dataObj=new google.maps.Map(c,a);
                                    this.dataObj.setSizes=function(){google.maps.event.trigger(this,"resize")};
                                    c=null;
                                    this.callEvent("_onContentAttach",[]);
                                    return this.dataObj};
                                    dhtmlXCellObject.prototype._createNode_sb=function(m,g,l,a,j){
                                        if(typeof(j)!="undefined"){m=j
                                        }else{
                                            var c=g||{};
                                            var n=(typeof(c.text)=="string"&&c.text.length>0?c.text:"&nbsp;");
                                            var e=(typeof(c.height)=="number"?c.height:false);
                                            var m=document.createElement("DIV");
                                            m.className="dhx_cell_statusbar_def";
                                            m.innerHTML="<div class='"+(c.paging==true?"dhx_cell_statusbar_paging":"dhx_cell_statusbar_text")+"'>"+n+"</div>";
                                            if(e!=false){
                                                m.firstChild.style.height=m.firstChild.style.lineHeight=e+"px"
                                            }
                                        }
                                        if(this.conf.idx.pr1!=null){
                                            this.cell.insertBefore(m,this.cell.childNodes[this.conf.idx.pr1])
                                        }else{
                                            this.cell.appendChild(m)}
                                            this.conf.ofs_nodes.b.sb=true;
                                            this._updateIdx();
                                            this._adjustCont(this._idd);
                                            return m};
                                            dhtmlXCellObject.prototype.attachStatusBar=function(a){
                                                if(this.dataNodes.sb){
                                                    return
                                                }
                                                if(a!=null&&window.dhx4.s2b(a.paging)==true){
                                                    a.height=null
                                                }
                                                if(this.conf.skin=="dhx_skyblue"&&typeof(window.dhtmlXWindowsCell)=="function"&&this instanceof window.dhtmlXWindowsCell){
                                                    this.cell.childNodes[this.conf.idx.cont].className+=" dhx_cell_statusbar_attached"
                                                }
                                                this.dataNodes.sb=this._attachObject("sb",a);
                                                this.dataNodes.sb.setText=function(c){
                                                    this.childNodes[0].innerHTML=c};
                                                    this.dataNodes.sb.getText=function(){
                                                        return this.childNodes[0].innerHTML
                                                    };
                                                    this.dataNodes.sb.onselectstart=function(c){
                                                        return false
                                                    };
                                                    return this.dataNodes.sb
                                                };
                                                    dhtmlXCellObject.prototype.detachStatusBar=function(){
                                                        if(!this.dataNodes.sb){
                                                            return
                                                        }
                                                        if(this.conf.skin=="dhx_skyblue"&&typeof(window.dhtmlXWindowsCell)=="function"&&this instanceof window.dhtmlXWindowsCell){
                                                            this.cell.childNodes[this.conf.idx.cont].className=this.cell.childNodes[this.conf.idx.cont].className.replace(/\s{0,}dhx_cell_statusbar_attached/,"")
                                                        }
                                                        this.dataNodes.sb.setText=this.dataNodes.sb.getText=this.dataNodes.sb.onselectstart=null;
                                                        this.dataNodes.sb=null;delete this.dataNodes.sb;this._detachObject("sb")
                                                    };
                                                    dhtmlXCellObject.prototype.showStatusBar=function(){this._mtbShowHide("sb","")};
                                                    dhtmlXCellObject.prototype.hideStatusBar=function(){this._mtbShowHide("sb","none")};
                                                    dhtmlXCellObject.prototype._mtbShowHide=function(c,a){
                                                        if(!this.dataNodes[c]){
                                                            return
                                                        }
                                                        this.cell.childNodes[this.conf.idx[c]].style.display=a;
                                                        this._adjustCont()};dhtmlXCellObject.prototype.getFrame=dhtmlXCellObject.prototype._getFrame=function(){
                                                            if(this.dataType!="url"){
                                                                return null
                                                            } return this.cell.childNodes[this.conf.idx.cont].firstChild};
                                                            dhtmlXCellObject.prototype._attachURLEvents=function(){
                                                                if(this.dataType!="url"){
                                                                    return
                                                                }
                                                                var e=this;var c=this._idd;
                                                                var a=this.cell.childNodes[this.conf.idx.cont].firstChild;
                                                                if(typeof(this._doOnFrameMouseDown)!="function"){
                                                                    this._doOnFrameMouseDown=function(g){e.callEvent("_onContentMouseDown",[c,g||event])}
                                                                }
                                                                if(typeof(window.addEventListener)=="function"){
                                                                    a.onload=function(){try{if(typeof(e._doOnFrameMouseDown)=="function"){this.contentWindow.document.body.addEventListener("mousedown",e._doOnFrameMouseDown,false)}}catch(g){}try{if(typeof(e._doOnFrameContentLoaded)=="function"){e._doOnFrameContentLoaded()}}catch(g){}}}else{a.onreadystatechange=function(g){if(this.readyState=="complete"){try{if(typeof(e._doOnFrameMouseDown)=="function"){this.contentWindow.document.body.attachEvent("onmousedown",e._doOnFrameMouseDown)}}catch(h){}try{if(typeof(e._doOnFrameContentLoaded)=="function"){e._doOnFrameContentLoaded()}}catch(h){}}}}};dhtmlXCellObject.prototype._doOnFrameContentLoaded=function(){if(this.conf.url_data.post_ifr==true){var j=this.getFrame().contentWindow.document;var h=j.createElement("FORM");h.method="POST";h.action=this.conf.url_data.url;j.body.appendChild(h);var e={};if(window.dhx4.ajax.cache!=true){e["dhxr"+new Date().getTime()]="1"}for(var c in this.conf.url_data.post_data){e[c]=this.conf.url_data.post_data[c]}for(var c in e){var g=j.createElement("INPUT");







    // Print error 
    function Error(err){
        alert(err);
   }
   
   //login function
   function initiateLogin(data){
      //console.log("Login initiate");
       if($('#forgot').is(":checked")){
           var request = new Object();
           request.ino = $("#login_user").val();
           request.url = "/api/mobi/forgotPass";
           if(!request.ino){
               Error("You must Supply your ABN Code");
           }else{
               sendData(request,"passwordReset");
           }
       }else{
           var user = $("#login_user").val();
           var pass = $("#login_pass").val();
           if(!user){
               Error("You Must Supply a User Name to use this Service");
           }else{
               if(!pass){
                   Error("You Must Supply a Password to use this Service");
               }else{
                   var data = new Object();
                   data.url = "/api/mobi/login";
                   data.username = user;
                   data.password = pass;
                   $("#form").hide();
                   $("#processing").show();
                   sendData(data,"processLogin");
               }
           }
       }
   }

   function updateProfile(data){

    var ProfilePassVer = $("#ProfileNewpasswordVerify").val();
    var ProfileoldPass = $('ProfileOldpassword').val();

        if(window.data.password == ProfileoldPass){
            //var p2 = prompt("Confirm Password");
            if(p2 == data.value){
                var ses = resource.item("session");
                data.oid = ses.userObjectId;
                data.url="/api/mobi/updateProfile";
                sendData(data,"postUpdateProfile");
            }else{
                Error("Password Does Not Match");
                loadPage("profile");
            }
        }else{
            var ses = resource.item("session");
            data.oid = ses.userObjectId;
            data.url="/api/mobi/updateProfile";
            sendData(data,"postUpdateProfile");
        }
    }

    //window.data.objectId


    function loadEvents(){
        //console.log("Take Me To Your Leader!");
        ee = new EventEmitter();
        window.ee = ee;

        ee.on("authenticate",function(result){
            //console.log("Event: authenticate");
            if(!result.username){
                Error("You Must Supply A User Name to Login");
            }else{
                if(!result.password){
                    Error("You must Supply A Password to Login");
                }else{
                    result.url = "/abnAPI/ino/login.php";
                    sendData(result,"processLogin");
                }
            }	 
        });


    // This must be the last thing... return the events
    return ee;
}
        