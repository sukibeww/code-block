---
title: "My personal notes on Typescript"
date: "2020-06-03"
---

![typescript-banner](https://www.tsmean.com/assets/img/typescript-vs-javascript.svg)

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

## Resources

These are some of TypeScript related resources that I have stumbled into:

- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/home.html)
- [TypeScript vs JavaScript - Ben Awad](https://www.youtube.com/watch?v=D6or2gdrHRE)
- [Why TypeScript is Actually Good - Ben Awad](https://www.youtube.com/watch?v=Ptrhz2zW--o)
- [NetNinja Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)
- [The object Type in TypeScript by Marius Schulz](https://mariusschulz.com/blog/the-object-type-in-typescript#:~:text=The%20Object%20Type,common%20to%20all%20JavaScript%20objects.)
- [Types vs Interface](https://github.com/peerigon/eslint-config-peerigon/issues/64)

## Type Inference

In TypeScript, all of variable that aren't explicitly typed will be inffered a type, kinda how it works in JavaScript with a bit of twist.

```typescript
const x = 10 //Inferred into "number" type.
const y = "Heyaa" //inferred into "String" type.
const z = null //inferred into "null" type.
const arrString = ["Heyaa", "Hii", "Hello"] //inferred into (string)[]
const student = {
  name: "Suki",
  age: 24,
  homeroom: "Mr. Guten Tag",
}
// inferred to {name: (string), age: (number), homeroom: (string)}
```

Once a variable type is explicitly typed or inferred that variable can only contain that specific type.

```typescript
let x = 10 //inferred into "number" type.
x = "Heyaa" //will not compile.
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
const randomArray = [10, "Heyaa", null, true] //inferred into (String|number|null|boolean)[]
const randomArray2: (string | number | null | boolean)[] = [
  1,
  "Hii",
  null,
  false,
  10,
  true,
  "Heyaa",
] //Explicitly typed.
```

Union Type use case is not restricted to only arrays, simple variable can also be explicitly type using Union Typing making them a bit more dynamic and able to contain different data types based on the given types.

Simple Variable example:

```typescript
let x: string | number
x = 10
console.log(x) //10
x = "Heyaa"
console.log(x) //Heyaa
// variable x is assignable with both string and number type data.
```

## Dynamic Type - any

`any` is a dynamic type that basically eliminate all of the "statically typed aspect" of TypeScript, it is a bit of a double-edge sword. I like to think of it as a temporary solution if there is a situation where I don't know what a function does and change it to its actual type once I understand it. Using `any` kinda removes all of the benefit of using TypeScript, because it will lose all of TypeScript's type secureness and rollsback into its predecessor JavaScript.

```typescript
let x: any
x = 10
x = "Heyaa"
x = null
x = [1, 2, 3]
// none of this will throw an error message just like how JavaScript will behave.
```

## Functions

Function in TypeScript is a bit more powerful compared to what it was in JavaScript, developer can be much more precise on the type of parameters that the function receives and the type of its return value.

```typescript
// parameters and return type is explicitly typed
const sum = (a: number, b: number): number => {
  return a + b
}

// parameters that are not explicitly typed will be inferred to `any` type
const sum = (a, b): number => {
  return a + b
}

const sum = (a: number, b: number) => {
  return a + b //return type is inferred to `number` type
}

// union type also can be used
const randomFunc = (foo: number, bar: string | number): number | string => {
  if (typeof bar === string) {
    return bar
  } else {
    return bar
  }
}
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
  console.log("woop woop")
}
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
