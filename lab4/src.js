class Products
{
   constructor()
   {
    this.product_set = new Set();
   }
   get CountProducts()
   {
    return this.product_set.size;
   }
   Add(product)
   {
    console.log(`Товар "${product}" успешно добавлен.`)
    return this.product_set.add(product);
   }
   Delete(product)
   {
    if(this.product_set.has(product))
    {
      console.log(`Товар "${product}" успешно удалён.`)
        this.product_set.delete(product);
    }
    else console.log("Такого товара в списке нет");
   }
   isFind(product)
   {
    if(this.product_set.has(product)) console.log(`Товар "${product}" успешно найден.`)
    return console.log(`Товара "${product}" в списке нет.`)
   }
   

}

let products = new Products();
products.Add("Макароны");
products.Add("Огурцы");
products.Add("Конфеты");
products.Add("Колбаса");

console.log(products);
console.log("Количество товаров: " + products.CountProducts)

products.Delete("Несуществующее значение");
products.Delete("Огурцы");

console.log(products);

console.log(products.isFind("Несущ.значение"));
console.log(products.isFind("Колбаса"));

console.log("Количество товаров: " + products.CountProducts)

class Student
{
    constructor(fullname,recordnumber,group){
        this.fullname = fullname;
        this.recordnumber = recordnumber;
        this.group = group;
    }

}

class StudentList
{
    constructor()
    {
        this.student_list = new Set();
    }

    Add(student)
    {
        this.student_list.add(student);
    }

    Delete(recordnumber)
    {
        let flag = false;
        this.student_list.forEach((student)=>{
            if(student.recordnumber == recordnumber) {
                flag = true;
                this.student_list.delete(student);
            }
        })
        if(!flag){
            console.log("Студента с таким номером зачётки не существует");
        }
    }
    FilterByGroup(group_number)
    {
        this.student_list.forEach((student)=>{
            if(group_number != student.group) this.student_list.delete(student)
        })
    }

    SortByRecordNumber() {
        // student list  - это Set
        const sortedStudents = Array.from(this.student_list);
    
        sortedStudents.sort((a, b) => a.recordnumber - b.recordnumber);
    
        const sortedList = new StudentList();
        sortedStudents.forEach((student) => sortedList.Add(student));
        
        this.student_list.clear();

        sortedStudents.forEach((student)=>{
            this.student_list.add(student);
        })

    }


}

const studentList = new StudentList();

studentList.Add(new Student("Айрат", 123, "A"));
studentList.Add(new Student("Хазбик", 456, "B"));
studentList.Add(new Student("Азбек", 789, "A"));
studentList.Add(new Student("Нурлан", 567, "B"));

console.log("Оригинальный список студентов:");
studentList.student_list.forEach((student) => {
    console.log(student.fullname, student.recordnumber, student.group);
});

studentList.Delete(456);
console.log("\nПосле удаления:");
studentList.student_list.forEach((student) => {
    console.log(student.fullname, student.recordnumber, student.group);
});

studentList.SortByRecordNumber();
console.log("\nСортировка по номеру зачётки:");
studentList.student_list.forEach((student) => {
    console.log(student.fullname, student.recordnumber, student.group);
});




studentList.FilterByGroup("A");

console.log("\nОтфильтрованные студенты:");
studentList.student_list.forEach((student) => {
    console.log(student.fullname, student.recordnumber, student.group);
});

class ProductStorage {
    constructor() {
      this.products = new Map();
    }
  
    addProduct(id, name, quantity, price) {
      if (this.products.has(id)) {
        console.log("Товар с таким id уже существует.");
      } else {
        this.products.set(id, { name, quantity, price });
        console.log(`Товар "${name}" успешно добавлен.`);
      }
    }
  
    removeProductById(id) {
      if (this.products.has(id)) {
        const { name } = this.products.get(id);
        this.products.delete(id);
        console.log(`Товар "${name}" с id ${id} успешно удален.`);
      } else {
        console.log("Товар с указанным id не найден.");
      }
    }
  
    removeProductsByName(name) {
      let removedCount = 0;
      this.products.forEach((product, id) => {
        if (product.name === name) {
          this.products.delete(id);
          removedCount++;
        }
      });
      if (removedCount > 0) {
        console.log(`Удалено ${removedCount} товаров с названием "${name}".`);
      } else {
        console.log(`Товары с названием "${name}" не найдены.`);
      }
    }
  
    updateQuantity(id, newQuantity) {
      if (this.products.has(id)) {
        const product = this.products.get(id);
        product.quantity = newQuantity;
        console.log(`Количество товара "${product.name}" с id ${id} изменено на ${newQuantity}.`);
      } else {
        console.log("Товар с указанным id не найден.");
      }
    }
  
    updatePrice(id, newPrice) {
      if (this.products.has(id)) {
        const product = this.products.get(id);
        product.price = newPrice;
        console.log(`Стоимость товара "${product.name}" с id ${id} изменена на ${newPrice}.`);
      } else {
        console.log("Товар с указанным id не найден.");
      }
    }
  }
  
  const productStorage = new ProductStorage();
  
  productStorage.addProduct(1, "Мобильник", 10, 100);
  productStorage.addProduct(2, "Телефон", 5, 50);
  productStorage.addProduct(3, "Мобила", 8, 80);
  
  productStorage.removeProductById(2);
  
  productStorage.removeProductsByName("Телефон");
  
  productStorage.updateQuantity(3, 15);
  
  productStorage.updatePrice(1, 120);



function DoCache(cache, values) {
    if(!cache.has(values)) {
        console.log("Был добавлен новый кеш");
        let result = isFindFirst(values[0], values[1]);
        cache.set(values, result);
        return cache.get(values);
    } 
    console.log("Кеш существует, вывод:")
    return cache.get(values);
}

function isFindFirst(set, item) {

    return set+item*25;
}

let cache = new WeakMap();

let A = {0: 5, 1: 3};
let B = {0: 4, 1 : 5};
console.log(DoCache(cache,B));
console.log(DoCache(cache, A));
console.log(DoCache(cache, A));
console.log(DoCache(cache,B));
