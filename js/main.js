!function(e){function t(t){for(var n,l,i=t[0],c=t[1],s=t[2],m=0,d=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;o.push([71,1]),a()}({12:function(e,t,a){e.exports={timeline:"Timeline__timeline--j9-q9",timelineItem:"Timeline__timelineItem--3phzX","right-part":"Timeline__right-part--19z16",leftPart:"Timeline__leftPart--2zceh",rightPart:"Timeline__rightPart--1HAXy",divider:"Timeline__divider--304cU",itemTitle:"Timeline__itemTitle--38iyl",itemPeriod:"Timeline__itemPeriod--1txDM",itemCompany:"Timeline__itemCompany--3haD9","item-logo":"Timeline__item-logo--1mpjA"}},13:function(e,t,a){e.exports={certificateItem:"Certificates__certificateItem--d53Dq",certiLogo:"Certificates__certiLogo--KjFlx",certiContent:"Certificates__certiContent--1s4QV",certiTitle:"Certificates__certiTitle--f9NjV",certiId:"Certificates__certiId--1U3v8",certiDate:"Certificates__certiDate--JAbMX"}},16:function(e,t,a){e.exports={description:"Profile__description--264zu",infoList:"Profile__infoList--2_Rgk",title:"Profile__title--22L-P"}},18:function(e,t,a){e.exports={contentArea:"container__contentArea--fxzyH",animatedSections:"container__animatedSections--Qg7T6",animatedSection:"container__animatedSection--2dC6e",scrollbar:"container__scrollbar--1FyYB"}},19:function(e,t,a){e.exports={logo:"Logo__logo--2bffF",bracket:"Logo__bracket--2KRXq",text:"Logo__text--26cF5"}},27:function(e,t,a){e.exports={branding:"Branding__branding--3aezN",logo:"Branding__logo--1r90P",icon:"Branding__icon--w0WwR"}},34:function(e,t,a){e.exports={title:"Title__title--2kzcU",titleSmall:"Title__titleSmall--2peNv"}},35:function(e,t,a){e.exports={skills:"Skills__skills--10A6a",skillItem:"Skills__skillItem--2Tqk1"}},36:function(e,t,a){e.exports={notFound:"NotFound__notFound--2LCiJ",code:"NotFound__code--1Vqwj"}},69:function(e,t,a){},7:function(e,t,a){e.exports={headerPhoto:"Header__headerPhoto--UU28x",headerTitles:"Header__headerTitles--39ePK",socialLinks:"Header__socialLinks--I4U8I",headerButtons:"Header__headerButtons--ntAVK",btnPrimary:"Header__btnPrimary--2stjY",copyrights:"Header__copyrights--2DPcq",menuToggle:"Header__menuToggle--1biT2",open:"Header__open--1yDy0",header:"Header__header--3AxUE",menuHide:"Header__menuHide--1NxbU"}},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a(21),i=a.n(l),c=a(9),s=a(33),u=a(22),m=a.n(u),d=a(3);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AUTHOR_DATA":return f(f({},e),{},{authorInfo:Object(d.Map)(t.payload)});default:return e}},E={};function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WORK_DATA":return k(k({},e),{},{workData:Object(d.List)(t.payload)});case"GET_WORK_SKILLS":return k(k({},e),{},{workSkills:Object(d.List)(t.payload)});case"GET_WORK_BOOKS":return k(k({},e),{},{workBooks:Object(d.List)(t.payload)});case"GET_WORK_CERTIFICATES":return k(k({},e),{},{workCertificates:Object(d.List)(t.payload)});default:return e}},w=Object(c.c)({author:g,errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},profile:b}),_=Object(c.e)(w,{},window.__REDUX_DEVTOOLS_EXTENSION__?Object(c.d)(Object(c.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(c.a)(s.a)),O=a(23),S=a.n(O),T=a(24),j=a.n(T),P=a(30),N=a.n(P),A=a(25),C=a.n(A),R=a(26),x=a.n(R),D=a(15),I=a.n(D),L=a(1),W=a.n(L),B=a(5),F=a.n(B),H=a(31),M=a(45),K=a.n(M),G=a(10),U=a.n(G),z=a(7),q=a.n(z),J=function(e){var t=e.data,a=Object(n.useState)(!1),o=K()(a,2),l=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"site_header",className:U()(q.a.header,{[q.a.menuHide]:!l})},r.a.createElement("div",{className:"header-content"},r.a.createElement("div",{className:q.a.headerPhoto},r.a.createElement("img",{src:t.get("avatar"),alt:t.get("name")})),r.a.createElement("div",{className:q.a.headerTitles},r.a.createElement("h2",null,t.get("name")),r.a.createElement("h4",null,t.get("position"))),r.a.createElement("div",{className:q.a.socialLinks},r.a.createElement("ul",null,t.get("services")&&t.get("services").map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-".concat(e.icon)})))}))))),r.a.createElement("div",{className:q.a.headerButtons},t.get("cv")?r.a.createElement("a",{href:t.get("cv"),rel:"noopener noreferrer",target:"_blank",className:U()("btn-primary",q.a.btnPrimary)},"Download CV"):""),r.a.createElement("div",{className:q.a.copyrights},"© 2020 All rights reserved.")),r.a.createElement("div",{className:U()(q.a.menuToggle,{[q.a.open]:l}),onClick:function(){return i(!l)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))};J.propTypes={data:W.a.any.isRequired};var V=J,X=a(46),Y=a.n(X),Q=a(18),Z=a.n(Q),$=a(2),ee=a(47),te=a(48),ae=a.n(te),ne=function(e){return{type:"GET_ERRORS",payload:e}},re=a(8),oe=a(34),le=a.n(oe),ie=function(e){var t=e.subtitle;return r.a.createElement("div",{className:t?le.a.titleSmall:le.a.title},t?r.a.createElement("h3",null,e.children):r.a.createElement("h2",null,e.children))};ie.propTypes={children:W.a.any,subtitle:W.a.bool};var ce=ie,se=a(11),ue=Object(se.a)([function(e){return e.profile.workData}],(function(e){return e})),me=Object(se.a)([function(e){return e.profile.workSkills}],(function(e){return e})),de=Object(se.a)([function(e){return e.profile.workBooks}],(function(e){return e})),pe=Object(se.a)([function(e){return e.profile.workCertificates}],(function(e){return e})),fe=Object(se.a)([function(e){return e.errors}],(function(e){return e})),he=(a(67),a(12)),ge=a.n(he),Ee=function(e){var t=e.data;return r.a.createElement("div",{className:U()(ge.a.timeline,"clearfix")},t.map((function(e){return r.a.createElement("div",{key:e.label,className:U()(ge.a.timelineItem,"clearfix")},r.a.createElement("div",{className:ge.a.leftPart},r.a.createElement("h5",{className:ge.a.itemPeriod},e.label),r.a.createElement("span",{className:ge.a.itemCompany},e.date)),r.a.createElement("div",{className:ge.a.divider}),r.a.createElement("div",{className:ge.a.rightPart},r.a.createElement("h4",{className:ge.a.itemTitle},e.title),e.content))})))};Ee.propTypes={children:W.a.any,data:W.a.any};var ve=Ee,ke=a(35),ye=a.n(ke),be=function(e){return r.a.createElement("ul",{className:ye.a.skills},e.data.map((function(e){return r.a.createElement("li",{key:e.name,className:ye.a.skillItem},e.name)})))};be.propTypes={data:F.a.list,className:W.a.string};var we=be,_e=a(13),Oe=a.n(_e),Se=function(e){var t=e.data;return r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-lg-6"},r.a.createElement("div",{className:U()(Oe.a.certificateItem,"clearfix")},r.a.createElement("div",{className:Oe.a.certiLogo},r.a.createElement("img",{src:e.logo,alt:e.company})),r.a.createElement("div",{className:Oe.a.certiContent},r.a.createElement("div",{className:Oe.a.certiTitle},r.a.createElement("h4",null,e.name)),r.a.createElement("div",{className:Oe.a.certiId},r.a.createElement("span",null,"Credential ID: ",r.a.createElement("a",{href:e.link+e.id},e.id))),r.a.createElement("div",{className:Oe.a.certiDate},r.a.createElement("span",null,e.date)))))})))};Se.propTypes={data:F.a.list,className:W.a.string};var Te=Se,je=a(16),Pe=a.n(je),Ne=Object(se.a)([function(e){return e.author.authorInfo}],(function(e){return e})),Ae=function(){return{avatar:"https://avatars1.githubusercontent.com/u/1931010?s=460&v=4",name:"Andrei Arkhipov",position:"Software Engineer",location:"Russia, Saint Petersburg",email:"me@awb.pw",cv:"",services:[{name:"github",icon:"github",link:"https://github.com/awibox",color:"#24292e"},{name:"linkedin",icon:"linkedin-in",link:"https://linkedin.com/in/awibox",color:"#0077B5"},{name:"facebook",icon:"facebook-f",link:"https://facebook.com/awiboxpw",color:"#4267b2"},{name:"instagram",icon:"instagram",link:"https://www.instagram.com/awibox/",color:"rgb(38, 38, 38)"}],aboutMe:r.a.createElement("ul",null,r.a.createElement("li",null,"13+ years of experience"),r.a.createElement("li",null,"Tech stack: JavaScript, TypeScript, React, Angular 2+, Node.js (Express, Next.js)"),r.a.createElement("li",null,"Participated in the development of 20+ web-applications in various industries (include high-load platform)"),r.a.createElement("li",null,"Experience creating apps from scratch"),r.a.createElement("li",null,"Automating everything that can be automated"))}},Ce=function(){return function(e){try{e(function(e){return{type:"GET_AUTHOR_DATA",payload:e}}(Ae()))}catch(t){e(ne({message:"Author data not found"}))}}};function Re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=I()(e);if(t){var r=I()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}var xe=function(e){C()(a,e);var t=Re(a);function a(){return S()(this,a),t.apply(this,arguments)}return j()(a,[{key:"componentDidMount",value:function(){this.props.getWorkDataAction(),this.props.getWorkSkillsAction(),this.props.getWorkBooksAction(),this.props.getWorkCertificatesAction()}},{key:"render",value:function(){var e=this.props,t=e.workData,a=e.workSkills,n=e.workCertificates,o=e.AuthorInfo,l=e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null,"About ",r.a.createElement("span",null,"me")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-7"},r.a.createElement("div",{className:Pe.a.description},o.get("aboutMe"))),r.a.createElement("div",{className:"col-xs-12 col-md-5"},r.a.createElement("div",{className:Pe.a.infoList},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:Pe.a.title},"Name"),r.a.createElement("span",{className:"value"},o.get("name"))),r.a.createElement("li",null,r.a.createElement("span",{className:Pe.a.title},"Location"),r.a.createElement("span",{className:"value"},o.get("location"))),r.a.createElement("li",null,r.a.createElement("span",{className:Pe.a.title},"E-mail"),r.a.createElement("span",{className:"value"},o.get("email"))))))),void 0!==l.message&&r.a.createElement(re.Alert,null,l.message),r.a.createElement("div",{className:"section-content"},r.a.createElement(ce,{subtitle:!0},"Experience"),r.a.createElement(ve,{data:t}),r.a.createElement(ce,{subtitle:!0},"My ",r.a.createElement("span",null,"skills")),r.a.createElement(we,{data:a}),r.a.createElement(ce,{subtitle:!0},"Certificates"),r.a.createElement(Te,{data:n})),r.a.createElement(ae.a,{promiseTracker:ee.usePromiseTracker,color:"#3d5e61"}))}}]),a}(n.Component);xe.propTypes={getWorkDataAction:W.a.func.isRequired,getWorkSkillsAction:W.a.func.isRequired,getWorkBooksAction:W.a.func.isRequired,getWorkCertificatesAction:W.a.func.isRequired,getAuthorDataAction:W.a.func.isRequired,AuthorInfo:F.a.map,workData:F.a.list,workSkills:F.a.list,workBooks:F.a.list,workCertificates:F.a.list,errors:W.a.shape({message:W.a.string})},xe.defaultProps={workData:Object(d.List)([]),workSkills:Object(d.List)([]),workBooks:Object(d.List)([]),workCertificates:Object(d.List)([]),AuthorInfo:Object(d.Map)({avatar:""})};var De={getWorkDataAction:function(){return function(e){try{e(function(e){return{type:"GET_WORK_DATA",payload:e}}([{date:"2019 - Current",title:"Lead Software Engineer",label:"Luxoft",location:"Saint Petersburg (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I'm a team lead on a project of public services. My team is developing a new version of the form player from scratch."),r.a.createElement("ul",null,r.a.createElement("li",null,"Building a client-side architecture."),r.a.createElement("li",null,"Integration of automatic code verification"),r.a.createElement("li",null,"The process of code review"),r.a.createElement("li",null,"Delivery as an npm package")))},{date:"2018 - 2019",title:"Senior Software Engineer",label:"Tutu.ru",location:"Moscow (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I developed bus selling section (single page application with React) on high-load (with more than 6 millions users per month) travel site system."),r.a.createElement("ul",null,r.a.createElement("li",null,"Page loading speed on high-load pages has been optimized by more than 2 times"),r.a.createElement("li",null,"The search form was refactored (an important part of the product) which was necessary to fix a large number of inherited and global logical errors"),r.a.createElement("li",null,"2-fold increase in unit test coverage"),r.a.createElement("li",null,"Developed new services for product"),r.a.createElement("li",null,"Performed Code Reviews"),r.a.createElement("li",null,"Had experience in Scrum team"),r.a.createElement("li",null,"Worked closely with UI/UX designer")))},{date:"2016 - 2018",title:"Lead Software Developer",label:"CUSTIS",location:"Moscow (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I led a front-end development team of 10 people on the education project"),r.a.createElement("ul",null,r.a.createElement("li",null,"Planning the work of frontend teams"),r.a.createElement("li",null,"Made knowledge-sharing and documentation creation processes"),r.a.createElement("li",null,"Performed Code Reviews"),r.a.createElement("li",null,"Conducted 1-on-1 meetings with developers"),r.a.createElement("li",null,"Interviewed candidates for developer position"),r.a.createElement("li",null,"Implemented GitLab Flow which allowed to eliminate time-consuming `git rebase`"),r.a.createElement("li",null,"Implemented ТSLint to improve code readability"),r.a.createElement("li",null,"Participated in the development of UI-kit for the project"),r.a.createElement("li",null,"Participated in the development of a complex authentication system")))},{date:"2013 - 2016",title:"Senior Software Engineer",label:"Rutube",location:"Moscow (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Participated in the development of projects:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Video hosting Rutube"),r.a.createElement("li",null,"Development site and secure online voting system for the TEFI award"),r.a.createElement("li",null,"Broadcasts service NTV Plus"),r.a.createElement("li",null,"Developed the interface part of the online video editor for NTV Plus which makes it possible to cut highlights from the live broadcast (Angular 2, D3.js)."),r.a.createElement("li",null,"Made content management system for NTV Plus (single-page application using Angular 2).")))},{date:"2012 - 2013",title:"Web Developer",label:"BARS GROUP",location:"Kazan (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I developed front-end part of projects for public services such as:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Monitoring Cultural Heritage"),r.a.createElement("li",null,"Accessible Environment"),r.a.createElement("li",null,"Social network for school children")))},{date:"2007 - 2012",title:"Web Developer",label:"Freelance",location:"Kazan (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I created websites using CMS such as Wordpress, Joomla, NetCat, 1C Bitrix."))}]))}catch(t){e(ne({message:"Work data not found"}))}}},getWorkSkillsAction:function(){return function(e){try{e({type:"GET_WORK_SKILLS",payload:[{name:"JavaScript"},{name:"CSS"},{name:"Git"},{name:"HTML5"},{name:"React"},{name:"Redux"},{name:"Immutable.js"},{name:"Angular"},{name:"Backbone"},{name:"Knockout"},{name:"Sencha Touch"},{name:"TypeScript"},{name:"Webpack"},{name:"Babel.js"},{name:"Reselect"},{name:"Jest"},{name:"Karma"},{name:"Enzyme"},{name:"Node.js"},{name:"Express"},{name:"MongoDB"},{name:"Photoshop"},{name:"Handlebars"},{name:"Mustache"},{name:"Twig"},{name:"SketchUp"},{name:"Docker"},{name:"SCSS"},{name:"LESS"},{name:"Stylus"},{name:"CSS-modules"},{name:"PropTypes"},{name:"Async/Await"},{name:"EventLoop"}]})}catch(t){e(ne({message:"Work skills not found"}))}}},getWorkBooksAction:function(){return function(e){try{e({type:"GET_WORK_BOOKS",payload:[{name:"Eloquent JavaScript",author:"Marijn Haverbeke",link:"https://eloquentjavascript.net/"},{name:"JavaScript: The Good Parts",author:"Douglas Crockford",link:"https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742"},{name:"Refactoring: Improving the Design of Existing Code",author:"Martin Fowler",link:"https://martinfowler.com/books/refactoring.html"},{name:"Working Effectively with Legacy Code",author:"Michael Feathers",link:"https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052"},{name:"Code Complete: A Practical Handbook of Software Construction",author:"Steve McConnell",link:"https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670"},{name:"Extreme Programming Explained: Embrace Change",author:"Kent Beck",link:"https://www.amazon.com/dp/B00N1ZN6C0/"}]})}catch(t){e(ne({message:"Work books not found"}))}}},getWorkCertificatesAction:function(){return function(e){try{e({type:"GET_WORK_CERTIFICATES",payload:[{name:"JavaScript",id:"F510F1E6D375",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"React",id:"8DABF8164735",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"Problem Solving",id:"D18174E870B3",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"Python",id:"9D32D3FBF1E6",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"}]})}catch(t){e(ne({message:"Work certificates not found"}))}}},getAuthorDataAction:Ce},Ie=Object(o.b)((function(e){return{workData:ue(e),workSkills:me(e),workBooks:de(e),workCertificates:pe(e),errors:fe(e),AuthorInfo:Ne(e)}}),De)(xe),Le=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},"Cookie Policy"),r.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"center"}},r.a.createElement("div",{style:{padding:"20px",maxWidth:"500px"}},r.a.createElement(re.Card,{title:"Why we use cookies?"},r.a.createElement("p",null,"We use cookies and other similar technologies for only analytical purposes that will help us distinguish you from other users of our site. This allows you to provide a convenient view of our site, and also gives you the opportunity to improve it."),r.a.createElement("p",null,"We use web analytics tool for the purpose of general analysis of site usage. The information obtained in this case can be transmitted in an anonymous form to the server of the web Analytics service, stored and processed there."),r.a.createElement("p",null,"We use Google Analytics and related cookies: ",r.a.createElement("a",{href:"https://policies.google.com/privacy?hl=en",target:"_blank",rel:"noopener noreferrer"},"Google Privacy Policy"))),r.a.createElement(re.Card,{title:"How can you prevent the use of cookies?"},r.a.createElement("p",null,"Most browsers automatically accept cookies. You can delete saved cookies on your device at any time. How this is done in more detail, you can find in the instructions for using your browser or the your device."),r.a.createElement("p",null,"You can also disable any or only certain cookies in your browser settings. However, all browsers differ from each other, so for more information about cookie settings, see the Help section of your browser.")))))},We=a(19),Be=a.n(We),Fe=function(){return r.a.createElement("div",{className:Be.a.logo},r.a.createElement("div",{className:Be.a.bracket},"{"),r.a.createElement("div",{className:Be.a.text},"AWB"),r.a.createElement("div",{className:Be.a.bracket},"}"))},He=a(27),Me=a.n(He),Ke=function(){return r.a.createElement(re.Card,{title:"Branding"},r.a.createElement("div",{className:Me.a.branding},r.a.createElement("div",{className:Me.a.icon},r.a.createElement("i",{className:"fa fa-list"})),r.a.createElement("div",{className:Me.a.logo},r.a.createElement(Fe,null))))},Ge=a(36),Ue=a.n(Ge),ze=function(){return r.a.createElement(re.Card,{className:Ue.a.notFound},r.a.createElement("div",{className:Ue.a.code},"404"),r.a.createElement("p",null,"We couldn't find this page."),r.a.createElement("p",null,"The page you are looking for does not exists."))},qe=function(){return r.a.createElement($.c,null,r.a.createElement($.a,{exact:!0,path:"/",component:Ie}),r.a.createElement($.a,{exact:!0,path:"/cookie-policy",component:Le}),r.a.createElement($.a,{exact:!0,path:"/branding",component:Ke}),r.a.createElement($.a,{component:ze}))};function Je(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=I()(e);if(t){var r=I()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}var Ve=function(e){C()(a,e);var t=Je(a);function a(e){var n;return S()(this,a),(n=t.call(this,e)).state={consentStatus:!1},n.checkStatus=n.checkStatus.bind(N()(n)),n}return j()(a,[{key:"checkStatus",value:function(e){this.setState({consentStatus:e})}},{key:"componentDidMount",value:function(){this.props.getAuthorDataAction()}},{key:"render",value:function(){var e=this.props.AuthorInfo;return r.a.createElement(H.a,null,r.a.createElement(V,{data:e}),r.a.createElement("div",{className:Z.a.contentArea},r.a.createElement("div",{className:Z.a.animatedSections},r.a.createElement("section",{"data-id":"home",className:Z.a.animatedSection},r.a.createElement("div",{className:Z.a.scrollbar},r.a.createElement(qe,null))))),r.a.createElement(Y.a,{background:"#0079c1",bottomPosition:!1,buttonText:"I agree",buttonBackground:"#fff",buttonColor:"#000",buttonFontSize:14,color:"#fff",consentFunction:this.checkStatus,padding:20},"This website uses cookies for analytical purposes. Please read our ",r.a.createElement("a",{href:"/cookie-policy",style:{color:"#fff"}},"Cookie Policy")," and confirm your consent to the use of cookies."))}}]),a}(n.Component);Ve.propTypes={getAuthorDataAction:W.a.func.isRequired,AuthorInfo:F.a.map},Ve.defaultProps={AuthorInfo:Object(d.Map)({avatar:""})};var Xe={getAuthorDataAction:Ce},Ye=Object(o.b)((function(e){return{AuthorInfo:Ne(e)}}),Xe)(Ve);a(69),a(70);i.a.render(r.a.createElement(o.a,{store:_},r.a.createElement(Ye,null)),document.getElementById("root"))}});