// 1. Create an empty object called dog
let dog = {};

// 2. Print the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age, and bark properties to the dog object
dog.name = "Fido";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};

// 4. Get name, legs, color, age, and bark value from the dog object
console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

// 5. Set new properties for the dog object: breed, getDogInfo
dog.breed = "Poodle";
dog.getDogInfo = function () {
  return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}, Legs: ${this.legs}`;
};

console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 6 - Find the person who has many skills in the users object.

let mostSkilledPerson = null;
let maxSkills = 0;

for (const username in users) {
  if (users.hasOwnProperty(username)) {
    const user = users[username];
    if (user.skills.length > maxSkills) {
      maxSkills = user.skills.length;
      mostSkilledPerson = username;
    }
  }
}

console.log("The person with the most skills is:", mostSkilledPerson);

// 7 - Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInCount = 0;
let highPointsCount = 0;

for (const username in users) {
  if (users.hasOwnProperty(username)) {
    const user = users[username];
    if (user.isLoggedIn) {
      loggedInCount++;
    }
    if (user.points >= 50) {
      highPointsCount++;
    }
  }
}

console.log("Number of logged-in users:", loggedInCount);
console.log("Number of users with 50 or more points:", highPointsCount);

// 8 - Get all keys or properties of users object

const keys = Object.keys(users);
console.log("Keys or properties of the users object:", keys);

// 9 - Get all the values of users object

const values = Object.values(users);
console.log("Values of the users object:", values);

const users1 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 10a. Create a function called signUp
function signUp(newUser) {
  const existingUser = users1.find((user) => user.email === newUser.email);
  if (existingUser) {
    return "User already has an account.";
  }
  users1.push(newUser);
  return "User has been added to the collection.";
}

// 10b. Create a function called signIn
function signIn(email, password) {
  const user = users1.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    user.isLoggedIn = true;
    return "Sign in successful.";
  }
  return "Invalid email or password.";
}

// 11a. Create a function called rateProduct
function rateProduct(productId, userId, rate) {
  const product = products.find((product) => product._id === productId);
  if (product) {
    product.ratings.push({ userId, rate });
  }
}

// 11b. Create a function called averageRating
function averageRating(productId) {
  const product = products.find((product) => product._id === productId);
  if (product && product.ratings.length > 0) {
    const totalRating = product.ratings.reduce(
      (sum, rating) => sum + rating.rate,
      0
    );
    return totalRating / product.ratings.length;
  }
  return 0; // Return 0 if there are no ratings.
}

// 12. Create a function called likeProduct
function likeProduct(productId, userId) {
  const product = products.find((product) => product._id === productId);
  if (product) {
    const likedIndex = product.likes.indexOf(userId);
    if (likedIndex === -1) {
      product.likes.push(userId);
    } else {
      product.likes.splice(likedIndex, 1);
    }
  }
}

// // Example usage:
// console.log(
//   signUp({
//     _id: "newuser1",
//     username: "NewUser",
//     email: "newuser@newuser.com",
//     password: "password123",
//     createdAt: "08/01/2020 10:30 AM",
//     isLoggedIn: false,
//   })
// );

// console.log(signIn("newuser@newuser.com", "password123"));

// rateProduct("eedfcf", "newuser1", 4);
// console.log(averageRating("eedfcf"));

// likeProduct("eedfcf", "newuser1");
