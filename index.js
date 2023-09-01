function chat() {
    alert("Hello, there I am Mel the chatbot!👋 how can I help you?😀");

// ask user their name
let yourName = prompt("What is your name?");
alert("hello," + yourName);

let status = prompt("Are you single?");
if (status == "yes"){
    alert("Being single is awesome!");
}
if (status == "no"){
    alert("🥰🥰🥰");
}

let food = prompt("what is your favorite food?");
alert("I like" + food + "too!"); 
}