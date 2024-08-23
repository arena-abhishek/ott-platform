
const categories_card = document.querySelector(".category-card-wrapper");
let cat_cardElement = [];
for (let i = 0; i < 10; i++) {
  cat_cardElement[i] = document.createElement("div");
  cat_cardElement[i].classList.add("item");
  cat_cardElement[i].innerHTML = `  
    <div class="category-card">
          <!-- Thumbnail -->
          <div class="thumbnail">
            <img
              decoding="async"
              src="https://picsum.photos/id/277/100/60"
              alt="category"
              class="thumb-img w-100"
            />
          </div>
          <!-- Details -->
          <div class="catdetails">
            <h4 class="title lh-1 mb-0">Web and tv Series</h4>
            <a href="index.html" class="hl-btn cat-circle-btn flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="margin-left: 14px; margin-top: 19px"
                width="25"
                height="18"
                viewBox="0 0 25 18"
                fill=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3368 0.763844V0H14.8091V0.763844C14.8091 3.66421 16.4166 6.45372 18.8361 8.10623H0V9.63392H18.8362C16.4166 11.2864 14.8091 14.0759 14.8091 16.9763V17.7401H16.3368V16.9763C16.3368 13.2214 19.6689 9.64694 23.6575 9.63396C23.6648 9.63398 23.672 9.63399 23.6793 9.63399H24.4431V9.63392V8.1063V8.10623H24.4425H23.6793H23.65C19.6648 8.0888 16.3368 4.51646 16.3368 0.763844Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </div>`;

  categories_card.append(cat_cardElement[i]);
}
