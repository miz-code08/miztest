const questions = [
    "Sinh sản là gì?",
    "Sinh sản ở sinh vật có thể là",
    "Sinh sản hữu tính là hình thức sinh sản",
    "Sinh sản vô tính là hình thức sinh sản tạo ra cơ thể mới với các đặc điểm",
    "Sinh sản vô tính ở sinh vật được điều hòa chủ yếu bởi",
    "Vật chất di truyền của cơ thể được truyền đạt nguyên vẹn cho cơ thể con trong sinh sản vô tính ở sinh vật qua cơ chế",
    "Sinh sản hữu tính ở sinh vật được điều hòa bởi",
    "Vật chất di truyền của cơ thể được truyền đạt từ thế hệ mẹ sang thế hệ con trong sinh sản hữu tính ở sinh vật thông qua quá trình",
    "Sinh sản vô tính nhanh chóng tạo ra các cá thể mới có bộ NST đặc trưng cho loài trong điều kiện môi trường sống",
    "Vật chất di truyền của cơ thể con trong sinh sản hữu tính được tái tổ hợp từ",
];

const answers = [
    ["Quá trình tạo ra cơ thể mới, đảm bảo sự sinh trưởng và phát triển của loài.", "Quá trình tạo ra cơ thể mới, bảo đảm sự phát triển liên tục của loài.", "Quá trình tạo ra cơ thể mới, đảm bảo sự tồn tại vĩnh viễn của loài.", "Quá trình tạo ra cơ thể mới, đảm bảo sự sinh trưởng liên tục của loài."],
    ["sinh sản vô tính hoặc hữu tính.", "sinh sản vô tính hoặc sinh sản bằng bào tử.", "sinh sản sinh dưỡng hoặc hữu tính.", "sinh sản hữu tính."],
    ["có sự kết hợp giữa giao tử đực và giao tử cái để tạo thành hợp tử.", "không có sự kết hợp của giao tử đực và giao tử cái.", "có sự kết hợp của 2 giao tử đực và 2 giao đực cái để tạo thành hợp tử.", "có sự kết hợp của 2 giao tử đực và 1 giao tử cái để tạo thành hợp tử."],
    ["khác cá thể ban đầu mà không có sự đóng góp vật chất di truyền của cá thể khác.", "giống cá thể ban đầu mà không có sự đóng góp vật chất di truyền của cá thể khác.", "giống cá thể ban đầu và có sự đóng góp vật chất di truyền của cá thể khác.", "khác cá thể ban đầu và có sự đóng góp vật chất di truyền của cá thể khác."],
    ["các hormone.", "các chất kích thích.", "các chất ức chế.", "hệ thống kiểm soát chu kì tế bào."],
    ["giảm phân.", "thụ tinh.", "nguyên phân.", "phiên mã."],
    ["các hormone.", "các chất kích thích.", "các chất ức chế.", "hệ thống kiểm soát chu kì tế bào."],
    ["giảm phân và thụ tinh.", "thụ tinh và nguyên phân.", "nguyên phân và giảm phân.", "giảm phân, thụ tinh và nguyên phân."],
    ["ổn định, thuận lợi.", "bất lợi.", "không ổn định.", "thay đổi."],
    ["3 nguồn khác nhau nên không có sự sai khác.", "2 nguồn khác nhau nên có sự sai khác.", "2 nguồn khác nhau nên không có sự sai khác.", "1 nguồn nên không có sự sai khác."],
];


const correctAnswers = [
    1, 0, 0, 1, 3,
    2, 0, 3, 0, 1,
];

function shuffleOptions() {
    // Xáo trộn câu hỏi
    const indices = Array.from({ length: questions.length }, (_, idx) => idx);

    for (let j = indices.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [indices[j], indices[k]] = [indices[k], indices[j]];
    }

    // Áp dụng thứ tự xáo trộn cho câu hỏi, đáp án và đáp án đúng
    const shuffledQuestions = indices.map(index => questions[index]);
    const shuffledAnswers = indices.map(index => answers[index]);
    const shuffledCorrectAnswers = indices.map(index => correctAnswers[index]);

    questions.splice(0, questions.length, ...shuffledQuestions);
    answers.splice(0, answers.length, ...shuffledAnswers);
    correctAnswers.splice(0, correctAnswers.length, ...shuffledCorrectAnswers);

    // Xáo trộn các đáp án trong mỗi câu hỏi
    for (let i = 0; i < answers.length; i++) {
        const answerSet = answers[i];
        const correctIndex = correctAnswers[i];

        // Tạo mảng chỉ số cho các đáp án
        const answerIndices = Array.from({ length: answerSet.length }, (_, idx) => idx);

        // Xáo trộn các chỉ số
        for (let j = answerIndices.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1));
            [answerIndices[j], answerIndices[k]] = [answerIndices[k], answerIndices[j]];
        }

        // Áp dụng thứ tự xáo trộn cho các đáp án và cập nhật chỉ số đáp án đúng
        const shuffledAnswers = answerIndices.map(index => answerSet[index]);
        answers[i] = shuffledAnswers;
        correctAnswers[i] = answerIndices.indexOf(correctIndex);
    }
}

