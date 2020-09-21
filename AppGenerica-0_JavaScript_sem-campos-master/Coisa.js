class Coisa {
    publicField = 'publico';
    #privateField = 'privado';
}
var a = new Coisa;
console.log(a.publicField); // deu publico
console.log(a.privateField); // deu undefined