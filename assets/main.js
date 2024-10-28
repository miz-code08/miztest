const questions = [
    "Trong quá trình trao đổi chất, con người không lấy vào cơ thể chất nào sau đây?",
    "Quá trình hấp thụ khí Oxy và thải ra khí Carbon Dioxide diễn ra ở hệ cơ quan nào trong cơ thể?",
    "Dựa vào kiểu trao đổi chất, người ta chia sinh vật thành hai nhóm. Đó là?",
    "Trong các sinh vật sau, nhóm sinh vật nào có khả năng tự dưỡng?",
    "Chuyển hóa năng lượng là?",
    "Quá trình trao đổi chất và chuyển hóa năng lượng giúp cơ thể sinh vật",
    "Chất nào sau đây là sản phẩm của quá trình trao đổi chất được động vật thải ra môi trường?",
    "Trong quá trình trao đổi chất, luôn có sự",
    "Sinh vật có thể tồn tại, sinh trưởng, phát triển và thích nghi với môi trường sống nhờ vào quá trình nào?",
    "Đồng hóa là?",
    "Cho các chất sau: 1.Oxigen 2.Carbon dioxide 3.Chất dinh dưỡng 4.Nước uống 5.Năng lượng nhiệt 6.Chất thải. Trong quá trình trao đổi chất ở người, cơ thể thu nhận những chất nào sau đây?",
    "Trong cơ thể người, chất hữu cơ được phân giải để giải phóng năng lượng có nguồn gốc từ sự trao đổi chất ở hệ:",
    "Trong tế bào và cơ thể sinh vật, năng lượng chủ yếu được trữ trong các:",
    "Trong quá trình quang hợp của cây xanh, cây có thể tự tổng hợp được chất hữu cơ nhờ ánh sáng mặt trời, nước và khí carbon dioxide. Năng lượng trong quá trình này là sự chuyển hóa năng lượng từ dạng:",
    "Cho các nhận định sau: 1.Trao đổi chất giữa cơ thể và môi trường là điều kiện tồn tại và phát triển của cơ thể, là đặc tính cơ bản của sự sống. 2.Uống đủ nước, thức khuya, luyện tập thể dục thể thao sẽ thúc đẩy quá trình trao đổi chất ở cơ thể. 3.Tùy theo việc kiểm tra đủ chất, người ta chia sinh vật thành hai nhóm là sinh vật dị dưỡng và sinh vật hóa dưỡng. 4.Trong cơ thể con người đã có quá trình biến đổi hóa học thức ăn thành năng lượng cung cấp cho mọi hoạt động sống hàng ngày. Trong số các nhận định trên, số nhận định đúng là:",
    // "",
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
    ["A. Quá trình trao đổi chất và sinh sản", "B. Quá trình chuyển hóa năng lượng", "C. Hiệu quả trao đổi chất và chuyển hóa năng lượng", "D. Quá trình trao đổi chất và cảm ứng", 2],
    ["A. Phân hủy các chất.", "B. Tổng hợp chất mới, tích lũy năng lượng.", "C. Giải phóng năng lượng.", "D. Biến đổi các chất.", 1],
    ["A. 1, 2, 3, 4, 5", "B. 1, 2, 3, 4", "C. 1, 3, 4, 5", "D. 1, 3, 4", 3],
    ["A. Bài tiết", "B. Tuần hoàn", "C. Tiêu hóa", "D. Thần kinh", 2],
    ["A. Liên kết hóa học", "B. Mô mỡ và máu", "C. Phản ứng", "D. Bào quan của tế bào", 0],
    ["A. Nhiệt năng thành hóa năng", "B. Quang năng thành nhiệt năng", "C. Quang năng thành hóa năng", "D. Nhiệt năng thành quang năng", 2],
    ["A. 1", "B. 2", "C. 3", "D. 4", 1],
    // ["aaaaa", "bbbbb", "ccccc", "ddddd", 0],
];

// tạo câu hỏi
const questionTable = document.querySelector(`.question__table`);
questions.forEach((_, index) => {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question__item');
    questionItem.textContent = index + 1; // Thiết lập nội dung là số thứ tự
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
                if(val.classList.contains('red')) {
                    if(viTri === idx) {
                        answerDesc.forEach(val => {
                            val.style.color = "#000";
                        })
                        answerDesc[lastElements[idx]].style.color = "red";
                    }
                }
                else {
                    answerDesc.forEach(val => {
                        val.style.color = "#000";
                    })
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
    if(window.innerWidth < 767.98) {
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