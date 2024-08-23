/* show movies */
const MOVIE_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const TRENDING_API =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

/* show series */
const TV_API =
  "https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const UPCOMING_TV_API =
  "https://api.themoviedb.org/3/tv/airing_today?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const TRENDING_TV_API =
  "https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const TOP_RATED_TV_API =
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const getMedia = async (url, containerSelector, isTV) => {
  const response = await fetch(url);
  const data = await response.json();
  showMedia(data, containerSelector, isTV);
};

const showMedia = (data, containerSelector, isTV) => {
  const cards = document.querySelectorAll(containerSelector);
  cards.forEach((card) => {
    card.innerHTML = "";
    data.results.forEach((result) => {
      const imagePath =
        result.poster_path === null
          ? "img/image-missing.png"
          : IMGPATH + result.poster_path;
      const cardElement = document.createElement("div");
      cardElement.classList.add("item");
      cardElement.innerHTML = `
    <div class="card-wrapper">
      <div class="card rounded-5 border-0" style="width: 300px; ">
        <img src="${imagePath}"" alt
          class="card-img rounded-4 border-0" />
        <!-- transition background -->
        <div class="card-hover card-img-overlay d-block rounded-4"></div>
        <!-- play button -->
        <div class="card-img-overlay text-center d- d-flex justify-content-center align-items-center mb-5">
          <a href="https://holaa.codexshaper.com/wp/wp-content/uploads/2024/03/e86032ef-9397-4888-9d12-7246be9d81bb.mp4"
            class="d-flex justify-content-center align-items-center video-play-btn position-absolute rounded-circle"
            style="
                background: #85776c54;
                backdrop-filter: blur(20px);
                height: 80px;
                width: 80px;
                cursor: pointer;
              ">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 29" fill="none"
              style="margin-left: 7.5px">
              <path
                d="M22.2584 12.8002C23.5199 13.5823 23.5199 15.4177 22.2584 16.1998L3.05388 28.1066C1.72154 28.9326 6.40836e-07 27.9744 7.0936e-07 26.4068L1.75028e-06 2.59321C1.81881e-06 1.02557 1.72154 0.0673544 3.05388 0.893405L22.2584 12.8002Z"
                fill="currentColor"></path>
            </svg>
          </a>
        </div>
    
        <!-- Movie details -->
        <div class="card-img text-center d-no d-flex flex-column justify-content-end align-items-center">
          <div
            class="details lh-1 position-absolute text-center w-100 d-flex flex-column justify-content-center align-items-center rounded-4"
            style="
                background: #85776c54;
                backdrop-filter: blur(20px);
                /* height: 137px; */
              ">
            <div class="row">
              <h4 class="movie-title card-title text-uppercase fw-bold h4">
                   ${isTV ? result.original_name : result.original_title}
              </h4>
            </div>
            <div class="row">
              <ul class="d-flex gap-2 align-items-center justify-items-center">
                <li class="d-flex gap-1 align-items-center">
                  <img
                    src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/star-stroke.svg"
                    alt="Rating" style="width:16px; height:16px;" />
                  <span style="color: #999">${result.vote_average}</span>
                </li>
                <li class="d-flex gap-1 align-items-center">
                  <img
                    src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/clock-stroke.svg"
                    alt="Duration" style="width:16px; height:16px;"  />
                  <span style="color: #999">03h 10m</span>
                </li>
                <li class="d-flex gap-1 align-items-center">
                  <img
                    src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/4k-stroke.svg"
                    alt="Quality" style="width:16px; height:16px;" />
                  <span style="color: #999">4k Quality</span>
                </li>
              </ul>
            </div>
            <div class="row">
              <p class="card-text" style="color: #999">
                Hiking, Drama, Family
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

      card.appendChild(cardElement);
    });
  });
};

getMedia(MOVIE_URL, ".tt", false); // popular movies
getMedia(TRENDING_API, ".trending-cards", false); // trending movies
getMedia(TOP_RATED_API, ".top-rated-cards", false); // must watch movies
getMedia(UPCOMING_API, ".upcoming-cards", false); // new release

getMedia(TV_API, ".tv", true); // popular TV shows
getMedia(TRENDING_TV_API, ".trending-tv-cards", true); // trending TV shows
getMedia(TOP_RATED_TV_API, ".top-rated-tv-cards", true); // must watch TV shows
getMedia(UPCOMING_TV_API, ".upcoming-tv-cards", true); // new TV releases
