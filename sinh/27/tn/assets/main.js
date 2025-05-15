const questions = [
    "Hình thức sinh sản mà cơ thể mẹ nguyên phân nhiều lần để tạo thành một chồi non, chồi con tách khỏi mẹ tạo thành cá thể mới được gọi là",
    "Trong sinh sản vô tính các cá thể mới sinh ra",
    "Ở ong mật, kết quả của quá trình trinh sản là tạo ra",
    "Giun dẹp có khả năng thắt giữa để tạo ra 2 cơ thể mới hoặc cơ thể có thể tách ra nhiều phần và mỗi phần tạo ra một cơ thể mới. Giun dẹp có các hình thức sinh sản nào sau đây?",
    "Sinh sản hữu tính ở động vật là",
    "Trong cơ chế điều hòa sinh tinh ở động vật, GnRH có vai trò kích thích",
    "Trong cơ chế điều hòa sinh tinh ở động vật, hormone LH có vai trò kích thích",
    "Ở nam giới, testosterone có vai trò kích thích",
    "Trong cơ chế điều hòa sinh sản, hormone LH ở phụ nữ có vai trò kích thích",
    "Trong cơ chế điều hòa sinh trứng, hormone FSH có vai trò kích thích",
    "Ở nam giới, khi nồng độ testosterone trong máu cao có tác dụng",
    "Khi nồng độ testôstêron trong máu cao có tác dụng",
    "Khi nồng độ estrogen và progesterone trong máu tăng cao sẽ",
    "Trong cơ chế điều hoà sinh trứng, nồng độ hormone progesterone và estrogen cao gây",
    // tln
    "Thứ tự đúng của các giai đoạn trong quá trình sinh sản hữu tính ở người. <br> (1) Thụ tinh <br> (2) Hình thành giao tử <br> (3) Đẻ con <br> (4) Phát triển phôi thai <br>",
    "Cho các giai đoạn sau: <br> 1. Tinh trùng thụ tinh với trứng ở vòi trứng <br> 2. Hợp tử phân chia tạo thành phôi <br> 3. Dưới tác dụng của oxytocin, cổ tử cung mở rộng, thai được đẩy ra ngoài <br> 4. Phôi phát triển thành thai trong tử cung <br> Trật tự đúng các giai đoạn trong quá trình sinh sản hữu tính ở người là như thế nào?",
    "Cho các biện pháp điều hòa sinh sản sau: tránh thai ức chế quá trình chín và rụng trứng, lựa chọn giới tính thai nhi, tránh thai ngăn cản tinh trùng gặp trứng, thay đổi điều kiện nhiệt độ, tránh thai ngăn cản sự làm tổ của phôi thai trong tử cung. Có bao nhiêu biện pháp đang được áp dụng ở người?",
    "Trong số các loài sau đây có bao nhiêu loài đẻ con: bò, thú mỏ vịt, cá voi, cá sấu, ếch nhái",
];

const answers = [
    ["trinh sinh", "phân đôi", "phân mảnh", "nảy chồi"],
    ["giống nhau và giống cá thể gốc", "khác nhau và giống cá thể gốc", "giống nhau và khác cá thể gốc", "khác nhau và khác cá thể gốc"],
    ["ong đực mang bộ NST lưỡng bội", "ong đực mang bộ NST đơn bội", "ong thợ mang bộ NST đơn bội", "ong đực mang bộ NST lưỡng bội"],
    ["Phân đôi và trinh sinh", "Nảy chồi và phân mảnh", "Nảy chồi và phân đôi", "Phân mảnh và phân đôi"],
    ["sự kết hợp của nhiều giao tử đực với 1 giao tử cái -> hợp tử -> cơ thể mới", "kiểu sinh sản tạo ra cơ thể mới qua hình thành và hợp nhất hai giao tử đơn bội (đực và cái) -> hợp tử -> cơ thể mới", "sự kết hợp có chọn lọc của hai giao tử đực và cái -> hợp tử -> cơ thể mới", "sự kết hợp có chọn lọc của nhiều giao tử cái và nhiều giao tử đực -> hợp tử -> cơ thể mới"],
    ["ống sinh tinh phát triển", "tế bào kẽ sản sinh ra testosterone", "ống sinh tinh sản xuất ra tinh trùng", "tuyến yên tiết FSH và LH"],
    ["ống sinh tinh sản xuất tinh trùng", "tế bào kẽ tiết ra hormone testosterone", "vùng dưới đồi sản xuất hormone GnRH", "tuyến yên sản xuất hormone ICSH (LH)"],
    ["vùng dưới đồi tiết GnRH", "tế bào Sertoli của tinh hoàn tiết inhibin", "ống sinh tinh sản xuất ra tinh trùng", "tuyến yên tiết FSH"],
    ["buồng trứng tạo trứng", "dạ con phát triển chuẩn bị cho hợp tử làm tổ", "trứng chín, rụng, tạo thể vàng", "nang trứng phát triển và tiết estrogen"],
    ["buồng trứng tạo trứng", "vùng dưới đồi tiết GnRH", "trứng chín, rụng, tạo thể vàng", "nang trứng phát triển và tiết estrogen"],
    ["ức chế tuyến yên và vùng dưới đồi, làm giảm tiết GnRH, FSH và LH", "ức chế tuyến yên và vùng dưới đồi, làm hai bộ phận này mất chức năng", "ức chế tuyến yên tiết FSH và LH, đồng thời kích thích vùng dưới đồi làm tăng tiết GnRH", "kích thích tuyến yên và vùng dưới đồi, làm tăng tiết GnRH, FSH và LH"],
    ["gây ức chế ngược lên vùng dưới đồi và tuyến yên giảm tiết hormone gây ức chế quá trình sinh tinh trùng", "gây ức chế ngược lên vùng dưới đồi và tuyến yên giảm tiết hormone làm cho trứng không chín và rụng", "kích thích vùng dưới đồi và tuyến yên tăng tiết hormone kích thích quá trình sinh tinh trùng", "kích thích vùng dưới đồi và tuyến yên giảm tiết hormone ức chế quá trình sinh tinh trùng"],
    ["kích thích quá trình sinh trứng", "làm cho trứng không chín và rụng", "làm niêm mạc tử cung bong ra", "kích thích nang trứng phát triển"],
    ["ức chế tuyến yên giảm tiết hormone FSH và LH", "ức chế vùng dưới đồi và tuyến yên giảm tiết hormone GnRH, FSH và LH", "kích thích vùng dưới đồi và tuyến yên tăng tiết hormone GnRH, FSH và LH", "ức chế vùng dưới đồi giảm tiết hormone GnRH"],
    // tln
    ["2 -> 1 -> 4 -> 3", "1 -> 2 -> 4 -> 3", "1 -> 4 -> 2 -> 3", "1 -> 2 -> 3 -> 4"],
    ["1 -> 2 - > 4 -> 3", "1 -> 2 -> 3 -> 4", "1 -> 3 -> 4 -> 2", "3 -> 1 -> 2 -> 4"],
    ["3", "4", "5", "6"],
    ["2", "1", "3", "4"],
];


const correctAnswers = [
    3, 0, 1, 3, 1,
    3, 1, 2, 2, 3,
    0, 0, 1, 1, 
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
