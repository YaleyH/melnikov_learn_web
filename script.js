
// Функция для открытия модального окна для входа
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Функция для закрытия модального окна для входа
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Функция для открытия модального окна для регистрации
function openRegisterModal() {
    document.getElementById("registerModal").style.display = "block";
}

// Функция для закрытия модального окна для регистрации
function closeRegisterModal() {
    document.getElementById("registerModal").style.display = "none";
}

// Добавляем обработчики событий для кнопок открытия и закрытия модальных окон
document.getElementById("loginBtn").addEventListener("click", openLoginModal);
document.getElementById("registerBtn").addEventListener("click", openRegisterModal);
document.getElementsByClassName("close")[0].addEventListener("click", closeLoginModal);
document.getElementsByClassName("close")[1].addEventListener("click", closeRegisterModal);

// Функция для обработки события входа
function handleLogin(event) {
    event.preventDefault(); // Предотвращаем отправку формы (чтобы страница не перезагружалась)

    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";

    alert("Вы успешно вошли как " + username); // Отображаем сообщение об успешном входе
    closeLoginModal(); // Закрываем модальное окно
}

// Функция для обработки события регистрации
function handleRegistration(event) {
    event.preventDefault(); // Предотвращаем отправку формы (чтобы страница не перезагружалась)

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";

    alert("Регистрация завершена!"); // Отображаем сообщение о успешной регистрации
    closeRegisterModal(); // Закрываем модальное окно
}

// Добавляем обработчики событий для отправки форм в модальных окнах
document.getElementById("loginForm").addEventListener("submit", handleLogin);
document.getElementById("registerForm").addEventListener("submit", handleRegistration);

// Функция для обработки события выхода
function handleLogout() {
    
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("registerBtn").style.display = "inline-block";
    document.getElementById("logoutBtn").style.display = "none";

    alert("Вы успешно вышли");
}

document.getElementById("logoutBtn").addEventListener("click", handleLogout);
