// Creating animal class with cat and dog subclasses

class Animal {
  _name: string;
  _age: number;
  _owner: string[];
  _behaviorIssues = 0;
  constructor(name: string, age: number, owner: string[]) {
    this._name = name;
    this._age = age;
    this._owner = owner;
    this._behaviorIssues = 0;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get owner() {
    return this._owner;
  }

  addOwner(newOwner: string) {
    this._owner.push(newOwner);
  }

  get behaviorIssues() {
    return this._behaviorIssues;
  }

  incrementBehavior() {
    this._behaviorIssues++;
  }
}

// dog subclass
class Dog extends Animal {
  _breed: string;
  _walked: boolean;
  constructor(
    name: string,
    age: number,
    owner: string[],
    breed: string,
    walked: boolean
  ) {
    super(name, age, owner);
    this._breed = breed;
    this._walked = false;
  }

  get breed() {
    return this._breed;
  }

  get walked() {
    return this._walked;
  }

  wentOnWalk() {
    this._walked = true;
  }
}

// cat subclass
class Cat extends Animal {
  constructor(name: string, age: number, owner: string[]) {
    super(name, age, owner);
  }
}

// examples of print and edit instance values
// const dogAshWooden = new Dog("Ash Wooden", 2, ["Meg Woodin", "Hal Woodin"], "Unknown",)
// console.log(dogAshWoodin.name)
// dogAshWoodin.incrementBehavior()
// dogAshWoodin.addOwner("Emily Hanni")
