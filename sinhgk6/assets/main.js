const questions = [
    "Hô hấp là quá trình",
    "… là quá trình phân giải các hợp chất hữu cơ phức tạp, phổ biến là cacborhydrate thành các chất đơn giản (CO2 và H2O), đồng thời giải phóng năng lượng ATP và nhiệt.",
    "Các giai đoạn của hô hấp tế bào diễn ra theo trật tự nào?",
    "Đường phân → Chu trình crep → Chuổi chuyền êlectron hô hấp là các giai đoạn của",
    "Đường phân → lên men là các giai đoạn của",
    "Giai đoạn nào chung cho quá trình lên men và hô hấp hiếu khí?",
    "Quá trình hô hấp trong cơ thể thực vật, trải qua các giai đoạn",
    "Sản phẩm của phân giải kị khí (đường phân và lên men) từ axit piruvic là",
    "Đâu không phải là vai trò của hô hấp ở thực vật?",
    "Vai trò của hô hấp đối với cơ thể thực vật là. <br>1.Năng lượng(ATP) sinh ra từ hô hấp được sử dụng cho hầu hết các hoạt động sống của cây như tổng hợp và vận chuyển các chất, sinh trưởng và phát triển, cảm ứng,… <br>2.Nhiệt năng được giải phóng ra trong hô hấp giúp duy trì nhiệt độ cơ thể, đảm bảo cho các hoạt động sống trong cơ thể thực vật diễn ra một cách bình thường. <br>3.Các sản phẩm trung gian được tạo ra từ quá trình hô hấp ở thực vật (đường 3 carbon, pyruvate,…) là nguyên liệu để tổng hợp nên các hợp chất hữu cơ trong cơ thể như protein, acid béo,… <br>4.Cung cấp nguồn thức ăn cho sinh vật dị dưỡng và là nguồn nguyên liệu cho sản xuất công nghiệp, chế biến dược phẩm của con người; cung cấp năng lượng, điều hoà không khí.",
    "Khi nói về vấn đề hô hấp ở thực vật, nhân tố môi trường nào sau đây không tác động đến hô hấp?",
    "Nhận định nào sau đây là đúng nhất?",
    "Nhận định nào sau đây là sai?",
    "Khi nói về ảnh hưởng của các nhân tố môi trường đến quá trình hô hấp hiếu khí ở thực vật, phát biểu nào sau đây sai?",
    "Các yếu tố ảnh hưởng đến hô hấp ở thực vật gồm",
    "Vai trò quan trọng nhất của hô hấp đối với cây trồng là",
    "Chọn từ thích hợp điền vào chỗ trống sau: ...là quá trình phân giải các hợp chất hữu cơ phức tạp, phổ biến là carbohydrate thành các chất đơn giản (CO2 và H2O), đồng thời giải phóng năng lượng ATP và nhiệt năng.",
    "Những phát biểu nào sau đây đúng khi nói về vai trò của hô hấp đối với cơ thể thực vật? <br>1.Năng lượng (ATP) sinh ra từ hô hấp được sử dụng cho hầu hết các hoạt động sống của cây như tổnghợp và vận chuyển các chất, sinh trưởng và phát triển, cảm ứng,… <br>2.Nhiệt năng được giải phóng ra trong hô hấp giúp duy trì nhiệt độ cơ thể, đảm bảo cho các hoạt động sống trong cơthể thực vật diễn ra một cách bình thường. <br>3.Các sản phẩm trung gian được tạo ra từ quá trình hô hấp ở thực vật (đường 3 carbon, pyruvate,…) là nguyên liệu để tổng hợp nên các hợp chất hữu cơ trong cơ thể như protein, acid béo,… <br>4.Cung cấp nguồn thức ăn cho sinh vật dị dưỡng và là nguồn nguyên liệu cho sản xuất công nghiệp, chế biến dượcphẩm của con người; cung cấp năng lượng, điều hoà không khí.",
    "Khi nói về ảnh hưởng của các nhân tố môi trường đến quá trình hô hấp hiếu khí ở thực vật, phát biểu nào sau đây sai?",
    // "",
];

