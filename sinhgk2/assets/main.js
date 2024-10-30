const questions = [
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
    "Có bao nhiêu biện pháp giúp cho bộ rễ cây phát triển? <br>1.Phơi ải đất, cày sâu, bừa kĩ. <br>2.Tưới nước đầy đủ và bón phân hữu cơ cho đất. <br>3.Giảm bón phân vô cơ và hữu cơ cho đất. <br>4.Vun gốc và xới đất cho cây.",
    "Khi tế bào khí khổng no nước thì thành tế bào thay đổi như thế nào?",
    "Khi tế bào khí khổng mất nước thì thành tế bào thay đổi như thế nào?",
    "Con đường thoát hơi nước qua cutin có bao nhiêu đặc điểm trên? <br>1.Được điều chỉnh bằng việc đóng mở khí khổng. <br>2.Vận tốc lớn. <br>3.Không được điều chỉnh bằng việc đóng mở khí khổng. <br>4.Vận tốc nhỏ.",
    "Lực đóng vai trò chính trong quá trình vận chuyển nước ở thân là",
    "Yếu tố nào đóng vai trò quyết định đến quá trình thoát hơi nước ở lá?",
    "Hiện tượng lá cây bị vàng do thiếu chất diệp lục là do thiếu những nguyên tố khoáng nào?",
    "Sự biểu hiện triệu chứng thiếu nitrogen của cây là gì?",
    "Nguyên tố nitơ có trong thành phần của",
    "Có bao nhiêu phát biểu đúng khi nói về hậu quả bón liều lượng phân bón cao quá mức cần thiết cho cây? <br>1.Gây độc hại đối với cây. <br>2.Gây ô nhiễm nông phẩm và môi trường. <br>3.Làm đất đai phì nhiêu nhưng cây không hấp thụ được hết. <br>4.Dư lượng phân bón khoáng chất sẽ làm xấu lí tính của đất, giết chết các vi sinh vật có lợi.",
    "Khi nói về quá trình trao đổi nước và khoáng ở thực vật có bao nhiêu phát biểu sau đây đúng? <br>1.Nguyên tố khoáng hòa tan trong nước, do vậy trao đổi khoáng có thể đồng thời với trao đổi nước. <br>2.Nước và các chất khoáng được vận chuyển từ lông hút vào mạch gỗ của rễ theo con đường gian bào và con đường tế bào chất. <br>3.Thoát hơi nước ở lá tạo động lực kéo dòng mạch gỗ đi theo một chiều từ rễ lên thân và lá. <br>4.Hoạt động trao đổi nước và chất khoáng có thể chịu ảnh hưởng của các yếu tố môi trường.",
    "Khi nói về sự thoát hơi nước ở lá cây, phát biểu nào sau đây đúng?",
    "Khi nói về quá trình biến đổi nitrate và amonium ở thực vật, có bao nhiêu phát biểu sau đây đúng? <br>1.Nitrogen ở dạng NH4 + và NO3 - sau khi được cây hấp thụ sẽ biến đổi thành nitrogen trong các hợp chất hữu cơ. <br>2.Trong cây, NO3 - được khử thành NH4 + do xúc tác của enzyme nitrate reductase và nitrite reductase. <br>3.Hình thành amide giúp giải độc cho tế bào khi lượng NO3 - tích lũy quá nhiều. <br>4.Hình thành amide là cơ chế dự trữ ammonium cho tế bào thực vật.",
    "Thực vật hấp thụ nitrogen chủ yếu ở dạng nào sau đây?",
    "Khi nói về vai trò của nitrogen phát biểu nào sau đây sai?",
    "Vai trò sinh lí của nitrogen là gì?",
    // "",
];

const answers = [
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
    ["A. 1", "B. 2", "C. 3", "D. 4", 2],
    ["A. Mỏng căng ra, thành dày co lại làm cho khí khổng mở ra", "B. Dày căng ra làm cho thành mỏng căng theo, khí khổng mở ra", "C. Dày căng ra làm cho thành mỏng co lại, khí khổng mở ra", "D. Mỏng căng ra làm cho thành dày căng theo, khí khổng mở ra", 3],
    ["A. Mỏng hết căng ra làm cho thành dày duỗi thẳng, khí khổng đóng lại", "B. Dày căng ra làm cho thành mỏng cong theo, khí khổng đóng lại", "C. Dày căng ra làm cho thành mỏng co lại, khí khổng đóng lại", "D. Mỏng căng ra làm cho thành dày duỗi thẳng, khí khổng khép lại", 0],
    ["A. 1", "B. 2", "C. 3", "D. 4", 1],
    ["A. Lực đẩy của rễ do quá trình hấp thụ nước", "B. Lực hút của lá do quá trình thoát hơi nước", "C. Lực liên kết giữa các phân tử nước", "D. Lực bám giữa các phân tử nước với thành mạch dẫn", 1],
    ["A. Số lượng khí khổng", "B. Sự phân bố khí khổng trên bề mặt lá", "C. Hoạt động đóng mở khí khổng", "D. Kích thước của khí khổng", 2],
    ["A. P, K, Fe", "B. S, P, K", "C. N, Mg, Fe", "D. N, K, Mn", 2],
    ["A. Sinh trưởng bị còi cọc, lá có màu vàng", "B. Lá mới có màu vàng, sinh trưởng rễ bị tiêu giảm", "C. Lá màu vàng nhạt, mép lá màu đỏ và có nhiều chấm đỏ trên mặt lá", "D. Lá nhỏ có màu lục đậm, màu của thân không bình thường, sinh trưởng rễ bị tiêu giảm", 0],
    ["A. Protein và axit nucleic", "B. Lipid", "C. Saccarit", "D. Phốt pho", 0],
    ["A. 1", "B. 2", "C. 3", "D. 4", 2],
    ["A. 1", "B. 2", "C. 3", "D. 4", 3],
    ["A. Thoát hơi nước là sự vận chuyển chủ động của nước qua bề mặt cơ thể thực vật vào khí quyển.", "B. Lượng nước thoát qua khí khổng chỉ phụ thuộc vào số lượng khí khổng của lá.", "C. Khi cây trưởng thành, tầng cutin dày, lượng nước thoát qua bề mặt lá chỉ chiếm khoảng 10 - 20%.", "D. Thoát hơi nước ở lá chỉ diễn ra theo con đường qua khí khổng của lá.", 2],
    ["A. 1", "B. 2", "C. 3", "D. 4", 2],
    ["A. NO2 - và NH3", "B. NO3 - và NH4 +", "C. NH3 và NH4 +", "D. NO3 - và NH3", 1],
    ["A. Khi thiếu nitrogen, lá cây có màu vàng, cây sinh trưởng chậm.","B. Nitrogen là thành phần của protein, nucleic acid, dKiệp lục.","C. Nitrogen tham gia cấu tạo enzyme, các hormone thực vật.","D. Nitrogen thúc đẩy khí khổng mở, làm tăng tốc độ thoát hơi nước.", 3],
    ["A. vai trò cấu trúc", "B. vai trò điều tiết", "C. tham gia cấu tạo protein, axit nucleic", "D. vai trò cấu trúc, vai trò điều tiết", 3],
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