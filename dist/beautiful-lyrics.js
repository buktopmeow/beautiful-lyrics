var beautifulDlyrics=(()=>{var r,o,l,n="FqmFsMhuF4D0s35Z62Js",a=new Map,s=()=>{null!=r&&r(),r=void 0},i=e=>{let t;if((t=e.classList.contains("main-image-loaded")?e.src:t)!==l){l=t;for(const r of a.values())r()}},c=e=>{s(),i(e);const t=new MutationObserver(()=>{i(e)});t.observe(e,{attributes:!0,attributeFilter:["class","src"],childList:!1,subtree:!1}),r=()=>{t.disconnect()}},e=()=>{let e,t=0;for(const i of Array.from(document.body.querySelectorAll("."+n))){var r=i.naturalWidth*i.naturalHeight;r>t&&(t=r,e=i)}void 0===e?(l=o=void 0,s()):e!==o&&(o=e,l=void 0,c(e))},d="os-viewport .lyrics-lyrics-container",u="main-nowPlayingView-sectionHeaderSpacing",y={NowPlaying:void 0,FullScreen:void 0},v={NowPlaying:void 0,FullScreen:void 0},b=(e,t)=>{var r;e!==y[t]&&(null!=(r=v[t])&&r.call(v),v[t]=void 0,e&&(v[t]=(e=>{const t=document.createElement("div"),r=(t.classList.add("lyrics-background-container"),document.createElement("img")),i=document.createElement("img");r.classList.add("lyrics-background-color"),i.classList.add("lyrics-background-back"),t.appendChild(r),t.appendChild(i);var o=()=>{r.src=null!=l?l:"",i.src=null!=l?l:""},o=(a.set(e,o),o(),()=>{e.classList.contains("lyrics-background")||e.classList.add("lyrics-background")});o();const n=new MutationObserver(o);return n.observe(e,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1}),e.prepend(t),()=>{n.disconnect(),t.remove(),e.classList.remove("lyrics-background"),a.delete(e)}})(e)),y[t]=null!=e?e:void 0)},t=()=>{var e,t=document.body.querySelector("."+u),r=document.body.querySelector("."+d);r=null!=(e=null==(r=null!=(e=null==r?void 0:r.parentElement)?e:null)?void 0:r.parentElement)?e:null,b(t,"NowPlaying"),b(r,"FullScreen")},m="lyrics-lyrics-contentWrapper",g="main-nowPlayingView-lyricsContent",f={NowPlaying:void 0,FullScreen:void 0},p={NowPlaying:void 0,FullScreen:void 0},w=i=>{const a=new Map,o=()=>{let t;for(var[e,r]of a){e=e.classList;e.contains("lyrics-lyricsContent-active")?(r.State="Active",t=r.LayoutOrder):e.contains("lyrics-lyricsContent-unsynced")?r.State="Unsynced":e.contains("lyrics-lyricsContent-highlight")?r.State="Sung":r.State="Unsung"}for(var[i,o]of a){var n="Active"===o.State,l=n||"Unsynced"===o.State;let e;e=l?0:void 0===t?4:Math.min(Math.abs(o.LayoutOrder-t),4);l=l?"var(--lyrics-color-active)":"Sung"===o.State?"var(--lyrics-color-passed)":"var(--lyrics-color-inactive)";!1===i.classList.contains("lyric")&&i.classList.add("lyric"),n?(o=getComputedStyle(i),n=getComputedStyle(document.documentElement),o=parseFloat(o.fontSize),n=parseFloat(n.fontSize),i.style.fontSize=.5+o/n+"rem"):i.style.fontSize="",i.style.color="transparent",i.style.textShadow=`0 0 ${e}px `+l}};let t;{const n=e=>{var t,r;e instanceof HTMLDivElement&&e.classList.contains("lyrics-lyricsContent-lyric")&&(e=e,t=Array.from(i.children).indexOf(e),(r=new MutationObserver(o)).observe(e,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1}),a.set(e,{Observer:r,LayoutOrder:t,State:"Unsung"}),o())};(t=new MutationObserver(e=>{for(const t of e)if("childList"===t.type){for(const r of t.addedNodes)n(r);for(const i of t.removedNodes)i instanceof HTMLDivElement&&a.delete(i)}})).observe(i,{attributes:!1,childList:!0,subtree:!1});for(const e of i.childNodes)n(e)}return()=>{t.disconnect();for(const e of a.values())e.Observer.disconnect()}},h=(e,t)=>{var r;e!==f[t]&&(null!=(r=p[t])&&r.call(p),p[t]=void 0,e&&(p[t]=w(e)),f[t]=null!=e?e:void 0)},S=()=>{var e=document.body.querySelector("."+g),t=document.body.querySelector("."+m);h(e,"NowPlaying"),h(t,"FullScreen")};var k=async function(){e(),t(),S(),new MutationObserver(()=>{e(),t(),S()}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})};(async()=>{await k()})()})();(async()=>{var e;document.getElementById("beautifulDlyrics")||((e=document.createElement("style")).id="beautifulDlyrics",e.textContent=String.raw`
  .lyrics-background,.lyrics-lyrics-container{--lyrics-color-inactive:rgb(240 240 240 / 51%)!important}.main-lyricsCinema-controls,.main-nowPlayingView-lyricsControls,.main-nowPlayingView-lyricsTitle button{mix-blend-mode:overlay}.lyric:hover{text-shadow:0 0 0 var(--lyrics-color-active)!important}.lyrics-lyricsContent-active{margin-top:.25em;margin-bottom:.25em}.lyrics-background{overflow:hidden;position:relative}.lyrics-background.main-nowPlayingView-sectionHeaderSpacing.main-nowPlayingView-lyricsGradient,.lyrics-background.os-viewport .lyrics-lyrics-background{background-color:rgba(0,0,0,0)}.lyrics-background.os-viewport{overflow:visible;position:absolute}.lyrics-background.os-viewport>.lyrics-background-container{position:sticky;max-width:35%;max-height:30%;scale:290% 340%;transform-origin:left top;margin-bottom:-15%}.lyrics-background-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;overflow:hidden;border-radius:inherit;filter:saturate(1.5) brightness(.8)}.lyrics-background-back,.lyrics-background-color{width:200%;position:absolute;border-radius:100em;animation:rotate 35s linear infinite}.lyrics-background-color{right:0;top:0;filter:blur(40px);z-index:10;mix-blend-mode:revert}.lyrics-background-back{left:0;bottom:0;filter:blur(40px);z-index:1;animation-direction:reverse;animation-delay:10s}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
      `.trim(),document.head.appendChild(e))})();