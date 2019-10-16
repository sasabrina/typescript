console.log('hello world from typescript');
//TYPES
//se declara el tipo de valor que va a almacenar la variable, y ésta la va a interpretar de maneta estricta.
var myString = 'oli';
myString = 22 + ""; //las comillas "transforman" el number a string (hashtag spanglish)
var myNumber = 33;
var myBool = true;
//"any" indica que la variable puede almacenar todo tipo de datos
var myVar = 'oli de nuevo';
myVar = false;
//ARRAYS
//de la misma manera que con las variables, se asigna qué tipo de valor va a contener el arreglo, colocando tipo + corchetes.
var stringArray = ["uno", "dos", "tres"];
// stringArray = [true, 2, 3]; esto da error pues la variable es de tipo string
var numberArray = [4, 5, 6];
var anyArray = [11, "oli", true, [], {}];
//TUPLE
//indica qué tipo de dato va a ser cada ítem del arreglo
var strNumbTuple;
strNumbTuple = ["oli", 3];
// strNumbTuple = [3, "oli"] esto da error porque los tipos de datos no coinciden con la estructura del arreglo
// strNumbTuple = [oli, 3, "", 5] esto no da error porque solo leen los dos primeros ítems, y los otros dos coinciden con la estructura del arreglo
//VOID, UNDEFINED, NULL
var myVoid = undefined;
var myNull = null; //o undefined
var myUndefined = undefined;
// FUNCIONES
//se indica qué tipo dato serás los parámetro y qué tipo de dato retornará la función
var getSum = function (num1, num2) { return num1 + num2; };
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//el signo de interrogación indica que el parametro es opcional, por lo tanto no da error si al invocar la función se le pasa un solo parámetro
var getName = function (firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
};
// console.log(getName("Sabrina", "Alvarez"))
// console.log(getName("Sabrina"))
// const voidFnc = (): void => "algo"; esto da error porque al declarar la función como void, estamos indicando que ésta no va a retornar nada, y la arrow function es un return implícito
// INTERFACES
// se indica que el parámetro que recibe la función es un objeto y qué tipo de dato es cada una de sus propiedades
var showTodo = function (todo) { return console.log(todo.title + " " + todo.text); };
showTodo({
    title: "Comprar",
    text: "dolares, ahre."
});
// y se indica que el tipo de dato del parámetro será una interface
var anotherTodo = function (todo) { return console.log(todo.title + " " + todo.text); };
// creo una variable con la estructura de la interface, indicando que el tipo de valor será la interface (Itodo) y luego la paso como parámetro en la función anotherTodo
var myTodo = { title: "Turno:", text: "sacar turno con el odontólogo" };
anotherTodo(myTodo);
// CLASES
// además de indicar qué tipo de dato tendrá una propiedad, también puedo declarar qué tipo de ALCANCE puede tener con los "modificadores" (public (default), private y protected)
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered.");
    };
    User.prototype.showAge = function () {
        return this.age;
    };
    return User;
}());
var sabrina = new User("Sabrina", "jacky@sieras.com", 32);
console.log(sabrina.email);
console.log(sabrina.register());
