const container = document.getElementById("container");

const p = document.createElement("p");
p.textContent = "Hey I'm red";
p.style.color = "red";
container.append(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.append(h3);

const div = document.createElement("div");
div.style.border = "solid black";
div.style.background = "pink";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
div.append(h1);
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.append(p2);
container.append(div);
