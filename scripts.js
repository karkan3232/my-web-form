document.getElementById('queueForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const program = document.getElementById('program').value;
    const representative = document.getElementById('representative').value;

    // Проверка корректности данных
    if (!validateFullName(fullName) || !validateProgram(program)) {
        alert('Пожалуйста, введите корректные данные.');
        return;
    }

    // Отправка данных с использованием AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Ваша заявка успешно отправлена!');
            document.getElementById('queueForm').reset();
        }
    };
    xhr.send(JSON.stringify({
        fullName: fullName,
        program: program,
        representative: representative
    }));
});

function validateFullName(name) {
    const regex = /^[А-ЯЁа-яё\s]+$/;
    return regex.test(name) && name.length > 2;
}

function validateProgram(program) {
    return program.length > 2;
}

