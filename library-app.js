let id = 0;



document.getElementById('add').addEventListener('click', () => {
        let createdDate = new Date();
        let table = document.getElementById('list');
        let row = table.insertRow(1);
        row.setAttribute('id', `item-${id}`);
        row.insertCell(0).innerHTML = document.getElementById('new-title').value;
        row.insertCell(1).innerHTML = document.getElementById('new-author').value;
        row.insertCell(2).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
        row.insertCell(3).innerHTML = document.getElementById('new-due-date').value;
        //console.log(row);
        let returnTitle = row.insertCell(4);
        returnTitle.appendChild(createDeleteButton(id++));
        let overdue = row.insertCell(5);
        overdue.appendChild(createOverdueButton(id));
        document.getElementById('new-title').value = '';
        document.getElementById('new-author').value = '';
    });

    function createDeleteButton(id) {
        let btn1 = document.createElement('button');
        btn1.className = 'btn btn-success';
        btn1.id = id;
        btn1.innerHTML = 'Return';
        btn1.onclick = () => {
            console.log(`Deleting row with id: item-${id}`);
            let elementToDelete = document.getElementById(`item-${id}`);
            elementToDelete.parentNode.removeChild(elementToDelete);
        };
        return btn1;

    }

    function createOverdueButton(id) {
        let btn2 = document.createElement('button');
        btn2.className = 'btn btn-danger';
        btn2.id = id-1;
        btn2.innerHTML = 'Overdue';
        btn2.onclick = () => {
           
            let overdueAlert = document.createElement('span');
            overdueAlert.className = "badge badge-pill badge-warning";
            overdueAlert.innerHTML = 'Overdue Item';
            btn2.parentNode.replaceChild(overdueAlert, btn2);

        };
        return btn2;
    }