const questions = [
    "Alkane là những hydrocarbon no, mạch hở, có công thức chung là?",
    "Nhóm nguyên tử còn lại sau khi lấy bớt một nguyên tử H từ phân tử alkane gọi là gốc ankyl, có công thức chung là?",
    "Ở điều kiện thường hydrocarbon nào sau đây ở thể lỏng?",
    "Alkane hòa tan tốt trong dung môi nào sau đây?",
    "Trong các chất dưới đây, chất nào có nhiệt độ sôi thấp nhất?",
    "Phản ứng đặc trưng của hydrocarbon no là?",
    "Khí thiên nhiên được dùng làm nhiên liệu và nguyên liệu cho các nhà máy sản xuất điện, sứ, đạm, ancol methylic,… Thành phần chính của khí thiên nhiên là methane. Công thức phân tử của methane là?",
    "Hiện nay, nhiều nơi ở nông thôn đang sử dụng hầm biogas để xử lí chất thải trong chăn nuôi gia súc, cung cấp nhiên liệu cho việc đun nấu. Chất dễ cháy trong khí biogas là?",
    "Trong công nghiệp, các alkane được điều chế từ nguồn nào sau đây?",
    "Phân tử methane không tan trong nước vì lí do nào sau đây?",

    "Hydrocarbon không no là những hydrocarbon trong phân tử có chứa?",
    "Alkene là các hydrocarbon không no, mạch hở, có công thức chung là?",
    "Alkyne là những hydrocarbon không no, mạch hở, có công thức chung là?",
    "Trong alkene, mạch chính là?",
    "Phản ứng hydrogen hóa alkene thuộc loại phản ứng nào dưới đây?",
    "Alkene không phản ứng được với chất nào dưới đây?",
    "Nếu muốn phản ứng: CH≡CH + H2 ——> dừng lại ở giai đoạn tạo thành ethylene thì cần sử dụng xúc tác nào dưới đây?",
    "Chất nào sau đây có khả năng làm mất màu dung dịch bromine?",
    "Oxi hoá ethylene bằng dung dịch KMnO4 thu được sản phẩm là?",
    "Phương pháp điều chế ethylene trong phòng thí nghiệm là?",
    "Sục khí acetylene vào dung dịch AgNO3 trong NH3 thu được kết tủa màu gì?",
    "Chất nào sau đây không phản ứng được với AgNO3/NH3?",
    "Các alkene không có các tính chất vật lí đặc trưng nào sau đây?",
    "Theo quy tắc Markovnikov, trong phản ứng cộng nước hoặc acid (kí hiệu chung là HA) vào liên kết C=C của alkene thì H sẽ ưu tiên cộng vào nguyên tử carbon có đặc điểm nào?",
    "Trong phòng thí nghiệm, khi điều chế C2H4 từ C2H5OH và dung dịch H2SO4 đặc ở 170°C, khí sinh ra có lẫn SO2 và CO2. Dùng dung dịch nào sau đây có để loại bỏ tạp chất, thu C2H4 tinh khiết?",
    "Để phân biệt but-2-yne (CH3C≡CCH3) với but-1-yne (CH≡CCH2CH3) có thể dùng thuốc thử nào sau đây?",
    "Có thể phân biệt acetylene, ethylene và methane bằng hóa chất nào sau đây?",

    "Các ankylbenzene hợp thành dãy đồng đẳng của benzene có công thức chung là?",
    "Công thức cấu tạo thu gọn của toluene là?",
    "Benzene không làm mất màu dung dịch nước bromine nhưng có thể phản ứng với brom khan khi có mặt xúc tác iron (III) bromine. Phản ứng này thuộc loại phản ứng nào?",
    "Chất nào sau đây có thể làm nhạt màu dung dịch Br2 trong CCl4 ở điều kiện thường?",
    "Khi được chiếu sáng, benzene có thể phản ứng với Cl2 tạo thành sản phẩm nào?",
    "Tính chất nào không phải của benzene?",
    "So với benzene, khả năng phản ứng của toluene với dung dịch HNO3(đ)/H2SO4 (đ) như thế nào?",
    "Có thể dùng chất nào sau đây để phân biệt ethylbenzene và styrene?",
    "Nếu phân biệt các hydrocarbon thơm: benzene, toluene và styrene chỉ bằng một thuốc thử thì nên chọn thuốc thử nào dưới đây?",
    "Một trong những ứng dụng của toluene là?",

    "Công thức tổng quát của dẫn xuất monochlorine no, mạch hở là?",
    "Tên gọi thông thường của dẫn xuất halogen có công thức CHCl3 là?",
    "Cho các dẫn xuất halogen mạch không nhánh sau: (1) CH3Cl; (2) C2H5Cl; (3) C3H7Cl; (4) C4H9Cl. Thứ tự tăng dần của nhiệt độ sôi là?",
    "Cho các dẫn xuất halogen sau: (1) C2H5F; (2) C2H5Cl; (3) C2H5Br; (4) C2H5I. Thứ tự giảm dần của nhiệt độ sôi là?",
    "Cho phản ứng hóa học sau: C2H5Br + NaOH ——> C2H25OH + NaBr. Phản ứng trên thuộc loại phản ứng nào sau đây?",
    "Cho phản ứng hóa học sau: CH3CH2Cl + KOH → CH2 = CH2 + KCl + H2O. Phản ứng trên thuộc loại phản ứng nào sau đây?",
    "Đun sôi dung dịch gồm chất X và KOH đặc trong C2H5OH, thu được etylene. Công thức của X là?",
    "Đun sôi hỗn hợp propyl bromide, potassium hydroxide và ethanol thu được sản phẩm hữu cơ là?",
    "Cho sơ đồ phản ứng hóa học sau: CH3CHClCH2CH3 → (NaOH, C2H5OH, t). Sản phẩm chính theo quy tắc Zaitsev của phản ứng trên là?",
    "Sản phẩm chính của phản ứng nào sau đây không đúng?",
    "Trong thể thao, khi các vận động viên bị chấn thương do va chạm, không gây ra vết thương hở, gãy xương,... thường được nhân viên y tế dùng loại thuốc xịt, xịt vào chỗ bị thương để gây tê cục bộ và vận động viên có thể quay trở lại thi đấu. Hợp chất chính có trong thuốc xịt là?",
];

