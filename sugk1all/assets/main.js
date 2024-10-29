const questions = [
    // bài 1
    "Đầu thế kỉ XVII, ngành công nghiệp phát triển nhất ở nước Anh là",
    "Đến giữa thế kỉ XVIII, tại miền Bắc của 13 thuộc địa Anh ở Bắc Mĩ phát triển",
    "Đến giữa thế kỉ XVIII, tại miền Nam của 13 thuộc địa Anh ở Bắc Mĩ phát triển",
    "Từ thế kỉ XVII, nền nông nghiệp Anh có điểm gì nổi bật?",
    "Mục tiêu chung của cách cuộc cách mạng tư sản ở thế kỉ XVI- XVIII là gì?",
    "Đâu là nhiệm vụ cơ bản của cách cuộc cách mạng tư sản ở thế kỉ XVI- XVIII ?",
    "Lực lượng lãnh đạo của cuộc cách mạng tư sản là giai cấp",
    "Kết quả chung của các cuộc cách mạng tư sản thời cận đại là lật đổ",
    "Đâu không phải là mục tiêu của các cuộc cách mạng tư sản?",
    "Đặc điểm nổi bật của tình hình chính trị nước Anh và Pháp trước khi bùng nổ cách mạng tư sản là",
    "Nội dung nào phản ánh không đúng về nhiệm vụ dân chủ trong các cuộc cách mạng tư sản?",
    "Các cuộc cách mạng tư sản thời cận đại có điểm gì chung?",
    // bài 2
    "Chủ nghĩa tư bản được xác lập đầu tiên trên thế giới ở",
    "Một trong những thách thức mà chủ nghĩa tư bản hiện đại phải đối mặt là",
    "Một trong những đặc điểm cơ bản của chủ nghĩa tư bản hiện đại là",
    "Cuối thế kỉ XIX - đầu thế kỉ XX, các nước tư bản chủ nghĩa đã chuyển sang giai đoạn",
    "Đầu thế kỉ XX, quốc gia nào sau đây có hệ thống thuộc địa rộng lớn nhất?",
    "Cuối thế kỉ XIX đầu thế kỉ XX, quốc gia nào sau đây được mệnh danh là “công xưởng của thế giới” và “đế quốc mà Mặt Trời không bao giờ lặn”?",
    "Nội dung nào sau đây phản ánh không đúng đặc điểm của chủ nghĩa tư bản độc quyền?",
    "Nội dung nào sau đây là một trong những thách thức của chủ nghĩa tư bản hiện đại?",
    "Chính sách xâm lược và mở rộng thuộc địa của các nước tư bản nhằm mục đích đáp ứng nhu cầu",
    "Cuộc cách mạng tư sản ở Đức vào những 50- 70 của thế kỉ XX diễn ra dưới hình thức là",
    "Các tổ chức độc quyền ra đời ở các nước tư bản (từ cuối thế kỉ XIX đầu thế kỉ XX) là sự liên minh giữa",
    "Lĩnh vực nào sau đây là tiềm năng phát triển của chủ nghĩa tư bản hiện đại?",
    // bài 3
    "Sau Cách mạng tháng Hai năm 1917, chính quyền của giai cấp tư sản được thiết lập ở nước Nga là",
    "Sau Cách mạng tháng Hai năm 1917, chính quyền cách mạng của quần chúng nhân dân được thiết lập ở nước Nga được gọi là",
    "Đại hội lần thứ nhất các Xô viết toàn Liên bang (1922) tại Mátxcơva đã thông quan văn kiện nào sau đây?",
    "Chế độ chính trị của Nga sau Cách mạng tháng 1905-1907 là chế độ",
    "Cách mạng tháng Hai ở Nga đã lật đổ được",
    "Đại hội lần thứ nhất các Xô viết toàn Liên bang diễn ra cuối tháng 12 năm 1922 đã tuyên bố thành lập",
    "Liên Xô là tên gọi tắt của",
    "Lãnh đạo Cách mạng tháng Mười Nga năm 1917 là",
    "Năm 1924, bản hiến pháp đầu tiên của Liên Xô được thông qua, đánh dấu",
    "Sau Cách mạng tháng Mười, chính quyền Xô viết được thành lập, đã thông qua",
    "Sau Cách mạng tháng Hai năm 1917, nhiệm vụ nào được đặt ra cho nhân dân Nga?",
    "Cuộc Cách mạng tháng Hai năm 1917 ở Nga đã thực hiện được nhiệm vụ nào sau đây?",
    // bài 4
    "Năm 1949, quốc gia nào ở Đông Bắc Á đi theo con đường xã hội chủ nghĩa?",
    "Quốc gia nào sau đây ở Mĩ la tinh chọn con đường phát triển lên chủ nghĩa xã hội?",
    "Quốc gia nào sau đây ở khu vực Đông Nam Á chọn con đường phát triển lên chủ nghĩa xã hội?",
    "Mục tiêu chủ yếu của công cuộc cải cách, mở cửa ở Trung Quốc (1978) là",
    "Trong công cuộc cải cách, mở cửa (12/1978), Trung Quốc xác định lấy phát triển lĩnh vực nào làm trung tâm?",
    "Năm 2010, ở châu Á, quốc gia nào sau đây có nền kinh tế lớn thứ hai thế giới?",
    "Nguyên nhân khách quan dẫn đến sự sụp đổ chủ nghĩa xã hội ở Liên Xô và Đông Âu là",
    "Một trong những nguyên nhân chủ quan dẫn đến sự sụp đổ của chế độ xã hội chủ nghĩa ở Liên Xô và Đông Âu là",
    "Tháng 12-1978, quốc gia nào sau đây thực hiện công cuộc cải cách, mở cửa, đạt được thành tựu to lớn về kinh tế xã hội?",
    "Thắng lợi của Hồng quân Liên Xô trong những năm 1944 - 1945 đã tạo điều kiện cho sự ra đời của nhà nước dân chủ nhân dân ở các nước",
    "Trong những năm 1944-1945, các nước Đông Âu nổi dậy giành chính quyền xuất phát từ điều kiện khách quan thuận lợi nào sau đây?",
    "Năm 1948, ở châu Á, quốc gia nào sau đây đi lên xây dựng chủ nghĩa xã hội?",
    "Tháng 12-1975, nhà nước nào sau đây được thành lập và đi lên xây dựng chủ nghĩa xã hội?",
    // "",
];

