(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"18Ly":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a("f3/d"),a("tUrg"),a("Z2Ku"),a("L9s1");var n=a("Wbzz"),r=a("q1tI"),c=a.n(r),l=(a("evdh"),a("o9+5")),o=a.n(l),s=a("lT3w"),i=a.n(s),m=a("LJsk"),u=a.n(m),d=a("F1Iq"),f=a.n(d),v=a("OH5e"),p=a.n(v),E=function(e){var t=e.to,a=e.children,r=e.className;return t.includes("http")||t.includes("mailto")?c.a.createElement("a",{className:r,href:t},a):c.a.createElement(n.Link,{className:r,to:t},a)},h=function(e){var t;switch(e.socialIcon){case"twitter":t=c.a.createElement(o.a,null);break;case"linkedin":t=c.a.createElement(i.a,null);break;case"medium":t=c.a.createElement(u.a,null);break;case"github":t=c.a.createElement(p.a,null);break;case"mail":t=c.a.createElement(f.a,null);break;default:return}return t},y=function(e){switch(e.isType){case"link":return a=(t=e).to,n=t.children,r=t.className,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"button"},c.a.createElement("div",{className:"button-container"},c.a.createElement(E,{className:"button-module "+(r||""),to:a},n))));case"social":return function(e){var t=e.socialIcon,a=e.to,n=e.className;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{className:"button-social "+(n||""),to:a},c.a.createElement(h,{socialIcon:t})))}(e);default:return}var t,a,n,r};function b(e,t,a){var n=e.link,r=e.name,l=e.icon;return l?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:t},c.a.createElement(y,{isType:"social",className:a,socialIcon:l,to:n}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"item-container"},c.a.createElement(y,{isType:"link",to:n,className:a,key:t},r)))}},Bl7J:function(e,t,a){"use strict";a("rE2o"),a("ioFf"),a("XfO3"),a("HEwt"),a("f3/d"),a("a1Th"),a("rGqo"),a("yt8O"),a("Btvt");var n=a("q1tI"),r=a.n(n),c=(a("tUrg"),a("Z2Ku"),a("L9s1"),a("Wbzz")),l=(a("W4c6"),a("X7BR")),o=a("18Ly");function s(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var m=function(e){for(var t,a=e.path,n=[],i=s(l.a.linksData.entries());!(t=i()).done;){var m=t.value,u=m[0],d=m[1],f=void 0;f=d.link.includes(a)?Object(o.a)(d,u,"button-module--active"):Object(o.a)(d,u),n.push(f)}return r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__title"},r.a.createElement(c.Link,{to:"/"},"COBOS")),r.a.createElement("div",{className:"nav"},n)))};function u(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t,a=e.children,n=e.location;t=[];for(var c,s=u(l.a.socialData.entries());!(c=s()).done;){var i=c.value,d=i[0],f=i[1];t.push(Object(o.a)(f,d))}return r.a.createElement("div",{className:"page-container"},r.a.createElement(m,{path:n}),r.a.createElement("main",null,a),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__items"},r.a.createElement("div",{className:"footer__copyright"},"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"."),r.a.createElement("div",{className:"footer__social"},r.a.createElement("div",{className:"social text-center"},r.a.createElement("ul",null,t))))))}},E6xs:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("Bl7J"),l=(a("kEC2"),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards cards-1 span-4"},r.a.createElement("div",{className:"cards__img"},r.a.createElement("img",{alt:"",src:"https://dummyimage.com/600x600/000/fff"})),r.a.createElement("div",{className:"cards__content"},r.a.createElement("div",{className:"cards__title"}),r.a.createElement("div",{className:"cards__text"}),r.a.createElement("div",{className:"cards__footer"})))))});t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("div",{className:"title"},"Portfolio"),r.a.createElement(l,null)))}},F1Iq:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("g",null,n.createElement("path",{d:"M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1 V8.8L15,14.8z"})))}r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 24",style:{enableBackground:"new 0 0 30 24"},xmlSpace:"preserve",className:"icon"},e.exports=r,r.default=r},LJsk:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{className:"st0",d:"M23.5,7.4C23.5,7.4,23.5,7.4,23.5,7.4L23.5,7.4l-5.2-2.6c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0\n                      c-0.2,0-0.4,0.1-0.5,0.3l-3,4.8l3.7,6.1L23.5,7.4C23.5,7.5,23.5,7.4,23.5,7.4z",key:0}),n.createElement("polygon",{className:"st0",points:"13,8.8 13,14.3 17.9,16.7   ",key:1}),n.createElement("path",{className:"st0",d:"M18.6,17.1l4,2c0.5,0.3,0.9,0.1,0.9-0.4V9L18.6,17.1z",key:2}),n.createElement("path",{className:"st0",d:"M12.1,7.4l-5-2.5C7,4.9,6.9,4.8,6.8,4.8C6.6,4.8,6.4,5,6.4,5.3v10.9c0,0.3,0.2,0.6,0.5,0.8l4.4,2.2\n                      c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.5-0.6L12.1,7.4C12.1,7.5,12.1,7.4,12.1,7.4z",key:3})]))}r.defaultProps={version:"1.1",id:"Layer_1",viewBox:"0 0 30 24",style:{enableBackground:"new 0 0 30 24"},xmlSpace:"preserve",className:"icon"},e.exports=r,r.default=r},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),c=a("vhPU"),l=/"/g,o=function(e,t,a,n){var r=String(c(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},OH5e:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{className:"st0",d:"M15,4c-4.5,0-8.2,3.7-8.2,8.2c0,3.6,2.4,6.7,5.6,7.8c0.4,0.1,0.6-0.2,0.6-0.4c0-0.2,0-0.8,0-1.5\n                      c-2.3,0.5-2.8-1-2.8-1c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.3,0.8,1.3,0.8c0.7,1.3,1.9,0.9,2.4,0.7\n                      c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.7-0.9-3.7-4.1c0-0.9,0.3-1.6,0.8-2.2c-0.1-0.2-0.4-1,0.1-2.2c0,0,0.7-0.2,2.3,0.8\n                      C13.6,8.1,14.3,8,15,8c0.7,0,1.4,0.1,2.1,0.3c1.6-1.1,2.3-0.8,2.3-0.8c0.4,1.1,0.2,2,0.1,2.2c0.5,0.6,0.8,1.3,0.8,2.2\n                      c0,3.2-1.9,3.8-3.7,4c0.3,0.3,0.6,0.8,0.6,1.5c0,1.1,0,2,0,2.3c0,0.2,0.1,0.5,0.6,0.4c3.3-1.1,5.6-4.2,5.6-7.8\n                      C23.2,7.7,19.5,4,15,4z",key:0}),n.createElement("path",{className:"st1",d:"M9.9,15.8c0,0-0.1,0.1-0.1,0c-0.1,0-0.1-0.1-0.1-0.1c0,0,0.1-0.1,0.1,0C9.9,15.7,9.9,15.7,9.9,15.8L9.9,15.8z\n                       M9.8,15.7",key:1}),n.createElement("path",{className:"st1",d:"M10.2,16.1c0,0-0.1,0-0.2,0C10,16.1,10,16,10,15.9c0,0,0.1,0,0.2,0C10.3,16,10.3,16.1,10.2,16.1L10.2,16.1z\n                       M10.2,16.1",key:2}),n.createElement("path",{className:"st1",d:"M10.6,16.6c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.2,0-0.2c0.1,0,0.1,0,0.2,0.1C10.6,16.5,10.6,16.6,10.6,16.6\n                      L10.6,16.6z M10.6,16.6",key:3}),n.createElement("path",{className:"st1",d:"M11,17.1c0,0-0.1,0-0.2,0c-0.1-0.1-0.1-0.2,0-0.2c0,0,0.1,0,0.2,0C11,16.9,11.1,17,11,17.1L11,17.1z M11,17.1",key:4}),n.createElement("path",{className:"st1",d:"M11.6,17.3c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1\n                      C11.6,17.2,11.6,17.3,11.6,17.3L11.6,17.3z M11.6,17.3",key:5}),n.createElement("path",{className:"st1",d:"M12.3,17.4c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2-0.1-0.2-0.1c0-0.1,0.1-0.1,0.2-0.1\n                      C12.2,17.3,12.3,17.3,12.3,17.4L12.3,17.4z M12.3,17.4",key:6}),n.createElement("path",{className:"st1",d:"M12.9,17.3c0,0.1-0.1,0.1-0.2,0.2c-0.1,0-0.2,0-0.2-0.1c0-0.1,0.1-0.1,0.2-0.2C12.8,17.2,12.9,17.2,12.9,17.3\n                      L12.9,17.3z M12.9,17.3",key:7})]))}r.defaultProps={version:"1.1",id:"Layer_1",viewBox:"0 0 30 24",style:{enableBackground:"new 0 0 30 24"},xmlSpace:"preserve",className:"icon"},e.exports=r,r.default=r},W4c6:function(e,t,a){},X7BR:function(e,t,a){"use strict";t.a={socialData:[{link:"https://twitter.com/cobosxyz",icon:"twitter"},{link:"https://www.linkedin.com/in/ernestocobos/",icon:"linkedin"},{link:"https://medium.com/@ernestocobos",icon:"medium"},{link:"https://github.com/C0305/",icon:"github"},{link:"mailto:ernesto@cobos.io",icon:"mail"}],linksData:[{name:"Index",link:"/"},{link:"/portfolio",name:"Portfolio"},{link:"https://medium.com/@ernestocobos",name:"Blog"},{link:"/contact",name:"Contact"}]}},evdh:function(e,t,a){},kEC2:function(e,t,a){},lT3w:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{id:"path-1_24_",d:"M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4\n                    c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7\n                    C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z"}))}r.defaultProps={version:"1.1",id:"Layer_1",viewBox:"0 0 30 24",style:{enableBackground:"new 0 0 30 24"},xmlSpace:"preserve",className:"icon"},e.exports=r,r.default=r},"o9+5":function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M24.71 5.89C24 6.2 23.2 6.4 22.4 6.53c0.82-0.5 1.45-1.29 1.75-2.23c-0.77 0.46-1.62 0.8-2.53 1 C20.92 4.5 19.9 4 18.7 4c-2.2 0-3.99 1.81-3.99 4.04c0 0.3 0 0.6 0.1 0.92C11.54 8.8 8.6 7.2 6.6 4.7 C6.3 5.3 6.1 6 6.1 6.77c0 1.4 0.7 2.6 1.8 3.36c-0.65-0.02-1.27-0.2-1.81-0.51c0 0 0 0 0 0.1 c0 2 1.4 3.6 3.2 3.96c-0.34 0.09-0.69 0.14-1.05 0.14c-0.26 0-0.51-0.03-0.75-0.07c0.51 1.6 2 2.8 3.7 2.8 c-1.36 1.08-3.08 1.73-4.95 1.73c-0.32 0-0.64-0.02-0.95-0.06C7.05 19.3 9.1 20 11.4 20c7.33 0 11.34-6.15 11.34-11.49 c0-0.18 0-0.35-0.01-0.52C23.5 7.4 24.2 6.7 24.7 5.89z"}))}r.defaultProps={version:"1.1",viewBox:"0 0 30 24",xmlSpace:"preserve",className:"icon"},e.exports=r,r.default=r},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-e0c0c60efc70fcfed775.js.map