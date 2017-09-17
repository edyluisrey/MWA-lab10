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

