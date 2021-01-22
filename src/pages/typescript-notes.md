---
title: "My personal notes on Typescript"
date: "2020-06-03"
postId: "2"
---

![My personal notes on Typescript :](https://www.tsmean.com/assets/img/typescript-vs-javascript.svg)

# Introduction

This is just some of my notes that I will refer back to in the future that I hope can be somehow useful for others. I created this notes while I'm learning TypeScript at the same time, so do take everything I wrote with a grain of salt and this post is directed towards someone with basic knowledge of JavaScript.

## Index

- Resources
- Type Inference
- Explicit Type
- Union Type
- Dynamic Type - any
- Functions
- Void Type
- Type Aliases & Function signatures
- TypeScript interaction with DOM
- Classes
- Access Modifiers
- Interface

## Resources

These are some of the best TypeScript related resources that I have stumbled into:

- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/home.html)
- [TypeScript vs JavaScript - Ben Awad](https://www.youtube.com/watch?v=D6or2gdrHRE)
- [Why TypeScript is Actually Good - Ben Awad](https://www.youtube.com/watch?v=Ptrhz2zW--o)
- [NetNinja Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)
- [The object Type in TypeScript by Marius Schulz](https://mariusschulz.com/blog/the-object-type-in-typescript#:~:text=The%20Object%20Type,common%20to%20all%20JavaScript%20objects.)
- [Types vs Interface](https://www.educba.com/typescript-type-vs-interface/)
- [Cleaner TypeScript with the Non Null Assertion Operator](https://medium.com/better-programming/cleaner-typescript-with-the-non-null-assertion-operator-300789388376)

## Type Inference

In TypeScript, all of variable that aren't explicitly typed will be inffered a type, kinda how it works in JavaScript with a bit of twist.

```typescript
const x = 10; //Inferred into "number" type.
const y = "Heyaa"; //inferred into "String" type.
const z = null; //inferred into "null" type.
const arrString = ["Heyaa", "Hii", "Hello"]; //inferred into (string)[]
const student = {
  name: "Suki",
  age: 24,
  homeroom: "Mr. Guten Tag",
};
// inferred to {name: (string), age: (number), homeroom: (string)}
```

Once a variable type is explicitly typed or inferred that variable can only contain that specific type.

```typescript
let x = 10; //inferred into "number" type.
x = "Heyaa"; //will not compile.
```

The error message looks like something like this:

![Inferred error](https://cdn.discordapp.com/attachments/410113682824232962/717639147917017108/unknown.png)

## Explicit Type

In TypeScript, there's also a way for developer to explicitly type a variable instead of relying on inference typing and this is how explicit typing works.

```typescript
const x: number = 10
const y: string = "Heyaa"
const z: null = null
const arrString: string[] = ["Heyaa", "Hii", "Hello"]
const randomFunc: fn()
let student: {name: string,age: number} = {
    name: "heyaa",
    age: 20
}
//typeof is a function that return a datatype of the variable that it takes in
console.log(typeof (student)); //object, not Object
```

Pay attention to the types in the example above, it is "string" not "String". This is rather important because "String" is actually referring to a non-primitive boxed object. The general rule of thumb is to use the primitive type which is the lowercased version. but there's one special case which is object. TypeScript has three confusing types: `Object`, `{}` and `object`, After spending some time researching into this subject, I find that an explaination from a legend over at stackoverflow really hit the spot which is:

- `Object`, Contains stuff (like `toString()`, `hasOwnProperty()`) that is present in all JavaScript objects. Any value (primitive, non-primitive) can be assigned to Object type.

- `{}` is an empty object. It is the same as Object.

- `object` was introduced in TypeScript 2.2. It is any non-primitive type. You can't assign to it any primitive type like bool, number, string, symbol. The official documentation of TypeScript recommends to use this type instead of `Object`, because the new non-primitive type `object` does not come with any property such as `toString()` and other properties that `Object` inherit to avoid conflict.

## Union Type

Array in JavaScript could contain a variety of data with a different types, in TypeScript they tackled this issue with Union Typing.

```typescript
const randomArray = [10, "Heyaa", null, true]; //inferred into (String|number|null|boolean)[]
const randomArray2: (string | number | null | boolean)[] = [
  1,
  "Hii",
  null,
  false,
  10,
  true,
  "Heyaa",
]; //Explicitly typed.
```

Union Type use case is not restricted to only arrays, simple variable can also be explicitly type using Union Typing making them a bit more dynamic and able to contain different data types based on the given types.

Simple Variable example:

```typescript
let x: string | number;
x = 10;
console.log(x); //10
x = "Heyaa";
console.log(x); //Heyaa
// variable x is assignable with both string and number type data.
```

## Dynamic Type - any

`any` is a dynamic type that basically eliminate all of the "statically typed aspect" of TypeScript, it is a bit of a double-edge sword. I like to think of it as a temporary solution if there is a situation where I don't know what a function does and change it to its actual type once I understand it. Using `any` kinda removes all of the benefit of using TypeScript, because it will lose all of TypeScript's type secureness and rollsback into its predecessor JavaScript.

```typescript
let x: any;
x = 10;
x = "Heyaa";
x = null;
x = [1, 2, 3];
// none of this will throw an error message just like how JavaScript will behave.
```

## Functions

Function in TypeScript is a bit more powerful compared to what it was in JavaScript, developer can be much more precise on the type of parameters that the function receives and the type of its return value.

```typescript
// parameters and return type is explicitly typed
const sum = (a: number, b: number): number => {
  return a + b;
};

// parameters that are not explicitly typed will be inferred to `any` type
const sum = (a, b): number => {
  return a + b;
};

const sum = (a: number, b: number) => {
  return a + b; //return type is inferred to `number` type
};

// union type also can be used
const randomFunc = (foo: number, bar: string | number): number | string => {
  if (typeof bar === string) {
    return bar;
  } else {
    return bar;
  }
};
```

TypeScript also allows function parameter to be optional and assign a default value for the parameter in scenario where the parameter is not provided.

```typescript
// "?" indicates that parameter a is optional
// while the value of 1 is the default value of that parameter and will be assigned if parameter "b" is not provided
const sum = (a number, b?: number = 1): number => {
  return a + b
}

// both of this functionality is completely isolated, optional parameter does not have to have a default value.
// note that it is the convention to write the required parameter before the optional parameter
// sum(,10) << to avoid something like this
const sum = (a: number = 2, b?: number): number => {
  return a + b
}
```

## Void type

`void` is the polar opposite of `any` type. It basically checks and ensure that it does not fall under any type at all. It is mainly used for a function that does not return value.

```typescript
const pleaseIgnoreMe = (): void => {
  console.log("woop woop");
};
```

In scenario where the return value of callback are ignored, try to avoid using type `any` and use type `void` instead. `void` is safer than `any` because if we accidentally use the return value that was meant to be ignored it will throw an error, while `any` will not throw an error.

```typescript
const notImportantModule = () : void => {
  console.log("woop woop");
}

const importantModule = () : object => {
  return {imporantFunction: () => "result"}
}

const badFunction = (notImportantModule: () => void){
  const x = callback(); //oopsie meant to be importantModule
  x.importantFunction(); //this will throw an error, but if we used `any` instead of `void` it will not error out.
}
```

## Type Aliases & Function Signatures

Type alias is just a type declaration without assigning it to any variable. The purpose of Type Alias is to reduce the amount of code redundancy.

Scenario:

```typescript
const logStudentName = (student: {
  name: string;
  age: number;
  homeroom: string;
}): void => {
  console.log(student.name);
};

const logStudentAge = (student: {
  name: string;
  age: number;
  homeroom: string;
}): void => {
  console.log(student.age);
};

const logStudentHomeroom = (student: {
  name: string;
  age: number;
  homeroom: string;
}): void => {
  console.log(student.homeroom);
};
```

Using Type Alias:

```typescript
type Student = {
  name: string
  age: number
  homeroom: string
}

const logStudentName = (student: Student): void => {
  console.log(student.name)
}

const logStudentAge = (student: Student}): void => {
  console.log(student.age)
}

const logStudentHomeroom = (student: Student): void => {
  console.log(student.homeroom)
}
// much cleaner
```

Type Alias also can contain a function type if it was provided with Function Signatures.

```typescript
//arrow function represents a Function type
type voidFunction: () => void
type parameterFunction: (a: number, b: string) => string

voidFunction = () => {
  console.log("Heyaa")
}
```

## TypeScript interaction with DOM

DOM reference:

```html
<h1>My day in a park</h1>
<p>The dog is doing a zoomies in the field with other dogs</p>
<button class="clickable-button" id="example-save-button-1">Save</button>
```

In the scenario where we want to query for that particular save button in JavaScript, we write something like this:

```javascript
//javascript
const button = document.querySelector("button");
// will throw a warning message in TypeScript, because it is possibly undefined
```

Behind this query JavaScript actually does not ensure that it will return an element if the element does not exist in the DOM. This behaviour does not sit well with TypeScript, it will not throw and error but it will fire a warning message that indicates that the query might not return anything. In order to prevent this, we could use Type Casting or Non-null assertion operator ("!").

### Non-null Assertion

Non-null assertion is used when the developer is certain that the query is definitely returns something. Personally, I will try to avoid using Non-null assertion too much because it is just like `any` type and remove the benefits of using TypeScript and seems a bit unelegant to me.

```typescript
const button = document.querySelector("button"); // will throw a warning message
// exclamation or bang notation represent a non-null assertion.
const buttonNonNull = document.querySelector("button")!; // OK
// note: button and buttonNonNull data type is inferred as HTMLElementButton because we are querying for button element

const buttonByClass = document.querySelector(".clickable-button")!; // inferred to Element
const buttonById = document.querySelector("#example-save-button-1")!; //inferred to Element
// Element is a just a non-specific type that is viable for both HTML element and XML element.
```

### Type Casting or Type Assertion

We have been using type casting throughout this notes, which goes something like this:

```typescript
let num1: number = 1;
let name: string = "Suki";

//I am assuming that this is an old syntax because the official documentation uses the first syntax.
let num2 = <number>2;
let greet = <string>"Heyaa";
```

There is one more way of doing type casting which uses the `as` syntax.

```typescript
let num = 1 as number;
let name = "Suki" as string;
```

The `as` syntax is a bit special because it is the only syntax allowed when dealing with JSX.

DOM reference:

```html
<h1>My day in a park</h1>
<p>The dog is doing a zoomies in the field with other dogs</p>
<button class="clickable-button" id="example-save-button-1">Save</button>
```

```typescript
// buttonByClass variable can only accept HTMLButtonElement now because we type cast it!
const buttonByClass = document.querySelector(
  ".clickable-button"
) as HTMLButtonElement;
```

## Classes

The difference between classes in JavaScript and TypeScript is not much, but TypeScript offers some extra feature that is rather powerful.

### Class in JavaScript

```javascript
class Student {
  constructor(name, age, homeRoom) {
    this.name = name;
    this.age = age;
    this.homeRoom = homeRoom;
  }

  getName() {
    return this.name;
  }
}
```

### Class in TypeScript

```typescript
class Student {
  //explicitly type the properties
  name: string;
  age: number;
  homeRoom: string;

  // explicitly type the expected parameter
  constructor(name: string, age: number, homeRoom: string) {
    this.name = name;
    this.age = age;
    this.homeRoom = homeRoom;
  }

  // explicitly type the return type of the function
  getName(): string {
    return this.name;
  }
}
```

Just from that example, it is clear to see that we can be very pedantic while defining our classes in TypeScript. Classes can also be used as a data type in TypeScript, in scenario where we want to create an array of students that only contains a student object and no other data type.

```typescript
let studentList: Student[] = [];
//refer to the Student class above
const william = new Student("william", "22", "Mrs. Smith");
const shawn = new Student("shawn", "22", "Mrs. Guten Tag");
const notStudentObject = {
  name: "suki",
  age: "22",
  homeRoom: "Mr. Mackie",
};
studentList.push(william); // OK
studentList.push(shawn); // OK
studentList.push(notStudentObject); // will throw an error
```

Variable `notStudentObject` errors out because it is not a student object, it is just an object that is quite similar to Student object but not directly an instance of the student class.

### Access Modifiers

This concept should be rather familiar if you have written something in Java programming language, in TypeScript we can manipulate the access modifier for class properties with `public`, `private`, and `readonly` modifier.

```typescript
class Student {
  // not defining access modifier will default to public
  public name: string;
  private age: number;
  readonly homeRoom: string;

  constructor(name: string, age: number, homeRoom: string) {
    this.name = name;
    this.age = age;
    this.homeRoom = homeRoom;
  }
  getName(): string {
    return this.name;
  }
  setAge(age: number): void {
    this.age = age;
  }
  setHomeRoom(homeroom: string): void {
    this.homeRoom = homeroom;
  }
}
const william = new Student("william", "22", "Mrs. Smith");
william.age = 24; // will error out because property age is private
william.setAge(24); // OK
william.homeRoom = "Mr. Penguin"; //will error out because the property is read only
william.setHomeRoom("Mr. Penguin"); //will error out because the property is read only
```

<strong>Public</strong>: allows property to be accessed and modified.

<strong>Private</strong>: allows property to be modified but not accessible outside of the class.

<strong>Readonly</strong>: allows property to be accessed but prevent modification at any form.

TypeScript also provide an easier way to write constuctor given that we provide all of the access modifier for all of our properties.

```typescript
class Student {
  //Note that this will only works if we provide all of the access modifier for all of the properties
  constructor(
    public name: string,
    private age: number,
    readonly homeRoom: string
  ) {}
}
//very clean :D
```

## Interface

Interface is sorta works like a class, it works like a blueprint for an object. Variable that is explicitly type with an interface has to comply to the declared structure of the assigned interface.

```typescript
//previous Student class turned into interface
interface Student {
  name: string;
  age: number;
  homeRoom: string;
  logName(): void;
  getName(): string;
  changeAge(age: number): void;
}

const michael: Student = {
  // the key variables have to be the same variable as the interface
  // the sequence of the key-value pairs does not have to be in the same sequence as the interface
  age: 22,
  name: "Michael",
  homeRoom: "Mr.Deliver",
  logName(): void {
    console.log(this.name);
  },
  getName(): string {
    return this.name;
  },
  // the parameter name is not relevant as long as it is the same type as the declared interface
  changeAge(newAge: number): void {
    this.age = newAge;
  },
};

console.log(michael.age); //22
michael.changeAge(12); // does not return anything
console.log(michael.age); //12
```

It is also important to note that interface only generates an object that follows its blueprint, that means that if we generate a new object that fulfills all of the requirement of the Student interface it will work.

```typescript
//refer to Student interface above
const manuallyTypeMichael = {
  age: 22,
  name: "Michael",
  homeRoom: "Mr.Deliver",
  logName(): void {
    console.log(this.name);
  },
  getName(): string {
    return this.name;
  },
  changeAge(newAge: number): void {
    this.age = newAge;
  },
};

const suki: Student = {
  age: 22,
  name: "Suki",
  homeRoom: "Mr.Deliver",
  logName(): void {
    console.log(this.name);
  },
  getName(): string {
    return this.name;
  },
  changeAge(newAge: number): void {
    this.age = newAge;
  },
};

const checkStudent = (student: Student) => {
  console.log(student.name + " is a Student");
};

checkStudent(manuallyTypeMichael); // Michael is a student
checkStudent(suki); //Suki is a student
```

Just like Class properties, interface properties can also be assigned with access modifier and be optional.

```typescript
interface Person {
  readonly name: string; // a const variable is likely to be a readonly, but still depends on the scenario.
  private age: number;
  public address?: string;
  private email?: string;
}
```

Interface is not only limited to a JavaScript Object, we can use interface to describe a function!

```typescript
//this interface describe a structure that takes in two number parameter that will return a string
//it does not describe what it suppose to do with those parameter as long as it returns a string
interface twoStringFunc {
  (x: string, y: string): string;
}
const interpolation: twoStringFunc = (
  firstString: string,
  secondString: string
) => {
  return firstString + secondString;
};

console.log(interpolation("Heyaa ", "reader")); //Heyaa reader
```

### Interface with Classes

Interface can also be used with a class, it might seems a bit weird at first but interface just ensures that the class follows the defined structure of the interface. I'll use the Student class again to showcase the interaction betweenn class and interface

```typescript
interface haveDescribeFunction {
  describe(): void;
}

class Student implements haveDescribeFunction {
  constructor(
    public name: string,
    private age: number,
    readonly homeRoom: string
  ) {}

  describe() {
    console.log(`This is ${this.name}`);
  }
}
const suki = new Student("suki", 22, "Mr.Bernard");
suki.describe(); //This is Suki
```

What `haveDescribeFunction` does is just matching whether or not describe function exist in its implementation, it does not pay attention to other properties.

```typescript
interface haveDescribeFunction {
  describe(): void;
}
// typescript will not compile because it does not have a describe function
class Teacher implements haveDescribeFunction {
  constructor(public name: string, private age: number) {}
}

const mrBernard = new Teacher("Bernard", 40);
```

Interfaces can also be used as a type for assertion, it is a bit less restrictive compared to using a class for type assertion.

```typescript
class Student implements haveDescribeFunction {
  constructor(
    public name: string,
    private age: number,
    readonly homeRoom: string
  ) {}

  describe() {
    console.log(`This is ${this.name}`);
  }
}

class Teacher implements haveDescribeFunction {
  constructor(public name: string, private age: number) {}

  describe() {
    console.log(`This is ${this.name}`);
  }
}

const mrBernard = new Teacher("Bernard", 40);
const suki = new Student("suki", 22, "Mr.Bernard");
const arrayOfDescribable: haveDescribeFunction[] = [];
arrayOfDescribable.push(mrBernard, suki);
console.log(arrayOfDescribable); //(2) [Teacher, Student]
```

### The differences between Type and Interface

I was on an interview and was asked this question, but I couldn't gave the interviewer a good answer and thus I decided to thoroughly find the definitive answer for this question. Initially I have always thought that use cases for Type and Interface is a bit similar, but after properly researching it's purpose and definition it game a good idea on their use cases.

| Basis Of Comparison Between TypeScript Type vs Interface | TypeScript Type                                                                    | TypeScript Interface                                                            |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Definition                                               | It allows the creation of the new name for a type.                                 | An interface provides the powerful way to define entities.                      |
| Capability                                               | In TypeScript, Types are with fewer capabilities comparatively.                    | In TypeScript, Interface provides us with more capabilities.                    |
| Declarations                                             | Type cannot have multiple merged declarations.                                     | An interface can have multiple merged declarations.                             |
| Extend                                                   | Type for an object cannot be used.                                                 | An interface can be used in conjunction with other keywords.                    |
| Identical Name                                           | In TypeScript, if two types are having identical names it will throw an exception. | In TypeScript, if two interfaces are having identical names it will get merged. |
| Implemented                                              | Type cannot be implemented, it can be declared only.                               | Interface members are getting implemented by the derived class.                 |

I find this table really good to highlights the differences between Type and Interface that I found from this [website](https://www.educba.com/typescript-type-vs-interface/), from this table we can see clearly that Type and Interface is designed for a very different purpose and on that Declaration section I see something unfamiliar which is **Merged Declarations**.

### Merged Declarations

The most common use of this feature is interface merging, which looks like something like this.

```typescript
interface Car {
  color: string;
  horsePower: number;
}

let bmw: Car = {
  color: "black",
  horsePower: 360,
  brand: "BMW",
};

// interface declaration is hoisted.
interface Car {
  brand: string;
}
```

Both of the interface declaration are merged into a single declaration. Personally I think of this feature as something that I will not use but something that I will watch out for, because if I didn't know that such behaviour exist I will assume that the Car interface will just be overwritten with the second interface declaration.

## Generics

Generics is a bit hard to explain, it is acts like a programmable `any` type. Imagine having to write a `console.log()` function by ourself, `console.log()` is an amazing function because it is consistent and have a very well-defined use case. it tries to print out given parameter as a string in the log. The amazing thing about it is how flexible it is, It obviously accept a string, number, boolean, and all other primitive data types but it also prints out data structures like object and array. This is a good scenario to use Generics, what it does is captures the property of the parameter. Here's an example:

```typescript
const randomStudent = {
  name: "Suki",
  age: 24,
};
// you can actually use another alphabet inside angle brackets, but it is the convention to use the alphabet T
const addHomeRoom = <T>(student: T) => {
  return { ...student, homeRoom: "Mr.Bernard" };
};
console.log(addHomeRoom(randomStudent));
```

In the code above, we use generics to capture the student object and add another property to the object. However right now that generics pretty much does `any` type does, if you provide a string as the parameter the function will take that string in and tries to add a key value pair to the string which makes no sense at all.

```typescript
const randomStudent = {
  name: "Suki",
  age: 24,
};
// This generics now only accept an object that have the provided properties
const addHomeRoom = <T extends { name: string; age: number }>(student: T) => {
  return { ...student, homeRoom: "Mr.Bernard" };
};
console.log(addHomeRoom(randomStudent)); //valid
console.log(addHomeRoom("Suki")); // will not compile
```

This is a very long post, I'll try to make it into a bite size post in the near future. Thank you for reading.
