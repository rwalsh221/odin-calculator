
//  VARIABLES
let calcInputDisplay, calcInputDisplayZero, calcOperator,
    calcEqual, calcClear, 
     calcInput, calcInputSub, prevKeyArr, 
     decimalPoint, calcDPoint;

decimalPoint = false;

prevKeyArr = [];

calcInput = document.querySelector('.calc-screen');

calcInputSub = document.querySelector('.calc-sub');


// BUTTON FUNCTION DISPLAYS PRESSED BUTTON
calcInputDisplay = function(x) {
    
    if (calcInput.textContent === '0') {
        let keyInput = x;
        calcInput.textContent = keyInput;
    
    } else if (calcInput.textContent.length <= 9){
        let keyInput = x;
        calcInput.textContent += keyInput;
        
    }
};

// ZERO BUTTON FUNCTION STOPS ZERO DISPLAYING BEFORE NUMBER 
calcInputDisplayZero = function() {
    if (calcInput.textContent != '0' && calcInput.textContent.length <= 9)
        calcInput.textContent += 0;
};

// DECIMAL POINT FUNCTION
calcDPoint = function() {
    if (calcInput.textContent === '0' && decimalPoint === false) {
        calcInput.textContent = '0.'
    } else if (calcInput.textContent.length < 9 && decimalPoint === false) {
        calcInput.textContent += '.'
    }

    decimalPoint = true
    return decimalPoint
};

// CALCULATOR OPERATOR FUNCTION REPLACE X WITH OPERATOR
calcOperator = function(x) {
    let operator = x
    
    
    if (calcInputSub.textContent === '0') {
        calcInputSub.textContent = calcInput.textContent;
        calcInput.textContent = '0';
        

    }   else if (calcInput.textContent != '0' && operator === '+') {
    
        let resCalc = (+calcInputSub.textContent) + (+calcInput.textContent);
        resCalcString = resCalc.toString()
        calcInputSub.textContent = resCalcString.substring(0,9);

    }   else if (calcInput.textContent != '0' && operator === '-') {
    
        let resCalc = (+calcInputSub.textContent) - (+calcInput.textContent);
        resCalcString = resCalc.toString()
        calcInputSub.textContent = resCalcString.substring(0,9);

    }   else if (calcInput.textContent != '0' && operator === '*') {
    
        let resCalc = (+calcInputSub.textContent) * (+calcInput.textContent);
        resCalcString = resCalc.toString()
        calcInputSub.textContent = resCalcString.substring(0,9);
        calcInput.textContent= '0';

    }   else if (calcInput.textContent != '0' && operator === '/') {
    
        let resCalc = (+calcInputSub.textContent) / (+calcInput.textContent);
        resCalcString = resCalc.toString()
        calcInputSub.textContent = resCalcString.substring(0,9);
}   
    
    prevKeyArr.push(`${x}`);
    decimalPoint = false
    return decimalPoint
};

// EQUAL FUNCTION
calcEqual = function() {
    if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '+' && prevKeyArr[prevKeyArr.length - 1] != '=' ){
        calcOperator('+');
        // let sub = calcInputSub.textContent
        calcInput.textContent = calcInputSub.textContent;
        calcInputSub.textContent = '0';
}   else if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '-' && prevKeyArr[prevKeyArr.length - 1] != '=' ) {
        calcOperator('-');
        // let sub = calcInputSub.textContent
        calcInput.textContent = calcInputSub.textContent;
        calcInputSub.textContent = '0';
}   else if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '*' && prevKeyArr[prevKeyArr.length - 1] != '=' ) {
        calcOperator('*');
        // let sub = calcInputSub.textContent
        calcInput.textContent = calcInputSub.textContent;
        calcInputSub.textContent = '0';
}   else if (calcInputSub != '0' && prevKeyArr[prevKeyArr.length - 1] === '/' && prevKeyArr[prevKeyArr.length - 1] != '=' ) {
    calcOperator('/');
    // let sub = calcInputSub.textContent
    calcInput.textContent = calcInputSub.textContent;
    calcInputSub.textContent = '0';
}
    prevKeyArr.push('=');
};

// CLEAR DISPLAY
calcClear = function() {
    calcInput.textContent = '0';
    calcInputSub.textContent = '0';
    decimalPoint = false;
    return decimalPoint;
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

document.getElementById('key-0').addEventListener('click', function() {
    calcInputDisplayZero();
    
});

// CALC KEY INPUT 

document.getElementById('key-add').addEventListener('click', function() {
    calcOperator('+');
    console.log('btnpress-add')
});

document.getElementById('key-sub').addEventListener('click', function() {
    calcOperator('-');
    console.log('btnpress-minus')
});

document.getElementById('key-mul').addEventListener('click', function() {
    calcOperator('*');
    console.log('btnpress-multiply')
});

document.getElementById('key-divide').addEventListener('click', function() {
    calcOperator('/');
    console.log('btnpress-div')
});

document.getElementById('key-equal').addEventListener('click', function() {
    calcEqual();
});

document.getElementById('key-clear').addEventListener('click', function() {
    calcClear();
});

document.getElementById('key-dpoint').addEventListener('click', function() {
    calcDPoint();
});



/// FIRST TRY AND NOTES**********************************************************************************************************************************
/*
calcAdd = function() {
    if (calcInputSub.textContent === '0') {
        calcInputSub.textContent = calcInput.textContent;
        calcInput.textContent = '0';
      
        
    } else if (calcInput.textContent != '0') {
        // let addCalc = (+calcInputSub.textContent) + (+calcInput.textContent);
        calcInputSub.textContent = (+calcInputSub.textContent) + (+calcInput.textContent);
        calcInput.textContent= '0';
        // calcDisplay = '0';
    }

    prevKeyArr.push('+');
    decimalPoint = false
    return decimalPoint
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
};
*/