const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    toggleButton.textContent = "🌙";
});

window.addEventListener("scroll", () => {
    const banner = document.querySelector(".banner");
    if (window.scrollY === 0) {
        banner.classList.add("expand");
    } else {
        banner.classList.remove("expand");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");
    if (window.scrollY === 0) {
        banner.classList.add("expand");
    }
});

const quizAns = {
    '9999': 1,
	'1010': 2,
	'1021': 3,
	'1022': 2,
	'1023': 4
};

function checkAnswerById(quizId) {
    const form = document.getElementById(`quiz-form-${quizId}`);
    const selected = form.querySelector("input[name='answer']:checked");
    const resultEl = document.getElementById(`quiz-result-${quizId}`);

    if (!selected) {
        resultEl.textContent = "선택지를 고르세요!";
        resultEl.style.color = "orange";
        return;
    }

    const selectedVal = parseInt(selected.value);
    const correctAnswer = quizAns[quizId];

    if (selectedVal === correctAnswer) {
        resultEl.textContent = "정답입니다! ✅";
        resultEl.style.color = "green";
    } else {
        resultEl.textContent = "틀렸습니다. 다시 시도해보세요. ❌";
        resultEl.style.color = "red";
    }
}
