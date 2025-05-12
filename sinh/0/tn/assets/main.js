const questions = [
    // bài 22
    "Qúa trình sinh trưởng và phát triển của động vật được chia làm hai giai đoạn chủ yếu",
    "Nhân tố nào là nhân tố bên trong tham gia điều hòa quá trình sinh trưởng và phát triển của động vật?",
    "Các yếu tố bên ngoài ảnh hưởng đến sinh trưởng và phát triển ở động vật là",
    "Các yếu tố bên trong ảnh hưởng đến sinh trưởng và phát triển ở động vật là",
    "Biến thái là sự thay đổi",
    "Những hoocmon nào sau đây điều hòa sinh trưởng và phát triển ở động vật có xương sống?",
    "Tác dụng của hoocmon sinh trưởng GH là:",
    "Thyrôxine có tác dụng kích thích và duy trì",
    "Testosterone được sinh sản ra ở",
    "Estrogen được sinh ra ở",
    "Nếu tuyến yên sản sinh ra quá ít hoặc quá nhiều hoocmôn sinh trưởng ở giai đoạn trẻ em sẽ dẫn đến hậu quả",
    "Những hormone nào gây dậy thì ở trẻ em nam và nữ?",
    "Tắm nắng vào lúc sáng sớm hay chiều tối (ánh sáng yếu) có lợi cho sự sinh trưởng và phát triển của trẻ nhỏ vì tia tử ngoại làm cho tiền vitamin D biến thành vitamin D có vai trò",
    "Khi nói về ảnh hưởng của nhiệt độ đến sinh trưởng và phát triển của động vật, phát biểu nào sau đây sai?",
    "Đối với gia súc, ở mùa có khí hậu lạnh thì sự sinh trưởng và phát triển chậm hơn mùa có khí hậu thích hợp. Nguyên nhân chủ yếu là vì:",
    "Khi nói về các yếu tố ảnh hưởng đến sinh trưởng và phát triển ở động vật, có bao nhiêu nhận định sau đây sai? <br> I. Sinh trưởng và phát triển ở động vật có thể chịu ảnh hưởng bởi các nhân tố bên trong và các yếu tố bên ngoài cơ thể. <br> II. Thức ăn là yếu tố quan trọng gây ảnh hưởng đến sự sinh trưởng và phát triển ở động vật. <br> III. Yếu tố di truyền là yếu tố quyết định tốc độ phát triển của động vật. <br> IV. Tất cả các loài động vật có thể sinh trưởng và phát triển tốt trong mọi điều kiện nhiệt độ khác nhau.",
    "Cho các biện pháp sau đây <br> (1) Cải tạo giống. <br> (2) Cải thiện môi trường sống. <br> (3) Chuyển đổi cơ cấu chăn nuôi. <br> (4) Cải thiện chất lượng dân số. <br> (5) Kế hoạch hoá gia đình. <br> Số biện pháp điều khiển sự sinh trưởng và phát triển ở động vật và người là",
    "Để bảo vệ sức khỏe, chăm sóc bản thân và người khác, nam nữ ở tuổi dậy thì, có bao nhiêu nhận định sau đây là đúng? <br> (1) Chủ động tìm hiểu kiến thức về giới tính, sức khỏe sinh sản từ những nguồn thông tin đáng tin cậy. <br> (2) Không xem phim ảnh, trang mạng không phù hợp. <br> (3) Nên quan hệ tình dục trước tuổi trưởng thành. <br> (4) Không sử dụng các chất kích thích để tránh những ảnh hưởng tiêu cực đến sức khỏe thể chất và tinh thần. <br> (5) Nâng cao sức khỏe, vệ sinh cá nhân và cơ quan sinh dục đúng cách, sinh hoạt điều độ, tập thể dục thường xuyên; có chế độ dinh dưỡng hợp lí giúp nâng cao sức đề kháng cho cơ thể.",
    "Để bảo vệ sức khỏe, chăm sóc bản thân và người khác, nam nữ ở tuổi dậy thì, có bao nhiêu nhận định sau đây là sai? <br> (1) Chủ động tìm hiểu kiến thức về giới tính, sức khỏe sinh sản từ những nguồn thông tin đáng tin cậy. <br> (2) Xem phim ảnh, trang mạng không phù hợp. <br> (3) Nên quan hệ tình dục trước tuổi trưởng thành. <br> (4) Không sử dụng các chất kích thích để tránh những ảnh hưởng tiêu cực đến sức khỏe thể chất và tinh thần. <br> (5) Nâng cao sức khỏe, vệ sinh cá nhân và cơ quan sinh dục đúng cách, sinh hoạt điều độ, tập thể dục thường xuyên; có chế độ dinh dưỡng hợp lí giúp nâng cao sức đề kháng cho cơ thể.",
    // tln
    "Cho các hormone sau đây: <br> (1) Hormone sinh trưởng (GH). <br> (2) Hormone ecdysone. <br> (3) Hormone thyroxine. <br> (4) Hormone juvenile. <br> (5) Hormone testosterone. <br> (6) Hormone estrogen. <br> Những hormone nào gây ảnh hưởng đến quá trình sinh trưởng và phát triển ở động vật có xương sống?",
    "Cho các hormone sau đây: <br> (1) Hormone sinh trưởng (GH). <br> (2) Hormone ecdysone. <br> (3) Hormone thyroxine. <br> (4) Hormone juvenile. <br> (5) Hormone testosterone. <br> (6) Hormone estrogen. <br> Những hormone nào tác động đến quá trình sinh trưởng và phát triển ở bướm?",
    "Vòng đời phát triển của bướm gồm 4 giai đoạn: <br> (1) trứng <br> (2) sâu bướm <br> (3) nhộng <br> (4) bướm trưởng thành. <br> Những giai đoạn nào thuộc giai đoạn phát triển hậu phôi?",
    "Hiện nay, chăn nuôi lợn rừng đang phát triển ở nhiều nơi và trở thành một hướng phát triển kinh tế cho bà con nông dân. Trong chăn nuôi lợn rừng, nhiều người chăn nuôi đang gặp vấn đề sinh sản của lợn nái như lợn nái chậm động dục, động dục nhưng phối giống không đạt, hoặc phối đạt nhưng đẻ ít con…Hiện tượng này thường gặp đối với những người nuôi lợn rừng của Việt Nam hoặc lợn nái lai giữa lợn rừng Việt Nam với lợn địa phương miền núi. Có bao nhiêu giải pháp sau đây cần áp dụng giúp nâng cao năng suất sinh sản của lợn rừng? <br> (1) Sử dụng thức ăn dinh dưỡng phù hợp theo từng giai đoạn sinh trưởng. <br> (2) Sử dụng hormone để kích thích hoạt động sinh dục của lợn nái. <br> (3) Tăng số lần phối giống khi lợn nái động dục. <br> (4) Vệ sinh chuồng trại, tiêm vacxin phòng bệnh cho lợn nuôi.",
];

