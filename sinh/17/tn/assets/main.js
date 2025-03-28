const questions = [
    "Cảm ứng của động vật là khả năng cơ thể động vật phản ứng lại các kích thích",
    "Cung phản xạ diễn ra theo trật tự:",
    "Hệ thần kinh dạng lưới được tạo thành bởi các tế bào thần kinh",
    "Khi bị kích thích, thủy tức phản ứng bằng cách",
    "Trong các động vật sau: <br> (1) giun dẹp (2) thủy tức (3) đỉa (4) trùng roi (5) giun tròn (6) gián (7) tôm <br> Bao nhiêu loài có hệ thần kinh dạng chuỗi hạch?",
    "Động vật có hệ thần kinh dạng chuỗi hạch có thể trả lời cục bộ khi bị kích thích vì",
    "Động vật có hệ thần kinh dạng lưới khi bị kích thích thì",
    "Hệ thần kinh dạng chuỗi hạch được hình thành bởi các tế bào thần kinh tập trung thành các hạch thần kinh và được nối với nhau tạo thành chuỗi hạch",
    "Phản xạ là gì?",
    "Thụ thể tiếp nhận chất trung gian hóa học nằm ở",
    "Khi nói về tổ chức thần kinh ở các nhóm động vật, phát biểu nào sau đây là sai?",
    "Thụ thể tiếp nhận chất trung gian hóa học nằm ở",
    "Xung thần kinh được truyền qua synapse theo thứ tự?",
    "Điều không đúng với đặc điểm phản xạ có điều kiện là",
    "Trong các đặc điểm sau: <br> (1) Thường do tủy sống điều khiển <br> (2) Di truyền được, đặc trưng cho loài <br> (3) Có số lượng không hạn chế <br> (4) Mang tính bẩm sinh và bền vững <br> Có bao nhiêu đặc điểm trên đúng với phản xạ không điều kiện?",
    "Ý nào không đúng với đặc điểm của phản xạ có điều kiện?",
    "Xét các đặc điểm sau: <br> (1) Hình thành trong đời sống cá thể. <br> (2) Rất bền vững và không thay đổi. <br> (3) Tác nhân kích thích ứng với thụ thể cảm giác. <br> (4) Có sự tham gia của vỏ não. <br> Trong các đặc điểm trên, những đặc điểm của phản xạ có điều kiện gồm:",
    "Trong quá trình dẫn truyền xung thần kinh qua xinap hóa học, ion Ca2+ có vai trò gì?",
    "Quá trình truyền tin qua xinap gồm các giai đoạn theo thứ tự là",
    // tln
    "Trong các sinh vật sau: Vi khuẩn E.coli, trùng giày, giun đất, trùng amip, nhện, sinh vật nào không có hệ thần kinh?",
    "Động vật nào trong nhóm sau có hệ thần kinh dạng lưới? <br> Thủy tức, cá, sứa, cua, giun đốt, mực",
    "Nhóm động vật nào sau đây có hệ thần kinh dạng ống? <br> Sư tử, chó, mèo, cá, sứa, mực",
    "Trong các động vật sau, đâu là những loài không có hệ thần kinh dạng ống? <br> Sư tử, chó, mèo, cá, sứa, mực",
];

