let dataList = [];
let currentIndex = -1;

function renderTable() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';
    dataList.forEach((data, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.gender}</td>
            <td>${data.country}</td>
            <td>
                <button onclick="editData(${index})">Edit</button>
                <button onclick="deleteData(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function submitForm() {
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value; 
    const country = document.getElementById('country').value;

    
    if (name && gender && country) {
        const newData = { name, gender, country };

        if (currentIndex === -1) {
            dataList.push(newData);
        } else {
            dataList[currentIndex] = newData;
        }
        
        renderTable();
        clearForm();
    } else {
        alert('Fill Details Properly.');
    }
}

function editData(index) {
    const data = dataList[index];
    document.getElementById('name').value = data.name;
    document.querySelector(`input[name="gender"][value="${data.gender}"]`).checked = true;
    document.getElementById('country').value = data.country;
    currentIndex = index;
}

function deleteData(index) {
    dataList.splice(index, 1);
    renderTable();
}

function clearForm() {
    document.getElementById('crudForm').reset();
    currentIndex = -1;
}

document.getElementById('submitBtn').addEventListener('click', submitForm);

renderTable();
