const questions = [
    // bài 6
    "Sau khi giành độc lập, những năm 50 - 60 các nước Đông Nam Á thực hiện chiến lược nào để phát triển kinh tế?",
    "Sau khi giành độc lập, những năm 60 - 70 các nước Đông Nam Á thực hiện chiến lược nào để phát triển kinh tế?",
    "Nhóm 5 nước sáng lập ASEAN là",
    "Quốc gia nào sau đây là con rồng kinh tế châu Á?",
    "Sau khi giành được độc lập, đâu là nguyên nhân chủ yếu giúp cho các nước Đông Nam Á thành công trong công cuộc tái thiết đất nước?",
    // bài 7
    "Chiến tranh bảo vệ Tổ quốc có vai trò quan trọng",
    "Một trong những cuộc kháng chiến thắng lợi tiêu biểu của dân tộc Việt Nam trước Cách mạng tháng Tám năm 1945 là",
    "Trận quyết chiến chiến lược trong cuộc kháng chiến chống quân xâm lược Nam Hán năm 938 diễn ra tại",
    "Trận quyết chiến chiến lược trong cuộc kháng chiến chống quân xâm lược Tống thời Lý diễn ra tại",
    "Trận quyết chiến chiến lược trong cuộc kháng chiến chống quân xâm lược Thanh năm 1789 diễn ra tại",
    "Năm 938 diễn ra cuộc khởi nghĩa nào sau đây?",
    "Lãnh đạo cuộc kháng chiến chống quân xâm lược Xiêm và Thanh cuối thế kỉ XVIII là",
    "Dòng sông nào sau đây ba lần ghi danh quân dân Việt Nam chiến thắng quân xâm lược?",
    "Một trong những cuộc kháng chiến không thành công của dân tộc Việt Nam trước cách mạng tháng Tám năm 1945 là",
    "Năm 981 diễn ra cuộc khởi nghĩa nào sau đây?",
    "Nội dung nào sau đây lý giải không đúng về nhận định: “Với vị trí địa chiến lược quan trọng, trong nhiều thế kỉ, Việt Nam là quốc gia thường xuyên trở thành đối tượng nhòm nhó, can thiệp và xâm lược của các thế lực bên ngoài”?",
    "Năm 1258, trong cuộc kháng chiến chống quân Mông Cổ xâm lược, quân dân nhà Trần đã giành thắng lợi vang dội tại",
    "Năm 1285, trong cuộc kháng chiến chống quân Nguyên xâm lược, quân dân nhà Trần đã tổ chức phản công và giành thắng lợi ở",
    "Đoạn thông tin trên nhắc đến ý nghĩa lịch sử của cuộc kháng chiến nào sau đây?",
    "Nội dung nào sau đây là nguyên nhân chủ quan dẫn đến thắng lợi của các cuộc kháng chiến bảo vệ Tổ quốc của nhân dân Việt Nam trước cách mạng Tháng Tám 1945?",
    "Những câu thơ sau của thượng tướng Trần Quang Khải gợi đến cuộc kháng chiến nào sau đây?",
    "Trần Quốc Tuấn đã tổng kết nguyên nhân thắng lợi của cuộc kháng chiến chống quân Mông - Nguyên như sau: “vì vua tôi đồng tâm, anh em hòa mục, cả nước nhà góp sức, giặc phải bị bắt”. Nguyên nhân thắng lợi mà Trần Quốc Tuấn nhắc đến ở đây là",
    "Những cuộc kháng chiến nào của nhân dân ta đã ghi dấu chiến công lừng lẫy trên sông Bạch Đằng?",
    "Nội dung nào sau đây phản ánh đúng ý nghĩa của chiến thắng Bạch Đằng năm 938?",
    "“Người Xiêm từ sau cuộc bại trận năm Giáp Thìn (năm 1785), miệng tuy nói khoác mà lòng thì sợ Tây Sơn như sợ cọp” <br>  (Quốc sử quán triều Nguyễn, Đại Nam thực lục, tập 1, NXB Giáo dục, Hà Nội, 2002, trang 227, 228) <br> “Cuộc bại trận năm Giáp Thìn” của quân Xiêm là",
    "Cuộc kháng chiến nào sau đây của nhân dân ta chống lại kẻ thù xâm lược đến từ phương Tây?",
    "Năm 1075 - 1077 diễn ra cuộc khởi nghĩa nào sau đây?",
    "Chiến tranh bảo vệ Tổ quốc của ta là cuộc chiến tranh chính nghĩa. Tính chất chính nghĩa của cuộc chiến tranh được thể hiện chủ yếu thông qua",
    "Cuộc kháng chiến nào sau đây đã mở đầu truyền thống kết thúc chiến tranh một cách mềm dẻo để giữ vững hoà hiếu với nước ngoài của dân tộc ta?",
    "Một trong những nghệ thuật quân sự tiêu biểu của cuộc kháng chiến chống Tống thời Lý (1075 - 1077) là",
    "Một trong những nghệ thuật quân sự tiêu biểu của cuộc kháng chiến chống quân Thanh (1789) là",
    "Một trong những nghệ thuật quân sự tiêu biểu của cuộc kháng chiến chống quân Nam Hán (938) là",
    "Nội dung nào sau đây phản ánh không đúng nguyên nhân thắng lợi của cuộc kháng chiến chống quân Mông - Nguyên xâm lược dưới thời Trần?",
    "Dòng sông nào đã ghi dấu ấn lịch sử trong các cuộc kháng chiến chống Nam Hán, chống Tống và chống Mông - Nguyên trong lịch sử Việt Nam?",
    "Bài thơ thần “Nam Quốc Sơn Hà” được ra đời trong bối cảnh của cuộc kháng chiến nào sau đây?",
    "“Đánh cho để dài tóc. Đánh cho để đen răng. Đánh cho nó chích luân bất phản. Đánh cho nó phiến giáp bất hoàn. Đánh cho sử tri Nam quốc anh hùng chi hữu chủ” là lời hịch trong cuộc kháng chiến nào sau đây?",
    // bài 8
    "Thời kỳ Bắc thuộc ở Việt Nam bắt đầu sau thất bại của",
    "Các cuộc khởi nghĩa trong thời kỳ Bắc thuộc của nhân dân Việt Nam diễn ra trong bối cảnh nào?",
    "Cuộc khởi nghĩa nào sau đây đã mở đầu thời kì đấu tranh chống Bắc thuộc của nhân dân Việt Nam?",
    "Trong thời kì đấu tranh chống Bắc thuộc, cuộc khởi nghĩa nào của nhân dân Việt Nam đã giành được thắng lợi và lập ra nhà nước Vạn Xuân?",
    "Chức quan mà nhà Hán đặt ra để cai trị nhân dân ta là",
    "Viên tướng chỉ huy quân Hán đàn áp cuộc khởi nghĩa của Hai Bà Trưng là",
    "Cuộc khởi nghĩa Bà Triệu (năm 248) nhằm lật đổ ách thống trị của triều đại nào?",
    "Nước Vạn Xuân được thành lập (năm 544) là kết quả của cuộc khởi nghĩa nào?",
    "Chức quan mà nhà Hán đặt ra để cai trị nhân dân ta là",
    "Viên tướng chỉ huy quân Hán đàn áp cuộc khởi nghĩa của Hai Bà Trưng là",
    "Cuộc khởi nghĩa Bà Triệu (năm 248) nhằm lật đổ ách thống trị của triều đại nào?",
    "Nước Vạn Xuân được thành lập (năm 544) là kết quả của cuộc khởi nghĩa nào?",
];

