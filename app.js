//  VARIABLES
let calcInputDisplay,
  calcInputDisplayZero,
  calcOperator,
  calcEqual,
  calcClear,
  calcInput,
  calcInputSub,
  prevKeyArr,
  decimalPoint,
  calcDPoint,
  addActiveClass,
  removeActiveClass;

decimalPoint = false;

prevKeyArr = [];

calcInput = document.querySelector('.calc-screen');

calcInputSub = document.querySelector('.calc-sub');

// BUTTON FUNCTION DISPLAYS PRESSED BUTTON
calcInputDisplay = function (x) {
  if (calcInput.textContent === '0') {
    let keyInput = x;
    calcInput.textContent = keyInput;
  } else if (prevKeyArr[prevKeyArr.length - 1] === '=') {
    let keyInput = x;
    calcInput.textContent = keyInput;
    prevKeyArr.push('r');
  } else if (calcInput.textContent.length <= 9) {
    let keyInput = x;
    calcInput.textContent += keyInput;
  }
};

// ZERO BUTTON FUNCTION STOPS ZERO DISPLAYING BEFORE NUMBER
calcInputDisplayZero = function () {
  if (calcInput.textContent != '0' && calcInput.textContent.length <= 9)
    calcInput.textContent += 0;
};

// DECIMAL POINT FUNCTION
calcDPoint = function () {
  if (calcInput.textContent === '0' && decimalPoint === false) {
    calcInput.textContent = '0.';
    prevKeyArr.push('.');
  } else if (calcInput.textContent.length < 9 && decimalPoint === false) {
    calcInput.textContent += '.';
    prevKeyArr.push('.');
  }

  decimalPoint = true;
};

let oparray = [];
// CALCULATOR OPERATOR FUNCTION REPLACE X WITH OPERATOR
calcOperator = function (x) {
  if (calcInputSub.textContent === '0') {
    calcInputSub.textContent = calcInput.textContent;
    calcInput.textContent = '0';
  } else if (
    calcInput.textContent != '0' &&
    oparray[oparray.length - 2] === '+'
  ) {
    let resCalc = +calcInputSub.textContent + +calcInput.textContent;
    resCalcString = resCalc.toString();
    calcInputSub.textContent = resCalcString.substring(0, 9);
    calcInput.textContent = '0';
  } else if (
    calcInput.textContent != '0' &&
    oparray[oparray.length - 2] === '-'
  ) {
    let resCalc = +calcInputSub.textContent - +calcInput.textContent;
    resCalcString = resCalc.toString();
    calcInputSub.textContent = resCalcString.substring(0, 9);
    calcInput.textContent = '0';
  } else if (
    calcInput.textContent != '0' &&
    oparray[oparray.length - 2] === '*'
  ) {
    let resCalc = +calcInputSub.textContent * +calcInput.textContent;
    resCalcString = resCalc.toString();
    calcInputSub.textContent = resCalcString.substring(0, 9);
    calcInput.textContent = '0';
    calcInput.textContent = '0';
  } else if (
    calcInput.textContent != '0' &&
    oparray[oparray.length - 2] === '/'
  ) {
    let resCalc = +calcInputSub.textContent / +calcInput.textContent;
    resCalcString = resCalc.toString();
    calcInputSub.textContent = resCalcString.substring(0, 9);
    calcInput.textContent = '0';
  }

  prevKeyArr.push(`${x}`);
  decimalPoint = false;
};

// EQUAL FUNCTION
calcEqual = function () {
  if (
    calcInputSub != '0' &&
    prevKeyArr[prevKeyArr.length - 1] === '+' &&
    prevKeyArr[prevKeyArr.length - 1] != '='
  ) {
    calcOperator('+');

    calcInput.textContent = calcInputSub.textContent;
    calcInputSub.textContent = '0';
  } else if (
    calcInputSub != '0' &&
    prevKeyArr[prevKeyArr.length - 1] === '-' &&
    prevKeyArr[prevKeyArr.length - 1] != '='
  ) {
    calcOperator('-');

    calcInput.textContent = calcInputSub.textContent;
    calcInputSub.textContent = '0';
  } else if (
    calcInputSub != '0' &&
    prevKeyArr[prevKeyArr.length - 1] === '*' &&
    prevKeyArr[prevKeyArr.length - 1] != '='
  ) {
    calcOperator('*');

    calcInput.textContent = calcInputSub.textContent;
    calcInputSub.textContent = '0';
  } else if (
    calcInputSub != '0' &&
    prevKeyArr[prevKeyArr.length - 1] === '/' &&
    prevKeyArr[prevKeyArr.length - 1] != '='
  ) {
    calcOperator('/');

    calcInput.textContent = calcInputSub.textContent;
    calcInputSub.textContent = '0';
  }
  prevKeyArr.push('=');
};

// CLEAR DISPLAY
calcClear = function () {
  calcInput.textContent = '0';
  calcInputSub.textContent = '0';
  decimalPoint = false;
};

// KEYPRESS FUNCTION ADD ACTIVE CLASS

