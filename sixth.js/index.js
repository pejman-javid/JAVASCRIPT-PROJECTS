class Person {
    constructor(name, age, id, nationality) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.nationality = nationality;
    }
}

class HumanList {
    constructor() {
        this.people = [];
    }

    addPerson(person) {
        this.people.push(person);
    }

    removePerson(person) {
        const index = this.people.indexOf(person);
        if (index !== -1) {
            this.people.splice(index, 1);
        }
    }

    editPerson(index, updatedPerson) {
        if (index >= 0 && index < this.people.length) {
            this.people[index] = updatedPerson;
        }
    }
}
const person1 = new Person("lora", 20, "15645", " USA");
const person2 = new Person("sozan", 55, "908730", "poland");

const HumanList = new PeopleList();
HumanList.addPerson(person1);
HumanList.addPerson(person2);

console.log(HumanList.people);

const updatedPerson = new Person("Updated lora", 31, "45267", "USA");
HumanList.editPerson(1, updatedPerson);

console.log(HumanList.people);
HumanList.removePerson(person2);
console.log(HumanList.people);
