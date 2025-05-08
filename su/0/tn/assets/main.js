const questions = [
    "Bộ luật được biên soạn dưới thời Lê Thánh Tông là",
    "Đơn vị hành chính nhỏ nhất thời Lê sơ là",
    "Những năm 60 của thế kỷ XV, vua Lê Thánh Tông tiến hành một cuộc cải cách trong nhiều lĩnh vực, trọng tâm là",
    "Trong lĩnh vực văn hóa, Lê Thánh Tông đặc biệt đề cao hệ tư tưởng",
    "Năm 1471, vua Lê Thánh Tông cho lập thêm đạo thừa tuyên thứ 13 có tên gọi là",
    "Về vị trí địa lý, biển Đông được coi là cầu nối giữa Thái Bình Dương và",
    "Biển Đông là vùng biển chung của 9 quốc gia ở châu Á, trong đó có",
    "Khu vực nào của Việt Nam không giáp với Biển Đông?",
    "Nội dung nào sau đây phản ánh đúng tầm quan trọng của Biển Đông về quốc phòng, an ninh đối với Việt Nam?",
    "Biển Đông nước ta góp phần quan trọng vào việc phát triển các ngành kinh tế trọng điểm, ngoại trừ",
    "Hiện nay, quần đảo Hoàng Sa trực thuộc quyền quản lý hành chính của",
    "Nội dung nào sau đây phản ánh đúng tầm quan trọng của quần đảo Hoàng Sa và Trường Sa đối với Việt Nam về mặt quốc phòng – an ninh?",
    "Về quốc phòng, an ninh, tầm quan trọng của Biển Đông đối với Việt Nam được thể hiện ở điểm nào sau đây?",
    "Với vị trí địa lý và tài nguyên phong phú của Biển Đông, Việt Nam có thể khai thác phát triển nhiều ngành mũi nhọn, ngoại trừ",
    "Cảnh quan ở Biển Đông đa dạng với nhiều bãi cát, vịnh, hang động, tạo điều kiện cho Việt Nam phát triển nghành kinh tế mũi nhọn nào sau đây?",
    "Một trong những nguồn tài nguyên quan trọng nhất ở thềm lục địa Việt Nam ở Biển Đông là",
    "Nguồn tài nguyên phong phú của Biển Đông đã tạo điều kiện thuận lợi để Việt Nam phát triển ngành",
    "Quốc gia đầu tiên khai phá, xác lập chủ quyền và quản lý liên tục đối với quần đảo Trường Sa và Hoàng Sa là",
    "Một trong những công trình sử học và địa lí ghi chép về cương vực, lãnh thổ và hoạt động thực thi, bảo vệ chủ quyền của nhà nước phong kiến Việt Nam ở quần đảo Hoàng Sa, quần đảo Trường Sa là",
    "Từ thế kỉ XVII đến thế kỉ XIX, tổ chức nào sau đây có nhiệm vụ đến khai thác sản vật, thực thi chủ quyền tại quần đảo Hoàng Sa và Trường Sa?",
    "Dưới thời vua Minh Mạng, hoạt động khẳng định chủ quyền đối với quần đảo Hoàng Sa và Trường Sa được thể hiện qua việc",
    "Dưới thời kì nhà Nguyễn, một trong những biện pháp của Nhà nước nhằm xác lập chủ quyền và quản lý đối với hai quần đảo Hoàng Sa và Trường Sa là",
    "Nội dung nào sau đây không phản ánh đúng nhiệm vụ của hải đội Hoàng Sa và Bắc Hải dưới triều Nguyễn?",
    "Trong những năm 30 của thế kỉ XX, chính quyền Pháp đại diện cho Việt Nam trong quan hệ đối ngoại đã khẳng định chủ quyền của Việt Nam đối với quần đảo Hoàng Sa và Trường Sa thông qua việc",
    "Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam đã khẳng định chủ quyền của Việt Nam đối với quần đảo Hoàng Sa và Trường Sa thông qua việc",
    "Từ cuối thế kỉ XIX đến năm 1945, quốc gia nào đại diện cho quyền lợi của Việt Nam tiếp tục khẳng định chủ quyền đối với quần đảo Hoàng Sa và Trường Sa?",
    "Sau khi Pháp rút khỏi Việt Nam theo Hiệp định Giơnevơ (1954), lực lượng nào sau đây đã tiếp quản và khẳng định chủ quyền đối với quần đảo Hoàng Sa và Trường Sa?",
    "Nhằm bảo vệ và thực thi chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông, biện pháp nào sau đây không được nhà nước Việt Nam áp dụng?",
    "Nội dung nào sau đây không phải là hoạt động của Việt Nam để bảo vệ chủ quyền biển đảo hiện nay?",
    "Chủ trương nhất quán của nước Cộng hòa xã hội chủ nghĩa Việt Nam trong việc giải quyết các tranh chấp ở Biển Đông hiện nay là",
    "Văn kiện nào sau đây được kí kết giữa các nước ASEAN và Trung Quốc nhằm duy trì hòa bình và ổn định ở Biển Đông?",
    "Văn kiện nào sau đây do Nhà nước Việt Nam ban hành, khẳng định chủ quyền của nước ta đối với quần đảo Hoàng Sa và Trường Sa?",
    "Hệ thống các cảng nước sâu và cảng trung bình được xây dựng dọc Biển Đông là điều kiện thuận lợi cho Việt Nam phát triển ngành kinh tế chủ yếu nào sau đây?",
    "Đặc điểm chung về vị trí địa lý của quần đảo Hoàng Sa và Trường Sa là",
    "Hiện nay, quần đảo Trường Sa trực thuộc quyền quản lí hành chính của",
    "Đảo nào sau đây thuộc đảo tiền tiêu?",
];

