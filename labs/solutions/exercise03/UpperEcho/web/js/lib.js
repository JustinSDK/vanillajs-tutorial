window.onload = function () {
    document.form1.onsubmit = function () {
        if (this.text.value.length === 0) {
            document.getElementById('console').innerHTML = 
                    '<span class="highlight">請填寫欄位</span>';
            return false;
        }
    };
};