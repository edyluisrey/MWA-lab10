/*******************************
* Exercises 1
*******************************/
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
/*******************************
* Exercises 2
*******************************/
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(this.name + ' is saying: Toooooooooot!');
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
/*******************************
* Exercises 3
*******************************/
