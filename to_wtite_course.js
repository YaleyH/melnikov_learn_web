document.getElementById("showFormBtn").addEventListener("click", function () {
    // Создание диалогового окна
    var formDialog = document.createElement("div");
    formDialog.className = "form-dialog";
    formDialog.innerHTML = `
        <form id="courseForm">
            <label for="fullName">ФИО:</label>
            <input type="text" id="fullName" name="fullName" required><br>
            <label for="phone">Номер телефона:</label>
            <input type="tel" id="phone" name="phone" required><br>
            <label for="dob">Дата рождения:</label>
            <input type="date" id="dob" name="dob" required><br>
            <input type="submit" value="Отправить">
        </form>
    `;

    // Добавление диалогового окна на страницу
    document.body.appendChild(formDialog);

    // Обработка отправки формы
    document.getElementById("courseForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращение отправки формы по умолчанию

        // Получение данных из формы
        var fullName = document.getElementById("fullName").value;
        var phone = document.getElementById("phone").value;
        var dob = document.getElementById("dob").value;

        // Можно здесь добавить код для отправки данных на сервер или их обработки
        // Например, можно использовать fetch() для отправки данных

        // Закрытие диалогового окна
        document.body.removeChild(formDialog);
    });
});
