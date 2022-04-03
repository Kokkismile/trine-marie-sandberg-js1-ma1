//Question 1
const cat = {
    complain: console.log("Meow!")
};

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");
for(pIndex = 0; pIndex < paragraphs.length; pIndex++) {
    paragraphs[pIndex].style.color = "red";
};

//Question 6
const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = `<p>New paragraph</p>`;
resultContainer.style.backgroundColor = "yellow";

//Question 7
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

function catNames(list) {
    for(catIndex = 0; catIndex < list.length; catIndex++) {
        let catName = list[catIndex].name;
        console.log(catName);
    } 
};

catNames(cats);

//Question 8
const catContainer = document.querySelector(".cat-container");
let createHtml = "";

function createCats(cats) {
    for(i = 0; i < cats.length; i++) {
        if(typeof(cats[i].age) === "undefined") {
            console.log(cats[i].age = "Age unknown");
        };

        createHtml += `<div>
                           <h5>${cats[i].name}</h5>
                           <p>${cats[i].age}</p>
                        </div>`;
    };

    return createHtml;
};

createCats(cats);

catContainer.innerHTML = createHtml;