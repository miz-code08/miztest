const questions = [
    // bài 15
    "Alkane là các hydrocarbon?",
    "Alkane là những hydrocarbon no, mạch hở, có công thức chung là?",
    "Công thức phân tử nào sau đây không phải là công thức của một alkane?",
    "Nhóm nguyên tử còn lại sau khi lấy bớt một nguyên tử H từ phân tử alkane gọi là gốc ankyl, có công thức chung là?",
    "Nhóm nguyên tử CH3- có tên là?",
    "Nhóm nguyên tử CH3CH2- có tên là?",
    "Alkane (CH3)2CH-CH3 có tên theo danh pháp thay thế là?",
    "Ở điều kiện thường hydrocarbon nào sau đây ở thể lỏng?",
    "Alkane hòa tan tốt trong dung môi nào sau đây?",
    "Trong các chất dưới đây, chất nào có nhiệt độ sôi thấp nhất?",
    "Phản ứng đặc trưng của hydrocarbon no là?",
    "Khi đốt cháy một hydrocarbon, thu được a mol CO2 và b mol H2O. Trong trường hợp nào sau đây có thể kết luận rằng hydrocarbon đó là alkane?",
    "Khí thiên nhiên được dùng làm nhiên liệu và nguyên liệu cho các nhà máy sản xuất điện, sứ, đạm, ancol methylic,… Thành phần chính của khí thiên nhiên là methane. Công thức phân tử của methane là?",
    "Hiện nay, nhiều nơi ở nông thôn đang sử dụng hầm biogas để xử lí chất thải trong chăn nuôi gia súc, cung cấp nhiên liệu cho việc đun nấu. Chất dễ cháy trong khí biogas là?",
    "Trong công nghiệp, các alkane được điều chế từ nguồn nào sau đây?",
    "Số đồng phân cấu tạo tương ứng với công thức phân tử C4H10 là?",
    "Phân tử methane không tan trong nước vì lí do nào sau đây?",
    "Cho isopentane tác dụng với Cl2 theo tỉ lệ số mol 1:1, số sản phẩm monochloro tối đa thu được là?",
    "Alkane A có công thức phân tử C5H12. A tác dụng với chlorine khi đun nóng chỉ tạo một dẫn xuất monochloro duy nhất. Tên gọi của A là?",
    "Cracking alkane là quá trình phân cắt liên kết C-C (bẻ gãy mạch carbon) của các alkane mạch dài để tạo thành hỗn hợp các hydrocarbon có mạch carbon?",
    // bài 16
    "Hydrocarbon không no là những hydrocarbon trong phân tử có chứa?",
    "Alkene là những hydrocarbon có đặc điểm?",
    "Alkyne là những hydrocarbon có đặc điểm?",
    "Alkene là các hydrocarbon không no, mạch hở, có công thức chung là?",
    "Alkyne là những hydrocarbon không no, mạch hở, có công thức chung là?",
    "Hợp chất nào sau đây là một alkene?",
    "Hợp chất nào sau đây là một alkyne?",
    "Chất nào sau đây là đồng phân của CH2=CH-CH2-CH2-CH3?",
    "Chất nào sau đây là đồng phân của CH≡C-CH2-CH3?",
    "Trong alkene, mạch chính là?",
    "Alkene CH3-CH=CH-CH3 có tên là?",
    "Nhóm CH2=CH- có tên là?",
    "Alkyne CH3-C≡C-CH3 có tên gọi là?",
    "Chất nào sau đây có một liên kết ba trong phân tử?",
    "Khi có mặt chất xúc tác Ni ở nhiệt độ thích hợp, alkene cộng hydrogen vào liên kết đôi tạo thành hợp chất nào dưới đây?",
    "Phản ứng hydrogen hóa alkene thuộc loại phản ứng nào dưới đây?",
    "Alkene không phản ứng được với chất nào dưới đây?",
    "Nếu muốn phản ứng: CH≡CH + H2 ----t--> dừng lại ở giai đoạn tạo thành ethylene thì cần sử dụng xúc tác nào dưới đây?",
    "Phản ứng hydrogen hóa alkyne thành alkane được viết dưới dạng tổng quát là?",
    "Chất nào sau đây có khả năng làm mất màu dung dịch bromine?",
    "Cho phản ứng: HC≡CH + HBr -------> (tỉ lệ mol 1:2). Sản phẩm của phản ứng trên là?",
    "Cho phản ứng: HC≡CH + H2O -------> (điều kiện: HgSO4, H2SO4, 80°C). Sản phẩm của phản ứng trên là?",
    "Oxi hoá ethylene bằng dung dịch KMnO4 thu được sản phẩm là?",
    "Phương pháp điều chế ethylene trong phòng thí nghiệm là?",
    "Sục khí acetylene vào dung dịch AgNO3 trong NH3 thu được kết tủa màu gì?",
    "Khi cho acetylene phản ứng với lượng dư AgNO3/NH3 tới khi phản ứng xảy ra hoàn toàn, thu được sản phẩm hữu cơ là?",
    "Chất nào sau đây không phản ứng được với AgNO3/NH3?",
    "Trước những năm 50 của thế kỷ XX, công nghiệp tổng hợp hữu cơ dựa trên nguyên liệu chính là acetylene. Ngày nay, nhờ sự phát triển vượt bậc của công nghệ khai thác và chế biến dầu mỏ, ethylene trở thành nguyên liệu rẻ tiền, tiện lợi hơn nhiều so với acetylene. Công thức phân tử của ethylene là?",
    "Chất nào sau đây có đồng phân hình học?",
    "Chất nào sau đây có đồng phân hình học?",
    "Các alkene không có các tính chất vật lí đặc trưng nào sau đây?",
    "Alkene A có công thức phân tử C4H8. Khi cộng nước vào A (có xúc tác acid) chỉ tạo ra một sản phẩm duy nhất. Tên gọi của A là",
    "Theo quy tắc Markovnikov, trong phản ứng cộng nước hoặc acid (kí hiệu chung là HA) vào liên kết C=C của alkene thì H sẽ ưu tiên cộng vào nguyên tử carbon có đặc điểm nào?",
    "Cho 2 mL ethanol (C2H5OH) vào ống nghiệm đã có sẵn vài viên đá bọt. Thêm từ từ 4 mL dung dịch H2SO4 đặc vào ống nghiệm, đồng thời lắc đều rồi đun nóng hỗn hợp. Hydrocarbon sinh ra trong ống nghiệm trên là",
    "Trong phòng thí nghiệm, khi điều chế C2H4 từ C2H5OH và dung dịch H2SO4 đặc ở 170oC, khí sinh ra có lẫn SO2 và CO2. Dùng dung dịch nào sau đây có để loại bỏ tạp chất, thu C2H4 tinh khiết?",
    "Để phân biệt but-2-yne (CH3C≡CCH3) với but-1-yne (CH≡CCH2CH3) có thể dùng thuốc thử nào sau đây?",
    "Có thể phân biệt acetylene, ethylene và methane bằng hóa chất nào sau đây?",

    
    
    // tln
    "Số đồng phân cấu tạo của hợp chất có công thức phân tử C₅H₁₂ là bao nhiêu?",
    "Hàm lượng nguyên tố carbon trong một alkane X là 82,76%. Công thức phân tử của X là?",
    "Chọn tập hợp các alkane khi tác dụng với chlorine (có ánh sáng hoặc đun nóng) chỉ tạo duy nhất một sản phẩm thế monochloro?",

    "Chất nào sau đây là đồng phân alkyne C₅H₈ có thể tác dụng với AgNO₃/NH₃ tạo kết tủa?",
    "Tổng số liên kết σ (sigma) và π (pi) trong phân tử vinylacetylene (CH≡CL-CH=CH₂) là bao nhiêu?",
    "Chất nào sau đây phản ứng với dung dịch AgNO₃/NH₃ tạo kết tủa màu vàng?",
    "Cho 0,2 mol but-1-yne phản ứng vừa đủ với dung dịch AgNO₃/NH₃, thu được m gam kết tủa vàng nhạt. Giá trị của m là bao nhiêu? (Làm tròn đến hàng phần mười)",
];

