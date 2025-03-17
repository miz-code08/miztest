const questions = [
    "Đọc đoạn tư liệu sau: Cuộc khởi nghĩa Tây Sơn là cuộc nông dân khỏi nghĩa duy nhất trong thời phong kiến Việt Nam đã đánh bại kẻ thù trong và ngoài nước (…) Phong trào đã lật đổ nền thống trị của các tập đoàn phong kiến phản động, kết thúc tình trạng phân chia đất nước kéo dài trên hai thế kỉ, đánh tan quân xâm lược Xiêm và Thanh, đặt cơ sở cho công cuộc khôi phục quốc gia thống nhất sau này",
    "Đọc đoạn tư liệu sau: Vào sáng ngày mồng 5 Tết, tiếng súng nổ liên hồi ở mạn tây nam làm Tôn Sĩ Nghị tỉnh giấc. Đồn Ngọc Hồi đã bị tấn công. Đang lo lắng hướng về phía tây đô đợi tin, Tôn Sĩ Nghị bỗng thấy lửa rực cháy ở phía Đống Đa và tiếng quân ta hò reo ngày càng gần. Y hốt hoảng, không còn biết xử trí sao nữa đành nhảy lên 'ngựa không kịp đóng yên, người không kịp mặc áo giáp' cùng một số tùy tùng chạy qua cầu phao, vượt sông Hồng lên mạn bắc. Quân sĩ thấy tướng đã chạy, bèn hùa nhau chạy theo chen chúc vượt qua cầu.",
    "Đọc đoạn tư liệu sau: Năm 1397, Hồ Quý Ly chủ trương mở trường học ở các châu, phủ, cử các quan Giáo thụ trông coi, đôn đốc việc học tập. Nhà nước quy định số lượng ruộng đất cấp để sử dụng việc học ở các địa phương gọi là Học điền. Tùy theo quy mô từng địa phương mà số lượng ruộng đất cấp từ 12 đến 15 mẫu. Năm 1404, trong các kì thi Hương có thêm kì thi môn làm tính và môn toán, thành ra 5 kì thi. Nhà nước giao trách nhiệm cho các quan, các lộ, phủ, châu phải tuyển chọn được người giỏi đưa vào triều sát hạch để bồi dưỡng.",
    "Đọc đoạn tư liệu sau: Về văn hóa, tư tưởng, cải cách của Hồ Quý Ly thể hiện tinh thần phát huy văn hóa dân tộc, đề cao chữ Quốc ngữ (chữ Nôm), đồng thời bài bác tư tưởng các thánh hiền Trung Quốc mà gần như toàn thế giới nho sĩ bây giờ vẫn coi là bất khả xâm phạm. Về Giáo dục, nội dung cải cách thể hiện tinh thần yêu nước, tính đại chúng và gắn bó với cuộc sống.",
    "Đọc đoạn tư liệu sau: Tháng 9 năm 1832, Minh Mạng lập ra Đô sát viện. Nhiệm vụ của Đô sát viện là giám sát hoạt động của các quan chức trong hệ thống cơ quan hành chính từ trung ương đến địa phương. Đây là một cơ quan hoạt động độc lập, không chịu sự kiểm soát của bất kì một cơ quan nào ở triều đình ngoài nhà vua. Các quan chức của Đô sát viện có nhiệm vụ phối hợp với các Giám sát ngự sử 16 đạo để hoạt động kiểm soát và kiểm tra công việc của bộ máy quan lại ở địa phương.",
];

const answers = [
    ["Đoạn trích phản ánh đóng góp của phong trào Tây Sơn đối với lịch sử dân tộc thế kỉ XVIII", 
        "Khởi nghĩa Tây Sơn là cuộc khởi nghĩa nông dân duy nhất trong lịch sử phong kiến Việt Nam", 
        "Một trong những công lao to lớn của phong trào Tây Sơn là lật đổ các tập đoàn phong kiến phản động, thống nhất hoàn toàn quốc gia", 
        "Khởi nghĩa Tây Sơn đã đánh tan quân xâm lược đến từ phương Tây, bảo vệ vững chắc độc lập dân tộc"],

    ["Đoạn trích phản ánh thắng lợi của nghĩa quân Lam Sơn trong cuộc kháng chiến chống quân Thanh", 
        "Thắng lợi quân sự được nhắc đến trong đoạn trích diễn ra ở Ngọc Hồi, Đống Đa", 
        "Tôn Sĩ Nghị là vị tướng chỉ huy của quân ta trong cuộc kháng chiến chống quân Thanh", 
        "Đoạn trích chủ yếu nhằm phản ánh tinh thần đoàn kết của quân ta trong các trận quyết chiến lược với kẻ thù"],

    ["Hồ Quý Ly nhận thức đúng về vai trò của giáo dục đối với sự phát triển của đất nước", 
        "Cải cách về giáo dục của Hồ Quý Ly chưa chú trọng tới việc đề cao tinh thần yêu nước, ý thức tự cường của dân tộc", 
        "Nhà Hồ là triều đại đầu tiên đưa Toán học vào nội dung thi cử", 
        "Nhà Hồ là triều đại đầu tiên đưa Khoa cử là phương thức tuyển chọn quan lại chủ yếu"],

    ["Đoạn trích đề cập đến cải cách của Hồ Quý Ly trên tất cả mọi lĩnh vực", 
        "Cải cách về văn hóa, tư tưởng của Hồ Quý Ly thể hiện nhiều điểm tích cực, tiến bộ", 
        "Về chữ viết, Hồ Quý Ly đề cao và khuyến khích sử dụng chữ Hán, đồng thời vẫn cho phép người dân được sử dụng chữ Nôm trong sáng tác thơ văn", 
        "Một trong những ưu điểm trong cải cách của Hồ Quý Ly là nội dung giáo dục thể hiện tinh thần yêu nước, mang tính quần chúng sâu sắc"],

    ["Đô sát viện là một cơ quan chủ chốt của triều đình phong kiến trung ương được vua Minh Mạng thành lập thế kỉ XVIII", 
        "Đô sát viện là cơ quan chỉ chịu sự kiểm soát và giám sát duy nhất của nhà vua", 
        "Đô sát viện có nhiệm vụ giám sát các cơ quan, quan lại các cấp từ trung ương đến địa phương", 
        "Trong việc kiểm tra, giám sát công việc của bộ máy quan lại ở địa phương, Đô sát viện hoạt động độc lập với các Giám sát ngự sử 16 đạo"],
]; 

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    [0, 3], 
    [0, 1], 
    [0, 2], 
    [1, 3], 
    [0, 2], 
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
