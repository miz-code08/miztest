const questions = [
    "Đọc đoạn tư liệu sau: <br> Vào sáng ngày mồng 5 Tết, tiếng súng nổ liên hồi ở mạn tây nam làm Tôn Sĩ Nghị tỉnh giấc. Đồn Ngọc Hồi đã bị tấn công. Đang lo lắng hướng về phía đó đợi tin, Tôn Sĩ Nghị bỗng thấy lửa rực cháy ở phía Đống Đa và tiếng quân ta hò reo ngày càng gần. Y hốt hoảng, không còn biết xử trí sao nữa, đành nhảy lên “ngựa không kịp đóng yên, người không kịp mặc áo giáp” cùng một số tùy tùng chạy qua cầu phao, vượt sông Hồng lên mạn bắc. Quân sĩ thấy tướng đã chạy, bèn hùa nhau chạy theo chen chúc vượt qua cầu <br> (Trương Hữu Quýnh, Đinh Xuân Lâm, Lê Mậu Hãn, Đại cương lịch sử Việt Nam toàn tập, NXB Giáo dục, Hà Nội, 2008, tr. 42 – 423)",
    "Đọc đoạn tư liệu sau: <br> Năm 1401, mùa hạ, tháng 4, Hán Thương sai làm sổ hộ tịch trong cả nước,…. Biên hết vào sổ những nhân khẩu từ 2 tuổi trở lên và lấy sổ hiện tại làm thực số, không cho phép người lưu vong mà vẫn biên tên trong sổ. Yết thị cho các phiên trấn hễ có người Kinh nào trú ngụ thì đuổi về nguyên quán…. Trước đây Quý Ly có lần nói với các quan: “làm thế nào để có được 100 vạn quân để chống giặc Bắc?” Đồng tri khu mật sứ Hoàng Hối Khanh dâng kế sách này. <br> (Ngô Sĩ Liên và các sử thần triều Hậu Lê, Đại Việt sử kí toàn thư, NXB Khoa học xã hội, HN, 1998, tr.201)",
    "Đọc đoạn tư liệu sau: <br> Trong công cuộc cải cách bộ máy chính quyền, vua Lê Thánh Tông đã bãi bỏ nhiều cơ quan, chức quan có nhiều quyền lực. Vị trí và vai trò của các chức quan đại thần suy giảm so với trước. Mọi công việc trong triều đình tập trung về Lục bộ. Lục bộ trở thành sáu cơ quan chức năng cao cấp chủ chốt trong bộ máy triều đình, do nhà vua trực tiếp điều hành, chịu trách nhiệm trước nhà vua. Lục bộ cũng đồng thời chịu sự giám sát của Lục khoa tương ứng.",
    "Đọc đoạn tư liệu sau: <br> Từ năm 1832, đại diện của Đô sát viện, bộ Hình và Đại lý tự tạo thành Tam pháp ty – cơ quan chuyên nhận đơn của những người kêu oan, tố cáo, đồng thời thẩm tra, xét xử những việc oan ức. Hàng tháng, vào các ngày 6, 16, 26 âm lịch, Tam pháp ty họp để xét xử. Nếu không đúng những ngày đó, người đưa đơn có thể đến trước của Tam pháp ty đánh trống Đăng Văn để báo hiệu. Trống Đăng Văn đã phát huy được chức năng trong việc tạo điều kiện cho dân chúng thể hiện tiếng nói của mình mỗi khi bị kết án oan. Đồng thời, sự tồn tại của trống Đăng Văn đã phần nào hạn chế sự chuyên quyền, độc đoán và thói ức hiếp dân chúng của một số quan lại địa phương, thể hiện được sự nghiêm minh của pháp luật thời bấy giờ.",
];

const answers = [
    ["Thắng lợi của nghĩa quân Lam Sơn trong cuộc kháng chiến chống quân Thanh", "Thắng lợi quân sự diễn ra ở Ngọc Hồi, Đống Đa", "Tôn Sĩ Nghị là vị tướng chỉ huy quân Thanh", "Đoạn trích phản ánh tinh thần đoàn kết của quân ta trong các trận quyết chiến chiến lược"],
    ["Cải cách của Hồ Quý Ly trên lĩnh vực văn hóa, tư tưởng", "Làm sổ hộ tịch giúp chấn chỉnh tình trạng khai man hoặc ẩn lậu dân đinh", "Chính sách giúp nhà Hồ tuyển lựa quân với số lượng lớn", "Sổ hộ tịch vừa phục vụ an sinh xã hội vừa phục vụ quốc phòng"],    
    ["Cải cách của vua Lê Thánh Tông trên các lĩnh vực hành chính, quân đội, luật pháp", "Nhà vua trực tiếp điều hành mọi việc thông qua Lục bộ, không thông qua bộ phận trung gian", "Lê Thánh Tông thành lập Lục khoa để giám sát Lục bộ", "Nhiều chức quan đại thần bị suy giảm quyền hành do cải cách"],    
    ["Phản ánh sự bất cập, hạn chế trong xử lý hình án thời Nguyễn", "Tam pháp ty được tạo nên bởi Đô sát viện, bộ Hình và Đại lý tự", "Trống Đăng Văn là biểu tượng dân chủ dưới triều Nguyễn", "Tam pháp ty chuyên nhận đơn kêu oan và họp xét xử vào ngày cố định"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    [1], 
    [1, 2, 3], 
    [1, 2, 3], 
    [1, 2, 3], 
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