const answers = [
    // bài 15
    ["no, mạch vòng", "no, mạch hở", "không no, mạch hở", "không no, mạch vòng"],
    ["CnH2n+2 (n ≥ 1)", "CnH2n (n ≥ 2)", "CnH2n-2 (n ≥ 2)", "CnH2n-6 (n ≥ 6)"],
    ["C2H6", "C3H6", "C4H10", "C5H12"],
    ["CnH2n-1 (n ≥ 1)", "CnH2n+1 (n ≥ 1)", "CnH2n+1 (n ≥ 2)", "CnH2n-1 (n ≥ 2)"],
    ["methyl", "ethyl", "propyl", "butyl"],
    ["methyl", "ethyl", "propyl", "butyl"],
    ["2-methylpropane", "isobutane", "butane", "2-methylbutane"],
    ["C4H10", "C2H6", "C3H8", "C5H12"],
    ["Nước", "Benzene", "Dung dịch acid HCl", "Dung dịch NaOH"],
    ["Butane", "Ethane", "Methane", "Propane"],
    ["Phản ứng tách", "Phản ứng thế", "Phản ứng cộng", "Phản ứng oxi hóa"],
    ["a > b", "a < b", "a = b", "a ≥ b"],
    ["CH4", "C2H4", "C2H2", "C6H6"],
    ["Cl2", "CH4", "CO2", "N2"],
    ["Sodium acetate", "Dầu mỏ và khí dầu mỏ", "Aluminium carbide (Al4C3)", "Khí biogas"],
    ["1", "2", "3", "4"],
    ["Phân tử methane không phân cực", "Methane là chất khí", "Phân tử khối của methane nhỏ", "Methane không có liên kết đôi"],
    ["5", "4", "3", "2"],
    ["pentane", "2-methylbutane", "2,2-dimethylpropane", "3-methylbutane"],
    ["ngắn hơn", "dài hơn", "không đổi", "thay đổi"],
    // bài 16
    ["liên kết đơn", "liên kết σ", "liên kết bội", "vòng benzene"],
    ["không no, mạch hở, có một liên kết ba C≡C", "không no, mạch vòng, có một liên kết đôi C=C", "không no, mạch hở, có một liên kết đôi C=C", "no, mạch vòng"],
    ["không no, mạch hở, có một liên kết ba C≡C", "không no, mạch vòng, có một liên kết đôi C=C", "không no, mạch hở, có một liên kết đôi C=C", "không no, mạch hở, có hai liên kết ba C≡C"],
    ["CnH2n+2 (n ≥ 1)", "CnH2n (n ≥ 2)", "CnH2n (n ≥ 3)", "CnH2n-2 (n ≥ 2)"],
    ["CnH2n+2 (n ≥ 1)", "CnH2n (n ≥ 2)", "CnH2n-2 (n ≥ 2)", "CnH2n-6 (n ≥ 6)"],
    ["CH3-CH2-CH3", "CH3-CH=CH2", "CH3-C≡CH", "CH2=C=CH2"],
    ["CH3-CH2-CH2-CH3", "CH3-CH=CH2", "CH3-CH2-C≡CH", "CH2=CH-CH=CH2"],
    ["(CH3)2C=CH-CH3", "CH2=CH-CH2-CH3", "CH≡C-CH2-CH2-CH3", "CH2=CH-CH2-CH=CH2"],
    ["CH≡C-CH3", "CH3-C≡C-CH3", "CH2=CH-CH2-CH3", "CH2=CH-C≡CH"],
    ["mạch dài nhất và có nhiều nhánh nhất", "mạch có chứa liên kết đôi và nhiều nhánh nhất", "mạch có chứa liên kết đôi, nhiều nhánh nhất và phân nhánh sớm nhất", "mạch có chứa liên kết đôi, dài nhất và nhiều nhánh nhất"],
    ["2-methylprop-2-ene", "but-2-ene", "but-1-ene", "but-3-ene"],
    ["ethyl", "vinyl", "allyl", "phenyl"],
    ["but-1-yne", "but-2-yne", "methylpropyne", "methylbut-1-yne"],
    ["Methane", "Ethylene", "Acetylene", "Benzene"],
    ["alkane", "xycloalkane", "alkyne", "alkene lớn hơn"],
    ["phản ứng thế", "phản ứng tách", "phản ứng cộng", "phản ứng phân hủy"],
    ["Br2", "Cl2", "NaCl", "H2"],
    ["H2SO4 đặc", "Lindlar", "Ni/to", "HCl loãng"],
    ["CnH2n-2 + H2 ----> CnH2n", "CnH2n + H2 ----> CnH2n+2", "CnH2n-2 + 2H2 ----> CnH2n+2", "CnH2n-6 + 4H2 ----> CnH2n+2"],
    ["ethane", "propane", "butane", "ethylene"],
    ["CH3-CHBr2", "CH2Br-CH2Br", "CHBr2-CHBr2", "CH2=CH-Br"],
    ["CH2=CH-OH", "CH3-CH=O", "CH2=CH2", "CH3-O-CH3"],
    ["MnO2, C2H4(OH)2, KOH", "K2CO3, H2O, MnO2", "C2H5OH, MnO2, KOH", "C2H4(OH)2, K2CO3, MnO2"],
    ["Đun C2H5OH với H2SO4 đặc ở 170°C", "Cracking alkane", "Tách H2 từ ethane", "Cho C2H2 tác dụng với H2 (xt: Lindlar)"],
    ["vàng nhạt", "trắng", "đen", "xanh"],
    ["HC≡CH", "HC≡CAg", "AgC≡CAg", "CH2=CH2"],
    ["but-2-yne", "propyne", "acetylene", "but-1-yne"],
    ["C2H4", "C2H6", "CH4", "C2H2"],
    ["CH3-C≡C-CH3 ", "CH3-CH=CH-CH3", "CH2Cl-CH2CL", "CH2=CCl-CH3"],
    ["2-chloropropene", "But-2-ene", "1,2-dichloroethane", "But-1-ene"],
    ["Tan tốt trong nước và các dung môi hữu cơ", "Có khối lượng riêng nhỏ hơn khối lượng riêng của nước", "Có nhiệt độ sôi thấp hơn alkane phân tử có cùng số nguyên tử carbon", "Không dẫn điện"],
    ["pent-1-ene", "but-1-ene", "but-2-ene", "2-methylpropene"],
    ["nguyên tử carbon liên kết với nhóm methyl", "nguyên tử carbon liên kết với nhiều nguyên tử hydrogen hơn", "nguyên tử carbon liên kết với ít nguyên tử hydrogen hơn", "nguyên tử carbon liên kết với nhiều nguyên tử carbon khác hơn"],
    ["ethylene", "acetylene", "propylene", "methane"],
    ["dd KMnO4", "dd NaOH", "dd Na2CO3", "dd Br2"],
    ["Dung dịch HCl", "Dung dịch AgNO3/NH3", "Nước bromine", "Dung dịch KMnO4"],
    ["KMnO4 và NaOH", "KMnO4 và quỳ tím", "AgNO3/NH3", "Br2 và AgNO3/NH3"],



    // tln
    ["2", "3", "4", "5"],
    ["C₂H₆", "C₃H₈", "C₄H₁₀", "C₅H₁₂"],
    ["Methane, ethane, propane", "Ethane, propane, neopentane", "Methane, ethane, neopentane", "Methane, propane, butane"],

    ["Pent-1-yne, 3-Methylbut-1-yne", "Pent-2-yne, 3-Methylbut-2-yne", "Cyclopentyne, But-2-yne", "Pent-2-ene, 2,2-Dimethylpropane"],
    ["7σ và 3π", "3σ và 7π", "7σ và 4π", "10σ và 4π"],
    ["Ethane, Propene, But-2-yne", "Acetylene, Propyne, Pent-1-yne", "Propyne, Pent-2-yne, But-2-yne", "Acetylene, Ethane, But-2-yne"],
    ["34,8 g", "43,2 g", "48,0 g", "50,4 g"],
];

const correctAnswers = [
    // bài 15
    1, 0, 1, 1, 0,
    1, 0, 3, 1, 2,
    1, 0, 0, 1, 1,
    1, 0, 1, 2, 0,
    // bài 16
    2, 2, 0, 1, 2,
    1, 2, 0, 1, 3,
    1, 1, 1, 2, 0, 
    2, 2, 1, 2, 3, 
    0, 1, 0, 0, 0, 
    2, 0, 0, 3, 1,
    0, 2, 1, 0, 1,
    2, 1, 3,




    // tln
    1, 2, 1,

    0, 0, 1, 0,
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
