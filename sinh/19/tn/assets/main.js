const questions = [
    "Sinh trưởng là quá trình tăng gì?",
    "Phát triển là toàn bộ những biến đổi diễn ra bên trong chu kỳ sống của cá thể như thế nào?",
    "Dấu hiệu đặc trưng của sinh trưởng là gì?",
    "Tuổi thọ của sinh vật là thời gian gì?",
    "Vòng đời của sinh vật là khoảng thời gian tính từ khi nào?",
    "Ví dụ nào sau đây nói về quá trình sinh trưởng ở sinh vật?",
    "Ví dụ nào sau đây nói về quá trình phát triển ở sinh vật?",
    "Quá trình nào sau đây là quá trình sinh trưởng của thực vật?",
    "Trong các yếu tố sau đây, có bao nhiêu yếu tố không ảnh hưởng đến tuổi thọ của sinh vật? <br> (1) Di truyền <br> (2) Chế độ ăn uống <br> (3) Lối sống <br> (4) Chất phóng xạ <br> (5) Khói độc, bụi. <br> (6) Chế độ làm việc.",
    "Khi nói về các yếu tố ảnh hưởng đến tuổi thọ của con người, phát biểu nào sau đây đúng? <br> (1) Tuổi thọ của người hoàn toàn do yếu tố di truyền quyết định và không thể thay đổi. <br> (2) Môi trường sống không ảnh hưởng đến tuổi thọ của người. <br> (3) Tuổi thọ của người chịu ảnh hưởng của các yếu tố di truyền và môi trường, xã hội. <br> (4) Tầm vóc, thể trạng không ảnh hưởng đến tuổi thọ của người. <br> (5) Việc giữ gìn và rèn luyện cơ thể khỏe mạnh có thể giúp con người tăng tuổi thọ.",
];

const answers = [
    ["Kích thước và tuổi của sinh vật.", "Kích thước và khối lượng cơ thể.", "Khối lượng và tuổi tác của sinh vật.", "Tuổi của sinh vật."],
    ["Ngoài của cá thể, gồm thay đổi chiều cao và cân nặng.", "Ngoài chu kỳ sống của cá thể, gồm thay đổi về số lượng tế bào, cấu trúc, hình thái, trạng thái sinh lý.", "Trong chu kỳ sống của cá thể, gồm chiều cao, cân nặng.", "Trong chu kỳ sống của cá thể, gồm thay đổi về số lượng tế bào, cấu trúc, hình thái, trạng thái sinh lý."],
    ["Tăng khối lượng, số lượng và kích thước của tế bào.", "Tăng khối lượng, số lượng và kích thước của chiều cao.", "Tăng khối lượng, số lượng và kích thước của cân nặng.", "Tăng khối lượng, số lượng của tế bào."],
    ["Sống trung bình của các cá thể trong loài.", "Sinh con của sinh vật.", "Mà sinh vật chết.", "Sống của một sinh vật."],
    ["Chết đi, sinh ra, lớn lên đẻ con và chết đi.", "Sinh ra, lớn lên, phát triển thành cơ thể trưởng thành, sinh sản tạo cơ thể mới, già đi rồi chết.", "Sinh ra, lớn lên, phát triển thành cơ thể trưởng thành, sinh sản tạo cơ thể mới.", "Sinh ra, lớn lên, phát triển thành cơ thể trưởng thành, sinh sản tạo cơ thể mới và già đi."],
    ["Hạt đậu nảy mầm thành cây con.", "Voi mẹ sinh ra voi con.", "Quả trứng gà nở ra gà con.", "Cây đậu cao thêm 3 cm sau hai ngày."],
    ["Cây cam ra hoa.", "Lợn tăng thêm 3 cm sau một tuần.", "Sự tăng kích thước của lá cây.", "Diện tích phiến lá tăng lên."],
    ["Cơ thể thực vật ra hoa.", "Cơ thể thực vật tạo hạt.", "Cơ thể thực vật tăng kích thước.", "Cơ thể thực vật rụng lá, hoa."],
    ["0.", "3.", "4.", "5."],
    ["1, 4.", "3, 5.", "2, 3.", "4, 5."],
];  

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    1, 3, 0, 3, 1,
    3, 0, 2, 0, 1,
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
