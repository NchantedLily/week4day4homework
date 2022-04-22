let dog = {
    name : "Spot" ,
    numLegs: 4
    sayLegs: function() {return "This dog has "
    + dog.numLegs + " legs.";}
    };


dog.sayLegs();


function Dog() {
    this.name = "Albert";
    this.color = "gold";
    this.numLegs = 4;
}

let hound = new Dog();
 
function Dog(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;


}

 function House(numBedrooms) {
     this.numBedrooms = numBedrooms;

 }

 let myHouse = new House(2);
 myHouse instanceof House;


 function Bird(name) {
     this.name = name;
     this.numLegs = 2;
 }

 let canary = new Bird("Tweety")
 let ownProps = [];

 for(let property in canary){
     if(canary.hasOwnProperty(property)){
         ownProps.push(property);
     }
 }

 function Dog(name) {
     this.name;
 }

 Dog.prototype.numLegs = 4;

 let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps[];

for (let property in beagle) {
    if(beagle.hasOwnProperty(property)){
        ownProps.push
    }
}
 
function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    return candidate.constructor === Dog;
}


function Dog(name) {
    this.name = name;

}
    Dog.prototype = {
        numLegs: 4,
        eat: function() {
            console.log("nom nom nom");

        },
        describe: function ( {
            console
        })
    }


    function Dog(name) {
        this.name = name;
    }
    let beagle = new Dog("Snoopy");

    Dog.prototype.isPrototypeOf(beagle);


    Object.prototype.isPrototypeOf


    function Cat(name) {
        this.name = name;

    }
    Cat.prototype = {
        constructor: Cat,
        eat: function() {
            console.log("nom nom nom");
            
        }
    }
    Bear.prototype = {
        constructor: Bear,
        eat: function() {
            console.log("nom nom nom");

        }
    }

    function Animal() { }

    Animal.prototype = {
        constructor: Animal,
        eat: function() {
            console.log("nom nom nom")
        }
    }
 function Dog() { }
 Dog.prototype = Object.create(Animal.protype);

 let duck = new Bird();
 let beagle = new Dog();


 Bird

 let beagle = new Dog();

 function Animal() { }
 Animal.prototype.eat = fuction() {  console.log
("nom nom nom"); 
}

Dog.prototype = Object.create


function Bird() {  }

Bird.prototype.fly = function() { return "I am flying!";
};
function Penguin() {  }
Penguin.prototype.constructor = Penguin


let bird = {
    name: "Donald" ,
    numLegs: 2
};
let boat = {
    name: "Warrior" ,
    type: "race-boat"
};

let glideMixin = function()


function Bird() {
    this.weight = 15;


}
 function Bird() {
     let weight = 15;

 }
function makeNest() {
    console.log("A cozy nest is ready");

}

makeNest();

let isCuteMixin = function(obj) {
    obj.isCute = function()  {
         return true;
    };
};


let funModule = (function ()) {
    return{
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        };
         singMixin = function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            }
        }
    }
}();

