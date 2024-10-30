const questions = [
    "Quang hợp ở thực vật là quá trình gì?",
    "Phương trình tổng quát của quang hợp ở thực vật là gì?",
    "Phát biểu nào sau đây đúng khi nói về vai trò của quang hợp đối với thực vật?",
    "Phát biểu nào sau đây đúng khi nói về vai trò của quang hợp đối với sinh quyển?",
    "Những phát biểu nào sau đây đúng khi nói về vai trò của quang hợp đối với sinh vật? <br>1.Tạo ra đường xây dựng nên tế bào, cơ thể đồng thời làm nguyên liệu cho quá trình giải phóng năng lượng và là nguồn dự trữ năng lượng. <br> 2.Giải phóng O2 cung cấp dưỡng khí cho nhiều sinh vật trên Trái Đất. <br>3.Tạo ra nguyên liệu và năng lượng cung cấp cho các sinh vật khác trên Trái Đất. <br>4.Hấp thụ CO2 giải phóng O2 giúp điều hòa không khí kiến tạo và duy trì tầng ozon giảm hiệu ứng nhà kính.",
    "Hệ sắc tố quang hợp ở cây xanh bao gồm những gì?",
    "Vai trò chủ yếu của hệ sắc tố đối với quang hợp ở cây xanh là gì?",
    "Sắc tố quang hợp chủ đạo không thể thiếu ở thực vật có hoa là gì?",
    "Sắc tố quang hợp nào sau đây có chức năng chuyển hóa quang năng thành hóa năng trong các phân tử ATP và NADPH?",
    "Các sắc tố quang hợp của lá có màu đỏ hấp thụ ánh sáng và truyền năng lượng hấp thụ theo sơ đồ nào sau đây?",
    "Pha sáng của quang hợp là pha chuyển hóa năng lượng của ánh sáng đã được diệp lục hấp thụ thành năng lượng của các liên kết hóa học trong chất nào?",
    "Trong pha sáng của quá trình quang hợp, ATP và NADPH được chuyển hóa từ quá trình nào?",
    "Ở thực vật C3, sản phẩm cố định CO2 được tạo ra ổn định đầu tiên là gì?",
    "Ở thực vật C4, sản phẩm cố định CO2 được tạo ra ổn định đầu tiên là gì?",
    "Ở thực vật CAM, sản phẩm dự trữ CO2 vào ban đêm để cung cấp cho pha tối ban ngày là gì?",
    "Sự giống nhau trong quang hợp giữa thực vật C3 và C4 là gì?",
    "Sự khác nhau trong quang hợp giữa thực vật C4 và thực vật CAM là gì?",
    "Quang hợp ở các nhóm thực vật C3, C4 và CAM giống nhau như thế nào?",
    "Khi nói về ảnh hưởng ánh sáng đến quang hợp, phát biểu nào sau đây sai?",
    "Khi nói về ảnh hưởng của CO2 đến quang hợp, phát biểu nào sau đây sai?",
    "Nhận định nào sau đây đúng?",
    "Khi nói về ảnh hưởng của nhiệt độ đến quang hợp, phát biểu nào sau đây sai?",
    "Nhận định không đúng khi nói về sự ảnh hưởng của ánh sáng tới cường độ quang hợp?",
    "Khi nói về ảnh hưởng của ánh sáng đến quá trình quang hợp ở thực vật, phát biểu nào sau đây sai?",
    "Khi nói về quang hợp ở 3 nhóm thực vật, phát biểu nào sau đây đúng?",
    "Khi nói về đặc điểm chung của pha tối quang hợp ở thực vật C3 và C4, phát biểu nào sau đây sai?",
    "Xét các loài thực vật: ngô; xương rồng; cao lương. Khi nói về quá trình quang hợp ở các loài cây đó, phát biểu sau đây đúng?",
    // "",
];