const answers = [
    ["Hình thư", "Hình luật", "Hồng Đức", "Gia Long"],
    ["phủ", "huyện", "châu", "xã"],
    ["kinh tế", "giáo dục", "hành chính", "văn hóa"],
    ["Phật giáo", "Đạo giáo", "Nho giáo", "Thiên chúa giáo"],
    ["Hà Nội", "Phú Xuân", "Quảng Nam", "Tây Đô"],
    ["Bắc Băng Dương", "Ấn Độ Dương", "Đại Tây Dương", "Địa Trung Hải"],
    ["Trung Quốc", "Lào", "Ấn Độ", "Nhật Bản"],
    ["Tây Bắc", "Đông Bắc", "Tây Nam", "Đông Nam"],
    ["Tạo điều kiện thuận lợi phát triển kinh tế biển đa dạng", "Là cửa ngõ, tuyến phòng thủ bảo vệ đất liền từ xa", "Là con đường giao thương giữa các vùng trong cả nước", "Tạo thuận lợi cho Việt Nam phát triển thương mại hàng hải"],
    ["nông nghiệp trồng lúa nước", "thương mại hàng hải", "nuôi trồng thủy sản", "du lịch - dịch vụ"],
    ["thành phố Đà Nẵng", "tỉnh Bà Rịa – Vũng Tàu", "tỉnh Cà Mau", "tỉnh Khánh Hòa"],
    ["Xây dựng các trạm thông tin, dừng chân, tiếp nhiên liệu cho các tàu", "Hình thành tuyến phòng thủ nhiều tầng, từ xa đến gần bảo vệ đất liền", "Tạo thế mạnh cho dịch vụ hàng hải và đánh bắt hải sản trong khu vực", "Giúp xây dựng các khu bảo tồn, trung tâm nghiên cứu sinh vật biển"],
    ["Là nơi có trữ lượng dầu khí lớn nhất thế giới", "Là nơi có nguồn tài nguyên sinh vật đa dạng", "Là khu vực tập trung các tuyến đường chiến lược", "Là tuyến phòng thủ từ phía đông của đất nước"],
    ["giao thông hàng hải", "du lịch biển", "công nghiệp khai khoáng", "chăn nuôi gia cầm"],
    ["Khai khoáng", "Du lịch", "Thương mại", "Hàng hải"],
    ["dầu khí", "gỗ lim", "cánh kiến", "đồi mồi"],
    ["dệt may", "khai khoáng", "hàng không", "da giầy"],
    ["Việt Nam", "Trung Quốc", "Thái Lan", "Campuchia"],
    ["Đại Nam thực lục", "Hịch tướng sĩ", "Bình Ngô đại cáo", "Ức Trai thi tập"],
    ["Đội Hoàng Sa, Bắc Hải", "Đội Trường Sa, Bắc Hải", "Đội Hoàng Sa, Trường Sa", "Đội Nam Hải, Đông Hải"],
    ["thành lập các xã đảo, huyện đảo", "dựng miếu, trồng cây ở một số đảo", "xây dựng các trạm khí tượng lớn", "xây dựng các trạm vô tuyến điện"],
    ["xây dựng trạm vô tuyến điện", "khảo sát đo vẽ bản đồ", "thành lập các huyện đảo", "xây dựng ngọn hải đăng"],
    ["Dựng miếu thờ và trồng cây ở một số đảo", "Đo đạc và cắm dấu mốc tại nơi khảo sát", "Ngăn tàu thuyền nước ngoài đến buôn bán", "Tiến hành thu gom, khai thác sản vật biển"],
    ["thành lập đội Hoàng Sa", "thành lập đội Bắc Hải", "xây dựng trạm khí tượng", "xây dựng sân bay lớn"],
    ["thành lập huyện đảo Hoàng Sa và Trường Sa", "thành lập đội Hoàng Sa, Bắc Hải và Trường Đà", "cho hoàn thiện tập Đại Nam nhất thống toàn đồ", "cử thủy quân ra tuần tra đảo định kì hàng năm"],
    ["Trung Quốc", "Anh", "Mĩ", "Pháp"],
    ["Chính quyền Sài Gòn", "Chính quyền Bảo Đại", "Chính quyền Pháp", "Chính phủ Việt Nam dân chủ cộng hòa"],
    ["Chủ động tấn công vũ trang", "Tuyên truyền chủ quyền biển, đảo", "Đàm phán ngoại giao", "Xây dựng lực lượng quản lý biển"],
    ["Kí kết với các nước láng giềng một số văn kiện ngoại giao quốc tế về biển", "Tham gia Công ước Luật biển năm 1982 của tổ chức Liên hợp quốc", "Chủ động tấn công ngăn chặn các nước có ý đồ xâm phạm biển", "Thực hiện đầy đủ Tuyên bố về ứng xử của các bên ở Biển Đông"],
    ["đấu tranh hòa bình", "bạo lực cách mạng", "chiến tranh cách mạng", "bãi công, bãi khóa"],
    ["Luật Biển Việt Nam", "Tuyên bố về ứng xử của các bên ở Biển Đông", "Luật Biên giới quốc gia", "Tuyên bố về các vùng biển và thềm lục địa Việt Nam"],
    ["Công ước Liên hợp quốc về Luật biển", "Tuyên bố về ứng xử của các bên ở Biển Đông", "Luật Cảnh sát biển Việt Nam", "Hiến chương Liên hợp quốc"],
    ["nông nghiệp lúa nước", "thương mại hàng hải", "nuôi trồng thủy sản", "khai thác tài nguyên biển"],
    ["gần với khu vực đất liền Việt Nam nhất", "nằm ở vị trí trung tâm của Biển Đông", "đều thuộc khu vực miền Bắc Việt Nam", "đều thuộc khu vực miền Nam Việt Nam"],
    ["thành phố Đà Nẵng", "tỉnh Kiên Giang", "tỉnh Khánh Hòa", "tỉnh Nghệ An"],
    ["Phú Quốc", "Cô Tô", "Cát Bà", "Cù Lao Chàm"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    2, 3, 2, 2, 2,
    1, 0, 0, 1, 0,
    0, 1, 3, 3, 1,
    0, 1, 0, 0, 0,
    1, 1, 2, 2, 0,
    3, 0, 0, 2, 0,
    1, 2, 1, 1, 2,
    0, 
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
