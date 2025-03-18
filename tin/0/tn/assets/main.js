const questions = [
    // bài 1
    "Quản lý trong một tổ chức gắn liền với việc:",
    "Trong quản lý, cập nhật dữ liệu có nghĩa là:",
    "Khai thác thông tin trong quản lý là để:",
    "Cơ sở dữ liệu (CSDL) là:",
    "Cập nhật dữ liệu cần đảm bảo:",
    "Một ví dụ về tìm kiếm dữ liệu trong CSDL là:",
    // bài 2
    "Trong cơ sở dữ liệu quan hệ, mỗi bảng chứa gì?",
    "Trong một bảng, khóa chính là gì?",
    "Tại sao cần chỉ định khóa chính trong bảng?",
    "Khóa chính trong bảng thường được chọn dựa trên tiêu chí nào?",
    "Trường nào sau đây có thể làm khóa chính tốt nhất cho bảng chứa thông tin học sinh?",
    // bài 3
    "Dư thừa dữ liệu có thể dẫn đến vấn đề gì?",
    "Mục tiêu chính của việc thiết kế cơ sở dữ liệu là gì?",
    "Liên kết giữa các bảng trong cơ sở dữ liệu được thực hiện thông qua cái gì?",
    "Ràng buộc khóa ngoài đảm bảo điều gì trong cơ sở dữ liệu?",
    "Bảng nào trong cơ sở dữ liệu thư viện có thể chứa thông tin về việc mượn sách?",
    "Cách nào để khai báo liên kết giữa các bảng trong hệ quản trị cơ sở dữ liệu?",
    // bài 4
    "Biểu mẫu trong hệ quản trị cơ sở dữ liệu có chức năng chính nào?",
    "Biểu mẫu cho phép người dùng thực hiện thao tác nào dưới đây?",
    "Lợi ích của việc sử dụng biểu mẫu thay vì tương tác trực tiếp với bảng dữ liệu là gì?",
    "Biểu mẫu nào sau đây thường không cho phép người dùng chỉnh sửa dữ liệu?",
    "Công cụ nào trong hệ quản trị cơ sở dữ liệu thường được sử dụng để tạo biểu mẫu tự động?",
    "Khi nào cần sử dụng biểu mẫu chỉ hiển thị dữ liệu thay vì biểu mẫu cập nhật dữ liệu?",
    // bài 5
    "Truy vấn trong cơ sở dữ liệu (CSDL) là gì?",
    "Ngôn ngữ truy vấn phổ biến nhất trong `các hệ quản trị CSDL quan hệ là gì?",
    "Mệnh đề nào trong SQL được sử dụng để chỉ ra thông tin cần hiển thị?",
    "Trong câu lệnh SQL, mệnh đề WHERE có chức năng gì?",
    "Để lấy mã định danh, tên học sinh và điểm Toán của những học sinh có điểm Toán dưới 5.0, câu truy vấn SQL nào sau đây là đúng?",
    "Khi tên trường trong SQL có dấu cách, ta cần làm gì?",
    // bài 6
    "Câu lệnh SQL nào dưới đây sử dụng INNER JOIN để kết nối hai bảng?",
    "Kiểu JOIN nào trả về các bản ghi trùng khớp từ cả hai bảng?",
    "Câu truy vấn nào dưới đây chỉ định điều kiện để kết nối hai bảng?",
    "Điều nào sau đây là đúng về INNER JOIN?",
    "Mệnh đề SQL nào dùng để kết nối các bảng trong cơ sở dữ liệu?",
    "Cú pháp nào đúng để kết nối các bảng sử dụng INNER JOIN?",
    // bài 7
    "Đặc điểm nào sau đây không đúng với hệ CSDL phân tán?",
    "Điều nào sau đây là ưu điểm của hệ CSDL tập trung?",
    "Hệ CSDL nào dưới đây được gọi là hệ CSDL phân tán?",
    "Kiến trúc nào là kiến trúc đơn giản nhất trong hệ CSDL?",
    "Đâu là nhược điểm của hệ CSDL phân tán?",
    "Ứng dụng toàn cục trong hệ CSDL phân tán có đặc điểm gì?",
    // bài 8
    "Bảo vệ sự an toàn của hệ CSDL là gì?",
    "Một trong những lý do quan trọng để bảo mật thông tin trong CSDL là gì?",
    "Biện pháp nào dưới đây là một phần của xác thực người truy cập?",
    "Mục đích của việc sao lưu dự phòng dữ liệu trong hệ CSDL là gì?",
    "Mã hóa dữ liệu trong CSDL nhằm mục đích gì?",
    "Tường lửa trong hệ CSDL có vai trò gì?",
    // bài 9
    // "Công việc chính của nhà quản trị CSDL là gì?",
    // "Một trong những nhiệm vụ của nhà quản trị CSDL là gì?",
    // "Tại sao sao lưu và phục hồi dữ liệu là nhiệm vụ quan trọng của nhà quản trị CSDL?",
    // "Nhà quản trị CSDL cần theo dõi điều gì để đảm bảo hiệu suất hệ thống?",
];
    
