/*! created by chhuangxiaolong@jd.com */
webpackJsonp([12],[function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){(0,o.default)("#set-btn").bind("click",function(){return(0,o.default)(this).hasClass("qdcomplete")?void("jdapp"==s.default.CONFIG.VS&&F.default.callSharePane({title:"京东超市，天天低价抢购！",content:"每日京喜好货，都在京东超市天天抢购！早市、午市、晚市，三个时段，不让品质低价偷偷溜走！",url:"http://h5.m.jd.com/active/rushbuying/index.html",img:"http://m.360buyimg.com/n1/s120x120_jfs/t2566/341/1119128176/23675/6356333b/568e3d86Naa36a750.jpg",channel:"",callback:null})):1!=(0,o.default)(this).attr("data-islogin")?void(location.href="//plogin.m.jd.com/user/login.action?appid=100&returnurl="+encodeURIComponent(window.location.href)):void N.default.setQdStatus(function(e){q.default.renderQdStatus(e)})})}var r=a(1),o=i(r),l=a(2),s=i(l),d=a(3),u=i(d),c=a(6),f=(i(c),a(7)),p=(i(f),a(10)),h=(i(p),a(11)),g=(i(h),a(19)),m=(i(g),a(12)),v=(i(m),a(20)),_=(i(v),a(21)),w=(i(_),a(22)),C=(i(w),a(23)),y=(i(C),a(24)),b=(i(y),a(25)),k=(i(b),a(29)),L=(i(k),a(30)),I=(i(L),a(31)),O=(i(I),a(32)),S=(i(O),a(33)),A=(i(S),a(34)),x=(i(A),a(35)),T=(i(x),a(37)),M=(i(T),a(38)),R=(i(M),a(39)),G=(i(R),a(41)),B=(i(G),a(40)),j=(i(B),a(13)),N=i(j),D=a(15),q=i(D),U=a(64),F=i(U);s.default.CONFIG.ANIMA_SCROLL=!0,window.$=o.default,u.default.headerInit(),N.default.getQdStatus(function(e){q.default.renderQdStatus(e),n()})},,,,,,,function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){if(!c.default.CONFIG.SCROLL_OBJ){var e,t,a=(0,l.default)("#red-nav"),i=(0,l.default)("#scroll-view"),n=(0,l.default)("#jd-nav"),o=(0,l.default)("body");(0,l.default)(window).scroll(function(){e=o.scrollTop(),t=n.height(),(0,l.default)(".red-nav-box").length&&(e>=t?(a.addClass("fix-top"),i.addClass("pt60")):e<t&&(a.removeClass("fix-top"),i.removeClass("pt60")))})}var s=(0,l.default)(".red-nav-box"),u=new d.default(".red-mobile-nav",{slidesPerView:"auto",loop:!1,preventClicks:!0,freeMode:!0,freeModeSticky:!0,onClick:function(e){},onInit:function(e){var t=(0,l.default)(".swiper-slide.active",s).get(0);t&&r(e,t,s,0)}});"jdapp"!=c.default.CONFIG.VS&&(0,l.default)(window).bind("orientationchange",function(){var e=(0,l.default)(".swiper-slide.active",s).get(0);e&&((0,p.default)(u),r(u,e,s,0))})}function r(e,t,a,i){var n=(0,l.default)(".nav-fix-item"),r=parseInt(a.width()/2,10),o=t.offsetLeft+n.width(),s=e.maxTranslate(),d=e.minTranslate(),u=r-o-t.offsetWidth/2;u>d?u=d:u<s&&(u=s),e.setWrapperTransition(i),e.setWrapperTranslate(u)}var o=a(1),l=i(o),s=a(8),d=i(s),u=a(2),c=i(u),f=a(9),p=i(f);e.exports={init:n}},,,function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){var e,t={};(0,o.default)(".red-slider-wraper li").length>1&&(t={loop:!0,autoplay:5e3,autoplayDisableOnInteraction:!1,pagination:".red-slider-pagination",onImagesReady:function(){},onInit:function(){}}),(0,o.default)(".red-slider-wraper").length&&(e=new s.default(".red-slider-wraper",t)),"jdapp"!=u.default.CONFIG.VS&&(0,o.default)(window).bind("orientationchange",function(){(0,f.default)(e)})}var r=a(1),o=i(r),l=a(8),s=i(l),d=a(2),u=i(d),c=a(9),f=i(c);e.exports={init:n}},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){function e(){var e=u.timeTransform(a/1e3);(0,l.default)(".hour",t).eq(0).text(e.hour),(0,l.default)(".minute",t).eq(0).text(e.min),(0,l.default)(".second",t).eq(0).text(e.sec),a-=1e3,a<=0&&(clearInterval(i),i=null,r())}var t=(0,l.default)(".seckill-timer"),a=parseInt((0,l.default)(".seckill-timer").attr("data-time"),10);e();var i=setInterval(e,1e3)}function r(){c.refreshMustbuy(function(e){f.refreshMustbuy({data:e,update_sli:function(){n(),(0,l.default)(".top-price").addClass("none"),(0,d.default)()}})})}var o=a(1),l=i(o),s=a(12),d=i(s),u=a(5),c=a(13),f=a(15);e.exports={init:n}},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){var e=(0,o.default)("#top-imgs .img-item"),t=(0,o.default)(".top-price .price-txt"),a="";e.length&&(e.each(function(e,t){a+=(0,o.default)(this).attr("data-skuid")+","}),s.getPriceData(a,function(e){d.renderTodayPrice(e),(0,o.default)(".top-price").removeClass("none"),"off"==l.CONFIG.PRICE_SWITCH?t.html("暂无价格"):t.html((0,o.default)("#top-imgs img.active").attr("data-price"))}))}var r=a(1),o=i(r),l=a(2),s=a(13),d=a(15);e.exports=n},,,,,,,function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){function e(){var e=(0,o.default)("#top-imgs img");i.push(i.shift()),e.removeClass("active"),t=(0,o.default)("#top-imgs .top"+i[1]),t.addClass("active"),"off"!=l.CONFIG.PRICE_SWITCH&&a.html(t.attr("data-price"))}var t,a=(0,o.default)(".top-price .price-txt"),i=[1,2,3];e(),setInterval(e,3e3)}var r=a(1),o=i(r),l=a(2);e.exports={init:n}},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){if((0,o.default)(".hot").length){var e=(0,o.default)(".hot").attr("data-hot-id"),t=(0,o.default)(".hot").find(".con a").attr("href");(0,o.default)(".hot .like").click(function(){var e=(0,o.default)(this);l.hotLike(e,function(t){s.hotLikeView(e,t)})}),(0,o.default)(".hot .share").click(function(){return l.hotShare(e),window.location.href=t,!1}),(0,o.default)(".hot .con a").click(function(){return l.hotLook(e),window.location.href=t,!1}),l.getLikeStatus(e,function(e){s.hotLikeStatusRender((0,o.default)(".hot .like"),e)})}}var r=a(1),o=i(r),l=(a(2),a(13)),s=a(15);e.exports=n},,function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){if((0,d.default)("floatAdUrl")){var e=(0,d.default)("floatAdUrl"),t=(0,l.default)(".float-ad").find("img").attr("data-src");e!=t&&r()}else(0,l.default)(".float-ad").length&&r()}function r(){var e=parseInt((0,l.default)(".float-ad").find("img").attr("time-left"),10),t=(0,l.default)(".float-ad").find("img").attr("data-src"),a=new Image,i=new Date,n=i.getTime(),r=n+e;i.setTime(r),a.onload=function(){(0,l.default)(".float-ad").find("img").attr("src",t),(0,l.default)(".float-ad").removeClass("none").find(".ad-con").removeClass("op0")},a.src=t,(0,l.default)(".float-ad").find(".close-btn").bind("click",function(){(0,l.default)(".float-ad").remove()}),(0,d.default)("floatAdUrl",t,{expires:i})}var o=a(1),l=i(o),s=a(4),d=i(s);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){if(s.default.CONFIG.ANIMA_SCROLL){var e=(0,o.default)("#scroll-view").get(0);s.default.GLOBAL.SCROLL_OBJ=new anima_ctrl.scrollview(e,{}),s.default.GLOBAL.SCROLL_OBJ.init(),(0,o.default)(window).bind("orientationchange",function(){s.default.GLOBAL.SCROLL_OBJ.refresh()})}}var r=a(1),o=i(r),l=a(2),s=i(l);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){var e,t=(0,l.default)(".item"),a=(0,l.default)("#go-top"),i=(0,l.default)("#count"),n=(0,l.default)("#now"),o=(0,l.default)("#back"),u=(0,l.default)("#total"),c=s.GLOBAL.SCROLL_OBJ;if(!s.CONFIG.ANIMA_SCROLL){var f,p;return(0,l.default)("#go-top").click(function(){(0,l.default)(window).scrollTop(0)}),void(0,l.default)(window).bind("scroll",function(){f=(0,l.default)(window).scrollTop(),p=(0,l.default)(window).height(),f>=p?a.removeClass("none"):a.addClass("none")})}if(c){r(),u.text(t.length),a.click(function(){a.find(".back").hasClass("none")||(c.scrollTo(0,!0),a.addClass("none"))}),c.addScrollstartHandler(function(){t=(0,l.default)(".item"),e=c.getViewHeight(),r()});var h=0,g=0;c.addScrollingHandler(function(){var t=c.getScrollTop();d[g]&&t>=d[g].top-e&&(g++,g>d.length&&(g=d.length));var r=g-1;d[r]&&t<=d[r].top-e&&g--;var l=g;l<=0&&(l=1),l!=h&&(n.text(l),h=l),l>=8?a.removeClass("none"):a.addClass("none"),i.removeClass("none"),o.addClass("none")}),c.addScrollendHandler(function(){var e=g;e<=0&&(e=1),e>=8?a.removeClass("none"):a.addClass("none"),i.addClass("none"),o.removeClass("none")})}}function r(){var e=(0,l.default)("#scroller"),t=(0,l.default)(".item");d.length=0,t.each(function(t,a){var i=(0,l.default)(this).offset().top-e.offset().top+(0,l.default)(this).height();d.push({top:i,index:t+1})})}var o=a(1),l=i(o),s=a(2),d=[];e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){return s.default.CONFIG.ANIMA_SCROLL?void(s.default.GLOBAL.SCROLL_OBJ&&(s.default.GLOBAL.LAZY=u.default.animaScrollLazy.init({iscroller:s.default.GLOBAL.SCROLL_OBJ,load_sucess:function(e){var t=(0,o.default)(e).closest(".item"),a=t.find("img[data-logo-layzr]"),i=a.attr("data-logo-layzr");if(i){var n=new Image;n.onload=function(){a.attr("src",i)},n.src=i}},loadData:function(e){}}))):void(s.default.GLOBAL.LAZY=u.default.lazy.init({load_sucess:function(e){var t=(0,o.default)(e).closest(".item"),a=t.find("img[data-logo-layzr]"),i=a.attr("data-logo-layzr");if((0,o.default)(e).addClass("fadeIn"),i){var n=new Image;n.onload=function(){a.attr("src",i)},n.src=i}},loadData:function(e){}}))}var r=a(1),o=i(r),l=a(2),s=i(l),d=a(26),u=i(d),c=a(27);i(c);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n=a(1),r=i(n),o=a(2),l=i(o),s={init:function(e){var t=this,a={anim:!0};return r.default.extend(a,e),this.op=a,t.img.init(a)},img_each:function(e){var t=this;e.each(function(e,a){(0,r.default)(this).attr("data-layzr")&&t.inViewport(this)&&t.act(this)})},dataEach:function(e){var t=this;e.each(function(e,a){(0,r.default)(this).attr("data-xhr-layzr")&&t.inViewport(this)&&t.op.loadData&&t.op.loadData((0,r.default)(this))})},act:function(e){var t=(0,r.default)(e),a=this;if(!t.attr("loaded")){var i=new Image,n=t.attr("data-layzr");a.op.srcTransform&&a.op.srcTransform(n,e)&&(n=a.op.srcTransform(n,e)),i.onload=function(){t.attr("src",n).removeAttr("data-layzr"),a.op.load_sucess&&a.op.load_sucess(e,!0,i)},i.onerror=function(){a.op.load_sucess&&a.op.load_sucess(e,!1,i)},n&&(i.src=n),t.attr("loaded",!0)}},inViewport:function(e){var t=window.pageYOffset-l.default.CONFIG.PRE_LOAD,a=window.pageYOffset+window.innerHeight+l.default.CONFIG.PRE_LOAD,i=(0,r.default)(e).offset().top,n=i+(0,r.default)(e).height();return i>=t&&n<=a},refreshImg:function(){this.img.imgs=(0,r.default)("img[data-layzr]"),this.img_each(this.img.imgs),this.img.dataItem=(0,r.default)("*[data-xhr-layzr]"),this.dataEach(this.img.dataItem)},img:{imgs:(0,r.default)("img[data-layzr]"),dataItem:(0,r.default)("*[data-xhr-layzr]"),init:function(e){var t=this,a=null;return(0,r.default)(window).bind("scroll",function(){clearTimeout(a),a=setTimeout(function(){s.img_each(t.imgs),s.dataEach(t.dataItem)},300)}),s.img_each(t.imgs),s.dataEach(t.dataItem),s}}},d={init:function(e){var t=this,a={anim:!0};return r.default.extend(a,e),this.op=a,t.img.init(a)},img_each:function(e){var t=this;e.each(function(e,a){(0,r.default)(this).attr("data-layzr")&&t.inViewport(this)&&t.act(this)})},dataEach:function(e){var t=this;e.each(function(e,a){(0,r.default)(this).attr("data-xhr-layzr")&&t.inViewport(this)&&t.op.loadData&&t.op.loadData((0,r.default)(this))})},act:function(e){var t=(0,r.default)(e),a=this;if(!t.attr("loaded")){var i=new Image,n=t.attr("data-layzr");i.onload=function(){t.attr("src",n).removeAttr("data-layzr"),a.op.load_sucess&&a.op.load_sucess(e)},i.onerror=function(){a.op.load_sucess&&a.op.load_sucess(e)},n&&(i.src=n),t.attr("loaded",!0)}},inViewport:function(e){var t=(0,r.default)(e),a=this.img.scroll_view.offset().top-l.default.CONFIG.PRE_LOAD,i=this.img.scroll_view.offset().top+this.op.iscroller.getViewHeight()+l.default.CONFIG.PRE_LOAD,n=t.offset().top,o=n+t.height();return o<=i&&n>=a},refreshImg:function(){this.img.imgs=(0,r.default)("img[data-layzr]"),this.img_each(this.img.imgs),this.img.dataItem=(0,r.default)("*[data-xhr-layzr]"),this.dataEach(this.img.dataItem)},img:{imgs:(0,r.default)("img[data-layzr]"),dataItem:(0,r.default)("*[data-xhr-layzr]"),scroll_view:(0,r.default)("#scroll-view"),init:function(e){var t=this;return e.iscroller.addScrollendHandler(function(){d.img_each(t.imgs),d.dataEach(t.dataItem)}),d.img_each(t.imgs),d.dataEach(t.dataItem),d}}};e.exports={lazy:s,animaScrollLazy:d}},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){var t,a=0,i=e.attr("data-skus"),n=e.attr("data-xhr-layzr");"loading"!=n&&"loaded"!=n&&(e.attr("data-xhr-layzr","loading"),t=(0,d.default)(e.find(".swiper-container")),h.getPriceData(i,function(n){g.renderActPrice(n,i,e),a++,2==a&&r(e,t)}),h.getStockData(i,function(i){g.renderStock(i,e),a++,2==a&&r(e,t)}))}function r(e,t){var a=e.find("li[data-goods-id]");if(a.length>8)for(var i=a.length;i>8;i--)a.eq(i-1).remove();(0,l.default)(this).find("li[data-goods-id]").length<=c.default.CONFIG.ACTGOODS_MIN&&((0,l.default)(this).prev(".item").addClass("mb10"),(0,l.default)(this).remove()),(0,p.default)(t),c.default.GLOBAL.SCROLL_OBJ&&c.default.GLOBAL.SCROLL_OBJ.refresh(),e.attr("data-xhr-layzr","loaded")}var o=a(1),l=i(o),s=a(28),d=i(s),u=a(2),c=i(u),f=a(9),p=i(f),h=a(13),g=a(15);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=Swiper(e,{loop:!1,slidesPerView:"auto",freeMode:!0,preventClicks:!0,freeModeSticky:!0,freeModeMomentumRatio:.2,onInit:function(){},onClick:function(e){window.location.href=(0,o.default)(e.clickedSlide).find("a").attr("_href")}});return(0,o.default)(e).find("a").each(function(e,t){var a=(0,o.default)(this).attr("href");(0,o.default)(this).attr("_href",a).attr("href","javascript:;")}),"jdapp"!=s.default.CONFIG.VS&&(0,o.default)(window).bind("orientationchange",function(){var e=(0,o.default)("#goods-rec-wrapper li"),a=document.documentElement.clientWidth;e.css("width",Math.ceil(a/3.5)),(0,u.default)(t)}),t}var r=a(1),o=i(r),l=a(2),s=i(l),d=a(9),u=i(d);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){if((0,o.default)("#best-brand li").length){var e={};(0,o.default)("#best-brand li").length>1?(e.loop=!0,e.autoplayDisableOnInteraction=!1,e.autoplay=5e4,e.pagination=".brand-pagination"):(0,o.default)(".brand-wraper").css("margin-top",0);new s.default("#best-brand .swiper-container",e)}}var r=a(1),o=i(r),l=a(8),s=i(l),d=a(2);i(d);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){function a(e){e.removeClass("none");var a=(0,o.default)(".innerWraper",e);setTimeout(function(){var i=(a.css("position","absolute").width(),a.css("position","absolute").height());e.addClass("none");var n=a.css("position","static")&&(0,o.default)(".red-page").width()/750;s.queryUrl(window.location.href).usescroll&&(n=1);var r=i*n;0!==r&&(a[0].style.WebkitTransformOrigin="0 0",a[0].style.WebkitTransform="scale("+n+")",a.height(r),t&&t(e))},300)}e.length&&e.each(function(e,t){var i=(0,o.default)(this);i.html('<div class="innerWraper">'+i.html()+"</div>");var n=(0,o.default)(".innerWraper img",i),r=0;n.length||a(i);for(var e=0;e<n.length;e++)!function(e){var t=new Image;t.onload=function(){r++,r==n.length&&a(i)},t.onerror=function(){r++,r==n.length&&a(i)},t.src=n[e].src}(e)})}var r=a(1),o=i(r),l=a(2),s=(i(l),a(5));e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){f=(0,h.default)("#go-top"),c=(0,h.default)("#nav-content"),d=m.default.GLOBAL.SCROLL_OBJ,u=(0,h.default)("#scroller"),"undefined"!=typeof flexibleConfig&&(c.removeClass("none"),(0,h.default)("#nav-content .slide-btn").click(function(){c.hasClass("active")?((0,h.default)("#nav-bg").addClass("none"),c.removeClass("active"),(0,h.default)(this).removeClass("show")):((0,h.default)("#nav-bg").removeClass("none"),c.addClass("active"),(0,h.default)(this).addClass("show"))}),(0,h.default)("#nav-bg").click(function(){(0,h.default)("#nav-bg").addClass("none"),c.removeClass("active"),(0,h.default)(this).removeClass("show")}),l(),s(),o(),(0,h.default)("#nav-content").click(function(e){var t=(0,h.default)(e.target),a=t.closest("a");if(a.length)return window.location.href=a.attr("href"),!1;if(t.hasClass("return")){if((0,h.default)("#nav-bg").addClass("none"),c.removeClass("active"),(0,h.default)("#nav-content .slide-btn").removeClass("show"),f.find(".back").hasClass("none"))return;d.scrollTo(0,!0),f.addClass("none")}else if(t.closest("*[data-moduleid]").length){var i=t.closest("*[data-moduleid]").attr("data-moduleid");r(i)}}))}function r(e){var t=(0,h.default)('.flexible-area *[data-moduleid="'+e+'"]');if(t.length){var a=t.offset().top-u.offset().top;d.scrollTo(a,!0),(0,h.default)("#nav-bg").addClass("none"),c.removeClass("active"),(0,h.default)("#nav-content .slide-btn").removeClass("show"),f.find(".back").hasClass("none")}}function o(){flexibleConfig.redGift.picUrl&&(0,h.default)("#nav-content .red-gift").attr("data-moduleid",flexibleConfig.redGift.id).append('<img src="'+flexibleConfig.redGift.picUrl+'">')}function l(){for(var e=(0,h.default)("#nav-content .first-ul"),t=flexibleConfig.titleFirst,a=0;a<t.length;a++){var i="";i=t[a].href?'<li data-moduleid="'+t[a].id+'"><a href="'+t[a].href+'">'+t[a].name+" ></a></li>":'<li data-moduleid="'+t[a].id+'"><span>'+t[a].name+" ></span></li>",e.append(i)}}function s(){for(var e=(0,h.default)("#nav-content .sec-ul"),t=(0,h.default)("#nav-content .sec-last"),a=flexibleConfig.titleSec,i=0;i<a.length;i++){var n="";n=a[i].href?'<li data-moduleid="'+a[i].id+'"><a href="'+a[i].href+'">'+a[i].name+"</a></li>":'<li data-moduleid="'+a[i].id+'"><span>'+a[i].name+"</span></li>",e.append(n)}for(var i=0;i<flexibleConfig.titleLast.length;i++){var n="";n=flexibleConfig.titleLast[i].href?'<li data-moduleid="'+flexibleConfig.titleLast[i].id+'"><a href="'+flexibleConfig.titleLast[i].href+'">'+flexibleConfig.titleLast[i].name+"</a></li>":'<li data-moduleid="'+flexibleConfig.titleLast[i].id+'"><span>'+flexibleConfig.titleLast[i].name+"</span></li>",t.append(n)}}var d,u,c,f,p=a(1),h=i(p),g=a(2),m=i(g);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){"jdapp"!=s.default.CONFIG.VS&&(0,o.default)(".innerWraper").bind("tap",function(e){var t,a=(0,o.default)(e.target);if("area"==a.get(0).tagName.toLowerCase())return t=a.attr("href"),window.location.href=t,!1})}var r=a(1),o=i(r),l=a(2),s=i(l);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){var e=(0,o.default)("body").attr("data-type");(0,o.default)("#footer-nav").length&&(0,o.default)("#footer-nav a").each(function(t,a){var i=(0,o.default)(this),n=i.attr("type");n==e?(i.closest("li").addClass("active"),i.append('<img src="'+i.attr("img_active")+'">')):i.append('<img src="'+i.attr("img")+'">')})}var r=a(1),o=i(r);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){if(window.sessionStorage){var e=l.GLOBAL.SCROLL_OBJ,t=l.GLOBAL.LAZY;sessionStorage.getItem("index_y")&&(l.CONFIG.ANIMA_SCROLL?(e.scrollTo(parseInt(sessionStorage.getItem("index_y"),10)),t.refreshImg()):(0,o.default)(window).scrollTop(parseInt(sessionStorage.getItem("index_y"),10)),sessionStorage.removeItem("index_y")),(0,o.default)("#scroll-view").bind("click",function(t){var a=(0,o.default)(t.target),i=a.closest("a");if(i.length){var n=i.attr("href");if(i.find(".total-count").length&&(n="pass"),""!=n&&"javascript:;"!=n&&"#"!=n)return a.closest(".filter-wrap").length||a.closest(".red-nav-box").length||a.closest(".flexible-area").length||a.closest(".sec-tab").length?sessionStorage.removeItem("index_y"):void(l.CONFIG.ANIMA_SCROLL?window.sessionStorage.setItem("index_y",e.getScrollTop()):window.sessionStorage.setItem("index_y",(0,o.default)(window).scrollTop()))}})}}var r=a(1),o=i(r),l=a(2);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){var e=(0,o.default)("body").attr("data-imgs"),t=d("lastimgs"),a=new Date,i=parseInt((0,o.default)("body").attr("data-distime"),10),n=10*(parseInt((0,o.default)("body").attr("data-time"),10)-1);if(a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),e&&t!=e){var r=new s.default({imgCount:20,imgUrl:e.split(","),box:".red-page",disTime:i,time:n});r.init(),r.run(),d("lastimgs",e,{expires:a})}}var r=a(1),o=i(r),l=a(36),s=i(l),d=a(4);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),o=a(1),l=i(o),s=a(2),d=(i(s),a(5)),u=i(d),c=function(){function e(t){n(this,e),this.count=t.imgCount,this.urlArr=t.imgUrl,this.box=t.box,this.imgDataArr=[],this.size=120,this.time=t.time||20,this.disTime=t.disTime||300}return r(e,[{key:"init",value:function(){for(var e=(0,l.default)(window).height(),t=(0,l.default)(this.box).width()-10,a=parseInt((0,l.default)("html").css("fontSize"),10),i=0;i<this.count;i++){var n={},r=u.default.rnd(10,t);n.size=this.size,n.index=n.size+1e3,n.url=this.urlArr[u.default.rnd(0,this.urlArr.length)],n.time=1+u.default.rnd(1,this.time)/10,r+n.size/100*a>t&&(r=t-n.size/100*a),n.trajectory={start:{x:r,y:-n.size},end:{x:r,y:e}},this.imgDataArr.push(n);var o="pointer-events: none; position: absolute; left: 0px; top: 0; width: "+n.size/100+"rem; height: "+n.size/100+"rem; z-index:"+n.index+"; background: url("+n.url+") no-repeat left top; background-size: 100% 100%;";(0,l.default)(this.box).append('<div class="img-anima" style="'+o+'"></div>')}this.setStart()}},{key:"setStart",value:function(){var e=this;(0,l.default)(".img-anima").each(function(t,a){var i=e.imgDataArr,n=i[t].trajectory.start;i[t].trajectory.end;u.default.setTransformStyle(this,n),u.default.setTransitionStyle(this,i[t].time+"s","linear")})}},{key:"run",value:function(){var e=this,t=(0,l.default)(".img-anima").length,a=(0,l.default)(".img-anima"),i=0,n=setInterval(function(){var r=e.imgDataArr,o=r[i].trajectory.end;u.default.setTransformStyle(a.get(i),o),i++,i>t-1&&(clearInterval(n),n=null)},this.disTime);(0,l.default)(".img-anima").bind("webkitTransitionEnd",function(){(0,l.default)(this).remove()})}}]),e}();e.exports=c},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=i(n),o=a(2),l=i(o),s=a(30),d=i(s),u=a(13),c=i(u),f=a(15),p=i(f),h=a(5),g=(i(h),function(){c.default.getNewUserEnter(function(e){var t=p.default.renderNewUserEnter(e);t&&m()})}),m=function(){(0,r.default)("#goodsForNewUserHtml").removeClass("none"),(0,d.default)((0,r.default)("#goodsForNewUserHtml .flexible-area-inner"),function(e){e.removeClass("op0").removeClass("none"),e.closest(".flexible-area-con").find(".load-wrap").remove(),l.default.GLOBAL.SCROLL_OBJ&&l.default.GLOBAL.SCROLL_OBJ.refresh()})};t.default=g},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),r=i(n),o=a(15),l=i(o),s=a(2),d=i(s),u=a(5),c=i(u),f=function(){for(var e=$("#guess-like li"),t=0;t<e.length;t++)t>0&&e.eq(t).hasClass("error-price")&&!e.eq(t).hasClass("is-white")&&e.length>2&&(e.eq(t).remove(),t--),e=$("#guess-like li");for(var a=0,i=0;i<e.length;i++)i>0&&!e.eq(i).hasClass("error-price")&&e.eq(i).hasClass("is-white")&&a++;if(a>=1)for(var n=0;n<e.length;n++)n>0&&(!e.eq(n).hasClass("error-price")&&e.eq(n).hasClass("is-white")||(e.eq(n).remove(),n--)),e=$("#guess-like li");else for(var r=0;r<e.length;r++)r>0&&e.eq(r).hasClass("error-price")&&e.length>2&&(e.eq(r).remove(),r--),e=$("#guess-like li");for(var o=0;o<e.length;o++)o>1&&(e.eq(o).remove(),o--),e=$("#guess-like li");$(".guess-right").removeClass("none")},p=function(){var e=[];$(".guess-right li").length&&($(".guess-right li").each(function(t,a){e.push($(this).attr("data-sku"))}),r.default.getPriceData(e.join(","),function(e){l.default.renderIndexGuessLikePrice(e),f()}))},h=function(){var e=$("#guess-like .guess-right");$("#guess-like").removeClass("none"),$(".guess-left a").attr({"report-eventid":"MFlashbuy_DIYZone","report-eventparam":"todaynewest_5_guessulikeact"}).addClass("J_ping");for(var t=0;t<2;t++){var a="javascript:;",i="";i=0==t?'class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_6_guessulikesku1"':'class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_7_guessulikesku2"',e.append('<li class="fl"><a href="'+a+'" '+i+' style="display: block; height: 1rem"></a></li>')}},g=function(){var e=window.location.href,t=c.default.queryUrl(e).recommParam;return c.default.queryUrl(window.location.href).usescroll?h():void($("#guess-like").length&&"weixin"!=d.default.CONFIG.VS&&t&&r.default.getIndexGuessLike(function(e){$("#guess-like").removeClass("none"),d.default.GLOBAL.SCROLL_OBJ&&d.default.GLOBAL.SCROLL_OBJ.refresh(),l.default.indexGuessLike(e),p()}))};t.default=g},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(13),r=i(n),o=a(15),l=i(o),s=a(2),d=i(s),u=a(5),c=i(u),f=a(28),p=i(f),h=a(9),g=(i(h),a(40)),m=i(g),v=void 0,_=function(e,t){var a=e.find("li:not(.total)"),i=e.prev('a[report-eventid="MFlashbuy_DIYZone"]');i.length&&i.attr("report-eventparam","todaynewest_"+(5+9*t)+"_guessulikeact"),a.each(function(e,a){var i="todaynewest_"+(6+e+9*t)+"_guessulikesku"+(e+1);$(this).find("a").addClass("J_ping").attr({"report-eventid":"MFlashbuy_DIYZone","report-eventparam":i})})},w=function(e,t){for(var a=e.find("li:not(.total)"),i=0;i<a.length;i++)i>7&&(a.eq(i).remove(),i--,a=e.find("li:not(.total)"));_(e,t)},C=function(){var e='<div class="guess-like-goods act-goods-list border-bottom dbcdadada" data-xhr-layzr="true"><div class="swiper-container"><ul class="swiper-wrapper"><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_6_guessulikesku1"><div class="goods-img default-type2"></div></a></li><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_7_guessulikesku2"><div class="goods-img default-type2"></div></a></li><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_8_guessulikesku3"><div class="goods-img default-type2"></div></a></li><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_9_guessulikesku4"><div class="goods-img default-type2"></div></a></li><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_10_guessulikesku5"><div class="goods-img default-type2"></div></a></li><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_11_guessulikesku6"><div class="goods-img default-type2"></div></a></li><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_12_guessulikesku7"><div class="goods-img default-type2"></div></a></li><li class="swiper-slide"><a href="javascript:;" class="J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_13_guessulikesku8"><div class="goods-img default-type2"></div></a></li></ul></div></div>';$(".item").eq(0).before(e);var t='<a href="javascript:;" class="showgoods-item item J_ping" report-eventid="MFlashbuy_DIYZone" report-eventparam="todaynewest_5_guessulikeact"><div class="img-wraper default-type3"></div></a>';$(".guess-like-goods").eq(0).before(t),(0,p.default)($(".guess-like-goods .swiper-container"))},y=function(){c.default.queryUrl(window.location.href).from_react&&$(".red-page *[report-eventid]").each(function(){var e=$(this).attr("report-eventid"),t=e.replace(/^M/,"");$(this).attr("report-eventid",t)})},b=function(){var e=[],t=$(".guess-like-goods li:not(.total)");t.length&&(t.each(function(t,a){e.push($(this).attr("data-goods-id"))}),r.default.getPriceData(e.join(","),function(t){$(".guess-like-goods").each(function(e,a){l.default.renderActGuessLikePrice(t,$(this),$(this).find("li").eq(0).attr("data-goods-id"))}),r.default.getStockData(e.join(","),function(e){$(".guess-like-goods").each(function(t,a){l.default.renderGuessStock(e,$(this),$(this).find("li").eq(0).attr("data-goods-id")),w($(this),t)}),v=(0,p.default)($(".guess-like-goods .swiper-container"))})}))},k=function(){var e=window.location.href,t=c.default.queryUrl(e).recommParam;return c.default.queryUrl(window.location.href).usescroll?(C(),void y()):void("weixin"!=d.default.CONFIG.VS&&1==$("body").attr("data-showYouLike")&&t&&r.default.getIndexGuessLike(function(e){e.reverse();for(var t=0;t<e.length;t++)l.default.renderActGuessLikeGoods(e[t],m.default.loadActGuessLikeSkuListTpl()),l.default.renderActGuessLike(e[t],t,m.default.loadActGuessLikeTpl()),$('.item[actid="'+e[t].actId+'"]').remove(),$('.act-goods-list[actid="'+e[t].actId+'"]').remove();b(),d.default.GLOBAL.SCROLL_OBJ&&d.default.GLOBAL.SCROLL_OBJ.refresh()}))};t.default=k},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),o=a(1),l=(i(o),a(2)),s=i(l),d=a(14),u=(i(d),a(5),"//static.360buyimg.com/shangou/redm/m-new/public/dist/"+s.default.CONFIG.VERSION,function(){function e(){n(this,e)}return r(e,null,[{key:"loadActGuessLikeTpl",value:function(e){return'<a href="{{=it.actHref}}" class="showgoods-item item J_ping" report-eventid="MFlashbuy_DIYZone"><div class="img-wraper default-type3"><img src="{{=it.coverImg2}}" onerror="imgError(this)"></div><div class="act-detail"><div class="brand-logo"><img src="{{=it.whiteLogoImg}}" onerror="imgError(this)"></div><p>{{=it.title}}</p>{{? it.reduceMsg != "" }}<span class="preferential-msg">{{=it.reduceMsg}}</span>{{?}}</div>{{? it.colorCard618Visible }}<span class="icon-618"></span>{{?}}</a>'}},{key:"loadActGuessLikeSkuListTpl",value:function(e){return'<div class="guess-like-goods act-goods-list border-bottom dbcdadada" data-skus="{{=it.skus}}"><div class="swiper-container"><ul class="swiper-wrapper">{{ for(var prop in it.goods) { }}<li class="swiper-slide {{=it.goods[prop].className}}" data-goods-id="{{=it.goods[prop].skuid}}"><a href="{{=it.goods[prop].href}}"><div class="goods-img default-type2"><img src="{{=it.goods[prop].imgurl}}" loaded="true" onerror="imgError(this)"></div><p class="goods-price"><span class="n-price"><em>¥</em></span><del class="o-price"><em>¥</em></del></p></a></li>{{ } }}<li class="swiper-slide total"><a href="//redact.m.jd.com/detail/{{=it.actId}}.html"><div class="total-count"><div class="total-inner"><p class="txt">查看全部</p><p class="num">{{=it.totalGoodsNum}}</p></div></div></a></li></ul></div></div>'}}]),e}());t.default=u},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){var e,t=(0,l.default)(".red-actlist .act-goods-list:not(.guess-like-goods) li[data-goods-id]"),a=0,i=[];t.each(function(e,t){i.push((0,l.default)(this).attr("data-goods-id").split("_")[1])}),g.getPriceData(i.join(","),function(t){(0,l.default)(".act-goods-list:not(.guess-like-goods)").each(function(e,a){m.renderActPrice(t,i,(0,l.default)(this))}),p.default.GLOBAL.SCROLL_OBJ&&p.default.GLOBAL.SCROLL_OBJ.refresh(),a++,2==a&&setTimeout(function(){(0,l.default)(".act-goods-list:not(.guess-like-goods)").each(function(e,t){r((0,l.default)(this))}),e=(0,d.default)((0,l.default)(".red-actlist .act-goods-list:not(.guess-like-goods) .swiper-container")),
p.default.GLOBAL.SCROLL_OBJ&&p.default.GLOBAL.SCROLL_OBJ.refresh()},800)}),g.getStockData(i.join(","),function(t){(0,l.default)(".act-goods-list:not(.guess-like-goods)").each(function(e,a){m.renderStock(t,(0,l.default)(this))}),p.default.GLOBAL.SCROLL_OBJ&&p.default.GLOBAL.SCROLL_OBJ.refresh(),a++,2==a&&setTimeout(function(){(0,l.default)(".act-goods-list:not(.guess-like-goods)").each(function(e,t){r((0,l.default)(this))}),e=(0,d.default)((0,l.default)(".red-actlist .act-goods-list:not(.guess-like-goods) .swiper-container")),p.default.GLOBAL.SCROLL_OBJ&&p.default.GLOBAL.SCROLL_OBJ.refresh()},800)})}function r(e){var t=e.find("li[data-goods-id]");if((0,c.default)(e),t.length>8)for(var a=t.length;a>8;a--)t.eq(a-1).remove()}var o=a(1),l=i(o),s=a(28),d=i(s),u=a(42),c=i(u),f=a(2),p=i(f),h=a(9),g=(i(h),a(13)),m=a(15);e.exports=n},function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.find(".J_ping"),a=e.attr("actid"),i=e.prev('a[report-eventid="MFlashbuy_DIYZone"]');i.length?!function(){var t=e.find("li:not(.total)"),a=parseInt(i.attr("report-eventparam").split("_")[1],10);t.each(function(e,t){var i="todaynewest_"+(a+e+1)+"_guessulikesku"+(e+1);(0,o.default)(this).find("a").addClass("J_ping").attr({"report-eventid":"MFlashbuy_DIYZone","report-eventparam":i})})}():t.each(function(e,t){if(!(0,o.default)(this).find(".total-count").length){var i=(0,o.default)(this).closest("li"),n=i.attr("data-goods-id").split("_")[1];(0,o.default)(this).attr({"report-eventparam":a+"_"+n+"_"+(e+1),"report-eventid":"MFlashbuy_BigProduct",clstag:"firsttype|keycount|shangoum|new_jrsx_bigbrandday_"+a+"_"+n+"_"+(e+1)})}})}var r=a(1),o=i(r),l=a(14),s=(i(l),a(18));i(s),a(2),a(13),a(15);e.exports=n},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){var i;!function(n,r){i=function(){return r(n)}.call(t,a,t,e),!(void 0!==i&&(e.exports=i))}("undefined"!=typeof window?window:void 0,function(e){"use strict";function t(e){return'openapp.jdmobile://communication?params={"des":"share","type":"111","title":"'+e.title+'","content":"'+e.content+'","shareUrl":"'+e.url+'","iconUrl":"'+e.img+'","shareActionType":"'+e.shareActionType+'","channel":"'+e.channel+'","timeline_title":"'+e.timeline_title+'","qrparam":"'+e.qrparam+'","callback":"'+e.callbackSwitcher+'","clickcallback":"'+e.clickcallbackSwitcher+'"}'}function a(e){shareHelper.initShare(JSON.stringify({title:e.title,content:e.content,shareUrl:decodeURIComponent(e.url),iconUrl:decodeURIComponent(e.img),shareActionType:e.shareActionType,channel:e.channel,timeline_title:e.timeline_title,qrparam:e.qrparam,callback:e.callbackSwitcher,clickcallback:e.clickcallbackSwitcher,eventId:""}))}function i(e,t){shareHelper[e](t.title,t.content,decodeURIComponent(t.url),decodeURIComponent(t.img),t.callbackSwitcher)}function n(e,t){shareHelper[e](t.title,t.content,decodeURIComponent(t.url),decodeURIComponent(t.img))}function r(e,t){return'openapp.jdmobile://communication?params={"action":"'+t+'","title":"'+e.title+'","content":"'+e.content+'","shareUrl":"'+e.url+'","iconUrl":"'+e.img+'","isCallBack":"'+e.callbackSwitcher+'"}'}function o(e){var t={category:"jump",des:"share",type:"111",title:e.title,content:e.content,shareUrl:e.url,imageUrl:e.img,iconUrl:e.img,timeline_title:e.timeline_title,qrparam:e.qrparam,channel:e.channel,isCallBack:e.callbackSwitcher,clickcallback:e.clickcallbackSwitcher,shareActionType:e.shareActionType};return S+"virtual?params="+JSON.stringify(t)}function l(e){if(!(this instanceof l))return new l(e)}function s(e){this.message=e,this.name="JdShareException",this.toString=function(){return this.name+": "+this.message}}function d(e,t){for(var a in t)t.hasOwnProperty(a)&&void 0!==t[a]&&(e[a]=t[a])}function u(e,t){return""==t?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function c(t){e.jdappShareRes=function(e){e.hasOwnProperty("shareResult")?t.callback&&t.callback(e):t.clickcallback&&t.clickcallback(e)}}function f(e){var t={Wxfriends:"WeChat_Friend",Wxmoments:"WeChat_FriendTimeline",Sinaweibo:"Weibo",QQfriends:"QQFriend_SHARE_CLIENT",QQzone:"QQZone_SHARE_CLIENT",Moreshare:""},a="";if(e){if(y){if(I){if(a=t[e])return a;throw new s("输入的channel参数在iphone版本中不存在")}return e}return e}return e}function p(e){return void 0!==e.title&&void 0!==e.content&&void 0!==e.url&&void 0!==e.img}function h(e){if(p(e)){try{var t,a,i,n,r={timeline_title:"",channel:"",qrparam:null,callback:null,clickcallback:null};"[object Object]"===Object.prototype.toString.call(e)&&d(r,e),t="function"==typeof r.callback,i="function"==typeof r.clickcallback,a=t?A.WITH_CALLBACK:A.WITHOUT_CALLBACK,n=i?A.WITH_CALLBACK:A.WITHOUT_CALLBACK,t&&i?c({callback:r.callback,clickcallback:r.clickcallback}):t?c({callback:r.callback}):i&&c({clickcallback:r.clickcallback}),"[object Object]"===Object.prototype.toString.call(r.qrparam)&&(r.qrparam.top_pic=r.qrparam.top_pic?encodeURIComponent(decodeURIComponent(r.qrparam.top_pic)):"",r.qrparam.mid_pic=r.qrparam.mid_pic?encodeURIComponent(decodeURIComponent(r.qrparam.mid_pic)):"",r.qrparam.qr_direct=r.qrparam.qr_direct?encodeURIComponent(decodeURIComponent(r.qrparam.qr_direct)):""),r.callbackSwitcher=a,r.clickcallbackSwitcher=n,r.url=u(r.url,"_ts="+(new Date).getTime()),r.channel=f(r.channel),r.url=encodeURIComponent(r.url),r.img=encodeURIComponent(r.img)}catch(e){throw e}return r}throw new s("调用方法时传入配置对象格式错误，请查看文档")}var g,m=navigator.userAgent.toLowerCase(),v=m.split(";"),_=m.indexOf("jdapp")!=-1,w=function(){if(_&&v[2])try{return parseInt(v[2].replace(/\./g,""))}catch(e){}}(),C="android"===v[1],y="iphone"===v[1],b=C||y,k=m.indexOf("ipad")!=-1,L=(/MicroMessenger/i.test(m),b&&_&&w>=500),I=b&&_&&w>=440&&w<500,O=k&&_&&w>=360,S=function(){return b?"openapp.jdmobile://":k?"openapp.jdipad://":void 0}(),A={WITH_CALLBACK:"Y",WITHOUT_CALLBACK:"N",SHARE_ACTION_SET:"S",SHARE_ACTION_PANE:"P",SHARE_ACTION_OPEN:"O"};return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,l.prototype.setShareInfo=function(l){try{var s=null;if(_)if(s=h(l),s.shareActionType=A.SHARE_ACTION_SET,C)if(e.shareHelper)if("function"==typeof shareHelper.initShare)a(s);else if("function"==typeof shareHelper.setShareInfoCallback)if(s.callbackSwitcher===A.WITH_CALLBACK)try{i("setShareInfoCallback",s)}catch(e){n("setShareInfoCallback",s)}else try{i("setShareInfoCallback",s)}catch(e){"function"==typeof shareHelper.setShareInfo&&n("setShareInfo",s)}else"function"==typeof shareHelper.setShareInfo&&n("setShareInfo",s);else e.location.href=t(s);else(y||k)&&(L||O?location.href=o(s):y&&(location.href=r(s,"syncShareData")))}catch(e){throw e}},l.prototype.callSharePane=function(n){try{var l=null;l=h(n),l.shareActionType=A.SHARE_ACTION_PANE,C?_&&e.shareHelper?"function"==typeof shareHelper.initShare?a(l):"function"==typeof shareHelper.callShare?i("callShare",l):e.location.href=t(l):e.location.href=t(l):(y||k)&&(L||O?location.href=o(l):y&&(location.href=r(l,"share")))}catch(e){throw e}},l.prototype.sendDirectShare=function(i){try{var n,r=null;if(r=h(i),r.shareActionType=A.SHARE_ACTION_OPEN,C)_&&e.shareHelper?"function"==typeof shareHelper.initShare?a(r):"function"==typeof shareHelper.sendShare?shareHelper.sendShare(r.title,r.content,decodeURIComponent(r.url),decodeURIComponent(r.img),r.channel,r.callbackSwitcher):location.href=t(r):e.location.href=t(r);else if(y||k){if(!r.channel)throw new s("分享渠道未设置");L||O?location.href=o(r):y&&(n='openapp.jdmobile://virtual?params={"category":"jump","des":"share","type":"111","title":"'+r.title+'","content":"'+r.content+'","shareUrl":"'+r.url+'","imageUrl":"'+r.img+'","channel":"'+r.channel+'","isCallBack":"'+r.callbackSwitcher+'"}',location.href=n)}}catch(e){throw e}},g||(g=l()),g})}]);
//# sourceMappingURL=register.js.map