const questions = [
    "Quá trình dinh dưỡng là quá trình",
    "Động vật nào sau đây lấy thức ăn từ môi trường sống theo kiểu ăn thức ăn rắn kích cỡ khác nhau?",
    "Động vật nào sau đây lấy thức ăn từ môi trường sống theo kiểu ăn lọc?",
    "Động vật nào đây lấy thức ăn từ môi trường sống theo kiểu ăn hút?",
    "Ở động vật có ống tiêu hóa, thức ăn được tiêu hóa bằng hình thức nào sau đây?",
    "Ở động vật có túi tiêu hóa, thức ăn được tiêu hóa bằng hình thức nào sau đây?",
    "Động vật nào sau đây tiêu hóa thức ăn bằng hình thức tiêu hóa nội bào?",
    "Ở động vật đơn bào, các enzyme tiêu hóa có ở bào quan nào sau đây?",
    "Nhóm động vật nào sau đây có túi tiêu hóa?",
    "Ở động vật có ống tiêu hóa, thức ăn được tiêu hóa theo hình thức",
    "Động vật nào sau đây chưa có cơ quan tiêu hóa?",
    "Tóm tắt quá trình tiêu hóa thức ăn trong túi tiêu hóa. <br> I. Thức ăn đi qua miệng vào trong túi. <br> II. Tế bào trên thành túi tiêu hóa tiết ra enzyme phân giải thức ăn thành các mảnh nhỏ. <br> III. Các mảnh thức ăn tiếp tục được các tế bào thành túi tiêu hóa nội bào. <br> IV. Chất thải được thải đi qua miệng ra ngoài.",
    "Ưu điểm của tiêu hóa thức ăn ở động vật có túi tiêu hóa so với động vật chưa có túi tiêu hóa là",
    "Bộ phận nào sau đây của ống tiêu hóa có quá trình tiêu hóa cơ học mạnh hơn tiêu hóa hóa học?",
    "Ở động vật có ống tiêu hóa, quá trình tiêu hóa hóa học diễn ra chủ yếu ở cơ quan nào sau đây?",
    "Khi nói về quá trình tiêu hóa thức ăn ở động vật có túi tiêu hóa, phát biểu nào sau đây đúng?",
    "Khi nói về hoạt động tiêu hóa thức ăn trong các bộ phận của ống tiêu hóa ở người, phát biểu nào sau đây sai?",
    "Sự tiến hóa của các hình thức tiêu hóa diễn ra theo hướng nào sau đây?",
    "Những ưu điểm của tiêu hóa thức ăn trong ống tiêu hóa so với trong túi tiêu hóa: <br> I. Thức ăn đi theo 1 chiều trong ống tiêu hóa không bị trộn lẫn với chất thải (phân) còn thức ăn trong túi tiêu hóa bị trộn lẫn chất thải. <br> II. Trong ống tiêu hóa dịch tiêu hóa không bị hòa loãng <br> III. Thức ăn đi theo 1 chiều nên hình thành các bộ phận chuyên hóa, thực hiện các chức năng khác nhau: tiêu hóa cơ học, hóa học, hấp thụ thức ăn <br> IV. Thức ăn đi qua ống tiêu hóa được biến đổi cơ học, hóa học trở thành những chất phức tạp và được hấp thụ vào máu.",
    "Khi nói về đặc điểm cấu tạo của ruột non thích nghi với hấp thụ các chất dinh dưỡng, có bao nhiêu nhận định sau đây đúng? <br> I. Bề mặt hấp thụ của ruột tăng lên nhiều lần nhờ các nếp gấp của niêm mạc ruột (van ruột). <br> II. Cấu tạo bởi cơ vân nên tạo nhu động ruột đẩy thức ăn di chuyển trong lòng ruột. <br> III. Bề mặt các nếp gấp lại có nhiều lông ruột và vi lông hút nằm trên đỉnh của tế bào lông ruột. <br> IV. Lông ruột chứa lớp tế bào biểu mô, bên trong có hệ mạch máu và dây thần kinh.",
];

