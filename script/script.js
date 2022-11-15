// function greet (person_name){


// console.log("Hello " + person_name);


// }

// let greet = function (person_name)
// {

//     console.log("Hello " + person_name);

// }


// let greet = (person_name) =>
// {

//     console.log("Hello " + person_name);



// }

// function greet (person_name,time = "day"){


// return("Good "+ time  + person_name);


// }

// const result = greet("Neda","Night");
// console.log(result)


const unorderedListElement = document.querySelector(".shopping")
function populateList(list)
{
for (let i = 0; i < list.length; i++ )
{

    console.log(list[i]);
    const listItemElement = document.createElement("li")
    listItemElement.textContent = list[i];
    unorderedListElement.appendChild(listItemElement);

}


}

let shoppingList = ["cheese","bread","ham"]

populateList(shoppingList);
