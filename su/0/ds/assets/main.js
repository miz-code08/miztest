const questions = [
    "Đọc đoạn tư liệu sau đây: <br> “Hàng năm, nhân dân huyện đảo Lý Sơn, tỉnh Quảng Ngãi tổ chức Lễ khao lề thế lính Hoàng Sa nhằm tri ân, tưởng niệm những người lính của Đội Hoàng Sa kiêm quản Bắc Hải (được thành lập từ thế kỉ XVII) đã có công khai mở, cắm mốc chủ quyền và bảo vệ biển đảo. Ngoài ý nghĩa tri ân, nghi lễ này còn phản ánh lịch sử bảo vệ chủ quyền biển đảo của Việt Nam, đặc biệt là chủ quyền đối với quần đảo Hoàng Sa và quần đảo Trường Sa.”",
    "Đọc đoạn tư liệu sau đây: <br> “Biển Đông có vị trí quan trọng trong giao thông hàng hải quốc tế. Khu vực này tập trung các tuyến đường biển chiến lược kết nối Thái Bình Dương - Ấn Độ Dương, châu Âu - châu Á, Trung Đông - Đông Á. 5 trong số 10 tuyến đường vận tải biển trọng yếu của thế giới liên quan đến Biển Đông. Giao thông đường biển trong khu vực này nhộn nhịp vào hàng thứ hai thế giới, với nhiều tàu có trọng tải trên 5000 tấn, trong số đó phần lớn là tàu chở dầu. Khu vực Biền Đông có nhiều eo biển quan trọng như; eo Đài Loan, Ba-si, Ga-xpa, Ka-li-man-tan và đặc biệt là Ma-lắc-ca.”",
    "Đọc đoạn tư liệu sau đây: <br> “Biển Đông là nơi cư trú của 12 nghìn loài sinh vật, trong đó có khoảng 2040 loài cá, 350 loài san hô, 662 loài rong biển, 12 loài có vú [….]. Trong khu vực này, tập trung 221 loài cây nước mặn tạo nên diện tích rừng ngập mặn tương đối lớn. Khu vực thềm lục địa của biển Đông có tiềm năng dầu khí cao như bồn trũng Bru – nây, Nam Côn sơn, Hoàng Sa,…” <br>    (Nguyễn Văn Âu, Địa lí tự nhiên Biển Đông, NXB Đại học Quốc gia Hà Nội, 2002, tr.33, 71 – 72)",
    "Đọc đoạn tư liệu sau đây: <br> Nhà nước Việt Nam đã nhiều lần công bố “Sách trắng” (năm 1979, 1981, 1988) về chủ quyền của Việt Nam đối với hai quần đảo Hoàng Sa, Trường Sa, khẳng định hai quần đảo Hoàng Sa, Trường Sa là một bộ phận không thể tách rời của lãnh thổ Việt Nam, Việt Nam có đầy đủ chủ quyền đối với hai quần đảo này, phù hợp với các quy định của luật pháp và thực tiễn quốc tế. <br> Ngày 14 – 3 – 1988, Bộ Ngoại giao nước Cộng hòa xã hội chủ nghĩa Việt Nam ra tuyên bố lên án Trung Quốc gây xung đột vũ trang tại Trường Sa và khẳng định chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa. Tháng 4 – 2007, Chính phủ Việt Nam quyết định thành lập thị trấn Trường Sa, xã Song Tử Tây và xã Sinh Tồn thuộc huyện Trường Sa. <br> (Chủ quyền của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa, NXB Chính trị quốc gia, 2013, tr.46).",
];

const answers = [
    ["Nhân dân đảo Lý Sơn (Quảng Nam) tổ chức lễ tri ân những người lính Hoàng Sa", "Những người lính Hoàng Sa đã có công lớn trong việc xác lập chủ quyền biển đảo", "Trong quá trình xác lập chủ quyền, tranh chấp chủ yếu của Việt Nam là Trung Quốc", "Trung Quốc thường xuyên có tuyên bố chủ quyền rất phi lý và không thuyết phục"],
    ["Biển Đông là một bộ phận của Thái Bình Dương và nằm ở rìa Tây của đại dương này", "Biển Đông là con đường hàng hải huyết mạch của thế giới vì có vị trí địa lý thuận lợi", "Tất cả các nước ở châu Á đều có lợi ích liên quan trực tiếp đến khu vực biển Đông", "Vì có vị trí chiến lược, biển Đông từ sớm đã trở thành nơi tranh chấp của các nước"],
    ["Đoạn trích cung cấp thông tin về nguồn tài nguyên thiên nhiên phong phú ở Biển Đông", "Nguồn tài nguyên sinh vật ở Biển Đông rất phong phú đa dạng, nhưng chỉ có động vật mà không có thực vật", "Dầu khí là một trong những nguồn tài nguyên khoáng sản đặc biệt quan trọng ở Biển Đông", "Nguồn dầu khí ở Biển Đông chỉ có thể được khai thác ở 3 địa điểm: bồn trũng Bru – nây, Nam Côn sơn, Hoàng Sa"],
    ["Việt Nam đã nhiều lần công bố “Sách trắng”, để khẳng định chủ quyền của Việt Nam đối với quần đảo Hoàng Sa và Trường Sa", "Quần đảo Trường Sa thuộc chủ quyền của Việt Nam nhưng đã từng bị Trung Quốc gây xung đột vũ trang nhằm xâm chiếm", "Trong Tuyên bố của mình năm 1988, Bộ Ngoại giao Việt Nam khẳng định sẽ đáp trả về quân sự đối với hành động gây xung đột vũ trang của Trung Quốc tại quần đảo Trường Sa", "Một trong những biện pháp để bảo vệ chủ quyền đối với quần đảo Trường Sa của Việt Nam là thành lập các đơn vị hành chính tại quần đảo này"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    [2, 3], 
    [0, 1, 3], 
    [0, 2], 
    [0, 1, 3], 
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
