if (document.querySelector(".index-page")) {
  var linkLetter = document.querySelector(".write-to-us");

  var popupLetter = document.querySelector(".form-back");

  var closeLetter = popupLetter.querySelector(".modal-close");

  var form = popupLetter.querySelector("form");

  var firstName = popupLetter.querySelector("[name = firstname]");

  var eMail = popupLetter.querySelector("[name = email]");

  var isStorageSupport = true;

  var storage = "";

  try {
    storage = localStorage.getItem("firstname");
   } catch (err) {
    isStorageSupport = false;
  }


  linkLetter.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLetter.classList.add("modal-show-anime");
    if (storage) {
     firstName.value = storage;
     eMail.focus();
    } else {
       firstName.focus();
    }
  });

  closeLetter.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLetter.classList.remove("modal-show-anime");
    popupLetter.classList.remove("modal-error");
    });

  form.addEventListener("submit", function(evt) {
   if (!firstName.value || !eMail.value) {
     evt.preventDefault();
     popupLetter.classList.remove("modal-error");
     popupLetter.offsetWidth = popupLetter.offsetWidth;
     popupLetter.classList.add("modal-error");
   } else {
     if (isStorageSupport) {
       localStorage.setItem("firstName", firstName.value);
     }
   }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupLetter.classList.contains("modal-show-anime")) {
        popupLetter.classList.remove("modal-show-anime");
      }
    }
  });

  var linkMap = document.querySelector(".min-map");

  var popupMap = document.querySelector(".map");

  var closeMap = popupMap.querySelector(".modal-close");

  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show-anime");
    });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show-anime");
    });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains("modal-show-anime")) {
        popupMap.classList.remove("modal-show-anime");
      }
    }
  });

  var linkBasket = document.querySelectorAll(".buy");

  var popupBasket = document.querySelector(".modal-back");

  var closeBasket = popupBasket.querySelector(".modal-close");

  var cont = popupBasket.querySelector(".white-button");

  for (let i = 0; i < linkBasket.length - 1; i++) {
    linkBasket[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupBasket.classList.add("modal-show-anime");
      });
  }

  cont.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show-anime");
    });


  closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show-anime");
    });


  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupBasket.classList.contains("modal-show-anime")) {
        popupBasket.classList.remove("modal-show-anime");
      }
    }
  });

}

if (document.querySelector(".catalog-page")) {
  var linkBasket = document.querySelectorAll(".buy");

  var popupBasket = document.querySelector(".modal-back");

  var closeBasket = popupBasket.querySelector(".modal-close");

  var cont = popupBasket.querySelector(".white-button");

  for (let i = 0; i < linkBasket.length - 1; i++) {
    linkBasket[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popupBasket.classList.add("modal-show-anime");
      });
  };

  cont.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show-anime");
    });

  closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show-anime");
    });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupBasket.classList.contains("modal-show-anime")) {
        popupBasket.classList.remove("modal-show-anime");
      }
    }
  });

}

if (document.querySelector(".index-page")) {
  var serviceDelivery = document.querySelector(".service-delivery");

  var aboutDelivery = document.querySelector(".about-delivery");

  var serviceGaranty = document.querySelector(".service-garanty");

  var aboutGaranty = document.querySelector(".about-garanty");

  var serviceCredit = document.querySelector(".service-credit");

  var aboutCredit = document.querySelector(".about-credit");

  serviceDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    serviceDelivery.classList.add("service-focus");
    serviceCredit.classList.remove("service-focus");
    serviceGaranty.classList.remove("service-focus");
    aboutDelivery.classList.add("modal-show");
    aboutCredit.classList.remove("modal-show");
    aboutGaranty.classList.remove("modal-show");
    });

  serviceGaranty.addEventListener("click", function (evt) {
    evt.preventDefault();
    serviceGaranty.classList.add("service-focus");
    serviceDelivery.classList.remove("service-focus");
    serviceCredit.classList.remove("service-focus");
    aboutGaranty.classList.add("modal-show");
    aboutDelivery.classList.remove("modal-show");
    aboutCredit.classList.remove("modal-show");
    });

serviceCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  serviceCredit.classList.add("service-focus");
  serviceDelivery.classList.remove("service-focus");
  serviceGaranty.classList.remove("service-focus");
  aboutCredit.classList.add("modal-show");
  aboutDelivery.classList.remove("modal-show");
  aboutGaranty.classList.remove("modal-show");
  });
}

if (document.querySelector(".index-page")) {

  var drills = document.querySelector(".drills");

  var perforators = document.querySelector(".perforators");

  var backward = document.querySelector(".backward");

  var forward = document.querySelector(".forward");

forward.addEventListener("click", function (evt) {
  evt.preventDefault();
  drills.classList.add("modal-show");
  perforators.classList.remove("modal-show");
  });

backward.addEventListener("click", function (evt) {
  evt.preventDefault();
  perforators.classList.add("modal-show");
  drills.classList.remove("modal-show");
  });
}
