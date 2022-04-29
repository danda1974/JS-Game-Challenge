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

  createBoard();
});
