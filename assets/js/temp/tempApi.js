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

/* genre */
const GENRE_API =
  "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const GENRE_TV_API =
  "https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=04c35731a5ee918f014970082a0088b1&page=1";

let genreMap = {};
let tvGenreMap = {};

const getGenre = async () => {
  const response = await fetch(GENRE_API);
  const data = await response.json();
  genreMap = data.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});
  const tvResponse = await fetch(GENRE_TV_API);
  const tvData = await tvResponse.json();
  tvGenreMap = tvData.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});
};

getGenre();

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
      const genreIds = result.genre_ids;

      const genreName = genreIds
        .map((id) => {
          if (isTV) {
            return tvGenreMap[id];
          } else {
            return genreMap[id];
          }
        })
        .filter((name) => name !== undefined)
        .join(", ");
      const cardElement = document.createElement("div");
      cardElement.classList.add("swiper-slide");
      cardElement.classList.add("swiper-slide-custom");
      // cardElement.style.width="300px";
      cardElement.innerHTML = `
      <div
      class="movie-card-small position-relative"
      style="width: 300px; margin-right: 30px"
    >
      <!-- Card Thumbnail -->
      <img
        decoding="async"
        src="${imagePath}"
        alt="Movie Poster"
        class="w-100"
      />

      <!-- Play Button -->
      <a
        href"#"
        class="popup_video video-play-btn position-absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="29"
          viewBox="0 0 24 29"
          fill="none"
        >
          <path
            d="M22.2584 12.8002C23.5199 13.5823 23.5199 15.4177 22.2584 16.1998L3.05388 28.1066C1.72154 28.9326 6.40836e-07 27.9744 7.0936e-07 26.4068L1.75028e-06 2.59321C1.81881e-06 1.02557 1.72154 0.0673544 3.05388 0.893405L22.2584 12.8002Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>

      <!-- Movie Details -->
      <div class="details position-absolute text-center ">
        <h4 class="movie-name text-uppercase fw-normal">
          <a href="#"
            >${isTV ? result.original_name : result.original_title}</a
          >
        </h4>
        <ul class="movie-info p-0">
          <li>
            <img
              decoding="async"
              src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/star-stroke.svg"
              alt="Rating"
            />
            <span>${result.vote_average}</span>
          </li>
          <li>
            <img
              decoding="async"
              src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/clock-stroke.svg"
              alt="Duration"
            />
            <span>03h 10m</span>
          </li>
          <li>
            <img
              decoding="async"
              src="https://holaa.codexshaper.com/wp/wp-content/themes/holaa/assets/images/icons/4k-stroke.svg"
              alt="Quality"
            />
            <span>4k Quality</span>
          </li>
        </ul>
        <ul class="movie-type " style="margin-right: 18px;">
          <li>${genreName}</li>
        </ul>
      </div>
    </div>
  
    `;

      card.appendChild(cardElement);

      // Add event listener to video-play-btn
      const videoPlayBtn = cardElement.querySelector(".video-play-btn");
      videoPlayBtn.addEventListener("click", (e) => {
        console.log("click");
        e.preventDefault();
        const link = isTV ? "showsPlayer.html" : "moviePlayer.html";
        window.location.href = link;
      });
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

$(document).ready(function () {
  // Initialize desktop Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 270,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 280,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 270,
      },
    },
  });

  // Initialize mobile Swiper
  var swiperMobile = new Swiper(".mySwiperMobile", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});


$(document).ready(function () {
  // Hide the "Shows" section by default
  $(".series").hide();
  // Toggle the visibility of the "Movies" and "Shows" sections when the buttons are clicked
  $(".mov").click(function () {
    $(".movies").show();
    $(".series").hide();
    $(this).addClass("bg-dark");
    $(".sho").removeClass("bg-dark");
  });

  $(".sho").click(function () {
    $(".movies").hide();
    $(".series").show();
    $(this).addClass("bg-dark");
    $(".mov").removeClass("bg-dark");
  });
});
