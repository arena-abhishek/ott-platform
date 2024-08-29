const APIURL =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box");
console.log(moiveBox);
const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data);
};
getMovies(APIURL);

const showMovies = (data) => {
  moiveBox.innerHTML = "";
  moiveBox.style.backgroundColor = "#15141f";
  data.results.forEach((result) => {
    const imagePath =
      result.poster_path === null
        ? "img/image-missing.png"
        : IMGPATH + result.poster_path;

    const box = document.createElement("div");
    box.classList.add("card", "rounded-5", "border-0");
    box.style.width = "300px";
    box.style.padding = "0px";
    box.style.marginBottom = "25px";
    box.innerHTML = `
        <div
      class="movie-card-small position-relative"
      style="width: 300px; height:300px; margin-right: 30px"
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
        href="https://holaa.codexshaper.com/wp/wp-content/uploads/2024/03/e86032ef-9397-4888-9d12-7246be9d81bb.mp4"
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
            >${
              result.original_title
                ? result.original_title
                : result.original_name
                ? result.original_name
                : "Unknown Title"
            }</a
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
          <li>Hiking, Drama, Family</li>
        </ul>
      </div>
    </div>
            `;
    moiveBox.appendChild(box);
  });
};

document
  .querySelector("#searchInput")
  .addEventListener("keyup", function (event) {
    if (event.target.value != "") {
      getMovies(SEARCHAPI + event.target.value);
    } else {
      getMovies(APIURL);
    }
  });
