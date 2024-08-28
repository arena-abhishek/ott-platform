
const target = document.querySelector("#third-card");

const cardData = [
  {
    icon: "Icon.png",
    title: "FLEXIBLE",
    text: "Flexible streaming allows users to use customize their viewing experience",
  },
  {
    icon: "Icon-1.png",
    title: "SUPER FAST QUALITY",
    text: "Flexible streaming allows users to use customize their viewing experience",
  },
  {
    icon: "Icon-2.png",
    title: "WATCH FROM ANYWHERE",
    text: "Flexible streaming allows users to use customize their viewing experience",
  },
  {
    icon: "Icon-3.png",
    title: "DOWNLOAD AND GO",
    text: "Flexible streaming allows users to use customize their viewing experience",
  },
];

function createCard(icon, title, text) {
  const card = document.createElement("div");
  card.className =
    "card thirdCard d-flex align-items-center justify-content-center";

  const img = document.createElement("img");
  img.src = `assets/icons/${icon}`;
  img.className = "thirdCardImg";
  img.width = 71;
  img.height = 55;
  img.alt = "";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center mt-2";

  const h5 = document.createElement("h5");
  h5.className = "card-title h2 fw-semibold";
  h5.textContent = title;

  const p = document.createElement("p");
  p.className = "card-text";
  p.style.color = "#999";
  p.textContent = text;

  cardBody.appendChild(h5);
  cardBody.appendChild(p);

  card.appendChild(img);
  card.appendChild(cardBody);

  const col = document.createElement("div");
  col.className = "col";
  col.style.display = "flex";
  col.style.justifyContent = "center";
  col.appendChild(card);

  return col;
}


cardData.forEach((card) => {
  const newCard = createCard(card.icon, card.title, card.text);
  target.appendChild(newCard);
});

