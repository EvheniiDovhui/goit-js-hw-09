!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){var a,c=setInterval((function(){a=r(),n.style.backgroundColor=a,o.lastChild.textContent=" ".concat(a)}),1e3);l=c,a=r(),n.style.backgroundColor=a,o.lastChild.textContent=" ".concat(a),t.toggleAttribute("disabled"),e.toggleAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(l),t.toggleAttribute("disabled"),e.toggleAttribute("disabled")})),e.setAttribute("disabled","true"),n.insertAdjacentHTML("beforeEnd",'<h2 class="text"> Код кольору в системі Hex:  <span ></span></h2>');var l,o=document.querySelector(".text");function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}o.style.textAlign="left",o.style.marginLeft="39%",n.style.display="flex",n.style.flexDirection="column"}();
//# sourceMappingURL=01-color-switcher.8f4953aa.js.map
