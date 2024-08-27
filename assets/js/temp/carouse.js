function generateCategoryHtml(categoryName, className) {
  return `
    <div class="container-xxl overflow-hidden z-0 position-relative mt-5">
      <div class="row text-category" style="margin-bottom: 68px">
        <span class="text-white display-3">${categoryName}</span>
      </div>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper z-0 ${className}"></div>
      </div>
    </div>
  `;
}

function generateMobileCategoryHtml(categoryName, className) {
  return `
    <div class="container-xxl overflow-hidden z-0 position-relative mt-5">
      <div class="row text-category" style="margin-bottom: 68px">
        <span class="text-white display-3">${categoryName}</span>
      </div>
      <div class="swiper mySwiperMobile">
        <div class="swiper-wrapper z-0 ${className}"></div>
      </div>
    </div>
  `;
}

const categories = [
  { name: "Popular", className: "tt" },
  { name: "Trending", className: "trending-cards" },
  { name: "Top Rated", className: "top-rated-cards" },
  { name: "Upcoming", className: "upcoming-cards" },
];

const tvCategories = [
  { name: "Popular", className: "tv" },
  { name: "Trending", className: "trending-tv-cards" },
  { name: "Top Rated", className: "top-rated-tv-cards" },
  { name: "Upcoming", className: "upcoming-tv-cards" },
];

const desktopHtml = `
  <div class="card_slider_desktop d-none d-sm-block">
    <div class="movies">
      ${categories
        .map((category) =>
          generateCategoryHtml(category.name, category.className)
        )
        .join("")}
    </div>
    <div class="series">
      ${tvCategories
        .map((category) =>
          generateCategoryHtml(category.name, category.className)
        )
        .join("")}
    </div>
  </div>
`;

const mobileHtml = `
  <div class="card_slider_mobile d-block d-sm-none">
    <div class="movies">
      ${categories
        .map((category) =>
          generateMobileCategoryHtml(category.name, category.className)
        )
        .join("")}
    </div>
    <div class="series">
      ${tvCategories
        .map((category) =>
          generateMobileCategoryHtml(category.name, category.className)
        )
        .join("")}
    </div>
  </div>
`;

const catCard = document.querySelector(".card-slider");

catCard.innerHTML += desktopHtml + mobileHtml;
