const questions = [
    "Các cuộc khởi nghĩa trong thời Bắc thuộc của nhân dân Việt Nam diễn ra trong bối cảnh nào sau đây?",
    "Cuộc khởi nghĩa nào sau đây mở đầu thời kì đấu tranh chống Bắc thuộc của nhân dân Việt Nam?",
    "Trong thời kì đấu tranh chống Bắc thuộc, cuộc khởi nghĩa nào sau đây của nhân dân Việt Nam đã giành được thắng lợi và lập ra nhà nước Vạn Xuân?",
    "Sự kiện nào sau đây đã kết thúc hoàn toàn hơn 1000 năm đô hộ của phong kiến phương Bắc, mở ra thời kì độc lập, tự chủ lâu dài cho dân tộc Việt Nam?",
    "Khởi nghĩa Lam Sơn (1418-1427) diễn ra trong bối cảnh nào sau đây?",
    "Nội dung nào sau đây không phải là bối cảnh dẫn đến sự bùng nổ phong trào Tây Sơn?",
    "Phong trào Tây Sơn (1771-1802) bùng nổ nhằm thực hiện một trong những nhiệm vụ nào sau đây?",
    "Trong cuộc khởi nghĩa Lam Sơn, để tập hợp lực lượng đặt cơ sở cho sự hình thành hạt nhân đầu tiên, Lê Lợi đã tổ chức?",
    "Các cuộc khởi nghĩa của nhân dân Việt Nam trong thời kỳ Bắc thuộc có một trong những đặc điểm nào sau đây?",
    "Khác với các cuộc kháng chiến chống xâm lược thời Lý – Trần, khởi nghĩa Lam Sơn diễn ra trong bối cảnh nào?",
    "Nhằm tăng cường sức mạnh quân sự để đối phó với cuộc xâm lược của nhà Minh cuối thế kỉ XIV, Hồ Quý Ly đã tiến hành biện pháp nào sau đây?",
    "Năm 1400, Hồ Quý Ly buộc vua Trần nhường ngôi và lập ra triều đại nào?",
    "Công cuộc cải cách của Hồ Quý Ly và triều đại nhà Hồ không đề cập đến lĩnh vực nào sau đây?",
    "Về kinh tế - xã hội, nhằm hạn chế sự phát triển của chế độ sở hữu ruộng đất lớn trong các điền trang, thái ấp của quý tộc, Hồ Quý Ly đã làm gì?",
    "Xây dựng nhiều thành lũy kiên cố, chế tạo súng thần cơ, đóng thuyền chiến là nội dung cải cách của Hồ Quý Ly và triều Hồ về lĩnh vực nào?",
    "Các biện pháp cải cách của Hồ Quý Ly và triều Hồ đã đề cao tư tưởng, tôn giáo nào sau đây?",
    "Nội dung nào sau đây là một trong những nguyên nhân dẫn đến sự suy yếu của triều đại nhà Trần nửa sau thế kỉ XIV?",
    "Sự suy yếu của triều đại nhà Trần cuối thế kỉ XIV đã dẫn đến nguy cơ nào sau đây?",
    "Để khuyến khích và đề cao chữ Nôm, Hồ Quý Ly đã thực hiện biện pháp nào sau đây?",
    "Về kinh tế - xã hội, cuộc cải cách của Hồ Quý Ly không đề cập đến nội dung nào sau đây?",
    "Để tăng cường khả năng bảo vệ đất nước, Hồ Quý Ly đã thực hiện biện pháp nào sau đây?",
    "Năm 1483, vua Lê Thánh Tông cho ban hành bộ luật nào?",
    "Dưới thời vua Lê Thánh Tông, việc dựng bia Tiến sĩ ở Văn Miếu nhằm mục đích gì?",
    "Trọng tâm cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) là gì?",
    "Trong bộ máy chính quyền trung ương thời Minh Mạng, các cơ quan Nội các và Cơ mật viện có vai trò tư vấn cho nhà vua về lĩnh vực nào?",
    "Trong bộ máy chính quyền trung ương thời Minh Mạng, các cơ quan Nội các và Cơ mật viện có vai trò tư vấn cho nhà vua về lĩnh vực nào?",
    "Cuộc cải cách Minh Mạng (nửa đầu thế kỉ XIX) được thực hiện trong bối cảnh nào?",
    "Cuộc cải cách Minh Mạng (nửa đầu thế kỉ XIX) được thực hiện trong bối cảnh nào?",
    "Cuộc cải cách hành chính của vua Minh Mạng (nửa đầu thế kỉ XIX) nhằm mục đích gì?",
    "Cuộc cải cách hành chính của vua Minh Mạng (nửa đầu thế kỉ XIX) nhằm mục đích gì?",
];  

