const flashcardsContainer = document.getElementById("flashcards-container")

const cardsArray = [
    {
        question: "Japan",
        answer: "Tokyo"
    },
    {
        question: "Russia",
        answer: "Moscow"
    },
    {
        question: "Turkey",
        answer: "Ankara"
    },
    {
        question: "USA",
        answer: "Washington"
    },
    {
        question: "Brazil",
        answer: "Brasilia"
    },
    {
        question: "Chile",
        answer: "Santiago"
    },
    {
        question: "Poland",
        answer: "Warsaw"
    },
    {
        question: "Norway",
        answer: "Oslo"
    },
    {
        question: "Egypt",
        answer: "Cairo"
    },
]

cardsArray.forEach((card) => {
    const cardDiv = document.createElement("div")
    const innerDiv = document.createElement("div")
    const cardFrontDiv = document.createElement("div")
    const cardBackDiv = document.createElement("div")
    const frontP = document.createElement("p")
    const backP = document.createElement("p")
    frontP.innerHTML = card.question
    backP.innerHTML = card.answer
    cardDiv.classList.add("card")
    innerDiv.classList.add("card-inner")
    cardFrontDiv.classList.add("card-front")
    cardBackDiv.classList.add("card-back")
    cardFrontDiv.appendChild(frontP)
    cardBackDiv.appendChild(backP)
    innerDiv.append(cardFrontDiv, cardBackDiv)
    cardDiv.appendChild(innerDiv)
    flashcardsContainer.appendChild(cardDiv)
})
