const questions = [
    "Các hình thức sinh sản ở thực vật gồm có",
    "Trong sinh sản sinh dưỡng ở thực vật, cây con được tạo ra",
    "Thụ phấn là quá trình",
    "Sinh sản bằng bào tử ở thực vật là hình thức sinh sản mà cơ thể mới được phát triển từ",
    "Hình thức sinh sản bằng bào tử là một giai đoạn trong vòng đời của một số loài thực vật như",
    "Các phương pháp nhân giống vô tính ở thực vật gồm",
    "Qúa trình sinh sản hữu tính ở thực vật có hoa gồm ba giai đoạn kế tiếp nhau",
    "Kỹ thuật nhân giống mà cây con tạo được bằng cách thúc đẩy hình thành rễ từ vết khoanh vỏ một cành bánh tẻ trên cây mẹ là phương pháp",
    "…… là phương pháp được thực hiện dựa trên công nghệ nuôi cấy mô, tế bào thực vật. Dấu “…” sẽ là",
    "Khi nói về ưu điểm của phương pháp nuôi cấy mô, có bao nhiêu nhận định sau đây đúng? <br> 1. Nhân nhanh số lượng cây giống lớn. <br> 2. Phục chế được các giống cây quý. <br> 3. Tạo ra các giống cây mới có năng suất cao hơn cây mẹ. <br> 4. Duy trì tính trạng tốt của cây mẹ.",
    "Dựa trên các phương pháp nhân giống vô tính ở thực vật. Có bao nhiêu phát biểu sau đây đúng về ưu và nhược điểm? <br> I. Phương pháp giâm cành có ưu điểm tạo được số lượng lớn cây con có chất lượng đồng đều trong thời gian ngắn. <br> II. Phương pháp chiết cành có ưu điểm tỉ lệ sống của cây con cao (có thể lên tới 100%), cây thấp, tán lá gọn, sinh trưởng nhanh. <br> III. Phương pháp ghép cành có ưu điểm giữ được các đặc tính của giống muốn nhân. <br> IV. Phương pháp nuôi cấy mô có ưu điểm tạo ra số lượng lớn các giống cây trồng có năng suất cao, chất lượng tốt, thích nghi với điều kiện sinh thái nhất định, chống chịu tốt với nhiều loại sâu bệnh, ...",
    "Khi tìm hiểu các giống cây trồng ở địa phương được nhân giống bằng hình thức hữu tính. Có bao nhiêu phát biểu sau đây đúng? <br> I. Lúa là loại cây trồng được nhân giống bằng phương pháp giao phối tự nhiên giữa các cây khác nhau. <br> II. Việc lai tạo các giống lúa mới giúp tăng cường sức đề kháng và năng suất của lúa. <br> III. Bông là loại cây trồng chủ yếu để sản xuất sợi bông và được nhân giống bằng phương pháp lai tạo giữa các giống khác nhau. <br> IV. Cao su cũng được nhân giống bằng phương pháp lai tạo giữa các giống khác nhau để tạo ra những giống mới có năng suất và chất lượng tốt hơn.",
    "Khi nói đến sinh sản hữu tính so với sinh sản vô tính ở thực vật. Có bao nhiêu phát biểu sau đây đúng? <br> I. Tạo ra được nhiều biến dị tổ hợp làm nguyên liệu cho chọn giống và tiến hóa. <br>  <br> II. Duy trì ổn định những tính trạng tốt về mặt di truyền. <br> III. Có khả năng thích nghi với những điều kiện môi trường biến đổi. <br> IV. Là hình thức sinh sản phổ biến.",
];

const answers = [
    ["sinh sản sinh dưỡng và sinh sản bào tử", "sinh sản bằng rễ và bằng thân và bằng lá", "sinh sản bằng hạt và sinh sản bằng chồi", "sinh sản vô tính và sinh sản hữu tính"],
    ["từ các bộ phận sinh dưỡng khác nhau của cây mẹ", "chỉ từ một phần thân của cây", "chỉ từ rễ của cây", "chỉ từ lá của cây"],
    ["hạt phấn phát tán và rơi trên núm nhụy", "vận chuyển hạt phấn từ nhụy đến núm nhị", "hợp nhất nhân giao tử đực và nhân tế bào trứng", "hợp nhất giữa nhị và nhụy"],
    ["bào tử (2n)", "hợp tử (2n)", "bào tử (n)", "giao tử (n)"],
    ["rêu, củ khoai tây", "rêu, dương xỉ", "dương xỉ, lá cây thuốc bỏng", "cây rau má, củ khoai tây"],
    ["giâm cành, chiết cành, ghép, nhân giống in vitro", "giâm cành, chiết cành, ghép", "giâm cành, ghép, nhân giống in vitro", "giâm cành, chiết cành, nhân giống in vitro"],
    ["hình thành hạt và quả, thụ phấn và thụ tinh, hình thành hạt phấn và túi phôi", "thụ phấn và thụ tinh, hình thành hạt phấn và túi phôi, hình thành hạt và quả", "hình thành hạt phấn và túi phôi, hình thành hạt và quả, thụ phấn và thụ tinh", "hình thành hạt phấn và túi phôi, thụ phấn và thụ tinh, hình thành hạt và quả"],
    ["chiết cành", "giâm cành", "ghép", "nhân giống in vitro"],
    ["chiết cành", "giâm cành", "ghép", "nhân giống in vitro"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
];


const correctAnswers = [
    3, 0, 0, 2, 1,
    0, 3, 0, 3, 2,
    3, 3, 2, 
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