const answers = [
    ["CnH2n+2 (n ≥1)", "CnH2n (n ≥2)", "CnH2n-2 (n ≥2)", "CnH2n-6 (n ≥6)"],
    ["CnH2n-1 (n ≥ 1)", "CnH2n+1 (n ≥ 1)", "CnH2n+1 (n ≥ 2)", "CnH2n-1 (n ≥ 2)"],
    ["C4H10", "C2H6", "C3H8", "C5H12"],
    ["Nước", "Benzene", "Dung dịch acid HCl", "Dung dịch NaOH"],
    ["Butane", "Ethane", "Methane", "Propane"],
    ["Phản ứng tách", "Phản ứng thế", "Phản ứng cộng", "Phản ứng oxi hóa"],
    ["CH4", "C2H4", "C2H2", "C6H6"],
    ["Cl2", "CH4", "CO2", "N2"],
    ["Sodium acetate", "Dầu mỏ và khí dầu mỏ", "Aluminium carbide (Al4C3)", "Khí biogas"],
    ["Phân tử methane không phân cực", "Methane là chất khí", "Phân tử khối của methane nhỏ", "Methane không có liên kết đôi"],

    ["liên kết đơn", "liên kết σ", "liên kết bội", "vòng benzene"],
    ["CnH2n+2 (n ≥ 1)", "CnH2n (n ≥ 2)", "CnH2n (n ≥ 3)", "CnH2n-2 (n ≥ 2)"],
    ["CnH2n+2 (n ≥ 1)", "CnH2n (n ≥ 2)", "CnH2n-2 (n ≥ 2)", "CnH2n-6 (n ≥ 6)"],
    ["mạch dài nhất và có nhiều nhánh nhất", "mạch có chứa liên kết đôi và nhiều nhánh nhất", "mạch có chứa liên kết đôi, nhiều nhánh nhất và phân nhánh sớm nhất", "mạch có chứa liên kết đôi, dài nhất và nhiều nhánh nhất"],
    ["phản ứng thế", "phản ứng tách", "phản ứng cộng", "phản ứng phân hủy"],
    ["Br2", "Cl2", "NaCl", "H2"],
    ["H2SO4 đặc", "Lindlar", "Ni/to", "HCl loãng"],
    ["ethane", "propane", "butane", "ethylene"],
    ["MnO2, C2H4(OH)2, KOH", "K2CO3, H2O, MnO2", "C2H5OH, MnO2, KOH", "C2H4(OH)2, K2CO3, MnO2"],
    ["Đun C2H5OH với H2SO4 đặc ở 170°C", "Cracking alkane", "Tách H2 từ ethane", "Cho C2H2 tác dụng với H2 (xt: Lindlar)"],
    ["vàng nhạt", "trắng", "đen", "xanh"],
    ["but-2-yne", "propyne", "acetylene", "but-1-yne"],
    ["Tan tốt trong nước và các dung môi hữu cơ", "Có khối lượng riêng nhỏ hơn khối lượng riêng của nước", "Có nhiệt độ sôi thấp hơn alkane phân tử có cùng số nguyên tử carbon", "Không dẫn điện"],
    ["nguyên tử carbon liên kết với nhóm methyl", "nguyên tử carbon liên kết với nhiều nguyên tử hydrogen hơn", "nguyên tử carbon liên kết với ít nguyên tử hydrogen hơn", "nguyên tử carbon liên kết với nhiều nguyên tử carbon khác hơn"],
    ["dd KMnO4", "dd NaOH", "dd Na2CO3", "dd Br2"],
    ["Dung dịch HCl", "Dung dịch AgNO3/NH3", "Nước bromine", "Dung dịch KMnO4"],
    ["KMnO4 và NaOH", "KMnO4 và quỳ tím", "AgNO3/NH3", "Br2 và AgNO3/NH3"],

    ["CnH2n-6 (n ≥ 2)", "CnH2n+2 (n ≥ 6)", "CnH2n-2 (n ≥ 2)", "CnH2n-6 (n ≥ 6)"],
    ["C6H5-CH3", "C6H5-CH2CH3", "C6H5-CH=CH2", "C6H5-CH(CH3)2"],
    ["Phản ứng thế", "Phản ứng cộng", "Phản ứng tách", "Phản ứng đốt cháy"],
    ["Benzene", "Toluene", "Styrene", "Naphthalene"],
    ["C6H5Cl", "C6H11Cl", "C6H6Cl6", "C6H12Cl6"],
    ["Tác dụng với Br2 (to, FeBr3)", "Tác dụng với HNO3 (đ) /H2SO4(đ)", "Tác dụng với dung dịch KMnO4", "Tác dụng với Cl2, as"],
    ["Dễ hơn, tạo ra o - nitrotoluene và p - nitrotoluene", "Khó hơn, tạo ra o - nitrotoluene và p - nitrotoluene", "Dễ hơn, tạo ra o - nitrotoluene và m - nitrotoluene", "Dễ hơn, tạo ra m - nitrotoluene và p - nitrotoluene"],
    ["H2/Ni, t0", "KMnO4/t0", "Dung dịch Br2", "Cl2/FeCl3, t0"],
    ["Dung dịch KMnO4", "Dung dịch Br2", "Dung dịch HCl", "Dung dịch NaOH"],
    ["Làm phụ gia để tăng chỉ số octane của nhiên liệu", "Làm chất đầu để sản xuất methylcyclohexane", "Làm chất đầu để điều chế phenol.", "Làm chất đầu để sản xuất polystyrene"],

    ["CnH2n-5Cl", "CnH2n-3Cl", "CnH2n-1Cl", "CnH2n+1Cl"],
    ["methyl chloride", "trichloromethane", "chloroform", "propyl chloride"],
    ["(1) < (2) < (3) < (4)", "(1) < (4) < (2) < (3)", "(4) < (3) < (2) < (1)", "(4) < (2) < (1) < (3)"],
    ["(1) > (2) > (3) > (4)", "(1) > (4) > (2) > (3)", "(4) > (3) > (2) > (1)", "(4) > (2) > (1) > (3)"],
    ["Phản ứng thế", "Phản ứng cộng", "Phản ứng tách", "Phản ứng oxi hóa – khử"],
    ["Phản ứng thế", "Phản ứng cộng", "Phản ứng tách", "Phản ứng oxi hóa – khử"],
    ["CH3COOH", "CH3CHCl2", "CH3CH2Cl", "CH3COOCH=CH2"],
    ["propyne", "propan-2-ol", "propane", "propene"],
    ["but-1-ene", "but-2-ene", "but-1-yne", "but-2-yne"],
    ["CH3CH(Cl)CH3 + NaOH → CH3CH(OH)CH3 + NaCl", "CH3CH2Cl + KOH → CH2 = CH2 + KCl + H2O", "CH3Br + KOH → CH3OH + KBr", "CH3CH2CH(Br)CH3 + KOH → CH3CH = CHCH3 + KBr + H2O"],
    ["carbon dioxide", "hydrogen chloride", "chloromethane", "chloroethane"],
];    

const correctAnswers = [
    0, 1, 3, 1, 2,
    1, 0, 1, 1, 0,

    2, 1, 2, 3, 2,
    3, 1, 3, 0, 0,
    0, 0, 0, 1, 1,
    1, 3, 
    
    3, 0, 0, 2, 2,
    2, 0, 2, 0, 0,

    3, 2, 0, 2, 0,
    2, 2, 3, 1, 1,
    3, 
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
