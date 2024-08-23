const faqCard = document.querySelector(".faqContent");
const faqCardTwo = document.querySelector(".faqContentTwo");
let faqElement = [];
let faqElement2 = [];

function getFaqTitle(i) {
  switch (i) {
    case 1:
      return "What is Fleek?";

    case 2:
      return "How much does Fleek cost";
    case 3:
      return "What content is available on Fleek";
    case 4:
      return "How can i watch Fleek";
    case 5:
      return "How do I sign up for Fleek ";
    case 6:
      return "what is the Fleek free trial cost";
    case 7:
      return "What content is available on Fleek";
    case 8:
      return "How do I cancel my Fleek subscription";
      case 9:
        return "How do I contact Fleek customer support";
        case 10:
          return "What are the Fleek payment method";

    default:
      return "Elite ";
  }
}

function getFaqText(i) {
  switch (i) {
    case 0:
      return "Fleek is a streaming service that allows you to watch movies and shows on demand.";

    case 1:
      return "Get access to exclusive content, including original series and movies, plus additional features like offline viewing.";

    case 2:
      return "Experience the ultimate in entertainment with our elite plan, featuring 4K streaming, Dolby Atmos, and more.";

    default:
      return "Experience the ultimate in entertainment with our elite plan, featuring 4K streaming, Dolby Atmos, and more.";
  }
}

for (let i = 1; i < 11; i++) {
  let faqElement = document.createElement("div");
  faqElement.classList.add("row", "mb-5");
  faqElement.innerHTML = ` <!-- number -->
              <div class="col-2">
                <span
                  class="text-white rounded-2 py-2 px-3"
                 style="background-color: #1f1f1f"
                  >${i}</span
                >
              </div>
              <!-- text -->
              <div class="col-8">
               <div class="row">
                  <h5 class="text-white">${getFaqTitle(i)}</h5>
                </div>
                <div class="row">
                  <h6 class="fqsHead fqs" style="color: #999">
                  ${getFaqText(i)}
                  </h6>
               </div>
              </div>
              <!-- btn -->
              <div class="col-2 d-flex align-items-start">
                <button
                  class="faqBtn border-0 text-white"
                  style="background-color: #15141f"
                >
                  <i class="bi bi-plus" style="font-size: 25px"></i>
                </button>
              </div>
              <!-- gradient line  -->

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

                "

              ></div>`;

  if (i < 6) {
    faqCard.append(faqElement);
  } else {
    faqCardTwo.append(faqElement);
  }
}
