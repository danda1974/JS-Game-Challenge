// 1.
document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "HK1",
      img: "images/HelloKitty1.png",
    },
    {
      name: "HK2",
      img: "images/HelloKitty2.png",
    },
    {
      name: "HK3",
      img: "images/HelloKitty3.png",
    },
    {
      name: "HK4",
      img: "images/HelloKitty4.png",
    },
    {
      name: "HK5",
      img: "images/HelloKitty5.png",
    },
    {
      name: "HK6",
      img: "images/HelloKitty6.png",
    },
    {
      name: "HK7",
      img: "images/HelloKitty7.png",
    },
    {
      name: "HK8",
      img: "images/HelloKitty8.png",
    },
    {
      name: "HK1",
      img: "images/HelloKitty1.png",
    },
    {
      name: "HK2",
      img: "images/HelloKitty2.png",
    },
    {
      name: "HK3",
      img: "images/HelloKitty3.png",
    },
    {
      name: "HK4",
      img: "images/HelloKitty4.png",
    },
    {
      name: "HK5",
      img: "images/HelloKitty5.png",
    },
    {
      name: "HK6",
      img: "images/HelloKitty6.png",
    },
    {
      name: "HK7",
      img: "images/HelloKitty7.png",
    },
    {
      name: "HK8",
      img: "images/HelloKitty8.png",
    },
  ];

  // 6.
  cardArray.sort(() => 0.5 - Math.random());

  // 2.
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // 3.
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/cover.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // 4.
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/cover.png");
      cards[optionTwoId].setAttribute("src", "images/cover.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/cover.png");
      cards[optionTwoId].setAttribute("src", "images/cover.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = " Congratulations! You found them all!";
    }
  }

  // 5.
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
