const questions = [
    "Cảm ứng của sinh vật là gì?",
    "Vận động hướng động của thực vật là phản ứng của",
    "Các dây leo cuốn quanh cây gỗ là kiểu hướng động nào?",
    "Khi nói về đặc điểm của cảm ứng ở thực vật, phát biểu nào sau đây đúng?",
    "Đặc điểm nào đúng khi nói về tính hướng sáng của thực vật?",
    "Khi nói về cảm ứng ở thực vật, phản ứng nào sau đây được gọi là hướng động?",
    "Phát biểu nào đúng khi nói về ứng động sinh trưởng?",
    "Ứng động không sinh trưởng là kiểu ứng động:",
    "Hướng động là",
    "Khi nhận xét về tính cảm ứng của thực vật và của động vật, phát biểu nào sau đây sai?",
    "Khi được chiếu sáng từ 1 phía đối với cây trồng, nguyên nhân nào làm cho ngọn cây hướng về phía ánh sáng?",
    "Hướng động có đặc điểm gì khác so với ứng động ở thực vật?",
    "Trồng cây trong một hộp kín có khoét một lỗ tròn. Sau thời gian ngọn cây mọc vươn về phía ánh sáng. Đây là thí nghiệm chứng minh loại hướng động nào?",
    "Dựa vào sự vận động hướng động nào sau đây mà người ta tưới nước ở rãnh làm rễ vươn rộng, nước thấm sâu, rễ đâm sâu?",
    "Người ta làm thí nghiệm như sau: lấy một bình thủy tinh hay nhựa trắng có đất vườn, ngăn ở giữa bằng một miếng kính (gỗ mỏng, nhựa cứng), một bên đất khô, một bên thì tưới ẩm. Đặt hạt nảy mầm ở phía trên miệng bình theo dõi rễ mọc về phía đất ẩm, thí nghiệm này chứng minh kiểu hướng động nào của cây?",
    "Người ta làm thí nghiệm như sau: lấy một bình thủy tinh hay nhựa trắng có đất vườn, ngăn ở giữa bằng một miếng kính (gỗ mỏng, nhựa cứng), một bên bón phân đạm, một bên thì không bón phân. Đặt hạt nảy mầm ở phía trên miệng bình theo dõi sự phân bố của hệ rễ. Theo em rễ mọc nhiều về phía nào?",
    "Người ta làm thí nghiệm như sau: lấy một bình thủy tinh hay nhựa trắng có đất vườn, ngăn ở giữa bằng một miếng kính (gỗ mỏng, nhựa cứng), một bên bón phân đạm, một bên thì không bón phân. Đặt hạt nảy mầm ở phía trên miệng bình theo dõi sự phân bố của hệ rễ. Theo em rễ mọc nhiều về phía nào?",
    "Con người vận dụng ứng động vào trong sản xuất trồng trọt để làm gì?"
];

const answers = [
    ["Là phản ứng của sinh vật đối với kích thích từ môi trường.", "Là phản ứng của thực vật đối với kích thích từ môi trường.", "Là phản ứng của thực vật đối với ánh sáng.", "Là phản ứng của thực vật đối phân bón."],
    ["Cây trước tác nhân kích thích theo nhiều hướng xác định.", "Cây trước tác nhân kích thích không định hướng.", "Cơ quan thực vật trước tác nhân kích thích từ một hướng xác định.", "Cây trước tác nhân kích thích theo mọi hướng."],
    ["Hướng đất.", "Hướng tiếp xúc.", "Hướng sáng.", "Hướng nước."],
    ["Phản ứng nhanh, hình thức đa dạng, dễ nhận thấy.", "Phản ứng nhanh, hình thức đa dạng, khó nhận thấy.", "Phản ứng chậm, hình thức ít đa dạng, dễ nhận thấy.", "Phản ứng chậm, hình thức ít đa dạng, khó nhận thấy."],
    ["Rễ cây hướng tránh nguồn ánh sáng, thân cây hướng theo chiều ngược lại.", "Rễ cây hướng vào lòng đất nơi có nguồn phân bón, thân cây hướng về ánh sáng.", "Rễ cây hướng vào lòng đất nơi có nguồn nước, ngọn cây thì hướng về phía ánh sáng.", "Rễ cây hướng vào lòng đất, thân cây thì hướng ngược lại."],
    ["Bắt côn trùng của cây nắp ấm.", "Vận động nở hoa của cây hoa hướng dương.", "Ngọn cây hướng về phía có ánh sáng.", "Vận động cụp lá của cây trinh nữ."],
    ["Vận động nở hoa có sự cảm ứng của nhiệt độ và ánh sáng.", "Vận động bắt mồi của cây nắp ấm.", "Sự đóng mở của lá cây trinh nữ khí khổng đóng mở.", "Vận động bắt mồi của cây gọng vó."],
    ["Có sự phân chia và lớn lên của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước).", "Không có sự phân chia và lớn lên của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước).", "Không có sự chết đi của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước).", "Có sự chết đi nhanh chóng của các tế bào (liên quan chủ yếu đến hiện tượng sức trương nước)."],
    ["Vận động của rễ hướng về lòng đất.", "Hướng mà cây sẽ cử động vươn đến.", "Cử động sinh trưởng cây về phía có ánh sáng.", "Vận động sinh trưởng của cây trước tác nhân kích thích của môi trường."],
    ["Cảm ứng của thực vật thường diễn ra chậm.", "Cảm ứng của thực vật biểu hiện chủ yếu bằng các cử động dinh dưỡng hoặc sinh trưởng.", "Cảm ứng của động vật diễn ra nhanh hơn của thực vật.", "Tất cả cảm ứng của động vật còn gọi là phản xạ."],
    ["Auxin phân bố không đều ở hai phía, phía được chiếu sáng thì nhiều auxin hơn.", "Auxin phân bố nhiều hơn về phía không được chiếu sáng, tế bào sinh trưởng nhanh hơn.", "Auxin phân bố ở phía được chiếu sáng nhiều hơn, tế bào sinh trưởng nhanh hơn.", "Auxin phân bố nhiều hơn về phía không được chiếu sáng, ức chế tế bào sinh trưởng."],
    ["Có nhiều tác nhân kích thích từ môi trường.", "Liên quan đến sự phân chia tế bào.", "Phản ứng của cây với tác nhân kích thích từ 1 hướng xác định.", "Phản ứng của cây với tác nhân kích thích của môi trường."],
    ["Hướng sáng.", "Hướng sáng âm.", "Hướng sáng âm.", "Hướng sáng và hướng gió."],
    ["Hướng sáng dương.", "Hướng nước dương.", "Hướng hóa dương.", "Hướng đất dương."],
    ["Hướng nước.", "Hướng nước âm.", "Hướng phân bón.", "Hướng hóa."],
    ["Phía có bón phân đạm.", "Phía không được bón phân đạm.", "Phía có nhiều nước.", "Phía được chiếu sáng."],
    ["Phía có bón phân đạm.", "Phía không được bón phân đạm.", "Phía có nhiều nước.", "Phía được chiếu sáng."],
    ["1.", "2.", "3.", "4."]
];      

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    0, 2, 1, 3, 0,
    2, 0, 1, 3, 3,
    1, 2, 0, 1, 0,
    0, 0, 2,
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
