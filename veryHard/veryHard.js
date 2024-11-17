//creating the person constructor
function person(name, job, age){
    this.name = name;
    this.job = job;
    this.age = age;
}
//giving person exercise method
person.prototype.exercise = function(){
    console.log("Playing basketball is fun")
};

//giving persona fetch job method
person.prototype.fetchJob = function(){
    console.log(`${this.name} is a ${this.job}`);
};

//programmer constructor function inheriting from person
function programmer(name, job, age, langauges){
    //calling on the person constructor to initialize proerties
    person.call(this, name, job, age);

    //programmer specific property
    this.languages = langauges;
    this.busy = true; 
}

//inherits from person property
programmer.prototype = Object.create(person.prototype);
programmer.prototype.constructor = programmer;


//adding methods to programmer prototype
programmer.prototype.completeTask = function(){
    this.busy = false;
};

programmer.acceptNewTask = function(){
    this.busy = true;
};

programmer.prototype.offerNewTask = function(){
    if(this.busy){
        console.log(`${this.name} can't accept any new task right now.`);
    } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
    }
};

programmer.prototype.learnLanguages = function(newLanguage){
    this.languages.push(newLanguage);
}

programmer.prototype.listLangauges = function(){
    return this.languages.join(', ');
};

//testing code

const person1 = new person("Harold","Backend Engineer", 20);

const c1 = new programmer("liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new programmer("Manny", "SysOps", 35, ["HTML", "Css", "JS", "R"]);

//learn new langauges
c1.learnLanguages("CSS");
c2.learnLanguages("C++");
c3.learnLanguages("JAVA");


//list languages each programmer knows
console.log(c1.listLangauges());
console.log(c2.listLangauges());
console.log(c3.listLangauges());

//log details of objects
console.log(person1);
console.log(c1)
console.log(c2)
console.log(c3)

//call methods
person1.exercise();
person1.fetchJob();

c1.offerNewTask();
c2.offerNewTask();
c3.offerNewTask();

c1.completeTask();
c1.offerNewTask();


