const EnterInitials = document.getElementById('initials');
const Submitbutton = document.getElementById('submit');
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 100;

finalScore.innerText = mostRecentScore;

EnterInitials.addEventListener('keyright', () => {
    Submitbutton.disabled = !EnterInitials.value;
});

highScores = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: EnterInitials.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(100);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};

const highScoresList = document.getElementById("highScores");
const highScore = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");