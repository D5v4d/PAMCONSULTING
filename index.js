// Бургер в шапке
const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-nav");
let isBurger = false;

burger.addEventListener("click", () => {
  isBurger = !isBurger;
  if (isBurger) {
    nav.style.display = "block";
    nav.style.position = "absolute";
    nav.classList.add("burger");
  } else {
    nav.style.display = "none";
    nav.classList.remove("burger");
  }
});

// Слайдер целой секции
const mainRelocating = document.querySelector(".main-relocating");
const mainTitle = document.querySelector(".main-relocating__title");
const mainSubtitle = document.querySelector(".main-relocating__subtitle");
const mainText = document.querySelector(".main-relocating__text");
const mainBtn = document.querySelector(".main-relocating__btn");
const mainDescription = document.querySelector(".main-relocating__description");
const mainRelocatingCities = document.querySelector(".main-relocating__cities");
const sliderItems = document.querySelectorAll(".main-relocating__slider-item");

const arrayBlock = [
  {
    h1: "Relocating to Cyprus ",
    h2: "Seamless – Exceptional – Experience ",
    p: "The captivating Mediterranean island of Cyprus has become a business haven with a flourishing expat community. The strategic location that grants networking opportunities and the stability of being in the EU offers entrepreneurs the abilities they need to thrive.",
    btnText: "Find Out More",
    urlImg: "assets/img/main/picture_home.png",
  },
  {
    h1: "Invest in property in Cyprus",
    p: "Real estate has become a flourishing type of investment on the island, with an increasing number of people seeking to invest in residential and commercial property projects in Cyprus. With a confident and stable economic outlook, it is a great time to consider investing in Cyprus property.",
    btnText: "Check more",
    urlImg: "assets/img/main/offer2_image.png",
  },
  {
    h1: "RFamily Relocation",
    p: "Globally known as one of the safest places to live in the world, Cyprus is the ideal location for families. The healthy lifestyle and family-friendly communities have much to offer to every member of your family.",
    btnText: "Check more",
    urlImg: "assets/img/main/offer3.png",
  },
  {
    h1: "Business Relocation",
    p: "Cyprus has a lot to offer for business entrepreneurs who aim to reach for more and expand their business goals. The attractive tax benefits and office locations have transformed Cyprus into a country with endless business opportunities for everyone.",
    btnText: "Check more",
    urlImg: "assets/img/main/offer4_image.png",
  },
  {
    h1: "Investing in Yachts",
    p: "Living on an island is an adventure that opens up a wide range of experiences and possibilities. Here, you can conquer the Mediterranean Sea by renting or owning a yacht as part of your investment plan.",
    btnText: "Check more",
    urlImg: "assets/img/main/offer5_image.png",
  },
  {
    h1: "Moving to Cyprus",
    p: "Thousands of individuals and families from every part of the globe have immigrated to Cyprus after discovering their perfect place to call home. The island is now one of the most dominant destinations with huge expat communities.",
    btnText: "Check more",
    urlImg: "assets/img/main/offer6_image.png",
  },
];

sliderItems.forEach((element, index) => {
  element.addEventListener("click", () => {
    mainTitle.innerHTML = arrayBlock[index].h1;
    if (mainSubtitle) {
      mainSubtitle.innerHTML = arrayBlock[index].h2;
      mainSubtitle.style.display = arrayBlock[index].h2 ? "block" : "none";
    }
    mainText.innerHTML = arrayBlock[index].p;
    mainBtn.innerHTML = arrayBlock[index].btnText;
    mainRelocating.style.backgroundImage = `url('${arrayBlock[index].urlImg}')`;

    document.querySelectorAll(".main-relocating__slider-item.active").forEach((e) => {
      e.classList.remove("active");
    });
    element.classList.add("active");

    if (index > 0) {
      mainRelocatingCities.style.display = "none";
      mainDescription.style.marginTop = "136px";
      const textColor = index === 1 || index === 2 || index === 4 ? "#434364" : "#ffffffff";
      mainTitle.style.color = mainText.style.color = textColor;
    } else {
      mainTitle.style.color = mainText.style.color = "#ffffffff";
      mainRelocatingCities.style.display = "block";
      mainDescription.style.marginTop = "0px";
    }
  });
});

// Слайдер - Часто задаваемые вопросы
const slides = document.querySelector(".main-questions__list");
const slideItems = document.querySelector(".main-questions__slider");
const indicators = document.querySelectorAll(".main-questions__slider-item");
const style = window.getComputedStyle(slides);
const gap = parseFloat(style.gap); // из пиксели в число

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    const offset = (slideItems.offsetWidth + gap) * index;
    slides.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll(".main-questions__slider-item.active").forEach((el) => {
      el.classList.remove("active");
    });
    indicator.classList.add("active");
  });
});
