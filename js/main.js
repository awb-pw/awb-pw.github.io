!function(e){function t(t){for(var n,l,i=t[0],c=t[1],s=t[2],m=0,p=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;o.push([73,1]),a()}({21:function(e,t,a){e.exports={workPart:"Profile__workPart--1SgOU",workPartHistory:"Profile__workPartHistory--1cwWZ",workPartBlocks:"Profile__workPartBlocks--3ZseP",personalCardMobile:"Profile__personalCardMobile--1m_fn",personalCardDesktop:"Profile__personalCardDesktop--20UH3"}},25:function(e,t,a){e.exports={logo:"Logo__logo--2bffF",bracket:"Logo__bracket--2KRXq",text:"Logo__text--26cF5"}},26:function(e,t,a){e.exports={bookItem:"Books__bookItem--IBclM",bookName:"Books__bookName--1M3NA",author:"Books__author--1fFEe"}},27:function(e,t,a){e.exports={card:"Card__card--1y4vO",green:"Card__green--1DN6Y",title:"Card__title--3rGNR",blue:"Card__blue--1tUTx",orange:"Card__orange--2Vyko",content:"Card__content--1lHYI"}},32:function(e,t,a){e.exports={branding:"Branding__branding--3aezN",logo:"Branding__logo--1r90P",icon:"Branding__icon--w0WwR"}},33:function(e,t,a){e.exports={app:"container__app--1xEbQ",wrapper:"container__wrapper--1YaZu",cookies:"container__cookies--Xr8TP"}},40:function(e,t,a){e.exports={header:"Header__header--3AxUE",logoBlock:"Header__logoBlock--sgi5z",logo:"Header__logo--3szyq",name:"Header__name--WWw5S"}},41:function(e,t,a){e.exports={skillItem:"Skills__skillItem--2Tqk1"}},42:function(e,t,a){e.exports={notFound:"NotFound__notFound--2LCiJ",code:"NotFound__code--1Vqwj"}},49:function(e,t,a){e.exports={footer:"Footer__footer--1BHfS"}},52:function(e,t,a){e.exports={alert:"Alert__alert--3Yx58"}},53:function(e,t,a){e.exports={title:"Title__title--2kzcU"}},71:function(e,t,a){e.exports={clear:"build__clear--37P_g",clearfix:"build__clearfix--260Fq"}},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),l=a(29),i=a.n(l),c=a(11),s=a(37),u=a(30),m=a.n(u),p=a(4);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AUTHOR_DATA":return f({},e,{authorInfo:Object(p.Map)(t.payload)});case"GET_AUTHOR_SERVICES":return f({},e,{authorServices:Object(p.List)(t.payload)});default:return e}},g={};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k={},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WORK_DATA":return b({},e,{workData:Object(p.List)(t.payload)});case"GET_WORK_SKILLS":return b({},e,{workSkills:Object(p.List)(t.payload)});case"GET_WORK_BOOKS":return b({},e,{workBooks:Object(p.List)(t.payload)});default:return e}},_=Object(c.c)({author:h,errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},profile:y}),w=Object(c.e)(_,{},window.__REDUX_DEVTOOLS_EXTENSION__?Object(c.d)(Object(c.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(c.a)(s.a)),N=a(16),O=a.n(N),S=a(17),P=a.n(S),M=a(22),j=a.n(M),R=a(18),x=a.n(R),A=a(12),C=a.n(A),T=a(19),D=a.n(T),I=a(20),B=a(14),W=a(25),L=a.n(W),H=function(){return r.a.createElement("div",{className:L.a.logo},r.a.createElement("div",{className:L.a.bracket},"{"),r.a.createElement("div",{className:L.a.text},"AWB"),r.a.createElement("div",{className:L.a.bracket},"}"))},K=a(24),G=a.n(K),F=a(9),U=a.n(F);function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var z=function(e){D()(n,e);var t,a=(t=n,function(){var e,a=C()(t);if(q()){var n=C()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return x()(this,e)});function n(e){var t;return O()(this,n),(t=a.call(this,e)).state={openNavMenu:!1},t.toggleMobileMenu=t.toggleMobileMenu.bind(j()(t)),t}return P()(n,[{key:"toggleMobileMenu",value:function(){this.setState({openNavMenu:!this.state.openNavMenu})}},{key:"renderLinks",value:function(){var e=this;return r.a.createElement("div",{className:U.a.navMenu},r.a.createElement(I.c,{exact:!0,className:U.a.navMenuItem,activeClassName:U.a.navMenuItemActive,onClick:function(){return e.closeMenu()},to:"/"},r.a.createElement("i",{className:"fa fa-id-card"}),r.a.createElement("span",{className:U.a.navMenuItemText},"Profile")))}},{key:"closeMenu",value:function(){this.setState({openNavMenu:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:U.a.nav},r.a.createElement("div",{className:U.a.navDesktopMenu},this.renderLinks()),r.a.createElement("div",{className:G()(U.a.navMobile,{[U.a.navMobileActive]:this.state.openNavMenu}),onClick:this.toggleMobileMenu},r.a.createElement("i",{className:"fa fa-list"})),r.a.createElement("div",{className:G()(U.a.navMobileMenu,{[U.a.show]:this.state.openNavMenu})},this.renderLinks()))}}]),n}(n.Component),J=a(40),V=a.n(J),Y=function(){return r.a.createElement("header",{className:V.a.header},r.a.createElement(I.b,{className:V.a.logoBlock,to:"/"},r.a.createElement(H,null)),r.a.createElement(z,null))},X=a(49),Z=a.n(X),Q=function(){return r.a.createElement("footer",{className:Z.a.footer},r.a.createElement("div",null,r.a.createElement("strong",null,"Copyright")," awibox © 2019"))},$=a(1),ee=a.n($),te=a(15),ae=a.n(te),ne=a(50),re=a(51),oe=a.n(re),le=function(e){return{type:"GET_ERRORS",payload:e}},ie=a(52),ce=a.n(ie),se=function(e){return r.a.createElement("div",{className:ce.a.alert},e.children)};se.propTypes={children:ee.a.any};var ue=se,me=a(26),pe=a.n(me),de=function(e){return r.a.createElement("div",{className:pe.a.books},e.data.map((function(e){return r.a.createElement("div",{key:e.name,title:e.name,className:pe.a.bookItem,onClick:function(){return t=e.link,window.open(t);var t}},r.a.createElement("div",{className:pe.a.bookName},e.name),r.a.createElement("div",{className:pe.a.author},"Author: ",r.a.createElement("b",null,e.author)))})))};de.propTypes={data:ee.a.any};var fe=de,ve=a(27),he=a.n(ve),ge=function(e){return r.a.createElement("div",{className:G()(he.a.card,{[e.className]:e.className,[he.a[e.color]]:e.color})},e.title&&r.a.createElement("div",{className:he.a.title},e.icon&&r.a.createElement("i",{className:"fa fa-".concat(e.icon)}),e.title),e.withoutContainer?e.children:r.a.createElement("div",{className:he.a.content},e.children))};ge.propTypes={children:ee.a.any.isRequired,className:ee.a.string,icon:ee.a.string,withoutContainer:ee.a.bool,title:ee.a.string,color:ee.a.string};var Ee=ge,be=a(8),ke=a.n(be),ye=function(e){var t=e.data;return r.a.createElement("div",{className:ke.a.profile},r.a.createElement("div",{className:ke.a.avatar,style:{backgroundImage:"url(".concat(t.get("avatar"),")")}}),r.a.createElement("div",{className:ke.a.profileItems},r.a.createElement("div",{className:ke.a.profileItem},r.a.createElement("div",{className:ke.a.icon},r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("div",null,t.get("position"))),r.a.createElement("div",{className:ke.a.profileItem},r.a.createElement("div",{className:ke.a.icon},r.a.createElement("i",{className:"fa fa-location-arrow"})),r.a.createElement("div",null,t.get("location"))),r.a.createElement("div",{className:ke.a.profileItem},r.a.createElement("div",{className:ke.a.icon},r.a.createElement("i",{className:"fa fa-envelope-open-o"})),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:".concat(t.get("email")),target:"_blank",rel:"noopener noreferrer"},t.get("email")))),r.a.createElement("div",{className:ke.a.profileServices},t.get("services")&&t.get("services").map((function(e){return r.a.createElement("div",{key:e.name,className:ke.a.icon},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-".concat(e.icon),style:{color:e.color&&e.color}})))})))))};ye.propTypes={data:ee.a.any.isRequired};var _e=ye,we=a(41),Ne=a.n(we),Oe=function(e){return r.a.createElement("div",{className:Ne.a.skills},e.data.map((function(e){return r.a.createElement("div",{key:e.name,className:Ne.a.skillItem},e.name)})))};Oe.propTypes={data:ae.a.list,className:ee.a.string};var Se=Oe,Pe=a(53),Me=a.n(Pe),je=function(e){return r.a.createElement("div",{className:Me.a.title},e.children)};je.propTypes={children:ee.a.any};var Re=je,xe=a(13),Ae=Object(xe.a)([function(e){return e.profile.workData}],(function(e){return e})),Ce=Object(xe.a)([function(e){return e.profile.workSkills}],(function(e){return e})),Te=Object(xe.a)([function(e){return e.profile.workBooks}],(function(e){return e})),De=Object(xe.a)([function(e){return e.errors}],(function(e){return e})),Ie=Object(xe.a)([function(e){return e.author.authorInfo}],(function(e){return e})),Be=(Object(xe.a)([function(e){return e.author.authorServices}],(function(e){return e})),a(54)),We=a.n(Be),Le=(a(70),a(21)),He=a.n(Le);function Ke(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Ge=function(e){D()(n,e);var t,a=(t=n,function(){var e,a=C()(t);if(Ke()){var n=C()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return x()(this,e)});function n(){return O()(this,n),a.apply(this,arguments)}return P()(n,[{key:"componentDidMount",value:function(){this.props.getWorkDataAction(),this.props.getWorkSkillsAction(),this.props.getWorkBooksAction(),this.props.getAuthorDataAction()}},{key:"render",value:function(){var e=this.props,t=e.AuthorInfo,a=e.workData,n=e.workSkills,o=e.workBooks,l=e.errors;return r.a.createElement("div",null,void 0!==l.message&&r.a.createElement(ue,null,l.message),r.a.createElement(Re,null,"Profile"),r.a.createElement("div",{className:He.a.workPart},r.a.createElement(Ee,{className:He.a.personalCardMobile,title:"Andrei Arkhipov",color:"blue",icon:"id-card"},r.a.createElement(_e,{data:t})),r.a.createElement("div",{className:He.a.workPartHistory},r.a.createElement(We.a,{title:"WORK HISTORY",icon:r.a.createElement("i",{className:"fa fa-briefcase"}),color:"blue",data:a})),r.a.createElement("div",{className:He.a.workPartBlocks},r.a.createElement(Ee,{className:He.a.personalCardDesktop,title:"Andrei Arkhipov",color:"blue",icon:"id-card"},r.a.createElement(_e,{data:t})),r.a.createElement(Ee,{title:"my favorite books",color:"blue",icon:"book",withoutContainer:!0},r.a.createElement(fe,{data:o})),r.a.createElement(Ee,{title:"DEVELOPMENT SKILLS",color:"blue",icon:"magic"},r.a.createElement(Se,{data:n})))),r.a.createElement(oe.a,{promiseTracker:ne.usePromiseTracker,color:"#3d5e61"}))}}]),n}(n.Component);Ge.propTypes={getWorkDataAction:ee.a.func.isRequired,getWorkSkillsAction:ee.a.func.isRequired,getWorkBooksAction:ee.a.func.isRequired,getAuthorDataAction:ee.a.func.isRequired,AuthorInfo:ae.a.map,workData:ae.a.list,workSkills:ae.a.list,workBooks:ae.a.list,errors:ee.a.shape({message:ee.a.string})},Ge.defaultProps={workData:Object(p.List)([]),workSkills:Object(p.List)([]),workBooks:Object(p.List)([]),AuthorInfo:Object(p.Map)({avatar:""})};var Fe={getWorkDataAction:function(){return function(e){try{e(function(e){return{type:"GET_WORK_DATA",payload:e}}([{date:2019,title:"Chief Programmer",label:"Luxoft",location:"Saint Petersburg (Russia)",content:r.a.createElement("div",null,"I am developing web services for an analytical system.")},{date:2018,title:"Senior Software Engineer",label:"Tutu.ru",location:"Moscow (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"I worked on high-load (with more than 6 millions users per month) travel site system."),r.a.createElement("div",null,"I developed bus selling section (single page application with React)"),r.a.createElement("ul",null,r.a.createElement("li",null,"Optimized page loading speed on high-load pages"),r.a.createElement("li",null,"Refactoring the search form (an important part of the product) due to a large number of inherited and global logical errors"),r.a.createElement("li",null,"Increased javascript unit tests coverage up to 60 per cent (karma, chai, enzyme, sinon)"),r.a.createElement("li",null,"Developed new pages for product"),r.a.createElement("li",null,"Performed Сode Reviews"),r.a.createElement("li",null,"Had experience in Scrum team"),r.a.createElement("li",null,"Worked closely with UI/UX designer")))},{date:2016,title:"Lead Software Developer",label:"CUSTIS",location:"Moscow (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"I led a front-end development team of 10 people on the education project - Modeus:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Planning the work of frontend teams"),r.a.createElement("li",null,"Communicated with project manager and analysts"),r.a.createElement("li",null,"Made knowledge-sharing and documentation creation processes"),r.a.createElement("li",null,'Implemented GitLab Flow which allowed to eliminate time-consuming "git rebase"'),r.a.createElement("li",null,"Implemented ТSLint (TypeScript linter)"),r.a.createElement("li",null,"Performed Code Reviews"),r.a.createElement("li",null,"Conducted 1-on-1 meetings with developers"),r.a.createElement("li",null,"Interviewed candidates for developer position Participated in the development of a complex authentication system for Modeus")),r.a.createElement("div",null,"Contributed to the development of UI Kit for the company."),r.a.createElement("div",null,"Updated from Angular 2 to Angular 5."),r.a.createElement("div",null,"Wrote unit tests (Jasmine)."))},{date:2013,title:"Software Engineer",label:"Rutube",location:"Moscow (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"Participated in the development of projects:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Video hosting Rutube (Backbone)"),r.a.createElement("li",null,"Development site and secure online voting system for the TEFI award"),r.a.createElement("li",null,"Broadcasts service NTV Plus (Backbone)")),r.a.createElement("div",null,"Developed the interface part of the online video editor for NTV Plus which makes it possible to cut highlights from the live broadcast (Angular 2, D3.js)."),r.a.createElement("div",null,"Made content management system for NTV Plus (single-page application using Angular 2)."))},{date:2012,title:"Web Developer",label:"BARS GROUP",location:"Kazan (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"Developed project for monitoring Cultural Heritage."),r.a.createElement("div",null,"Developed front-end part of project BARS.Accessible Environment."))},{date:2007,title:"Web Developer",label:"Freelance",location:"Kazan (Russia)",content:r.a.createElement("div",null,r.a.createElement("div",null,"It was my hobby."),r.a.createElement("div",null,"I created different websites using CMS such as Wordpress, Joomla, NetCat, 1C Bitrix."))}]))}catch(t){e(le({message:"Work data not found"}))}}},getWorkSkillsAction:function(){return function(e){try{e({type:"GET_WORK_SKILLS",payload:[{name:"JavaScript"},{name:"CSS"},{name:"Git"},{name:"HTML5"},{name:"React"},{name:"Redux"},{name:"Immutable.js"},{name:"Angular"},{name:"Backbone"},{name:"Knockout"},{name:"Sencha Touch"},{name:"TypeScript"},{name:"Webpack"},{name:"Babel.js"},{name:"Reselect"},{name:"Jest"},{name:"Karma"},{name:"Enzyme"},{name:"Node.js"},{name:"Express"},{name:"MongoDB"},{name:"Photoshop"},{name:"Handlebars"},{name:"Mustache"},{name:"Twig"},{name:"SketchUp"},{name:"Docker"},{name:"SCSS"},{name:"LESS"},{name:"Stylus"},{name:"CSS-modules"},{name:"PropTypes"},{name:"Async/Await"},{name:"EventLoop"}]})}catch(t){e(le({message:"Work skills not found"}))}}},getWorkBooksAction:function(){return function(e){try{e({type:"GET_WORK_BOOKS",payload:[{name:"Eloquent JavaScript",author:"Marijn Haverbeke",link:"https://eloquentjavascript.net/"},{name:"JavaScript: The Good Parts",author:"Douglas Crockford",link:"https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},{name:"Refactoring: Improving the Design of Existing Code",author:"Martin Fowler",link:"https://martinfowler.com/books/refactoring.html"},{name:"Working Effectively with Legacy Code",author:"Michael Feathers",link:"https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052"},{name:"Code Complete: A Practical Handbook of Software Construction",author:"Steve McConnell",link:"https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670"},{name:"Extreme Programming Explained: Embrace Change",author:"Kent Beck",link:"https://www.amazon.com/dp/B00N1ZN6C0/"}]})}catch(t){e(le({message:"Work books not found"}))}}},getAuthorDataAction:function(){return function(e){try{e(function(e){return{type:"GET_AUTHOR_DATA",payload:e}}({avatar:"https://avatars1.githubusercontent.com/u/1931010?s=460&v=4",position:"Chief Programmer at Luxoft",location:"Russia, Saint Petersburg",email:"andrei@awb.pw",services:[{name:"github",icon:"github",link:"https://github.com/awibox",color:"#24292e"},{name:"linkedin",icon:"linkedin-square",link:"https://linkedin.com/in/awibox",color:"#0077B5"},{name:"facebook",icon:"facebook-official",link:"https://facebook.com/awiboxpw",color:"#4267b2"},{name:"instagram",icon:"instagram",link:"https://www.instagram.com/awibox/",color:"rgb(38, 38, 38)"}]}))}catch(t){e(le({message:"Author data not found"}))}}}},Ue=Object(o.b)((function(e){return{workData:Ae(e),workSkills:Ce(e),workBooks:Te(e),AuthorInfo:Ie(e),errors:De(e)}}),Fe)(Ge),qe=a(42),ze=a.n(qe),Je=function(){return r.a.createElement(Ee,{className:ze.a.notFound},r.a.createElement("div",{className:ze.a.code},"404"),r.a.createElement("p",null,"We couldn't find this page."),r.a.createElement("p",null,"The page you are looking for does not exists."))},Ve=a(32),Ye=a.n(Ve),Xe=function(){return r.a.createElement(Ee,{title:"Branding"},r.a.createElement("div",{className:Ye.a.branding},r.a.createElement("div",{className:Ye.a.icon},r.a.createElement("i",{className:"fa fa-list"})),r.a.createElement("div",{className:Ye.a.logo},r.a.createElement(H,null))))},Ze=function(){return r.a.createElement("div",null,r.a.createElement(Re,null,r.a.createElement("div",{style:{textAlign:"center"}},"Cookie Policy")),r.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"center"}},r.a.createElement("div",{style:{padding:"20px",maxWidth:"500px"}},r.a.createElement(Ee,{title:"Why we use cookies?"},r.a.createElement("p",null,"We use cookies and other similar technologies for only analytical purposes that will help us distinguish you from other users of our site. This allows you to provide a convenient view of our site, and also gives you the opportunity to improve it."),r.a.createElement("p",null,"We use web analytics tool for the purpose of general analysis of site usage. The information obtained in this case can be transmitted in an anonymous form to the server of the web Analytics service, stored and processed there."),r.a.createElement("p",null,"We use Google Analytics and related cookies: ",r.a.createElement("a",{href:"https://policies.google.com/privacy?hl=en",target:"_blank",rel:"noopener noreferrer"},"Google Privacy Policy"))),r.a.createElement(Ee,{title:"How can you prevent the use of cookies?"},r.a.createElement("p",null,"Most browsers automatically accept cookies. You can delete saved cookies on your device at any time. How this is done in more detail, you can find in the instructions for using your browser or the your device."),r.a.createElement("p",null,"You can also disable any or only certain cookies in your browser settings. However, all browsers differ from each other, so for more information about cookie settings, see the Help section of your browser.")))))},Qe=a(33),$e=a.n(Qe),et=a(55),tt=a.n(et);function at(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var nt=function(e){D()(n,e);var t,a=(t=n,function(){var e,a=C()(t);if(at()){var n=C()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return x()(this,e)});function n(e){var t;return O()(this,n),(t=a.call(this,e)).state={consentStatus:!1},t.checkStatus=t.checkStatus.bind(j()(t)),t}return P()(n,[{key:"checkStatus",value:function(e){this.setState({consentStatus:e})}},{key:"render",value:function(){return r.a.createElement(I.a,null,r.a.createElement("div",{className:$e.a.app},r.a.createElement(Y,null),r.a.createElement("main",{className:$e.a.content},r.a.createElement("div",{className:$e.a.wrapper},r.a.createElement(B.c,null,r.a.createElement(B.a,{exact:!0,path:"/",component:Ue}),r.a.createElement(B.a,{exact:!0,path:"/cookie-policy",component:Ze}),r.a.createElement(B.a,{exact:!0,path:"/branding",component:Xe}),r.a.createElement(B.a,{component:Je})))),r.a.createElement(tt.a,{background:"#0079c1",bottomPosition:!1,buttonText:"I agree",buttonBackground:"#fff",buttonColor:"#000",buttonFontSize:14,color:"#fff",consentFunction:this.checkStatus,padding:20},"This website uses cookies for analytical purposes. Please read our ",r.a.createElement("a",{href:"/cookie-policy",style:{color:"#fff"}},"Cookie Policy")," and confirm your consent to the use of cookies."),r.a.createElement(Q,null)))}}]),n}(n.Component);a(71),a(72);i.a.render(r.a.createElement(o.a,{store:w},r.a.createElement(nt,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={profile:"PersonalCard__profile--18OAz",avatar:"PersonalCard__avatar--3Dg3d",profileItems:"PersonalCard__profileItems--Tr_xL",profileItem:"PersonalCard__profileItem--2PUA3",icon:"PersonalCard__icon--3CfEe",profileServices:"PersonalCard__profileServices--HW4e-"}},9:function(e,t,a){e.exports={nav:"NavBar__nav--3ytcc",navDesktopMenu:"NavBar__navDesktopMenu--2tY-u",navMobileMenu:"NavBar__navMobileMenu--2a76K",navMenu:"NavBar__navMenu--sypqv",navMenuItem:"NavBar__navMenuItem--1GUKs",navMenuItemActive:"NavBar__navMenuItemActive--281kX",navMenuItemText:"NavBar__navMenuItemText--2PI5l",navMobile:"NavBar__navMobile--pxtvL",navMobileActive:"NavBar__navMobileActive--2n-Dr",show:"NavBar__show--29R_Y"}}});