shuffleOptions();

// Tạo câu hỏi
const questionTable = document.querySelector(`.question__table`);
questions.forEach((_, index) => {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question__item');
    questionItem.textContent = index + 1;
    questionTable.appendChild(questionItem);
});

const userAnswer = new Array(questions.length).fill(null);
const startTime = Date.now();
let time;

const nav = document.querySelector(`.nav`);
const menu = document.querySelector(`.fa-bars`);
const closeMenu = document.querySelector(`.fa-xmark`);

const questionItem = document.querySelectorAll(`.question__item`);
const questionContent = document.querySelector(`.question__content`);
const answerDesc = document.querySelectorAll(`.answer__desc`);
const radio = document.querySelectorAll(`.choose`);

const prevBtn = document.querySelector(`.prevBtn`);
const nextBtn = document.querySelector(`.nextBtn`);
const submit = document.querySelector(`.submit`);
const ask = document.querySelector(`.ask`);
const noBtn = document.querySelector(`.no`);
const yesBtn = document.querySelector(`.yes`);

const scoreDesc = document.querySelector(`.score__desc`);
let score = 0;
let show = false;

let viTri = 0;

window.onload = () => {
    function updateQuestion(e) {
        radio.forEach((val, idx) => {
            if (val.checked) {
                userAnswer[viTri] = idx;
            }
            val.checked = false;
        });
        viTri = e;
        if (userAnswer[viTri] != null) {
            radio[userAnswer[viTri]].checked = true;
        }
        questionContent.innerHTML = `Câu hỏi ${viTri + 1}: ${questions[viTri]}`
        const sttAnswers = ["A", "B", "C", "D"];
        answerDesc.forEach((val, idx) => {
            val.innerHTML = `${sttAnswers[idx]}. ${answers[viTri][idx]}`;
        });
        questionItem.forEach((val, idx) => {
            val.classList.remove("active");
        });
        questionItem[viTri].classList.add("active");
    }
    updateQuestion(0);

    function updateTimeDisplay() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);

        const formattedTime = [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(seconds).padStart(2, '0')
        ].join(':');

        document.querySelector('.time__cnt').innerText = formattedTime;

        return formattedTime;
    }
    const timerInterval = setInterval(updateTimeDisplay, 1000);

    function updateResults() {
        correctAnswers.forEach((correctAnswerIndex, idx) => {
            if (userAnswer[idx] === correctAnswerIndex) {
                score++;
                questionItem[idx].classList.add("green");
            } else {
                questionItem[idx].classList.add("red");
            }
        });
        scoreDesc.textContent = `Số câu đúng: ${score}/${questions.length}`;
    }

    function showAnswer() {
        if (show) {
            answerDesc.forEach(val => {
                val.style.color = "#000";
            });
            answerDesc[correctAnswers[viTri]].style.color = "red";
        }
    }

    questionItem.forEach((val, idx) => {
        val.addEventListener("click", () => {
            updateQuestion(idx);
            showAnswer();
        });
    });

    prevBtn.addEventListener("click", () => {
        if (viTri > 0) {
            updateQuestion(viTri - 1);
            showAnswer();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (viTri < questions.length - 1) {
            updateQuestion(viTri + 1);
            showAnswer();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' && viTri > 0) {
            updateQuestion(viTri - 1);
            showAnswer();
        } else if (event.key === 'ArrowRight' && viTri < questions.length - 1) {
            updateQuestion(viTri + 1);
            showAnswer();
        }
    });

    radio.forEach((val) => {
        val.addEventListener('click', () => {
            questionItem[viTri].classList.add("blue");
        });
    })

    submit.addEventListener('click', () => {
        updateQuestion(viTri);
        ask.style.display = "block";
    });

    noBtn.addEventListener('click', () => {
        ask.style.display = "none";
    });

    yesBtn.addEventListener('click', () => {
        ask.style.display = "none";
        time = updateTimeDisplay();
        clearInterval(timerInterval);
        scoreDesc.style.display = "block";
        updateResults();
        show = true;
        showAnswer();
    });

    if (window.innerWidth < 767.98) {
        yesBtn.addEventListener('click', () => {
            nav.style.display = "block";
            closeMenu.style.display = "block";
            menu.style.display = "none";
        });
        menu.addEventListener('click', () => {
            nav.style.display = "block";
            closeMenu.style.display = "block";
            menu.style.display = "none";
        });

        nav.addEventListener('click', () => {
            nav.style.display = "none";
            closeMenu.style.display = "none";
            menu.style.display = "block";
        });

        closeMenu.addEventListener('click', () => {
            nav.style.display = "none";
            closeMenu.style.display = "none";
            menu.style.display = "block";
        });
    }
};
