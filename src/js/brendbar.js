var brendbar = document.querySelector(".brendbar");
var brenbarBox = brendbar.querySelector(".brendbar__box");
var brendbarShowMore = brendbar.querySelector(".showmore");
var brendbarShowMoreText = brendbarShowMore.querySelector(".showmore-text");

brendbarShowMore.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    brenbarBox.classList.remove("full-screen");
    brendbarShowMoreText.textContent = "Показать все";
  } else {
    this.classList.add("active");
    brenbarBox.classList.add("full-screen");
    brendbarShowMoreText.textContent = "Скрыть";
  }
});

//test dsdsdsd

var description = document.querySelector(".main__description");
var descriptionInfo = description.querySelector(".main__description-info");
var descriptionShowMore = description.querySelector(".showmore");
var descriptionShowMoreText =
  descriptionShowMore.querySelector(".showmore-text");

descriptionShowMore.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    descriptionInfo.classList.remove("full-screen");
    descriptionShowMoreText.textContent = "Читать далее";
  } else {
    this.classList.add("active");
    descriptionInfo.classList.add("full-screen");
    descriptionShowMoreText.textContent = "Скрыть";
  }
});

var servicebar = document.querySelector(".servicebar");
var servicebarBox = servicebar.querySelector(".servicebar__box");
var servicebarShowMore = servicebar.querySelector(".showmore");
var servicebarShowMoreText = servicebarShowMore.querySelector(".showmore-text");

servicebarShowMore.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    servicebarBox.classList.remove("full-screen");
    servicebarShowMoreText.textContent = "Показать все";
  } else {
    this.classList.add("active");
    servicebarBox.classList.add("full-screen");
    servicebarShowMoreText.textContent = "Скрыть";
  }
});

//Массив с кирточками брендов
var brendList = [
  {
    name: "Lenovo",
    img: "./img/brendbar/brendbar__lable/Lenovo.svg",
  },
  {
    name: "Samsung",
    img: "./img/brendbar/brendbar__lable/Samsung.svg",
  },
  {
    name: "Apple",
    img: "./img/brendbar/brendbar__lable/Apple.svg",
  },
  {
    name: "ViewSonic",
    img: "./img/brendbar/brendbar__lable/ViewSonic.svg",
  },
  {
    name: "Bosch",
    img: "./img/brendbar/brendbar__lable/Bosch.svg",
  },
  {
    name: "HP",
    img: "./img/brendbar/brendbar__lable/HP.svg",
  },
  {
    name: "Acer",
    img: "./img/brendbar/brendbar__lable/Aser.svg",
  },
  {
    name: "Sony",
    img: "./img/brendbar/brendbar__lable/Sony.svg",
  },
  {
    name: "Lenovo",
    img: "./img/brendbar/brendbar__lable/Lenovo.svg",
  },
  {
    name: "Samsung",
    img: "./img/brendbar/brendbar__lable/Samsung.svg",
  },
  {
    name: "Apple",
    img: "./img/brendbar/brendbar__lable/Apple.svg",
  },
  {
    name: "ViewSonic",
    img: "./img/brendbar/brendbar__lable/ViewSonic.svg",
  },
  {
    name: "Bosch",
    img: "./img/brendbar/brendbar__lable/Bosch.svg",
  },
];

//создаем карточки для десктопа или свайпера
var swiperWrapper = document.querySelector(".swiper-wrapper");
var tmplBrend = document.querySelector("#tmpl-brendcard").content;
const windowInnerWidth = document.documentElement.clientWidth;

var brendAdd = function (brendList) {
  var brendCard;
  for (var i = 0; i < brendList.length; i++) {
    brendCard = tmplBrend.cloneNode(true);
    brendCard.querySelector(".brendcard__icon").src = brendList[i].img;
    brendCard.querySelector(".brendcard__icon").alt = brendList[i].name;

    var swiperCard = brendCard.cloneNode(true);
    var swiperBrend = swiperCard.querySelector(".brendcard");
    swiperBrend.classList.add("swiper-slide");
    brenbarBox.appendChild(brendCard);
    swiperWrapper.appendChild(swiperCard);
  }
};
brendAdd(brendList);
