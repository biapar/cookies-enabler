window.COOKIES_ENABLER=window.COOKIES_ENABLER||function(){var e,n,t={classTrigger:"ce-trigger",classBanner:"ce-banner"},r=function(r){e={scriptClass:document.getElementsByClassName(null==r.element?"ce-script":r.element),eventScroll:null==r.eventScroll?!1:r.eventScroll,bannerHTML:null==r.bannerHTML?'This website uses cookies.<a href="#" class="ce-trigger">Enable Cookies</a>':r.bannerHTML,cookie:{name:null==r.cookie.name?"ce-consent":r.cookie.name,duration:null==r.cookie.duration?"365":r.cookie.duration}},n={trigger:document.getElementsByClassName(t.classTrigger),banner:document.getElementsByClassName(t.classBanner)},"Y"==o()?c():(s(),e.eventScroll===!0&&window.addEventListener("scroll",i),n.trigger[0].addEventListener("click",i))},i=function(e){"click"===e.type&&e.preventDefault(),"Y"!=o()&&(a(),c(),n.banner[0].style.display="none",window.removeEventListener("scroll",i))},s=function(){var n='<div class="'+t.classBanner+'">'+e.bannerHTML+"</div>";document.body.insertAdjacentHTML("beforeend",n)},a=function(){var n,t,r="Y";e.cookie.duration?(n=new Date,n.setTime(n.getTime()+24*e.cookie.duration*60*60*1e3),t="; expires="+n.toGMTString()):t="",document.cookie=e.cookie.name+"="+r+t+"; path=/"},o=function(){var n,t,r,i=document.cookie.split(";");for(n=0;n<i.length;n++)if(t=i[n].substr(0,i[n].indexOf("=")),r=i[n].substr(i[n].indexOf("=")+1),t=t.replace(/^\s+|\s+$/g,""),t==e.cookie.name)return unescape(r)},c=function(){var n,t,r,i,s=e.scriptClass.length,a=document.createDocumentFragment();for(n=0;s>n;n++){for(r=document.createElement("script"),r.type="text/javascript",t=0;t<e.scriptClass[n].attributes.length;t++)i=e.scriptClass[n].attributes[t],i.specified&&"type"!=i.name&&"class"!=i.name&&r.setAttribute(i.name,i.value);r.innerHTML=e.scriptClass[n].innerHTML,a.appendChild(r)}document.body.appendChild(a)};return{init:r}}();