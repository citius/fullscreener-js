!function(e){function n(r){if(l[r])return l[r].exports;var t=l[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var l={};n.m=e,n.c=l,n.i=function(e){return e},n.d=function(e,l,r){n.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(l,"a",l),l},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.fullscreenElement=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitCurrentFullScreenElement||null},t=n.requestFullscreen=function(e){if(!e)return!1;"img"==e.tagName.toLowerCase()&&e.dataset.fullSizeSrc&&(e.dataset.previewSrc=e.dataset.fullSizeSrc,e.src=e.dataset.fullSizeSrc),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.webkitEnterFullScreen?e.webkitEnterFullScreen():e.msRequestFullScreen&&e.msRequestFullScreen()},c=n.cancelFullscreen=function(e){e=e||document;var n=r();n&&"img"==n.tagName.toLowerCase()&&n.dataset.previewSrc&&(n.src=n.dataset.previewSrc),e.cancelFullscreen?e.cancelFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitCancelFullScreen?e.webkitCancelFullScreen():e.webkitExitFullScreen?e.webkitExitFullScreen():e.msCancelFullScreen&&e.msCancelFullScreen()},u=n.addFullscreenChangeListener=function(e){return function(n){e.addEventListener("fullscreenchange",n),e.addEventListener("webkitfullscreenchange",n),e.addEventListener("mozfullscreenchange",n),e.addEventListener("webkitendfullscreen",n)}},s=n.removeFullscreenChangeListener=function(e){return function(n){e.removeEventListener("fullscreenchange",n),e.removeEventListener("webkitfullscreenchange",n),e.removeEventListener("mozfullscreenchange",n),e.removeEventListener("webkitendfullscreen",n)}};n.isFullscreen=r;n.default={fullscreenElement:r,requestFullscreen:t,cancelFullscreen:c,addFullscreenChangeListener:u,removeFullscreenChangeListener:s}}]);