const questions = [
    "Hoa Kì có diện tích lớn",
    "Lãnh thổ Hoa Kì không có bộ phận nào sau đây?",
    "Phát biểu nào sau đây không đúng về đặc điểm vị trí địa lí và lãnh thổ của Hoa Kì?",
    "Tỉ lệ gia tăng dân số tự nhiên của Hoa Kì có đặc điểm nào sau đây?",
    "Hiện nay, dân số Hoa Kì đứng thứ mấy trên thế giới?",
    "Lãnh thổ Hoa Kì phần lớn nằm trong vành đai khí hậu",
    "Hoa Kì là quốc gia có nền kinh tế đứng",
    "Ngành chiếm tỉ trọng cao nhất trong cơ cấu GDP của Hoa Kì là",
    "Sản xuất công nghiệp của Hoa Kì đang mở rộng xuống các bang",
    "Ngành nào sau đây tạo nguồn hàng xuất khẩu chủ yếu cho Hoa Kì?",
    "Dân nhập cư mang lại thuận lợi chủ yếu nào sau đây cho sự phát triển kinh tế của Hoa Kì?",
    "Phát biểu nào sau đây đúng với ngành nông nghiệp Hoa Kì?",
    "Vị trí địa lí và phạm vi lãnh thổ Hoa Kì không mang lại thuận lợi nào dưới đây?",
    "Phát biểu nào sau đây không đúng với ngoại thương của Hoa Kì?",
    "Vùng Nam Hoa Kì chủ yếu sản xuất các loại nông sản có nguồn gốc",
    "Phía nam của Hoa Kì trồng nhiều lúa gạo do điều kiện chủ yếu nào sau đây?",
    "Nền kinh tế Hoa Kì phát triển cao không phải là do",
    "Liên Bang Nga có chung biên giới với bao nhiêu quốc gia?",
    "Phần lớn các sông của Liên Bang Nga chảy theo hướng nào sau đây?",
    "Vùng nào sau đây có mật độ dân số cao nhất ở Liên Bang Nga?",
    "Phía bắc của Liên Bang Nga tiếp giáp với đại dương nào sau đây?",
    "Loại rừng chiếm diện tích lớn nhất ở Liên Bang Nga là",
    "Loại cây lương thực chính của Liên Bang Nga là",
    "Dân tộc nào sau đây chiếm đa số ở Liên Bang Nga?",
    "Ngành công nghiệp nào sau đây là ngành công nghiệp thế mạnh của Liên Bang Nga?",
    "Vùng kinh tế phát triển nhất của Liên Bang Nga là",
    "Quy mô dân số đông tạo nên thuận lợi chủ yếu nào sau đây cho Liên Bang Nga?",
    "Phát biểu nào sau đây đúng về ý nghĩa của vị trí địa lí đối với Liên Bang Nga?",
    "Ý nào sau đây không đúng khi nói về ngành du lịch của Liên Bang Nga?",
    "Liên Bang Nga tiếp giáp với nhiều quốc gia gây nên khó khăn chủ yếu cho",
    "Nhật Bản nằm trong khu vực hoạt động chủ yếu của gió nào sau đây?",
    "Dân số Nhật Bản không có đặc điểm nào sau đây?",
    "Phát biểu nào sau đây đúng với vị trí địa lí của Nhật Bản?",
    "Phát biểu nào sau đây không đúng với tự nhiên Nhật Bản?",
    "Đặc điểm nổi bật của dân cư Nhật Bản là",
    "Dạng địa hình nào sau đây chiếm phần lớn diện tích tự nhiên của Nhật Bản?",
    "Phát biểu nào sau đây không đúng về dân cư Nhật Bản",
    "Sự phân bố dân cư không đều theo lãnh thổ của Nhật Bản đã gây khó khăn cho việc",
    "Nhật Bản phát triển thủy điện dựa trên điều kiện thuận lợi chủ yếu là",
    "Vị trí địa lí không tạo thuận lợi để Nhật Bản",

];

