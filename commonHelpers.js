import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="44454765-ee57bdc991fe1fe6c04d7dec5";async function f(n){const r=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(r);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits.map(e=>({webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}))}catch(t){throw t}}function u(n){n.innerHTML=""}const h=document.getElementById("search-form"),g=document.getElementById("search-input"),a=document.getElementById("gallery"),l=document.createElement("div");l.classList.add("loader");const p=new d(".gallery a");h.addEventListener("submit",async n=>{n.preventDefault();const r=g.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}u(a),a.appendChild(l);try{const t=await f(r);t.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(t)}catch(t){console.error("Error fetching images:",t),c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{a.removeChild(l),p.refresh()}});function y(n){n.forEach(r=>{const t=document.createElement("div");t.classList.add("gallery-item");const s=document.createElement("a");s.href=r.largeImageURL,s.setAttribute("data-lightbox","gallery");const e=document.createElement("img");e.src=r.webformatURL,e.alt=r.tags,s.appendChild(e),t.appendChild(s),a.appendChild(t)})}
//# sourceMappingURL=commonHelpers.js.map
