function generateRatingElement(ratingData) {
  return `

    <div class="row text-light text-center m-1 mb-3 p-3 rounded-2" style="background-color: #161616; width: 130px">

      <h6 class>${ratingData.source}</h6>

      <div class="d-flex">

        ${Array(Math.floor(ratingData.rating))
          .fill('<span class="star">★</span>')

          .join("")}

        <span class="ms-2">${ratingData.rating}</span>

      </div>

    </div>

  `;
}

function generateGenreElement(genre) {
  return `

    <span class="text-light text-center m-1 p-2 rounded-2" style="background-color: #161616; width: 90px">${genre}</span>

  `;
}

const ratingData = [
  {
    source: "IMDB",

    rating: 4.5,
  },

  {
    source: "Fleek",

    rating: 5,
  },

  // Add more rating data here
];

const genreData = ["Action", "Adventure", "Comedy", "Drama"];

function createRowWithIconAndText(iconClass, text) {
  return `

    <div class="row mb-2">

      <div class="text">

        <h6 style="color: #999">

          <i class="${iconClass}"></i>

         <span class="ms-2">${text}</span>

        </h6>


      </div>


    </div>


  `;
}

function createRowWithIconAndTextAndValue(iconClass, text, value) {
  return `

    <div class="row mb-2">

     <div class="text">

        <h6 style="color: #999">

          <i class="${iconClass}"></i>

          <span class="ms-2">${text}</span>

        </h6>

        <h6 class="text-white fw-1">${value}</h6>

      </div>

    </div>

  `;
}

function createLanguageSpan(language) {
  return `

    <span

      class="text-light text-center m-1 p-2 rounded-2"

      style="background-color: #161616; width: 90px"

    >${language}</span>

  `;
}

function createGenreSpan(genre) {
  return `

    <span

      class="text-light text-center m-1 p-2 rounded-2"

      style="background-color: #161616; width: 90px"

    >${genre}</span>

  `;
}
// Your JavaScript
document.addEventListener("DOMContentLoaded", function () {
  /*  const reviewCardsContainer = document.getElementById("review-cards");
  reviewData.forEach((review) => {
    reviewCardsContainer.innerHTML += generateReviewCard(review);
  }); */

  const ratingsContainer = document.getElementById("ratings");
  const languagesContainer = document.getElementById("languages");
  const genresContainer = document.getElementById("genres");

  ratingData.forEach((rating) => {
    ratingsContainer.innerHTML += generateRatingElement(rating);
  });

  const languagesHtml = ["English", "Hindi", "Tamil", "Telegu", "Kannada"]
    .map(createLanguageSpan)
    .join("");
  languagesContainer.innerHTML =
    createRowWithIconAndText("bi bi-translate", "Available Languages") +
    languagesHtml;

  const genresHtml = ["Action", "Adventure", "Comedy", "Drama"]
    .map(createGenreSpan)
    .join("");
  genresContainer.innerHTML =
    createRowWithIconAndText("bi bi-film", "Genres") + genresHtml;

  const releasedYearHtml = createRowWithIconAndTextAndValue(
    "bi bi-calendar",
    "Released Year",
    "2022"
  );
  document.getElementById("released-year").innerHTML = releasedYearHtml;
});

function createEpisodeHTML(episodeData) {
  const episodeHTML = `
    <div class="row episodes m-2 border-top border-dark py-4">
      <div class="col-2 col-sm-1 d-flex align-items-center justify-items-center fs-1">
        <h6 style="color: #999">${episodeData.episodeNumber}</h6>
      </div>
      <div class="col-10 col-sm-3 d-flex align-items-center justify-items-center text-center">
        <img src="${episodeData.thumbnail}" alt="jpg" class="rounded" style="border: 1px solid #636262" />
        <a href="${episodeData.videoUrl}" class="d-flex justify-content-center align-items-center video-play-btn position-absolute rounded-circle" style="background: #85776c54; backdrop-filter: blur(20px); height: 25px; width: 25px; cursor: pointer; text-decoration: none; color: #c6c1c1; margin-left: 36px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 29" fill style="margin-left: 2.5px">
            <path d="M22.2584 12.8002C23.5199 13.5823 23.5199 15.4177 22.2584 16.1998L3.05388 28.1066C1.72154 28.9326 6.40836e-07 27.9744 7.0936e-07 26.4068L1.75028e-06 2.59321C1.81881e-06 1.02557 1.72154 0.0673544 3.05388 0.893405L22.2584 12.8002Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
      <div class="col-12 col-sm-8 mt-4 mt-sm-0">
        <div class="row">
          <div class="col-12 col-sm-8">
            <h6>${episodeData.title}</h6>
          </div>
          <div class="col text-start text-sm-end mt-2 mt-sm-0">
            <span class="border border-dark rounded p-1" style="color: #999"><i class="bi bi-clock"></i> ${episodeData.duration} min</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return episodeHTML;
}

const episodes = [
  {
    episodeNumber: 1,
    thumbnail: "https://picsum.photos/id/277/100/60",
    videoUrl: "https://example.com/video1.mp4",
    title: "Chapter One : The Vanishing of Will Byers",
    duration: 49,
  },
  {
    episodeNumber: 2,
    thumbnail: "https://picsum.photos/id/277/100/60",
    videoUrl: "https://example.com/video2.mp4",
    title: "Chapter Two : The Vanishing of Will Byers",
    duration: 49,
  },
  // ...
];

const episodeListHTML = episodes.map(createEpisodeHTML).join("");
document.getElementById("episodes-container").innerHTML = episodeListHTML;

const reviewCard = document.querySelector(".review-cards");
let reviewCardElement = [];
for (let i = 0; i < 10; i++) {
  reviewCardElement[i] = document.createElement("div");
  reviewCardElement[i].classList.add("swiper-slide");
  reviewCardElement[i].innerHTML = `
                  <div class="col-sm-6 mb-3 m-sm-0">
                    <div
                      class="card border-0 text-white"
                      style="background-color: #161616"
                    >
                      <div class="card-body">
                        <h5
                          class="card-title d-flex justify-content-between align-items-center"
                          style="background-color: none"
                        >
                          Aniket Roy
                          <div
                            class="rounded-5 px-2 py-2"
                            style="
                              border: 1px solid #2a2a2a;
                              background-color: #202020;
                            "
                          >
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span class="star" style="font-size: 15px">★</span>
                            <span style="font-size: 15px">4.5</span>
                          </div>
                        </h5>
                        <ul
                          class="d-flex justify-content-center align-items-center"
                          style="
                            border: 1px solid #2a2a2a;
                            background-color: #202020;
                          "
                        ></ul>
                        <h6
                          class="card-subtitle mb-3"
                          style="background-color: none; color: #999"
                        >
                          From India
                        </h6>
                        <p class="card-text" style="color: #999">
                          This movie was recommended to me by a very dear friend
                          who went for the movie by herself. I went to the
                          cinemas to watch but had a houseful board so couldn't
                          watch it,
                        </p>
                      </div>
                    </div>
                  </div>
`;

  reviewCard.append(reviewCardElement[i]);
}