const answers = [
    // bài 1
    ["Tạo lập thông tin từ nguồn bên ngoài", "Xử lý thông tin về hoạt động của tổ chức", "Tạo ra thông tin giả để dễ điều hành", "Lưu trữ dữ liệu không cần cập nhật"],
    ["Thêm, sửa, xóa dữ liệu", "Sao lưu toàn bộ cơ sở dữ liệu", "Xóa hết dữ liệu cũ và nhập dữ liệu mới", "Không cần thay đổi dữ liệu hiện có"],
    ["Xóa thông tin không cần thiết", "Đưa ra các báo cáo và tìm kiếm dữ liệu", "Giảm bớt lượng dữ liệu lưu trữ", "Thay thế dữ liệu cũ bằng dữ liệu mới"],
    ["Một tập tin chứa dữ liệu của máy tính", "Một tập hợp dữ liệu được tổ chức để máy tính truy cập, cập nhật và xử lý", "Một phần mềm xử lý văn bản", "Một chương trình giúp người dùng nhập dữ liệu"],
    ["Dữ liệu được nhập vào một lần và không thay đổi", "Dữ liệu đầy đủ và chính xác", "Chỉ thêm dữ liệu mới mà không sửa dữ liệu cũ", "Tất cả các thao tác phải thực hiện theo thứ tự nhất định"],
    ["Xóa một bản ghi khỏi cơ sở dữ liệu", "Thống kê số lượng sách có mã sách là 'TH'", "Tìm học sinh có điểm môn Tin học cao nhất", "Thêm một hàng dữ liệu mới về học sinh"],
    // bài 2
    ["Chỉ một hàng dữ liệu", "Một tập hợp các cột và hàng", "Một danh sách các mối quan hệ", "Chỉ các hàng không có cột"],
    ["Một trường chứa các giá trị lặp lại", "Một trường có thể để trống", "Một trường hoặc tập hợp các trường dùng để xác định duy nhất bản ghi", "Một tập hợp các trường không thể thay đổi"],
    ["Để tạo ra nhiều bản ghi giống nhau", "Để ngăn chặn lỗi cập nhật dữ liệu", "Để đảm bảo mỗi bản ghi được xác định duy nhất", "Để giảm kích thước cơ sở dữ liệu"],
    ["Số lượng ký tự của các giá trị trong trường", "Độ phổ biến của dữ liệu trong trường", "Khả năng xác định duy nhất bản ghi", "Độ phức tạp của các giá trị"],
    ["Họ và tên", "Ngày sinh", "Mã số học sinh", "Địa chỉ nhà"],
    // bài 3
    ["Dữ liệu không nhất quán khi cập nhật", "Dữ liệu luôn chính xác và dễ quản lý", "Dữ liệu luôn được bảo mật cao", "Không ảnh hưởng đến quá trình tìm kiếm dữ liệu"],
    ["Tăng cường khả năng tìm kiếm dữ liệu", "Giảm thiểu dư thừa dữ liệu", "Tăng số lượng bảng trong cơ sở dữ liệu", "Đảm bảo mọi bảng đều chứa thông tin giống nhau"],
    ["Khóa chính", "Khóa ngoài", "Khóa chính và khóa ngoài", "Không có liên kết nào"],
    ["Mọi giá trị khóa ngoài đều phải xuất hiện trong trường khóa ở bảng được tham chiếu", "Mọi giá trị khóa chính đều phải xuất hiện trong khóa ngoài", "Không có giá trị nào có thể bị xóa khỏi bảng", "Không cần thiết phải kiểm tra tính hợp lệ của dữ liệu"],
    ["Bảng SÁCH", "Bảng NGƯỜI ĐỌC", "Bảng MƯỢN-TRẢ", "Không có bảng nào chứa thông tin này"],
    ["Chọn bảng và kéo thả để liên kết", "Sử dụng các biểu thức toán học", "Nhập thủ công thông tin vào từng bảng", "Không cần khai báo liên kết"],
    // bài 4
    ["Tạo báo cáo tự động từ cơ sở dữ liệu", "Cung cấp giao diện thuận tiện cho người dùng tương tác với cơ sở dữ liệu", "Thực hiện tính toán phức tạp dựa trên dữ liệu", "Quản lý việc sao lưu cơ sở dữ liệu"],
    ["Tạo và xóa bảng trong cơ sở dữ liệu", "Hiển thị dữ liệu và thực hiện thao tác cập nhật, chỉnh sửa", "Thay đổi cấu trúc cơ sở dữ liệu", "Quản lý quyền truy cập cơ sở dữ liệu"],
    ["Giảm thiểu lỗi khi cập nhật dữ liệu", "Cung cấp thêm không gian lưu trữ cho dữ liệu", "Tăng tốc độ truy vấn dữ liệu", "Cải thiện bảo mật cơ sở dữ liệu"],
    ["Biểu mẫu cập nhật dữ liệu", "Biểu mẫu hiển thị báo cáo", "Biểu mẫu chỉ hiển thị dữ liệu", "Biểu mẫu quản lý quyền truy cập"],
    ["Form Wizard", "Table Design", "Query Builder", "Report Generator"],
    ["Khi người dùng chỉ cần xem dữ liệu mà không cần chỉnh sửa", "Khi cần thay đổi cấu trúc bảng dữ liệu", "Khi cần cập nhật thông tin thường xuyên", "Khi quản trị viên muốn cấp quyền chỉnh sửa dữ liệu"],
    // bài 5
    ["Một thao tác trên dữ liệu để thêm, sửa, hoặc xóa bản ghi", "Một phát biểu yêu cầu khai thác dữ liệu từ CSDL", "Một phát biểu thực hiện thay đổi cấu trúc của bảng trong CSDL", "Một chức năng đặc biệt chỉ có trong hệ quản trị CSDL quan hệ"],
    ["Python", "HTML", "SQL", "XML"],
    ["SELECT", "FROM", "WHERE", "UPDATE"],
    ["Xác định bảng dữ liệu sẽ được truy cập", "Chỉ ra thông tin cần hiển thị", "Xác định điều kiện để lọc dữ liệu", "Chỉ định các trường cần cập nhật"],
    ["SELECT MA_DINH_DANH, TEN, DIEM_TOAN FROM HOC_SINH WHERE DIEM_TOAN <= 5.0", "SELECT MA_DINH_DANH, TEN, DIEM_TOAN FROM HOC_SINH WHERE DIEM_TOAN < 5.0", "SELECT * FROM HOC_SINH WHERE DIEM_TOAN < 5.0", "SELECT MA_DINH_DANH, TEN FROM HOC_SINH WHERE DIEM_TOAN < 5.0"],
    ["Đặt tên trường trong dấu ngoặc vuông [ ]", "Đặt tên trường trong dấu ngoặc đơn ( )", "Viết tên trường không có dấu cách", "Bỏ dấu cách và viết liền tên trường"],
    // bài 6
    ["SELECT * FROM Bảng1, Bảng2 WHERE Bảng1.ID = Bảng2.ID;", "SELECT * FROM Bảng1 INNER JOIN Bảng2 ON Bảng1.ID = Bảng2.ID;", "SELECT * FROM Bảng1 LEFT JOIN Bảng2 ON Bảng1.ID = Bảng2.ID;", "SELECT * FROM Bảng1 CROSS JOIN Bảng2;"],
    ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    ["SELECT * FROM Bảng1, Bảng2;", "SELECT * FROM Bảng1 INNER JOIN Bảng2;", "SELECT * FROM Bảng1 INNER JOIN Bảng2 ON Bảng1.ID = Bảng2.ID;", "SELECT * FROM Bảng1 LEFT JOIN Bảng2;"],
    ["Trả về tất cả các bản ghi từ cả hai bảng", "Chỉ trả về các bản ghi trùng khớp từ cả hai bảng", "Trả về các bản ghi từ bảng bên trái và các bản ghi trùng từ bảng bên phải", "Trả về các bản ghi từ bảng bên phải và các bản ghi trùng từ bảng bên trái"],
    ["SELECT", "FROM", "WHERE", "JOIN"],
    ["SELECT * FROM Bảng1, Bảng2 ON Bảng1.ID = Bảng2.ID;", "SELECT * FROM Bảng1 INNER JOIN Bảng2;", "SELECT * FROM Bảng1 INNER JOIN Bảng2 ON Bảng1.ID = Bảng2.ID;", "SELECT * FROM Bảng1 JOIN Bảng2 ON Bảng1.ID;"],
    // bài 7
    ["Dữ liệu được lưu trữ trên nhiều máy tính khác nhau", "Mỗi trạm có thể xử lý ứng dụng cục bộ", "Tất cả dữ liệu đều được lưu trữ tại một máy tính duy nhất", "Có khả năng thực hiện ứng dụng toàn cục"],
    ["Khó khăn trong việc quản lý dữ liệu", "Dễ dàng trong việc truy cập và điều phối dữ liệu", "Tính tin cậy thấp", "Không có ứng dụng cục bộ"],
    ["Hệ thống bán vé máy bay với một máy chủ duy nhất", "Ngân hàng có nhiều chi nhánh với dữ liệu lưu trữ tại từng chi nhánh", "Hệ thống quản lý sinh viên tại một trường học", "Hệ thống đặt hàng trực tuyến với một cơ sở dữ liệu duy nhất"],
    ["Kiến trúc 1 tầng", "Kiến trúc 2 tầng", "Kiến trúc 3 tầng", "Kiến trúc khách - chủ"],
    ["Chi phí cao hơn", "Tính sẵn sàng của dữ liệu cao hơn", "Khả năng mở rộng linh hoạt", "Khó khăn trong việc đảm bảo tính nhất quán dữ liệu"],
    ["Chạy tại một trạm và sử dụng CSDL của một trạm", "Chạy tại một trạm và sử dụng CSDL của ít nhất hai trạm", "Chỉ chạy trên một máy tính duy nhất", "Không yêu cầu lưu trữ dữ liệu"],
    // bài 8
    ["Ngăn chặn truy cập trái phép vào dữ liệu.", "Bảo vệ dữ liệu khỏi các mối đe dọa cố ý hoặc vô tình.", "Tăng cường hiệu suất làm việc của hệ thống.", "Chỉ lưu trữ dữ liệu trên một máy chủ."],
    ["Để tăng tốc độ truy cập dữ liệu.", "Để giảm chi phí lưu trữ.", "Để bảo vệ thông tin nhạy cảm của cá nhân và tổ chức.", "Để thu hút nhiều người dùng hơn."],
    ["Sao lưu dữ liệu.", "Mã hóa dữ liệu.", "Sử dụng thẻ vào cổng và mật khẩu.", "Phân tích dữ liệu."],
    ["Tăng tốc độ xử lý dữ liệu.", "Bảo vệ dữ liệu khỏi mất mát do sự cố.", "Giảm chi phí lưu trữ.", "Tạo cơ hội cho người dùng truy cập dữ liệu."],
    ["Tăng cường hiệu suất truy cập dữ liệu.", "Ngăn chặn truy cập trái phép vào dữ liệu.", "Giảm dung lượng lưu trữ.", "Bảo vệ tính bí mật của dữ liệu."],
    ["Cải thiện tốc độ truyền tải dữ liệu.", "Ngăn chặn truy cập trái phép từ mạng bên ngoài.", "Giúp người dùng dễ dàng truy cập dữ liệu.", "Tạo điều kiện cho việc sao lưu dữ liệu."]
    // bài 9
    // ["Thiết kế trang web cho doanh nghiệp", "Quản lí và bảo vệ dữ liệu trong CSDL", "Viết phần mềm ứng dụng", "Phát triển phần cứng"],
    // ["Tăng tốc độ Internet cho doanh nghiệp", "Quản lí và phân quyền truy cập vào CSDL", "Thiết kế logo cho công ty", "Kiểm tra máy in và máy quét"],
    // ["Để tăng tốc độ truy cập mạng", "Để phòng ngừa mất dữ liệu trong trường hợp sự cố", "Để bán dữ liệu cho bên thứ ba", "Để sửa lỗi phần mềm."],
    // ["Số lượng người dùng đăng nhập", "Hiệu suất và các tham số của CSDL", "Số lượng email gửi đi hàng ngày"],
];  

// Chỉ số của đáp án đúng ban đầu cho mỗi câu hỏi
const correctAnswers = [
    // bài 1
    1, 0, 1, 1, 1,
    2, 
    // bài 2
    1, 2, 2, 2, 2,
    // bài 3
    0, 1, 2, 0, 2,
    0,
    // bài 4
    1, 1, 0, 2, 0,
    0,
    // bài 5
    1, 2, 0, 2, 1,
    0,
    // bài 6
    1, 0, 2, 1, 3,
    2,
    // bài 7
    2, 1, 1, 0, 0,
    1, 
    // bài 8
    1, 2, 2, 1, 3,
    1,
    // bài 9
    1, 1, 1, 1,
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