document.body.addEventListener('keydown', function (event) {
  let char = event.char || event.charCode || event.which;
  let keyInput = event.key;

  switch (char) {
    // 1 KEY
    case 49:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 97:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 2 key
    case 50:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 98:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 3 KEY
    case 51:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 99:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 4 KEY
    case 52:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 100:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 5 KEY
    case 53:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 101:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 6 KEY
    case 54:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 102:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 7 KEY
    case 55:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 103:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 8 KEY
    case 56:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 104:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 9 KEY
    case 57:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 105:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    // 0 key
    case 48:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;
    case 96:
      calcInputDisplay(keyInput);
      document.getElementById(`key-${keyInput}`).classList.add('btn-active');
      break;

    // + key
    case 107:
      calcOperator(keyInput);
      document.getElementById(`key-add`).classList.add('btn-active');
      break;
    // - key
    case 109:
      calcOperator(keyInput);
      document.getElementById(`key-sub`).classList.add('btn-active');
      break;
    // * key
    case 106:
      calcOperator(keyInput);
      document.getElementById(`key-mul`).classList.add('btn-active');
      break;
    // / key
    case 111:
      calcOperator(keyInput);
      document.getElementById(`key-divide`).classList.add('btn-active');
      break;

    // = key
    case 13:
      calcEqual();
      document.getElementById(`key-equal`).classList.add('btn-active');
      break;
    case 187:
      calcEqual();
      document.getElementById(`key-equal`).classList.add('btn-active');

    // . key
    case 110:
      calcDPoint();
      document.getElementById(`key-dpoint`).classList.add('btn-active');
      break;
    case 190:
      calcDPoint();
      document.getElementById(`key-dpoint`).classList.add('btn-active');
      break;
  }
});

// FOR KEYBOARD KEYPRESS FUNCTION REMOVE ACTIVE CLASS

document.body.addEventListener('keyup', function (event) {
  let char = event.char || event.charCode || event.which;
  let keyInput = event.key;
  switch (char) {
    // 1 KEY
    case 49:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 97:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 2 key
    case 50:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 98:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 3 KEY
    case 51:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 99:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 4 KEY
    case 52:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 100:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 5 KEY
    case 53:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 101:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 6 KEY
    case 54:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 102:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 7 KEY
    case 55:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 103:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 8 KEY
    case 56:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 104:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 9 KEY
    case 57:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 105:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    // 0 key
    case 48:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;
    case 96:
      document.getElementById(`key-${keyInput}`).classList.remove('btn-active');
      break;

    // + key
    case 107:
      document.getElementById(`key-add`).classList.remove('btn-active');
      break;
    // - key
    case 109:
      document.getElementById(`key-sub`).classList.remove('btn-active');
      break;
    // * key
    case 106:
      document.getElementById(`key-mul`).classList.remove('btn-active');
      break;
    // / key
    case 111:
      document.getElementById(`key-divide`).classList.remove('btn-active');
      break;

    // = key
    case 13:
      document.getElementById(`key-equal`).classList.remove('btn-active');
      break;
    case 187:
      document.getElementById(`key-equal`).classList.remove('btn-active');

    // . key
    case 110:
      document.getElementById(`key-dpoint`).classList.remove('btn-active');
      break;
    case 190:
      document.getElementById(`key-dpoint`).classList.remove('btn-active');
      break;
  }
});

// NUMBER KEY INPUT

document.getElementById('key-1').addEventListener('click', function () {
  calcInputDisplay(1);
});

document.getElementById('key-2').addEventListener('click', function () {
  calcInputDisplay(2);
});

document.getElementById('key-3').addEventListener('click', function () {
  calcInputDisplay(3);
});

document.getElementById('key-4').addEventListener('click', function () {
  calcInputDisplay(4);
});

document.getElementById('key-5').addEventListener('click', function () {
  calcInputDisplay(5);
});

document.getElementById('key-6').addEventListener('click', function () {
  calcInputDisplay(6);
});

document.getElementById('key-7').addEventListener('click', function () {
  calcInputDisplay(7);
});

document.getElementById('key-8').addEventListener('click', function () {
  calcInputDisplay(8);
});

document.getElementById('key-9').addEventListener('click', function () {
  calcInputDisplay(9);
});

document.getElementById('key-0').addEventListener('click', function () {
  calcInputDisplayZero();
});

// CALC OPERATOR INPUT

document.getElementById('key-add').addEventListener('click', function () {
  calcOperator('+');
});

document.getElementById('key-sub').addEventListener('click', function () {
  calcOperator('-');
});

document.getElementById('key-mul').addEventListener('click', function () {
  calcOperator('*');
});

document.getElementById('key-divide').addEventListener('click', function () {
  calcOperator('/');
});

document.getElementById('key-equal').addEventListener('click', function () {
  calcEqual();
});

document.getElementById('key-clear').addEventListener('click', function () {
  calcClear();
});

document.getElementById('key-dpoint').addEventListener('click', function () {
  calcDPoint();
});
