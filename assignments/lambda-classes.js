// CODE here for your Lambda Classes

////////////////////////////Person////////////////////////////////////

class Person{
    constructor(attr){
        this.newName = attr.name;
        this.newLocation = attr.location;
        this.newAge = attr.age;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

////////////////////////////Instructor////////////////////////////////////

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.newSpecialty = attr.specialty;
        this.newFavLanguage = attr.favLanguage;
        this.newCatchPhrase = attr.catchPhrase;

    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

////////////////////////////Instructor////////////////////////////////////

class Student extends Instructor{
    constructor(attr){
        super(attr);
        this.newPreviousBackground = attr.previousBackground;
        this.newClassName = attr.className;
        this.newFavSubjects = attr.favSubjects;
    }

    listsSubjects(){
        return `${favSubjects}`;
    }

    pRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

////////////////////////////ProjectManagers////////////////////////////////////

class ProjectManagers extends Instructor{
    constructor(attr){
        super(attr);
        this.newGradClassName = attr.gradClassName;
        this.newFavInstructor = attr.favInstructor;
        

    }
    standUp(channel){
        return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject){
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
}

////////////////////////////Instructors Objs////////////////////////////////////

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`,
    specialty: 'Front-end' 
  });

  const barney  = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 40,
    favLanguage: 'CSS',
    catchPhrase: `Whats up Fred`,
    specialty: 'Back-end' 
  });

  ////////////////////////////PM Objs////////////////////////////////////

  const fry = new ProjectManagers({
    name: 'Fry',
    location: 'earth1999',
    age: 37,
    favLanguage: 'JavaScript',
    catchPhrase: `Forgot the homies`,
    specialty: 'Front-end',
    gradClassName: 'Web24',
    favInstructor: 'Fred'
  });

  const leela  = new ProjectManagers({
    name: 'Leela',
    location: 'earth3000',
    age: 40,
    favLanguage: 'CSS',
    catchPhrase: `Whats up!`,
    specialty: 'Back-end',
    gradClassName: 'Web24',
    favInstructor: 'Barney'
  });

  ////////////////////////////Student Objs////////////////////////////////////

  const spongeBob = new Student({
    name: 'Fred',
    location: 'BikkiniBottom',
    age: 37,
    favLanguage: 'HTML',
    catchPhrase: `Im ready!`,
    specialty: 'Front-end',
    gradClassName: 'Web24',
    favInstructor: 'Fred'
  });

  const patrick  = new Student({
    name: 'Barney',
    location: 'BikkiniBottom',
    age: 40,
    favLanguage: 'English',
    catchPhrase: `DUH`,
    specialty: 'Back-end',
    gradClassName: 'Web24',
    favInstructor: 'Barney'
  });


////////////////////////////Console.logs Instructors////////////////////////////////////

// console.log(fred.demo('Javascript'));
// console.log(barney.demo('CSS'));

// console.log(fred.grade('Patrick','english'));
// console.log(barney.grade('SponeBob','Html'));

////////////////////////////Console.logs ProjectManagers//////////////////////////////////

console.log(fry.standUp('@web24', patrick.name));
console.log(leela.standUp('@web23', spongeBob.name));

console.log(fry.debugsCode(patrick.name,'english'));
console.log(leela.debugsCode(spongeBob.name,'Html'));


////////////////////////////Console.logs Students///////////////////////////////////////

console.log(fry.listsSubjects('Javascript'));
console.log(leela.listsSubjects('CSS'));

console.log(fry.pRAssignment('Patrick','english'));
console.log(leela.pRAssignment('SponeBob','Html'));

console.log(fry.pRAssignment('Patrick','english'));
console.log(leela.pRAssignment('SponeBob','Html'));