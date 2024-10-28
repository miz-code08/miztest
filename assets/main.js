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
    "1.Oxigen 2.Carbon dioxide 3.Chất dinh dưỡng 4.Nước uống 5.Năng lượng nhiệt 6.Chất thải. Trong quá trình trao đổi chất ở người, cơ thể thu nhận những chất nào sau đây?",
    "Trong cơ thể người, chất hữu cơ được phân giải để giải phóng năng lượng có nguồn gốc từ sự trao đổi chất ở hệ:",
    "Trong tế bào và cơ thể sinh vật, năng lượng chủ yếu được trữ trong các:",
    "Trong quá trình quang hợp của cây xanh, cây có thể tự tổng hợp được chất hữu cơ nhờ ánh sáng mặt trời, nước và khí carbon dioxide. Năng lượng trong quá trình này là sự chuyển hóa năng lượng từ dạng:",
    "1.Trao đổi chất giữa cơ thể và môi trường là điều kiện tồn tại và phát triển của cơ thể, là đặc tính cơ bản của sự sống. 2.Uống đủ nước, thức khuya, luyện tập thể dục thể thao sẽ thúc đẩy quá trình trao đổi chất ở cơ thể. 3.Tùy theo việc kiểm tra đủ chất, người ta chia sinh vật thành hai nhóm là sinh vật dị dưỡng và sinh vật hóa dưỡng. 4.Trong cơ thể con người đã có quá trình biến đổi hóa học thức ăn thành năng lượng cung cấp cho mọi hoạt động sống hàng ngày. Trong số các nhận định trên, số nhận định đúng là:",
    "Vì sao khi vận động thì cơ thể nóng dần lên?",
    "1.Cung cấp năng lượng cho các hoạt động của cơ thể. 2.Làm phát sinh các cơ quan và chức năng mới trong cơ thể. 3.Xây dựng cơ thể. 4.Loại bỏ các chất thải ra khỏi cơ thể. 5.Tạo ra các cơ chế mới. Nhận định nào đúng khi nói về vai trò của trao đổi chất và chuyển hóa năng lượng?",
    "Vì sao khi chúng ta làm việc nhiều thì cần tiêu thụ nhiều thức ăn?",
    "Quá trình trao đổi chất của con người thải ra môi trường những chất nào?",
    "Trao đổi chất và chuyển hóa năng lượng có vai trò quan trọng đối với sự sống của sinh vật.",
    "Khi nói về mối quan hệ giữa trao đổi chất và chuyển hóa năng lượng ở cấp tế bào và cơ thể, có mấy phát biểu sau đây đúng? 1.Quá trình đồng hóa ở cấp tế bào tổng hợp nên chất hữu cơ để xây dựng cơ thể và dự trữ năng lượng. 2.Quá trình dị hóa ở cấp tế bào phân giải các chất hữu cơ giải phóng năng lượng cung cấp cho hoạt động sống của tế bào và cơ thể. 3.Chất dinh dưỡng cơ thể lấy vào được vận chuyển đến tế bào làm nguyên liệu cho quá trình đồng hóa. 4.Chất thải sinh ra từ quá trình đồng hóa của tế bào được cơ thể thải ra môi trường.",
    "Chuyển hóa năng lượng trong sinh giới gồm?",
    "Sinh vật có thể tồn tại, sinh trưởng, phát triển thích nghi với môi trường sống là nhờ có quá trình nào?",
    "Rễ cây trên cạn hấp thụ nước và ion muối khoáng chủ yếu qua?",
    "Sự xâm nhập của nước vào tế bào lông hút theo cơ chế?",
    "Sự hấp thụ ion khoáng theo cơ chế thụ động của tế bào rễ cây phụ thuộc vào?",
    "Phần lớn các ion khoáng xâm nhập vào rễ cây theo cơ chế chủ động diễn ra theo phương thức vận chuyển từ nơi có nồng độ?",
    "Động lực của dòng mạch rây là sự chênh lệch áp suất thẩm thấu giữa?",
    "Nước được vận chuyển ở thân chủ yếu",
    "Động lực của dịch mạch gỗ từ rễ đến lá là gì?",
    "Nước và các ion khoáng đi từ đất vào mạch gỗ của rễ theo các con đường nào?",
    "Cấu tạo của dòng mạch gỗ gồm những gì?",
    "Cấu tạo của dòng mạch rây gồm những gì?",
    "Cơ quan thoát hơi nước chủ yếu của cây là gì?",
    "Vai trò sinh lý của nitrogen gồm những gì?",
    "1.Phơi ải đất, cày sâu, bừa kĩ. 2.Tưới nước đầy đủ và bón phân hữu cơ cho đất. 3.Giảm bón phân vô cơ và hữu cơ cho đất. 4.Vun gốc và xới đất cho cây. Có bao nhiêu biện pháp giúp cho bộ rễ cây phát triển?",
    "Khi tế bào khí khổng no nước thì thành tế bào thay đổi như thế nào?",
    "Khi tế bào khí khổng mất nước thì thành tế bào thay đổi như thế nào?",
    "1.Được điều chỉnh bằng việc đóng mở khí khổng. 2.Vận tốc lớn. 3.Không được điều chỉnh bằng việc đóng mở khí khổng. 4.Vận tốc nhỏ. Con đường thoát hơi nước qua cutin có bao nhiêu đặc điểm trên?",
    "Lực đóng vai trò chính trong quá trình vận chuyển nước ở thân là",
    "Yếu tố nào đóng vai trò quyết định đến quá trình thoát hơi nước ở lá?",
    "Hiện tượng lá cây bị vàng do thiếu chất diệp lục là do thiếu những nguyên tố khoáng nào?",
    "Sự biểu hiện triệu chứng thiếu nitrogen của cây là gì?",
    "Nguyên tố nitơ có trong thành phần của những hợp chất nào?",
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
    ["A. Bởi vì khi vận động, trong cơ thể, thức ăn được biến đổi thành năng lượng hóa học nên nóng cơ thể.", "B. Bởi vì khi vận động nhiều, cơ thể sẽ đổ nhiều mồ hôi mất nước nên nóng dần lên.", "C. Bởi vì khi vận động, để có năng lượng cho quá trình hoạt động thì trong cơ thể đã xảy ra một phản ứng biến đổi hóa học và phản ứng này sinh ra nhiệt, khiến cho cơ thể nóng dần lên.", "D. Bởi vì khi vận động thì trong cơ thể con người đã xảy ra sự biến đổi năng lượng từ dạng liên kết hóa học tích trữ sang cơ năng và nhiệt năng, nên khiến cho cơ thể người nóng dần lên.", 3],
    ["A. 1, 2, 3, 4, 5.", "B. 1, 2, 3.", "C. 1, 3, 4.", "D. 1, 3, 5.", 2],
    ["A. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo năng lượng để hoạt động.", "B. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo nhiệt năng để duy trì nhiệt độ cơ thể.", "C. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo năng lượng để đào thải khí carbon dioxide ra ngoài.", "D. Thức ăn là nguồn cung cấp nguyên liệu cho quá trình chuyển hóa tạo nhiệt năng để đào thải mồ hôi ra ngoài.", 0],
    ["A. Khi carbon dioxide, nước tiểu, mô hôi.", "B. Khí oxygen, nước tiểu, mồ hôi, nước mắt.", "C. Khi oxygen, khí carbon dioxide, nước tiểu.", "D. Khí oxygen, phân, nước tiểu, mồ hôi.", 0],
    ["A. Sự chuyển hóa của sinh vật.", "B. Có vai trò quan trọng đối với sự biến đổi các chất.", "C. Sự trao đổi năng lượng.", "D. Sự sống của sinh vật.", 3],
    ["A. 2.", "B. 3.", "C. 1.", "D. 4.", 1],
    ["A. Phân giải — Tổng hợp — Huy động năng lượng.", "B. Tổng hợp → Huy động năng lượng.", "C. Tổng hợp → Phân giải — Huy động năng lượng.", "D. Phân giải — Huy động năng lượng — Tổng hợp.", 2],
    ["A. Quá trình trao đổi chất và cảm ứng.", "B. Quá trình trao đổi chất và chuyển hóa năng lượng.", "C. Quá trình chuyển hóa năng lượng.", "D. Quá trình trao đổi chất và sinh sản.", 1],
    ["A. Miền lông hút.", "B. Miền chóp rễ.", "C. Miền sinh trưởng.", "D. Miền trưởng thành.", 0],
    ["A. Thẩm thấu.", "B. Cần tiêu tốn năng lượng.", "C. Nhờ các bơm ion.", "D. Chủ động.", 0],
    ["A. Hoạt động trao đổi chất.", "B. Chênh lệch nồng độ ion.", "C. Cung cấp năng lượng.", "D. Hoạt động thẩm thấu.", 1],
    ["A. Cao đến nơi có nồng độ thấp, cần tiêu tốn ít năng lượng.", "B. Cao đến nơi có nồng độ thấp.", "C. Thấp đến nơi có nồng độ cao, không đòi hỏi tiêu tốn năng lượng.", "D. Thấp đến nơi có nồng độ cao, đòi hỏi phải tiêu tốn năng lượng.", 3],
    ["A. Lá và rễ.", "B. Cành và lá.", "C. Rễ và thân.", "D. Thân và lá.", 0],
    ["A. Qua dòng mạch rây theo chiều từ trên xuống.", "B. Từ mạch gỗ sang mạch rây.", "C. Từ mạnh rây sang mạch gỗ.", "D. Qua dòng mạch gỗ.", 3],    
    ["A. Lực đẩy (áp suất rễ)", "B. Lực hút do thoát hơi nước ở lá", "C. Lực liên kết giữa các phần tử nước với nhau và với thành tế bào mạch", "D. Do sự phối hợp của 3 lực: Lực đẩy, lực hút và lực liên kết.", 3],
    ["A. Con đường tế bào chất và con đường gian bào", "B. Qua lông hút vào tế bào nhu mô vỏ, sau đó vào trung trụ", "C. Xuyên qua tế bào chất của các tế bào vỏ rễ vào mạch gỗ", "D. Đi theo khoảng không gian giữa các tế bào vào mạch gỗ", 0],
    ["A. Tế bào chết là quản bào và mạch ống", "B. Tế bào sống là mạch ống và tế bào kèm", "C. Tế bào chết là mạch ống và tế bào kèm", "D. Tế bào sống là quản bào và mạch ống", 0],
    ["A. Tế bào chết là quản bào và mạch ống", "B. Tế bào sống là mạch ống và tế bào kèm", "C. Tế bào chết là mạch ống và tế bào kèm", "D. Tế bào sống là quản bào và mạch ống", 1],
    ["A. Lá", "B. Cành", "C. Thân", "D. Rễ", 0],
    ["A. Vai trò cấu trúc, vai trò điều tiết", "B. Vai trò cấu trúc", "C. Vai trò điều tiết", "D. Tham gia cấu tạo protein, axit nucleic", 0],
    ["A. 1", "B. 2", "C. 3", "D. 4", 3],
    ["A. Mỏng căng ra, thành dày co lại làm cho khí khổng mở ra", "B. Dày căng ra làm cho thành mỏng căng theo, khí khổng mở ra", "C. Dày căng ra làm cho thành mỏng co lại, khí khổng mở ra", "D. Mỏng căng ra làm cho thành dày căng theo, khí khổng mở ra", 3],
    ["A. Mỏng hết căng ra làm cho thành dày duỗi thẳng, khí khổng đóng lại", "B. Dày căng ra làm cho thành mỏng cong theo, khí khổng đóng lại", "C. Dày căng ra làm cho thành mỏng co lại, khí khổng đóng lại", "D. Mỏng căng ra làm cho thành dày duỗi thẳng, khí khổng khép lại", 0],
    ["A. 1", "B. 2", "C. 3", "D. 4", 1],
    ["A. Lực đẩy của rễ do quá trình hấp thụ nước", "B. Lực hút của lá do quá trình thoát hơi nước", "C. Lực liên kết giữa các phân tử nước", "D. Lực bám giữa các phân tử nước với thành mạch dẫn", 1],
    ["A. Số lượng khí khổng", "B. Sự phân bố khí khổng trên bề mặt lá", "C. Hoạt động đóng mở khí khổng", "D. Kích thước của khí khổng", 2],
    ["A. P, K, Fe", "B. S, P, K", "C. N, Mg, Fe", "D. N, K, Mn", 2],
    ["A. Sinh trưởng bị còi cọc, lá có màu vàng", "B. Lá mới có màu vàng, sinh trưởng rễ bị tiêu giảm", "C. Lá màu vàng nhạt, mép lá màu đỏ và có nhiều chấm đỏ trên mặt lá", "D. Lá nhỏ có màu lục đậm, màu của thân không bình thường, sinh trưởng rễ bị tiêu giảm", 0],
    ["A. Protein và axit nucleic", "B. Lipid", "C. Saccarit", "D. Phốt pho", 0],
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
            answerDesc.forEach(val => {
                val.style.color = "#000";
            });
            
            questionItem.forEach((val, idx) => {
                if (val.classList.contains('red') && viTri === idx) {
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