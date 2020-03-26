let calcDisplay, keyPress, calcInputDisplay, calcAdd, calcEqual, calcInput, calcInputSub, prevKeyArr;

prevKeyArr = [];

calcInput = document.querySelector('.calc-screen');

calcInputSub = document.querySelector('.calc-sub');

calcInput.textContent = 0;

calcInputDisplay = function(x) {
    
    if (calcInput.textContent === '0') {
        let keyInput = x;
        calcInput.textContent = keyInput;
        calcDisplay = calcInput.textContent;
        return calcDisplay;
    } else if (calcInput.textContent.length <= 9){
        let keyInput = x;
        calcInput.textContent += keyInput;
        calcDisplay = calcInput.textContent;
        return calcDisplay;
    }
};

calcAdd = function() {
    if (calcInputSub.textContent === '0') {
        calcInputSub.textContent = calcDisplay;
        calcInput.textContent = '0';
        
    } else {
        let addCalc = (+calcInputSub.textContent) + (+calcDisplay);
        calcInputSub.textContent = addCalc;
        calcInput.textContent= '0';
    }

    prevKeyArr.push('+');
    
}

calcEqual = function() {
    if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '+') {
        let addCalc = (+calcInputSub.textContent) + (+calcDisplay);
        calcInputSub.textContent = addCalc;
        let sub = calcInputSub.textContent
        calcInput.textContent = sub;
        calcInputSub.textContent = '0';

    }
}




// NUMBER KEY INPUT FUNCTIONS

document.getElementById('key-1').addEventListener('click', function() {
    calcInputDisplay(1);
});

document.getElementById('key-2').addEventListener('click', function() {
    calcInputDisplay(2);
});

document.getElementById('key-3').addEventListener('click', function() {
    calcInputDisplay(3);
});

document.getElementById('key-4').addEventListener('click', function() {
    calcInputDisplay(4);
});

document.getElementById('key-5').addEventListener('click', function() {
    calcInputDisplay(5);
});

document.getElementById('key-6').addEventListener('click', function() {
    calcInputDisplay(6);
});

document.getElementById('key-7').addEventListener('click', function() {
    calcInputDisplay(7);
});

document.getElementById('key-8').addEventListener('click', function() {
    calcInputDisplay(8);
});

document.getElementById('key-9').addEventListener('click', function() {
    calcInputDisplay(9);
});

// CALC KEY INPUT FUNCTION

document.getElementById('key-add').addEventListener('click', function() {
    calcAdd();
    console.log('btnpress')
});

document.getElementById('key-equal').addEventListener('click', function() {
    calcEqual();
});

