let movieDetail = document.querySelector(".moviesDetail");
let content6 = `<div
              class="row rounded-3 mb-3 p-2 p-sm-4"
              style="background-color: #202020"
            >
              <div class="text container">
                <div class="row">
                  <h6 style="color: #999999">Description</h6>
                </div>
                <div class="row">
                  <p style="color: #ffffff">
                    A fiery young man clashes with an unflinching forest officer
                    in a south Indian village where spirituality, fate and
                    folklore rule the lands.
                  </p>
                </div>
              </div>
            </div>

            <!-- review container -->

            <div
              class="row rounded-3 p-1 p-sm-4"
              style="background-color: #202020"
            >
              <div class="review container">
                <!-- rewiew button -->

                <div class="row mb-3">
                  <div class="row">
                    <div
                      class="d-flex justify-content-between align-items-center flex-row"
                    >
                      <h6 style="color: #999999">Reviews</h6>
                      <button
                        class="btn btn-sm rounded-2 gap-2 d-flex align-items-center"
                        style="
                          /* padding: 10px; */
                          background-color: #161616;
                          color: #fff;
                          border: 2px solid #2a2a2a;
                        "
                      >
                        <i class="bi bi-plus-lg"> </i>
                        <h6>Add Your Reviews</h6>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- review card -->

                <div class="row mb-3">
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
                </div>

                <!-- slider btn -->

                <div class="row d-flex justify-content-center">
                  <div class="text-center">
                    <button class="btn">
                      <span style="font-size: 1.5rem"
                        ><i class="bi bi-arrow-left text-white"></i
                      ></span>
                    </button>
                    <button class="btn">
                      <span style="font-size: 1.5rem"
                        ><i class="bi bi-arrow-right text-white"></i
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>`;
myMoviesDetails = makeElement("div", " ", "", "", content6);
movieDetails.append(myMovieDetails);