
//header cambia de color al hacer scroll
window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;
    let element = document.getElementById("id-cabecera");
    let element2 = document.getElementById("id-navegacion-cabecera");
    let logoCabecera = document.getElementById("logo-cabecera");

    if (scroll > 50){
      element.classList.add("cabecera-activa");
      element2.classList.add("navegacion-cavecera-activa");
      logoCabecera.classList.add("logo-cabecera-activo");
    }else {
      element.classList.remove("cabecera-activa");
      element2.classList.remove("navegacion-cavecera-activa");
      logoCabecera.classList.remove("logo-cabecera-activo");
    }

}

function openTab(tabName) {
    let i;
    let a;
    let tabContent;
    let tabsLink
    
    tabContent = document.getElementsByClassName("tab-content");
    tabsLink = document.getElementsByClassName("texto-pestanas");
    
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "flex";
    let slideFadeOut = document.getElementById(tabName).animate([
      { transform: "translateX(0)", opacity: 0 },
      { transform: "translateX(5%)", opacity: 1 }
    ], {
        duration: 600,
        easing: "ease-in",
        fill: "forwards"
    });

    for (let a = 0; a < tabsLink.length; a++) {
        tabsLink[a].addEventListener("click", function() {
          let current = document.getElementsByClassName("texto-pestanas-activo");
          current[0].className = current[0].className.replace(" texto-pestanas-activo", "");
          this.className += " texto-pestanas-activo";
        });
      }
}

openTab("diseno-1");

// This needs to DRY'ed up so it can be used with a CMS
let imprentaLinkEl = document.getElementById("texto-pestanas1");
let disenogLinkEl = document.getElementById("texto-pestanas2");
let disenowLinkEl = document.getElementById("texto-pestanas3");
let rotulacionLinkEl = document.getElementById("texto-pestanas4");
let gigantoLinkEl = document.getElementById("texto-pestanas5");

imprentaLinkEl.addEventListener("click", function(){openTab("diseno-1")}, false);
disenogLinkEl.addEventListener("click", function(){openTab("diseno-2")}, false);
disenowLinkEl.addEventListener("click", function(){openTab("diseno-3")}, false);
rotulacionLinkEl.addEventListener("click", function(){openTab("diseno-4")}, false);
gigantoLinkEl.addEventListener("click", function(){openTab("diseno-5")}, false);