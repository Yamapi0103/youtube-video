(function(e){function t(t){for(var i,s,g=t[0],u=t[1],p=t[2],d=0,r=[];d<g.length;d++)s=g[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&r.push(a[s][0]),a[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(r.length)r.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,g=1;g<n.length;g++){var u=n[g];0!==a[u]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/youtubeVideo/";var g=window["webpackJsonp"]=window["webpackJsonp"]||[],u=g.push.bind(g);g.push=t,g=g.slice();for(var p=0;p<g.length;p++)t(g[p]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"14ce":function(e,t,n){"use strict";n("2501")},"16d5":function(e,t,n){"use strict";n("9476")},2501:function(e,t,n){},"3c3c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],s=(n("14ce"),n("2877")),g={},u=Object(s["a"])(g,a,o,!1,null,null,null),p=u.exports,l=n("8c4f"),d=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("首頁")]),e._v("| "),t("router-link",{attrs:{to:"/collect"}},[e._v("收藏")])],1),t("router-view")],1)},r=[],c=(n("fadb"),{}),m=Object(s["a"])(c,d,r,!1,null,null,null),h=m.exports,y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"search d-flex jc-center mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text"},domProps:{value:e.searchText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),t("span",{staticClass:"iconfont icon-search p-2 bg-light-1",on:{click:e.clickSearch}})]),t("div",{staticClass:"d-flex jc-center ai-center",attrs:{id:"condition"}},[e._v(" 各國的發燒影片: "),t("v-select",{staticClass:"vselect",attrs:{options:e.regionList,reduce:e=>e.id,label:"name"},model:{value:e.selectRegion,callback:function(t){e.selectRegion=t},expression:"selectRegion"}})],1),e.videos?t("videoCard",{attrs:{videos:e.videos}}):e._e(),t("div",{staticClass:"text-center"},[e.videos.length>0?t("paginate",{ref:"Pagination",attrs:{"page-count":e.pageCount,"click-handler":e.jumpPage,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"}}):e._e()],1)],1)},R=[],b=function(){var e=this,t=e._self._c;return e.videos?t("div",{staticClass:"video-wrap m-3 d-flex flex-wrap"},e._l(e.videos,(function(n,i){return t("div",{key:i,staticClass:"video p-2 mb-4"},[t("div",{staticClass:"h-100"},[t("router-link",{attrs:{to:"/video",tag:"figure"}},[t("img",{attrs:{src:n.snippet.thumbnails.medium.url}}),t("span",{staticClass:"time m-1 p-1 fs-xxs"},[e._v(e._s(e.durationParser(n.contentDetails.duration)))])]),t("div",{staticClass:"d-flex p-1 ai-center"},[t("div",{staticClass:"title ellipsis two-line flex-1"},[e._v(" "+e._s(n.snippet.title)+" ")]),t("span",{staticClass:"iconfont pl-2 icon-heart",class:{"icon-heart1":e.IsFav(n.id)},on:{click:function(t){return e.toggleFavorite(n.id)}}})]),t("div",{staticClass:"channel-title p-1"},[e._v(e._s(n.snippet.channelTitle))]),t("div",{staticClass:"d-flex p-1 flex-wrap"},[t("div",{staticClass:"updateTime"},[e._v(" 上傳日期: "+e._s(e.publishedByNow(n.snippet.publishedAt))+" ")]),t("div",[e._v("觀看次數: "+e._s(e.views(n.statistics.viewCount)))])]),t("span",{staticClass:"iconfont icon-youtube d-iflex ai-center",on:{click:function(t){return e.toYoutube(n.id)}}},[t("span",{staticClass:"pl-2 text-info"},[e._v("前往youtube")])])],1)])})),0):e._e()},k=[],v=(n("14d9"),{data(){return{ids:JSON.parse(localStorage.getItem("id"))||[]}},props:{videos:{type:Array,required:!0}},computed:{},methods:{toYoutube(e){window.open("https://www.youtube.com/watch?v="+e,"_blank")},publishedByNow(e){let t=new Date(e),n=new Date,i=parseInt((n-t)/1e3),a=parseInt(i/60),o=parseInt(a/60),s=parseInt(o/24),g=parseInt(s/30),u=parseInt(s/365);return i<60?i+"秒前":a<60?a+"分鐘前":o<24?o+"小時前":s<30?s<7?s+"天前":parseInt(s/7)+"週前":g<12?g+"個月前":u+"年前"},durationParser(e){let t=/\d*H/.exec(e),n=/\d*M/.exec(e),i=/\d*S/.exec(e),a=function(e,t,n){let i="",a="",o="";return i=e?/\d*/.exec(e)[0]+":":"",t?(a=/\d*/.exec(t)[0],1===a.length&&(a="0"+a)):a="00",n?(o=/\d*/.exec(n)[0],1===o.length&&(o="0"+o)):o="00",i+a+":"+o};return a(t,n,i)},IsFav(e){return this.ids.includes(e)},toggleFavorite(e){const{ids:t}=this;t.indexOf(e)>-1?t.splice(t.indexOf(e),1):t.push(e),localStorage.id=JSON.stringify(t)},views(e){let t=this.getDigit(e);return t<4?e+"次":4===t?(e/Math.pow(10,4)).toFixed(1)+"萬次":t>=8?t>8?Math.floor(e/Math.pow(10,8))+"億次":parseFloat((e/Math.pow(10,8)).toFixed(1))+"億次":t>4?Math.floor(e/Math.pow(10,4))+"萬次":void 0},getDigit(e){let t=-1;while(e>=1)t++,e/=10;return t}}}),f=v,P=(n("16d5"),Object(s["a"])(f,b,k,!1,null,null,null)),T=P.exports;const x="getPopularVideo",w="getVideosById",S="getRegions",C="searchVideos";var _=n("2f62"),I={name:"home",components:{VideoCard:T},data(){return{maxTotalResults:200,count:12,pageNum:1,pageTokenPerPage:{},selectRegion:"TW",searchText:"",isSearch:!1}},async created(){await this.$store.dispatch(x,{part:"snippet,statistics,contentDetails",regionCode:this.selectRegion,maxResults:this.count}),localStorage.getItem("pageTokenPerPage")||this.queryPageToken(),localStorage.regions?this.$store.commit("setRegions",JSON.parse(localStorage.regions)):this.$store.dispatch(S)},computed:{...Object(_["b"])({videos:e=>e.videos,regionList:e=>e.regions,totalResults:e=>e.pageInfo.totalResults}),pageCount(){let e=Math.min(this.maxTotalResults,this.totalResults);return Math.ceil(e/this.count)}},watch:{selectRegion(e){e&&(this.isSearch=!1,localStorage.removeItem("searchText"),this.resetPageNum(1),this.jumpPage(this.pageNum))}},methods:{async jumpPage(e){if(this.pageNum=e,this.pageTokenPerPage=JSON.parse(localStorage.pageTokenPerPage),this.isSearch){let t=await this.$store.dispatch(C,{searchText:localStorage.searchText,maxResults:this.count,pageToken:e-2>=0?this.pageTokenPerPage[e-2].nextPageToken:null}),n=t.data.items.map(e=>e.id.videoId);this.$store.dispatch(w,{id:n.join(","),part:"snippet,statistics,contentDetails",maxResults:this.count})}else this.$store.dispatch(x,{part:"snippet,statistics,contentDetails",regionCode:this.selectRegion,maxResults:this.count,pageToken:e-2>=0?this.pageTokenPerPage[e-2].nextPageToken:null})},async queryPageToken(){let e=0,t=await this.$store.dispatch(x,{maxResults:this.count});this.pageTokenPerPage[e++]={nextPageToken:t.data.nextPageToken};while(t.data.nextPageToken)t=await this.$store.dispatch(x,{maxResults:this.count,pageToken:this.pageTokenPerPage[e-1].nextPageToken}),this.pageTokenPerPage[e++]={nextPageToken:t.data.nextPageToken,prevPageToken:t.data.prevPageToken};localStorage.setItem("pageTokenPerPage",JSON.stringify(this.pageTokenPerPage))},resetPageNum(e){this.$refs.Pagination.selected=e,this.pageNum=e},async clickSearch(){this.resetPageNum(1),this.isSearch=!0,localStorage.searchText=this.searchText;let e=await this.$store.dispatch(C,{searchText:localStorage.searchText,maxResults:this.count}),t=e.data.items.map(e=>e.id.videoId);await this.$store.dispatch(w,{id:t.join(","),part:"snippet,statistics,contentDetails",maxResults:this.count})}}},E=I,N=(n("a4a7"),Object(s["a"])(E,y,R,!1,null,null,null)),A=N.exports,O=function(){var e=this,t=e._self._c;return t("div",{staticClass:"collect"},[e.videos.length>0?t("VideoCard",{attrs:{videos:e.videoByPage}}):t("div",{staticClass:"text-center text-danger mt-3"},[e._v("尚未收藏影片")]),t("div",{staticClass:"text-center"},[e.videos.length>0?t("paginate",{attrs:{"page-count":e.pageCount,"click-handler":e.jumpTo,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"}}):e._e()],1)],1)},j=[],M={name:"collect",components:{VideoCard:T},data(){return{count:12,pageNum:1,maxTotalResults:200,favId:JSON.parse(localStorage.id)}},async created(){this.$store.dispatch(w,{id:this.favId.join(","),part:"snippet,statistics,contentDetails"})},computed:{...Object(_["b"])({videos:e=>e.videos,totalResults:e=>e.pageInfo.totalResults}),videoByPage(){return this.videos.slice((this.pageNum-1)*this.count,this.pageNum*this.count)},pageCount(){let e=Math.min(this.maxTotalResults,this.totalResults);return Math.ceil(e/this.count)}},methods:{jumpTo(e){this.pageNum=e}}},K=M,B=Object(s["a"])(K,O,j,!1,null,null,null),U=B.exports,L=function(){var e=this,t=e._self._c;return t("div",{staticClass:"video-page"},[t("video-player",{attrs:{options:e.videoOptions}}),t("div",{staticClass:"mt-3 text-center"},[e._v(" 預設播放這支影片 ")])],1)},H=[],Y=function(){var e=this,t=e._self._c;return t("video",{ref:"videoPlayer",staticClass:"video-js"})},D=[],G=n("f0e2"),F={props:{options:{type:Object,default(){return{}}}},data(){return{player:null}},mounted(){this.player=Object(G["a"])(this.$refs.videoPlayer,this.options,(function(){console.log("onPlayerReady",this)}))},beforeDestroy(){this.player&&this.player.dispose()}},V=F,Z=(n("a385"),Object(s["a"])(V,Y,D,!1,null,null,null)),q=Z.exports,J={name:"VideoPage",components:{VideoPlayer:q},data(){return{videoOptions:{autoplay:!0,controls:!0,sources:[{src:"http://vjs.zencdn.net/v/oceans.mp4",type:"video/mp4"}]}}}},z=J,W=Object(s["a"])(z,L,H,!1,null,null,null),X=W.exports;i["a"].use(l["a"]);const Q=[{path:"/",component:h,children:[{path:"/",name:"home",component:A},{path:"/collect",name:"collect",component:U},{path:"/video",name:"video",component:X}]}],$=new l["a"]({mode:"history",base:"/youtubeVideo/",routes:Q});var ee=$,te=(n("78a7"),n("be35"),n("f9e3"),n("8832")),ne=n.n(te),ie=n("4a7a"),ae=n.n(ie),oe=(n("fda2"),n("bc3a")),se=n.n(oe);const ge=se.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyAV_riwJ0Ow9XM9CaO3w2_2BDrxkU9rTEU"}});function ue(e){return ge.get("videos",{params:{...e}})}function pe(){return ge.get("i18nRegions",{params:{part:"snippet",hl:"zh_TW"}})}function le(e,t){return ge.get("search",{params:{type:"video",q:e,...t}})}var de=[{kind:"youtube#i18nRegion",etag:"MWWHwriYFEY93CI2EYqaZkUntVg",id:"TR",snippet:{gl:"TR",name:"土耳其"}},{kind:"youtube#i18nRegion",etag:"tzubQwergXyw9yi0cKozHpeUrN8",id:"DK",snippet:{gl:"DK",name:"丹麥"}},{kind:"youtube#i18nRegion",etag:"k7gZOdsIbXY2nO4opvIVQP1NAIA",id:"EC",snippet:{gl:"EC",name:"厄瓜多"}},{kind:"youtube#i18nRegion",etag:"8113pAWYbyg6NGzh58Tvdq1WZNI",id:"PG",snippet:{gl:"PG",name:"巴布亞紐幾內亞"}},{kind:"youtube#i18nRegion",etag:"Yy6xAk9Aqxwdikm3hJpTyS12gMg",id:"BR",snippet:{gl:"BR",name:"巴西"}},{kind:"youtube#i18nRegion",etag:"2o_koNjyssqMVQobUEqjv41yD8A",id:"PY",snippet:{gl:"PY",name:"巴拉圭"}},{kind:"youtube#i18nRegion",etag:"0haZ3-agGdGMfErmTGSC8FkBakw",id:"BH",snippet:{gl:"BH",name:"巴林"}},{kind:"youtube#i18nRegion",etag:"nQTu190Yqqyxqo4ryCVn8X8x1HM",id:"PA",snippet:{gl:"PA",name:"巴拿馬"}},{kind:"youtube#i18nRegion",etag:"u2VoSWYmokLDI2viWSyTUJXpS-g",id:"PK",snippet:{gl:"PK",name:"巴基斯坦"}},{kind:"youtube#i18nRegion",etag:"idwileg6NUXvrzM2gG_hF7wt__U",id:"JP",snippet:{gl:"JP",name:"日本"}},{kind:"youtube#i18nRegion",etag:"eZCr0GjfEWspot-AK7rybZaW8u4",id:"BE",snippet:{gl:"BE",name:"比利時"}},{kind:"youtube#i18nRegion",etag:"SJ1T8einhk1U88R0HWh_Qz2qTr4",id:"JM",snippet:{gl:"JM",name:"牙買加"}},{kind:"youtube#i18nRegion",etag:"AvYquuWf8pa6JUEPci42mXhCgcM",id:"IL",snippet:{gl:"IL",name:"以色列"}},{kind:"youtube#i18nRegion",etag:"PTyHcLIjumgUJGUlNzPOoQq4KEc",id:"CA",snippet:{gl:"CA",name:"加拿大"}},{kind:"youtube#i18nRegion",etag:"2BrPB0DFkRsHw4mR92PlKf4-Ufk",id:"MK",snippet:{gl:"MK",name:"北馬其頓"}},{kind:"youtube#i18nRegion",etag:"g4KvXFdRlKt865hk4pFiHh57j6A",id:"QA",snippet:{gl:"QA",name:"卡達"}},{kind:"youtube#i18nRegion",etag:"e8Fb2nc4qr5k5Amp-vis5cEptzs",id:"TW",snippet:{gl:"TW",name:"台灣"}},{kind:"youtube#i18nRegion",etag:"6nJvEA1F3CO3s6HAPgW_aq6R1mE",id:"NI",snippet:{gl:"NI",name:"尼加拉瓜"}},{kind:"youtube#i18nRegion",etag:"dUvSN49DroYFAjhBTtTi9m2tLYE",id:"NP",snippet:{gl:"NP",name:"尼泊爾"}},{kind:"youtube#i18nRegion",etag:"4ETHqRLdfgl2QaXWuAavjp-C7G0",id:"GT",snippet:{gl:"GT",name:"瓜地馬拉"}},{kind:"youtube#i18nRegion",etag:"1g8ZbiHTXc-zgAUmVlSJ4QIhc5M",id:"BY",snippet:{gl:"BY",name:"白俄羅斯"}},{kind:"youtube#i18nRegion",etag:"pMVNK-5u7i1n4bdj-bemis1R7m8",id:"LT",snippet:{gl:"LT",name:"立陶宛"}},{kind:"youtube#i18nRegion",etag:"1Eq9QyEEpjj9FLv0CurlRtAoFAY",id:"IQ",snippet:{gl:"IQ",name:"伊拉克"}},{kind:"youtube#i18nRegion",etag:"erLJI-hYB7lHwjOM5i24KRod_L0",id:"IS",snippet:{gl:"IS",name:"冰島"}},{kind:"youtube#i18nRegion",etag:"iB93WzlsyTrENvg3Zr9atexRgJo",id:"LI",snippet:{gl:"LI",name:"列支敦士登"}},{kind:"youtube#i18nRegion",etag:"M9DIzLFK5vyodKlOHTm1hMWaH8A",id:"HU",snippet:{gl:"HU",name:"匈牙利"}},{kind:"youtube#i18nRegion",etag:"G0EfkOjIxDdV02WJNZkeDBVgC84",id:"ID",snippet:{gl:"ID",name:"印尼"}},{kind:"youtube#i18nRegion",etag:"LaYn6llTjxssn_VqaSx1Jyau7lE",id:"IN",snippet:{gl:"IN",name:"印度"}},{kind:"youtube#i18nRegion",etag:"2bf5GCaQd4g6WlGpaTzd1_rv7zw",id:"DO",snippet:{gl:"DO",name:"多明尼加共和國"}},{kind:"youtube#i18nRegion",etag:"TgO8SZF1P_oUMbZFsAPhKfXX6sM",id:"ES",snippet:{gl:"ES",name:"西班牙"}},{kind:"youtube#i18nRegion",etag:"g9BrzfFkRyS-KVGxdGzOKaXD4wc",id:"HR",snippet:{gl:"HR",name:"克羅埃西亞"}},{kind:"youtube#i18nRegion",etag:"FXBPg46QEgdGCtromuT7l-mGz7o",id:"LY",snippet:{gl:"LY",name:"利比亞"}},{kind:"youtube#i18nRegion",etag:"OY0dt7qmftoWwNlXOookBghl9NQ",id:"HN",snippet:{gl:"HN",name:"宏都拉斯"}},{kind:"youtube#i18nRegion",etag:"WjL28Ueiwj9tBdYlqluc01xD_Yk",id:"GR",snippet:{gl:"GR",name:"希臘"}},{kind:"youtube#i18nRegion",etag:"lbzotx3U7dmdnLXivIwzYbhguyY",id:"SA",snippet:{gl:"SA",name:"沙烏地阿拉伯"}},{kind:"youtube#i18nRegion",etag:"iP7swbd9PgHbCK3LY5X6lHO_Nmc",id:"ZW",snippet:{gl:"ZW",name:"辛巴威"}},{kind:"youtube#i18nRegion",etag:"rLbsSE-P_-LI37TVwTYos98lIr0",id:"AZ",snippet:{gl:"AZ",name:"亞賽拜然"}},{kind:"youtube#i18nRegion",etag:"fj9AJlSRzLOKzZFLpD5n2e5QU78",id:"TZ",snippet:{gl:"TZ",name:"坦尚尼亞"}},{kind:"youtube#i18nRegion",etag:"KgB7EbPD9olEFAq7T9TZGleyzac",id:"NG",snippet:{gl:"NG",name:"奈及利亞"}},{kind:"youtube#i18nRegion",etag:"r2r7BSexP6yDqjpWfy0wemTnoio",id:"VE",snippet:{gl:"VE",name:"委內瑞拉"}},{kind:"youtube#i18nRegion",etag:"rAL_RhhlpEkRrb_WgbbkUS9Dh58",id:"LV",snippet:{gl:"LV",name:"拉脫維亞"}},{kind:"youtube#i18nRegion",etag:"4U2sVMBYxAPz6w4KVGm6DKkKjv4",id:"FR",snippet:{gl:"FR",name:"法國"}},{kind:"youtube#i18nRegion",etag:"8UTscXCHn9sDZFiXWvjmtcupzRE",id:"BA",snippet:{gl:"BA",name:"波士尼亞-赫塞哥維納"}},{kind:"youtube#i18nRegion",etag:"Oc3hIBx6Mc5mSa0XMHF5EyXcL2A",id:"PR",snippet:{gl:"PR",name:"波多黎克"}},{kind:"youtube#i18nRegion",etag:"AoAfeU3_3VEmWA8sc3-A7jZ9of4",id:"PL",snippet:{gl:"PL",name:"波蘭"}},{kind:"youtube#i18nRegion",etag:"vSRCblDcRXsujWpKKe_Podcawzg",id:"KE",snippet:{gl:"KE",name:"肯亞"}},{kind:"youtube#i18nRegion",etag:"8ut6iuBhE09U7aZRr8K7YC4NlhE",id:"FI",snippet:{gl:"FI",name:"芬蘭"}},{kind:"youtube#i18nRegion",etag:"MF4u0qGixu4_90Q22Fj4FqKwiy4",id:"AE",snippet:{gl:"AE",name:"阿拉伯聯合大公國"}},{kind:"youtube#i18nRegion",etag:"ZhC_dyhMMoiRf4x5wlK3jtFriN8",id:"AR",snippet:{gl:"AR",name:"阿根廷"}},{kind:"youtube#i18nRegion",etag:"Y8bXM2C3IJfB0_-X_zFkvB46-u0",id:"OM",snippet:{gl:"OM",name:"阿曼"}},{kind:"youtube#i18nRegion",etag:"lyFU1Etx_AXHCruiSpBUJJUCTlI",id:"DZ",snippet:{gl:"DZ",name:"阿爾及利亞"}},{kind:"youtube#i18nRegion",etag:"4Bk0SqW8UfkrGToK5SPDCSBLeC0",id:"RU",snippet:{gl:"RU",name:"俄羅斯"}},{kind:"youtube#i18nRegion",etag:"oeCfzgJERHrrfLxwC7K2X16YgUw",id:"BG",snippet:{gl:"BG",name:"保加利亞"}},{kind:"youtube#i18nRegion",etag:"rG_f2f4sRmFcvtQabiunH7TRc94",id:"ZA",snippet:{gl:"ZA",name:"南非"}},{kind:"youtube#i18nRegion",etag:"9OlNrRPY6qlnFsoNelue2HT1zbA",id:"KR",snippet:{gl:"KR",name:"南韓"}},{kind:"youtube#i18nRegion",etag:"L4nGOek42bjev4FI_kp9LBOZqU0",id:"KZ",snippet:{gl:"KZ",name:"哈薩克"}},{kind:"youtube#i18nRegion",etag:"Jiwzhfaq2HC29iZ2eY4xHbsv-XE",id:"BO",snippet:{gl:"BO",name:"玻利維亞"}},{kind:"youtube#i18nRegion",etag:"Piuvc7NT-sLASqXkZVDmZrwFeno",id:"KW",snippet:{gl:"KW",name:"科威特"}},{kind:"youtube#i18nRegion",etag:"UDDUrbxWSg60gKmV8lxhOTerVgs",id:"TN",snippet:{gl:"TN",name:"突尼西亞"}},{kind:"youtube#i18nRegion",etag:"e8Re91Cpm0JQU8FhBy3IEhuziPc",id:"JO",snippet:{gl:"JO",name:"約旦"}},{kind:"youtube#i18nRegion",etag:"47vWDERUUgLdXihvpQ_8Pl83zRc",id:"US",snippet:{gl:"US",name:"美國"}},{kind:"youtube#i18nRegion",etag:"6KofpIh1e2m8oXTKpw9Wid2hT5s",id:"GB",snippet:{gl:"GB",name:"英國"}},{kind:"youtube#i18nRegion",etag:"SQGhZ8dtj_l8HUm3eXaQGN4OgaE",id:"GH",snippet:{gl:"GH",name:"迦納"}},{kind:"youtube#i18nRegion",etag:"BlCl0ppKdtfGFz9j-VA01h6xU_o",id:"HK",snippet:{gl:"HK",name:"香港"}},{kind:"youtube#i18nRegion",etag:"KVBFzSxGETpyxSnhjPN4zpNMcyQ",id:"CO",snippet:{gl:"CO",name:"哥倫比亞"}},{kind:"youtube#i18nRegion",etag:"GBe6DUlE82HLB8S46JQXemJhwAs",id:"CR",snippet:{gl:"CR",name:"哥斯大黎加"}},{kind:"youtube#i18nRegion",etag:"LDpFWgCm1MDq8YxJDINuUkYaLe0",id:"EG",snippet:{gl:"EG",name:"埃及"}},{kind:"youtube#i18nRegion",etag:"Ir9rbiDwTAdYYDFXPnHbadPNTDY",id:"NO",snippet:{gl:"NO",name:"挪威"}},{kind:"youtube#i18nRegion",etag:"MWlr1Ktw_NqEoFUqMnfzT9g4PQY",id:"TH",snippet:{gl:"TH",name:"泰國"}},{kind:"youtube#i18nRegion",etag:"3bYJZBRP8KEaxkvRN5_OlwH-Fb4",id:"UG",snippet:{gl:"UG",name:"烏干達"}},{kind:"youtube#i18nRegion",etag:"H_pRZjFDtu0QJjm__xXQcvYYUos",id:"UA",snippet:{gl:"UA",name:"烏克蘭"}},{kind:"youtube#i18nRegion",etag:"WgHqBAOrqoBAlNFpJe_pEogJrwU",id:"UY",snippet:{gl:"UY",name:"烏拉圭"}},{kind:"youtube#i18nRegion",etag:"sDCTKNkCz2ZqmSqNLZT_yaufRXk",id:"PE",snippet:{gl:"PE",name:"祕魯"}},{kind:"youtube#i18nRegion",etag:"Clq2VPW-ZfI0s6Hq44-CbrBih6o",id:"NZ",snippet:{gl:"NZ",name:"紐西蘭"}},{kind:"youtube#i18nRegion",etag:"9fBBRswehY2KqKRsRhW5aTUmnEk",id:"MY",snippet:{gl:"MY",name:"馬來西亞"}},{kind:"youtube#i18nRegion",etag:"ve5lXvLua_rrYxN0qquEzGklmps",id:"MT",snippet:{gl:"MT",name:"馬爾他"}},{kind:"youtube#i18nRegion",etag:"tNhNLVSywc68-0azLF2baiklQug",id:"CZ",snippet:{gl:"CZ",name:"捷克"}},{kind:"youtube#i18nRegion",etag:"5_qDfz608aaYd5gjlxpmoXqK-7o",id:"NL",snippet:{gl:"NL",name:"荷蘭"}},{kind:"youtube#i18nRegion",etag:"UfeuKvwLvGcKcHCMJhM2R4pBHaI",id:"GE",snippet:{gl:"GE",name:"喬治亞"}},{kind:"youtube#i18nRegion",etag:"5narGdEB6RKcsz-K-PnZb5Lf9d4",id:"LK",snippet:{gl:"LK",name:"斯里蘭卡"}},{kind:"youtube#i18nRegion",etag:"_lee4v2GoH-Hb3v618vutdG7g7M",id:"SK",snippet:{gl:"SK",name:"斯洛伐克"}},{kind:"youtube#i18nRegion",etag:"FnzIUaGORldVKlWNiaUPN6L0R8k",id:"SI",snippet:{gl:"SI",name:"斯洛維尼亞"}},{kind:"youtube#i18nRegion",etag:"lW-o20-CErtjGeVfLTrw91_1mPQ",id:"CL",snippet:{gl:"CL",name:"智利"}},{kind:"youtube#i18nRegion",etag:"P5IhhkTDPKIBe_woSeGHe_DwBxM",id:"PH",snippet:{gl:"PH",name:"菲律賓"}},{kind:"youtube#i18nRegion",etag:"6cB7ANy0TTWULY-LlKYE0tIdPp0",id:"VN",snippet:{gl:"VN",name:"越南"}},{kind:"youtube#i18nRegion",etag:"2Ydx-rOnAPwvCpjIHoEsjjPsd0Y",id:"SN",snippet:{gl:"SN",name:"塞內加爾"}},{kind:"youtube#i18nRegion",etag:"DfytFnOINCtNxwlniwwvhwshgW4",id:"RS",snippet:{gl:"RS",name:"塞爾維亞"}},{kind:"youtube#i18nRegion",etag:"t69D5tEVt_igGLimBIB-SHZLbRE",id:"AT",snippet:{gl:"AT",name:"奧地利"}},{kind:"youtube#i18nRegion",etag:"xtwXmudHNYDmyN2Ozpc5In1tOQI",id:"EE",snippet:{gl:"EE",name:"愛沙尼亞"}},{kind:"youtube#i18nRegion",etag:"Bt1Mcxbi0QA1qcnFKIARhyGCmro",id:"IE",snippet:{gl:"IE",name:"愛爾蘭"}},{kind:"youtube#i18nRegion",etag:"XwkFSc6qYVjrEmwjo58iAdfsGyc",id:"SG",snippet:{gl:"SG",name:"新加坡"}},{kind:"youtube#i18nRegion",etag:"uGLDCw6r8Zjt3OZHoWSZ5sn15f4",id:"CH",snippet:{gl:"CH",name:"瑞士"}},{kind:"youtube#i18nRegion",etag:"wsXpJ-cMQcWjEY_-eFpDa54JaS4",id:"SE",snippet:{gl:"SE",name:"瑞典"}},{kind:"youtube#i18nRegion",etag:"Czy45KdgnwM7tS6zG0c2nJTNQkg",id:"IT",snippet:{gl:"IT",name:"義大利"}},{kind:"youtube#i18nRegion",etag:"WtI9u7ZnNf9rpoOMdjHj2jXCgpc",id:"YE",snippet:{gl:"YE",name:"葉門"}},{kind:"youtube#i18nRegion",etag:"EaMUkKQod4hspyWvtZMUTeXy1rA",id:"PT",snippet:{gl:"PT",name:"葡萄牙"}},{kind:"youtube#i18nRegion",etag:"fVIDfZw92LEq1d4B8VgcYyjVCmw",id:"ME",snippet:{gl:"ME",name:"蒙特內哥羅"}},{kind:"youtube#i18nRegion",etag:"Cz_GsEbWACIN_y7_TwUpTyX4Rrs",id:"DE",snippet:{gl:"DE",name:"德國"}},{kind:"youtube#i18nRegion",etag:"Ig3rxuoLJ0C-HO9EQq8F4aMn0Us",id:"MA",snippet:{gl:"MA",name:"摩洛哥"}},{kind:"youtube#i18nRegion",etag:"u2IS-YZSVMbKUyVakwPHXPsxMBU",id:"LB",snippet:{gl:"LB",name:"黎巴嫩"}},{kind:"youtube#i18nRegion",etag:"NEecVFcbRHQZoR_4wv0xapJeuQs",id:"MX",snippet:{gl:"MX",name:"墨西哥"}},{kind:"youtube#i18nRegion",etag:"I2jtkjIAKmFrJbTzl9T_b854A44",id:"AU",snippet:{gl:"AU",name:"澳洲"}},{kind:"youtube#i18nRegion",etag:"m6rnRJzVSAvSVO3RLHxKaDTE0dw",id:"LU",snippet:{gl:"LU",name:"盧森堡"}},{kind:"youtube#i18nRegion",etag:"MITnBBqQBJP_9HkJK7ppmnpkXcs",id:"CY",snippet:{gl:"CY",name:"賽普勒斯"}},{kind:"youtube#i18nRegion",etag:"nPES6uNjmj-umAzVLqp_RZbVZXA",id:"SV",snippet:{gl:"SV",name:"薩爾瓦多"}},{kind:"youtube#i18nRegion",etag:"8Z058Dl2idMRbQA_3CpA0V7A1k8",id:"RO",snippet:{gl:"RO",name:"羅馬尼亞"}}];const re={[x]:({commit:e},t={})=>new Promise((n,i)=>{ue({chart:"mostPopular",...t}).then(t=>{e("setVideos",t.data.items),e("setPageInfo",t.data.pageInfo),n(t)}).catch(e=>{i(e)})}),[S]:({commit:e})=>new Promise((t,n)=>{pe().then(n=>{let i=n.data.map(e=>({id:e.id,name:e.snippet.name}));e("setRegions",i),t(n)}).catch(t=>{let i=de.map(e=>({id:e.id,name:e.snippet.name}));e("setRegions",i),n(t)})}),[C]:({commit:e},{searchText:t="",...n})=>new Promise((i,a)=>{le(t,n).then(t=>{e("setPageInfo",t.data.pageInfo),i(t)}).catch(e=>{a(e)})}),[w]:({commit:e},{id:t="",...n})=>new Promise((i,a)=>{ue({id:t,...n}).then(t=>{e("setVideos",t.data.items),i(t)}).catch(e=>{a(e)})})},ce={videos:[],pageInfo:{resultsPerPage:null,totalResults:null},regions:[]},me={setVideos(e,t){e.videos=t},setPageInfo(e,t){e.pageInfo.resultsPerPage=t.resultsPerPage,e.pageInfo.totalResults=t.totalResults},setRegions(e,t){e.regions=t,localStorage.regions||(localStorage.regions=JSON.stringify(e.regions))}};i["a"].use(_["a"]);var he=new _["a"].Store({actions:re,mutations:me,state:ce});i["a"].component("paginate",ne.a),i["a"].component("v-select",ae.a),window.store=he,i["a"].config.productionTip=!1,new i["a"]({router:ee,store:he,render:e=>e(p)}).$mount("#app")},"78a7":function(e,t,n){},"7eac":function(e,t,n){},9476:function(e,t,n){},a385:function(e,t,n){"use strict";n("3c3c")},a4a7:function(e,t,n){"use strict";n("d12b")},be35:function(e,t,n){},d12b:function(e,t,n){},fadb:function(e,t,n){"use strict";n("7eac")}});
//# sourceMappingURL=app.84e1bf96.js.map