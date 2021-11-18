(function(e){function t(t){for(var n,i,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("form",{on:{submit:function(t){t.preventDefault(),e.apiSearch(e.moviesPath,"it","movies"),e.apiSearch(e.seriesPath,"it","series")}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],attrs:{type:"text"},domProps:{value:e.searchInput},on:{input:function(t){t.target.composing||(e.searchInput=t.target.value)}}}),n("button",[e._v("Search")])])]),n("main",[n("ul",e._l(e.movies,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t.title)+" ("+e._s(t.original_title)+") "+e._s(e.getFlagFromCountry(t.original_language))+" "),e._l(e.getStarsArray(t.vote_average),(function(e,t){return n("font-awesome-icon",{key:t,attrs:{icon:e}})})),n("img",{attrs:{src:e.getPosterCompletePath("w342",t.poster_path),alt:""}})],2)})),0),n("hr"),n("ul",e._l(e.series,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t.name)+" ("+e._s(t.original_name)+") "+e._s(e.getFlagFromCountry(t.original_language))+" "),e._l(e.getStarsArray(t.vote_average),(function(e,t){return n("font-awesome-icon",{key:t,attrs:{icon:e}})})),n("img",{attrs:{src:e.getPosterCompletePath("w342",t.poster_path),alt:""}})],2)})),0)])])},o=[],i=r("2909"),u=(r("4de4"),r("d3b7"),r("d81d"),r("2ca0"),r("fb6a"),r("bc3a")),s=r.n(u),c=r("86f2"),p=r("dc3a"),l=r("ad3d"),f={name:"App",components:{FontAwesomeIcon:l["a"]},data:function(){return{apiUrl:"https://api.themoviedb.org/3",apiKey:"9050243653544e50d5a8b17836489f93",moviesPath:"/search/movie",movies:[],seriesPath:"/search/tv",series:[],imagePath:"https://image.tmdb.org/t/p/",searchInput:"ciao"}},methods:{apiSearch:function(e,t,r){var n=this;s.a.get(this.apiUrl+e,{params:{api_key:this.apiKey,language:t,query:this.searchInput}}).then((function(e){var t;n[r]=[],(t=n[r]).push.apply(t,Object(i["a"])(e.data.results))}))},getCountryfromLanguage:function(e){if("en"===e)return"GB";if("es"===e)return"ES";if("el"===e)return"GR";var t=r("e5d4"),n=t.getLanguage(e,(function(t,r){if(!t)return r.countries.map((function(e){return e.code_2})).filter((function(t){return t===e.toUpperCase()||t.startsWith(e.slice(0,1).toUpperCase())}))[0];console.log(t)}));return n},getFlagFromCountry:function(e){var t=this.getCountryfromLanguage(e);return Object(c["a"])(t)?Object(p["a"])(t):""},getStarsArray:function(e){for(var t=Math.ceil(e/2),r=[],n=0;n<5;n++)r.push(n<t?["fas","star"]:["far","star"]);return r},getPosterCompletePath:function(e,t){return t?this.imagePath+e+"/"+t:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}}},g=f,h=(r("5c0b"),r("2877")),d=Object(h["a"])(g,a,o,!1,null,null,null),m=d.exports,v=r("ecee"),b=r("c074"),y=r("b702");v["c"].add(b["a"],y["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.dde5cb0b.js.map