
// Задание 1
type arrayType = {id: number, name : string , group : number};

const array : arrayType[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

// Задание 2

type CarsType =
{
    manufacturer?: string,
    model?: string,
}

let car : CarsType = {};

car.manufacturer = "manufacturer";
car.model = "model";

// Задание 3

const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';


type ArrayCarsType = {
    cars: Array<CarsType>
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

// Задание 4

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DoneType = 'done' | 'not done';



type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students : Array<StudentType>,
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}




let StudentsArray : Array<StudentType> = [
    {'id' : 222332, 'name' : 'Aleksey' , 'group' : 6 , marks : [{'subject' : 'ТРПИ', 'mark' : 8 , 'done' : "done" }] },
    {'id' : 222333, 'name' : 'Ivan' , 'group' : 3 , marks : [{'subject' : 'ТРПИ', 'mark' : 8 , 'done' : "done" }] },
    {'id' : 222334, 'name' : 'Petr' , 'group' : 4 , marks : [{'subject' : 'ТРПИ', 'mark' : 9 , 'done' : "done" }] },
    {'id' : 222335, 'name' : 'Vasya' , 'group' : 2 , marks : [{'subject' : 'ТРПИ', 'mark' : 10 , 'done' : "done" }] }
];



const studentList : GroupType = {
    students : StudentsArray,
    studentsFilter : function (group: number) : Array<StudentType> {
        return this.students.filter(student => student.group === group);
    },
    marksFilter: function (targetMark: number): Array<StudentType> {
        return this.students.filter(student => student.marks.some(mark => mark.mark === targetMark));
    },
    deleteStudent : function (targetId: number) : void  {
        this.students = this.students.filter(student => student.id !== targetId);
    },
    mark : 5,
    group : 6,
}

console.log('Фильрация по группе: ');
studentList.studentsFilter(6).forEach((student : StudentType) => console.log(student));
console.log('Фильрация по оценке: ');
studentList.marksFilter(8).forEach((student : StudentType) => console.log(student));
studentList.deleteStudent(222332);
console.log("Удаление студента:");
studentList.students.forEach((student : StudentType) => console.log(student));





