var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {};
car.manufacturer = "manufacturer";
car.model = "model";
// Задание 3
var car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var StudentsArray = [
    { 'id': 222332, 'name': 'Aleksey', 'group': 6, marks: [{ 'subject': 'ТРПИ', 'mark': 8, 'done': "done" }] },
    { 'id': 222333, 'name': 'Ivan', 'group': 3, marks: [{ 'subject': 'ТРПИ', 'mark': 8, 'done': "done" }] },
    { 'id': 222334, 'name': 'Petr', 'group': 4, marks: [{ 'subject': 'ТРПИ', 'mark': 9, 'done': "done" }] },
    { 'id': 222335, 'name': 'Vasya', 'group': 2, marks: [{ 'subject': 'ТРПИ', 'mark': 10, 'done': "done" }] }
];
var studentList = {
    students: StudentsArray,
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (targetMark) {
        return this.students.filter(function (student) { return student.marks.some(function (mark) { return mark.mark === targetMark; }); });
    },
    deleteStudent: function (targetId) {
        this.students = this.students.filter(function (student) { return student.id !== targetId; });
    },
    mark: 5,
    group: 6,
};
console.log('Фильрация по группе: ');
studentList.studentsFilter(6).forEach(function (student) { return console.log(student); });
console.log('Фильрация по оценке: ');
studentList.marksFilter(8).forEach(function (student) { return console.log(student); });
studentList.deleteStudent(222332);
console.log("Удаление студента:");
studentList.students.forEach(function (student) { return console.log(student); });
