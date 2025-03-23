const studentsArray = [];
function addNewStudent() {
    let name = document.getElementById("name").value;
    let studentId = document.getElementById("studentId").value;
    let course = document.getElementById("course").value;
    let gender = document.getElementById("gender").value;
    let newStudent = {
        name: name,
        studentId: studentId,
        course: course,
        gender: gender,
        details: function () {
            return "Student Info: "+ this.name + " , " + this.studentId + " , " +
    this.course + " , " + this.gender;
    }
    };
    studentsArray.push(newStudent);
    document.getElementById("Name").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("course").value = "";
    document.getElementById("gender").value = "";
}
function showStudentDetails() {
    let studentInfo = "";
    for (let student of studentsArray) {
        studentInfo += student.details() + "<br>";
    }
    document.getElementById("studentDetails").innerHTML = studentInfo;
}