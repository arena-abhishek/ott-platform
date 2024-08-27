document.write(`
 <section class="container-xxl">
      <div class="row gx-5">
        <!-- 1st coulmn -->
        <div class="col-12 col-lg-8 mt-4">
          <!-- select episodes -->

          <div
            class="row rounded-3 mb-3 px-2 px-sm-3 py-3 py-sm-4"
            style="background-color: #202020"
          >
            <div class="container">
              <div
                class="rounded-2 p-2"
                style="background-color: #161616; color: #fff; width: 100%"
                name="eps"
              >
                <div class="row m-2 d-flex">
                  <div class="col">
                    <h6>
                      Season 05
                      <span style="color: #999; font-size: 12px"
                        >5 epsiodes</span
                      >
                    </h6>
                  </div>
                  <div class="col text-end">
                    <button
                      class="epsBtn rounded-4"
                      style="background-color: #202020; border: none"
                    >
                      <i
                        class="bi bi-arrow-down-short"
                        style="color: #999; font-size: large"
                      ></i>
                    </button>
                  </div>
                </div>
                <div id="episodes-container"></div>
              </div>
            </div>
          </div>

          <!-- description -->

          <div
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

          <!-- Review container -->

          <div
            class="row rounded-3 p-1 p-sm-4"
            style="background-color: #202020"
          >
            <div class="review container">
              <!-- Review button -->

              <div class="row mb-3">
                <div class="row">
                  <div
                    class="d-flex justify-content-between align-items-center flex-row"
                  >
                    <h6 style="color: #999">Reviews</h6>

                    <button
                      class="btn btn-sm rounded-2 gap-2 d-flex align-items-center"
                      style="
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

              <!-- Review cards -->

              <div class="row mb-3" id="review-cards"></div>

              <!-- Slider btn -->

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
          </div>
        </div>

        <!-- 2nd coulmn -->

        <div class="col-12 col-lg-4 mt-4 mt-sm-0">
          <div
            class="row rounded-3 my-4 px-sm-4 px-3 py-sm-4 py-5"
            style="background-color: #202020"
          >
            <div class="row mb-2" id="released-year"></div>
            <div class="row mb-2" id="available-languages"></div>
            <div class="row d-flex mb-2" id="languages"></div>
            <div class="row mb-2" id="ratings"></div>
            <div class="row " id="genres"></div>
          </div>
        </div>
      </div>
    </section>`)