const answers = [
    ["A. oxi hóa các hợp chất hữu cơ thành CO2 và H2O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.", "B. oxi hóa các hợp chất hữu cơ thành O2 và H2O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.", "C. oxi hóa các hợp chất hữu cơ thành CO2 và H2O, đồng thời tích lũy năng lượng cần thiết cho các hoạt động sống của cơ thể.", "D. khử các hợp chất hữu cơ thành CO2 và H2O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể.", 0],
    ["A. quang hợp ở thực vật.", "B. hô hấp sáng ở thực vật.", "C. hô hấp ở thực vật.", "D. Lên men.", 1],
    ["A. Chu trình crep → Đường phân → Chuổi chuyền êlectron hô hấp.", "B. Đường phân → Chuổi chuyền êlectron hô hấp → Chu trình crep.", "C. Đường phân → Chu trình crep → Chuổi chuyền êlectron hô hấp.", "D. Chuổi chuyền êlectron hô hấp → Chu trình crep → Đường phân.", 2],
    ["A. phân giải hiếu khí.", "B. hô hấp sáng.", "C. phân giải kị khí.", "D. Lên men.", 0],
    ["A. phân giải hiếu khí.", "B. hô hấp sáng.", "C. phân giải kị khí.", "D. hô hấp hiếu khí.", 2],
    ["A. Chu trình Crep.", "B. Chuỗi chuyền điện tử electron.", "C. Đường phân.", "D. Tổng hợp axetyl – CoA.", 2],
    ["A. đường phân và hô hấp hiếu khí.", "B. đường phân hiếu khí và chu trình Crep.", "C. cacboxi hóa - khử - tái tạo chất nhận.", "D. oxy hóa chất hữu cơ và khử.", 0],
    ["A. rượu etylic + CO2 + năng lượng.", "B. axit lactic + CO2 + năng lượng.", "C. rượu etylic + năng lượng.", "D. rượu etylic + CO2.", 0],
    ["A. Giải phóng năng lượng ATP.", "B. Giải phóng năng lượng dạng nhiệt.", "C. Tạo các sản phẩm trung gian.", "D. Tổng hợp các chất hữu cơ.", 3],
    ["A. (1), (2) và (3).", "B. (2), (3) và (4).", "C. (1), (2) và (4).", "D. (1), (3) và (4).", 2],
    ["A. Nhiệt độ.", "B. Nồng độ khí CO2.", "C. Nồng độ khí Nitơ (N2).", "D. Hàm lượng nước.", 2],
    ["A. Hàm lượng nước tỉ lệ nghịch với cường độ hô hấp.", "B. Cường độ hô hấp và nhiệt độ tỉ lệ thuận với nhau.", "C. Nồng độ CO2 cao sẽ ức chế hô hấp.", "D. Nồng độ CO2 thấp sẽ ức chế hô hấp.", 1],
    ["A. Hàm lượng nước tỉ lệ thuận với cường độ hô hấp.", "B. Cường độ hô hấp và nhiệt độ luôn tỉ lệ thuận với nhau.", "C. Nồng độ CO2 cao sẽ ức chế hô hấp.", "D. Vượt qua nhiệt độ tối ưu thì cường độ hô hấp giảm.", 2],
    ["A. Hô hấp bị ảnh hưởng nếu O2 giảm dưới 10%.", "B. Nhiệt độ môi trường ảnh hưởng đến hô hấp ở thực vật.", "C. Nồng độ CO2 cao có thể ức chế quá trình hô hấp.", "D. Trong điều kiện thiếu ôxi, thực vật tăng cường quá trình hô hấp hiếu khí.", 3],
    ["A. Nước, nhiệt độ, hàm lượng O2.", "B. Nước, nhiệt độ, hàm lượng CO2.", "C. Nước, hàm lượng O2, CO2.", "D. Nước, nhiệt độ, hàm lượng O2, CO2.", 3],
    ["A. Cung cấp năng lượng chống chịu.", "B. Tăng khả năng chống chịu.", "C. Tạo ra sản phẩm trung gian.", "D. Miễn dịch cho cây.", 0],
    ["A. Quang hợp ở thực vật.", "B. Hô hấp ở thực vật.", "C. Lên men.", "D. Hô hấp sáng ở thực vật.", 1],
    ["A. I, III và IV.", "B. I, II và IV.", "C. I, II và III.", "D. II, III và IV.", 2],
    ["A. Nhiệt độ môi trường ảnh hưởng đến hô hấp ở thực vật.", "B. Các loại hạt khô như hạt thóc, hạt ngô có cường độ hô hấp thấp.", "C. Nồng độ CO2 cao có thể ức chế quá trình hô hấp.", "D. Trong điều kiện thiếu oxy, thực vật tăng cường quá trình hô hấp hiếu khí.", 3],
    // ["aaaaa", "bbbbb", "ccccc", "ddddd", 
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

console.log(questions.length , answers.length);


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
        questionContent.innerHTML = `Câu hỏi ${viTri+1}: ${questions[shuffledArray[viTri]]}`
        answerDesc.forEach((val, idx) => {
            val.innerHTML = `${answers[shuffledArray[viTri]][idx]}`;
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
            answerDesc.forEach(val => {
                val.style.color = "#000";
            });
            
            questionItem.forEach((val, idx) => {
                if(viTri === idx) {
                    answerDesc[lastElements[idx]].style.color = "red";
                }
            });
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

    document.addEventListener('keydown', function(event) {
        if(event.key === 'ArrowLeft') {
            if(viTri > 0) {{
                updateQuestion(viTri-1);
                showAnswer();
            }}  
        } 
        else if(event.key === 'ArrowRight') {
            if(viTri < questions.length - 1) {{
                updateQuestion(viTri+1);
                showAnswer();
            }}  
        }
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