const answers = [
    ["Đất nước có độc lập, chủ quyền", "Đất nước mất độc lập, tự chủ", "Trung Quốc bị Mông Cổ đô hộ", "Nhân dân Việt Nam đã bị đồng hóa"],
    ["Hai Bà Trưng", "Bà Triệu", "Lý Bí", "Phùng Hưng"],
    ["Hai Bà Trưng", "Bà Triệu", "Lý Bí", "Phùng Hưng"],
    ["Khởi nghĩa Phùng Hưng lật đổ ách đô hộ của nhà Đường, giành quyền tự chủ.", "Khởi nghĩa Lý Bí chống nhà Lương thắng lợi, lập ra nhà nước Vạn Xuân.", "Trận chiến trên sông Bạch Đằng (938) do Ngô Quyền lãnh đạo thắng lợi.", "Cuộc khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo kết thúc thắng lợi hoàn toàn."],
    ["Đại Việt mất đi độc lập, tự chủ.", "Đại Việt bị nhà Minh đô hộ.", "Đại Việt bị chia cắt làm hai Đảng.", "Đại Việt có độc lập, chủ quyền."],
    ["Đại Việt mất đi độc lập, tự chủ.", "Đất nước đang bị chia cắt kéo dài.", "Nguy cơ bị các thế lực ngoại xâm dòm ngó.", "Đất nước bị khủng hoảng về kinh tế chính trị."],
    ["Giải quyết mâu thuẫn giai cấp", "Giải phóng dân tộc thoát khỏi ách đô hộ.", "Hoàn thành thống nhất đất nước.", "Bảo vệ quyền lợi dân chủ của nhân dân."],
    ["Hội nghị Binh Than.", "Hội thề Lũng Nhai.", "Hội nghị Diên Hồng.", "Hội thề Đông Quan."],
    ["Diễn ra sôi nổi, liên tục và mạnh mẽ", "Diễn ra trên phạm vi cả nước", "Diễn ra khi đất nước có độc lập", "Các cuộc khởi nghĩa đều thắng lợi"],
    ["Nước Đại Ngu đã bị nhà Minh đô hộ", "Đại Việt là quốc gia độc lập, có chủ quyền", "Nhà Minh lâm vào khủng hoảng, suy yếu.", "Nhà Nguyên lâm vào khủng hoảng, suy yếu."],
    ["Cải cách văn hóa, xã hội, giáo dục", "Xây dựng tòa thành Tây Đô kiên cố", "Buộc vua Trần nhường ngôi cho mình.", "Ban hành chính sách hạn điền, hạn nô."],
    ["Nhà Lê Sơ.", "Nhà Nguyễn", "Nhà Hồ.", "Nhà Lý."],
    ["Văn hóa – Giáo dục", "Chính trị - quân sự.", "Kinh tế - xã hội.", "Thể thao – du lịch."],
    ["Cho phát hành tiền giấy", "Ban hành chính sách hạn điền", "Cải cách chế độ giáo dục.", "Thống nhất đơn vị đo lường"],
    ["Kinh tế", "Văn hóa.", "Quân sự", "Xã hội"],
    ["Phật giáo", "Đạo giáo", "Nho giáo", "Thiên Chúa giáo"],
    ["Giặc Minh lăm le sang xâm lược, quân Chăm-pa tấn công.", "Nhà nước không quan tâm sản xuất, quan lại ăn chơi hưởng lạc.", "Chu Văn An dâng sớ chém gian thần không được chấp thuận.", "Nhà Trần tiến hành nhiều cuộc chiến tranh xâm lược tốn kém."],
    ["Đánh mất dần bản sắc văn hóa dân tộc.", "Mất độc lập, bởi sự xâm lược của phương Tây.", "Không còn khả năng bảo vệ sự an toàn đất nước.", "Các khởi nghĩa nông dân sẽ lật đổ được triều đình."],
    ["Dịch nhiều sách chữ Hán sang chữ Nôm", "Chính thức đưa văn thơ Nôm vào nội dung thi cử", "Bắt buộc tất cả sách biên soạn bằng chữ Nôm", "Mở trường dạy học hoàn toàn bằng chữ Nôm."],
    ["Ban hành tiền giấy thay thế tiền đồng", "Hạn chế sở hữu ruộng tư của quý tộc", "Thống nhất đơn vị đo lường cả nước", "Chế tạo vũ khí, thuyền chiến"],
    ["Gả các công chúa cho các tù trưởng miền núi", "Thi hành chính sách thần phục nhà Minh", "Tăng cường lực lượng quân đội chính quy", "Quan hệ hòa hiếu với Chăm-pa, Chân Lạp"],
    ["Hoàng Việt luật lệ", "Quốc triều hình luật", "Hình luật.", "Hình thư."],
    ["Khẳng định nền giáo dục Nho học của nước Đại Việt", "Ghi số lượng những người đỗ Tiến sĩ qua các kỳ thi Hội.", "Đề cao Nho học và tôn vinh những người đỗ đại khoa", "Trùng tu, mở rộng, làm mới Văn Miếu – Quốc Tử Giám"],
    ["Kinh tế", "Chính trị", "Hành chính", "Quân sự"],
    ["Kinh tế", "Hành chính", "Giáo dục", "Tài chính"],
    ["Kinh tế", "Chính trị", "Giáo dục", "Tài chính"],
    ["Đất nước vừa trải qua thời gian chiến tranh, bị chia cắt lâu dài", "Bộ máy hành chính nhà nước phong kiến cơ bản đã hoàn chỉnh", "Tình trạng phân quyền, thiếu thống nhất ở địa phương đã khắc phục", "Vua Gia Long đã tiến hành nhiều cuộc cải cách hành chính hoàn chỉnh"],
    ["Tổ chức hành chính giữa các khu vực thiếu thống nhất", "Bộ máy hành chính nhà nước phong kiến cơ bản đã hoàn chỉnh", "Tình trạng phân quyền, thiếu thống nhất ở địa phương đã khắc phục", "Vua Gia Long đã tiến hành nhiều cuộc cải cách hành chính hoàn chỉnh"],
    ["Hoàn thành cơ bản thống nhất đất nước về mặt lãnh thổ", "Tăng cường tính thống nhất và tiềm lực của đất nước", "Xóa bỏ tình trạng cát cứ của các thế lực phong kiến", "Xóa bỏ tình trạng “bế quan tỏa cảng” của đất nước."],
    ["Hoàn thành cơ bản thống nhất đất nước về mặt lãnh thổ", "Hoàn chỉnh bộ máy nhà nước từ trung ương tới địa phương", "Xóa bỏ tình trạng cát cứ của các thế lực phong kiến", "Xóa bỏ tình trạng “bế quan tỏa cảng” của đất nước."]
];


// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    1, 0, 2, 0, 1,
    0, 0, 1, 0, 0,
    0, 2, 3, 1, 2,
    2, 1, 3, 1, 3,
    2, 1, 1, 2, 1,
    1, 3, 3, 3, 1,
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
