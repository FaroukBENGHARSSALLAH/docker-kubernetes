(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(157)},135:function(e,t,a){},137:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a.n(n),c=a(125),r=a.n(c),s=(a(132),a(119),a(135),a(137),a(58)),i=a(59),m=a(62),o=a(60),d=a(63),u=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(e){localStorage.removeItem("jwt"),localStorage.removeItem("expire");l.a.createElement("div",{className:"text-center",style:"padding-top: 10px;"},l.a.createElement("span",{className:"text-center grnvl"},"Logged out"));this.props.check(!0)}},{key:"render",value:function(){var e=this;return"jwt"in localStorage?l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Gallery"),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",onClick:function(){return e.logout()},href:"#"},"Logout")))):l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Gallery"))}}]),t}(n.Component),p=a(89),h=a.n(p),g=a(78),E=a(96),f=a(90),v=(a(158),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).timer=function(){},e.dispose=function(){},e.timer=e.timer.bind(Object(g.a)(Object(g.a)(e))),e.dispose=e.dispose.bind(Object(g.a)(Object(g.a)(e))),e.state={interval:setInterval(function(){return e.timer()},1e3)},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E.b("chartdiv",f.e);t.hiddenState.properties.opacity=0,t.padding(0,0,0,0),t.zoomOutButton.disabled=!0;var a=[],n=0,l=0;for(l=0;l<=30;l++)n=this.props.average-Math.round((Math.random()<.5?1:-1)*Math.random()*10),a.push({date:(new Date).setSeconds(l-30),value:n});var c=t.xAxes.push(new f.b);c.renderer.grid.template.location=0,c.renderer.minGridDistance=30,c.dateFormats.setKey("second","ss"),c.periodChangeDateFormats.setKey("second","[bold]h:mm a"),c.periodChangeDateFormats.setKey("minute","[bold]h:mm a"),c.periodChangeDateFormats.setKey("hour","[bold]h:mm a"),c.renderer.inside=!0,c.renderer.axisFills.template.disabled=!1,c.renderer.ticks.template.disabled=!1;var r=t.yAxes.push(new f.d);r.tooltip.disabled=!0,r.interpolationDuration=500,r.rangeChangeDuration=500,r.renderer.inside=!0,r.renderer.minLabelPosition=.05,r.renderer.maxLabelPosition=.95,r.renderer.axisFills.template.disabled=!1,r.renderer.ticks.template.disabled=!1;var s=t.series.push(new f.c);s.dataFields.dateX="date",s.dataFields.valueY="value",s.interpolationDuration=500,s.defaultState.transitionDuration=0,s.tensionX=.8;var i=t.titles.create();i.text="Changement de prix par temps",i.fontSize=25,i.marginBottom=30,c.interpolationDuration=500,c.rangeChangeDuration=500,s.fillOpacity=1;var m=new E.a;m.addColor(t.colors.getIndex(0),.2),m.addColor(t.colors.getIndex(0),0),s.fill=m,c.renderer.labels.template.adapter.add("fillOpacity",function(e,t){return t.dataItem.position}),c.events.on("validated",function(){E.c.each(c.renderer.labels.iterator(),function(e){e.fillOpacity=1})}),c.renderer.labels.template.adapter.add("rotation",function(e,t){var a=t.dataItem;return a.date&&a.date.getTime()===E.d.round(new Date(a.date.getTime()),"minute").getTime()?(t.verticalCenter="middle",t.horizontalCenter="left",-90):(t.verticalCenter="bottom",t.horizontalCenter="middle",0)});var o=s.createChild(f.a);o.circle.radius=5,o.fillOpacity=1,o.fill=t.colors.getIndex(0),o.isMeasured=!1,s.events.on("validated",function(){o.moveTo(s.dataItems.last.point),o.validatePosition()}),t.data=a,this.timer=function(){var a=e.props.average+Math.round((Math.random()<.5?1:-1)*Math.random()*5),n=s.dataItems.getIndex(s.dataItems.length-1);t.addData({date:new Date(n.dateX.getTime()+1e3),value:a},1)},this.dispose=function(){t.dispose()}}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval),this.timer()}},{key:"render",value:function(){return l.a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"300px"}})}}]),t}(n.Component)),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).ignore=function(e){e.preventDefault()},e.state={country:"USA",page:0,pages:0,size:0,cetft:"",cetf:null,content:"",etfs:[]},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://backend:8080/api/etfs/"+this.state.country+"/"+this.state.page).then(function(t){e.setState({etfs:t.data.data,pages:t.data.pages,size:t.data.size});var a=l.a.createElement("div",null,l.a.createElement("div",{className:"table-reponsive"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ticker"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Exchange"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,e.state.etfs.map(function(t,a){return l.a.createElement("tr",{key:t.ticker},l.a.createElement("td",null,t.ticker),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.exchange),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm",onClick:e.fetch.bind(e,t.ticker)},l.a.createElement("i",{className:"fa fa-check"}))))})))),l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination pagination-sm justify-content-end"},l.a.createElement("li",{className:"page-item disabled"},l.a.createElement("button",{className:"page-link"},l.a.createElement("i",{className:"fa fa-step-backward "}))),l.a.createElement("li",{className:"page-item disabled"},l.a.createElement("a",{className:"page-link",href:"#"},"0")),l.a.createElement("li",{className:"page-item"},l.a.createElement("button",{className:"page-link",onClick:e.fetchPage.bind(e,1)},l.a.createElement("i",{className:"fa fa-step-forward "}))))));e.setState({content:a})})}},{key:"onchange",value:function(e){var t=this;e.preventDefault(),this.state.country=e.target.value,this.state.page=0,h.a.get("http://localhost:8080/etfs/"+this.state.country+"/"+this.state.page).then(function(e){t.setState({etfs:e.data.data,pages:e.data.pages,size:e.data.size});var a=l.a.createElement("div",null,l.a.createElement("div",{className:"table-reponsive"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ticker"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Exchange"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,t.state.etfs.map(function(e,a){return l.a.createElement("tr",{key:e.ticker},l.a.createElement("td",null,e.ticker),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.exchange),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm",onClick:t.fetch.bind(t,e.ticker)},l.a.createElement("i",{className:"fa fa-check"}))))})))),l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination pagination-sm justify-content-end"},l.a.createElement("li",{className:0===t.state.page?"page-item disabled":"page-item"},l.a.createElement("button",{className:"page-link",onClick:0===t.state.page?t.ignore:t.fetchPage.bind(t,t.state.page-1)},l.a.createElement("i",{className:"fa fa-step-backward"}))),l.a.createElement("li",{className:"page-item disabled"},l.a.createElement("a",{className:"page-link",href:"#"},t.state.page)),l.a.createElement("li",{className:t.state.page===t.state.pages?"page-item disabled":"page-item"},l.a.createElement("button",{className:"page-link",onClick:t.state.page===t.state.pages?t.ignore:t.fetchPage.bind(t,t.state.page+1)},l.a.createElement("i",{className:"fa fa-step-forward"}))))));t.setState({content:a})})}},{key:"fetchPage",value:function(e){var t=this;this.state.page=e,h.a.get("http://localhost:8080/etfs/"+this.state.country+"/"+e).then(function(e){t.setState({etfs:e.data.data});var a=l.a.createElement("div",null,l.a.createElement("div",{className:"table-reponsive"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ticker"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Exchange"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,t.state.etfs.map(function(e,a){return l.a.createElement("tr",{key:e.ticker},l.a.createElement("td",null,e.ticker),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.exchange),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm",onClick:t.fetch.bind(t,e.ticker)},l.a.createElement("i",{className:"fa fa-check"}))))})))),l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination pagination-sm justify-content-end"},l.a.createElement("li",{className:0===t.state.page?"page-item disabled":"page-item"},l.a.createElement("button",{className:"page-link",onClick:0===t.state.page?t.ignore:t.fetchPage.bind(t,t.state.page-1)},l.a.createElement("i",{className:"fa fa-step-backward "}))),l.a.createElement("li",{className:"page-item disabled"},l.a.createElement("a",{className:"page-link",href:"#"},t.state.page)),l.a.createElement("li",{className:t.state.page===t.state.pages?"page-item disabled":"page-item"},l.a.createElement("button",{className:"page-link",onClick:t.state.page===t.state.pages?t.ignore:t.fetchPage.bind(t,t.state.page+1)},l.a.createElement("i",{className:"fa fa-step-forward "}))))));t.setState({content:a})})}},{key:"back",value:function(e){var t=this;e.preventDefault(),this.state.cetft="";var a=l.a.createElement("div",null,l.a.createElement("div",{className:"table-reponsive"},l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Ticker"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Exchange"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.state.etfs.map(function(e,a){return l.a.createElement("tr",{key:e.ticker},l.a.createElement("td",null,e.ticker),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.exchange),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm",onClick:t.fetch.bind(t,e.ticker)},l.a.createElement("i",{className:"fa fa-check"}))))})))),l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination pagination-sm justify-content-end"},l.a.createElement("li",{className:0===this.state.page?"page-item disabled":"page-item"},l.a.createElement("a",{className:"page-link",onClick:0===this.state.page?this.ignore:this.fetchPage.bind(this,this.state.page-1)},l.a.createElement("i",{className:"fa fa-step-backward "}))),l.a.createElement("li",{className:"page-item disabled"},l.a.createElement("a",{className:"page-link",href:"#"},this.state.page)),l.a.createElement("li",{className:this.state.page===this.state.pages?"page-item disabled":"page-item"},l.a.createElement("a",{className:"page-link",onClick:this.state.page===this.state.pages?this.ignore:this.fetchPage.bind(this,this.state.page+1)},l.a.createElement("i",{className:"fa fa-step-forward "}))))));this.setState({content:a})}},{key:"fetch",value:function(e){var t=this;this.setState({cetft:e}),h.a.get("http://localhost:8080/etf/"+e).then(function(e){t.setState({cetf:e.data});var a=l.a.createElement("div",null,l.a.createElement("div",{className:"float-right",style:{marginLeft:"10px"}},l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm",style:{marginRight:"15px"},onClick:t.back.bind(t)},l.a.createElement("i",{className:"fa fa-step-backward"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title float-left",style:{marginRight:"6px"}},t.state.cetf.ticker),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"float-left",style:{marginLeft:"5px"}},l.a.createElement("p",{className:"card-text"},"Name : ",t.state.cetf.name),l.a.createElement("p",{className:"card-text"},"Exchange : ",t.state.cetf.exchange),l.a.createElement("p",{className:"card-text"},"Country : ",t.state.cetf.country),l.a.createElement("p",{className:"card-text"},"Day Flow : ",l.a.createElement("span",{className:t.state.cetf.dayFlow>0?"grennvl":"redvl"}," ",t.state.cetf.dayFlow," ")," $ "),l.a.createElement("p",{className:"card-text"},"Week Flow : ",l.a.createElement("span",{className:t.state.cetf.weekFlow>0?"grennvl":"redvl"}," ",t.state.cetf.weekFlow," ")," $"),l.a.createElement("p",{className:"card-text"},"Year to date Flow : ",l.a.createElement("span",{className:t.state.cetf.ytdFlow>0?"grennvl":"redvl"}," ",t.state.cetf.ytdFlow," ")," $"),l.a.createElement("p",{className:"card-text"},"1 Year Flow : ",l.a.createElement("span",{className:t.state.cetf.y1Flow>0?"grennvl":"redvl"}," ",t.state.cetf.y1Flow," ")," $"),l.a.createElement("p",{className:"card-text"},"3 Year Flow : ",l.a.createElement("span",{className:t.state.cetf.y3Flow>0?"grennvl":"redvl"}," ",t.state.cetf.y3Flow," ")," $"))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement(v,{average:t.state.cetf.weekFlow})))))));t.setState({content:a})})}},{key:"render",value:function(){var e=this.props.ycountries.map(function(e,t){return l.a.createElement("option",{key:e.idx,value:e.idx},e.value)});return l.a.createElement("div",null,l.a.createElement("div",{className:"form-group float-right"},l.a.createElement("label",null,"Country"),l.a.createElement("select",{className:"form-control",onChange:this.onchange.bind(this)},e)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 col-lg-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},this.state.content))),l.a.createElement("div",{className:"col-md-1 col-lg-1"},"  "))))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={login:"",password:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(e){localStorage.setItem("jwt","jwt"),localStorage.setItem("expire","jwt"),this.props.check(!0)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row",style:{paddingTop:"15%"}},l.a.createElement("div",{className:"col-md-4 offset-md-1 col-sm-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("h3",{className:"panel-title text-center"},"Provide your credentials")),l.a.createElement("div",{className:"card-body"},l.a.createElement("fieldset",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",placeholder:"login",id:"login",type:"text",value:"",onChange:function(t,a){return e.setState({login:a})}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",placeholder:"password",id:"password",type:"password",value:"",onChange:function(t,a){return e.setState({password:a})}})),l.a.createElement("button",{className:"btn btn-lg btn-info btn-block",type:"button",onClick:function(){return e.login()}},"connect ",l.a.createElement("i",{className:"fa fa-check"}))))))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).check=function(t){e.setState({isChanged:t})},e.state={countries:[{idx:"USA",value:"USA"},{idx:"Germany",value:"Germany"},{idx:"France",value:"France"},{idx:"Australia",value:"Australia"},{idx:"Indonesia",value:"Indonesia"},{idx:"Canada",value:"Canada"},{idx:"Belgium",value:"Belgium"},{idx:"Argentina",value:"Argentina"},{idx:"United Kingdom",value:"United Kingdom"},{idx:"Malaysia",value:"Malaysia"},{idx:"Netherlands",value:"Netherlands"},{idx:"Switzerland",value:"Switzerland"},{idx:"Taiwan",value:"Taiwan"},{idx:"Norway",value:"Norway"},{idx:"Sweden",value:"Sweden"},{idx:"Denmark",value:"Denmark"},{idx:"Austria",value:"Austria"},{idx:"Brazil",value:"Brazil"},{idx:"Singapore",value:"Singapore"},{idx:"India",value:"India"},{idx:"Mexico",value:"Mexico"},{idx:"Ireland",value:"Ireland"},{idx:"Russia",value:"Russia"},{idx:"Italy",value:"Italy"}],isChanged:!1},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return"jwt"in localStorage?l.a.createElement("div",{className:"App"},l.a.createElement(u,{check:this.check}),l.a.createElement(b,{ycountries:this.state.countries})):l.a.createElement("div",{className:"App"},l.a.createElement(u,{check:this.check}),l.a.createElement(N,{check:this.check}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[127,6,2]]]);
//# sourceMappingURL=main.00b1d0b2.chunk.js.map