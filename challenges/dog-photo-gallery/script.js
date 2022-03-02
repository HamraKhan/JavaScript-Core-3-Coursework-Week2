function makeApiCall() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((randomImgObj) => {
      const img = document.getElementById("dogs");
      img.src = randomImgObj.message;
      console.log(randomImgObj.message);
    })
    .catch((error) => {
      console.error(error);
    });

    const ulElement = document.getElementById("img-container");
    const img = document.getElementById("dogs");
    const liElement = document.createElement("li");
    liElement.classList.add("img-list");
    ulElement.appendChild(liElement);
    liElement.appendChild(img);
}

