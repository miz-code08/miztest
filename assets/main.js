const lockInput = document.querySelector(`.lock-input`);
const lockBtn = document.querySelector(`.comic-button`);

// check mật khẩu để mở kho ảnh dìm
document.addEventListener("keydown", (e) => {
    if (lockInput === document.activeElement && e.key === "Enter") {
        lockSubmit();
    }
});    
lockBtn.addEventListener("click", lockSubmit);

function lockSubmit() {
    const inputValue = lockInput.value;
    
    if(inputValue === "satvuc") {
        document.querySelector('.container').style.visibility = "visible";
        const lock = document.querySelectorAll('.box');
        lock.forEach(function(e) {
            e.style.visibility = 'visible';
        });        
        document.querySelector('.lock').style.display = "none";
    }
    else {
        lockInput.value = "";
        lockInput.style.background = "#d03434";
        lockInput.style.color = "#fff";
        lockInput.placeholder = "Mật khẩu sai";
        lockInput.focus();
    }
};