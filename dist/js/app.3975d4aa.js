(function(e){function t(t){for(var a,s,c=t[0],o=t[1],l=t[2],d=0,g=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&g.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(g.length)g.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"26fe":function(e,t,n){},"35ce":function(e,t,n){},"546d":function(e,t,n){"use strict";n("26fe")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{input:e.onInput,"open-filter":function(t){e.isFilterOpened=!0},"close-filter":function(t){e.isFilterOpened=!1}},model:{value:e.searchLanguage,callback:function(t){e.searchLanguage=t},expression:"searchLanguage"}}),n("Main",{attrs:{searchInput:e.searchInput,searchLanguage:e.searchLanguage,filterOpened:e.isFilterOpened}})],1)},i=[],s=(n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("a",{staticClass:"header__brand",attrs:{href:"#"}},[e._v("BOOLFLIX")]),n("input",{staticClass:"header__search-input",attrs:{type:"text",placeholder:"Cerca film e serie tv..."},domProps:{value:e.inputValue},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("input",t.target.value)}}}),n("select",{staticClass:"header__languange-select",on:{change:function(t){return e.$emit("language-change",t.target.value)}}},e._l(e.countryList,(function(t,a){return n("option",{key:a,domProps:{selected:t.code===e.selectedLanguage.toUpperCase(),value:t.code.toLowerCase()}},[e._v(" "+e._s(t.code[0]+t.code[1].toLowerCase())+" : "+e._s(t.flag)+" ")])})),0),e.isFilterOpened?e._e():n("FontAwesomeIcon",{staticClass:"filter-icon",attrs:{tabindex:"0",icon:["fas","filter"]},on:{click:function(t){return e.onFilterClick()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onFilterClick()}}}),e.isFilterOpened?n("FontAwesomeIcon",{staticClass:"close-filter-icon",attrs:{tabindex:"0",icon:["fas","window-close"]},on:{click:function(t){return e.onCloseFilterClick()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onCloseFilterClick()}}}):e._e()],1)}),c=[],o=(n("d81d"),n("ad3d")),l=n("1f36"),u=n("dc3a"),d={name:"Header",components:{FontAwesomeIcon:o["a"]},model:{prop:"selectedLanguage",event:"language-change"},props:{selectedLanguage:String},data:function(){return{inputValue:"",isFilterOpened:!1}},computed:{countryList:function(){return l.map((function(e){return{code:e,flag:Object(u["a"])(e)}}))}},methods:{onFilterClick:function(){this.isFilterOpened=!0,this.$emit("open-filter")},onCloseFilterClick:function(){this.isFilterOpened=!1,this.$emit("close-filter")}}},g=d,h=(n("546d"),n("2877")),p=Object(h["a"])(g,s,c,!1,null,"7bc6267a",null),f=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main",class:{"show-filter":e.isFilterOpened}},[e.isFilterOpened?n("CardsFilter",{staticClass:"filter",attrs:{genres:e.genres},on:{"click-genre":e.onClickGenre}}):e._e(),n("div",{staticClass:"sections"},[n("CardsContainer",{attrs:{apiKey:e.apiKey,searchInput:e.search,searchLanguage:e.searchLanguage,selectedGenres:e.selectedGenres,searchCategory:"movies",title:"Film"}}),n("CardsContainer",{attrs:{apiKey:e.apiKey,searchInput:e.search,searchLanguage:e.searchLanguage,selectedGenres:e.selectedGenres,searchCategory:"series",title:"Serie TV"}})],1)],1)},_=[],C=n("2909"),m=(n("841c"),n("d3b7"),n("4e82"),n("b0c0"),n("99af"),n("caad"),n("2532"),n("a434"),n("bc3a")),y=n.n(m),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[e._v(e._s(e.title))]),n("div",{staticClass:"cardsGrid"},e._l(e.customCards,(function(t){return n("Card",{key:t.id,attrs:{posterPath:t.poster_path,title:t.title,originalTitle:t.original_title,language:t.original_language,voteAverage:t.vote_average,overview:t.overview},on:{"focus-card":function(t){e.focusOnCard=!0},"blur-card":function(t){e.focusOnCard=!1}},nativeOn:{click:function(n){return e.onCardClick(t)}}})})),1),e.focusOnCard&&0!==e.selectedCard.id?n("CardInfo",{attrs:{apiKey:e.apiKey,searchLanguage:e.searchLanguage,id:e.selectedCard.id,title:e.selectedCard.title,original_title:e.selectedCard.original_title,original_language:e.selectedCard.original_language,vote_average:e.selectedCard.vote_average,poster_path:e.selectedCard.poster_path,overview:e.selectedCard.overview}}):e._e()],1)},b=[],w=n("5530"),O=(n("4de4"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",attrs:{tabindex:"0"},on:{focus:function(t){return e.$emit("focus-card")},blur:function(t){return e.$emit("blur-card")}}},[n("img",{attrs:{src:e.posterPath,alt:""}}),n("div",{staticClass:"card__info"},[n("p",[n("span",{staticClass:"key"},[e._v("Titolo: ")]),e._v(e._s(e.title))]),e.originalTitle?n("p",[n("span",{staticClass:"key"},[e._v("Titolo originale: ")]),e._v(" "+e._s(e.originalTitle)+" ")]):e._e(),n("p",[n("span",{staticClass:"key"},[e._v("Lingua: ")]),n("LanguageFlag",{attrs:{language:e.language}})],1),n("p",[n("span",{staticClass:"key"},[e._v("Voto: ")]),n("FiveStarsRating",{attrs:{voteAverage:e.voteAverage}})],1),e.overview?n("p",{staticClass:"overview"},[n("span",{staticClass:"key"},[e._v("Overview: ")]),e._v(e._s(e.overview)+" ")]):e._e()])])}),F=[],S=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",e._l(e.getStarsArray(),(function(e,t){return n("font-awesome-icon",{key:t,attrs:{icon:e}})})),1)}),L=[],G={name:"FiveStarsRating",components:{FontAwesomeIcon:o["a"]},props:{voteAverage:Number},methods:{getStarsArray:function(){for(var e=Math.ceil(this.voteAverage/2),t=[],n=0;n<5;n++)t.push(n<e?["fas","star"]:["far","star"]);return t}}},A=G,I=Object(h["a"])(A,S,L,!1,null,null,null),x=I.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.languageFlag))])},P=[],T=(n("2ca0"),n("fb6a"),n("86f2")),$={name:"LanguageFlag",props:{language:String},computed:{languageFlag:function(){var e=this.getCountryfromLanguage();return Object(T["a"])(e)?Object(u["a"])(e):""}},methods:{getCountryfromLanguage:function(){var e=this;if("en"===this.language)return"GB";if("es"===this.language)return"ES";if("el"===this.language)return"GR";if("zh"===this.language)return"CN";if("hi"===this.language)return"IN";if("fa"===this.language)return"AF";if("ar"===this.language)return"AE";var t=n("e5d4"),a=t.getLanguage(this.language,(function(t,n){if(!t)return n.countries.map((function(e){return e.code_2})).filter((function(t){return t===e.language.toUpperCase()||t.startsWith(e.language.slice(0,1).toUpperCase())}))[0];console.log(t)}));return a}}},E=$,K=Object(h["a"])(E,j,P,!1,null,null,null),M=K.exports,B={name:"Card",components:{FiveStarsRating:x,LanguageFlag:M},props:{posterPath:String,title:String,originalTitle:String,language:String,voteAverage:Number,overview:String}},N=B,D=(n("a6fc"),Object(h["a"])(N,O,F,!1,null,"0c4c4e87",null)),U=D.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container--card-info"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showInfos,expression:"showInfos"}],staticClass:"card-info",style:{"background-image":"url("+this.card.posterPath+")"}},[n("div",{staticClass:"card-info__info"},[n("div",[n("span",{staticClass:"key"},[e._v("Titolo:")]),e._v(" "+e._s(e.card.title))]),e.card.originalTitle?n("div",[n("span",{staticClass:"key"},[e._v("Original title:")]),e._v(" "+e._s(e.card.originalTitle)+" ")]):e._e(),n("div",[n("span",{staticClass:"key"},[e._v("Voto: ")]),n("FiveStarRating",{attrs:{voteAverage:e.card.voteAverage}})],1),n("div",[n("span",{staticClass:"key"},[e._v("Lingua: ")]),n("LanguageFlag",{attrs:{language:e.card.originalLanguage}})],1),e.card.genres.length>0?n("div",[n("span",{staticClass:"key"},[e._v("Generi:")]),e._v(" "+e._s(e.card.genres.join(", "))+" ")]):e._e(),e.card.actors.length>0?n("div",[n("span",{staticClass:"key"},[e._v("Cast:")]),e._v(" "+e._s(e.card.actors.join(", "))+"... ")]):e._e()]),n("div",{staticClass:"card-info__overview"},[e.card.overview?n("div",{staticClass:"overview-text"},[n("div",[n("span",{staticClass:"key"},[e._v("Overview:")]),e._v(" "+e._s(e.card.overview))])]):e._e()])])])},H=[],V={name:"CardInfo",components:{FiveStarRating:x,LanguageFlag:M},props:{apiKey:String,searchLanguage:String,id:Number,title:String,original_title:String,original_language:String,vote_average:Number,poster_path:String,overview:String},data:function(){return{apiUrl:"https://api.themoviedb.org/3/movie/",cardApiKey:this.apiKey,pendingCalls:0,showInfos:!1,card:{id:this.id,title:this.title,originalTitle:this.original_title,originalLanguage:this.original_language,voteAverage:this.vote_average,posterPath:this.poster_path,overview:this.overview,actors:[],genres:[]}}},methods:{fetchData:function(){var e=this;this.pendingCalls=2;for(var t=function(){var t=a[n];y.a.get(e.apiUrl+e.card.id+t,{params:{api_key:e.apiKey,language:e.searchLanguage}}).then((function(n){"/credits"===t?e.setActors(n):e.setGenres(n)})).catch((function(n){console.log(n),"/credits"===t?e.card.actors=[]:e.card.genres=[]})).finally((function(){0===--e.pendingCalls&&e.populateCard()}))},n=0,a=["/credits",""];n<a.length;n++)t()},setActors:function(e){this.card.actors=[];for(var t=0;t<5;t++)e.data.cast[t]&&this.card.actors.push(e.data.cast[t].name)},setGenres:function(e){var t=this;this.card.genres=[],e.data.genres.forEach((function(e){t.card.genres.push(e.name)}))},populateCard:function(){this.card.title=this.title,this.card.originalTitle=this.original_title,this.card.originalLanguage=this.original_language,this.card.voteAverage=this.vote_average,this.card.posterPath=this.poster_path,this.card.overview=this.overview,this.showInfos=!0}},watch:{id:function(e){this.card.id=e,this.fetchData()}},mounted:function(){this.fetchData()}},q=V,J=(n("7d25"),Object(h["a"])(q,R,H,!1,null,"3e29e638",null)),z=J.exports,W={name:"CardsContainer",components:{Card:U,CardInfo:z},props:{title:String,searchInput:String,searchCategory:String,searchLanguage:String,apiKey:String,selectedGenres:Array},data:function(){return{focusOnCard:!1,search:this.searchInput,apiUrl:"https://api.themoviedb.org/3",searchPaths:{movies:"/movie",series:"/tv"},searchModes:{search:"/search",discover:"/discover"},language:"",placeHolderImage:"https://www.altavod.com/assets/images/poster-placeholder.png",selectedCard:{id:0,title:"",original_title:"",original_language:"",vote_average:0,poster_path:"",overview:""},cards:[],selectedGenresArray:[]}},watch:{searchInput:function(e){this.search=e,this.apiSearch()},selectedGenres:function(e){this.selectedGenresArray=e},searchLanguage:function(e){this.language=e,this.apiSearch("discover")}},computed:{customCards:function(){var e=this;return this.filteredCards.map((function(t){return{id:t.id,title:t.title||t.name,original_title:e.getOriginalTitleIfDifferentFromTitle(t),original_language:t.original_language,vote_average:t.vote_average,poster_path:e.getPosterCompletePath("w342",t.poster_path),overview:t.overview}}))},filteredCards:function(){return this.selectedGenresArray.length>0?Object(C["a"])(this.cards).filter(this.filterByGenre):this.cards}},methods:{filterByGenre:function(e){var t=!1;return this.selectedGenresArray.forEach((function(n){e.genre_ids.includes(n)&&(t=!0)})),t},getOriginalTitleIfDifferentFromTitle:function(e){var t=e.title||e.name,n=e.original_title||e.original_name;return t.toLowerCase()===n.toLowerCase()?"":n},getPosterCompletePath:function(e,t){return t?"https://image.tmdb.org/t/p/"+e+t:this.placeHolderImage},apiSearch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"search";y.a.get(this.apiUrl+this.searchModes[t]+this.searchPaths[this.searchCategory],{params:Object(w["a"])({api_key:this.apiKey,language:this.language},"search"===t?{query:this.search}:{})}).then((function(t){var n;e.cards=[],(n=e.cards).push.apply(n,Object(C["a"])(t.data.results))}))},onCardClick:function(e){this.selectedCard=e}}},X=W,Q=(n("6681"),Object(h["a"])(X,k,b,!1,null,"25dcd8ea",null)),Y=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter-container"},e._l(e.genres,(function(t){return n("CustomCheckBox",{key:t.id,attrs:{tabindex:"0",genre:t},on:{"click-genre":e.onClickGenre}})})),1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"customCheckBox",class:{active:e.isChecked},on:{click:e.onClick,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onClick.apply(null,arguments)}}},[e.isChecked?e._e():n("FontAwesomeIcon",{attrs:{icon:["far","square"]}}),e.isChecked?n("FontAwesomeIcon",{attrs:{icon:["far","check-square"]}}):e._e(),n("div",{staticClass:"label"},[e._v(e._s(e.genre.name))])],1)},ne=[],ae={name:"CustomCheckBox",components:{FontAwesomeIcon:o["a"]},props:{genre:Object},data:function(){return{isChecked:!1}},computed:{genreAndStatus:function(){return{id:this.genre.id,isChecked:this.isChecked}}},methods:{onClick:function(){this.isChecked=!this.isChecked,this.$emit("click-genre",this.genreAndStatus)}}},re=ae,ie=(n("9bad"),Object(h["a"])(re,te,ne,!1,null,"6a5831f9",null)),se=ie.exports,ce={name:"CardsFilter",components:{CustomCheckBox:se},props:{genres:Array},methods:{onClickGenre:function(e){this.$emit("click-genre",e)}}},oe=ce,le=(n("a87d"),Object(h["a"])(oe,Z,ee,!1,null,"7f571d5c",null)),ue=le.exports,de={name:"Main",components:{CardsContainer:Y,CardsFilter:ue},props:{searchInput:String,searchLanguage:String,filterOpened:Boolean},watch:{searchInput:function(){this.search=this.searchInput},filterOpened:function(e){this.isFilterOpened=e,e||(this.selectedGenres=[])}},data:function(){return{search:this.searchInput,apiKey:"9050243653544e50d5a8b17836489f93",isFilterOpened:!1,genres:[],selectedGenres:[]}},mounted:function(){this.getGenresFromApi()},methods:{getGenresFromApi:function(){for(var e=this,t=2,n=0,a=["tv","movie"];n<a.length;n++){var r=a[n];y.a.get("https://api.themoviedb.org/3/genre/".concat(r,"/list"),{params:{api_key:this.apiKey,language:this.searchLanguage}}).then((function(t){var n=Object(C["a"])(t.data.genres);e.addToGenres(n)})).finally((function(){0===--t&&e.genres.sort((function(e,t){return e.name.localeCompare(t.name)}))}))}},addToGenres:function(e){this.genres=0===this.genres.length?this.genres.concat(e):this.getNonDuplicateGenres(this.genres.concat(e))},getNonDuplicateGenres:function(e){return e.reduce((function(e,t){return e.map((function(e){return e.id})).includes(t.id)?e:e.concat(t)}),[])},onClickGenre:function(e){e.isChecked?this.addSelectedGenre(e.id):this.selectedGenres.length>0&&this.removeSelectedGenre(e.id)},addSelectedGenre:function(e){this.selectedGenres.push(e)},removeSelectedGenre:function(e){var t=this.selectedGenres.indexOf(e);this.selectedGenres.splice(t,1)}}},ge=de,he=(n("6a7d"),Object(h["a"])(ge,v,_,!1,null,"5b37f2bd",null)),pe=he.exports,fe={name:"App",components:{Header:f,Main:pe},data:function(){return{searchInput:"",searchLanguage:"",isFilterOpened:!1}},mounted:function(){this.searchLanguage=navigator.language.split("-")[0]},methods:{onInput:function(e){this.searchInput=e}}},ve=fe,_e=(n("5c0b"),Object(h["a"])(ve,r,i,!1,null,null,null)),Ce=_e.exports,me=n("ecee"),ye=n("c074"),ke=n("b702");me["c"].add(ye["b"],ke["c"],ye["a"],ye["c"],ke["b"],ke["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(Ce)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6681:function(e,t,n){"use strict";n("dbfd")},"6a7d":function(e,t,n){"use strict";n("f697")},"7d24":function(e,t,n){},"7d25":function(e,t,n){"use strict";n("bb39")},"9bad":function(e,t,n){"use strict";n("cfdf")},"9c0c":function(e,t,n){},a6fc:function(e,t,n){"use strict";n("7d24")},a87d:function(e,t,n){"use strict";n("35ce")},bb39:function(e,t,n){},cfdf:function(e,t,n){},dbfd:function(e,t,n){},f697:function(e,t,n){}});
//# sourceMappingURL=app.3975d4aa.js.map