const answers = [
    // bài 6
    ["Kinh tế hướng nội", "Kinh tế hướng ngoại", "Kinh tế bao cấp", "Kinh tế tập trung"],
    ["Kinh tế hướng nội", "Kinh tế hướng ngoại", "Kinh tế bao cấp", "Kinh tế tập trung"],
    ["In-đô-nê-xi-a, Ma-lai-xi-a, Phi-líp-pin, Xin-ga-po và Thái Lan", "In-đô-nê-xi-a, Ma-lai-xi-a, Phi-líp-pin, Việt Nam và Thái Lan", "In-đô-nê-xi-a, Cam-pu-chia, Phi-líp-pin, Xin-ga-po và Thái Lan", "In-đô-nê-xi-a, Ma-lai-xi-a, Mi-an-ma, Xin-ga-po và Thái Lan"],
    ["Xin-ga-po", "Thái Lan", "In-đô-nê-xi-a", "Ma-lai-xi-a"],
    ["Tinh thần tự lực, tự cường", "Sự viện trợ của đồng minh", "Tính ưu việt của chế độ", "Sự hợp tác trong ASEAN"],
    // bài 7
    ["trong việc hình thành và nâng cao lòng tự hào dân tộc.", "trong việc hình thành và phát triển truyền thống yêu nước.", "đối với sự sinh tồn và phát triển của quốc gia, dân tộc", "khơi dậy và củng cố tinh thần đoàn kết, lòng tự hào dân tộc."],
    ["kháng chiến chống quân Nam Hán thế kỉ X", "kháng chiến chống quân Triệu thế kỉ II TCN", "kháng chiến chống quân Minh thế kỉ XV", "kháng chiến chống thực dân Pháp thế kỉ XIX"],
    ["sông Bạch Đằng.", "sông Như Nguyệt.", "bến Đông Bộ Đầu.", "cửa ải Hàm Tử"],
    ["sông Bạch Đằng.", "sông Như Nguyệt.", "đồn Ngọc Hồi - Đống Đa.", "bến Đông Bộ Đầu."],
    ["sông Bạch Đằng.", "sông Như Nguyệt.", "đồn Ngọc Hồi - Đống Đa.", "cửa ải Chi Lăng"],
    ["Kháng chiến chống quân Thanh", "Kháng chiến chống quân Nguyên", "Kháng chiến chống quân Xiêm", "Kháng chiến chống quân Nam Hán"],
    ["Ngô Quyền.", "Trần Hưng Đạo.", "Lê Lợi.", "Nguyễn Huệ - Quang Trung."],
    ["Sông Đà", "Sông Bạch Đằng", "Sông Hồng", "Sông Mê - công"],
    ["kháng chiến chống quân Thanh thế kỉ XVIII", "kháng chiến chống quân Tống thế kỉ XI", "kháng chiến chống thực dân Pháp thế kỉ XIX", "kháng chiến chống quân Nam Hán thế kỉ X"],
    ["Kháng chiến chống quân Thanh", "Kháng chiến chống quân Nguyên", "Kháng chiến chống quân Xiêm", "Kháng chiến chống quân Tống lần thứ nhất"],
    ["Nằm trên tuyến đường giao thông, giao thương lâu đời và quan trọng giữa các nước lớn", "Là trung tâm kinh tế - tài chính duy nhất của thế giới, nhiều nước lớn muốn giao thương", "Là địa bàn tiền tiêu của Đông Nam Á từ phía bắc, cửa ngõ tiến vào bán đảo Trung Ấn", "Liền kề Trung Quốc, án ngữ biển Đông, là cầu nối giữa Đông Nam Á lục địa với hải đảo"],
    ["Đông Bộ Đầu.", "sông Bạch Đằng.", "Chi Lăng - Xương Giang.", "sông Như Nguyệt."],
    ["cửa Hàm Tử", "sông Như Nguyệt.", "ải Chi Lăng.", "sông Bạch Đằng"],
    ["Kháng chiến chống quân Thanh 1789", "Kháng chiến chống quân Nguyên 1258", "Kháng chiến chống quân Xiêm 1785", "Kháng chiến chống quân Nam Hán 938"],
    ["Mục đích kháng chiến của ta là chính nghĩa.", "Kẻ thù gặp khó khăn trong quá trình xâm lược", "Lực lượng quân sự của ta lớn mạnh hơn kẻ thù.", "Ta nhận được ủng hộ, giúp đỡ to lớn từ bên ngoài."],
    ["Kháng chiến chống quân Nguyên 1258", "Kháng chiến chống quân Nguyên 1285", "Kháng chiến chống quân Nguyên 1287 - 1288", "Kháng chiến chống quân Tống 1075 - 1077"],
    ["Lòng yêu nước và tinh thần đoàn kết của dân tộc", "Sự chỉ huy tài tình của các tướng lĩnh", "Những khó khăn của kẻ thù trong quá trình xâm lược", "Các cuộc kháng chiến của ta đều chính nghĩa"],
    ["Kháng chiến chống quân Nam Hán (938), kháng chiến chống quân Tống (981), kháng chiến chống quân Mông - Nguyên (1287 - 1288)", "Kháng chiến chống quân Nam Hán (938), kháng chiến chống quân Tống (981), kháng chiến chống quân Xiêm (1785)", "Kháng chiến chống quân Nam Hán (938), kháng chiến chống quân Xiêm (1785), kháng chiến chống quân Thanh (1789)", "Kháng chiến chống quân Nam Hán (938), kháng chiến chống quân Nguyên (1285), kháng chiến chống quân Thanh (1789)"],
    ["Lật đổ ách đô hộ của nhà Đường, mở ra thời đại độc lập, tự chủ của dân tộc.", "Đánh bại hoàn toàn tham vọng bành trướng của các triều đại phong kiến phương Bắc.", "Đánh bại hoàn toàn tham vọng bành trướng và ý chí xâm lược của quân Nam Hán.", "Mở đầu thời kì đấu tranh chống ách đô hộ của nhân dân ta thời Bắc thuộc."],
    ["Chi Lăng - Xương Giang", "Ngọc Hồi - Đống Đa", "Rạch Gầm - Xoài Mút", "Chương Dương, Hàm Tử"],
    ["kháng chiến chống quân Mông Cổ", "kháng chiến chống thực dân Pháp", "kháng chiến chống quân Thanh", "kháng chiến chống quân Tống"],
    ["Kháng chiến chống quân Thanh", "Kháng chiến chống quân Nguyên", "Kháng chiến chống quân Xiêm", "Kháng chiến chống quân Tống lần thứ 2"],
    ["hình thức chiến tranh.", "lực lượng tham gia.", "mục đích chiến tranh.", "thành phần lãnh đạo"],
    ["Kháng chiến chống Nam Hán thế kỉ X", "Kháng chiến chống Tống thế kỉ XI.", "Kháng chiến chống Mông - Nguyênthế kỉ XIII.", "Kháng chiến chống Xiêm thế kỉ XVIII"],
    ["vườn không nhà trống", "Chớp thời cơ", "Đóng cọc trên sông, lợi dụng thủy triều", "Tiên phát chế nhân"],
    ["vườn không nhà trống", "Chớp thời cơ", "Đóng cọc trên sông, lợi dụng thủy triều", "Tiên phát chế nhân"],
    ["Tiên phát chế nhân.", "Hành quân thần tốc.", "Vườn không nhà trống.", "Lợi dụng thủy triều."],
    ["Vua tôi nhà Trần có chính sách tích cực đúng đắn, sáng tạo.", "Nhân dân Đại Việt có tinh thần yêu nước và bền bỉ đấu tranh.", "Quân giặc yếu, chủ quan, không có người lãnh đạo tài giỏi.", "Tinh thần đoàn kết và ý chí quyết chiến của quân dân nhà Trần"],
    ["Sông Lục Nam.", "Sông Cửu Long.", "Sông Bạch Đằng.", "Sông Vàm Cỏ."],
    ["Kháng chiến chống quân Minh thời Hồ.", "Kháng chiến chống Nam Hán thời Ngô.", "Kháng chiến chống quân Tống thời Lý.", "Kháng chiến chống Thanh thời Tây Sơn."],
    ["Kháng chiến chống Nguyên thời Trần.", "Kháng chiến chống Pháp thời Nguyễn.", "Kháng chiến chống Thanh thời Tây Sơn.", "Kháng chiến chống quân Tống thời Lý."],
    // bài 8
    ["An Dương Vương (179 TCN)", "khởi nghĩa Hai Bà Trưng (43)", "khởi nghĩa Bà Triệu (248)", "khởi nghĩa Lý Nam Đế (542)"],
    ["Đất nước có độc lập, chủ quyền", "Đất nước mất độc lập, tự chủ", "Đất nước thống nhất, chủ quyền", "Nhân dân Việt Nam đã bị đồng hóa"],
    ["Hai Bà Trưng", "Bà Triệu", "Khúc Thừa Dụ", "Phùng Hưng"],
    ["Hai Bà Trưng", "Bà Triệu", "Lý Bí", "Phùng Hưng"],
    ["Thái thú", "Tổng đốc", "Tư đồ", "Giám quan"],
    ["Mã Viện", "Triệu Tiết", "Quách Quỳ", "Lý Tín"],
    ["Ngô", "Minh", "Tống", "Thanh"],
    ["Lý Bí", "Ngô Quyền", "Phùng Hưng", "Quang Trung"],
    ["Thái thú", "Tổng đốc", "Tư đồ", "Giám quan"],
    ["Mã Viện", "Triệu Tiết", "Quách Quỳ", "Lý Tín"],
    ["Ngô", "Minh", "Tống", "Thanh"],
    ["Lý Bí", "Ngô Quyền", "Phùng Hưng", "Quang Trung"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    // bài 6
    0, 1, 0, 0, 0,
    // bài 7
    2, 0, 0, 1, 2,
    3, 3, 1, 2, 3,
    1, 0, 0, 3, 0,
    1, 0, 0, 2, 2,
    1, 3, 2, 1, 3,
    1, 3, 2, 2, 2,
    2, 
    // bài 8
    0, 1, 0, 2, 0,
    0, 0, 0, 0, 0,
    0, 0, 
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
