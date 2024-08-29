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

document.addEventListener("DOMContentLoaded", function () {});

let header = document.querySelector(".header");
let content1 = `
  <div class="container-xxl">
    <nav class=" navbar-expand-lg navbar-dark bg-transparent">
      <div class=" row gap-0 py-sm-1 d-flex align-items-center" >
        <div
          class="col-6 col-md-6 col-lg-2 d-flex justify-content-center justify-content-sm-start align-content-center">
          <!-- logo -->
          <a class="navbar-brand" href="#"><img
              src="assets/img/logo.png"
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
                    href="index.html">Home</a>
                </li>
                <li class="nav-item navItems rounded ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="movies&shows.html">Movies <span>&</span>
                    Shows</a>
                </li>
                <li class="nav-item navItems rounded  ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="support.html  ">Support</a>
                </li>
                <li class="nav-item navItems rounded  ">
                  <a
                    class="h4 nav-link py-3 px-4 rounded"
                    href="subscription.html">Subscription</a>
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
                    class="py-1 px-2 position-absolute rounded-3 form-control searchInput"
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
          <!-- mobile search -->
            <div class="row searchIcon text-white" style="cursor: pointer">
                  <i class="bi bi-search" style="font-size: x-large"></i>
                  <input
                    type="search"
                    placeholder="search movie and series "
                    autofocus
                    autocomplete="off"
                    class="py-1 px-2 position-absolute rounded-3 form-control searchInput"
                  />
                </div>   
        </div>
      </div>
        </div>
      </div>
    </nav>
  </div>
  <div  id="searchPanel">
        <div class="mainCardApi container-fluid z-1">
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

let mobileNavigation = document.querySelector(".bg-navItems");
let content4 = `
<div class="navigationMobile">
        <ul>
          <li class="list active">
            <a href="index.html">
              <span class="icon">
                <i class="bi bi-house-door"></i>
              </span>
              <span class="text">Home</span>
            </a>
          </li>
          <li class="list">
            <a href="movies&shows.html">
              <span class="icon">
                <img src="assets/icons/watch.svg" alt="" />
              </span>
              <span class="text">Profile</span>
            </a>
          </li>
          <li class="list">
            <a href="support.html">
              <span class="icon">
                <img
                  src="assets/icons/support.svg"
                  alt=""
                  height="32px"
                  width="32px"
                />
              </span>
              <span class="text">Photos</span>
            </a>
          </li>
          <li class="list">
            <a href="subscription.html">
              <span class="icon">
                <img src="assets/icons/subscription.svg" alt="" />
              </span>
              <span class="text">Settings</span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>`;
myMobileNavigation = makeElement("section", "", "", "", content4);
mobileNavigation.append(myMobileNavigation);

/*mobile navigation   */

$(document).ready(function () {
  // Add event listener to navigation links
  $(".navigationMobile ul li a").on("click", function (e) {
    e.preventDefault();
    var href = $(this).attr("href"); // Get the href attribute of the link
    console.log("Click event triggered");
    // Remove active class from all list items
    $(".navigationMobile ul li").removeClass("active");
    // Add active class to the clicked list item
    $(this).parent().addClass("active");
    // Load new page content using AJAX
    $.ajax({
      url: href,
      success: function (data) {
        // Update the page content
        $("#content").html(data);
        // Update the URL in the browser's address bar
        history.pushState({}, "", href);
      },
    });
  });
});
/* search result */

$(document).ready(function () {
  /* show details  */

  $(".epsBtn").click(function () {
    var $fqs = $(this).closest(".container").find(".episodes");
    $fqs.slideToggle("fast");
    var $icon = $(this).find("i");
    if ($icon.hasClass("bi-arrow-down-short")) {
      $icon.removeClass("bi-arrow-down-short").addClass("bi-arrow-up-short");
    } else {
      $icon.removeClass("bi-arrow-up-short").addClass("bi-arrow-down-short");
    }
  });

  /* faqs */
  $(".faqBtn").click(function () {
    console.log("this is run");
    var $fqs = $(this).closest(".row").find(".fqs");
    $fqs.slideToggle("slow");
    var $icon = $(this).find("i");
    if ($icon.hasClass("bi-plus")) {
      $icon.removeClass("bi-plus").addClass("bi-dash");
    } else {
      $icon.removeClass("bi-dash").addClass("bi-plus");
    }
  });
});

/* navigation bar  */

/* search icon */

$(document).ready(function () {
  $(".searchInput").hide();
  $("#searchPanel").hide();

  $(".searchIcon").on("click", function () {
    $("#searchPanel")
      .addClass("searchPanelBg")
      .animate(
        {
          width: "toggle",
          opacity: "toggle",
        },
        {
          duration: 500,
          easing: "swing",
          complete: function () {
            $(this).focus();
          },
        }
      );
    $(".searchInput").animate(
      {
        width: "toggle",
        opacity: "toggle",
      },
      {
        duration: 500,
        easing: "swing",
        complete: function () {
          $(this).focus();
        },
      }
    );
  });
});

/* heroSection slider */
var heroSwiper = new Swiper(".heroSlider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/* moile view nav items */
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
