const CAT_IMG =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const CAT_IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const CAT_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// const categoriesCard = document.querySelectorAll(".cat-card");
// console.log(categoriesCard);

const getGenreList = async () => {
  const response = await fetch(CAT_GENRE);
  const data = await response.json();
  return data.genres;
};

const showMovies_img = async (data, genreList) => {
  const genreMap = genreList.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  const categoriesCards = document.querySelectorAll(".cat-card");

  categoriesCards.forEach((categoriesCard) => {
    categoriesCard.innerHTML = "";
    data.results.forEach((result) => {
      const image_Path =
        result.poster_path === null
          ? "img/image-missing.png"
          : CAT_IMG_PATH + result.poster_path;

      const genreNames = result.genre_ids.map((id) => genreMap[id]).join(", ");

      const catCardElement = document.createElement("div");
      catCardElement.classList.add("swiper-slide");
      catCardElement.classList.add("swiper-slide-custom");
      catCardElement.innerHTML = `  
        <div class="category-card">
              <!-- Thumbnail -->
              <div class="thumbnail">
                <img
                  decoding="async"
                  src="${image_Path}"
                  alt="category"
                  class="thumb-img w-100"
                />
              </div>
              <!-- Details -->
              <div class="catdetails">
                <h4 class="title lh-1 mb-0">${genreNames}</h4>
<<<<<<< HEAD
               <a href="index.html" class="hl-btn cat-circle-btn d-flex justify-content-center align-items-center flex-shrink-0">
=======
                <a href="index.html" class="hl-btn cat-circle-btn d-flex justify-content-center align-items-center flex-shrink-0">
>>>>>>> b07877357fa810130cb7bd1d0103eacc378d5e6c
          <i class="bi bi-arrow-right" style="font-size:22px;"></i>
                </a>
              </div>
            </div>`;

      categoriesCard.appendChild(catCardElement);
    });
  });
};

const getMovies_img = async () => {
  const response = await fetch(CAT_IMG);
  const data = await response.json();
  const genreList = await getGenreList();
  showMovies_img(data, genreList);
};
getMovies_img();

// Initialize desktop Swiper
