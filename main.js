(function () {
  const dropList = document.querySelector("#drop-list");
  const dropList2 = document.querySelector("#drop-list-2");
  const dropList3 = document.querySelector("#drop-list-3");
  const dropList4 = document.querySelector("#drop-list-4");

  const dropDown = document.querySelector("#dropDown");
  const dropDown2 = document.querySelector("#dropDown2");
  const dropDown3 = document.querySelector("#dropDown3");
  const dropDown4 = document.querySelector("#dropDown4");

  const hambMenu = document.querySelector("#Hamb");
  const sideNav = document.querySelector("#SideNav");



  dropList.addEventListener("click", () => {
    if (dropDown.classList.contains("hidden")) {
      dropDown.classList.remove("hidden");
      dropDown.classList.add("flex");
    } else {
      dropDown.classList.remove("flex");
      dropDown.classList.add("hidden");
    }
  });

  dropList2.addEventListener("click", () => {
    if (dropDown2.classList.contains("hidden")) {
      dropDown2.classList.remove("hidden");
      dropDown2.classList.add("flex");

    } else {
      dropDown2.classList.remove("flex");
      dropDown2.classList.add("hidden");
    }
  });

  dropList3.addEventListener("click", () => {
    if (dropDown3.classList.contains("hidden")) {
      dropDown3.classList.remove("hidden");
      dropDown3.classList.add("flex");

    } else {
      dropDown3.classList.remove("flex");
      dropDown3.classList.add("hidden");
    }
  });

  dropList4.addEventListener("click", () => {
    if (dropDown4.classList.contains("hidden")) {
      dropDown4.classList.remove("hidden");
      dropDown4.classList.add("flex");

    } else {
      dropDown4.classList.remove("flex");
      dropDown4.classList.add("hidden");
    }
  });
  // ----- Evento menu ------ 

  hambMenu.addEventListener("click", () => {
      
    
    sideNav.classList.toggle("translate-x-full");
      
  }); 
})();
