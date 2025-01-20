const h1Element = document.createElement('h1');
h1Element.textContent = "Dit is mijn titel";

const pElement = document.createElement('p');
pElement.textContent = "en dit is mijn paragraaf";

const imgElement = document.createElement('img');
imgElement.src = "https://picsum.photos/id/0/300/200";

document.body.appendChild(h1Element);
document.body.appendChild(pElement);
document.body.appendChild(imgElement);
