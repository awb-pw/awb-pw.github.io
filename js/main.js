!function(e){function t(t){for(var n,l,i=t[0],c=t[1],s=t[2],m=0,p=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;o.push([74,1]),a()}({17:function(e,t,a){e.exports={workPart:"Profile__workPart--1SgOU",workPartHistory:"Profile__workPartHistory--1cwWZ",workPartBlocks:"Profile__workPartBlocks--3ZseP",personalCardMobile:"Profile__personalCardMobile--1m_fn",personalCardDesktop:"Profile__personalCardDesktop--20UH3"}},20:function(e,t,a){e.exports={logo:"Logo__logo--2bffF",bracket:"Logo__bracket--2KRXq",text:"Logo__text--26cF5"}},21:function(e,t,a){e.exports={bookItem:"Books__bookItem--IBclM",bookName:"Books__bookName--1M3NA",author:"Books__author--1fFEe"}},22:function(e,t,a){e.exports={card:"Card__card--1y4vO",green:"Card__green--1DN6Y",title:"Card__title--3rGNR",blue:"Card__blue--1tUTx",orange:"Card__orange--2Vyko",content:"Card__content--1lHYI"}},31:function(e,t,a){e.exports={app:"container__app--1xEbQ",wrapper:"container__wrapper--1YaZu"}},37:function(e,t,a){e.exports={header:"Header__header--3AxUE",logoBlock:"Header__logoBlock--sgi5z",logo:"Header__logo--3szyq",name:"Header__name--WWw5S"}},38:function(e,t,a){e.exports={skillItem:"Skills__skillItem--2Tqk1"}},39:function(e,t,a){e.exports={notFound:"NotFound__notFound--2LCiJ",code:"NotFound__code--1Vqwj"}},47:function(e,t,a){e.exports={footer:"Footer__footer--1BHfS"}},50:function(e,t,a){e.exports={alert:"Alert__alert--3Yx58"}},51:function(e,t,a){e.exports={title:"Title__title--2kzcU"}},6:function(e,t,a){e.exports={profile:"PersonalCard__profile--18OAz",avatar:"PersonalCard__avatar--3Dg3d",profileItems:"PersonalCard__profileItems--Tr_xL",profileItem:"PersonalCard__profileItem--2PUA3",icon:"PersonalCard__icon--3CfEe",profileServices:"PersonalCard__profileServices--HW4e-"}},72:function(e,t,a){e.exports={clear:"build__clear--37P_g",clearfix:"build__clearfix--260Fq"}},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),l=a(24),i=a.n(l),c=a(12),s=a(35),u=a(10),m=a.n(u),p=a(4);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AUTHOR_DATA":return f({},e,{authorInfo:Object(p.Map)(t.payload)});case"GET_AUTHOR_SERVICES":return f({},e,{authorServices:Object(p.List)(t.payload)});default:return e}},E={};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k={},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WORK_DATA":return b({},e,{workData:Object(p.List)(t.payload)});case"GET_WORK_SKILLS":return b({},e,{workSkills:Object(p.List)(t.payload)});case"GET_WORK_BOOKS":return b({},e,{workBooks:Object(p.List)(t.payload)});default:return e}},w=Object(c.c)({author:h,errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},profile:_}),y=Object(c.e)(w,{},window.__REDUX_DEVTOOLS_EXTENSION__?Object(c.d)(Object(c.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(c.a)(s.a)),N=a(16),O=a(14),S=a(20),M=a.n(S),P=function(){return r.a.createElement("div",{className:M.a.logo},r.a.createElement("div",{className:M.a.bracket},"{"),r.a.createElement("div",{className:M.a.text},"AWB"),r.a.createElement("div",{className:M.a.bracket},"}"))},j=a(25),A=a.n(j),C=a(26),I=a.n(C),T=a(27),D=a.n(T),x=a(28),R=a.n(x),B=a(33),L=a.n(B),W=a(29),H=a.n(W),K=a(19),U=a.n(K),G=a(9),F=a.n(G),q=function(e){function t(e){var a;return A()(this,t),(a=D()(this,R()(t).call(this,e))).state={openNavMenu:!1},a.toggleMobileMenu=a.toggleMobileMenu.bind(L()(a)),a}return H()(t,e),I()(t,[{key:"toggleMobileMenu",value:function(){this.setState({openNavMenu:!this.state.openNavMenu})}},{key:"renderLinks",value:function(){var e=this;return r.a.createElement("div",{className:F.a.navMenu},r.a.createElement(N.c,{exact:!0,className:F.a.navMenuItem,activeClassName:F.a.navMenuItemActive,onClick:function(){return e.closeMenu()},to:"/"},r.a.createElement("i",{className:"fa fa-id-card"}),r.a.createElement("span",{className:F.a.navMenuItemText},"Profile")))}},{key:"closeMenu",value:function(){this.setState({openNavMenu:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:F.a.nav},r.a.createElement("div",{className:F.a.navDesktopMenu},this.renderLinks()),r.a.createElement("div",{className:U()(F.a.navMobile,m()({},F.a.navMobileActive,this.state.openNavMenu)),onClick:this.toggleMobileMenu},r.a.createElement("i",{className:"fa fa-list"})),r.a.createElement("div",{className:U()(F.a.navMobileMenu,m()({},F.a.show,this.state.openNavMenu))},this.renderLinks()))}}]),t}(n.Component),z=a(37),J=a.n(z),V=function(){return r.a.createElement("header",{className:J.a.header},r.a.createElement(N.b,{className:J.a.logoBlock,to:"/"},r.a.createElement(P,null)),r.a.createElement(q,null))},X=a(47),Y=a.n(X),Z=function(){return r.a.createElement("footer",{className:Y.a.footer},r.a.createElement("div",null,r.a.createElement("strong",null,"Copyright")," awibox © 2019"))},Q=a(1),$=a.n(Q),ee=a(15),te=a.n(ee),ae=a(48),ne=a(49),re=a.n(ne),oe=function(e){return{type:"GET_ERRORS",payload:e}},le=a(50),ie=a.n(le),ce=function(e){return r.a.createElement("div",{className:ie.a.alert},e.children)};ce.propTypes={children:$.a.any};var se=ce,ue=a(21),me=a.n(ue),pe=function(e){return r.a.createElement("div",{className:me.a.books},e.data.map((function(e){return r.a.createElement("div",{key:e.name,title:e.name,className:me.a.bookItem,onClick:function(){return t=e.link,window.open(t);var t}},r.a.createElement("div",{className:me.a.bookName},e.name),r.a.createElement("div",{className:me.a.author},"Author: ",r.a.createElement("b",null,e.author)))})))};pe.propTypes={data:$.a.any};var de=pe,fe=a(22),ve=a.n(fe),he=function(e){var t;return r.a.createElement("div",{className:U()(ve.a.card,(t={},m()(t,e.className,e.className),m()(t,ve.a[e.color],e.color),t))},e.title&&r.a.createElement("div",{className:ve.a.title},e.icon&&r.a.createElement("i",{className:"fa fa-".concat(e.icon)}),e.title),e.withoutContainer?e.children:r.a.createElement("div",{className:ve.a.content},e.children))};he.propTypes={children:$.a.any.isRequired,className:$.a.string,icon:$.a.string,withoutContainer:$.a.bool,title:$.a.string,color:$.a.string};var Ee=he,ge=a(6),be=a.n(ge),ke=function(e){var t=e.data;return r.a.createElement("div",{className:be.a.profile},r.a.createElement("div",{className:be.a.avatar,style:{backgroundImage:"url(".concat(t.get("avatar"),")")}}),r.a.createElement("div",{className:be.a.profileItems},r.a.createElement("div",{className:be.a.profileItem},r.a.createElement("div",{className:be.a.icon},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("div",null,t.get("position"))),r.a.createElement("div",{className:be.a.profileItem},r.a.createElement("div",{className:be.a.icon},r.a.createElement("i",{className:"fa fa-location-arrow"})),r.a.createElement("div",null,t.get("location"))),r.a.createElement("div",{className:be.a.profileItem},r.a.createElement("div",{className:be.a.icon},r.a.createElement("i",{className:"fa fa-envelope-open-o"})),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:".concat(t.get("email")),target:"_blank",rel:"noopener noreferrer"},t.get("email")))),r.a.createElement("div",{className:be.a.profileServices},t.get("services")&&t.get("services").map((function(e){return r.a.createElement("div",{key:e.name,className:be.a.icon},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-".concat(e.icon),style:{color:e.color&&e.color}})))})))))};ke.propTypes={data:$.a.any.isRequired};var _e=ke,we=a(38),ye=a.n(we),Ne=function(e){return r.a.createElement("div",{className:ye.a.skills},e.data.map((function(e){return r.a.createElement("div",{key:e.name,className:ye.a.skillItem},e.name)})))};Ne.propTypes={data:te.a.list,className:$.a.string};var Oe=Ne,Se=a(51),Me=a.n(Se),Pe=function(e){return r.a.createElement("div",{className:Me.a.title},e.children)};Pe.propTypes={children:$.a.any};var je=Pe,Ae=a(13),Ce=Object(Ae.a)([function(e){return e.profile.workData}],(function(e){return e})),Ie=Object(Ae.a)([function(e){return e.profile.workSkills}],(function(e){return e})),Te=Object(Ae.a)([function(e){return e.profile.workBooks}],(function(e){return e})),De=Object(Ae.a)([function(e){return e.errors}],(function(e){return e})),xe=Object(Ae.a)([function(e){return e.author.authorInfo}],(function(e){return e})),Re=(Object(Ae.a)([function(e){return e.author.authorServices}],(function(e){return e})),a(52)),Be=a.n(Re),Le=(a(71),a(17)),We=a.n(Le),He=function(e){function t(){return A()(this,t),D()(this,R()(t).apply(this,arguments))}return H()(t,e),I()(t,[{key:"componentDidMount",value:function(){this.props.getWorkDataAction(),this.props.getWorkSkillsAction(),this.props.getWorkBooksAction(),this.props.getAuthorDataAction()}},{key:"render",value:function(){var e=this.props,t=e.AuthorInfo,a=e.workData,n=e.workSkills,o=e.workBooks,l=e.errors;return r.a.createElement("div",null,void 0!==l.message&&r.a.createElement(se,null,l.message),r.a.createElement(je,null,"Profile"),r.a.createElement("div",{className:We.a.workPart},r.a.createElement(Ee,{className:We.a.personalCardMobile,title:"Andrei Arkhipov",color:"blue",icon:"id-card"},r.a.createElement(_e,{data:t})),r.a.createElement("div",{className:We.a.workPartHistory},r.a.createElement(Be.a,{title:"WORK HISTORY",icon:r.a.createElement("i",{className:"fa fa-briefcase"}),color:"blue",data:a})),r.a.createElement("div",{className:We.a.workPartBlocks},r.a.createElement(Ee,{className:We.a.personalCardDesktop,title:"Andrei Arkhipov",color:"blue",icon:"id-card"},r.a.createElement(_e,{data:t})),r.a.createElement(Ee,{title:"my favorite books",color:"blue",icon:"book",withoutContainer:!0},r.a.createElement(de,{data:o})),r.a.createElement(Ee,{title:"DEVELOPMENT SKILLS",color:"blue",icon:"magic"},r.a.createElement(Oe,{data:n})))),r.a.createElement(re.a,{promiseTracker:ae.usePromiseTracker,color:"#3d5e61"}))}}]),t}(n.Component);He.propTypes={getWorkDataAction:$.a.func.isRequired,getWorkSkillsAction:$.a.func.isRequired,getWorkBooksAction:$.a.func.isRequired,getAuthorDataAction:$.a.func.isRequired,AuthorInfo:te.a.map,workData:te.a.list,workSkills:te.a.list,workBooks:te.a.list,errors:$.a.shape({message:$.a.string})},He.defaultProps={workData:Object(p.List)([]),workSkills:Object(p.List)([]),workBooks:Object(p.List)([]),AuthorInfo:Object(p.Map)({avatar:""})};var Ke={getWorkDataAction:function(){return function(e){try{e(function(e){return{type:"GET_WORK_DATA",payload:e}}([{date:2019,title:"Chief Programmer",label:"Luxoft",location:"Saint Petersburg (Russia)",content:r.a.createElement("div",null,"I am developing web services for an analytical system.")},{date:2018,title:"Senior Software Engineer",label:"Tutu.ru",location:"Moscow (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"I worked on high-load (with more than 6 millions users per month) travel site system."),r.a.createElement("div",null,"I developed bus selling section (single page application with React)"),r.a.createElement("ul",null,r.a.createElement("li",null,"Optimized page loading speed on high-load pages"),r.a.createElement("li",null,"Refactoring the search form (an important part of the product) due to a large number of inherited and global logical errors"),r.a.createElement("li",null,"Increased javascript unit tests coverage up to 60 per cent (karma, chai, enzyme, sinon)"),r.a.createElement("li",null,"Developed new pages for product"),r.a.createElement("li",null,"Performed Сode Reviews"),r.a.createElement("li",null,"Had experience in Scrum team"),r.a.createElement("li",null,"Worked closely with UI/UX designer")))},{date:2016,title:"Lead Software Developer",label:"CUSTIS",location:"Moscow (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"I led a front-end development team of 10 people on the education project - Modeus:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Planning the work of frontend teams"),r.a.createElement("li",null,"Communicated with project manager and analysts"),r.a.createElement("li",null,"Made knowledge-sharing and documentation creation processes"),r.a.createElement("li",null,'Implemented GitLab Flow which allowed to eliminate time-consuming "git rebase"'),r.a.createElement("li",null,"Implemented ТSLint (TypeScript linter)"),r.a.createElement("li",null,"Performed Code Reviews"),r.a.createElement("li",null,"Conducted 1-on-1 meetings with developers"),r.a.createElement("li",null,"Interviewed candidates for developer position Participated in the development of a complex authentication system for Modeus")),r.a.createElement("div",null,"Contributed to the development of UI Kit for the company."),r.a.createElement("div",null,"Updated from Angular 2 to Angular 5."),r.a.createElement("div",null,"Wrote unit tests (Jasmine)."))},{date:2013,title:"Software Engineer",label:"Rutube",location:"Moscow (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"Participated in the development of projects:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Video hosting Rutube (Backbone)"),r.a.createElement("li",null,"Development site and secure online voting system for the TEFI award"),r.a.createElement("li",null,"Broadcasts service NTV Plus (Backbone)")),r.a.createElement("div",null,"Developed the interface part of the online video editor for NTV Plus which makes it possible to cut highlights from the live broadcast (Angular 2, D3.js)."),r.a.createElement("div",null,"Made content management system for NTV Plus (single-page application using Angular 2)."))},{date:2012,title:"Web Developer",label:"BARS GROUP",location:"Kazan (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"Developed project for monitoring Cultural Heritage."),r.a.createElement("div",null,"Developed front-end part of project BARS.Accessible Environment."))},{date:2007,title:"Web Developer",label:"Freelance",location:"Kazan (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"It was my hobby."),r.a.createElement("div",null,"I created different websites using CMS such as Wordpress, Joomla, NetCat, 1C Bitrix."))}]))}catch(t){e(oe({message:"Work data not found"}))}}},getWorkSkillsAction:function(){return function(e){try{e({type:"GET_WORK_SKILLS",payload:[{name:"JavaScript"},{name:"CSS"},{name:"Git"},{name:"HTML5"},{name:"React"},{name:"Redux"},{name:"Immutable.js"},{name:"Angular"},{name:"Backbone"},{name:"Knockout"},{name:"Sencha Touch"},{name:"TypeScript"},{name:"Webpack"},{name:"Babel.js"},{name:"Reselect"},{name:"Jest"},{name:"Karma"},{name:"Enzyme"},{name:"Node.js"},{name:"Express"},{name:"MongoDB"},{name:"Photoshop"},{name:"Handlebars"},{name:"Mustache"},{name:"Twig"},{name:"SketchUp"},{name:"Docker"},{name:"SCSS"},{name:"LESS"},{name:"Stylus"},{name:"CSS-modules"},{name:"PropTypes"},{name:"Async/Await"},{name:"EventLoop"}]})}catch(t){e(oe({message:"Work skills not found"}))}}},getWorkBooksAction:function(){return function(e){try{e({type:"GET_WORK_BOOKS",payload:[{name:"Eloquent JavaScript",author:"Marijn Haverbeke",link:"https://eloquentjavascript.net/"},{name:"JavaScript: The Good Parts",author:"Douglas Crockford",link:"https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},{name:"Refactoring: Improving the Design of Existing Code",author:"Martin Fowler",link:"https://martinfowler.com/books/refactoring.html"},{name:"Working Effectively with Legacy Code",author:"Michael Feathers",link:"https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052"},{name:"Code Complete: A Practical Handbook of Software Construction",author:"Steve McConnell",link:"https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670"},{name:"Extreme Programming Explained: Embrace Change",author:"Kent Beck",link:"https://www.amazon.com/dp/B00N1ZN6C0/"}]})}catch(t){e(oe({message:"Work books not found"}))}}},getAuthorDataAction:function(){return function(e){try{e(function(e){return{type:"GET_AUTHOR_DATA",payload:e}}({avatar:"https://avatars1.githubusercontent.com/u/1931010?s=460&v=4",position:"Chief Programmer at Luxoft",location:"Russia, Saint Petersburg",email:"andrei@awb.pw",services:[{name:"github",icon:"github",link:"https://github.com/awibox",color:"#24292e"},{name:"linkedin",icon:"linkedin-square",link:"https://linkedin.com/in/awibox",color:"#0077B5"},{name:"facebook",icon:"facebook-official",link:"https://facebook.com/awiboxpw",color:"#4267b2"},{name:"instagram",icon:"instagram",link:"https://www.instagram.com/awibox/",color:"rgb(38, 38, 38)"}]}))}catch(t){e(oe({message:"Author data not found"}))}}}},Ue=Object(o.b)((function(e){return{workData:Ce(e),workSkills:Ie(e),workBooks:Te(e),AuthorInfo:xe(e),errors:De(e)}}),Ke)(He),Ge=a(39),Fe=a.n(Ge),qe=function(){return r.a.createElement(Ee,{className:Fe.a.notFound},r.a.createElement("div",{className:Fe.a.code},"404"),r.a.createElement("p",null,"We couldn't find this page."),r.a.createElement("p",null,"The page you are looking for does not exists."))},ze=a(31),Je=a.n(ze),Ve=function(){return r.a.createElement(N.a,null,r.a.createElement("div",{className:Je.a.app},r.a.createElement(V,null),r.a.createElement("main",{className:Je.a.content},r.a.createElement("div",{className:Je.a.wrapper},r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:Ue}),r.a.createElement(O.a,{exact:!0,path:"/test",component:Ue}),r.a.createElement(O.a,{component:qe})))),r.a.createElement(Z,null)))};a(72),a(73);i.a.render(r.a.createElement(o.a,{store:y},r.a.createElement(Ve,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={nav:"NavBar__nav--3ytcc",navDesktopMenu:"NavBar__navDesktopMenu--2tY-u",navMobileMenu:"NavBar__navMobileMenu--2a76K",navMenu:"NavBar__navMenu--sypqv",navMenuItem:"NavBar__navMenuItem--1GUKs",navMenuItemActive:"NavBar__navMenuItemActive--281kX",navMenuItemText:"NavBar__navMenuItemText--2PI5l",navMobile:"NavBar__navMobile--pxtvL",navMobileActive:"NavBar__navMobileActive--2n-Dr",show:"NavBar__show--29R_Y"}}});