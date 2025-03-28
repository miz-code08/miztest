const questions = [
    "Tập tính động vật là gì?",
    "Tập tính không có vai trò nào sau đây?",
    "Tập tính hỗn hợp ở động vật là gì?",
    "Chim di cư để tránh rét, cá di cư để đẻ trứng là loại tập tính gì?",
    "Hươu đực quệt dịch có mùi đặc biệt tiết ra từ tuyến cạnh mắt của nó vào cành cây để thông báo cho các con đực khác là tập tính gì?",
    "Đâu là tập tính học được ở động vật?",
    "Ý nào không phải là đặc điểm của tập tính bẩm sinh?",
    "Tập tính quen nhờn là tập tính động vật không trả lời khi kích thích nào?",
    "Khi nói về các hình thức học tập ở động vật, hình thức học tập nào sau đây là đơn giản nhất?",
    // tln
    "Nguyên nhân nào sau đây dẫn đến tập tính di cư ở động vật? <br> Thức ăn, hoạt động sinh sản, thời tiết không thuận lợi, hướng nước chảy",
    "Khi di cư, động vật sống trên cạn định hướng nhờ những yếu tố nào sau đây? <br> Từ trường Trái Đất, vị trí Mặt Trời, vị trí Trăng, thành phần hóa học của nước, hướng dòng nước chảy, địa hình",
    "Những tập tính nào sau đây thuộc tập tính sinh sản? <br> Tìm kiếm bạn tình, tìm tổ, kiếm ăn, ấp trứng và bảo vệ con non",
    "Tập tính nào sau đây thuộc tập tính xã hội? <br> Hợp tác, tìm tổ, thứ bậc, vị tha, chăm sóc con non",
];

const answers = [
    ["Chuỗi những phản ứng trả lời lại các kích thích của môi trường, nhờ đó động vật tồn tại và phát triển.", "Các phản xạ có điều kiện của động vật học được trong quá trình sống.", "Các phản xạ không điều kiện, mang tính bẩm sinh của động vật, giúp chúng được bảo vệ.", "Các phản xạ không điều kiện, nhưng được sự can thiệp của não bộ."],
    ["Tăng khả năng sinh tồn của động vật.", "Đảm bảo cho sự thành công sinh sản.", "Là một cơ chế cân bằng nội môi, duy trì môi trường ổn định.", "Giảm khả năng sinh tồn của động vật."],
    ["Trường hợp cơ thể phản ứng trước những hoạt động phức tạp.", "Sự phối hợp giữa tập tính bẩm sinh và tập tính thứ sinh, được hình thành khi điều kiện sống thay đổi.", "Sự phối hợp của nhiều loại tập tính thứ sinh.", "Sự phối hợp của nhiều loại tập tính bẩm sinh."],
    ["Tập tính thứ sinh.", "Tập tính bẩm sinh.", "Học được.", "Thói quen."],
    ["Kiếm ăn.", "Sinh sản.", "Di cư.", "Bảo vệ lãnh thổ."],
    ["Nhện chăng tơ.", "Đèn giao thông màu đỏ, người qua đường dừng lại.", "Thú con bú sữa mẹ.", "Chim sinh sản."],
    ["Có sự thay đổi linh hoạt trong đời sống cá thể.", "Rất bền vững và không thay đổi.", "Là tập hợp các phản xạ không điều kiện diễn ra theo một trình tự nhất định.", "Do kiểu gen quy định."],
    ["Không liên tục và không gây nguy hiểm gì.", "Lặp đi lặp lại nhiều lần và không gây nguy hiểm gì.", "Ngắn gọn và không gây nguy hiểm gì.", "Giảm dần cường độ và không gây nguy hiểm gì."],
    ["In vết.", "Quen nhờn.", "Học liên kết.", "Học xã hội."],
    // tln
    ["Chỉ có Thời tiết không thuận lợi", "Hướng nước chảy, Thời tiết không thuận lợi và Thức ăn", "Thức ăn, Hoạt động sinh sản và Thời tiết không thuận lợi", "Hoạt động sinh sản và Hướng nước chảy"],
    ["Vị trí Mặt Trời, Vị trí Trăng và Địa hình", "Từ trường Trái Đất, Thành phần hóa học của nước và Hướng dòng nước chảy", "Vị trí Mặt Trời, Từ trường Trái Đất và Thành phần hóa học của nước", "Hướng dòng nước chảy, Địa hình và Thành phần hóa học của nước"],
    ["Tìm kiếm bạn tình, Tìm tổ, Ấp trứng và Bảo vệ con non", "Kiếm ăn, Ấp trứng và Tìm tổ", "Tìm tổ, Kiếm ăn và Bảo vệ con non", "Chỉ có Tìm kiếm bạn tình và Ấp trứng"],
    ["Hợp tác, Thứ bậc và Vị tha", "Tìm tổ, Chăm sóc con non và Thứ bậc", "Hợp tác, Chăm sóc con non và Tìm tổ", "Vị tha, Tìm tổ và Chăm sóc con non"],
];  

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    0, 3, 1, 1, 3,
    1, 0, 1, 1,
    // tln
    2, 0, 0, 0,
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