const answers = [
    ["của một số tác nhân môi trường sống, đảm bảo cho cơ thể tồn tại và phát triển", "của môi trường sống, đảm bảo cho cơ thể tồn tại và phát triển", "định hướng của môi trường sống, đảm bảo cho cơ thể tồn tại và phát triển", "của môi trường (bên trong và bên ngoài cơ thể) để tồn tại và phát triển"],
    ["bộ phận tiếp nhận kích thích → bộ phận phân tích và tổng hợp thông tin → bộ phận phản hồi thông tin", "bộ phận tiếp nhận kích thích → bộ phận thực hiện phản ứng → bộ phận phân tích và tổng hợp thông tin → bộ phận phản hồi thông tin", "bộ phận tiếp nhận kích thích → bộ phận phân tích và tổng hợp thông tin → bộ phận thực hiện phản ứng", "bộ phận tiếp nhận kích thích → bộ phận trả lời kích thích → bộ phận thực hiện phản ứng"],
    ["rải rác dọc theo khoang cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh", "phân bố đều trong cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh", "rải rác trong cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh", "phân bố tập trung ở một số vùng trong cơ thể và liên hệ với nhau qua sợi thần kinh tạo thành mạng lưới tế bào thần kinh"],
    ["trả lời kích thích cục bộ", "co toàn bộ cơ thể", "co rút chất nguyên sinh", "chuyển động cả cơ thể"],
    ["1", "3", "4", "5"],
    ["số lượng tế bào thần kinh tăng lên", "mỗi hạch là một trung tâm điều khiển một vùng xác định của cơ thể", "các tế bào thần kinh trong hạch nằm gần nhau", "các hạch thần kinh liên hệ với nhau"],
    ["duỗi thẳng cơ thể", "co toàn bộ cơ thể", "di chuyển đi chỗ khác", "co ở phần cơ thể bị kích thích"],
    ["nằm dọc theo chiều dài cơ thể", "nằm dọc theo lưng và bụng", "nằm dọc theo lưng", "phân bố ở một số phần cơ thể"],
    ["Phản ứng của cơ thể thông qua hệ thần kinh trả lời lại các kích thích chỉ bên ngoài cơ thể.", "Phản ứng của cơ thể thông qua hệ thần kinh chỉ trả lời lại các kích thích bên trong cơ thể.", "Phản ứng của cơ thể thông qua hệ thần kinh trả lời lại các kích thích bên trong hoặc bên ngoài cơ thể.", "Phản ứng của cơ thể trả lời lại các kích thích đồng thời thông qua mạng lưới thần kinh bên ngoài cơ thể."],
    ["màng trước synapse", "khe synapse", "chùy synapse", "màng sau synapse"],
    ["Nhện có hệ thần kinh dạng chuỗi hạch", "Mực có hệ thần kinh dạng chuỗi hạch", "Sứa có hệ thần kinh mạng lưới", "Cá có thệ thần kinh mạng lưới"],
    ["màng trước synapse", "khe synapse", "chùy synapse", "màng sau synapse"],
    ["Chùy synapse → khe synapse → màng sau synapse → màng trước synapse.", "Khe synapse → màng trước synapse → chuỳ synapse → màng sau synapse.", "Màng trước synapse → chuỳ synapse → khe synapse → màng sau synapse.", "Chuỳ synapse → màng trước synapse → khe synapse → màng sau synapse."],
    ["được hình thành trong quá trình sống và không bền vững", "không di truyền được, mang tính cá thể", "có số lượng hạn chế", "thường do vỏ não điều khiển"],
    ["1", "2", "3", "4"],
    ["Được hình thành trong quá trình sống và không bền vững", "Không di truyền được, mang tính cá thể", "Có số lượng hạn chế", "Thường do vỏ não điều khiển"],
    ["(1) và (4)", "(2) và (3)", "(2), (3) và (4)", "(1), (2) và (4)"],
    ["Làm thay đổi tính thấm của dung dịch ở tận cùng sợi trục, từ đó làm xuất bào các bóng chứa chất trung gian hóa học", "Tác động lên thụ thể ở màng sau xinap, làm thay đổi tính thấm của màng sau dẫn đến xung thần kinh được dẫn truyền", "Làm tăng nồng độ ion của dung dịch ngoại bào, từ đó làm tăng độ lớn của điện thế nghỉ", "Làm thay đổi hướng truyền của xung thần kinh khi đi qua xinap"],
    ["Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap → Xung thần kinh đến làm Ca2+ đi vào chùy xinap → acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp", "Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap → acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp → Xung thần kinh đến làm Ca2+ đi vào chùy xinap", "acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp → Xung thần kinh đến làm Ca2+ đi vào chùy xinap → Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap", "Xung thần kinh đến làm Ca2+ đi vào chùy xinap → Ca2+ vào làm bóng chứa acetylcholine gắn vào màng trước và vỡ ra, giải phóng acetylcholine vào khe xinap → acetylcholine gắn vào thụ thể trên màng sau và làm xuất hiện điện thế hoạt động lan truyền đi tiếp"],
    // tln
    ["Giun đất và Nhện", "Vi khuẩn E.coli và Trùng amip", "Trùng giày và Trùng amip", "Nhện và Trùng giày"],
    ["Cá và Cua", "Chỉ có Thủy tức", "Thủy tức và Sứa", "Giun đốt và Mực"],
    ["Sư tử, Chó, Mèo và Cá", "Cá, Sứa và Mực", "Mèo, Cá và Mực", "Chỉ có Chó và Mèo"],
    ["Cá và Sứa", "Sứa và Mực", "Mèo và Cá", "Chó và Mực"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    3, 2, 2, 1, 3,
    1, 1, 0, 2, 3,
    3, 3, 3, 2, 2,
    2, 0, 0, 3,
    // tln
    2, 2, 0, 1,
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