const answers = [
    // Bài 1
    ["A. Luyện kim", "B. Chế tạo máy hơi nước", "C. Sản xuất len, dạ", "D. Chế tạo máy móc", 2],
    ["A. Kinh tế đồn điền", "B. Công trường thủ công", "C. Dệt và làm gốm", "D. Phường hội thủ công", 1],
    ["A. Công thương nghiệp", "B. Kinh tế đồn điền, trang trại", "C. Luyện kim và đóng tàu", "D. Khai thác dầu mỏ", 1],
    ["A. Nông nghiệp lạc hậu, manh mún, thô sơ, năng suất thấp, mất mùa", "B. Nông nghiệp kém phát triển, bị nông phẩm của Pháp cạnh tranh", "C. Phương thức kinh doanh tư bản chủ nghĩa thâm nhập mạnh vào nông nghiệp", "D. Bắt đầu cuộc cách mạng trong lĩnh vực nông nghiệp đặc biệt là ngành sao su", 2],
    ["A. Lật đổ chế độ phong kiến, thực dân cùng tàn tích của nó", "B. Lật đổ xã hội nguyên thủy, cổ đại cùng tàn tích của nó", "C. Tạo điều kiện cho sự phát triển của chế độ phong kiến", "D. Mở đường cho sự phát triển của chủ nghĩa xã hội", 0],
    ["A. Dân tộc và dân chủ", "B. Dân tộc và nhân dân", "C. Độc lập và tự do", "D. Dân chủ và độc lập", 0],
    ["A. Tư sản", "B. Công nhân", "C. Nông dân", "D. Địa chủ", 0],
    ["A. Chế độ phong kiến, thực dân và thiết lập chế độ tư bản chủ nghĩa", "B. Chế độ phong kiến, thiết lập chế độ cộng hòa", "C. Chế độ quân chủ chuyên chế, thiết lập chế độ quân chủ lập hiến", "D. Sự thống trị của thực dân Anh, giành độc lập dân tộc", 0],
    ["A. Lật đổ chế độ phong kiến, thực dân cùng tàn tích của nó", "B. Tạo điều kiện cho sự phát triển của nền kinh tế tư bản chủ nghĩa", "C. Thiết lập nền thống trị của giai cấp tư sản", "D. Mở ra thời đại mới: thời đại thắng lợi của chủ nghĩa xã hội", 3],
    ["A. Tồn tại chế độ quân chủ chuyên chế", "B. Là thuộc địa của chủ nghĩa thực dân", "C. Xuất hiện kinh tế tư bản chủ nghĩa", "D. Xuất hiện trào lưu triết học ánh sáng", 0],
    ["A. Xóa bỏ chế độ phong kiến chuyên chế", "B. Xác lập nền dân chủ tư sản", "C. Đem lại quyền tự do chính trị, kinh tế cho người dân", "D. Thống nhất thị trường, tạo thành quốc gia dân tộc", 3],
    ["A. Mở đường cho chủ nghĩa tư bản phát triển", "B. Tư sản và chủ nô lãnh đạo", "C. Nhằm mục đích xóa bỏ chế độ nô lệ", "D. Diễn ra dưới hình thức nội chiến", 0],
    // Bài 2
    ["A. Châu Âu và Bắc Mĩ", "B. Tây Âu và Châu Á", "C. Bắc Mĩ và Nam Á", "D. Châu Á và Châu Phi", 0],
    ["A. Tiềm ẩn nguy cơ khủng hoảng tài chính mang tính toàn cầu", "B. Sức sản xuất của các ngành kinh tế ngày càng cao", "C. Khoa học công nghệ phát triển và ngày càng mở rộng", "D. Lực lượng lao động có chất lượng ngày càng cao", 0],
    ["A. Bước đầu xuất khẩu tư bản", "B. Xuất hiện độc quyền nhà nước", "C. Bước đầu xâm lược thuộc địa", "D. Xuất hiện tư bản tài chính", 1],
    ["A. Tự do cạnh tranh", "B. Cải cách đất nước", "C. Đế quốc chủ nghĩa", "D. Chủ nghĩa phát xít", 2],
    ["A. Đức", "B. I-ta-li-a", "C. Nhật", "D. Anh", 3],
    ["A. Pháp", "B. Anh", "C. Đức", "D. Mĩ", 1],
    ["A. Sự tập trung sản xuất và tư bản ở mức cao", "B. Xuất khẩu tư bản đóng vai trò quan trọng", "C. Đầu tư, hợp tác với các nước đang phát triển", "D. Tăng cường phân chia lãnh thổ thế giới", 2],
    ["A. Nguồn nhân công ngày càng cạn kiệt", "B. Giao lưu kinh tế quốc tế ngày càng tăng", "C. Mâu thuẫn xã hội ngày càng gia tăng", "D. Sự ra đời các tổ chức liên kết khu vực", 2],
    ["A. Phát triển khoa học - kĩ thuật", "B. Giải quyết tình trạng thất nghiệp", "C. Thu hút nguồn vốn đầu tư bên ngoài", "D. Nguyên liệu và nguồn nhân công", 3],
    ["A. Chiến tranh giải phóng dân tộc", "B. Nội chiến", "C. Cải cách", "D. Quá trình thống nhất đất nước", 3],
    ["A. Vô sản và tư sản", "B. Chủ nô và tư sản", "C. Các nhà tư bản lớn", "D. Địa chủ và quý tộc", 2],
    ["A. Chạy đua vũ trang", "B. Sự bình đẳng xã hội", "C. Cơ cấu giai cấp xã hội", "D. Khoa học - công nghệ", 3],
    // Bài 3
    ["A. Chính phủ tư sản lâm thời của giai cấp tư sản", "B. Chính phủ dân tộc dân chủ của công, nông, binh", "C. Xô viết đại biểu công nhân, nông dân và binh lính", "D. Xô viết đại biểu công nhân, tiểu tư sản và binh lính", 0],
    ["A. Chính phủ tư sản lâm thời của giai cấp tư sản", "B. Chính phủ dân tộc dân chủ của giai cấp tư sản", "C. Xô viết đại biểu công nhân, nông dân và binh lính", "D. Xô viết đại biểu công nhân, tiểu tư sản và binh lính", 2],
    ["A. Hiến chương Liên hợp quốc", "B. Tuyên ngôn thành lập Liên Xô", "C. Hiệp ước thân thiện và hợp tác ở Đông Nam Á", "D. Hiệp ước Xô - Đức không xâm lược nhau", 1],
    ["A. Cộng hòa", "B. Dân chủ", "C. Quân chủ chuyên chế", "D. Quân chủ lập hiến", 2],
    ["A. Chế độ Nga hoàng Nicolai II, chấm dứt chế độ quân chủ chuyên chế ở Nga", "B. Giải phóng nước Nga khỏi ách thống trị của chủ nghĩa thực dân", "C. Chính phủ lâm thời của giai cấp tư sản, xây dựng nhà nước vô sản", "D. Chính quyền của giai cấp tư sản, giành chính quyền cho giai cấp vô sản", 0],
    ["A. Liên bang cộng hòa xã hội chủ nghĩa xô viết (gọi tắt là Liên Xô)", "B. Cộng hòa Xô viết đầu tiên là Nga, Ukraine, Belarus và Captazơ", "C. Cộng đồng các quốc gia độc lập (SNG)", "D. Nước Nga Xô viết Xã hội chủ nghĩa", 0],
    ["A. Liên bang Cộng hòa xã hội chủ nghĩa Xô viết", "B. Liên minh các đảng ở nước Nga", "C. Liên hiệp các nước xã hội chủ nghĩa Xô viết", "D. Phong trào liên kết toàn Xô viết", 0],
    ["A. Mác", "B. Ăngghen", "C. Stalin", "D. Lênin", 3],
    ["A. Sự hoàn thành quá trình thành lập Nhà nước Liên bang Cộng hòa xã hội chủ nghĩa Xô viết", "B. Sự hoàn thành quá trình thành lập Nhà nước chủ nghĩa tư bản hiện đại đầu tiên trên thế giới", "C. Sự xác lập Nhà nước vô sản đầu tiên trên thế giới đấu tranh cho quyền lợi của giai cấp thống trị", "D. Sự xác lập và xây dựng mô hình nhà nước phong kiến", 0],
    ["A. Sắc lệnh hòa bình và sắc lệnh tiền lương", "B. Sắc lệnh ruộng đất và sắc lệnh binh dịch", "C. Sắc lệnh hòa bình và sắc lệnh ruộng đất", "D. Sắc lệnh xóa bỏ những đẳng cấp trong xã hội", 2],
    ["A. Lật đổ chế độ nông nô", "B. Lật đổ chế độ phong kiến", "C. Thành lập chính quyền tư sản", "D. Thành lập chính quyền Xô viết", 3],
    ["A. Lật đổ chế độ phong kiến Nga hoàng", "B. Lật đổ Chính phủ tư sản lâm thời", "C. Đánh bại sự can thiệp của các đế quốc", "D. Đánh bại liên minh phong kiến, tư sản", 0],
    // Bài 4
    ["A. Việt Nam", "B. Campuchia", "C. Trung Quốc", "D. Lào", 2],
    ["A. Cuba", "B. Braxin", "C. Argentina", "D. Mexico", 0],
    ["A. Việt Nam", "B. Indonesia", "C. Thái Lan", "D. Philippin", 0],
    ["A. Đưa Trung Quốc thành quốc gia giàu mạnh, dân chủ, văn minh", "B. Mở rộng lãnh thổ, tiến hành các cuộc chiến tranh xâm lược", "C. Liên minh chặt chẽ với Liên Xô và Ấn Độ", "D. Lật đổ giai cấp tư sản, xác lập quyền thống trị của giai cấp vô sản", 0],
    ["A. Kinh tế", "B. Chính trị", "C. Quân sự", "D. Văn hóa", 0],
    ["A. Trung Quốc", "B. Ấn Độ", "C. Anh", "D. Pháp", 0],
    ["A. Đường lối lãnh đạo chủ quan, duy ý chí", "B. Chưa khai thác tốt thành tựu khoa học kĩ thuật", "C. Công cuộc cải tổ đất nước có nhiều sai lầm", "D. Sự chống phá quyết liệt của các thế lực thù địch", 3],
    ["A. Sự chống phá của các thế lực thù địch", "B. Đường lối lãnh đạo chủ quan, duy ý chí", "C. Không chịu tiến hành cải tổ đất nước", "D. Niềm tin của các tầng lớp nhân dân suy giảm", 1],
    ["A. Liên Xô", "B. Cu-ba", "C. Ấn Độ", "D. Trung Quốc", 3],
    ["A. Đông Âu", "B. Tây Âu", "C. Nam Âu", "D. Bắc Âu", 0],
    ["A. Phát xít Nhật đã bị tiêu diệt hoàn toàn", "B. Chiến tranh thế giới II lan rộng sang châu Á", "C. Khối Đồng minh chống phát xít được thành lập", "D. Thất bại của chủ nghĩa phát xít ở châu Âu", 3],
    ["A. Triều Tiên", "B. Cu Ba", "C. Việt Nam", "D. Lào", 0],
    ["A. Cộng hòa nhân dân Trung Hoa", "B. Cộng hòa Indonesia", "C. Cộng hòa Dân chủ nhân dân Lào.", "D. Cộng hòa Nhân dân Campuchia.", 2],
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