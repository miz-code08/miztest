const questions = [
    "Alkane là các hydrocarbon?",
    "Alkane là những hydrocarbon no, mạch hở, có công thức chung là?",
    "Công thức phân tử nào sau đây không phải là công thức của một alkane?",
    "Nhóm nguyên tử còn lại sau khi lấy bớt một nguyên tử H từ phân tử alkane gọi là gốc ankyl, có công thức chung là?",
    "Nhóm nguyên tử CH3- có tên là?",
    "Nhóm nguyên tử CH3CH2- có tên là?",
    "Alkane (CH3)2CH-CH3 có tên theo danh pháp thay thế là?",
    "Ở điều kiện thường hydrocarbon nào sau đây ở thể lỏng?",
    "Alkane hòa tan tốt trong dung môi nào sau đây?",
    "Trong các chất dưới đây, chất nào có nhiệt độ sôi thấp nhất?",
    "Phản ứng đặc trưng của hydrocarbon no là?",
    "Khi đốt cháy một hydrocarbon, thu được a mol CO2 và b mol H2O. Trong trường hợp nào sau đây có thể kết luận rằng hydrocarbon đó là alkane?",
    "Khí thiên nhiên được dùng làm nhiên liệu và nguyên liệu cho các nhà máy sản xuất điện, sứ, đạm, ancol methylic,… Thành phần chính của khí thiên nhiên là methane. Công thức phân tử của methane là?",
    "Hiện nay, nhiều nơi ở nông thôn đang sử dụng hầm biogas để xử lí chất thải trong chăn nuôi gia súc, cung cấp nhiên liệu cho việc đun nấu. Chất dễ cháy trong khí biogas là?",
    "Trong công nghiệp, các alkane được điều chế từ nguồn nào sau đây?",
    "Số đồng phân cấu tạo tương ứng với công thức phân tử C4H10 là?",
    "Phân tử methane không tan trong nước vì lí do nào sau đây?",
    "Cho isopentane tác dụng với Cl2 theo tỉ lệ số mol 1:1, số sản phẩm monochloro tối đa thu được là?",
    "Alkane A có công thức phân tử C5H12. A tác dụng với chlorine khi đun nóng chỉ tạo một dẫn xuất monochloro duy nhất. Tên gọi của A là?",
    "Cracking alkane là quá trình phân cắt liên kết C-C (bẻ gãy mạch carbon) của các alkane mạch dài để tạo thành hỗn hợp các hydrocarbon có mạch carbon?",
];

const answers = [
    ["no, mạch vòng", "no, mạch hở", "không no, mạch hở", "không no, mạch vòng"],
    ["CnH2n+2 (n ≥ 1)", "CnH2n (n ≥ 2)", "CnH2n-2 (n ≥ 2)", "CnH2n-6 (n ≥ 6)"],
    ["C2H6", "C3H6", "C4H10", "C5H12"],
    ["CnH2n-1 (n ≥ 1)", "CnH2n+1 (n ≥ 1)", "CnH2n+1 (n ≥ 2)", "CnH2n-1 (n ≥ 2)"],
    ["methyl", "ethyl", "propyl", "butyl"],
    ["methyl", "ethyl", "propyl", "butyl"],
    ["2-methylpropane", "isobutane", "butane", "2-methylbutane"],
    ["C4H10", "C2H6", "C3H8", "C5H12"],
    ["Nước", "Benzene", "Dung dịch acid HCl", "Dung dịch NaOH"],
    ["Butane", "Ethane", "Methane", "Propane"],
    ["Phản ứng tách", "Phản ứng thế", "Phản ứng cộng", "Phản ứng oxi hóa"],
    ["a > b", "a < b", "a = b", "a ≥ b"],
    ["CH4", "C2H4", "C2H2", "C6H6"],
    ["Cl2", "CH4", "CO2", "N2"],
    ["Sodium acetate", "Dầu mỏ và khí dầu mỏ", "Aluminium carbide (Al4C3)", "Khí biogas"],
    ["1", "2", "3", "4"],
    ["Phân tử methane không phân cực", "Methane là chất khí", "Phân tử khối của methane nhỏ", "Methane không có liên kết đôi"],
    ["5", "4", "3", "2"],
    ["pentane", "2-methylbutane", "2,2-dimethylpropane", "3-methylbutane"],
    ["ngắn hơn", "dài hơn", "không đổi", "thay đổi"],
];

const correctAnswers = [
    1, 0, 1, 1, 0,
    1, 0, 3, 1, 2,
    1, 0, 0, 1, 1,
    1, 0, 1, 2, 0,
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
