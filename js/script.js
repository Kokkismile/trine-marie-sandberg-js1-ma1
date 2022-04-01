//Question 1
const cat = {
    complain: function logComplain() {
        console.log("Meow!");
    }
};

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
let paragraphs = document.querySelector("p");
for(pIndex = 0; pIndex < paragraphs.length; pIndex++) {
};

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];