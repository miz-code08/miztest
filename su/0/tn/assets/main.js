const questions = [
    "Năm 1407, sau khi cuộc kháng chiến của nhà Hồ thất bại, nước ta rơi vào ách thống trị của triều đại phong kiến Trung Quốc nào sau đây?",
    "Khởi nghĩa Lam Sơn (1418 - 1427) nổ ra trong bối cảnh nào sau đây?",
    "Nội dung nào dưới đây không phản ánh đúng ý nghĩa của phong trào Tây Sơn (1771 - 1789)?",
    "Một trong những đóng góp to lớn của phong trào Tây Sơn (1771-1802) đối với lịch sử dân tộc Việt Nam là",
    "Nội dung nào sau đây phản ánh đúng ý nghĩa thắng lợi của khởi nghĩa Lam Sơn?",
    "Cuộc khởi nghĩa Lam Sơn (1418-1427) thắng lợi đã",
    "Cuộc cải cách của Hồ Quý Ly tiến hành trong bối cảnh lịch sử nào sau đây?",
    "Trong cải cách của Hồ Quý Ly, việc quy định số lượng gia nô được sở hữu của các vương hầu, quý tộc, quan lại được gọi là",
    "Xây dựng nhiều thành luỹ kiên cố, chế tạo súng thần cơ, đóng thuyền chiến là nội dung cải cách của Hồ Quý Ly và triều Hồ về",
    "Hạn chế sự phát triển của Phật giáo, chấn chỉnh lại chế độ thi cử, đề cao chữ Nôm là nội dung cải cách của Hồ Quý Ly và triều Hồ về",
    "Cuộc cải cách của Hồ Quý Ly và triều Hồ đã đề cao tư tưởng, tôn giáo nào sau đây?",
    "Trong cải cách về văn hoá, Hồ Quý Ly khuyến khích và đề cao chữ viết nào sau đây?",
    "Cuộc cải cách của vua Lê Thánh Tông được tiến hành trong bối cảnh lịch sử nào sau đây?",
    "Công cuộc cải cách của Lê Thánh Tông được tiến hành trên mọi lĩnh vực, nhưng tập trung chủ yếu vào lĩnh vực",
    "Để quản lý đất nước, vua Lê Thánh Tông đã cho ban hành bộ luật nào sau đây?",
    "Trong lĩnh vực văn hóa, Lê Thánh Tông đặc biệt đề cao hệ tư tưởng",
    "Ban cấp ruộng đất ruộng đất cho quý tộc, quan lại cao cấp từ nhất phẩm đến tứ phẩm là nội dung chủ yếu của chính sách cải cách nào sau đây của vua Lê Thánh Tông?",
    "Ruộng đất công ở các làng xã thời Lê Thánh Tông được phân chia theo chế độ nào sau đây?",
    "Dưới thời vua Lê Thánh Tông, hệ thống cơ quan phụ trách đạo thừa tuyên có tên gọi là",
    "Năm 1471, vua Lê Thánh Tông cho lập thêm đạo thừa tuyên thứ 13 có tên gọi là",
    "Trong cuộc cải cách thế kỉ XV, dưới đạo thừa tuyên, vua Lê Thánh Tông thiết lập hệ thống",
    "Dưới thời vua Lê Thánh Tông, hệ thống quan lại được tuyển chọn chủ yếu thông qua",
    "Nội dung nào sau đây phản ảnh đúng mục đích cải cách của vua Lê Thánh Tông?",
    "Cuộc cải cách hành chính lớn nhất của vương triều Nguyễn được tiến hành dưới thời vua",
    "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) được thực hiện trong bối cảnh lịch sử nào sau đây?",
    "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) nhằm thực hiện một trong những mục đích nào sau đây?",
    "Để hoàn thiện bộ máy chính quyền Trung ương, vua Minh Mạng đã cho thành lập một số cơ quan mới có tên là",
    "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) tập trung vào lĩnh vực chủ yếu nào sau đây?",
    "Trong cuộc cải cách nửa đầu thế kỉ XIX, vua Minh Mạng đã phân chia bộ máy chính quyền địa phương thành các cấp nào sau đây?",
    "Nội dung nào sau đây không phải là hoạt động cải cách của vua Minh Mạng nửa đầu thế kỉ XIX?",
    "Trong công cuộc cải cách của vua Minh Mạng, Nội các được thành lập có vai trò nào sau đây?",
    "Năm 1832, vua Minh Mạng cho thành lập Đô sát viện để thực hiện nhiệm vụ nào sau đây?",
    "Trong cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX), đứng đầu tỉnh là",
    "Công cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) đã đem lại một trong những kết quả nào sau đây?",
    "Nội dung nào sau đây không phản ánh đúng kết quả cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX)?",
    "Trong bộ máy chính quyền trung ương thời Minh Mạng, Cơ mật viện có vai trò tư vấn cho nhà vua về",
    "Ở địa phương, trong công cuộc cải cách hành chính nửa đầu thế kỉ XIX, vua Minh Mạng đã chia cả nước thành",
    "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) được thực hiện trong bối cảnh",
    "Cuộc cải cách hành chính của vua Minh Mạng (nửa đầu thế kỉ XIX) không nhằm mục đích nào sau đây?",
    "Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) có ý nghĩa quan trọng nào sau đây?",
];

