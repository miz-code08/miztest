const questions = [
    // bài 16
    "Xét hai điện tích điểm q1 và q2 có tương tác đẩy. Khẳng định nào sau đây là đúng?",
    "Trong trường hợp nào sau đây, ta có thể coi các vật nhiễm điện là các điện tích điểm?",
    "Không thể nói về hằng số điện môi của chất nào dưới đây?",
    "Hai vật có thể tác dụng lực điện với nhau:",
    "Không thể nói về hằng số điện môi của chất nào dưới đây?",
    "Hai chất điểm mang điện tích khi đặt gần nhau chúng đẩy nhau có thể kết luận:",
    "Bốn vật kích thước nhỏ A,B, C, D nhiễm điện. Vật A hút vật B nhưng đẩy vật C, vật C hút vật D. Biết A nhiễm điện dương. Hỏi B nhiễm điện gì?",
    "Một điện tích âm:",
    "Lực tương tác giữa 2 điện tích đứng yên trong điện môi đồng chất, có hằng số điện môi ε thì?",
    // bài 17
    "Điện trường được tạo ra bởi điện tích, là dạng vật chất tồn tại quanh điện tích và",
    "Cường độ điện trường tại một điểm đặc trưng cho điện trường tại điểm đó về",
    "Đơn vị của cường độ điện trường là",
    "Đại lượng nào dưới đây không liên quan tới cường độ điện trường của một điện tích điểm Q đặt tại một điểm trong chân không?",
    "Cường độ điện trường tại một điểm M trong điện trường bất kì là đại lượng",
    "Những đường sức điện của điện trường xung quanh một điện tích điểm Q<0 có dạng là",
    "Đơn vị của cường độ điện trường là:",
    "Đại lượng nào dưới đây không liên quan đến cường độ điện trường của một điện tích điểm Q tại một điểm?",
    "Đơn vị nào sau đây là đơn vị đo cường độ điện trường?",
    "Trong các đại lượng vật lí sau đây, đại lượng nào là véctơ?",
    "Chọn câu trả lời đúng kí hiệu đơn vị của cường độ điện trường",
    "Khái niệm nào sau đây cho biết độ mạnh yếu của điện trường tại một điểm?",
    "Vectơ cường độ điện trường do điện tích điểm Q < 0 gây ra tại 1 điểm M, chiều của:",
    "Tính chất cơ bản của điện trường là:",
    // bài 18
    "Điện trường đều tồn tại ở",
    "Các đường sức điện trong điện trường đều",
    "Khi ta nói về một điện trường đều, câu nói nào sau đây là không đúng?",
    "Biểu thức nào dưới đây biểu diễn một đại lượng có đơn vị là vôn?",
    "Công thức liên hệ giữa cường độ điện trường và hiệu điện thế là",
    "Với điện trường như thế nào thì có thể viết hệ thức U = Ed",
    "Cường độ điện trường đều giữa hai bản kim loại phẳng song song được nối với nguồn điện có hiệu điện thế U sẽ giảm đi khi",
    "Khi một điện tích chuyển động vào điện trường đều theo phương vuông góc với đường sức điện thì điện trường sẽ không ảnh hưởng tới",
    "Quỹ đạo chuyển động của một điện tích điểm q bay vào một điện trường đều E theo phương vuông góc với đường sức không phụ thuộc vào yếu tố nào sau đây?",
    "Điện trường đều là điện trường mà cường độ điện trường của nó",
    "Đặt một điện tích âm, khối lượng nhỏ vào một điện trường đều rồi thả nhẹ. Điện tích này sẽ chuyển động",
    "Trong các nhận xét sau, nhận xét không đúng với đặc điểm đường sức điện là:",
    "Phát biểu nào sau đây là không đúng?",
    // bài 19
    "Công của lực điện trong dịch chuyển của một điện tích q trong điện trường từ điểm M đến điểm N không phụ thuộc vào",
    "Công của lực điện tác dụng lên một điện tích:",
    "Thế năng điện của một điện tích q đặt tại điểm M trong một điện trường bất kì không phụ thuộc vào",
    "Công của lực điện trường khi một điện tích di chuyển từ điểm đến điểm trong điện trường đều là . Trong đó là",
    "Một điện tích chuyển động trong điện trường theo một đường cong kín. Gọi công của lực điện trong chuyến động đó là A thì",
    "Công của lực điện tác dụng lên một điện tích điểm khi di chuyển từ điểm đến điểm trong điện trường tỉ lệ thuận với",
    "Công của lực điện tác dụng lên điện tích điểm khi di chuyển từ điểm đến điểm trong điện trường, không phụ thuộc vào",
    "Chọn phát biểu sai?",
    "Trọng lực, lực đàn hồi và lực tĩnh điện có cùng đặc điểm nào sau đây?",
    "Trong các nhận định dưới đây về hiệu điện thế, nhận định không đúng là:",
    "Mối liên hệ giữa hiệu điện thế UMN và hiệu điện thế UNM là:",
    "Quan hệ giữa cường độ điện trường E và hiệu điện thế U giữa hai điểm mà hình chiếu đường nối hai điểm đó lên đường sức là d thì cho bởi biểu thức",
    "Một electron được thả cho chuyển động trong một điện trường đều từ trạng thái nghỉ. Sau khi đi được một đoạn xác định trong điện trường thì:",
    "Cho một điện tích di chuyển trong điện trường dọc theo một đường cong kín, xuất phát từ điểm qua điểm rồi trở lại điểm Công của lực điện",
    "Thế năng của điện tích trong điện trường đặc trưng cho",
    "Công của lực điện trường khác 0 trong khi điện tích",
    // bài 20
    "Đơn vị của điện thế là:",
    "Điện thế tại một điểm M trong điện trường bất kì có cường độ điện trường E không phụ thuộc vào",
    "Biết hiệu điện thế Umn = 3V. Đẳng thức chắc chắn đúng là",
    "Chọn câu sai. Công của lực điện trường làm dịch chuyển điện tích",
    "Một điện tích điểm q dịch chuyển từ điểm M đến điểm N trong điện trường, hiệu điện thế giữa hai điểm là. Công của lực điện thực hiện khi điện tích q dịch chuyển từ M đến N là:",
    "Đơn vị của điện thế là:",
    "Di chuyển một điện tích từ điểm M đến điểm N trong một điện trường. Công AMN của lực điện sẽ càng lớn nếu",
    "Điện thế là đại lượng đặc trưng cho riêng điện trường về",
    "Khi độ lớn điện tích thử đặt tại một điểm tăng lên gấp đôi thì điện thế tại điểm đó",
    "Hai điểm M và N nằm trên cùng một đường sức của một điện trường đều có cường độ E, hiệu điện thế giữa M và N là UMN, khoảng cách MN = d. Công thức nào sau đây là không đúng?",
];

