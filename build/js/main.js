"use strict";var lightColorLightness,whiteColorLightness,darkColorLightness,menuItems=document.querySelectorAll(".menu-item"),messageNotification=document.querySelector("#messages-notification"),messages=document.querySelector(".messages"),message=messages.querySelectorAll(".message"),messageSearch=document.querySelector("#message-search"),theme=document.querySelector("#theme"),themeModal=document.querySelector(".customize-theme"),fontSize=document.querySelectorAll(".choose-size span"),root=document.querySelector(":root"),colorPalette=document.querySelectorAll(".choose-color span"),bg1=document.querySelector(".bg-1"),bg2=document.querySelector(".bg-2"),bg3=document.querySelector(".bg-3"),changeActiveItem=function(){menuItems.forEach(function(e){return e.classList.remove("active")})},searchMessage=(menuItems.forEach(function(e){e.addEventListener("click",function(){changeActiveItem(),e.classList.add("active"),"notifications"!=e.id?document.querySelector(".notification-popup").classList.remove("show"):(document.querySelector(".notification-popup").classList.add("show"),document.querySelector("#notifications .notification-count").style.display="none")})}),function(){var t=messageSearch.value.toLowerCase();message.forEach(function(e){-1!=e.querySelector("h5").textContent.toLowerCase().indexOf(t)?e.style.display="flex":e.style.display="none"})}),openThemeModal=(messageSearch.addEventListener("keyup",searchMessage),messageNotification.addEventListener("click",function(){messages.style.boxShadow="0 0 1rem var(--color-primary)",messageNotification.querySelector(".notification-count").style.display="none",messageSearch.focus(),setTimeout(function(){messages.style.boxShadow="none"},2e3)}),function(){themeModal.classList.add("show")}),closeModal=function(e){e.target.classList.contains("customize-theme")&&themeModal.classList.remove("show")},removeSizeSelector=(themeModal.addEventListener("click",closeModal),theme.addEventListener("click",openThemeModal),function(){fontSize.forEach(function(e){e.classList.remove("active")})}),changeActiveColorClass=(fontSize.forEach(function(t){t.addEventListener("click",function(){var e;removeSizeSelector(),t.classList.toggle("active"),t.classList.contains("font-size-1")?(e="10px",root.style.setProperty("--sticky-top-left","5.4rem"),root.style.setProperty("--sticky-top-right","5.4rem")):t.classList.contains("font-size-2")?(e="14px",root.style.setProperty("--sticky-top-left","5.4rem"),root.style.setProperty("--sticky-top-right","-7rem")):t.classList.contains("font-size-3")?(e="16px",root.style.setProperty("--sticky-top-left","5.4rem"),root.style.setProperty("--sticky-top-right","-17rem")):t.classList.contains("font-size-4")?(e="19px",root.style.setProperty("--sticky-top-left","-5rem"),root.style.setProperty("--sticky-top-right","-25rem")):t.classList.contains("font-size-5")&&(e="22px",root.style.setProperty("--sticky-top-left","-10rem"),root.style.setProperty("--sticky-top-right","-33rem")),document.querySelector("html").style.fontSize=e})}),function(){colorPalette.forEach(function(e){e.classList.remove("active")})}),changeBg=(colorPalette.forEach(function(t){t.addEventListener("click",function(){var e;changeActiveColorClass(),t.classList.contains("color-1")?e=252:t.classList.contains("color-2")?e=52:t.classList.contains("color-3")?e=352:t.classList.contains("color-4")?e=152:t.classList.contains("color-5")&&(e=202),t.classList.add("active"),root.style.setProperty("--color-primary-hue",e)})}),function(){root.style.setProperty("--color-light-lightness",lightColorLightness),root.style.setProperty("--color-white-lightness",whiteColorLightness),root.style.setProperty("--color-dark-lightness",darkColorLightness)});bg1.addEventListener("click",function(){lightColorLightness="95%",whiteColorLightness="100%",darkColorLightness="17%",window.location.reload()}),bg2.addEventListener("click",function(){lightColorLightness="15%",whiteColorLightness="20%",darkColorLightness="95%",bg2.classList.add("active"),bg1.classList.remove("active"),bg3.classList.remove("active"),changeBg()}),bg3.addEventListener("click",function(){lightColorLightness="0%",whiteColorLightness="10%",darkColorLightness="95%",bg2.classList.add("active"),bg1.classList.remove("active"),bg3.classList.remove("active"),changeBg()});
//# sourceMappingURL=main.js.map
