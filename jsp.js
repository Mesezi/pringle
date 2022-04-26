let green = document.getElementById('green');
let purple = document.getElementById('purple');
let yellow = document.getElementById('yellow');
let red = document.getElementById('red');
let orange = document.getElementById('orange');
let h1 = document.querySelector('h1');
let product = document.getElementById('product');
let navhover =document.querySelectorAll('a');
let big = document.getElementById('bigimg');
let body = document.body;
let time = 900;


green.onclick = function change(){
    big.style.animation = 'fadeInRight 1s ease-in-out'; 
    for (var i = 1; i < navhover.length; i++){
        navhover[i].style.backgroundImage = 'linear-gradient(to  right, white, #255221)';
    }
    big.src = "./dgreen.png";
    body.style.backgroundImage = "linear-gradient(to  right, #000000, #255221)";
    h1.innerHTML = 'JALA PENO';
    product.style.color = '#255221';
setTimeout(function ani (){
    big.style.animation = '';  
},time);
}


purple.onclick = function change(){
    big.style.animation = 'fadeInRight 1s ease-in-out'; 
    for (var i = 1; i < navhover.length; i++){
        navhover[i].style.backgroundImage = 'linear-gradient(to  right, white, #430022)';
    }
    big.src = "./purpl.png";
    body.style.backgroundImage = "linear-gradient(to  right, #430022, #000000)";
    h1.innerHTML = 'BBQ  FLAVOUR';
    product.style.color = '#430022';
    setTimeout(function ani (){
        big.style.animation = '';  
    },time);
}


yellow.onclick = function change(){
    big.style.animation = 'fadeInRight 1s ease-in-out'; 
    for (var i = 1; i < navhover.length; i++){
        navhover[i].style.backgroundImage = 'linear-gradient(to  right, white, #d9bc4c)';
    }
    big.src = "./yellow.png";
    body.style.backgroundImage = "linear-gradient(to  right, #000000, #d9bc4c)";
    h1.innerHTML = 'TORTILLAS'
    product.style.color = '#d9bc4c';
    setTimeout(function ani (){
        big.style.animation = '';  
    },time);
}

red.onclick = function change(){
    big.style.animation = 'fadeInRight 1s ease-in-out'; 
    for (var i = 1; i < navhover.length; i++){
        navhover[i].style.backgroundImage = 'linear-gradient(to  right, white, firebrick)';
    }
    big.src = "./red.png";
    body.style.backgroundImage = "linear-gradient(to  right, #000000, #cce7f9)";
    h1.innerHTML = 'LIGHTLY SALTED';
    product.style.color = 'black';
    setTimeout(function ani (){
        big.style.animation = '';  
    },time);
}


orange.onclick = function change(){
    big.style.animation = 'fadeInRight 1s ease-in-out'; 
    for (var i = 1; i < navhover.length; i++){
        navhover[i].style.backgroundImage = 'linear-gradient(to  right, white, #f77d3e)';
    }
    big.src = "./orange.png";
    body.style.backgroundImage = "linear-gradient(to  right, #f77d3e , #000000)";
    h1.innerHTML = 'PAPRIKA';
    product.style.color = '#f77d3e';
    setTimeout(function ani (){
        big.style.animation = '';  
    },time);
}
