import{a as w,S as L,i as l}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function f(r){return r.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:s,comments:n,downloads:y})=>`
    <li class="gallery-item">
        <div class="gallery">
            <a class="gallery-link" href="${a}">
                <img class="gallery-img" src="${t}" alt="${o}" />
                <ul class="search-list">
                    <li class="info"><span class="info-item">Likes</span>${e}</li>
                    <li class="info"><span class="info-item">Views</span>${s}</li>
                    <li class="info"><span class="info-item">Comments</span>${n}</li>
                    <li class="info"><span class="info-item">Downloads</span>${y}</li>
                </ul>
            </a>
        </div>
        </li>
        `).join("")}async function g(r,t){const a="43290538-553335dd3499f06be9a5135a9",o=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}),{data:e}=await w(`https://pixabay.com/api/?${o}`);return e}const b=document.querySelector("#search-form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),p=new L(".gallery a",{captionsData:"alt",captionDelay:250});b.addEventListener("submit",C);h.addEventListener("click",S);let i=1,c="",m=0;async function C(r){if(r.preventDefault(),d.innerHTML="",i=1,c=r.currentTarget.elements.searchQuery.value.trim(),!c){l.show({title:"error",titleColor:"white",message:"Please, enter a word ",messageColor:"white",color:"red",position:"topCenter",timeout:"2000"});return}u.classList.toggle("is-hidden");try{const t=await g(c,i);if(t.total===0){l.show({title:"error",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"2000"});return}d.insertAdjacentHTML("beforeend",f(t.hits)),p.refresh(),r.target.reset(),m=Math.ceil(t.totalHits/15),i<m&&h.classList.remove("is-hidden")}catch(t){l.show({message:t.message})}finally{u.classList.toggle("is-hidden")}}async function S(){i+=1,u.classList.toggle("is-hidden");try{const r=await g(c,i);d.insertAdjacentHTML("beforeend",f(r.hits)),p.refresh();const{height:t}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),i===m&&(h.classList.add("is-hidden"),l.show({title:"error",titleColor:"white",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",color:"red",position:"topCenter",timeout:"2000"}))}catch(r){l.show({message:r.message})}finally{u.classList.toggle("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
