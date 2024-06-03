let numbers = Array(1,2,3,4,5,6,7,8)

let [firstValue] = numbers

console.log("Первое значение массива numbers = " + firstValue)

let user = {
    name : "Vlad",
    age : 24,
    isUser : true
}

let admin = {
    ...user,
    admin : true
}
console.log("Admin objet:")
console.log(admin);


let store = {
    state : { // 1 уровень
        profile :{ // 2 уровень
            posts: [ // 3 уровень
                {id : 1, message : 'Hi' , likesCount : 12},
                {id : 2 , message : 'By' , likesCount : 1},
            ],
            newPostText : 'About me'
        },
        dialogsPage : {
            dialogs : [
                {id:1 , name : 'Valera'},
                {id:2 , name : 'Andrey'},
                {id:3 , name : 'Sasha'},
                {id:4 , name : 'Viktor'},
            ],
            messages: [
                {id : 1 ,message : 'hi'},
                {id : 2 , message : 'hi hi '},
                {id : 3 , message : 'hi hi hi'},
            ],
        },
        sidebar : [],

    }
}



const {
    state: {
      profile: {
        posts
      },
      dialogsPage: {
        dialogs,
        messages 
      },
      sidebar : []
    }
  } = store;

//   const { state } = store;
// const { profilePage, dialogsPage, sidebar } = state;
// const { posts, newPostText } = profilePage;
// let { dialogs, message } = dialogsPage;
 


  
  const [post1, post2] = posts
  console.log(sidebar_)
  console.log("Количество лайков первого поста = " + post1.likesCount)
  console.log("Количество лайков второго поста = " + post2.likesCount)
  
  const evenDialogs = dialogs.filter(d => d.id % 2 === 0);
  console.log("Диалоги:")
  evenDialogs.forEach((item)=>{
    console.log("ID: " + item.id + " Name: " + item.name)
  })
  
  const updatedMessages = messages.map(m => ({
    id: m.id,  
    message: 'Hello user'  
  }));

  console.log("Обновлённые сообщения: ")
  updatedMessages.forEach((item)=>
  {
    console.log("ID: " + item.id + " MESSAGE: " + item.message)
  })


  let tasks = [
    {id : 1 , title : 'HTML&CSS' , isDone : true},
    {id : 2 , title : 'JS' , isDone : true},
    {id : 3 , title : 'ReactJS' , isDone : false},
    {id : 4 , title : 'Rest API' , isDone : false},
    {id : 5 , title : 'GraphQL' , isDone : false},
  ]


  tasks = [
    ...tasks,
   {id : 6 , title : 'PHP' , isDone: true},
  ]

  console.log("Tasks array =")
  tasks.forEach((item)=>
  {
    console.log("id: " + item.id + " --> " + item.title)
  })

  const numberValues = [1,2,3];

  function sumValues(x,y,z){
    return x+y+z
  }

  console.log("Sum values result = " + sumValues(...numberValues));



   