const answers = [
    ["thải chất dinh dưỡng cần thiết dưới dạng thức ăn và tổng hợp thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển.", "lấy chất dinh dưỡng không cần thiết dưới dạng thức ăn và tổng hợp thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển.", "lấy chất dinh dưỡng cần thiết dưới dạng thức ăn và phân giải thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển.", "lấy chất dinh dưỡng cần thiết dưới dạng thức ăn và tổng hợp thành chất sống của cơ thể → đảm bảo cho cơ thể tồn tại và phát triển."],
    ["Muỗi.", "Trai sông.", "Hổ.", "Sò huyết."],
    ["Muỗi.", "Ếch đồng.", "Hổ.", "Sò huyết."],
    ["Muỗi.", "Ếch đồng.", "Hổ.", "Sò huyết."],
    ["Tiêu hóa ngoại bào.", "Tiêu hóa nội bào.", "Tiêu hóa ngoại bào và tiêu hóa nội bào.", "Một số tiêu hóa nội bào, còn lại tiêu hóa ngoại bào."],
    ["Tiêu hóa ngoại bào.", "Tiêu hóa nội bào.", "Tiêu hóa ngoại bào và tiêu hóa nội bào.", "Một số tiêu hóa nội bào, còn lại tiêu hóa ngoại bào."],
    ["Trùng giày.", "Thủy tức.", "Ếch đồng.", "Sò huyết."],
    ["Không bào tiêu hóa.", "Ti thể.", "Lysosome.", "Túi tiêu hóa."],
    ["Ruột khoang và giun dẹp.", "Chim và thú.", "Trùng giày và giun dẹp.", "Ruột khoang và trùng amip."],
    ["tiêu hóa ngoại bào.", "một số tiêu hóa nội bào, còn lại tiêu hóa ngoại bào.", "tiêu hóa nội bào.", "tiêu hóa nội bào và ngoại bào."],
    ["Trùng giày.", "Thủy tức.", "Côn trùng.", "Giun đất."],
    ["I II III IV.", "IV II III I.", "I III II IV.", "I IV II III."],
    ["có enzim tiêu hóa", "tiêu hóa được thức ăn có kích thước lớn.", "tiêu hóa các chất dinh dưỡng phức tạp thành các chất dinh dưỡng đơn giản.", "có lỗ thông để lấy thức ăn."],
    ["Ruột non và ruột già.", "Ruột non và miệng.", "Miệng và dạ dày.", "Dạ dày và ruột già."],
    ["Thực quản.", "Dạ dày.", "Ruột non.", "Ruột già."],
    ["Trong túi tiêu hóa, thức ăn chỉ được biến đổi về mặt cơ học.", "Thức ăn được tiêu hóa ngoại bào nhờ enzyme của lizôxôm.", "Trong ngành Ruột khoang, chỉ có thủy tức mới có cơ quan tiêu hóa dạng túi.", "Thức ăn được tiêu hóa ngoại bào và tiêu hóa nội bào."],
    ["Ở ruột già có tiêu hóa cơ học và hóa học.", "Ở dạ dày có tiêu hóa cơ học và hóa học.", "Ở miệng có tiêu hóa cơ học và hóa học.", "Ở ruột non có tiêu hóa cơ học và hóa học."],
    ["Tiêu hóa nội bào → tiêu hóa ngoại bào → tiêu hóa nội bào kết hợp với ngoại bào.", "Tiêu hóa ngoại bào → tiêu hóa nội bào kết hợp với ngoại bào → tiêu hóa nội bào.", "Tiêu hóa nội bào → tiêu hóa nội bào kết hợp với ngoại bào → tiêu hóa ngoại bào.", "Tiêu hóa nội bào kết hợp với ngoại bào → tiêu hóa nội bào → tiêu hóa ngoại bào."],
    ["I, II, IV.", "I, III, IV.", "II, III, IV.", "I, II, III."],
    ["1.", "2.", "3.", "4."]
];


// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    3, 2, 3, 0, 0, 
    2, 0, 2, 0, 0, 
    0, 0, 1, 2, 2, 
    3, 0, 2, 3, 2, 
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
