const questions = [
    "Bệnh ở người và động vật là",
    "Nguyên nhân gây bệnh cho người và động vật là do",
    "Miễn dịch là",
    "Dị ứng là",
    "Miễn dịch tự nhiên mang tính bẩm sinh gọi là",
    "Miễn dịch xảy ra khi có kháng nguyên xâm nhập vào cơ thể gọi là",
    "Hàng rào bảo vệ cơ thể ở hệ tiêu hóa là",
    "Hàng rào bảo vệ cơ thể ở hệ hô hấp là",
    "Hàng rào bảo vệ cơ thể ở hệ bài tiết là",
    "Khi mầm bệnh vượt qua được hàng rào bảo vệ vật lý và hóa học thì chúng sẽ gặp hàng rào bảo vệ tiếp theo, đó là các đáp ứng không đặc hiệu. Các đáp ứng không đặc hiệu gồm :",
    "Phân tử gây phản ứng đặc hiệu với kháng nguyên gọi là",
    "Phân  tử ngoại lai khi xâm nhập vào cơ thể sẽ kích thích cơ thể tạo ra chất gây phản ứng đặc hiệu với nó gọi là",
    "Bệnh ung thư là",
    "Bệnh ung thư, tự miễn và AIDS là do chức năng",
    "Di căn là quá trình tế bào u ác tính có thể",
    "Người bị nhiễm HIV/AIDS thường dễ mắc bệnh lao vì"
];

const answers = [
    ["sự sai lệnh hoặc tổn thương về cấu tạo và chức năng của bất kì bộ phận, cơ quan, hệ thống nào của cơ thể.", "sự mất đi tế bào của cơ thể.", "một nhân tố khiến cơ thể trở nên yếu dần về già.", "tác nhân làm cho cơ thể mất đi sự cân bằng vốn có ngay từ đầu."],
    ["các tác nhân vật lí và hóa học.", "các tác nhân sinh học.", "yếu tố di truyền.", "tất cả các nguyên nhân trên."],
    ["cơ thể phản ứng một cách kịch liệt với môi trường xung quanh.", "khả năng cơ thể chống lại các tác nhân gây bệnh, đảm bảo cho cơ thể khoẻ mạnh, không mắc bệnh.", "khả năng tự miễn nhiễm với mọi bệnh tật của cơ thể", "khả năng của cơ thể cần được bổ sung các chất để chống lại tác nhân gây hại"],
    ["Phản ứng đồng điệu của cơ thể đối với kháng nguyên thể định (Cơ thể quá mẫn cảm với kháng thể).", "Phản ứng đồng điệu của cơ thể đối với kháng nguyên nhất định (Cơ thể quá mẫn cảm với kháng nguyên).", "Phản ứng quá mức của cơ thể đối với kháng thể nhất định (Cơ thể quá mẫn cảm với kháng thể).", "Phản ứng quá mức của cơ thể đối với kháng nguyên nhất định (Cơ thể quá mẫn cảm với kháng nguyên)."],
    ["miễn dịch đặc hiệu.", "miễn dịch thể dịch.", "miễn dịch tế bào.", "miễn dịch không đặc hiệu."],
    ["miễn dịch đặc hiệu.", "miễn dịch thể dịch.", "miễn dịch tế bào.", "miễn dịch không đặc hiệu."],
    ["lớp dịch nhầy, lông nhỏ trong khí quản và phế quản, pH thấp ở dạ dày.", "lysosyme trong nước bọt, acid và enzyme pepsin trong dạ dày.", "dòng nước tiểu cuốn trôi mầm bệnh.", "vi khuẩn vô hại cạnh tranh với vi khuẩn có hại."],
    ["lớp dịch nhầy, lông nhỏ trong khí quản và phế quản.", "lysosyme trong nước bọt, acid và enzyme pepsin trong dạ dày.", "nồng độ muối cao trong mồ hôi ức chế nấm, virus và vi khuẩn phát triển.", "vi khuẩn vô hại cạnh tranh với vi khuẩn có hại."],
    ["lớp dịch nhầy, lông nhỏ trong khí quản và phế quản, pH thấp ở dạ dày.", "lysosyme trong nước bọt, acid và enzyme pepsin trong dạ dày.", "vi khuẩn vô hại cạnh tranh với vi khuẩn có hại.", "pH thấp trong âm đạo và nước tiểu ức chế nấm, virus và vi khuẩn phát triển."],
    ["thực bào, đại thực bào, sốt, các peptit và protein chống lại mầm bệnh.", "thực bào, bạch cầu trung tính, sốt, các peptit và protein chống lại mầm bệnh.", "thực bào, viêm, sốt, nhiễm trùng, các peptit và protein chống lại mầm bệnh.", "thực bào, viêm, sốt, các peptit và protein chống lại mầm bệnh."],
    ["độc tố.", "chất cảm ứng.", "kháng thể.", "hormone."],
    ["chất kích thích.", "chất cảm ứng.", "kháng thể.", "kháng nguyên."],
    ["một nhóm tế bào trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u ác tính.", "một nhóm tế bào trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u lành tính.", "một tế bào trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u ác tính.", "một hệ cơ quan trở nên bất thường và phân chia liên tục, không kiểm soát được dẫn đến tạo thành khối u, gọi là u ác tính."],
    ["miễn dịch không đặc hiệu bị phá vỡ.", "hệ miễn dịch bị phá vỡ.", "tế bào T bị ức chế.", "tế bào B bị phân chia liên tục."],
    ["tách ra khỏi khối u theo hệ thần kinh đến các vị trí khác trong cơ thể và hình thành khối u lành tính mới.", "tách ra khỏi khối u theo đường máu hoặc bạch huyết đến các vị trí khác trong cơ thể và hình thành khối u ác tính mới.", "tách ra khỏi khối u và tiêu diệt các mầm bệnh khác của cơ thể.", "di chuyển đến vị trí khác của cơ thể và làm tăng khả năng miễn dịch của cơ quan tại vị trí mà chúng di chuyển tới."],
    ["cơ thể những người này suy giảm khả năng sản xuất kháng nguyên chống lại vi khuẩn lao.", "các tế bào thực bào ở những người này giảm khả năng bắt giữ vi khuẩn lao.", "tế bào bạch cầu bị tiêu diệt, làm suy yếu dần khả năng đáp ứng miễn dịch không đặc hiệu, làm khả năng chống mầm bệnh suy giảm.", "tế bào T hỗ trợ bị tiêu diệt, làm suy yếu dần khả năng đáp ứng miễn dịch dịch thể và đáp ứng miễn dịch tế bào, làm khả năng chống mầm bệnh suy giảm."]
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    0, 3, 1, 3, 3,
    0, 1, 0, 3, 3,
    2, 3, 0, 1, 1,
    3, 
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
