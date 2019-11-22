(this["webpackJsonptorre-test"]=this["webpackJsonptorre-test"]||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),c=n.n(o),s=(n(24),n(25),n(18)),i=n(3),l=n(4),u=n(6),p=n(5),m=n(7),h=n(2),f=n.n(h),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"connection-card"},a.a.createElement("img",{className:"connection-image",src:this.props.picture?this.props.picture:"not-found.png",alt:this.props.name}),a.a.createElement("a",{className:"connection-link",href:"https://bio.torre.co/".concat(this.props.id),target:"_blank",rel:"noopener noreferrer"},a.a.createElement("h2",{className:"connection-name"},this.props.name)),a.a.createElement("h3",{className:"connection-title"},this.props.title),0===this.props.strength.length?a.a.createElement("p",null,this.props.name.replace(/ .*/,"")," doesn't have strengths set on their Torre profile."):a.a.createElement("p",{className:"connection-strengths"},a.a.createElement("b",null,"Top Strengths: "),this.props.strength.slice(0,4).join(", ")))}}]),t}(a.a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).usernameRef=a.a.createRef(),n.getConnections=function(e){var t="https://cors-anywhere.herokuapp.com/bio.torre.co/api/";e.preventDefault(),f.a.get("".concat(t,"bios/").concat(n.usernameRef.current.value)).then((function(e){var t=e.data.interests.map((function(e){return e.name}));0===e.data.interests.length?n.setState({error:"no-interest",topInterest:"",connections:[]}):n.setState({topInterest:t})})),f.a.get("".concat(t,"people/").concat(n.usernameRef.current.value,"/connections?limit=6")).then((function(e){n.usernameRef.current.value="";var r=e.data.map((function(e){return f.a.get("".concat(t,"bios/")+e.person.publicId)}));f.a.all(Object(s.a)(r)).then(f.a.spread((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t.map((function(e){return e.data.strengths})),o=a.map((function(e){return e.map((function(e){return e.name}))})),c=t.map((function(e){return e.data.person}));c.forEach((function(e,t){e.strength=o[t]})),n.setState({error:null,connections:c,changeAlign:!0})}))).catch((function(e){n.setState({error:"not-connected",topInterest:"",connections:[]}),console.log(e)}))})).catch((function(e){n.usernameRef.current.value="",n.setState({error:"not-found",topInterest:"",connections:[]}),console.log(e)}))},n.matchInterests=function(e,t){var n=e.includes(t[0]);console.log(n)},n.handleErrors=function(e){switch(e){case"not-found":return a.a.createElement("p",null,"User not found. Try again?");case"not-connected":return a.a.createElement("p",null,"You don't have connections on your Torre profile.");case"no-interest":return a.a.createElement("p",null,"You don't have any interests set on your Torre profile.")}},n.state={connections:[],error:"",topInterest:"",userName:"",changeAlign:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"content-wrapper ".concat(this.state.changeAlign?"dont-center-app":"center-app")},a.a.createElement("div",{className:"content"},a.a.createElement("h1",null,"Match your interests with your Torre connections strengths."),a.a.createElement("br",null),a.a.createElement("form",{onSubmit:this.getConnections},a.a.createElement("input",{className:"user-input",placeholder:"Input your username to get started",ref:this.usernameRef,type:"text",name:"username",id:""}),a.a.createElement("input",{type:"submit",value:"GO"})),a.a.createElement("h6",null,"You can find your username like this: bio.torre.co/username"),this.handleErrors(this.state.error),this.state.topInterest?a.a.createElement("h3",null,"Your top interests are: ",this.state.topInterest.join(", ")," "):"",a.a.createElement("div",{className:"connection-container"},this.state.connections.map((function(e){return a.a.createElement(d,{key:e.publicId,id:e.publicId,title:e.professionalHeadline,name:e.name,picture:e.picture,strength:e.strength})})))))}}]),t}(a.a.Component);var v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.fdc077ec.chunk.js.map