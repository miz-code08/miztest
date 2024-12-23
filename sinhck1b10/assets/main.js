const questions = [
    "Hệ tuần hoàn của động vật được cấu tạo từ các bộ phận nào sau đây?",
    "Những động vật nào sau đây có hệ tuần hoàn hở?",
    "Những động vật nào sau đây có hệ tuần hoàn kín?",
    "Nhóm động vật nào sau đây có hệ tuần hoàn đơn?",
    "Nhóm động vật nào sau đây có hệ tuần hoàn kép?",
    "Cấu tạo của hệ tuần hoàn hở gồm các thành phần",
    "Cấu tạo của hệ tuần hoàn kín gồm các thành phần:",
    "Máu vận chuyển trong hệ tuần hoàn hở theo thứ tự nào sau đây?",
    "Máu vận chuyển trong hệ tuần hoàn kín theo thứ tự nào sau đây?",
    "Ở hệ tuần hoàn kín, tim bơm máu vào động mạch với áp lực",
    "Ở hệ tuần hoàn hở, tim bơm máu vào động mạch với áp lực",
    "Trong hệ tuần hoàn kín",
    "Ở động vật có hệ tuần hoàn hở, máu trao đổi chất với tế bào qua",
    "Ở động vật có hệ tuần hoàn kín, máu trao đổi chất với tế bào qua",
    "Tính tự động của tim là",
    "Khả năng co dãn tự động theo chu kì của tim do",
    "Hệ dẫn truyền tim hoạt động theo thứ tự nào sau đây?",
    "Thứ tự nào sau đây đúng với chu kì hoạt động của tim?",
    "Tim co và dãn nhịp nhàng theo chu kì gọi là",
    "Ở người trưởng thành, mỗi chu kì tim kéo dài khoảng",
    "Mỗi chu kì tim kéo dài khoảng 0,8 s, trong đó",
    "Huyết áp là",
    "Huyết áp tâm trương xuất hiện ứng với kỳ nào trong chu kì hoạt động của tim?",
    "Huyết áp tâm thu xuất hiện ứng với kỳ nào trong chu kì hoạt động của tim?",
    "Trị số bình thường của huyết áp tâm thu của người trưởng thành là ..(1)... và huyết áp tâm trương là ..(2)... <br> Dấu ..(1)... và ... (2)... là",
    "Khi nói về tuần hoàn máu, phát biểu nào sau đây đúng?",
    "Nhóm động vật không có sự pha trộn giữa máu giàu oxi và máu giàu CO2 ở tim",
    "Trong hệ mạch huyết áp giảm dần từ",
    "Trong hệ mạch vận tốc máu tăng dần từ",
    "Khi nói về sự thay đổi huyết áp trong hệ mạch, phát biểu nào sau đây đúng?",
    "Huyết áp thay đổi do những yếu tố nào? <br> 1. Lực co tim <br> 2. Nhịp tim <br> 3. Độ quánh của máu <br> 4. Khối lượng máu <br> 5. Số lượng hồng cầu <br> 6. Sự đàn hồi của mạch máu",
    "Ưu điểm của hệ tuần hoàn kín so với hệ tuần hoàn hở? <br> 1. Máu chảy trong ĐM dưới áp lực cao hoặc trung bình. <br> 2. Tốc độ máu chảy nhanh, máu đi được xa đến các cơ quan nhanh. <br> 3. Đáp ứng tốt hơn nhu cầu trao đổi khí và trao đổi chất của cơ thể. <br> 4. Áp lực đẩy máu lưu thông trong hệ mạch  rất thấp, chảy chậm. <br> 5. Giảm hiệu qủa cung cấp O2 và chất dinh dưỡng cho TB. <br> Số phương án đúng là:",
    "Ưu điểm của vòng tuần hoàn kép so với vòng tuần hoàn đơn? <br> 1. máu chảy trong động mạch dưới áp lực thấp hoặc trung bình. <br> 2. tốc độ máu chảy chậm, máu đi được xa đến các cơ quan nhanh. <br> 3. áp lực đẩy máu lưu thông trong hệ mạch  rất lớn, chảy nhanh, đi được xa. <br> 4. tăng hiệu qủa cung cấp O2 và chất dinh dưỡng cho tế bào. <br> 5. đồng thời thải chậm các chất thải ra ngoài <br> Số phương án đúng là:",
    "Làm thế nào để giảm và kiểm soát bệnh tăng HA mà không cần đến thuốc? <br> 1. Giảm cân, vận động thể lực hạn chế căng thẳng <br> 2.Giảm lượng muối ăn  hàng ngày ( < 6g NaCl) <br> 3. Hạn chế  uống rượu bia  không hút thuốc lá. <br> 4. Ăn muối nhiều nhưng tăng cường vận động <br> Số phương án đúng:",
    "Cho các thông tin. <br> 1. Suy tim, hẹp động mạch vành, thiếu máu cơ tim, nhồi máu cơ tim. <br> 2. xuất huyết não, nhũn não, cơn thiếu máu não <br> 3. Suy thận <br> 4. Giảm cân <br> Số phương án đúng về hậu quả của bệnh tăng huyết áp:",
    "Tăng huyết áp là do <br> 1. tuổi cao,di truyền <br> 2. béo phì, ít vận động <br> 3. thói quen ăn mặn <br> 4. Rối loạn tim mạch do lo âu, căng thẳng <br> Số phương án đúng:",
    "Tại sao người mắc bệnh xơ vữa thành mạch lại thường bị cao huyết áp?",
    "Có bao nhiêu hành động sau đây mà người bị cao huyết áp nên thực hiện? <br> I. Tập thể dục, thể thao điều độ. <br> II. Ăn các loại thức ăn có nhiều chất béo, bột đường. <br> III. Hạn chế ăn các loại thức ăn có nồng độ muối cao. <br> IV. Sử dụng dầu thực vật hoặc dầu cá, hạn chế ăn mỡ động vật.",
];

