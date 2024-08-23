/* Very very important function please do not touch it */
function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}

let header = document.querySelector(".header");
let content1 = `
  <div class="container-xxl">
    <nav class=" navbar-expand-lg navbar-dark bg-transparent">
      <div class=" row gap-0 py-sm-1 d-flex align-items-center" >
        <div
          class="col-6 col-md-6 col-lg-2 d-flex justify-content-center justify-content-sm-start align-content-center">
          <!-- logo -->
          <a class="navbar-brand" href="#"><img
              src="/assets/img/logo.png"
              alt="logo"
              width="114" height="114" />
   
          </a>
        </div>
        <div
          class="col-8 d-none d-lg-flex justify-content-center align-content-center ">
          <div class="row ">
            <div class="col fleekNavBorder px-1 py-1">
              <ul
                class="navbar-nav fleekNav pt-2 px-1  d-flex  align-items-center justify-items-center  flex-grow-1">
                <li class="nav-item navItems rounded   ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded d-inline-block "
                    aria-current="page"
                    href="/index.html">Home</a>
                </li>
                <li class="nav-item navItems rounded ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="/movies&shows.html">Movies <span>&</span>
                    Shows</a>
                </li>
                <li class="nav-item navItems rounded  ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="/support.html  ">Support</a>
                </li>
                <li class="nav-item navItems rounded  ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="/subscription.html">Subscription</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="col-2 d-none d-lg-block d-flex justify-items-center align-items-center">
          <!-- search & notification -->
          <div
            class="d-flex justify-content-end align-items-center gap-3">
              <div class="row searchIcon text-white" style="cursor: pointer">
                  <i class="bi bi-search" style="font-size: x-large"></i>
                  <input
                    type="search"
                    placeholder="search movie and series "
                    autofocus
                    autocomplete="off"
                    class="py-1 px-2 position-absolute rounded-3 form-control"
                    id="searchInput"
                  />
                </div>
            <a
              href="#notificationIcon"
              class="text-white " ><i
                class="bi bi-bell" style="font-size: x-large;"></i></a>
          </div>
        </div>
        <div
          class="col-6 col-lg-0 d-block d-lg-none d-flex justify-content-end">
          <!-- toggle btn -->
          <button
            class="navbar-toggler shadow-none border-0 d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div class="row d-block d-lg-none">
        <!-- sidebar -->
        <div
          class="sidebar offcanvas offcanvas-start d-block d-lg-none"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style=" background-color: #15141f;">
          <!-- sidebar header -->
          <div class="offcanvas-header text-white p-2">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <img src="/assets/img/logo.png" alt="logo" width="114" height="114" />
            </h5>
  
            <button
              type="button"
              class="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div
            class="row mt-4"
            style="
                width: 100%;
                height: 2px;
                background: linear-gradient(
                  90deg,
                  rgba(52, 48, 135, 0) 0%,
                  rgba(52, 48, 135, 1) 17%,
                  rgba(52, 48, 135, 0) 100%
                );
              "></div>
          <div
            class="offcanvas-body d-flex flex-column align-items-start">
            <ul
              class="navbar-nav d-block d-lg-none fs-5 flex-grow-1 pe-3 rounded">
              <li class="nav-item mx-2">
                <a class="nav-link active" aria-current="page"
                  href="/index.html">Home</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/movies&shows.html">Movies</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/support.html">Support</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/subscription.html">Subscription</a>
              </li>
            </ul>
          </div>
          <!-- search & notification -->
          <!-- 
          <div class="d-flex justify-content-end align-items-center gap-3">
            <a href="#search" class="text-white" style="font-size: 25px"
              ><i class="bi bi-search"></i
            ></a>
            <a
              href="#notificationIcon"
              class="text-white"
              style="font-size: 25px"
              ><i class="bi bi-bell"></i
            ></a>
          </div>
  -->
        </div>
      </div>
    </nav>
  </div>
  <div  id="searchPanel">
        <div class="mainCardApi container-xxl z-1">
          <div
            class="row d-flex flex-row justify-content-between"
            id="movie-box"
          ></div>
        </div> 
      </div>
`;
myHeader = makeElement("header", "container-fluid", "", "", content1);
header.append(myHeader);

let footer = document.querySelector(".footer");
let content2 = `<div class="container-xxl" style="background-color: #161616">
  <footer class="py-5 0f0f0f">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Home</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Categories</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Devices</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Pricing</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">FAQs</a>
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Movies</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Generes</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Trending</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">New Releases</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Popular</a>
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Shows</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Generes</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Trending</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">New Releases</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Popular</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Support</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Subscription</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Subscription</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Features</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Connet With Us</h5>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-twitter-x text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-instagram text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-facebook text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
        </ul>
      </div>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white"
      >
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Terms of Use</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Privacy policy</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Cookie policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>`;
myFooter = makeElement("section", "container-fluid", "", "", content2);
footer.append(myFooter);

let subscription = document.querySelector(".subs");
let content3 = `<div class="container-xxl rounded-4 position-relative" id="subImg">
  <div
    class="card-img-overlay subcBackground position-absolute row d-flex justify-content-center align-items-center px-2 px-sm-5 py-2 py-sm-5"
    style="
      height: 314px;
 
    "
  >
    <div class="col-12 col-md-6 text-center text-sm-start">
      <div class="row mb-4 mb-sm-0">
        <span class="text-white display-4 fw-bold"
          >Start your free trial</span
        >
      </div>
      <div class="row">
        <span class=" h-6" style="color: #999"
          >This is a clear and concise call to action that encourages
          users to sign up for a free trial of Fleek.</span
        >
      </div>
    </div>
    <div class="col d-flex justify-content-center justify-content-sm-end">
      <a
        href="#"
        class="text-white btn-base fw-5 h-6 text-center py-2 py-sm-3 px-3 px-sm-4 rounded-2"
        style="
          text-decoration: none;
       
        "
        type="button"
        >Start a Free Trial</a
      >
    </div>
  </div>
</div>`;
mySubscription = makeElement("section", "container-fluid", "", "", content3);
subscription.append(mySubscription);

/* const cardSlider =document.querySelector("cardSlider");
let carouselElement = [];
for (let i=){} */

/* search result */