const answers = [
    ["Nhà Hán", "Nhà Đường", "Nhà Minh", "Nhà Tống"],
    ["Nhà Hồ tiến hành cải cách đất nước thành công", "Nhà Trần khủng hoảng, suy yếu trầm trọng", "Nhà Minh thi hành chính sách cai trị hà khắc", "Nhà Minh lâm vào khủng hoảng, suy yếu"],
    ["Từ một cuộc khởi nghĩa địa phương đã phát triển thành phong trào dân tộc rộng lớn", "Lật đổ chính quyền phong kiến Nguyễn - Trịnh, xoá bỏ tình trạng chia cắt đất nước", "Đập tan các thế lực ngoại xâm hùng mạnh, bảo vệ vững chắc nền độc lập dân tộc", "Đập tan âm mưu thủ tiêu nền văn hoá Đại Việt, mở ra thời kì phát triển mới của đất nước"],
    ["Lật đổ ách đô hộ tàn bạo của nhà Minh ở Việt Nam", "Thống nhất hoàn toàn đất nước về mặt nhà nước", "Đánh tan quân xâm lược, bảo vệ nền độc lập dân tộc", "Ngăn chặn được nguy cơ Pháp xâm lược Việt Nam"],
    ["Đập tan quân xâm lược Xiêm và Thanh, bảo vệ độc lập dân tộc", "Kết thúc 20 năm nhà Minh đô hộ, mở ra thời kì mới của đất nước", "Xóa bỏ ranh giới chia cắt đất nước, đặt cơ sở thống nhất quốc gia", "Đưa Đại Việt trở thành cường quốc hàng đầu khu vực Đông Nam Á"],
    ["Chấm dứt vĩnh viễn ách đô hộ ngàn năm Bắc thuộc", "Chấm dứt mọi cuộc chiến tranh xâm lược từ Trung Quốc", "Mở đầu thời kì độc lập, tự chủ lâu dài cho dân tộc", "Đập tan âm mưu thủ tiêu văn hóa Đại Việt của Trung Quốc"],
    ["Nước Đại Việt lâm vào khủng hoảng trầm trọng", "Nhà Trần đang trong giai đoạn phát triển thịnh đạt", "Giặc Tống sang xâm lược nước ta lần thứ nhất", "Chế độ phong kiến Việt Nam phát triển đỉnh cao"],
    ["Phép hạn gia nô", "Chính sách hạn điền", "Chính sách quân điền", "Bình quân gia nô"],
    ["Kinh tế", "Văn hoá", "Quân sự", "Xã hội"],
    ["Kinh tế, xã hội", "Văn hoá, giáo dục", "Chính trị, quân sự", "Hành chính, pháp luật"],
    ["Phật giáo", "Đạo giáo", "Nho giáo", "Thiên chúa giáo"],
    ["Chữ Nôm", "Chữ Hán", "Chữ Latinh", "Chữ Quốc ngữ"],
    ["Nội bộ triều đình có nhiều mâu thuẫn, biến động", "Nền kinh tế sa sút, nạn đói diễn ra thường xuyên", "Đất nước đứng trước nguy cơ bị nhà Minh xâm lược", "Chế độ phong kiến lâm vào khủng hoảng trầm trọng"],
    ["Kinh tế", "Giáo dục", "Hành chính", "Văn hóa"],
    ["Hình thư", "Quốc triều hình luật", "Hình luật", "Hoàng Việt luật lệ"],
    ["Phật giáo", "Đạo giáo", "Nho giáo", "Thiên chúa giáo"],
    ["Quân điền", "Hạn điền", "Hạn nô", "Lộc điền"],
    ["Điền trang", "Lộc điền", "Quân điền", "Hạn điền"],
    ["Tam ty", "Lục bộ", "Lục khoa", "Thông chính ty"],
    ["Hà Nội", "Phú Xuân", "Quảng Nam", "Tây Đô"],
    ["phủ, huyện/châu, xã.", "tỉnh/thành phố, huyện, xã", "lộ, trấn, phủ, huyện/châu", "tỉnh, phủ, huyện, làng."],
    ["dòng dõi tôn thất", "tiến cử", "giáo dục - khoa cử", "đề cử"],
    ["Tăng cường quyền lực của hoàng đế và củng cố bộ máy nhà nước", "Giải quyết tình trạng khủng hoảng trầm trọng của đất nước bấy giờ", "Biến nước ta trở thành cường quốc lớn mạnh hàng đầu trong khu vực.", "Tăng cường tiềm lực đất nước chuẩn bị đối phó với giặc ngoại xâm"],
    ["Gia Long.", "Minh Mạng.", "Tự Đức.", "Thiệu Trị."],
    ["Chế độ quân chủ chuyên chế đang trong thời kì thịnh trị.", "Phương thức sản xuất tư bản chủ nghĩa phát triển mạnh", "Bộ máy chính quyền nhà nước chưa hoàn thiện, đồng bộ", "Đất nước đứng trước nguy cơ xâm lược từ nhà Thanh"],
    ["Tập trung quyền lực vào tay vua", "Thúc đẩy kinh tế tư bản chủ nghĩa", "Ngăn ngừa nguy cơ giặc ngoại xâm", "Khôi phục nền giáo dục Nho học"],
    ["Lục bộ, Lục khoa, Lục tự", "Đô ty, Thừa ty, Hiến ty", "Đô sát viện, Cơ mật viện", "Thông chính ty, Quốc Tử Giám"],
    ["Kinh tế", "Văn hóa", "Quốc phòng", "Hành chính"],
    ["Đạo thừa tuyên, phủ, huyện/châu, xã.", "Tỉnh/thành phố, huyện/châu, xã", "Lộ, trấn, phủ, huyện/châu, xã", "Tỉnh, phủ, huyện/châu, tổng, xã."],
    ["Hoàn thiện cơ cấu, chức năng của Lục bộ", "Ban hành chính sách hạn điền và hạn nô", "Tăng cường giám sát lẫn nhau giữa các cơ quan", "Phân chia lại đơn vị hành chính ở cấp địa phương"],
    ["Giúp vua khởi thảo các văn bản hành chính", "Kiểm tra, giám sát hoạt động của Lục bộ", "Phụ trách nhân khẩu, thu thuế trong cả nước", "Xướng danh những người đỗ trong kì thi Đình"],
    ["Tiếp nhận và xử lý các loại công văn, giấy tờ", "Can gián nhà vua và giám sát các cơ quan", "Phụ trách nhân khẩu, thu thuế trong cả nước", "Phụ trách bang giao, đón tiếp sứ thần nước ngoài"],
    ["Đô ty, Thừa ty, Hiến ty.", "Lục bộ, Lục khoa", "Tổng đốc, Tuần phủ.", "Lục khoa, Lục tự"],
    ["Đưa đất nước phát triển lên chế độ tư bản chủ nghĩa.", "Thúc đẩy bộ máy chính quyền các cấp hoạt động hiệu quả.", "Góp phần mở cửa và hội nhập nền kinh tế khu vực.", "Hoàn thành thống nhất đất nước về mặt lãnh thổ."],
    ["Xây dựng được chế độ quân chủ trung ương tập quyền cao độ.", "Thống nhất đơn vị hành chính địa phương trong cả nước.", "Tổ chức cơ cấu bộ máy nhà nước gọn nhẹ, chặt chẽ.", "Xây dựng chế độ quân chủ trung ương phân quyền cao độ."],
    ["văn hóa.", "quân sự.", "giáo dục.", "luật pháp."],
    ["30 tỉnh và 1 phủ Thừa Thiên.", "Bắc Thành, Gia Định thành", "13 đạo thừa tuyên và các phủ", "các lộ, trấn, phủ, huyện/châu"],
    ["tình hình an ninh - xã hội ở nhiều địa phương bất ổn", "bộ máy nhà nước phong kiến cơ bản đã hoàn chỉnh.", "tình trạng phân quyền, thiếu thống nhất đã khắc phục.", "phương thức sản xuất tư bản chủ nghĩa thâm nhập mạnh"],
    ["Khắc phục tình trạng phân quyền, thiếu thống nhất.", "Tăng cường tính thống nhất và tiềm lực của đất nước.", "Tập trung quyền lực và hoàn thiện bộ máy nhà nước.", "Xóa bỏ tình trạng “bế quan tỏa cảng” của đất nước."],
    ["xóa bỏ tình trạng “bế quan tỏa cảng” của đất nước.", "ngăn chặn mọi nguy cơ xâm lược từ bên ngoài.", "đặt cơ sở cho sự phân chia tỉnh, huyện hiện nay.", "hoàn thành thống nhất đất nước về mặt lãnh thổ."],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    2, 2, 3, 2, 1,
    3, 0, 0, 2, 1,
    2, 0, 0, 0, 1,
    2, 3, 2, 2, 2,
    0, 2, 0, 1, 2,
    0, 2, 3, 3, 1,
    0, 1, 2, 1, 3,
    1, 0, 0, 3, 2,
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