const answers = [
    // bài 16
    ["q1 > 0 và q2 < 0", "q1 < 0 và q2 > 0", "q1.q2 > 0", "q1.q2 < 0"],
    ["Hai thanh nhựa đặt gần nhau", "Một thanh nhựa và một quả cầu đặt gần nhau", "Hai quả cầu nhỏ đặt xa nhau", "Hai quả cầu lớn đặt gần nhau"],
    ["Không khí khô", "Nước tinh khiết", "Thủy tinh", "Dung dịch muối"],
    ["Chỉ khi chúng đều là vật dẫn", "Chỉ khi chúng đều là vật cách điện", "Khi chúng là một vật cách điện, vật kia dẫn điện", "Khi một trong hai vật mang điện tích"],
    ["Chất khí", "Chất lỏng", "Chất rắn", "Chất dẫn điện"],
    ["chúng đều là điện tích dương", "chúng đều là điện tích âm", "chúng trái dấu nhau", "chúng cùng dấu nhau"],
    ["B âm, C âm, D dương", "B âm, C dương, D dương", "B âm, C dương, D âm", "B dương, C âm, D dương"],
    ["Chỉ tương tác với điện tích dương", "Chỉ tương tác với điện tích âm", "Có thể tương tác với điện tích dương lẫn điện tích âm", "Luôn chia thành hai điện tích âm bằng nhau tuỳ trường hợp"],
    ["Tăng ε lần so với trong chân không", "Giảm ε lần so với trong chân không", "Giảm ε² lần so với trong chân không", "Tăng ε² lần so với trong chân không"],
    // bài 17
    ["tác dụng lực lên mọi vật đặt trong nó", "tác dụng lực điện lên mọi vật đặt trong nó", "truyền lực cho các điện tích", "truyền tương tác giữa các điện tích"],
    ["phương của vectơ cường độ điện trường", "chiều của vectơ cường độ điện trường", "phương diện tác dụng lực", "độ lớn của lực điện"],
    ["N", "N/m", "V/m", "V.m"],
    ["Khoảng cách r từ Q đến điểm quan sát", "Hằng số điện của chân không", "Độ lớn của điện tích Q", "Độ lớn của điện tích q đặt tại điểm quan sát"],
    ["vectơ, có phương, chiều và độ lớn phụ thuộc vào vị trí của điểm M", "vectơ, chỉ có độ lớn phụ thuộc vào vị trí của điểm M", "vô hướng, có giá trị luôn dương", "vô hướng, có thể có giá trị âm hoặc dương"],
    ["những đường cong và đường thẳng có chiều đi vào điện tích Q", "những đường thẳng có chiều đi vào điện tích Q", "những đường cong và đường thẳng có chiều đi ra khỏi điện tích Q", "những đường thẳng có chiều đi ra khỏi điện tích Q"],
    ["V/m; C/N", "V.m; N/C", "V/m; N/C", "V.m; C/N"],
    ["Điện tích Q", "Điện tích thử q", "Khoảng cách r từ Q đến q", "Hằng số điện môi của môi trường"],
    ["Niuton", "Culong", "Vôn kế mét", "Vôn trên mét"],
    ["Điện tích", "Cường độ điện trường", "Điện trường", "Đường sức điện"],
    ["N", "C", "V/m", "Nm2/C2"],
    ["Điện tích", "Điện trường", "Cường độ điện trường", "Đường sức điện"],
    ["Hướng về gần Q", "Hướng xa Q", "Hướng cùng chiều với", "Ngược chiều với"],
    ["Điện trường gây ra cường độ điện trường tại mỗi điểm trong nó", "Điện trường gây ra điện thế tác dụng lên điện tích đặt trong nó", "Điện trường gây ra đường sức điện tại mọi điểm đặt trong nó", "Điện trường gây ra lực điện tác dụng lên điện tích đặt trong nó"],
    // bài 18
    ["xung quanh một vật hình cầu tích điện đều", "xung quanh một vật hình cầu chỉ tích điện đều trên bề mặt", "xung quanh hai bản kim loại phẳng, song song, có kích thước bằng nhau", "trong một vùng không gian hẹp gần mặt đất"],
    ["chỉ có phương là không đổi", "chỉ có chiều là không đổi", "là các đường thẳng song song cách đều", "là những đường thẳng đồng quy"],
    ["Điện trường đều là 1 điện trường mà các đường sức song song và cách đều nhau", "Điện trường đều là 1 điện trường mà véc-tơ cường độ điện trường tại mọi điểm đều bằng nhau", "Trong 1 điện trường đều, 1 điện tích đặt tại điểm nào cũng chịu tác dụng của một lực điện như nhau", "Để biểu diễn 1 điện trường đều, ta vẽ các đường sức song song với nhau"],
    ["qEd", "qE", "Ed", "q.d"],
    ["U = Ed", "U = A/q", "E = A/qd", "E = F/q"],
    ["Điện trường của điện tích dương", "Điện trường của điện tích âm", "Điện trường đều", "Điện trường không đều"],
    ["tăng hiệu điện thế giữa hai bản phẳng", "tăng khoảng cách giữa hai bản phẳng", "tăng diện tích của hai bản phẳng", "giảm diện tích của hai bản phẳng"],
    ["gia tốc của chuyển động", "thành phần vận tốc theo phương vuông góc với đường sức điện", "quỹ đạo của chuyển động", "thành phần vận tốc theo phương song song với đường sức điện"],
    ["Độ lớn của điện tích q", "Cường độ điện trường E", "Vị trí của điện tích q bắt đầu bay vào điện trường", "Khối lượng m của điện tích"],
    ["có hướng như nhau tại mọi điểm", "có hướng và độ lớn như nhau tại mọi điểm", "có độ lớn như nhau tại mọi điểm", "có độ lớn giảm dần theo thời gian"],
    ["dọc theo chiều của các đường sức điện trường", "ngược chiều đường sức điện trường", "vuông góc với đường sức điện trường", "theo một quỹ đạo bất kì"],
    ["Các đường sức của cùng một điện trường đều có thể cắt nhau", "Các đường sức của điện trường tĩnh là đường không khép kín", "Các đường sức của cùng một điện trường đều là những đường thẳng song song cách đều", "Các đường sức là các đường có hướng"],
    ["Điện phổ cho ta biết sự phân bố các đường sức trong điện trường", "Tất cả các đường sức đều xuất phát từ điện tích dương và kết thúc ở điện tích âm", "Cũng có khi đường sức điện không xuất phát từ điện tích dương mà xuất phát từ vô cùng", "Các đường sức của điện trường đều là các đường thẳng song song và cách đều nhau"],
    // bài 19
    ["cung đường dịch chuyển", "điện tích q", "điện trường E", "vị trí điểm M"],
    ["phụ thuộc vào hình dạng đường đi của diện tích", "không phụ thuộc vào hình dạng đường đi của điện tích", "chỉ phụ thuộc vào độ lớn điện tích", "chỉ phụ thuộc vào cường độ điện trường"],
    ["điện tích q", "vị trí điểm M", "điện trường", "khối lượng của điện tích q"],
    ["chiều dài", "chiều dài đường đi của điện tích", "đường kính của quả cầu tích điện", "hình chiếu của đường đi lên phương của một đường sức"],
    ["nếu A = 0", "nếu A > 0", "nếu A < 0", "A không xác định"],
    ["chiều dài đường đi", "độ lớn của điện tích", "thời gian di chuyển", "tốc độ dịch chuyển"],
    ["vị trí của các điểm", "hình dạng đường đi từ điểm đầu đến điểm cuối", "độ lớn của điện tích", "cường độ điện trường tại điểm đầu và điểm cuối"],
    ["Công của lực điện là đại lượng đại số", "Lực điện là một lực thế", "Tại mốc thế năng thì điện trường hết khả năng", "Công của lực điện luôn có giá trị dương"],
    ["Công thực hiện trên quỹ đạo khép kín bằng 0", "Công không phụ thuộc vào vị trí điểm đầu, cuối của quỹ đạo", "Công đều phụ thuộc vào hình dạng đường đi", "Công luôn gây ra sự biến thiên cơ năng"],
    ["Hiệu điện thế đặc trưng cho khả năng sinh công khi dịch chuyển điện tích giữa hai điểm trong điện trường", "Đơn vị của hiệu điện thế là V/C", "Hiệu điện thế giữa hai điểm phụ thuộc vị trí của hai điểm đó", "Hiệu điện thế giữa hai điểm không phụ thuộc điện tích dịch chuyển giữa hai điểm đó"],
    ["UMN = UNM", "UMN = -UNM", "UMN = 1/UNM", "UMN = -1/UNM"],
    ["U = E.d", "U = E/d", "U = q.E.d", "U = q.E/q"],
    ["thế năng điện của điện trường tăng", "thế năng điện của điện trường giảm", "thế năng điện của điện trường giữ nguyên", "thế năng điện của electron tăng"],
    ["trong cả quá trình bằng 0", "trong quá trình từ điểm đầu đến điểm giữa là dương", "trong quá trình từ điểm giữa đến điểm cuối là dương", "trong cả quá trình là dương"],
    ["khả năng tác dụng lực của điện trường", "phương chiều của cường độ điện trường", "khả năng sinh công của điện trường", "độ lớn nhỏ của vùng không gian có điện trường"],
    ["dịch chuyển giữa 2 điểm khác nhau cắt các đường sức", "dịch chuyển vuông góc với các đường sức trong điện trường đều", "dịch chuyển hết quỹ đạo là đường cong kín trong điện trường", "dịch chuyển hết một quỹ đạo tròn trong điện trường"],
    // bài 20
    ["vôn (V)", "jun (J)", "vôn trên mét (V/m)", "oát (W)"],
    ["vị trí điểm M", "cường độ điện trường E", "điện tích q đặt tại điểm M", "vị trí được chọn làm mốc của điện thế"],
    ["Vm = 3V", "Vn = 3V", "Vm - Vn = 3V", "Vn - Vm = 3V"],
    ["phụ thuộc vào hình dạng đường đi", "phụ thuộc vào điện trường", "phụ thuộc vào điện tích dịch chuyển", "phụ thuộc vào hiệu điện thế ở hai đầu đường đi"],
    ["qUmn", "q.q.Umn", "Umn/q", "Umn/q.q"],
    ["Vôn (V)", "Ampe (A)", "Cu-lông (C)", "Oát (W)"],
    ["đường đi MN càng dài", "đường đi MN càng ngắn", "hiệu điện thế Umn càng lớn", "hiệu điện thế Umn càng nhỏ"],
    ["khả năng sinh công của vùng không gian có điện trường", "khả năng sinh công tại một điểm", "khả năng tác dụng lực tại một điểm", "khả năng tác dụng lực tại tất cả các điểm trong không gian có điện trường"],
    ["không đổi", "tăng gấp đôi", "giảm một nửa", "tăng gấp 4"],
    ["Umn = Vm - Vn", "Umn = E.d", "Amn = q.Umn", "E = Umn.d"],
];

const correctAnswers = [
    // bài 16
    2, 2, 3, 3, 3,
    3, 2, 2, 1, 
    // bài 17
    3, 2, 2, 3, 0,
    1, 2, 1, 3, 1,
    2, 2, 0, 3,
    // bài 18
    2, 2, 3, 2, 0,
    2, 1, 1, 2, 1,
    1, 0, 1, 
    // bài 19
    0, 1, 3, 3, 3,
    1, 1, 3, 0, 1,
    1, 0, 3, 0, 2,
    0, 
    // bài 20
    0, 2, 2, 0, 0,
    0, 0, 2, 1, 0,
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
