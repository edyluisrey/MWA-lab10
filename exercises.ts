/*******************************
* Exercises 1
*******************************/
let bankAccount:{money:number, deposit:(value: number)=>void} ={
    money: 2000,
    deposit:function(value:number):void{
        this.money+=value;
    }
};

let myself:{name:string,bankAccount, hobbies:[string]}={
    name:"Asaad",
    bankAccount:bankAccount,
    hobbies:["violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

/*******************************
* Exercises 2
*******************************/
class Car{
	acceleration:number=0;
    constructor(public name:string){}
    honk(){
        console.log(this.name+' is saying: Toooooooooot!');
    };
    accelerate(speed:number){
        this.acceleration = this.acceleration+speed;
    }

}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);

/*******************************
* Exercises 3
*******************************/

class BaseObject{ 
    constructor(public width:number, public length:number){
    }   
}

class Rectangle extends BaseObject{    
    calcSize(){
        return this.width* this.length;
    }
}

let rectangle = new Rectangle(5,2);
console.log(rectangle.calcSize());

/*******************************
* Exercises 4
*******************************/
class Person{
   private _firstName: string;    
   
   get firstName(){
        return this._firstName;
   }

   set firstName(value: string){
        this._firstName = value;
   }
}

let person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);








