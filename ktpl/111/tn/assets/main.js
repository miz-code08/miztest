const questions = [
    "Theo quy định của pháp luật, quyền và nghĩa vụ của công dân không bị phân biệt bởi?",
    "Theo quy định của pháp luật, bình đẳng về trách nhiệm pháp lí có nghĩa là bất kì công dân nào vi phạm pháp luật đều?",
    "Theo quy định của pháp luật, quyền và nghĩa vụ của công dân không bị phân biệt bởi?",
    "Công dân dù ở cương vị nào, khi vi phạm pháp luật đều bị xử lí theo quy định là?",
    "Lao động nam và lao động nữ được bình đẳng về cơ hội tiếp cận việc làm là thể hiện bình đẳng giới trong lĩnh vực?",
    "Việc đảm bảo tỉ lệ thích hợp người dân tộc thiểu số trong các cơ quan quyền lực nhà nước thể hiện quyền bình đẳng giữa các dân tộc trên lĩnh vực?",
    "Nhà nước ban hành các chương trình, chính sách phát triển kinh tế ở các xã đặc biệt khó khăn, vùng đồng bào dân tộc và miền núi thể hiện quyền bình đẳng giữa các dân tộc trên lĩnh vực?",
    "Một trong những quy định của pháp luật về bình đẳng giới trong lĩnh vực chính trị là nam, nữ bình đẳng trong việc?",
    "Một trong những quy định của pháp luật về bình đẳng giới trong lĩnh vực kinh tế là cả nam và nữ đều bình đẳng trong việc thực hiện quyền?",
    "Theo quy định của pháp luật, quyền bình đẳng giữa các dân tộc trong lĩnh vực chính trị thể hiện ở việc các dân tộc trong cộng đồng Việt Nam đều có quyền?",
    "Theo quy định của pháp luật, các cơ sở tín ngưỡng, cơ sở tôn giáo hợp pháp được nhà nước?",
    "Quyền tự do tín ngưỡng tôn giáo của công dân thể hiện ở việc, mọi công dân đều có quyền?",
    "Các tổ chức, cá nhân tham gia các hoạt động tôn giáo đều có nghĩa vụ?",
    "Công dân Việt Nam thuộc các dân tộc khác nhau khi đủ điều kiện mà pháp luật quy định đều có quyền tham gia quản lí nhà nước và xã hội, là thể hiện quyền bình đẳng giữa các dân tộc về?",
    "Nhà nước quan tâm hỗ trợ vốn đối với vùng sâu, vùng xa, vùng đặc biệt khó khăn là thể hiện nội dung quyền bình đẳng giữa các dân tộc về?",
    "Quyền tự do tín ngưỡng, tôn giáo của công dân thể hiện ở việc, mọi công dân đều có quyền?",
    "Một trong những nghĩa vụ của công dân khi tham gia quản lí nhà nước và xã hội là phải tôn trọng?",
    "Việc công dân biểu quyết các vấn đề trọng đại khi được Nhà nước trưng cầu ý dân là thực hiện quyền nào dưới đây?",
    "Theo quy định của pháp luật, công dân thực hiện quyền tham gia quản lí nhà nước và xã hội trong trường hợp nào dưới đây?",
    "Một trong những nghĩa vụ của công dân khi tham gia quản lí nhà nước và xã hội đó là phải có trách nhiệm?",
    "Hành vi vi phạm quyền và nghĩa vụ của công dân trong tham gia quản lí nhà nước và xã hội dẫn đến hậu quả gì?",
    "Công dân thực hiện tốt nghĩa vụ tham gia quản lí nhà nước và xã hội khi tích cực tham gia giữ gìn điều gì?",
    "Khi thực hiện quyền bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân các cấp, công dân cần thực hiện theo nguyên tắc nào?",
    "Theo quy định của pháp luật, công dân đủ bao nhiêu tuổi trở lên thì có quyền tham gia bầu cử?",
    "Hiến pháp quy định công dân Việt Nam đủ bao nhiêu tuổi trở lên có quyền ứng cử?",
    "Một trong những hậu quả của hành vi vi phạm quyền và nghĩa vụ của công dân về bầu cử là gì?",
    "Theo quy định của pháp luật, công dân đủ bao nhiêu tuổi trở lên thì có quyền tham gia bầu cử?",
    "Khi thực hiện quyền bầu cử, công dân được quyền làm gì?",
    "Theo quy định của pháp luật, công dân có thể thực hiện quyền khiếu nại trong trường hợp nào sau đây?",
    "Công dân báo cho cơ quan, tổ chức, cá nhân có thẩm quyền khi biết về hành vi vi phạm pháp luật của bất cứ cơ quan, tổ chức, cá nhân nào là biểu hiện quyền gì?",
    "Theo quy định của pháp luật, khi thực hiện quyền khiếu nại, người khiếu nại phải có trách nhiệm gì?",
    "Theo quy định của pháp luật, khi thực hiện quyền khiếu nại, người khiếu nại phải có trách nhiệm khiếu nại đúng người nào?",
    "Theo quy định của pháp luật, công dân có thể thực hiện quyền khiếu nại trong trường hợp nào sau đây?",
    "Theo quy định của pháp luật, để bảo vệ vững chắc tổ quốc Việt Nam Xã hội chủ nghĩa, mọi công dân có nghĩa vụ gì?",
    "Công dân thể hiện trách nhiệm đối với việc xây dựng và bảo vệ tổ quốc khi thực hiện hành vi nào dưới đây?",
    "Theo quy định của pháp luật, độ tuổi tham gia nghĩa vụ quân sự của thanh niên hiện nay là đủ bao nhiêu tuổi trở lên?",
    "Theo quy định của pháp luật, để bảo vệ Tổ quốc, mọi công dân có nghĩa vụ gì?",
    "Theo quy định của pháp luật, để bảo vệ vững chắc Tổ quốc Việt Nam, mọi công dân có nghĩa vụ gì?",
];

