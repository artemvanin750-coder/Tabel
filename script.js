document.addEventListener('DOMContentLoaded', () => {
    const students = [
        { id: 1, name: "Алексеев Евгений Евгеньевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "н", "н", "н", "", "", "", "", "н", "", "", "", "", "н", "", ""], sick: 0, total: 17 },
        { id: 2, name: "Алфимцев Матвей Игоревич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "н", "", "н", "", "", "", "", "н", "", "", "", "", "н", "н", "н", "н", ""], sick: 0, total: 15 },
        { id: 3, name: "Багдасарьян Михаил Каренович", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "н", "н", "", "", "", "", "", "", "", "", "", "н", "н", "н", ""], sick: 0, total: 17 },
        { id: 4, name: "Батурин Александр Егорович", status: "active", tag: "none", attend: ["", "", "", "", "", "", "н", "", "н", "", "н", "н", "н", "", "", "", "н", "", "н", "", "н", "", "", ""], sick: 0, total: 14 },
        { id: 5, name: "Ванин Артем Александрович", status: "active", tag: "none", attend: Array(23).fill(""), sick: 0, total: 21 },
        { id: 6, name: "Васильева Виктория Анатольевна", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "", "", "н", "", "", "", "", "н", "н", "", "", "", "", ""], sick: 0, total: 19 },
        { id: 7, name: "Давлатов Мухаммадали Бахруллоевич", status: "active", tag: "none", attend: Array(23).fill(""), sick: 0, total: 21 },
        { id: 8, name: "Долгополов Ярослав Алексеевич", status: "active", tag: "none", attend: Array(23).fill(""), sick: 0, total: 22 },
        { id: 9, name: "Доломанова София Дмитриевна", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "н", "", "", "", "", "", "", "", "н", "", "", "", "", "", ""], sick: 0, total: 20 },
        { id: 10, name: "Дубатовка Даниил Анатольевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "н", "", "", "", "", ""], sick: 0, total: 21 },
        { id: 11, name: "Зайридинов Исламбек Фазилдинович", status: "enrolled", tag: "none", attend: ["х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "", "", "", "", "", "", "", ""], sick: 0, total: 5 },
        { id: 12, name: "Захаров Никита Алексеевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "н", "", "н", "н", "", "", "", "", "н", "н", "", "", "н", "", "", "", ""], sick: 0, total: 16 },
        { id: 13, name: "Золотов Александр Дмитриевич", status: "active", tag: "none", attend: ["н", "б", "б", "", "", "", "", "н", "", "н", "н", "", "н", "н", "н", "", "н", "н", "н", "н", "н", "н", ""], sick: 2, total: 10 },
        { id: 14, name: "Кабанов Семен Алексеевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "н", "н", "", "", "", ""], sick: 0, total: 20 },
        { id: 15, name: "Калашников Сергей Сергеевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "", "", "н", "", "", "", "", "н", "", "", "", "н", "н", ""], sick: 0, total: 18 },
        { id: 16, name: "Кобин Артем Олегович", status: "active", tag: "none", attend: ["", "", "н", "н", "", "н", "н", "б", "б", "б", "б", "б", "", "", "", "н", "н", "", "", "", "н", "н", ""], sick: 5, total: 15 },
        { id: 17, name: "Махмутов Никита Ренатович", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "н", "", "", "", "", "", "", "", "н", "", "", "", "", ""], sick: 0, total: 20 },
        { id: 18, name: "Мордвинов Владислав Сергеевич", status: "active", tag: "none", attend: ["х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "х", "", "", "", "", "", "", "", "", "", "", "", ""], sick: 0, total: 13 },
        { id: 19, name: "Нишонов Рустам Гайратбекович", status: "transferred", tag: "none", attend: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], sick: 0, total: 11 },
        { id: 20, name: "Поздеев Виктор Владимирович", status: "active", tag: "none", attend: ["", "", "", "н", "", "", "", "", "н", "", "", "", "н", "н", "", "", "н", "", "н", "", "", "н", ""], sick: 0, total: 16 },
        { id: 21, name: "Саадуллаев Рамазан Шамильевич", status: "expelled", tag: "none", attend: ["н", "н", "н", "н", "н", "н", "н", "н", "н", "н", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"], sick: 0, total: 0 },
        { id: 22, name: "Саркориев Салам Саркориевич", status: "active", tag: "none", attend: ["", "", "", "н", "", "", "", "", "н", "", "", "", "н", "н", "", "", "н", "", "н", "", "", "н", ""], sick: 0, total: 16 },
        { id: 23, name: "Селиванов Артем Александрович", status: "active", tag: "svo", attend: ["н", "н", "н", "н", "н", "н", "н", "н", "н", "н", "н", "н", "н", "н", "н", "", "", "н", "н", "н", "н", "н", ""], sick: 0, total: 3 },
        { id: 24, name: "Сухоруков Семен Алексеевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "н", "", "", "н", "", "", "", "н", "", "н", "", "н", "", ""], sick: 0, total: 18 },
        { id: 25, name: "Филинков Андрей Витальевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "", "н", "", "", "", "", "н", "", "", "", "", "", "", ""], sick: 0, total: 20 },
        { id: 26, name: "Черников Андрей Алексеевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "", "", "", "", "н", "", "н", "", "н", "", "", "", "", "", "", ""], sick: 0, total: 19 },
        { id: 27, name: "Юрченко Артем Витальевич", status: "active", tag: "none", attend: ["", "", "", "", "", "", "", "н", "н", "", "", "", "", "", "", "", "б", "б", "б", "б", "б", "б", ""], sick: 6, total: 20 }
    ];

    const dates = [1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 28, 29, 30];
    const tbody = document.querySelector('#attendanceTable tbody');
    const statusFilter = document.getElementById('statusFilter');
    const tagFilter = document.getElementById('tagFilter');

    function renderTable() {
        tbody.innerHTML = '';
        const statusVal = statusFilter.value;
        const tagVal = tagFilter.value;

        students.forEach(student => {
            if (statusVal !== 'all' && student.status !== statusVal) return;
            if (tagVal !== 'all' && student.tag !== tagVal) return;

            const tr = document.createElement('tr');
            tr.dataset.id = student.id;

            // Метаданные
            tr.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td class="status-cell">${getStatusText(student.status)}</td>
                <td class="tag-cell">${getTagText(student.tag)}</td>
            `;

            // Посещаемость
            let presentCount = 0;
            dates.forEach(date => {
                const idx = dates.indexOf(date);
                const mark = student.attend[idx] || '';
                const td = document.createElement('td');
                
                if (student.status === 'expelled' || student.status === 'transferred') {
                    td.classList.add('empty-cell');
                    td.textContent = '—';
                } else if (mark) {
                    td.classList.add('mark-cell', `${mark.toLowerCase()}-cell`);
                    td.textContent = mark;
                    td.title = getMarkTitle(mark);
                    if (mark === 'п') presentCount++;
                } else {
                    td.classList.add('empty-cell');
                    td.contentEditable = true;
                    td.spellcheck = false;
                    td.dataset.date = date;
                }
                tr.appendChild(td);
            });

            // Больничные и итог
            const sickTd = document.createElement('td');
            sickTd.textContent = student.sick;
            sickTd.classList.add('sick-cell');
            
            const totalTd = document.createElement('td');
            totalTd.textContent = student.total;
            totalTd.classList.add('total-cell');

            tr.appendChild(sickTd);
            tr.appendChild(totalTd);
            tbody.appendChild(tr);
        });
    }

    function getStatusText(code) {
        const map = { active: '', enrolled: 'Зачисл.', expelled: 'Отчисл.', transferred: 'Перев.' };
        return map[code];
    }

    function getTagText(code) {
        const map = { none: '', svo: 'СВО' };
        return map[code];
    }

    function getMarkTitle(mark) {
        const map = { п: 'Был(а)', н: 'Отсутствовал(а)', б: 'Больничный', п: 'Практика', х: 'Зачислен', '-': 'Отчислен/Переведен' };
        return map[mark] || '';
    }

    // Редактирование ячеек
    tbody.addEventListener('input', (e) => {
        if (e.target.contentEditable !== 'true') return;
        const mark = e.target.textContent.trim().toLowerCase();
        const valid = ['п', 'н', 'б', 'п', '', 'х', '-'];
        
        if (!valid.includes(mark)) {
            e.target.textContent = '';
            return;
        }

        if (mark === 'б') e.target.classList.add('sick-cell');
        else if (mark === 'н') e.target.classList.add('absent-cell');
        else e.target.classList.remove('sick-cell', 'absent-cell');

        // Автосохранение в объект
        const studentId = parseInt(e.target.closest('tr').dataset.id);
        const student = students.find(s => s.id === studentId);
        const dateIdx = dates.indexOf(parseInt(e.target.dataset.date));
        student.attend[dateIdx] = mark || '';
    });

    // Фильтры
    statusFilter.addEventListener('change', renderTable);
    tagFilter.addEventListener('change', renderTable);

    // Сохранение
    document.getElementById('saveBtn').addEventListener('click', () => {
        localStorage.setItem('attendanceData', JSON.stringify(students));
        alert('Данные сохранены в браузере');
    });

    // Экспорт
    document.getElementById('exportBtn').addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(students, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", "attendance_ТЭСИС-26_сен26.json");
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
    });

    // Загрузка сохраненных данных
    if (localStorage.getItem('attendanceData')) {
        try {
            const saved = JSON.parse(localStorage.getItem('attendanceData'));
            students.forEach(student => {
                const found = saved.find(s => s.id === student.id);
                if (found) {
                    student.attend = found.attend;
                    student.sick = found.sick;
                    student.total = found.total;
                }
            });
        } catch (e) {
            console.error('Ошибка загрузки данных');
        }
    }

    renderTable();
});
