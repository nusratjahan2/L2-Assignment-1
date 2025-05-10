
function formatString(input: string, toUpper?: boolean): string {
    if (typeof toUpper === "boolean") {
        return toUpper ? input.toUpperCase() : input.toLowerCase()
    }
    else {
        return input.toLowerCase();
    }

}

//Problem-2
// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[{
//     return rating >= 4 ? { rating } : null;
// }]

//function concatenateArrays<T>(...arrays: T[][]): T[]

function concatenateArrays<T>(...arrays: T[][]): T[] {


    return arrays.reduce((acc, curr) => acc.concat(curr), []);

};

console.log(concatenateArrays(["a", "b"], ["c"], ["d", "p"]));


class Vehicle {
    constructor(private make: string, private year: number) {

    }

    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }

    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo())  // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel()) // Output: "Model: Corolla"


function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }
    else if(typeof value === "number"){
        return value * 2;
    }
}

console.log(processValue("hello"));
console.log(processValue(10));

//Problem-6

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    return 
  }








