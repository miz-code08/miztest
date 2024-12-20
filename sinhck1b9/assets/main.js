const questions = [
    "Hô hấp đảm bảo cho động vật lấy được",
    "Hô hấp ở người và thú gồm các giai đoạn liên quan mật thiết với nhau theo thứ tự: <br> I. Thông khí. <br> II. Vận chuyển O2 và CO2. <br> III. Hô hấp tế bào. <br> IV. Trao đổi khí ở phổi. <br> V. Trao đổi khí ở mô.",
    "Ở động vật đơn bào hoặc đa bào có tổ chức thấp trao đổi khí theo hình thức nào sau đây?",
    "Các loài động vật như ruột khoang, giun tròn, giun dẹp trao đổi khí theo hình thức nào?",
    "Châu chấu trao đổi khí theo hình thức nào sau đây?",
    "Động vật nào sau đây trao đổi khí với môi trường thông qua hệ thống ống khí?",
    "Giai đoạn nòng nọc của lưỡng cư trao đổi khí theo hình thức nào sau đây?",
    "Các loài động vật thân mềm trao đổi khí theo hình thức nào sau đây?",
    "Động vật nào sau đây có quá trình trao đổi khí giữa cơ thể với môi trường diễn ra ở mang?",
    "Trâu, bò trao đổi khí bằng hình thức nào sau đây?",
    "Khi nói về hô hấp ở động vật, phát biểu nào sau đây đúng?",
    "Bề mặt trao đổi khí là",
    "Căn cứ vào bề mặt trao đổi khí, có thể chia hô hấp ở động vật gồm mấy hình thức chủ yếu?",
    "Cơ quan thực hiện trao đổi khí ở thú là",
    "Các hình thức trao đổi khí ở động vật là",
    "Hiệu quả trao đổi khí của động vật liên quan đến các đặc điểm của bề mặt trao đổi khí. Có bao nhiêu đặc điểm sau đây là đúng? <br> I. Bề mặt trao đổi khí rộng <br> II. Bề mặt trao đổi mỏng và ẩm ướt <br> III. Bề mặt trao đổi khí có nhiều mạch máu và máu có sắc tố hô hấp <br> IV. Có sự lưu thông không khí tạo ra sự chênh lệch về nồng độ O2 và CO2 để các khí đó dễ dàng khuếch tán qua bề mặt trao đổi khí",
    "Khi nói về sự trao đổi khí qua bề mặt cơ thể, phát biểu nào sau đây sai?",
    "Có bao nhiêu phát biểu sau đây là đúng khi nói về hoạt động trao đổi khí của chim? <br> I. Không khí lưu thông qua các ống khí ở phổi diễn ra liên tục theo một chiều nhất định. <br> II. Không có khí đọng trong các ống khí ở phổi. <br> III. Sự trao đổi khí diễn ra theo 2 chu kì. <br> IV. Thời gian tiếp xúc giữa dòng nước và mao mạch rất ít nhưng quá trình trao đổi chất diễn ra thuận lợi.",
    "Khi nói về trao đổi khí ở động vật, có bao nhiêu phát biểu sau đây đúng? <br> I. Hệ thống mao mạch trên phiến mang là nơi trao đổi khí O2 và CO2 với dòng nước chảy qua mang. <br> II. Thông khí ở cá xương là nhờ hoạt động của các cơ hô hấp làm thay đổi thể tích khoang miệng và khoang mang. <br> III. Phổi là cơ quan trao đổi khí chuyên hóa của nhiều loài động vật sống trên cạn như bò sát, chim và thú. <br> IV. Phổi của lưỡng cư có ít phế nang hơn phổi của chim nên trao đổi khí chủ yếu qua da.",
    "Khi nói về đặc điểm trao đổi khí bằng mang, có bao nhiêu phát biểu sau đây đúng? <br> I. Mang là cơ quan hô hấp thích nghi với môi trường nước, có ở cá, thân mềm, chân khớp sống trong nước. <br> II. Mang gồm các cung mang, mỗi cung mang là hệ thống tĩnh mạch chằng chịt bao lấy chúng. <br> III. Miệng và diềm nắp mang đóng mở nhịp nhàng tạo dòng nước chảy 1 chiều liên tục qua mang. <br> IV. Sự trao đổi khí của cá xương đạt hiệu quả cao, có thể lấy được hơn 80% lượng O2 trong nước khi đi qua mang.",
];

