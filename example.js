// function User(pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
//     };
// };
//
// User.prototype.hello = function(){
//     document.write(this.name + " говорит: 'Привет!'<br/>");
// };



// var ob1 = new User('student1', 20);
// var ob2 = new User('student2', 20);
// ob1.hello=()=>console.log(ob1);
// console.log(ob1, ob2);

// User.prototype.maxAge = 110;
//
// var tom = new User("Том", 26);
// tom.hello();
// var john = new User("Джон", 28);
// john.hello();
// console.log(tom.maxAge); // 110
// console.log(john.maxAge); // 110
//
// User.prototype.maxAge = 110;
// var tom = new User("Том", 26);
// var john = new User("Джон", 28);
// tom.maxAge = 99;
// console.log(tom); // 99
// console.log(tom.maxAge); // 99
// console.log(john); // 110
// console.log(john.maxAge); // 110
//
// function User(pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("Имя: " + this.name + "; возраст: " + this.age);
//     };
// };
// var tom = new User("Том", 26);
// tom.name=34;
// console.log(tom.name);

// function User (name, age) {
//     this.name = name;
//     var _age = age;
//     this.displayInfo = function(){
//         document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
//     };
//     this.getAge = function() {
//         return _age;
//     }
//     this.setAge = function(age) {
//         if(typeof age === "number" && age >0 && age<110){
//             _age = age;
//         } else {
//             console.log("Недопустимое значение");
//         }
//     }
// }

// console.log(new User('name', 30));

// function add(x, y){
//
//     return x + y;
// }
// var result = add.call(this, 3, 8);
//
// console.log(result); // 11
// //
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// var tom = new User("Том", 26);
// function display(){
//     console.log("Ваше имя: " + this.name);
// }
// //
// display.call(tom); // Ваше имя: Том

// function add(x, y){
//
//     return x + y;
// }
// var result = add.call(null, 3, 8);
//
// console.log(result); // 11
//
// function add(x, y){
//
//     return x + y;
// }
// var result = add.apply(null, [3, 8]);
//
// console.log(result); // 11
//
//
// конструктор пользователя
// function User (name, age) {
//     this.name = name;
//     this.age = age;
//     this.go = function(){document.write(this.name + " идет <br/>");}
//     this.displayInfo = function(){
//         document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
//     };
// }
// User.prototype.maxage = 110;
//
// // конструктор работника
// function Employee(name, age, comp){
//     User.call(this, name, age);
//     this.company = comp;
//    this.displayInfo = function(){
//         document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
//     };
// }
//
// Employee.prototype = Object.create(User.prototype);
// Employee.staticMethod = () => {console.log('static')}
// console.log(Employee);
// var tom = new User("Том", 26);
// var bill = new Employee("Билл", 32, "Google");
// tom.go();
// bill.go();
// console.log(tom,bill);
// tom.displayInfo();
// bill.displayInfo();
// console.log(bill.maxage);
//
// /////////////
// "use strict"
//
// Если скрипт запускается в строгом режиме (директива "use strict"), то this ссылается непосредственно на контекст функции. Иначе this ссылается на внешний контекст. Например:
// function foo(){
//     var bar = "bar2";
//     console.log(this.bar);
//     console.log(this);
// }
//
// var bar = "bar1";
//
// foo();  // bar1
//
// "use strict";
// function foo(){
//     var bar = "bar2";
//     console.log(this);
//     console.log(this.bar);
// }
//
// var bar = "bar1";
//
// foo();  // ошибка - this - undefined

// var o = {
//     bar: "bar3",
//     foo: function(){
//         console.log(this.bar);
//     }
// }
// var bar = "bar1";
// o.foo();    // bar3
// function foo(){
//     var bar = "bar2";
//     console.log(this.bar);
// }
//
// var o3 = {bar:"bar3", foo: foo};
// var o4 = {bar:"bar4", foo: foo};
//
// var bar = "bar1";
//
// foo();  // bar1
// o3.foo();   // bar3
// o4.foo();   // bar4
// var o1 = {
//     bar: "bar1",
//     foo: function(){
//         console.log(this.bar);
//     }
// }
// var o2 = {bar: "bar2", foo: o1.foo};
//
// var bar = "bar3";
// var foo = o1.foo;
//
// o1.foo();   // bar1
// o2.foo();   // bar2
// foo();      // bar3
//
// var bar = "bar2";
//
// function daz(){
//     var bar = "bar5";
//     function maz(){
//
//         console.log(this.bar);
//     }
//     maz();
// }
// daz();  // bar2
// function foo(){
//     console.log(this.bar);
// }
//
// var o3 = {bar: "bar3"}
// var bar = "bar1";
// foo();  // bar1
// foo.apply(o3);  // bar3
// // или
// // foo.call(o3);
//
// function foo(){
//     console.log(this.bar);
// }
//
// var o3 = {bar: "bar3"}
// var bar = "bar1";
// foo();  // bar1
// var func = foo.bind(o3);
// func(); // bar3
//
// var school ={
//     title: "Oxford",
//     courses: ["JavaScript", "TypeScript", "Java", "Go"],
//     printCourses: function(){
//         this.courses.forEach(function(course){
//             console.log(this.title, course);
//         })
//     }
// }
// school.printCourses();
// //
// var school ={
//     title: "Oxford",
//     courses: ["JavaScript", "TypeScript", "Java", "Go"],
//     printCourses: function(){
//         var that = this;
//         this.courses.forEach(function(course){
//             console.log(that.title, course);
//         })
//     }
// }
// school.printCourses();
// //
// //
// var school ={
//     title: "Oxford",
//     courses: ["JavaScript", "TypeScript", "Java", "Go"],
//     printCourses: function(){
//         this.courses.forEach((course)=>console.log(this.title, course))
//     }
// }
// school.printCourses();
//
//
//
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     display(){
//         console.log(this.name, this.age);
//     }
// }
// //
// let tom = new Person("Tom", 34);
// tom.display();          // Tom 34
// console.log(tom);  // Tom
// console.log(tom.name);  // Tom
//
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     display(){
//         console.log(this.name, this.age);
//     }
// }
// class Employee extends Person{
//     constructor(name, age, company){
//         super(name, age);
//         this.company = company;
//     }
//     display(){
//         // super.display();
//         console.log("Employee in", this.company);
//     }
//     work(){
//         console.log(this.name, "is hard working");
//     }
// }
//
// let tom = new Person("Tom", 34);
// let bob = new Employee("Bob", 36, "Google");
// console.log(tom, bob);
// tom.display();
// bob.display();
// bob.work();
//
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     static nameToUpper(person){
//         return person.name.toUpperCase();
//     }
//     display(){
//         console.log(this.name, this.age);
//     }
// }
// let tom = new Person("Tom Soyer", 34);
// let personName = Person.nameToUpper(tom);
// console.log(Person);        // TOM SOYER
// console.log(tom);        // TOM SOYER
// console.log(personName);        // TOM SOYER

class User {

    constructor(name) {
        // вызывает сеттер
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Имя слишком короткое.");
            return;
        }
        this._name = value;
    }

}

let user = new User("Иван");
console.log(user); // Иван
console.log(user.name); // Иван

user = new User(""); // Имя слишком короткое.


// class MyClass {
//     prop = value; // свойство
//     constructor(...) { // конструктор
//         // ...
//     }
//     method(...) {} // метод
//     get something(...) {} // геттер
//     set something(...) {} // сеттер
//     [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
//     // ...
// }

// class MyClass {
//     static property = ...;
//
//     static method() {
//     ...
//     }
// }

