function ListaFilme() {
    let data = {
        nome: document.getElementById('nome').value,
        id: document.getElementById('ID').value,
        sinopse: document.getElementById('sinopse').value,
        classificação: document.getElementById('classificacao').value,
        dt_nascimento: document.getElementById('dt_estreia').value
    }
    axios.get('http://localhost:3001/api/v1/filme', data)
}
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

});
//Barra de navegação
const menuBtn = document.querySelector(".menu-icon span");
const searchIconBtn = document.querySelector(".search-icon");
const searchBtn = document.querySelector(".btn-search");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  searchIconBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchIconBtn.onclick = () => {
  form.classList.add("active");
  searchIconBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}


const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => { 
  filterItem.onclick = (selectedItem) => { 
    if (selectedItem.target.classList.contains("item")) { 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if ((filterImges == filterName) || (filterName == "all")) {
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}
var breakpoints=function(){"use strict";function e(e){t.init(e)}var t={list:null,media:{},events:[],init:function(e){t.list=e,window.addEventListener("resize",t.poll),window.addEventListener("orientationchange",t.poll),window.addEventListener("load",t.poll),window.addEventListener("fullscreenchange",t.poll)},active:function(e){var n,a,s,i,r,d,c;if(!(e in t.media)){if(">="==e.substr(0,2)?(a="gte",n=e.substr(2)):"<="==e.substr(0,2)?(a="lte",n=e.substr(2)):">"==e.substr(0,1)?(a="gt",n=e.substr(1)):"<"==e.substr(0,1)?(a="lt",n=e.substr(1)):"!"==e.substr(0,1)?(a="not",n=e.substr(1)):(a="eq",n=e),n&&n in t.list)if(i=t.list[n],Array.isArray(i)){if(r=parseInt(i[0]),d=parseInt(i[1]),isNaN(r)){if(isNaN(d))return;c=i[1].substr(String(d).length)}else c=i[0].substr(String(r).length);if(isNaN(r))switch(a){case"gte":s="screen";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: -1px)";break;case"not":s="screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (max-width: "+d+c+")"}else if(isNaN(d))switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen";break;case"gt":s="screen and (max-width: -1px)";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+")";break;default:s="screen and (min-width: "+r+c+")"}else switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+"), screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (min-width: "+r+c+") and (max-width: "+d+c+")"}}else s="("==i.charAt(0)?"screen and "+i:i;t.media[e]=!!s&&s}return t.media[e]!==!1&&window.matchMedia(t.media[e]).matches},on:function(e,n){t.events.push({query:e,handler:n,state:!1}),t.active(e)&&n()},poll:function(){var e,n;for(e=0;e<t.events.length;e++)n=t.events[e],t.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return e._=t,e.on=function(e,n){t.on(e,n)},e.active=function(e){return t.active(e)},e}();!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.breakpoints=t()}(this,function(){return breakpoints});
!function(e){e.fn.disableSelection_dropotron=function(){return e(this).css("user-select","none").css("-khtml-user-select","none").css("-moz-user-select","none").css("-o-user-select","none").css("-webkit-user-select","none")},e.fn.dropotron=function(t){if(0==this.length)return e(this);if(this.length>1)for(var o=0;o<this.length;o++)e(this[o]).dropotron(t);return e.dropotron(e.extend({selectorParent:e(this)},t))},e.dropotron=function(t){var o=e.extend({selectorParent:null,baseZIndex:1e3,menuClass:"dropotron",expandMode:"hover",hoverDelay:150,hideDelay:250,openerClass:"opener",openerActiveClass:"active",submenuClassPrefix:"level-",mode:"fade",speed:"fast",easing:"swing",alignment:"left",offsetX:0,offsetY:0,globalOffsetY:0,IEOffsetX:0,IEOffsetY:0,noOpenerFade:!0,detach:!0,cloneOnDetach:!0},t),n=o.selectorParent,s=n.find("ul"),i=e("body"),a=e("body,html"),l=e(window),r=!1,d=null,c=null;n.on("doCollapseAll",function(){s.trigger("doCollapse")}),s.each(function(){var t=e(this),n=t.parent();o.hideDelay>0&&t.add(n).on("mouseleave",function(e){window.clearTimeout(c),c=window.setTimeout(function(){t.trigger("doCollapse")},o.hideDelay)}),t.disableSelection_dropotron().hide().addClass(o.menuClass).css("position","absolute").on("mouseenter",function(e){window.clearTimeout(c)}).on("doExpand",function(){if(t.is(":visible"))return!1;window.clearTimeout(c),s.each(function(){var t=e(this);e.contains(t.get(0),n.get(0))||t.trigger("doCollapse")});var i,a,d,f,u=n.offset(),p=n.position(),h=(n.parent().position(),n.outerWidth()),g=t.outerWidth(),v=t.css("z-index")==o.baseZIndex;if(v){switch(i=o.detach?u:p,f=i.top+n.outerHeight()+o.globalOffsetY,a=o.alignment,t.removeClass("left").removeClass("right").removeClass("center"),o.alignment){case"right":d=i.left-g+h,0>d&&(d=i.left,a="left");break;case"center":d=i.left-Math.floor((g-h)/2),0>d?(d=i.left,a="left"):d+g>l.width()&&(d=i.left-g+h,a="right");break;case"left":default:d=i.left,d+g>l.width()&&(d=i.left-g+h,a="right")}t.addClass(a)}else switch("relative"==n.css("position")||"absolute"==n.css("position")?(f=o.offsetY,d=-1*p.left):(f=p.top+o.offsetY,d=0),o.alignment){case"right":d+=-1*n.parent().outerWidth()+o.offsetX;break;case"center":case"left":default:d+=n.parent().outerWidth()+o.offsetX}navigator.userAgent.match(/MSIE ([0-9]+)\./)&&RegExp.$1<8&&(d+=o.IEOffsetX,f+=o.IEOffsetY),t.css("left",d+"px").css("top",f+"px").css("opacity","0.01").show();var C=!1;switch(d="relative"==n.css("position")||"absolute"==n.css("position")?-1*p.left:0,t.offset().left<0?(d+=n.parent().outerWidth()-o.offsetX,C=!0):t.offset().left+g>l.width()&&(d+=-1*n.parent().outerWidth()-o.offsetX,C=!0),C&&t.css("left",d+"px"),t.hide().css("opacity","1"),o.mode){case"zoom":r=!0,n.addClass(o.openerActiveClass),t.animate({width:"toggle",height:"toggle"},o.speed,o.easing,function(){r=!1});break;case"slide":r=!0,n.addClass(o.openerActiveClass),t.animate({height:"toggle"},o.speed,o.easing,function(){r=!1});break;case"fade":if(r=!0,v&&!o.noOpenerFade){var C;C="slow"==o.speed?80:"fast"==o.speed?40:Math.floor(o.speed/2),n.fadeTo(C,.01,function(){n.addClass(o.openerActiveClass),n.fadeTo(o.speed,1),t.fadeIn(o.speed,function(){r=!1})})}else n.addClass(o.openerActiveClass),n.fadeTo(o.speed,1),t.fadeIn(o.speed,function(){r=!1});break;case"instant":default:n.addClass(o.openerActiveClass),t.show()}return!1}).on("doCollapse",function(){return t.is(":visible")?(t.hide(),n.removeClass(o.openerActiveClass),t.find("."+o.openerActiveClass).removeClass(o.openerActiveClass),t.find("ul").hide(),!1):!1}).on("doToggle",function(e){return t.is(":visible")?t.trigger("doCollapse"):t.trigger("doExpand"),!1}),n.disableSelection_dropotron().addClass("opener").css("cursor","pointer").on("click touchend",function(e){r||(e.preventDefault(),e.stopPropagation(),t.trigger("doToggle"))}),"hover"==o.expandMode&&n.hover(function(e){r||(d=window.setTimeout(function(){t.trigger("doExpand")},o.hoverDelay))},function(e){window.clearTimeout(d)})}),s.find("a").css("display","block").on("click touchend",function(t){r||e(this).attr("href").length<1&&t.preventDefault()}),n.find("li").css("white-space","nowrap").each(function(){var t=e(this),o=t.children("a"),s=t.children("ul"),i=o.attr("href");o.on("click touchend",function(e){0==i.length||"#"==i?e.preventDefault():e.stopPropagation()}),o.length>0&&0==s.length&&t.on("click touchend",function(e){r||(n.trigger("doCollapseAll"),e.stopPropagation())})}),n.children("li").each(function(){var t,n=e(this),s=n.children("ul");if(s.length>0){o.detach&&(o.cloneOnDetach&&(t=s.clone(),t.attr("class","").hide().appendTo(s.parent())),s.detach().appendTo(i));for(var a=o.baseZIndex,l=1,r=s;r.length>0;l++)r.css("z-index",a++),o.submenuClassPrefix&&r.addClass(o.submenuClassPrefix+(a-1-o.baseZIndex)),r=r.find("> li > ul")}}),l.on("scroll",function(){n.trigger("doCollapseAll")}).on("keypress",function(e){r||27!=e.keyCode||(e.preventDefault(),n.trigger("doCollapseAll"))}),a.on("click touchend",function(){r||n.trigger("doCollapseAll")})}}(jQuery);

