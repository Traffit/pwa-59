const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "../../media/photos/comments/Samuel_Fry.png",
    name: "LuckyWolf22",
    comment:
      "Wolf Treasure is my favorite casino! There's always a lot of free spins and bonuses, and the payouts are quick. Highly recommend!",
  },
  {
    img: "../../media/photos/comments/comment2.png",
    name: "HowlingWinner99",
    comment:
      "This casino definitely lives up to its name! Won a huge jackpot in the game Wolf Gold and now I can't stop. Impressed by the atmosphere and the amount of cash prizes!",
  },
  {
    img: "../../media/photos/comments/comment4.png",
    name: "WildGambler123",
    comment:
      "Joined Wolf Treasure recently and already hooked! Huge selection of games and fast payouts. It's truly the best casino!",
  },
  {
    img: "../../media/photos/comments/comment3.png",
    name: "MoonlitGamer77",
    comment:
      "Fell in love with the game Wolf Treasure! Every slot and every game is a new adventure. Happy to have found this casino!",
  },
  {
    img: "../../media/photos/comments/comment5.png",
    name: "AlphaWin22",
    comment:
      "Wolf Treasure is where victories are born! Exciting games and big wins - everything you need for an evening of entertainment!",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Shuffle the reviews_data array
const shuffledReviews = shuffle(reviews_data);

// Take the first three reviews for display
shuffledReviews.slice(0, 3).forEach((review) => getReview(review));

function getReview(data) {
  // Your existing getReview function remains the same
  const review_template = `
  <div class="review">
          <div class="review__top c-black">
            <div class="review__img">
              <img src="${data.img}" alt="${data.name} comment" />
            </div>
            <div class="review__name">
              <h3>${data.name}</h3>
            </div>
            <div class="review__more-box">
              <a class="review__more" aria-label="More reviews">
                <i class="_icon-more_vert_black"></i>
              </a>
              <div class="review__more-open">
                <!-- <a class="watch-history__btn">Посмотреть историю изменений</a> -->
                <a class="unacceptable__btn" aria-label="Flag as inappropriate">Flag as inappropriate</a>
                <a class="spam__btn" aria-label="Flag as spam">Flag as spam</a>
              </div>
            </div>
          </div>
          <div class="review__rating">
            <div class="Stars" style="--rating: 5.0;" aria-label="Rating of this product is 5.0 out of 5."></div>
            <span class="review-date c-text">26.02.24</span>
          </div>
          <div class="review__text webkit c-text">
            <p>
             ${data.comment}
            </p>
          </div>
          <div class="review__qna">
            <span>Was this review helpful?</span>
            <div class="review__true-false c-black">
              <a class="btn-true" aria-label="Yes">Yes</a>
              <a class="btn-false" aria-label="No">No</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
