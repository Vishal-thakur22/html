let info ={
    name: "vishal thakur",
    age:23,
    marks:32,
    books: ["hc verma","rd sharma", "honeycomb"],
    hobbies:{       //this is nested objects as therre 
        reading:"books",
        playing:"volleyball",
    }
};

// console.log(info["age"]);
// console.log(info.age);
// console.log(info.books[1]);

// // info.marks=23; // if marks was not present in the object then it will add the new key in the info.or if present then will change the value of the key.

// delete (info.marks);
// delete info.age;   to delete the key from the object.

delete info.name;
console.log(info);




