!function(e){function t(t){for(var n,l,o=t[0],c=t[1],s=t[2],m=0,d=[];m<o.length;m++)l=o[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=c;i.push([59,1]),a()}({59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),l=a(17),o=a.n(l),c=a(11),s=a(28),u=a(18),m=a.n(u),d="GET_ERRORS",p="GET_WORK_DATA",f="GET_WORK_SKILLS",h="GET_WORK_EXPERIENCE",g="GET_WORK_CERTIFICATES",E="GET_AUTHOR_DATA",v=a(4);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k={},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return b(b({},e),{},{authorInfo:Object(v.Map)(t.payload)});default:return e}},_={};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S={},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return N(N({},e),{},{workData:Object(v.List)(t.payload)});case f:return N(N({},e),{},{workSkills:Object(v.List)(t.payload)});case h:return N(N({},e),{},{workExperience:Object(v.List)(t.payload)});case g:return N(N({},e),{},{workCertificates:Object(v.List)(t.payload)});default:return e}},P=Object(c.c)({author:w,errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}},profile:j}),x=Object(c.e)(P,{},window.__REDUX_DEVTOOLS_EXTENSION__?Object(c.d)(Object(c.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__()):Object(c.a)(s.a)),A=a(19),T=a.n(A),R=a(20),D=a.n(R),C=a(25),I=a.n(C),W=a(21),L=a.n(W),H=a(22),M=a.n(H),F=a(14),B=a.n(F),G=a(1),J=a.n(G),K=a(6),z=a.n(K),q=a(26),U=a(36),V=a.n(U),X=a(10),Y=a.n(X),Q="Header__headerPhoto--zj80a",Z="Header__headerTitles--2JgOT",$="Header__socialLinks--1QPuq",ee="Header__headerButtons--1jKLY",te="Header__btnPrimary--enK5U",ae="Header__copyrights--2BeKI",ne="Header__menuToggle--39hpT",re="Header__open--25kjs",ie="Header__header--2ENlm",le="Header__menuHide--2iiH1",oe=function(e){var t=e.data,a=Object(n.useState)(!1),i=V()(a,2),l=i[0],o=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"site_header",className:Y()(ie,{[le]:!l})},r.a.createElement("div",{className:"header-content"},r.a.createElement("div",{className:Q},r.a.createElement("img",{src:t.get("avatar"),alt:t.get("name")})),r.a.createElement("div",{className:Z},r.a.createElement("h2",null,t.get("name")),r.a.createElement("h4",null,t.get("position"))),r.a.createElement("div",{className:$},r.a.createElement("ul",null,t.get("services")&&t.get("services").map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-".concat(e.icon)})))}))))),r.a.createElement("div",{className:ee},t.get("cv")?r.a.createElement("a",{href:t.get("cv"),rel:"noopener noreferrer",target:"_blank",className:Y()("btn-primary",te)},"Download CV"):""),r.a.createElement("div",{className:ae},"© 2020 All rights reserved.")),r.a.createElement("div",{className:Y()(ne,{[re]:l}),onClick:function(){return o(!l)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))};oe.propTypes={data:J.a.any.isRequired};var ce=oe,se=a(37),ue=a.n(se),me="container__contentArea--2zTfK",de="container__animatedSections--iLJci",pe="container__animatedSection--2cgxf",fe="container__scrollbar--3Mmpp",he=a(3),ge=a(38),Ee=a(39),ve=a.n(Ee),ye=function(e){return{type:d,payload:e}},be="Title__title--1D_Ak",ke="Title__titleSmall--3aboo",we=function(e){var t=e.subtitle;return r.a.createElement("div",{className:t?ke:be},t?r.a.createElement("h3",null,e.children):r.a.createElement("h2",null,e.children))};we.propTypes={children:J.a.any,subtitle:J.a.bool};var _e=we,Oe="Github__github--2pz2x",Ne="Github__stats--2h2Qz",Se="Github__languages--2P53O",je=function(){var e=window.innerWidth<415;return r.a.createElement("div",{className:Oe},r.a.createElement("img",{className:Ne,src:"https://github-readme-stats.vercel.app/api?username=awibox&show_icons=true&hide_title=true&icon_color=fea621&title_color=fea621&hide_border=true&include_all_commits=true&count_private=true&hide_rank=".concat(e),alt:"GitHub Stats"}),r.a.createElement("img",{className:Se,src:"https://github-readme-stats.vercel.app/api/top-langs/?username=awibox&layout=compact&langs_count=8&hide_border=true&hide_title=true",alt:"Most used languages"}))},Pe=a(12),xe=Object(Pe.a)([function(e){return e.profile.workData}],(function(e){return e})),Ae=Object(Pe.a)([function(e){return e.profile.workSkills}],(function(e){return e})),Te=Object(Pe.a)([function(e){return e.profile.workExperience}],(function(e){return e})),Re=Object(Pe.a)([function(e){return e.profile.workCertificates}],(function(e){return e})),De=Object(Pe.a)([function(e){return e.errors}],(function(e){return e})),Ce="Timeline__timeline--mpAMV",Ie="Timeline__timelineItem--1TYX1",We="Timeline__leftPart--14hpo",Le="Timeline__rightPart--FONY2",He="Timeline__divider--2dWjs",Me="Timeline__itemTitle--2OSXv",Fe="Timeline__itemPeriod--2iJ8T",Be="Timeline__itemCompany--elg23",Ge=function(e){var t=e.data;return r.a.createElement("div",{className:Y()(Ce,"clearfix")},t.map((function(e){return r.a.createElement("div",{key:e.label,className:Y()(Ie,"clearfix")},r.a.createElement("div",{className:We},r.a.createElement("h5",{className:Fe},e.label),r.a.createElement("span",{className:Be},e.date)),r.a.createElement("div",{className:He}),r.a.createElement("div",{className:Le},r.a.createElement("h4",{className:Me},e.title),e.content))})))};Ge.propTypes={children:J.a.any,data:J.a.any};var Je=Ge,Ke="Experience__experience--v3YPF",ze="Experience__skillContainer--v-Lcd",qe="Experience__skillValue--24ZZ9",Ue="Experience__skillPercentage--ta52M",Ve=function(e){var t=e.data;return r.a.createElement("div",{className:Y()(Ke,"row")},t.map((function(e){return r.a.createElement("div",{key:e.name,className:"col-md-6"},r.a.createElement("div",{className:"skill clearfix"},r.a.createElement("h4",null,e.name),r.a.createElement("div",{className:qe},e.years," ",1===e.years?"year":"years")),r.a.createElement("div",{className:ze},r.a.createElement("div",{className:Ue,style:{width:"".concat(e.percentage,"%")}})))})))};Ve.propTypes={data:z.a.list.isRequired};var Xe=Ve,Ye="Skills__skills--3-MwI",Qe="Skills__skillItem--2P_7z",Ze=function(e){return r.a.createElement("ul",{className:Ye},e.data.map((function(e){return r.a.createElement("li",{key:e.name,className:Qe},e.name)})))};Ze.propTypes={data:z.a.list,className:J.a.string};var $e=Ze,et="Certificates__certificateItem--1I74x",tt="Certificates__certiLogo--Kavoi",at="Certificates__certiContent--3Gs1y",nt="Certificates__certiTitle--3sIca",rt="Certificates__certiId--1l7Lv",it="Certificates__certiDate--RGhPd",lt=function(e){var t=e.data;return r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-6"},r.a.createElement("div",{className:Y()(et,"clearfix")},r.a.createElement("div",{className:tt},r.a.createElement("img",{src:e.logo,alt:e.company})),r.a.createElement("div",{className:at},r.a.createElement("div",{className:nt},r.a.createElement("h4",null,e.name)),r.a.createElement("div",{className:rt},r.a.createElement("span",null,"ID: ",r.a.createElement("a",{href:e.link+e.id},e.id))),r.a.createElement("div",{className:it},r.a.createElement("span",null,e.company," (",e.date,")")))))})))};lt.propTypes={data:z.a.list,className:J.a.string};var ot=lt,ct="Profile__description--DzNMQ",st="Profile__infoList--JhM_L",ut="Profile__title--2C5NQ",mt=Object(Pe.a)([function(e){return e.author.authorInfo}],(function(e){return e})),dt=function(){return{avatar:"https://avatars1.githubusercontent.com/u/1931010?s=460&v=4",name:"Andrei Arkhipov",position:"Software Engineer",location:"Russia, Saint Petersburg",email:"me@awb.pw",cv:"/Resume-Andrei-Arkhipov.pdf",services:[{name:"github",icon:"github",link:"https://github.com/awibox",color:"#24292e"},{name:"linkedin",icon:"linkedin-in",link:"https://linkedin.com/in/awibox",color:"#0077B5"},{name:"instagram",icon:"instagram",link:"https://www.instagram.com/awibox/",color:"rgb(38, 38, 38)"}],aboutMe:r.a.createElement("div",null,"I'm a Software Engineer with over 13 years of experience in various industries such as public services, travel, education, finance and video streaming services. Proficient in JavaScript, TypeScript, React, Angular 2+, Node.js (Express, Next.js). Experienced in building high-load single page applications and npm packages from scratch. Skilled in developing complex adaptive interfaces, configuring CI workflow and solving non-trivial problem. HackerRank certified. Well-versed in Scrum and Agile.")}},pt=function(){return function(e){try{e(function(e){return{type:E,payload:e}}(dt()))}catch(t){e(ye({message:"Author data not found"}))}}};function ft(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=B()(e);if(t){var r=B()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return M()(this,a)}}var ht=function(e){L()(a,e);var t=ft(a);function a(){return T()(this,a),t.apply(this,arguments)}return D()(a,[{key:"componentDidMount",value:function(){this.props.getWorkDataAction(),this.props.getWorkSkillsAction(),this.props.getWorkExperienceAction(),this.props.getWorkCertificatesAction()}},{key:"render",value:function(){var e=this.props,t=e.workData,a=e.workSkills,n=e.workExperience,i=e.workCertificates,l=e.AuthorInfo,o=e.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,null,"About ",r.a.createElement("span",null,"me")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-7"},r.a.createElement("div",{className:ct},l.get("aboutMe"))),r.a.createElement("div",{className:"col-xs-12 col-md-5"},r.a.createElement("div",{className:st},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:ut},"Name"),r.a.createElement("span",{className:"value"},l.get("name"))),r.a.createElement("li",null,r.a.createElement("span",{className:ut},"Location"),r.a.createElement("span",{className:"value"},l.get("location"))),r.a.createElement("li",null,r.a.createElement("span",{className:ut},"E-mail"),r.a.createElement("span",{className:"value"},l.get("email"))))))),void 0!==o.message&&o.message,r.a.createElement("div",{className:"section-content"},r.a.createElement(_e,{subtitle:!0},"Experience"),r.a.createElement(Je,{data:t}),r.a.createElement(_e,{subtitle:!0},"Experience"),r.a.createElement(Xe,{data:n}),r.a.createElement(_e,{subtitle:!0},"Skills"),r.a.createElement($e,{data:a}),r.a.createElement(_e,{subtitle:!0},"Github ",r.a.createElement("span",null,"Stats")),r.a.createElement(je,null),r.a.createElement(_e,{subtitle:!0},"Certificates"),r.a.createElement(ot,{data:i})),r.a.createElement(ve.a,{promiseTracker:ge.usePromiseTracker,color:"#3d5e61"}))}}]),a}(n.Component);ht.propTypes={getWorkDataAction:J.a.func.isRequired,getWorkSkillsAction:J.a.func.isRequired,getWorkExperienceAction:J.a.func.isRequired,getWorkCertificatesAction:J.a.func.isRequired,getAuthorDataAction:J.a.func.isRequired,AuthorInfo:z.a.map,workData:z.a.list,workSkills:z.a.list,workExperience:z.a.list,workCertificates:z.a.list,errors:J.a.shape({message:J.a.string})},ht.defaultProps={workData:Object(v.List)([]),workSkills:Object(v.List)([]),workExperience:Object(v.List)([]),workCertificates:Object(v.List)([]),AuthorInfo:Object(v.Map)({avatar:""})};var gt={getWorkDataAction:function(){return function(e){try{e(function(e){return{type:p,payload:e}}([{date:"2019 - Current",title:"Lead Software Engineer",label:"Luxoft",location:"Saint Petersburg (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I'm a team lead on a project of public services.",r.a.createElement("br",null),"My team developed a new version of the form player from scratch."),r.a.createElement("ul",null,r.a.createElement("li",null,"Built a client-side architecture (delivery as an npm package)"),r.a.createElement("li",null,"Integrated automatic code verification (linters, tests, static code analysis)"),r.a.createElement("li",null,"Configured the code review process"),r.a.createElement("li",null,"Involving team members in product improvement"),r.a.createElement("li",null,"Interviewed candidates for developer position")),r.a.createElement("div",null,"The first version of the product went into production in 3 months."))},{date:"2018 - 2019",title:"Senior Software Engineer",label:"Tutu.ru",location:"Moscow (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I developed bus selling section (single page application with React) on high-load (with more than 6 millions users per month) travel site system."),r.a.createElement("ul",null,r.a.createElement("li",null,"Page loading speed on high-load pages has been optimized by more than 2 times"),r.a.createElement("li",null,"The search form was refactored (an important part of the product) which was necessary to fix a large number of inherited and global logical errors"),r.a.createElement("li",null,"2-fold increase in unit test coverage"),r.a.createElement("li",null,"Developed new services for product"),r.a.createElement("li",null,"Performed Code Reviews"),r.a.createElement("li",null,"Had experience in Scrum team"),r.a.createElement("li",null,"Worked closely with UI/UX designer")))},{date:"2016 - 2018",title:"Lead Software Developer",label:"CUSTIS",location:"Moscow (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I led a front-end development team of 10 people on the education project"),r.a.createElement("ul",null,r.a.createElement("li",null,"Planning the work of frontend teams"),r.a.createElement("li",null,"Made knowledge-sharing and documentation creation processes"),r.a.createElement("li",null,"Performed Code Reviews"),r.a.createElement("li",null,"Conducted 1-on-1 meetings with developers"),r.a.createElement("li",null,"Interviewed candidates for developer position"),r.a.createElement("li",null,"Implemented GitLab Flow which allowed to eliminate time-consuming `git rebase`"),r.a.createElement("li",null,"Implemented ТSLint to improve code readability"),r.a.createElement("li",null,"Participated in the development of UI-kit for the project"),r.a.createElement("li",null,"Participated in the development of a complex authentication system")))},{date:"2013 - 2016",title:"Senior Software Engineer",label:"Rutube",location:"Moscow (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Participated in the development of projects:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Video hosting Rutube"),r.a.createElement("li",null,"Development site and secure online voting system for the TEFI award"),r.a.createElement("li",null,"Broadcasts service NTV Plus"),r.a.createElement("li",null,"Developed the interface part of the online video editor for NTV Plus which makes it possible to cut highlights from the live broadcast (Angular 2, D3.js)."),r.a.createElement("li",null,"Made content management system for NTV Plus (single-page application using Angular 2).")))},{date:"2012 - 2013",title:"Web Developer",label:"BARS GROUP",location:"Kazan (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I developed front-end part of projects for public services such as:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Monitoring Cultural Heritage"),r.a.createElement("li",null,"Accessible Environment"),r.a.createElement("li",null,"Social network for school children")))},{date:"2007 - 2012",title:"Web Developer",label:"Freelance",location:"Kazan (Russia)",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"I have created websites using CMS such as Wordpress, Joomla, NetCat, 1C Bitrix."))}]))}catch(t){e(ye({message:"Work data not found"}))}}},getWorkExperienceAction:function(){return function(e){try{e({type:h,payload:[{name:"HTML",years:13,percentage:100},{name:"CSS",years:13,percentage:100},{name:"JavaScript",years:13,percentage:100},{name:"React",years:4,percentage:85},{name:"Angular",years:7,percentage:75},{name:"TypeScript",years:6,percentage:70},{name:"Node JS",years:2,percentage:40},{name:"Python",years:1,percentage:25}]})}catch(t){e(ye({message:"Work Experience not found"}))}}},getWorkSkillsAction:function(){return function(e){try{e({type:f,payload:[{name:"Git"},{name:"Redux"},{name:"Immutable.js"},{name:"Webpack"},{name:"Jest"},{name:"Express"},{name:"MongoDB"},{name:"Docker"},{name:"CSS-modules"}]})}catch(t){e(ye({message:"Work skills not found"}))}}},getWorkCertificatesAction:function(){return function(e){try{e({type:g,payload:[{name:"JavaScript",id:"F510F1E6D375",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"React",id:"8DABF8164735",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"Angular",id:"80c57f2c0068",date:"Mar 2021",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"Problem Solving",id:"D18174E870B3",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"CSS",id:"643f3815cff8",date:"Mar 2021",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"},{name:"Python",id:"9D32D3FBF1E6",date:"Apr 2020",company:"Hacker Rank",logo:"img/hacker-rank.jpeg",link:"https://www.hackerrank.com/certificates/"}]})}catch(t){e(ye({message:"Work certificates not found"}))}}},getAuthorDataAction:pt},Et=Object(i.b)((function(e){return{workData:xe(e),workSkills:Ae(e),workExperience:Te(e),workCertificates:Re(e),errors:De(e),AuthorInfo:mt(e)}}),gt)(ht),vt=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},"Cookie Policy"),r.a.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"center"}},r.a.createElement("div",{style:{padding:"20px",maxWidth:"500px"}},r.a.createElement("div",{title:"Why we use cookies?"},r.a.createElement("p",null,"We use cookies and other similar technologies for only analytical purposes that will help us distinguish you from other users of our site. This allows you to provide a convenient view of our site, and also gives you the opportunity to improve it."),r.a.createElement("p",null,"We use web analytics tool for the purpose of general analysis of site usage. The information obtained in this case can be transmitted in an anonymous form to the server of the web Analytics service, stored and processed there."),r.a.createElement("p",null,"We use Google Analytics and related cookies: ",r.a.createElement("a",{href:"https://policies.google.com/privacy?hl=en",target:"_blank",rel:"noopener noreferrer"},"Google Privacy Policy"))),r.a.createElement("div",{title:"How can you prevent the use of cookies?"},r.a.createElement("p",null,"Most browsers automatically accept cookies. You can delete saved cookies on your device at any time. How this is done in more detail, you can find in the instructions for using your browser or the your device."),r.a.createElement("p",null,"You can also disable any or only certain cookies in your browser settings. However, all browsers differ from each other, so for more information about cookie settings, see the Help section of your browser.")))))},yt="Logo__logo--1NSo5",bt="Logo__bracket--2oK9z",kt="Logo__text--1Ou5v",wt=function(){return r.a.createElement("div",{className:yt},r.a.createElement("div",{className:bt},"{"),r.a.createElement("div",{className:kt},"AWB"),r.a.createElement("div",{className:bt},"}"))},_t="Branding__branding--2bd_O",Ot="Branding__logo--1iCp8",Nt="Branding__icon--2qcHJ",St=function(){return r.a.createElement("div",{title:"Branding"},r.a.createElement("div",{className:_t},r.a.createElement("div",{className:Nt},r.a.createElement("i",{className:"fa fa-list"})),r.a.createElement("div",{className:Ot},r.a.createElement(wt,null))))},jt="NotFound__code--2Ap6L",Pt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:jt},"404"),r.a.createElement("p",null,"We couldn't find this page."),r.a.createElement("p",null,"The page you are looking for does not exists."))},xt=function(){return r.a.createElement(he.c,null,r.a.createElement(he.a,{exact:!0,path:"/",component:Et}),r.a.createElement(he.a,{exact:!0,path:"/cookie-policy",component:vt}),r.a.createElement(he.a,{exact:!0,path:"/branding",component:St}),r.a.createElement(he.a,{component:Pt}))};function At(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=B()(e);if(t){var r=B()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return M()(this,a)}}var Tt=function(e){L()(a,e);var t=At(a);function a(e){var n;return T()(this,a),(n=t.call(this,e)).state={consentStatus:!1},n.checkStatus=n.checkStatus.bind(I()(n)),n}return D()(a,[{key:"checkStatus",value:function(e){this.setState({consentStatus:e})}},{key:"componentDidMount",value:function(){this.props.getAuthorDataAction(),document.addEventListener("mousemove",(function(e){var t=23/window.innerWidth*(e.pageX-window.innerWidth/2)*-1,a=23/window.innerHeight*(e.pageY-window.innerHeight/2)*-1,n=document.getElementsByClassName("lm-animated-bg"),r=n[0].classList;r.add("transition"),n[0].style.backgroundPosition="calc( 50% + ".concat(t,"px ) calc( 50% + ").concat(a,"px )"),setTimeout((function(){r.remove("transition")}),300)}))}},{key:"render",value:function(){var e=this.props.AuthorInfo;return r.a.createElement(q.a,null,r.a.createElement(ce,{data:e}),r.a.createElement("div",{className:me},r.a.createElement("div",{className:de},r.a.createElement("section",{"data-id":"home",className:pe},r.a.createElement("div",{className:fe},r.a.createElement(xt,null))))),r.a.createElement(ue.a,{background:"#0079c1",bottomPosition:!1,buttonText:"I agree",buttonBackground:"#fff",buttonColor:"#000",buttonFontSize:14,color:"#fff",consentFunction:this.checkStatus,padding:20},"This website uses cookies for analytical purposes. Please read our ",r.a.createElement("a",{href:"/cookie-policy",style:{color:"#fff"}},"Cookie Policy")," and confirm your consent to the use of cookies."))}}]),a}(n.Component);Tt.propTypes={getAuthorDataAction:J.a.func.isRequired,AuthorInfo:z.a.map},Tt.defaultProps={AuthorInfo:Object(v.Map)({avatar:""})};var Rt={getAuthorDataAction:pt},Dt=Object(i.b)((function(e){return{AuthorInfo:mt(e)}}),Rt)(Tt);o.a.render(r.a.createElement(i.a,{store:x},r.a.createElement(Dt,null)),document.getElementById("root"))}});