const answers = [
    ["A. lục lạp hấp thụ và sử dụng năng lượng ánh sáng mặt trời để tổng hợp chất hữu cơ và giải phóng O2 từ CO2 và nước.", "B. sử dụng năng lượng ánh sáng mặt trời đựơc lục lạp hấp thu để tổng hợp các chất hữu cơ từ các chất vô cơ đơn giản (CO2)", "C. tổng hợp được các hợp chất cacbonhyđrat và O2 từ các chất vô cơ đơn giản xảy ra ở lá cây.","D. sử dụng năng lượng ATP được lục lạp hấp thụ để tổng hợp cacbonhydrat và giải phóng O2 từ CO2 và nước.", 0],
    ["A. 6CO2 + 12 H2O ASMT, DL C6H12O6 + 6 O2 + 6 H2O.","B. C6H12O6 + 6 O2 ASMT, DL 6 H2O+ 6CO2","C. 6CO2 + 12H2O ASMT, DL C6H12O6 + 12 O2.","D. C6H12O6 + 6 O2 + 6 H2O ASMT, DL 6CO2 + 12 H2O.", 0],
    ["A. Tạo ra đường xây dựng nên tế bào, cơ thể đồng thời làm nguyên liệu cho quá trình giải phóng năng lượng và là nguồn dự trữ năng lượng.","B. Giải phóng O2 cung cấp dưỡng khí cho nhiều sinh vật trên Trái Đất.","C. Tạo ra nguyên liệu và năng lượng cung cấp cho các sinh vật khác trên Trái Đất.","D. Hấp thụ CO2 giải phóng O2 giúp điều hòa không khí kiến tạo và duy trì tầng ozon giảm hiệu ứng nhà kính.", 0],
    ["A. Tạo ra đường xây dựng nên tế bào, cơ thể đồng thời làm nguyên liệu cho quá trình giải phóng năng lượng và là nguồn dự trữ năng lượng.","B. Giải phóng O2 cung cấp dưỡng khí cho nhiều sinh vật trên Trái Đất.","C. Tạo ra nguyên liệu và năng lượng cung cấp cho các sinh vật khác trên Trái Đất.","D. Hấp thụ CO2 giải phóng O2 giúp điều hòa không khí kiến tạo và duy trì tầng ozon giảm hiệu ứng nhà kính", 3],
    ["A. 1, 2", "B. 2, 3", "C. 1, 3", "D. 2, 4", 1],
    ["A. Diệp lục và carôtenôit", "B. Diệp lục a và diệp lục b", "C. Carôten và xantôphyl", "D. Diệp lục a và carôten", 0],
    ["A. hấp thụ năng lượng ánh sáng", "B. tạo màu sắc đặc trưng cho cây", "C. chuyển hóa năng lượng ánh sáng thành năng lượng hóa học", "D. hấp thụ CO2", 0],
    ["A. diệp lục a", "B. diệp lục b", "C. carotene", "D. xanthophyl", 0],
    ["A. diệp lục a", "B. diệp lục b", "C. carotene", "D. xanthophyl", 0],
    ["A. Diệp lục b → diệp lục a → diệp lục a ở trung tâm phản ứng → carotenoid","B. Carotenoid → diệp lục b → diệp lục a → diệp lục a ở trung tâm phản ứng","C. Carotenoid → xanthophyl → diệp lục b ở trung tâm phản ứng","D. Diệp lục b → diệp lục a → Carotenoid → diệp lục a ở trung tâm phản ứng", 1],
    ["A. ATP và NADPH", "B. NADH", "C. ADP và NADH", "D. ADP", 0],
    ["A. Hấp thụ năng lượng của nước", "B. Hoạt động của chuỗi truyền điện tử trong quang hợp", "C. Quang phân li nước", "D. Diệp lục hấp thu ánh sáng trở thành trạng thái kích động", 1],
    ["A. RuBP (Ribulose 1,5 bisphosphate)", "B. G3P (Glyceraldehyde 3 phosphate)", "C. 3-PGA (3-phosphoglycerid acid)", "D. OAA (Oxaloacetic acid)", 2],
    ["A. OAA (Oxaloacetic acid)", "B. G3P (Glyceraldehyde 3 phosphate)", "C. RuBP (Ribulose 1,5 bisphosphate)", "D. 3-PGA (3-phosphoglycerid acid)", 0],
    ["A. AM (Malic acid)", "B. G3P (Glyceraldehyde 3 phosphate)", "C. RuBP (Ribulose 1,5 bisphosphate)", "D. 3-PGA (3-phosphoglycerid acid)", 0],
    ["A. thời gian cố định CO2", "B. enzim cố định CO2", "C. sản phẩm đầu tiên của pha tối", "D. chất nhận CO2 đầu tiên", 0],
    ["A. thời gian cố định CO2", "B. enzim cố định CO2", "C. sản phẩm đầu tiên của pha tối", "D. chất nhận CO2 đầu tiên", 0],
    ["A. sản phẩm cố định CO2 đầu tiên", "B. chất nhận CO2 đầu tiên", "C. các phản ứng sáng tương tự", "D. loại tế bào thực hiện quang hợp", 2],
    ["A. Điểm bão hòa ánh sáng là cường độ ánh sáng mà ở đó cường độ hô hấp bằng cường độ quang hợp.", "B. Trong giới hạn từ điểm bù đến điểm bão hòa ánh sáng, cường độ quang hợp tỉ lệ thuận với cường độ ánh sáng.","C. Cây ưa bóng có điểm bù ánh sáng thấp hơn cây ưa sáng.","D. Thành phần ánh sáng ảnh hưởng đến quá trình chuyển hóa sản phẩm quang hợp.", 0],
    ["A. Khi tăng nồng độ CO2 thì cường độ quang hợp tăng.", "B. Nồng độ CO2 tối thiểu mà cường độ hô hấp bằng quang hợp gọi là điểm bù CO2.","C. Điểm bão hòa CO2 là nồng độ CO2 mà tại đó quang hợp đạt cực đại.","D. Điểm bù CO2 ở thực vật C4 thấp hơn thực vật C3.", 0],
    ["A. Ở điều kiện cường độ ánh sáng cao, tăng nồng độ CO2 thuận lợi cho quang hợp.", "B. Ở điều kiện cường độ ánh sáng thấp, tăng nồng độ CO2 thuận lợi cho quang hợp.", "C. Ở điều kiện cường độ ánh sáng thấp, giảm nồng độ CO2 thuận lợi cho quang hợp.", "D. Ở điều kiện cường độ ánh sáng cao, giảm nồng độ CO2 thuận lợi cho quang hợp.", 0],
    ["A. Cây nhiệt đới bắt đầu quang hợp ở nhiệt độ khoảng 3 -5 oC.", "B. Nhiệt độ tối ưu cho quang hợp ở cây nhiệt đới cao hơn cây ôn đới.", "C. Cây vùng lạnh có thể quang hợp ở nhiệt độ thấp hơn 0oC.", "D. Nhiệt độ tối ưu cho quang hợp khác nhau tuỳ theo từng loài.", 0],
    ["A. Quang hợp chỉ xảy ra tại miền ánh sáng xanh tím và miền ánh sáng đỏ.", "B. Các tia sáng có độ dài bước sóng khác nhau ảnh hưởng đến cường độ quang hợp là như nhau.", "C. Các tia sáng đỏ xúc tiến quá trình hình thành cacbohiđrat.", "D. Các tia sáng xanh tím kích thích sự tổng hợp các axit amin, prôtêin.", 1],
    ["A. Quang hợp xảy ra khi bộ máy quang hợp hấp thu ánh sáng tại miền xanh tím và ánh sáng đỏ.", "B. Các cây dưới tán rừng thường chứa nhiều diệp lục b giúp hấp thụ các tia sáng có bước sóng ngắn.", "C. Khi cường độ ánh sáng cao hơn điểm bù ánh sáng thì cường độ quang hợp tăng tỉ lệ thuận với cường độ ánh sáng cho đến khi đạt tới điểm bão hòa ánh sáng.", "D. Các tia sáng xanh tím kích thích sự tổng hợp cabohydrate và lipid, trong khi các tia đỏ kích thích tổng hợp acid amin và protein.", 3],
    ["A. Chu trình Canvin tồn tại ở cả 3 nhóm thực vật C3, C4 và CAM.", "B. O2 được tạo ra trong pha sáng có nguồn gốc từ phân tử CO2.", "C. Pha tối (pha cố định CO2) diễn ra trong xoang tilacôit của lục lạp.", "D. Quá trình quang hợp ở các nhóm thực vật C3, C4 và CAM chỉ khác nhau chủ yếu ở pha sáng.", 0],
    ["A. Vị trí cố định CO2 đầu tiên là ở tế bào nhu mô thịt lá.", "B. Có giai đoạn cố định CO2 theo chu trình Canvin.", "C. Tạo ra hợp chất G3P để tổng hợp các chất hữu cơ khác nhau trong tế bào.", "D. Tinh bột đều được tổng hợp từ chu trình Canvin.", 0],
    ["A. Ở cùng một nồng độ CO2 giống nhau thì cả 3 loài cây này đều có cường độ quang hợp giống nhau.", "B. Ở cùng một cưởng độ ánh sáng như nhau thì cả 3 loài cây này đều có cường độ quang hợp như nhau.", "C. Pha tối của cả 3 loài cây này đều có chu trình C4 và chu trình Canvin.", "D. Cả 3 loài này đều có pha tối diễn ra ở lục lạp của tế bào bao quanh bó mạch.",2],
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