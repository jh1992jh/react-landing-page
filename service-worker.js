"use strict";var precacheConfig=[["/react-landing-page/index.html","d6ee8d95ebe0a6324e3157905d917d59"],["/react-landing-page/static/css/main.784da297.css","6d22f9320bac5b80b10c18bf3280d5a1"],["/react-landing-page/static/js/main.809e083a.js","ce815aa085ea5c92c9d77db5e4b6295f"],["/react-landing-page/static/media/img1.feb6dbae.jpeg","feb6dbae8b83d66977f033adbd6a39fa"],["/react-landing-page/static/media/img10.21caea4d.jpeg","21caea4d81539b4de7b95876f04f6464"],["/react-landing-page/static/media/img11.b22f9025.jpeg","b22f902501dcaad4fbb7e3772d47d283"],["/react-landing-page/static/media/img12.c7517d02.jpeg","c7517d02171ab6101d997ca5846f5974"],["/react-landing-page/static/media/img13.bc9e39c5.jpeg","bc9e39c551ef555d4cfda1737338a5b6"],["/react-landing-page/static/media/img14.a33a4186.jpeg","a33a41861c1575c04b7f7ce0c7064f79"],["/react-landing-page/static/media/img2.7c01c8b3.jpeg","7c01c8b3f5053aed10172f947d948f23"],["/react-landing-page/static/media/img3.50785e76.jpeg","50785e765d3b5749fa42df0ad3e9aee5"],["/react-landing-page/static/media/img4.acd0ebd2.jpeg","acd0ebd266530e30f75bdb7b4e87b381"],["/react-landing-page/static/media/img5.81cc814b.jpeg","81cc814b9dcbda3705181c2308a7f7c4"],["/react-landing-page/static/media/img6.99d89476.jpeg","99d89476c95af0c856a46752ff7a04e5"],["/react-landing-page/static/media/img7.0ffc4d17.jpeg","0ffc4d17e5f9f7c6ba9c8f3d98c3db53"],["/react-landing-page/static/media/img8.bb4dacc1.jpeg","bb4dacc1f5ef232e66f3d919990fa806"],["/react-landing-page/static/media/img9.b518c38c.jpeg","b518c38cccf7424678d346b04bc1dd6f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/react-landing-page/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});