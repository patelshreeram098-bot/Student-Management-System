let students = [];


function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;


    if (name == "" || age == "" || course == "") {

        alert("Please enter all details");

        return;
    }


    let student = {
        name: name,
        age: age,
        course: course
    };


    students.push(student);


    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";


    displayStudents();
}


function displayStudents() {

    let list =
        document.getElementById("studentList");


    list.innerHTML = "";


    for (let i = 0; i < students.length; i++) {

        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${students[i].name}</td>
            <td>${students[i].age}</td>
            <td>${students[i].course}</td>

            <td>
                <button
                    class="delete-button"
                    onclick="deleteStudent(${i})"
                >
                    Delete
                </button>
            </td>
        `;


        list.appendChild(row);
    }
}


function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}