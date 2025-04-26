const myVariable = "Hello, World!";

// getElementsByTagName retorna uma coleção, precisamos pegar o primeiro elemento
const tag = document.getElementsByTagName("h1")[0];

const functionName = () => {
  tag.innerHTML = myVariable;
}