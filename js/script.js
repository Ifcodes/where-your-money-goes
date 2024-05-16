// Variables
let fundDetailDescriptionTitle = document.querySelector(".details-title");
let fundDetailDescription = document.querySelector(".details-description");
let arrowElement = document.querySelector(".arrow");
let detailsCard = document.querySelector(".details-card");
let purpleBtn = document.getElementById("button-1");
let navyBtn = document.getElementById("button-2");

const data = {
  details_78p: {
    title: "78p funds life-changing projects",
    description:
      "That includes ensuring earthquake survivors like Saleh in Syria have food and shelter and empowering the Lihukwa villagers in Zambia.",
  },
  details_22p: {
    title: "22p ensures we can continue to transform lives tomorrow",
    description:
      "That includes fundraising and support costs, which allows us to make sure your donation has a long-term impact.",
  },
};

const handleClick = (type) => {
  if (type === "78p") {
    arrowElement.classList.remove("from-right");
    arrowElement.classList.add("from-left");
    fundDetailDescriptionTitle.innerText = data.details_78p.title;
    fundDetailDescription.innerText = data.details_78p.description;
    detailsCard.classList.remove("navy");
    detailsCard.classList.add("purple");
  }

  if (type === "22p") {
    arrowElement.classList.add("from-right");
    arrowElement.classList.remove("from-left");
    fundDetailDescriptionTitle.innerText = data.details_22p.title;
    fundDetailDescription.innerText = data.details_22p.description;
    detailsCard.classList.remove("purple");
    detailsCard.classList.add("navy");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  handleClick("78p");
});

navyBtn.addEventListener("click", () => {
  handleClick("22p");
});

purpleBtn.addEventListener("click", () => {
  handleClick("78p");
});
