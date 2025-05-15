const questions = [
    // bài 24
    "Khi nói về đặc điểm để giúp nhận biết sinh sản vô tính, nhận định nào đúng, nhận định nào sai?",
    "Khi nói về đặc điểm của sinh sản hữu tính, nhận định nào đúng, nhận định nào sai?",
    "Khi nói về đặc điểm chỉ có ở sinh sản hữu tính, nhận định nào đúng, nhận định nào sai?",
    "Đây là hình ảnh cây sống đời (Kalanchoe pinnata). Các ý sau đây về hình thức sinh sản của loài này là đúng hay sai?",
    // bài 25
    "Khi nói về quá trình sinh sản ở thực vật, mỗi nhận định sau đây là đúng hay sai?",
    "Khi nói về thụ tinh của thực vật có hoa, mỗi nhận định sau đây là Đúng hay Sai khi nói về quá trình này?",
    "Vườn nhà bác Minh có một cây bưởi cho quả rất ngon, bác muốn nhân giống để trồng thêm vài cây nữa ở khu vườn, Bạn Nam gợi ý cho bác Minh phương pháp nhân giống phù hợp theo em bạn Nam đưa ra và giải thích như vậy là Đúng hay Sai?",
    "Khi nói về sự thụ phấn ở thực vật, có bao nhiêu phát biểu sau đây đúng hay Sai?",

];

const answers = [
    // bài 24
    ["Các cá thể tạo thành thích nghi tốt với môi trường sống ổn định. Không có sự kết hợp giữa giao tử đực và giao tử cái. Có hệ gene chỉ giống một phần hệ gene của thế hệ trước. Nguyên phân là cơ sở tế bào."],
    ["Sinh sản hữu tính giúp nhân nhanh số lượng lớn cá thể trong thời gian ngắn. Tạo nên sự đa dạng trong di truyền. Cung cấp nguồn nguyên liệu phong phú, đa dạng cho chọn lọc tự nhiên và tiến hoá. Các cá thể mới có thể thích nghi tốt với môi trường biến đổi."],
    ["Có quá trình thụ tinh. Có quá trình nguyên phân. Các cơ thể con có đặc điểm giống nhau. Ở đời con có sự tái tổ hợp vật chất di truyền của bố và mẹ."],
    ["Cơ thể mới được hình thành từ một bộ phận (lá, thân....) của cây mẹ. Khi môi trường sống thay đổi các cây con có khả năng thích nghi tốt hơn so với cây mẹ. Cây sống đời chỉ có sinh sản vô tính mà không có sinh sản hữu tính. Con người ứng dụng phương thức sinh sản sinh dưỡng để tạo ra nhiều giống cây trồng mới có đặc tính di truyền đa dạng, rút ngắn thời gian thu hoạch, có khả năng kháng bệnh cao."],
    // bài 25
    ["Quả được hình thành từ đầu nhị", "Sinh sản bào tử tạo ra thế hệ mới từ bào tử được phát sinh do nguyên phân ở những thực vật có xen kẽ thế hệ thể bào tử thể và giao tử thể", "Tự thụ phấn là sự thụ phấn giữa hạt phấn với nhụy của cùng một hoa hay khác hoa cùng một cây", "Thụ phấn là quá trình vận chuyển hạt phấn từ nhị đến núm nhụy"],
    ["Nhóm thực vật có thụ tinh kép là thực vật hạt kín", "Ở thực vật có hoa, hạt được hình thành từ bộ phận túi phôi", "Tế bào mẹ giảm phân cho 4 tiểu bào tử Mỗi tiểu bào tử nguyên phân 1 lần cho 1 hạt phấn chứa 1 tế bào sinh sản và 1 tế bào ống phấn Tế bào sinh sản nguyên phân một lần tạo 2 giao tử đực", "Quá trình thụ tinh của thực vật có hoa diễn ra ở ống phấn"],
    ["Phương pháp nhân giống phù hợp cho cây bưởi trong vườn nhà bác Minh là phương pháp chiết cành. Vì phương pháp này phù hợp cho cây ăn quả thân gỗ", "Quá trình rễ được tạo ra ở đoạn cành được áp dụng kĩ thuật này nhờ cytokinin phân hóa mô sẹo sau đó hình thành rễ bất định", "Kỹ thuật này cho cây con có tỉ lệ sống cao (có thể lên tới 100%), giữ nguyên được đặc tính của cây; cây con có tán lá gọn, sinh trưởng nhanh và khỏe", "Bạn Nam khuyên bác Minh có thể nhân giống đại trà để tăng năng suất và thương mại hóa"],
    ["Trong quá trình thụ phấn, nếu số lượng hạt phấn rơi trên đầu nhụy càng nhiều thì bầu càng dễ phát triển thành quả", "Trong tự nhiên, dựa vào tác nhân thụ phấn mà người ta chia thành các hình thức thụ phấn là: thụ phấn nhờ gió, thụ phấn nhờ sâu bọ côn trùng, thụ phấn nhờ nước", "Những cây thích nghi với hình thức thụ phấn nhờ gió có đầu nhụy to và nhớt dính giúp đón và giữ hạt phấn tốt", "Dựa vào nguồn gốc của hạt phấn và nhụy tham gia thụ phấn mà người ta chia thành các hình thức thụ phấn là: tự thụ phấn và thụ phấn chéo"],

];


// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    // bài 24
    [0, 1, 3], 
    [1, 2, 3], 
    [0, 3], 
    [0], 
    // bài 25
    [2, 3], 
    [0, 2], 
    [0, 2], 
    [3], 
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
        const correctIndices = correctAnswers[i];

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
        correctAnswers[i] = correctIndices.map(index => answerIndices.indexOf(index));
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

const userAnswer = new Array(questions.length).fill(null).map(() => []);
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
                if (!userAnswer[viTri].includes(idx)) {
                    userAnswer[viTri].push(idx);
                }
            } else {
                const index = userAnswer[viTri].indexOf(idx);
                if (index > -1) {
                    userAnswer[viTri].splice(index, 1);
                }
            }
            val.checked = false;
        });
        viTri = e;
        userAnswer[viTri].forEach(idx => {
            radio[idx].checked = true;
        });
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
        correctAnswers.forEach((correctAnswerIndices, idx) => {
            const userSelected = userAnswer[idx];
            if (correctAnswerIndices.every(val => userSelected.includes(val)) && userSelected.length === correctAnswerIndices.length) {
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
            correctAnswers[viTri].forEach(correctIndex => {
                answerDesc[correctIndex].style.color = "red";
            });
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

    radio.forEach((val, idx) => {
        val.addEventListener('click', () => {
            if (val.checked) {
                if (!userAnswer[viTri].includes(idx)) {
                    userAnswer[viTri].push(idx);
                }
            } else {
                const index = userAnswer[viTri].indexOf(idx);
                if (index > -1) {
                    userAnswer[viTri].splice(index, 1);
                }
            }
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
