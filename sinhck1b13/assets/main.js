const questions = [
    "Ở người, quá trình loại bỏ ra khỏi cơ thể các chất sinh ra từ quá trình chuyển hóa mà cơ thể không sử dụng, các chất độc hại, các chất dư thừa được gọi là",
    "Cơ quan nào sau đây có vai trò lọc máu hình thành nước tiểu?",
    "Cơ quan nào sau đây có vai trò bài xuất carbon dioxide ra khỏi cơ thể?",
    "Cơ quan nào sau đây có vai trò bài tiết mồ hôi ra khỏi cơ thể?",
    "Sản phẩm bài tiết chính của phổi là",
    "Nội môi là môi trường",
    "Cân bằng nội môi là duy trì sự ổn định của môi trường trong",
    "Cân bằng nội môi là trạng thái cân bằng",
    "Cơ quan nào sau đây không tham gia cân bằng nội môi?",
    "Bộ phận nào sau đây là bộ phận thực hiện cân bằng nội môi?",
    "Tuyến tụy tiết ra hormone insulin và glucagon tham gia vào cơ chế nào sau đây?",
    "Bộ phận thực hiện trong cơ chế điều hòa cân bằng nội môi là",
    "Mỗi nephron được cấu tạo từ",
    "Mỗi hệ thống điều hòa cân bằng nội môi gồm các thành phần là",
    "Vai trò của gan trong điều hòa cân bằng nội môi là",
    "Khi nói về vai trò của thận trong điều hòa cân bằng nội môi có bao nhiêu phát biểu đúng? <br> I. Điều hòa nồng độ của nhiều chất hòa tan như protein, glucose,… trong huyết tương. <br> II. Điều hòa cân bằng muối và nước, qua đó duy trì áp suất thẩm thấu của dịch cơ thể. <br> III. Duy trì pH máu qua điều chỉnh tiết H+ vào dịch lọc và tái hấp thụ HCO3- từ dịch lọc trả về máu. <br> IV. Duy trì pH máu qua điều chỉnh lượng O2 và CO2 trong máu.",
    "Vai trò của phổi trong điều hòa cân bằng nội môi là",
    "Khi nói về cơ chế điều hòa cân bằng nội môi, có bao nhiêu phát biểu sau đây là đúng? <br> I. Hệ hô hấp giúp duy trì pH bằng cách thải CO2 ra môi trường. <br> II. Gan duy trì cân bằng nội môi thông qua điều hoà nồng độ nhiều chất tan như protein, glucose,…. <br> III. Hệ tiết niệu tham gia điều hòa pH máu thông qua điều hoà áp suất thẩm thấu, điều chỉnh tiết H+ và tái hấp thu HCO3-. <br> IV. Trong cơ thể, chỉ có gan, thận và phổi tham gia điều hoà cân bằng nội môi.",
    "Có bao nhiêu biện pháp sau đây bảo vệ thận của con người? <br> (I) Chế độ ăn uống hợp lí. <br> (II) Uống đủ nước. <br> (III) Không uống nhiều rượu bia. <br> (IV) Không sử dụng quá nhiều loại thuốc.",
    "Khi nói về cơ chế duy trì cân bằng nội môi, trật tự nào sau đây đúng?"
];

const answers = [
    ["tiêu hóa", "tuần hoàn", "bài tiết", "hô hấp tế bào"],
    ["Ruột", "Da", "Phổi", "Thận"],
    ["Ruột", "Da", "Phổi", "Thận"],
    ["Da", "Hệ tuần hoàn", "Thận", "Phổi"],
    ["oxygen", "urea", "bilirubin", "carbon dioxide"],
    ["trong cơ thể được tạo bởi huyết tương, bạch huyết và dịch mô.", "ngoài cơ thể được tạo ra bởi máu, bạch huyết và dịch mô.", "trong cơ thể được tạo ra mao mạch, bạch huyết và dịch mô.", "ngoài cơ thể được tạo bởi huyết tương, bạch cầu và hồng cầu."],
    ["tế bào", "mô", "cơ thể", "cơ quan"],
    ["tĩnh, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh một giá trị nhất định.", "động, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh một giá trị nhất định.", "tĩnh, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh nhiều giá trị.", "động, các chỉ số của môi trường trong cơ thể có xu hướng thay đổi và dao động xung quanh nhiều giá trị."],
    ["Thận", "Phổi", "Gan", "Mắt"],
    ["Hệ thần kinh và tuyến nội tiết", "Các cơ quan như thận, gan, mạch máu", "Thụ thể hoặc cơ quan thụ cảm", "Cơ và tuyến"],
    ["Điều hòa hấp thụ nước ở thận", "Duy trì nồng độ glucose bình thường trong máu", "Điều hòa hấp thụ Na+ ở thận", "Điều hòa pH máu"],
    ["thụ thể hoặc cơ quan thụ cảm", "trung ương thần kinh", "tuyến nội tiết", "các cơ quan thận, gan, phổi, tim, mạch máu"],
    ["cầu thận và ống thận", "phần vỏ và phần tủy", "quản cầu và nang Bowman", "cầu thận và bể thận"],
    ["bộ phận tiếp nhận kích thích và bộ phận đáp ứng kích thích", "bộ phận tiếp nhận kích thích và bộ phận thực hiện", "bộ phận tiếp nhận kích thích, bộ phận điều khiển và bộ phận thực hiện", "bộ phận điều khiển, bộ phận thực hiện và hệ thần kinh"],
    ["điều hòa nồng độ của nhiều chất hòa tan như protein, glucose,… trong huyết tương.", "điều hòa cân bằng muối và nước, qua đó duy trì áp suất thẩm thấu của dịch cơ thể.", "duy trì pH máu qua điều chỉnh tiết H+ vào dịch lọc và tái hấp thụ HCO3- từ dịch lọc trả về máu.", "duy trì pH máu qua điều chỉnh lượng O2 và CO2 trong máu."],
    ["1", "2", "3", "4"],
    ["điều hòa nồng độ của nhiều chất hòa tan như protein, glucose,… trong huyết tương.", "điều hòa cân bằng muối và nước, qua đó duy trì áp suất thẩm thấu của dịch cơ thể.", "duy trì pH máu qua điều chỉnh tiết H+ vào dịch lọc và tái hấp thụ HCO3- từ dịch lọc trả về máu.", "duy trì pH máu qua điều chỉnh lượng O2 và CO2 trong máu."],
    ["1", "2", "3", "4"],
    ["2", "3", "4", "1"],
    ["Bộ phận tiếp nhận kích thích → bộ phận điều khiển → bộ phận thực hiện → bộ phận tiếp nhận kích thích.", "Bộ phận điều khiển → bộ phận tiếp nhận kích thích → bộ phận thực hiện → bộ phận tiếp nhận kích thích.", "Bộ phận tiếp nhận kích thích → bộ phận thực hiện → bộ phận điều khiển → bộ phận tiếp nhận kích thích.", "Bộ phận thực hiện → bộ phận tiếp nhận kích thích → bộ phận điều khiển → bộ phận tiếp nhận kích thích."]
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    2, 3, 2, 0, 3,
    0, 2, 1, 3, 1,
    1, 3, 0, 2, 0,
    1, 3, 2, 2, 0,
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
