let user =
{
    name: 'Masha',
    age: 21
};

let numbers = [1, 2, 3];

let user1 =
{
    name: 'Masha',
    age: 28,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
}

const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 }
]

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: true, mark: 4 }
        ]
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8 },
            { programming: true, mark: 4 },
        ],
    }
};

let user6 =
{
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }

            },
            {
                programming: true,
                mark: 4,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            }
        ]
    }

}

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        }
    },
    exams: [
        {
            maths: true,
            mark: 8,
            professor: {
                name: 'Ivan Petrov',
                degree: 'PhD',
                articles: [
                    { title: "About HTML", pagesNumber: 3 },
                    { title: "About CSS", pagesNumber: 5 },
                    { title: "About JavaScript", pagesNumber: 1 },
                ]
            }
        },
        {
            programming: true,
            mark: 10,
            professor: {
                name: 'Petr Ivanov',
                degree: 'PhD',
                articles: [
                    { title: "About HTML", pagesNumber: 3 },
                    { title: "About CSS", pagesNumber: 5 },
                    { title: "About JavaScript", pagesNumber: 1 },
                ]
            }
        },
    ]
};


let store = {
    state: { // 1 уровень
        profilePage: { // 2 уровень
            posts: [ // 3 уровень
                { id: 1, message: 'Hi', likescount: 12 },
                { id: 2, message: 'By', likescount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: []
    },
}

console.log('Задание 1:');

const copiedUser = structuredClone(user);
console.log('Скопированный user(глубокое копирование): ' + copiedUser.name + "," + user.age);

const userBySpread = { ...user };
console.log('Скопированный user(spread оператор):' + userBySpread.name + "," + userBySpread.age);

const copiedNumbers = structuredClone(numbers);
console.log('Скопированный number(глубокое копирование): ');
copiedNumbers.forEach((item) => {
    console.log(item);
})

const numbersBySpread = [...numbers];
console.log('Скопированный numbers(spread оператор)');
numbers.forEach((item) => {
    console.log(item);
})


const copiedUser1 = structuredClone(user1);
console.log('Скопированный user1(глубокое копирование): ');
console.log(copiedUser1);

const User1BySpread = { ...user1 };
console.log('Скопированный user1(spread оператор)');
console.log(user1);

const copiedUser2 = structuredClone(user2);
console.log('Скопированный user2(глубокое копирование): ');
console.log(copiedUser2);

const user2BySpread = { ...user2 };
console.log('Скопированный user2(spread оператор):');
console.log(user2BySpread);

const copiedArray = structuredClone(array);
console.log('Скопированный array(глубокое копирование):');
console.log(copiedArray);

const arrayBySpread = [...array];
console.log('Скопированный array(spread оператор):');
console.log(arrayBySpread);

const copiedUser4 = structuredClone(user4);
console.log('Скопированный user4(глубокое копирование):');
console.log(copiedUser4);

const user4BySpread = { ...user4 };
console.log('Скопированный user4(spread оператор):');
console.log(user4BySpread);

const copiedUser5 = structuredClone(user5);
console.log('Скопированный user5(глубокое копирование):');
console.log(copiedUser5);

const user5BySpread = { ...user5 };
console.log('Скопированный user5(spread оператор):');
console.log(user5BySpread);


const copiedUser6 = structuredClone(user6);
console.log('Скопированный user6(глубокое копирование):');
console.log(copiedUser6);

const user6BySpread = { ...user6 };
console.log('Скопированный user6(spread оператор):');
console.log(user6BySpread);

const copiedUser7 = structuredClone(user7);
console.log('Скопированный user7(глубокое копирование):');
console.log(copiedUser7);

const user7BySpread = { ...user7 };
console.log('Скопированный user7(spread оператор):');
console.log(user7BySpread);

const copiedStore = structuredClone(store);
console.log('Скопированный store(глубокое копирование):');
console.log(copiedStore);

const storeBySpread = { ...store };
console.log('Скопированный store(spread оператор):');
console.log(storeBySpread);


console.log('Задание 2:');

copiedUser5.group = 12;
copiedUser5.studies.exams.find(exam => exam.programming).mark = 10;
console.log(copiedUser5);


console.log('Задание 3:');

copiedUser6.studies.exams.find(exam => exam.programming).professor.name = "Alyaksey Shymko";
console.log(copiedUser6);

console.log('Задание 4:');

copiedUser7.exams.find(exam => exam.maths).professor.articles.find(article => article.title === 'About CSS').pagesNumber = 3;
console.log(copiedUser7);

console.log('Задание 5:');
copiedStore.state.dialogsPage.messages.forEach(element => {
    element.message = 'Hello';
});
console.log(copiedStore);