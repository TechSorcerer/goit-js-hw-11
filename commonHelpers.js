import{S as d,i as f}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const m="44018345-85ec7856faf02135ba80b8e93",p="https://pixabay.com/api/";function h(e){const n=`${p}?key=${m}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(t=>t.ok?t.json():Promise.reject("Network response was not ok")).then(t=>t.hits).catch(t=>(console.error("Error fetching images:",t),Promise.reject(t)))}let i;function g(e){const n=document.querySelector(".gallery");n.innerHTML=e.map(t=>b(t)).join(""),i?i.refresh():i=new d(".gallery a")}function a(e){f.error({title:"Error",message:e,position:"topRight"})}function y(){const e=document.createElement("div");e.className="loading-indicator",e.innerHTML='<div class="loader">Loading...</div>',document.body.appendChild(e)}function l(){const e=document.querySelector(".loading-indicator");e&&document.body.removeChild(e)}function b(e){return`
    <li class="card-item">
      <a href="${e.largeImageURL}" class="photo-card">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span class="numbers">${e.likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span class="numbers">${e.views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span class="numbers">${e.comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span class="numbers">${e.downloads}</span>
          </p>
        </div>
      </a>
    </li>
  `}const L=document.querySelector("#search-form"),u=document.querySelector('input[name="searchQuery"]'),v=document.querySelector(".gallery");L.addEventListener("submit",e=>{e.preventDefault();const n=u.value.trim();if(n===""){a("Please enter a search query.");return}v.innerHTML="",y(),h(n).then(t=>{if(l(),t.length===0){a("Sorry, there are no images matching your search query. Please try again!");return}g(t)}).catch(t=>{l(),a("Something went wrong. Please try again later.")}),u.value=""});
//# sourceMappingURL=commonHelpers.js.map
