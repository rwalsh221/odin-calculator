let keyPress, calcInputDisplay, calcAdd, calcSub, calcMultiply, calcDiv, calcEqual, calcClear, calcInput, calcInputSub, prevKeyArr;

prevKeyArr = [];

calcInput = document.querySelector('.calc-screen');

calcInputSub = document.querySelector('.calc-sub');

// calcInput.textContent = 0;

calcInputDisplay = function(x) {
    
    if (calcInput.textContent === '0') {
        let keyInput = x;
        calcInput.textContent = keyInput;
    
    } else if (calcInput.textContent.length <= 9){
        let keyInput = x;
        calcInput.textContent += keyInput;
        
    }
};

calcAdd = function() {
    if (calcInputSub.textContent === '0') {
        calcInputSub.textContent = calcInput.textContent;
        calcInput.textContent = '0';
      
        
    } else if (calcInput.textContent != '0') {
        let addCalc = (+calcInputSub.textContent) + (+calcInput.textContent);
        calcInputSub.textContent = addCalc;
        calcInput.textContent= '0';
        calcDisplay = '0';
    }

    prevKeyArr.push('+');
    
}

calcSub = function() {
    if (calcInputSub.textContent === '0') {
        calcInputSub.textContent = calcInput.textContent;
        calcInput.textContent = '0';
      
        
    } else if (calcInput.textContent != '0') {
        let subCalc = (+calcInputSub.textContent) - (+calcInput.textContent);
        calcInputSub.textContent = subCalc;
        calcInput.textContent= '0';
        calcDisplay = '0';
    }

    prevKeyArr.push('-');
    
}

calcMultiply = function() {
    if (calcInputSub.textContent === '0') {
        calcInputSub.textContent = calcInput.textContent;
        calcInput.textContent = '0';
      
        
    } else if (calcInput.textContent != '0') {
        let multiCalc = (+calcInputSub.textContent) * (+calcInput.textContent);
        calcInputSub.textContent = multiCalc;
        calcInput.textContent= '0';
        calcDisplay = '0';
    }

    prevKeyArr.push('*');
};

calcDiv = function() {
    if (calcInputSub.textContent === '0') {
        calcInputSub.textContent = calcInput.textContent;
        calcInput.textContent = '0';
      
        
    } else if (calcInput.textContent != '0') {
        let divCalc = (+calcInputSub.textContent) / (+calcInput.textContent);
        calcInputSub.textContent = divCalc;
        calcInput.textContent= '0';
        calcDisplay = '0';
    }

    prevKeyArr.push('/');
}

calcEqual = function() {
    if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '+' && prevKeyArr[prevKeyArr.length - 1] != '=' ){
        calcAdd();
        // let sub = calcInputSub.textContent
        calcInput.textContent = calcInputSub.textContent;
        calcInputSub.textContent = '0';
}   else if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '-' && prevKeyArr[prevKeyArr.length - 1] != '=' ) {
        calcSub();
        // let sub = calcInputSub.textContent
        calcInput.textContent = calcInputSub.textContent;
        calcInputSub.textContent = '0';
}   else if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '*' && prevKeyArr[prevKeyArr.length - 1] != '=' ) {
        calcMultiply();
        // let sub = calcInputSub.textContent
        calcInput.textContent = calcInputSub.textContent;
        calcInputSub.textContent = '0';
}   else if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '/' && prevKeyArr[prevKeyArr.length - 1] != '=' ) {
    calcDiv();
    // let sub = calcInputSub.textContent
    calcInput.textContent = calcInputSub.textContent;
    calcInputSub.textContent = '0';
}
    prevKeyArr.push('=');
};

calcClear = function() {
    calcInput.textContent = '0';
    calcInputSub.textContent = '0';
};




// NUMBER KEY INPUT

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

// CALC KEY INPUT 

document.getElementById('key-add').addEventListener('click', function() {
    calcAdd();
    console.log('btnpress-add')
});

document.getElementById('key-sub').addEventListener('click', function() {
    calcSub();
    console.log('btnpress-minus')
});

document.getElementById('key-mul').addEventListener('click', function() {
    calcMultiply();
    console.log('btnpress-multiply')
});

document.getElementById('key-divide').addEventListener('click', function() {
    calcDiv();
    console.log('btnpress-div')
});

document.getElementById('key-equal').addEventListener('click', function() {
    calcEqual();
});

document.getElementById('key-clear').addEventListener('click', function() {
    calcClear();
});
