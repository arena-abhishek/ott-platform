const priceCard = document.querySelector("#pricecard");
let priceCardElement = [];

function getCardTitle(i) {
  switch (i) {
    case 0:
      return "Basic Plan";

    case 1:
      return "Premium Plan";

    case 2:
      return "Elite Plan";

    default:
      return "";
  }
}

function getCardText(i) {
  switch (i) {
    case 0:
      return "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.";

    case 1:
      return "Get access to exclusive content, including original series and movies, plus additional features like offline viewing.";

    case 2:
      return "Experience the ultimate in entertainment with our elite plan, featuring 4K streaming, Dolby Atmos, and more.";

    default:
      return "";
  }
}

function getCardPrice(i, period) {
  switch (period) {
    case "monthly":
      switch (i) {
        case 0:
          return "99";

        case 1:
          return "149";

        case 2:
          return "249";

        default:
          return "";
      }

    case "yearly":
      switch (i) {
        case 0:
          return "999";

        case 1:
          return "1599";

        case 2:
          return "2999";

        default:
          return "";
      }

    default:
      return "";
  }
}

for (let i = 0; i < 3; i++) {
  priceCardElement[i] = document.createElement("div");
  priceCardElement[i].classList.add(
    "col-12",
    "col-lg-4",
    "col-md-6",
    "mb-3",
    "mb-lg-0"
  );
  priceCardElement[i].innerHTML = `
  <div
                class="card border-0 rounded-3"
                style="border: 2px solid #202020"
              >
                <div
                  class="card-body border-0 rounded-2"
                  style="background-color: #0f0f0f"
                >
                  <h5 class="card-title text-white">${getCardTitle(i)}</h5>
                  <p class="card-text mt-3 mb-4" style="color: #999">${getCardText(
                    i
                  )}</p>
                  <p>
                    <span class="display-5 cardP " style="color: #fff"
                      ><i
                        class="bi bi-currency-rupee display-5"
                        style="color: #fff"
                      ></i
                      >${getCardPrice(i, "monthly")}
                      <span class="h6 cardMth" style="color: #999">/month </span></span
                    >
                  </p>
                  <div class="row">
                    <div class="col">
                      <a
                        href="#"
                        class="py-2 px-2 rounded"
                        type="button"
                        style="
                          text-decoration: none;
                          color: #fff;
                          background-color: #202020;
                        "
                        >Start Free Trial
                      </a>
                    </div>
                    <div class="col">
                      <a
                        href="#"
                        class="py-2 px-3 btn-base rounded"
                        type="button"
                        style="
                          text-decoration: none;
                          color: #fff;
                    
                        "
                        >Choose Plan</a
                      >
                    </div>
                  </div>
                </div>
              </div>
`;

  priceCard.append(priceCardElement[i]);
}

// Add event listeners to the monthly and yearly buttons
$(document).ready(function () {
  let currentPeriod = "monthly"; // initialize current period to "monthly"
  $(".btn2").click(function () {
    $(this).css("background-color", "#202020");
    $(".btn1").css("background-color", "#0f0f0f");
    currentPeriod = "yearly"; // update current period
    updatePrices(); // update prices and period text
  });

  $(".btn1").click(function () {
    $(this).css("background-color", "#202020");
    $(".btn2").css("background-color", "#0f0f0f");
    currentPeriod = "monthly"; // update current period
    updatePrices(); // update prices and period text
  });
  function updatePrices() {
    for (let i = 0; i < 3; i++) {
      const cardPrice = priceCardElement[i].querySelector(".cardP");
      const priceText = cardPrice.querySelector("i.display-5");
      const periodText = cardPrice.querySelector(".cardMth");
      const newPriceText = `<i class="bi bi-currency-rupee display-5" style="color: #fff">${getCardPrice(
        i,
        currentPeriod
      )}</i>`;

      const newPeriodText = `<span class="h6 cardMth" style="color: #999">/${
        currentPeriod === "monthly" ? "month" : "year"
      }</span>`;

      cardPrice.innerHTML = newPriceText + newPeriodText;
    }
  }
});
