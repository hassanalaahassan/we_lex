// let counter = 0; 
// const paragraph = document.getElementsByClassName("container")[0];
// paragraph.textContent = counter; 


// function count(){
//       counter++; // counter = counter + 1 
//       paragraph.textContent = counter; 
// }

// function reset(){
//    counter = 0;
//    paragraph.textContent = counter; 
// }

// let myParagraph = document.createElement("p");

// myParagraph.textContent = "text From Js";

// let counter = document.getElementById("counter");

// myContainer.insertBefore(myParagraph,counter);


let myContainer = document.getElementById("container");

document.body.outerHTML = 
                        `
                              <button>reset</button>
                              <p>text From JS</p>
                              <button>counter</button>
                        `