const answers = [
    ["Năng lực trách nhiệm pháp lí", "Trạng thái sức khỏe tâm thần", "Thành phần và địa vị xã hội", "Tâm lí và yếu tố thể chất"],
    ["Bị tước quyền con người", "Được giảm nhẹ hình phạt", "Bị xử lí nghiêm minh", "Được đền bù thiệt hại"],
    ["Năng lực trách nhiệm pháp lí", "Trạng thái sức khỏe tâm thần", "Thành phần và địa vị xã hội", "Tâm lí và yếu tố thể chất"],
    ["Bình đẳng về kinh tế", "Bình đẳng về quyền và nghĩa vụ", "Bình đẳng về trách nhiệm pháp lí", "Bình đẳng về chính trị"],
    ["Chính trị", "Văn hóa", "Giáo dục", "Lao động"],
    ["Giáo dục", "Văn hóa", "Kinh tế", "Chính trị"],
    ["Xã hội", "Văn hóa", "Chính trị", "Kinh tế"],
    ["Tiếp cận các cơ hội việc làm", "Tham gia các hoạt động xã hội", "Tiếp cận nguồn vốn đầu tư", "Lựa chọn ngành nghề học tập"],
    ["Kinh doanh", "Bầu cử", "Tài sản", "Nhân thân"],
    ["Xây dựng thiết chế văn hóa", "Hỗ trợ giảm chi phí học tập", "Khám chữa bệnh theo quy định", "Tham gia bầu cử đại biểu quốc hội"],
    ["Thiết kế và đầu tư", "Xây dựng và vận hành", "Thu hồi và quản lí", "Tôn trọng và bảo hộ"],
    ["Xây dựng cơ sở, xây dựng nhà thờ", "Thành lập tổ chức tôn giáo", "Lợi dụng tôn giáo để vi phạm", "Theo hoặc không theo tôn giáo"],
    ["Tuân thủ hiến pháp, pháp luật", "Nói lời hay, làm việc thiện", "Bớt sân si, thôi tranh giành", "Làm việc tốt, có lòng thiện"],
    ["Xã hội", "Văn hóa, giáo dục", "Kinh tế", "Chính trị"],
    ["Kinh tế", "Tín ngưỡng", "Truyền thông", "Tôn giáo"],
    ["Xây dựng cơ sở tôn giáo", "Thành lập tổ chức tôn giáo", "Lợi dụng tôn giáo để vi phạm", "Theo hoặc không theo tôn giáo"],
    ["Lợi ích hợp pháp của người khác", "Lợi ích của bản thân mình", "Lợi ích truyền thông đa phương tiện", "Người cung cấp thông tin"],
    ["Quyền tự quyết định mang tính chiến lược", "Quyền tham gia quản lí nhà nước và xã hội", "Quyền quyết định công việc địa phương", "Quyền bảo vệ các lợi ích gia đình, dòng tộc"],
    ["Thay đổi kiến trúc thượng tầng", "Đóng góp ý kiến vào dự thảo luật", "Tham khảo dịch vụ trực tuyến", "Sử dụng dịch vụ công cộng"],
    ["Ứng dụng các phần mềm mới", "Bảo vệ an ninh quốc gia", "Sử dụng dịch vụ công cộng", "Nâng cao lợi thế của bản thân"],
    ["Vi phạm quyền bảo mật cá nhân", "Vi phạm quyền tự do dân chủ", "Vi phạm trên không gian mạng", "Vi phạm chính sách đối ngoại"],
    ["Hình ảnh bản thân mình", "Bí quyết kinh doanh", "An ninh trật tự nơi sinh sống", "Thông tin đời sống cá nhân"],
    ["Phổ thông, bình đẳng, trực tiếp, bỏ phiếu kín", "Phổ thông, công bằng, trực tiếp, bỏ phiếu kín", "Dân chủ, bình đẳng, trực tiếp, bỏ phiếu kín", "Phổ thông, bình đẳng, gián tiếp, bỏ phiếu kín"],
    ["21 tuổi", "17 tuổi", "19 tuổi", "18 tuổi"],
    ["16", "18", "17", "21"],
    ["Mất thời gian kiểm đếm", "Công dân phải nghỉ làm", "Uy tín của cử tri giảm sút", "Sai lệch kết quả bầu cử"],
    ["21 tuổi", "17 tuổi", "19 tuổi", "18 tuổi"],
    ["Xuyên tạc kết quả bầu cử", "Tiếp cận các thông tin về bầu cử", "Lôi kéo, mua chuộc cử tri", "Gian lận thông tin lý lịch cử tri"],
    ["Bị hạ bậc lương không rõ lí do", "Bí mật theo dõi nghi can", "Chứng kiến việc vận chuyển ma túy", "Phải kê khai tài sản cá nhân"],
    ["Bầu cử", "Tố cáo", "Khiếu nại", "Ứng cử"],
    ["Trình bày không trung thực sự việc", "Trình bày trung thực sự việc", "Phản bác mọi quan điểm trái chiều", "Từ chối mọi quyết định giải quyết"],
    ["Có quan hệ rộng", "Có tài chính mạnh", "Có quyền lực", "Có thẩm quyền"],
    ["Kích động biểu tình trái phép", "Phát hiện đường dây cá độ bóng đá", "Phát hiện cơ sở sản xuất tiền giả", "Đuổi việc không có lí do"],
    ["Bảo vệ lợi ích cá nhân mình", "Bảo vệ tư tưởng cực đoan", "Bảo vệ mọi quan điểm trái chiều", "Bảo vệ an ninh quốc gia"],
    ["Tổ chức nhập cảnh trái phép", "Đăng kí nghĩa vụ khi đến tuổi", "Tìm hiểu các nghi lễ tôn giáo", "Xâm phạm an ninh quốc gia"],
    ["16 tuổi", "18 tuổi", "15 tuổi", "17 tuổi"],
    ["Từ chối nghĩa vụ quân sự", "Phản bội Tổ quốc", "Phải nộp mọi loại thuế", "Trung thành với tổ quốc"],
    ["Tuân thủ Hiến pháp", "Sử dụng bạo lực", "Chiếm đoạt tài nguyên", "Từ bỏ quốc tịch đang có"],
];

const correctAnswers = [
    2, 2, 2, 2, 3,
    3, 3, 1, 1, 3,
    3, 3, 0, 3, 0,
    3, 0, 1, 1, 1,
    1, 2, 0, 3, 3,
    3, 3, 1, 0, 1,
    1, 3, 3, 3, 1,
    3, 3, 0,
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