const answers = [
    ["thứ 2 thế giới", "thứ 3 thế giới", "thứ 4 thế giới", "thứ 5 thế giới"],
    ["Phần lãnh thổ trung tâm Bắc Mỹ", "Bán đảo Alaska", "Quần đảo Ha-oai", "Quần đảo Hai-i-ti"],
    ["Nằm hoàn toàn ở bán cầu Tây", "Giáp Ấn Độ Dương và Thái Bình Dương", "Tiếp giáp Ca-na-đa và Mê-hi-cô", "Lãnh thổ rộng lớn gồm 50 bang"],
    ["Thấp và giảm", "Cao và tăng", "Thấp và tăng", "Cao và giảm"],
    ["2", "3", "4", "5"],
    ["Xích đạo", "Nhiệt đới", "Ôn đới", "Hàn đới"],
    ["Thứ nhất thế giới", "Thứ hai thế giới", "Thứ ba thế giới", "Thứ tư thế giới"],
    ["Công nghiệp", "Nông nghiệp", "Dịch vụ", "Thương nghiệp"],
    ["Phía Tây và ven Thái Bình Dương", "Phía Nam và ven Thái Bình Dương", "Phía Tây Nam và ven vịnh Mêhicô", "Ven Thái Bình Dương và phía Bắc"],
    ["Nông nghiệp", "Ngư nghiệp", "Tiểu thủ công", "Công nghiệp"],
    ["Tích lũy nhiều kinh nghiệm sản xuất", "Bổ sung nguồn lao động lớn, không mất chi phí đào tạo", "Tiếp thu nền văn minh thế giới", "Tạo một nền văn hóa đa dạng phong phú"],
    ["Chiếm tỉ trọng lớn trong cơ cấu GDP", "Chiếm tỉ trọng nhỏ trong cơ cấu GDP", "Sử dụng lực lượng lao động nhiều nhất", "Tạo ra khối lượng sản phẩm không lớn"],
    ["Phát triển tổng hợp kinh tế biển", "Tránh được sự tàn phá của chiến tranh", "Giao lưu, hợp tác với các nước", "Có nhiều thiên tai như bão, động đất"],
    ["Chiếm tỉ trọng lớn trong GDP", "Tổng kim ngạch xuất, nhập khẩu lớn", "Giá trị nhập siêu ngày càng tăng", "Luôn là một nước xuất siêu rất lớn"],
    ["Nhiệt đới và cận nhiệt đới", "Nhiệt đới và ôn đới", "Ôn đới và cận nhiệt đới", "Cận nhiệt đới và xích đạo"],
    ["Có đồng bằng, đất tốt, khí hậu cận nhiệt đới hải dương", "Đồng bằng nhỏ, đất đai màu mỡ, khí hậu ôn đới lục địa", "Đồng bằng rộng lớn, đất tốt, khí hậu ôn đới hải dương", "Đồng bằng rộng lớn, đất đai tốt, khí hậu ôn đới lục địa"],
    ["Phát triển cao độ nền kinh tế thị trường", "Đẩy mạnh đầu tư nghiên cứu phát triển", "Lao động năng suất cao, tiêu dùng nhiều", "Khai thác tối đa tài nguyên thiên nhiên"],
    ["11", "12", "13", "14"],
    ["Nam - Bắc", "Bắc - Nam", "Tây - Đông", "Đông - Tây"],
    ["Đồng bằng Đông Âu", "Vùng phía Bắc", "Cao nguyên Trung Xi-bia", "Đông Xi-bia"],
    ["Đại Tây Dương", "Ấn Độ Dương", "Thái Bình Dương", "Bắc Băng Dương"],
    ["Rừng lá kim", "Cây bụi gai", "Rừng lá rộng", "Thường xanh"],
    ["Lúa mì", "Lúa gạo", "Ngô", "Sắn"],
    ["Tác-ta", "Chu-vát", "Nga", "Bát-xkia"],
    ["Dệt may", "Thực phẩm", "Khai thác", "Hóa chất"],
    ["Trung ương", "U-ran", "Viễn Đông", "Trung tâm đất đen"],
    ["Thị trường tiêu thụ lớn và lao động dồi dào", "Thị trường tiêu thụ lớn, xã hội luôn ổn định", "Xã hội luôn ổn định, nguồn lao động dồi dào", "Chất lượng cuộc sống cao, kinh tế phát triển"],
    ["Thuận lợi để phát triển giao thương", "Thuận lợi để quản lí kinh tế đất nước", "Thuận lợi cho việc khai thác lãnh thổ", "An ninh, quốc phòng luôn đảm bảo"],
    ["Liên Bang Nga có điều kiện thuận lợi để phát triển ngành du lịch", "Mát-xcơ-va và Xanh Pê-téc-bua là các trung tâm du lịch lớn nhất", "Có nhiều địa điểm du lịch nổi tiếng là hồ Bai-can, Quảng trường Đỏ,…", "Du lịch biển là loại hình du lịch chính ở Liên Bang Nga"],
    ["Phát triển giao thương", "Giao lưu văn hóa, xã hội", "Đảm bảo an ninh và quốc phòng", "Khai thác tài nguyên thiên nhiên"],
    ["Gió mùa", "Gió Tây", "Gió Đông cực", "Gió phơn"],
    ["Dân cư tập trung ở ven biển", "Tỉ lệ người già ngày càng cao", "Tỉ suất gia tăng tự nhiên thấp", "Quy mô dân số tăng rất nhanh"],
    ["Nằm ở phía tây của châu Âu", "Nằm ở phía bắc của châu Á", "Nằm ở phía đông của châu Á", "Nằm ở phía nam của châu Mỹ"],
    ["Là quần đảo, hình vòng cung", "Có 4 đảo lớn và nhiều đảo nhỏ", "Địa hình chủ yếu là đồi núi", "Tài nguyên khoáng sản giàu có"],
    ["Dân số không đông", "Tập trung ở miền núi", "Tốc độ gia tăng cao", "Cơ cấu dân số già"],
    ["Đồi núi", "Đầm lầy", "Cao nguyên", "Đồng bằng"],
    ["Nhật Bản là một nước đông dân", "Phần lớn dân ở các đô thị ven biển", "Tỉ suất gia tăng tự nhiên dân số cao", "Tỉ lệ người già ngày càng gia tăng"],
    ["Sử dụng hợp lí lao động và tài nguyên thiên nhiên", "Sử dụng hợp lí lao động và bảo vệ các tài nguyên", "Bảo vệ tài nguyên thiên nhiên và phát triển đời sống", "Phát triển đời sống và bảo vệ môi trường tự nhiên"],
    ["Địa hình phần lớn là núi đồi", "Sông dốc, nhiều thác ghềnh", "Có lượng mưa lớn trong năm", "Độ che phủ rừng khá lớn"],
    ["Giao lưu thương mại", "Xây dựng các hải cảng", "Phát triển kinh tế biển", "Phòng chống thiên tai"],
];  

const correctAnswers = [
    2, 3, 1, 0, 1,
    2, 0, 2, 1, 3,
    1, 1, 3, 3, 0,
    0, 3, 3, 0, 0,
    3, 0, 0, 2, 2,
    0, 0, 0, 3, 2,
    0, 3, 1, 3, 3,
    0, 2, 0, 1, 3,
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
