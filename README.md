1. What are some differences between interfaces and types in TypeScript?
 Ans:- Usage of "interface" and type are similar, though we use them as per our convenience.
Syntax of type:
type PersonalInfo = {
name: string;
age: number;
address: string;
};

Syntax of interface:
interface PersonalInfo {
name: string;
age: number;
address: string;
};

There is a difference of equal sign; In type we use equal(=) sign on the other hand, there is no need to use equal sign in interface.
Interface can be extended. Type also can extended but with intersection(&) property.

2.Provide an example of using union and intersection types in TypeScript.
Ans:-  Example of Union type:
 type Car = {
 name: string;
 model: string | number;
 }

 const car1: Car = {
 name: "Range Rover",
 model: "2022",
 }
 In the above example, car model can be string or number.

 Example of Intersection:
 type PersonalInfo = {
  name: string;
  age: number;
  address: string;
};

type Account = {
  accountId: number;
  balance: number;
};

type AllInfo = PersonalInfo & Account;

const allInfo: AllInfo = {
  name: "Nusrat",
   accountId: 123;
};

Here we add two different types together using "interface" and, commonly used in a single type "AllInfo".

