const questions = [
    "Trong quá trình trao đổi chất, con người không lấy vào cơ thể chất nào sau đây?",
    "Quá trình hấp thụ khí Oxy và thải ra khí Carbon Dioxide diễn ra ở hệ cơ quan nào trong cơ thể?",
    "Dựa vào kiểu trao đổi chất, người ta chia sinh vật thành hai nhóm. Đó là?",
    "Trong các sinh vật sau, nhóm sinh vật nào có khả năng tự dưỡng?",
    "Chuyển hóa năng lượng là?",
    "Quá trình trao đổi chất và chuyển hóa năng lượng giúp cơ thể sinh vật",
    "Chất nào sau đây là sản phẩm của quá trình trao đổi chất được động vật thải ra môi trường?",
    "Trong quá trình trao đổi chất luôn có sự",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

const answers = [
    ["A. Nước uống", "B. Thức ăn", "C. Carbon dioxide", "D. Oxygen", 2],
    ["A. Hệ tuần hoàn", "B. Hệ hô hấp", "C. Hệ tiêu hóa", "D. Hệ thần kinh", 1],
    ["A. Nhóm sinh vật tự dưỡng và nhóm sinh vật hoại dưỡng", "B. Nhóm sinh vật tự dưỡng và nhóm sinh vật dị dưỡng", "C. Nhóm sinh vật dị dưỡng và nhóm sinh vật ngoại dưỡng", "D. Nhóm sinh vật dị dưỡng và nhóm sinh vật hóa dưỡng", 1],
    ["A. Tảo, cá, chim, rêu, cây xà cừ", "B. Tảo, nấm, rau, lúa, cây xà cừ", "C. Con người, vật nuôi, cây trồng", "D. Tảo, trùng roi xanh, lúa, cây xà cừ", 3],
    ["A. Quá trình biến đổi năng lượng từ dạng này sang dạng khác", "B. Quá trình biến đổi năng lượng ánh sáng thành năng lượng hóa học", "C. Quá trình biến đổi năng lượng hóa học thành nhiệt năng", "D. Quá trình biến đổi năng lượng để hoạt động hàng ngày", 0],
    ["A. Phát triển kích thước theo thời gian", "B. Tồn tại, sinh trưởng, phát triển, sinh sản", "C. Cân tịnh và vận động", "D. Tích lũy năng lượng", 1],
    ["A. Oxygen", "B. Carbon Dioxide", "C. Chất dinh dưỡng", "D. Vitamin", 1],
    ["A. Giải phóng năng lượng", "B. Tích lũy (lưu trữ) năng lượng", "C. Giải phóng hoặc tích lũy năng lượng", "D. Phản ứng dị hóa", 2],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
    ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
];

const userAnswer = new Array(questions.length).fill(null);
const startTime = Date.now();
let time;

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
    function createShuffledArray(n) {
        const array = Array.from({ length: n }, (_, index) => index);
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }    
        return array;
    }    

    const shuffledArray = createShuffledArray(questions.length);
    const lastElements = shuffledArray.map(i => answers[i][answers[i].length - 1]);

    function updateQuestion(e) {
        radio.forEach((val, idx) => {
            if(val.checked) {
                userAnswer[viTri] = idx;
            }
            val.checked = false;
        });
        viTri = e;
        if(userAnswer[viTri] != null) {
            radio[userAnswer[viTri]].checked = true;
        }
        questionContent.textContent = `Câu hỏi ${viTri+1}: ${questions[shuffledArray[viTri]]}`
        answerDesc.forEach((val, idx) => {
            val.textContent = `${answers[shuffledArray[viTri]][idx]}`;
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

        // Tính toán giờ, phút và giây
        const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);

        // Định dạng thành HH:MM:SS
        const formattedTime = [
            String(hours).padStart(2, '0'),
            String(minutes).padStart(2, '0'),
            String(seconds).padStart(2, '0')
        ].join(':');

        document.querySelector('.time__cnt').innerText = formattedTime;

        return formattedTime;
    }
    timerInterval = setInterval(updateTimeDisplay, 1000);

    function updateResults() {
        lastElements.forEach((val, idx) => {
            if(val === userAnswer[idx]) {
                score++;
                questionItem[idx].classList.add("green");
            }
            else {
                questionItem[idx].classList.add("red");
            }
            
        });
        scoreDesc.textContent = `Số câu đúng: ${score}/${questions.length}`;
    }

    function showAnswer() {
        if(show) {
            questionItem.forEach((val, idx) => {
                if (val.classList.contains('red')) {
                    if(viTri === idx) {
                        answerDesc.forEach(val => {
                            val.style.color = "#000";
                        })
                        answerDesc[lastElements[idx]].style.color = "red";
                    }
                }
            })
        }        
    }


    questionItem.forEach((val, idx) => {
        val.addEventListener("click", () => {
            updateQuestion(idx);
            showAnswer();
        });
    });    

    prevBtn.addEventListener("click", () => {
        if(viTri > 0) {{
            updateQuestion(viTri-1);
            showAnswer();
        }}        
    });

    nextBtn.addEventListener("click", () => {
        if(viTri < questions.length - 1) {{
            updateQuestion(viTri+1);
            showAnswer();
        }}        
    });

    radio.forEach((val, idx) => {
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
};