let memory = "";
const lastOperableNumb = NaN;
let currentNumber = NaN;
let currentString = "";

let operator = false;
let operatorVal;
let lastCharOperator = false;

function buttonPressed(value) {
  lastCharOperator = false;
  currentString += value;
  updateDisplay();
}

function performOperation(value1, value2, val) {
  if (operatorVal == 0) {
    operatorVal = val;
  }

  switch (operatorVal) {
    case 2:
      return value1 / value2;

    case 3:
      return value1 * value2;

    case 4:
      return value1 - value2;

    case 5:
      return value1 + value2;

    case 6:
      return NaN;
  }
}

function operatorPressed(value) {
  switch (value) {
    case 0:
      emptyMemory();
      break;

    case 1:
      const tempString = currentString.slice(0, -1);
      currentString = tempString;
      if (currentString == "") {
        updateDisplay(true);
      } else {
        updateDisplay();
      }

      break;

    case 2:
      if (lastCharOperator) {
        const tempMem = memory.slice(0, -2);
        memory = `${tempMem}/ `;
        updateDisplay(true);
      } else {
        if (operator) {
          const result = performOperation(
            currentNumber,
            convert(currentString),
            value
          );
          currentString = result.toString();
          memory = `${currentString} / `;
          updateDisplay();
          currentNumber = result;
          currentString = "";
        } else {
          currentNumber = convert(currentString);
          memory = `${currentString} / `;
          currentString = "";

          operator = true;
          updateDisplay(true);
        }
        lastCharOperator = true;
      }
      operatorVal = value;
      break;

    case 3:
      if (lastCharOperator) {
        const tempMem = memory.slice(0, -2);
        memory = `${tempMem}x `;
        updateDisplay(true);
      } else {
        if (operator) {
          const result = performOperation(
            currentNumber,
            convert(currentString),
            value
          );
          currentString = result.toString();
          memory = `${currentString} x `;
          updateDisplay();
          currentNumber = result;
          currentString = "";
        } else {
          currentNumber = convert(currentString);
          memory = `${currentString} x `;
          currentString = "";
          operator = true;
          updateDisplay(true);
        }
        lastCharOperator = true;
      }
      operatorVal = value;
      break;

    case 4:
      if (lastCharOperator) {
        const tempMem = memory.slice(0, -2);
        memory = `${tempMem}- `;
        updateDisplay(true);
      } else {
        if (operator) {
          const result = performOperation(
            currentNumber,
            convert(currentString),
            value
          );
          currentString = result.toString();
          memory = `${currentString} - `;
          updateDisplay();
          currentNumber = result;
          currentString = "";
        } else {
          currentNumber = convert(currentString);
          memory = `${currentString} - `;
          currentString = "";
          operator = true;
          updateDisplay(true);
        }
        lastCharOperator = true;
      }
      operatorVal = value;
      break;

    case 5:
      if (lastCharOperator) {
        const tempMem = memory.slice(0, -2);
        memory = `${tempMem}+ `;
        updateDisplay(true);
      } else {
        if (operator) {
          const result = performOperation(
            currentNumber,
            convert(currentString),
            value
          );
          currentString = result.toString();
          memory = `${currentString} + `;
          updateDisplay();
          currentNumber = result;
          currentString = "";
        } else {
          currentNumber = convert(currentString);
          memory = `${currentString} + `;
          currentString = "";
          operator = true;
          updateDisplay(true);
        }
        lastCharOperator = true;
      }
      operatorVal = value;
      break;

    case 6:
      if (operator && !lastCharOperator) {
        let result = performOperation(
          currentNumber,
          convert(currentString),
          value
        );

        if (isNaN(result)) {
          result = convert(currentString);
          memory = "";
          memory = `${currentString} = `;
          currentNumber = result;
          currentString = "";
          lastCharOperator = true;
          updateDisplay(true);
          return;
        }

        memory = `${memory + currentString} = `;
        currentString = result.toString();
        lastCharOperator = false;
        operator = false;
        currentNumber = result;
        updateDisplay();
      } else if (currentString != "") {
        currentNumber = convert(currentString);
        memory = `${currentString} = `;
        currentString = "";
        updateDisplay(true);
        lastCharOperator = true;
        operatorVal = 0;
        operator = true;
      }

      break;
  }
}

function emptyMemory() {
  memory = "";
  currentString = "";
  currentNumber = NaN;
  lastCharOperator = false;
  operator = false;
  operatorVal = 0;
  updateDisplay(true);
}

function convert(string) {
  const numb = parseFloat(string);
  return numb;
}

function updateDisplay(newline) {
  document.getElementById(
    "screen"
  ).innerHTML = `<div class='screen-text-mem'>${memory}</div>\n ${currentString}`;

  if (newline) {
    document.getElementById(
      "screen"
    ).innerHTML = `<div class='screen-text-mem'>${memory}</div>\n 0`;
  }
}