const answers = [
    ["O2 thải CO2.", "CO2 thải O2.", "CO2 thải CO2.", "O2 thải O2."],
    ["I II III IV V.", "I II IV V III.", "I IV II V III.", "I V II IV III."],
    ["Qua bề mặt cơ thể.", "Qua hệ mao mạch mang.", "Qua hệ thống ống khí.", "Qua hệ thống phế nang."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Châu chấu.", "Sư tử.", "Chuột đồng.", "Ếch đồng."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Mèo rừng.", "Tôm sông.", "Chim sâu.", "Ếch đồng."],
    ["Qua bề mặt cơ thể.", "Qua hệ thống ống khí.", "Qua mang.", "Qua phổi."],
    ["Hô hấp là quá trình tiếp nhận O2 và CO2 của cơ thể từ môi trường sống và giải phóng ra năng lượng.", "Hô hấp là tập hợp những quá trình, trong đó cơ thể lấy O2 từ bên ngoài vào để oxi hóa các chất trong tế bào và giải phóng năng lượng cho các hoạt động sống đồng thời thải CO2 ra ngoài.", "Hô hấp là quá trình tế bào sử dụng các chất khí như O2, CO2 để tạo ra năng lượng cho hoạt động sống.", "Hô hấp là quá trình trao đổi khí giữa cơ thể và môi trường, đảm bảo cho cơ thể có đầy đủ O2 và CO2 cung cấp cho các quá trình ôxi hóa các chất trong tế bào."],
    ["Bộ phận hoặc cơ quan cho CO2 từ môi trường ngoài khuếch tán vào trong tế bào(hoặc máu) và O2 khuếch tán từ tế bào (hoặc máu) ra ngoài.", "Bộ phận hoặc cơ quan cho O2 từ tế bào này khuếch tán vào trong tế bào(hoặc máu) khác.", "Bộ phận cho O2 từ môi trường ngoài khuếch tán vào trong tế bào(hoặc máu) và O2 khuếch tán từ tế bào (hoặc máu) ra ngoài.", "Bộ phận cho O2 từ môi trường ngoài khuếch tán vào trong tế bào(hoặc máu) và CO2 khuếch tán từ tế bào (hoặc máu) ra ngoài."],
    ["2.", "3.", "4.", "5."],
    ["hệ thống ống khí tiếp xúc trực tiếp với tế bào.", "các ống khí nằm trong phổi.", "phế nang trong phổi.", "lá mang và hệ thống mao mạch ở các lá mang."],
    ["qua bề mặt cơ thể, qua hệ thống ống khí, qua mang, qua da.", "qua bề mặt cơ thể, qua hệ thống ống khí, qua mang, qua phổi.", "qua bề mặt cơ thể, qua hệ thống ống khí, qua mang.", "qua bề mặt cơ thể, qua hệ thống ống khí, qua da."],
    ["2", "3", "4", "1"],
    ["Động vật đơn bào và đa bào bậc thấp chưa có cơ quan hô hấp chuyên biệt.", "Sự trao đổi khí được thực hiện trực tiếp qua màng tế bào hoặc bề mặt cơ thể nhờ sự khuếch tán.", "CO2 từ môi trường vào cơ thể và O2 từ cơ thể ra môi trường.", "Ruột khoang hô hấp trực tiếp. Giun đất hô hấp thực hiện nhờ xoang cơ thể."],
    ["1", "3", "4", "2"],
    ["1", "2", "4", "3"],
    ["3", "1", "2", "4"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    0, 2, 0, 0, 1,
    0, 2, 2, 1, 3,
    1, 3, 2, 2, 1,
    2, 2, 1, 2, 1,
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
