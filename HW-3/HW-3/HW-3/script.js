let button = document.querySelector("button");
button.onclick = function () {
    let name = prompt("Enter your name:");
    if (name != null) {
        document.querySelector("h1").innerHTML = "Welcome " + name + '!';
    }
}
let imgjs = document.querySelector('img');
imgjs.onclick = () => {
    if (document.querySelector('img').getAttribute('src') === 'https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png') {
        document.querySelector('img').setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/KAIST_logo.svg/1024px-KAIST_logo.svg.png');
    } else {
        document.querySelector('img').setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/0/07/Ala-Too_International_University_Seal.png');
    }
}