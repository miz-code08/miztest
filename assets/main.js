function confirmSelection() {
    let subject = document.getElementById("subject").value;
    let test = document.getElementById("test").value;
    let questionType = document.getElementById("questionType").value;

    // Định dạng tên môn học trong URL
    let subjectMap = {
        "toan": "toan",
        "ly": "ly",
        "hoa": "hoa",
        "sinh": "sinh",
        "su": "su",
        "tin": "tin",
        "dia": "dia",
        "ktpl": "ktpl",
    };

    // Định dạng loại câu hỏi trong URL
    let questionTypeMap = {
        "tracnghiem": "tn",
        "dungsai": "ds",
        "traloi": "tl"
    };

    let subjectText = subjectMap[subject] || "khac";
    let questionTypeText = questionTypeMap[questionType] || "khac";
    let testNumber = test.replace("bai", ""); // Lấy số bài từ value bài kiểm tra

    let newPage = `${subjectText}/${testNumber}/${questionTypeText}/index.html`;

    // Kiểm tra xem trang có tồn tại không
    fetch(newPage, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                window.location.href = newPage; // Chuyển hướng nếu trang tồn tại
            } else {
                document.getElementById("result").innerHTML = 
                    `<span style="color: red;">Không có bài kiểm tra này!</span>`;
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = 
                `<span style="color: red;">Không có bài kiểm tra này!</span>`;
        });
}
