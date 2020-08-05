function bubbleSortingAlgorithm(array) {
	let swapped = false;
	while (!swapped) {
		swapped = true;
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				let helpValue = array[i];
				array[i] = array[i + 1];
				array[i + 1] = helpValue;
				swapped = false;
			}
		}
	}
	return array;
}
//import keyword: ths static import statemtn is used to import read only live bindings which are exported by another module. Imported modules are in strict mode whether you declare them as scuh or not. The import statement cannot be used in embeddded scripts unless such script has a type="module". Bindings imported are called live bidings bacause they rae updated by the module that exported the binding.
//export:

let arr = [
	['Anud', 'Bob'],
	['Bob', 'Me'],
	['Bob', 'Peggy'],
	['Me', 'Alice'],
	['Me', 'Klar'],
	['Klar', 'Jonny'],
	['Tom', 'Klar'],
];


let target = 'Tom';
let startingValue = 'Me';



function breadthFirstSearch(arr, target, startingValue) {
	let objSet = new Object();
	for (j = 0; j < arr.length; j++) {
		//move through each element of the array:
		//now we move through each element of the array:\

		for (let i = 0; i < arr[j].length; i++) {
			if (i === 0) {
				if (!(arr[j][i] in objSet)) {
					// console.log(arr[j][i]);
					objSet[arr[j][i]] = arr[j][i + 1];
				} else if (arr[j][i] in objSet) {
					objSet[arr[j][i]] += ' ' + arr[j][i + 1];
				}
			} else if (i === 1) {
				if (!(arr[j][i] in objSet)) {
					// console.log(arr[j][i]);
					objSet[arr[j][i]] = arr[j][i - 1];
				}
				else if (arr[j][i] in objSet) {
					objSet[arr[j][i]] += ' ' + arr[j][i - 1];
				}
			}
		}
	}
	let values = Object.getOwnPropertyNames(objSet);//values
	//now we test if that value exists:
	if (values.includes(target)) {
		if (target == startingValue) {
			// console.log('Found, target is starting value');
		} else {
			let queue = [];//add a queue
			queue.push(startingValue);//pushing value
			let visited = [];
			while (queue.length > 0) {
				let currentNode = queue[0];
				console.log("Current node: " + currentNode);
				if (currentNode == target) {
					console.log('Found it: ' + currentNode + '!');
					break;
				} else {
					let val = objSet[currentNode].split(/\s/);
					queue = queue.concat(val);
					queue.shift();

				}
				console.log(queue);
			}
		}
	}
}
function app1() {
	// //vue.js
	// var app = new Vue({
	// 	el: '#app',
	// 	data: {
	// 		message: 'Hello Vue'
	// 	}
	// });
	//classes:
	class Animal {
		constructor(name) {
			this.speed = 0;
			this.name = name;
		}
		run(speed = 15) {
			this.speed = speed;
			console.log(`${this.name} runs with a speed of ${this.speed}`);
		}
		stop() {
			this.speed = 0;
			alert(`${this.name} stands still`);
		}
	}
	let animal = new Animal('My pet');
	console.log(Animal.prototype)
	class Rabbit {
		constructor(name) {
			this.name = name;
		}
		hide() {
			alert(`${this.name} hides from you!`);
		}
	}

	let rabbit = new Rabbit('My favorite one');
	//But what we want is rabbits must come from animals, meaning to have access to the animal's methods and and its own functionality besides the methods that are available Animal:
	//and to do so we can :
	class RabbitInheritedFromAnimal extends Animal {
		hide() {
			alert(`${this.name} is hiding!`);
		}
	}
	let realRabbit = new RabbitInheritedFromAnimal('White rabbit');
	realRabbit.run(5);
	class Rabbit3 extends Animal { }
	console.log(Rabbit3.prototype)//Animal
	console.log(Rabbit3.constructor);
}
class Animal {
	constructor(name) {
		this.name = name;
		this.speed = 0;
	}
	run(speed) {
		this.speed = speed;
		console.log("I'm running.");
	}
	stop() {
		this.speed = 0;
		console.log(
			"I've just stopped"
		);
	}
}
class Rabbit extends Animal {
	hide() {
		console.log("I'm hiding!");
	}
	stop() {
		// console.log(super.stop());
		super.stop();
	}
}
let rabbit = new Rabbit("White rabbit");
rabbit.run(15);//I'm running that means that all methods that animal has the rabbit had inherited
rabbit.stop();
// Animal.prototype.constructor = Object;
console.log(Animal.prototype.constructor);//Animal
//NOw let's observe what type a super is:
let animal = new Animal('Any pet you want to tame');
console.log(animal);





class Fish {
	constructor(habitat, length) {
		this.habitat = habitat;
		this.lenght = length;
	}
}
class Trout extends Fish {
	constructor(habitat, length, variety) {
		super(habitat, length);
		this.variety = variety;
	}
}
class Person {
	constructor(firstName, lastName, height, width, weight, work) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.height = height;
		this.width = width;
		this.weight = weight;
		this.work = work;
	}
	get job() {

	}
}
class Article {
	constructor(title, date) {
		this.title = title;
		this.date = date;
	}

	static compare(articleA, articleB) {
		return articleA - articleB;
	}
}
let articles = [
	new Article("HTML", new Date(2019, 1, 1)),
	new Article("CSS", new Date(2019, 0, 1)),
	new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare);
class Article2 extends Article {
	constructor(title, date) {
		super(title, date);
	}
	static createTodays(name) {
		return new this(name = `Today's digest`, new Date());
	}
}
let article = Article2.createTodays('Weekend');
// alert(article.title);
class Begger extends Object {
	constructor(name) {
		super(name);
		this.name = name;
	}

}
let rab = new Begger('Rab');
console.log(Begger.prototype.__proto__)
console.log(rab.hasOwnProperty('name'));

class CoffeeMachine {
	waterAmount = 0;
	costructor(power) {
		this.power = power;
		console.log('The coffee machine was created, with capacity: ' + power)
	}
}
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;
class Petrol {
	#petrolLimit = 10000;
	#checklimit(value) {
		if (value < 0) throw new Error('Invalid quantity!');
		if (value > this.#petrolLimit) throw new Error('We have not enough petrol!')
	}
}
const petrolStation = new Petrol();
// petrolStation.#checklimit(200);//Error
// petrolStation.#waterLimit = 100;
class RealArray extends Array {
	constructor(value) {
		this._value = value;
	}
	isArray() {
		return Array.isArray.call(this._value);
	}
}
console.log(Object.prototype.toString.call(123));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(alert));
console.log(Object.prototype.toString.call({}));

let sayHiMixin = {
	sayHi() {
		alert(`Привет, ${this.name}`);
	},
	sayBye() {
		alert(`Пока, ${this.name}`);
	}
};

// использование:
class User {
	constructor(name) {
		this.name = name;
	}
}
Object.assign(User.prototype, sayHiMixin);
