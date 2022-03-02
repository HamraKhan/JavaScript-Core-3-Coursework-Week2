function apiCall() {
    fetch("https://xkcd.now.sh/?comic=latest")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const img = document.createElement('img');
            img.src = data.img;
            const getDivId = document.getElementById('img-container');
            getDivId.appendChild(img);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

apiCall();