const answers = [
    // bài 22
    ["giai đoạn phôi và giai đoạn hậu phôi", "giai đoạn phôi và giai đoạn trứng", "giai đoạn ấu trùng và giai đoạn hậu phôi", "giai đoạn trứng và giai đoạn hậu phôi"],
    ["Testosterone", "Thyroxine", "Thức ăn", "Hoocmon"],
    ["di truyền và hormone", "di truyền, hormone, thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ"],
    ["di truyền và hormone", "di truyền, hormone thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ và ánh sáng", "thức ăn, nhiệt độ, ánh sáng và hormone"],
    ["đột ngột về hình thái, cấu tạo và từ từ về sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra", "từ từ về hình thái, cấu tạo và đột ngột về sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra", "đột ngột về hình thái, cấu tạo và sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra", "từ từ về hình thái, cấu tạo và về sinh lý của động vật sau khi sinh ra hoặc nở từ trứng ra"],
    ["Hoocmon sinh trưởng, estrogen, testosterone, ecdysone, juvenile", "Hoocmon sinh trưởng, thyroxin, estrogen, testosterone", "Hoocmon thyroxine, estrogen, estrogen, ecdysone, juvenile", "Hoocmon sinh trưởng, hyroxine, estrogen, testosterone, juvenile"],
    ["tăng cường tất cả các quá trình trao đổi chất trong cơ thể", "tăng cường khả năng hấp thụ các chất protein, lipit, gluxit", "tăng cường quá trình tổng hợp protein", "tăng cường quá trình chuyển hóa Ca vào xương"],
    ["quá trình sinh tổng hợp protein, do đó kích quá trình phân bào và tăng kích thước tế bào,  vì vậy làm tăng cường sự sinh trưởng của cơ thể", "chuyển hóa ở tế bào, qua đó tác động lên quá trình sinh trưởng và phát triển bình thường của cơ thể", "sự sinh trưởng và phát triển các đặc điểm sinh dục phụ ở con đực", "sự sinh trưởng và phát triển các đặc điểm sinh dục phụ ở con cái"],
    ["tuyến giáp", "tuyến yên", "tinh hoàn", "buồng trứng"],
    ["tuyến giáp", "buồng trứng", "tuyến yên", "tinh hoàn"],
    ["chậm lớn hoặc ngừng lớn,  trí tuệ kém", "các đặc điểm sinh dục phụ nữ kém phát triển", "người bé nhỏ hoặc khổng lồ", "các đặc điểm sinh dục nam kém phát triển"],
    ["Do tác động của tăng testosterone ở nam và tăng estrogen ở nữ", "Do tác động của tăng testosterone ở nữ và tăng estrogen ở nam", "Do tác động của tăng testosterone ở cả nam và nữ", "Do tác động của tăng estrogen ở cả nam và nữ"],
    ["chuyển hóa Na để hình thành xương", "chuyển hóa Ca để hình thành xương", "chuyển hóa K để hình thành xương", "oxi hóa để hình thành xương"],
    ["Ảnh hưởng của nhiệt độ chủ yếu thông qua ảnh hưởng đến hoạt tính enzim", "Tất cả vật nuôi khi nhiệt độ xuống thấp sẽ làm cơ thể mất nhiều năng lượng để duy trì thân nhiệt làm vật nuôi chậm lớn", "Ở côn trùng nhiệt độ môi trường tăng lên (trong giới hạn sống của chúng) thì tuổi thọ bị rút ngắn lại", "Nhiệt độ ảnh hưởng đến tốc độ các quá trình sinh lí, sinh hóa trong cơ thể"],
    ["Thân nhiệt giảm làm cho sự chuyển hóa, sinh sản giảm", "Cơ thể mất nhiều năng lượng để duy trì thân nhiệt", "Thân nhiệt giảm làm cho sự chuyển hóa trong cơ thể giảm làm hạn chế tiêu thụ năng lượng", "Thân nhiệt giảm làm cho sự chuyển hóa trong cơ thể giảm, sinh sản tăng"],
    ["1", "2", "3", "4"],
    ["2", "3", "4", "5"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    // tln
    ["1, 3, 5, 6", "2 , 4", "1, 3, 4, 6", "1, 2, 4, 5, 6"],
    ["2, 4", "1, 3, 5, 6", "1, 3, 4, 6", "1, 2, 4, 5, 6"],
    ["1, 2, 3", "2 ,3", "1, 3, 4", "1, 2, 3, 4"],
    ["1, 2, 3, 4", "2, 3", "1, 3, 4", "4"],
];

const correctAnswers = [
    // bài 22
    0, 3, 2, 0, 2,
    1, 2, 1, 2, 1,
    2, 0, 1, 1, 1,
    0, 2, 3, 1,     
    // tln
    0, 0, 0, 0,
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
