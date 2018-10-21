function init(){
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

// start point - image
var curElement = 0 ;


function changeBigPicture(eventObj){
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("_");

    let temp = parseInt(imageNameParts[1]);
    curElement = temp;
    console.log("curElement " + curElement);

    var src = "./img/big/" + imageNameParts[1] + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.onload = function(){
        appDiv.appendChild(imageDomElement);
    };
    imageDomElement.onerror = function(){
        alert('Файл ' + src + ' не существует')
    };
}

// ToDo
function nextStep(){
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var images = document.getElementsByTagName("img");
    var imageDomElement = document.createElement("img");


    // define current image
    var curIndex = curElement;


    // 2 get the list of files
    var fileList = [];
    for(let i = 0; i < images.length; i++) {
        fileList.push(parseInt(images[i].id.split("_")[1]));
    }
    
    // define next image
    var newIndex = curIndex + 1; 
    if(newIndex > fileList.length) {
        newIndex = 1;
    }
    console.log(newIndex);
    var src = "./img/big/" + newIndex + ".jpg";
    console.log(fileList);
    
    // show new image
    imageDomElement.src = src;
    imageDomElement.onload = function(){
        appDiv.appendChild(imageDomElement);
    };
    imageDomElement.onerror = function(){
        alert('Файл ' + src + ' не существует')
    };

    curElement = newIndex;
}


function prevStep(){
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var images = document.getElementsByTagName("img");
    var imageDomElement = document.createElement("img");


    // define current image
    var curIndex = curElement;


    // 2 get the list of files
    var fileList = [];
    for(let i = 0; i < images.length; i++) {
        fileList.push(parseInt(images[i].id.split("_")[1]));
    }
    
    // define next image
    var newIndex = curIndex - 1; 
    if(newIndex > fileList.length || newIndex < 1) {
        newIndex = fileList.length;
    }
    console.log(newIndex);
    var src = "./img/big/" + newIndex + ".jpg";
    console.log(fileList);
    
    // show new image
    imageDomElement.src = src;
    imageDomElement.onload = function(){
        appDiv.appendChild(imageDomElement);
    };
    imageDomElement.onerror = function(){
        alert('Файл ' + src + ' не существует')
    };

    curElement = newIndex;
}




b1.addEventListener('click', prevStep);
b2.addEventListener('click', nextStep);            


window.onload = init;