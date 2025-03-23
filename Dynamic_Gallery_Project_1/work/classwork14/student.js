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
 return "Student Info: " + this.name + " , " + this.studentId + " , " +
 this.course + " , " + this.gender;
 }
 };
 studentsArray.push(newStudent);
}
function showStudentDetails() {
 let studentInfo = "<h2>Student Records:</h2>";
 for (let student of studentsArray) {
 studentInfo += student.details() + "<br>";
 }
 document.getElementById("studentDetails").innerHTML = studentInfo;
}
function searchStudent() {
 let searchValue = document.getElementById("searchBox").value.toLowerCase();
 let studentInfo = "<h3>Search Results:</h3>";
 let found = false;
 for (let student of studentsArray) {
 if (student.name.toLowerCase().includes(searchValue) ||
student.studentId.toLowerCase().includes(searchValue)) {
 studentInfo += student.details() + "<br>";
 found = true;
 }
 }
 document.getElementById("studentDetails").innerHTML = studentInfo;
}
function clearInputs() {
 document.getElementById("name").value = "";
 document.getElementById("studentId").value = "";
 document.getElementById("course").value = "";
 document.getElementById("gender").value = "";
}
function clearDisplay() {
 document.getElementById("studentDetails").innerHTML = "";
}