const answers = [
    ["Dịch tuần hoàn, tim và hệ thống mạch máu.", "Dịch tuần hoàn, tim và máu.", "Máu, nước mô và tim.", "Máu, tim và hệ thống bạch huyết."],
    ["Ốc sên, trai sông, châu chấu.", "Tôm, cua, mực ống.", "Châu chấu, giun đốt, trai sông.", "Tôm, ốc sên, giun đốt."],
    ["Mực ống, cá, giun đốt.", "Giun dẹp, cua, mực ống.", "Côn trùng, giun đốt, trai sông.", "Tôm, ốc sên, giun đốt."],
    ["Lưỡng cư, bò sát.", "Cá, lưỡng cư.", "Cá xương, cá sụn.", "Côn trùng, cá."],
    ["Lưỡng cư, bò sát, chim.", "Cá, lưỡng cư, bò sát.", "Bò sát, chim, côn trùng.", "Côn trùng, cá, bò sát."],
    ["tim, động mạch, ống góp.", "tim, động mạch, tĩnh mạch, mao mạch.", "tim, động mạch, mao mạch.", "tim, tĩnh mạch, mao mạch."],
    ["tim, động mạch, ống góp.", "tim, động mạch, tĩnh mạch, mao mạch.", "tim, động mạch, tĩnh mạch.", "tim, tĩnh mạch, mao mạch."],
    ["Tim → tĩnh mạch → động mạch → mao mạch → tim.", "Tim → mao mạch → động mạch → tĩnh mạch → tim.", "Tim → động mạch → tĩnh mạch → mao mạch → tim.", "Tim → động mạch → xoang cơ thể → ống góp → tim."],
    ["Tim → động mạch → mao mạch → tĩnh mạch → tim.", "Tim → tĩnh mạch → động mạch → mao mạch → tim.", "Tim → mao mạch → động mạch → tĩnh mạch → tim.", "Tim → động mạch → tĩnh mạch → mao mạch → tim."],
    ["cao hoặc trung bình, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh.", "cao hoặc trung bình, tốc độ máu chảy chậm → phân phối máu đến các cơ quan nhanh.", "thấp, tốc độ máu chảy chậm → phân phối máu đến các cơ quan chậm.", "thấp, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh."],
    ["cao hoặc trung bình, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh.", "cao hoặc trung bình, tốc độ máu chảy chậm → phân phối máu đến các cơ quan nhanh.", "thấp, tốc độ máu chảy chậm → phân phối máu đến các cơ quan chậm.", "thấp, tốc độ máu chảy nhanh → phân phối máu đến các cơ quan nhanh."],
    ["Máu lưu thông liên tục trong mạch kín dưới áp lực cao hoặc trung bình, máu chảy nhanh.", "Là hệ tuần hoàn kép gồm 2 vòng tuần hoàn (vòng nhỏ vòng cơ thể).", "Máu đi theo 1 chiều liên tục và trao đổi chất với tế bào qua thành mao mạch.", "Là hệ tuần hoàn đơn theo một chiều liên tục từ tim qua động mạch tới mao mạch qua tĩnh mạch về tim."],
    ["mao mạch.", "tĩnh mạch.", "động mạch.", "xoang cơ thể."],
    ["thành mao mạch.", "thành tĩnh mạch.", "thành động mạch.", "khoang cơ thể."],
    ["khả năng tự co của tim.", "khả năng tự dãn của tim.", "khả năng tự co dãn của tim.", "tốc độ máu chảy trong 1 giây."],
    ["tim.", "hệ dẫn truyền tim.", "mạch máu.", "huyết áp."],
    ["Nút xoang nhĩ → nút nhĩ thất → bó His → mạng Purkinje.", "Nút xoang nhĩ → bó His → nút nhĩ thất → mạng Purkinje.", "Nút xoang nhĩ → nút nhĩ thất → mạng Purkinje → bó His.", "Nút xoang nhĩ → mạng Purkinje → nút nhĩ thất → bó His."],
    ["Pha co tâm nhĩ  → pha dãn chung  → pha co tâm thất.", "Pha co tâm nhĩ  → pha co tâm thất  → pha dãn chung.", "Pha co tâm thất  → pha co tâm nhĩ  → pha dãn chung.", "Pha dãn chung  → pha co tâm thất  → pha co tâm nhĩ."],
    ["huyết áp.", "chu kì tim.", "vận tốc máu.", "tính tự động của tim."],
    ["0,6 s.", "0,7 s.", "0,8 s.", "0,4 s."],
    ["tâm nhĩ co 0,3 s, tâm thất co 0,1 s, dãn chung 0,4 s.", "tâm nhĩ co 0,3 s, tâm thất co 0,3 s, dãn chung 0,2 s.", "tâm nhĩ co 0,1 s, tâm thất co 0,3 s, dãn chung 0,4 s.", "tâm nhĩ co 0,1 s, tâm thất co 0,5 s, dãn chung 0,2 s."],
    ["áp lực dòng máu khi tâm nhĩ co.", "áp lực dòng máu khi tâm thất dãn.", "áp lực của máu tác dụng lên thành mạch.", "do sự ma sát giữa máu và thành mạch."],
    ["Kì tim dãn.", "Kì co tâm nhĩ.", "Kì co tâm thất.", "Giữa hai kì co tâm nhĩ và co tâm thất."],
    ["Kì tim dãn.", "Kì tim co.", "Kì dãn tâm thất.", "Giữa hai kì dãn tâm nhĩ và dãn tâm thất."],
    ["80 - 90 mmHg và 130 - 150 mmHg.", "130 - 150 mmHg và 80 - 90 mmHg.", "70 - 80 mmHg và 110 - 120 mmHg.", "110 - 120 mmHg và 70 - 80 mmHg."],
    ["Huyết áp tâm thu được đo lúc tim đang dãn.", "Hệ tuần hoàn của động vật gồm 2 thành phần là tim và hệ mạch.", "Huyết áp tâm trương được đo ứng với lúc tim co.", "Huyết áp là áp lực của máu tác động lên thành mạch."],
    ["cá xương, chim, thú.", "Lưỡng cư, thú.", "bò sát (Trừ cá sấu), chim, thú.", "lưỡng cư, bò sát, chim."],
    ["động mạch chủ → tiểu động mạch → mao mạch → tiểu tĩnh mạch → tĩnh mạch chủ.", "tĩnh mạch chủ → tiểu tĩnh mạch → mao mạch → tiểu động mạch → động  mạch chủ.", "động mạch chủ → tiểu tĩnh mạch → mao mạch → tiểu động mạch → tĩnh mạch chủ.", "mao mạch → tiểu động mạch → động mạch chủ → tĩnh mạch chủ → tiểu tĩnh mạch."],
    ["động mạch chủ → mao mạch → tĩnh mạch chủ.", "tĩnh mạch chủ → mao mạch → động mạch chủ.", "động mạch chủ → tĩnh mạch chủ → mao mạch.", "mao mạch → tĩnh mạch chủ → động mạch chủ."],
    ["Huyết áp cao nhất ở động mạch, giảm ở tĩnh mạch và thấp nhất ở mao mạch.", "Huyết áp cao nhất ở động mạch, giảm ở mao mạch và thấp nhất ở tĩnh mạch.", "Huyết áp cao nhất ở động mạch, tĩnh mạch và thấp nhất ở mao mạch.", "Huyết áp cao nhất ở động mạch chủ và giữ ổn định ở tĩnh mạch, mao mạch."],
    ["1, 2, 3, 4, 5.", "1, 2, 3, 4, 6.", "2, 3, 4, 5, 6.", "1, 2, 3, 5, 6."],
    ["2", "3", "4", "5"],
    ["2", "3", "4", "5"],
    ["2", "3", "1", "4"],
    ["2", "3", "1", "4"],
    ["2", "3", "1", "4"],
    ["Có nhịp tim nhanh nên bị cao huyết áp.", "Vì khả năng hấp thụ chất dinh dưỡng kém dễ gây thiếu máu nên thường bị cao huyết áp.", "Tạo ra sức cản của thành mạch đối với tốc độ dòng chảy của máu cao.", "Có lực co bóp của tim mạnh nên bị cao huyết áp."],
    ["1", "2", "3", "4"],
];

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    0, 0, 0, 2, 0,
    0, 1, 3, 0, 0,
    2, 0, 3, 0, 2,
    1, 0, 1, 1, 2,
    2, 2, 0, 1, 3,
    3, 0, 0, 3, 1,
    1, 1, 0, 1, 1,
    3, 2, 2, 
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
