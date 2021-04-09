var digit = "";
var operation = "";
var a = "";
var b = "";
var result = 0;
var tempMemory = 0;
var memory = 0;
var signWasPressed = false;
var pointPressed = false;
var equalPressed = false;

function math(a, b, operation) { //все вычисления проходят здесь
    switch (operation) {
        case "+":
            return result = a + b;
            break;
        case "-":
            return result = a - b;
            break;
        case "*":
            return result = a * b;
            break;
        case "/":
            if (b != 0) return result = a / b;
            else {
                alert("Делить на 0 нельзя!");
                signCE();
                break;
            }
        case "%":
            return result = a * b * 0.01;
        case "^":
            {
                var tempA = 1;
                for (var i = 0; i < b; i++) {
                    var tempA = tempA * a;
                }
                return result = tempA;
            }
        case "(Sqrt)":
            if (a >= 0) return result = Math.sqrt(a);
            else {
                alert("Квадратный корень из отрицательного числа извлекать нельзя!");
                signCE();
                break;
            }
        case "(1/x)":
            if (a != 0) return result = 1 / a;
            else {
                alert("Делить на 0 нельзя!");
                signCE();
                break;
            }
    }
};

function digitPressed() { //нажата цифра 
    if (equalPressed) { //если операция была закончена - очищаем переменные перед новой операцией
        a = "";
        b = "";
        operation = "";
        result = 0;
        signWasPressed = false;
        pointPressed = false;
        equalPressed = false;
    }
    if (!signWasPressed) { //если первое число
        if (a !== "0") a += digit; // если набор продолжается - прибавляем цифру
        else a = digit; // число новое, цифра должна быть первой
    } else { //если второе число
        if (b !== "0") b += digit; // -//-
        else b = digit; // -//-
    }
    displayValues();
};

function operationChosed() { //нажат знак операции
    signWasPressed = true; //дальше будет набиратсья второе число
    pointPressed = false; // второе число - можно ставить точку
    if (equalPressed) { //если пользователь решил продолжить вычисления с полученным результатом
        a = String(result);
        b = ""; // обнуляем, чтобы можно было ввести новое второе число
        result = 0;
        equalPressed = false; // разрешить новые операции
    }
    displayValues();
};

function displayValues() { //вывод всех значений в поле
    if (equalPressed) {
        document.getElementById("score").value = String(result); // вычисление уже совершено
        document.getElementById("fieldLog").value += `\n` + a + operation + b + "=" + document.getElementById("score").value;
        rollingLog();
    } else {
        document.getElementById("score").value = a + operation + b; //новое вычисление
        if (signWasPressed) {}
    }
};

btnLog.onclick = rollingLog;

function rollingLog() {
    var element = getComputedStyle(document.getElementById("innerLog"));
    var textValue = element.top;
    var stringArray = textValue.split("px");
    if (stringArray[0] >= 13) {
        var numberValue = stringArray[0] - 13;
        var newString = numberValue + "px";
        document.getElementById("innerLog").style.top = newString;
    } else document.getElementById("innerLog").style.top = "5px";
}

function digit1() {
    digit = "1";
    digitPressed();
};

btn1.onclick = digit1;

function digit2() {
    digit = "2";
    digitPressed();
};

btn2.onclick = digit2;

function digit3() {
    digit = "3";
    digitPressed();
};

btn3.onclick = digit3;

function digit4() {
    digit = "4";
    digitPressed();
};

btn4.onclick = digit4;

function digit5() {
    digit = "5";
    digitPressed();
};

btn5.onclick = digit5;

function digit6() {
    digit = "6";
    digitPressed();
};

btn6.onclick = digit6;

function digit7() {
    digit = "7";
    digitPressed();
};

btn7.onclick = digit7;

function digit8() {
    digit = "8";
    digitPressed();
};

btn8.onclick = digit8;

function digit9() {
    digit = "9";
    digitPressed();
};

btn9.onclick = digit9;

function digit0() {
    //избегаем дублирования нолей
    if (!signWasPressed) { // если первое число
        if (a === "0") digit = ""; //если число уже 0, добавлять будет нечего
        else digit = "0";
    } else { //если второе число
        if (b === "0") digit = ""; // -//-
        else digit = "0";
    }
    digitPressed();
};

btn0.onclick = digit0;

function digit000() { // аналогично с "0"
    if (!signWasPressed) {
        if (a === "") digit = "";
        else digit = "000";
    } else {
        if (b === "") digit = "";
        else digit = "000";
    }
    digitPressed();
};

btn000.onclick = digit000;

function digitPoint() { //ставим точку // одна точка на одно число
    if (!pointPressed) { //если точка ещё не поставлена 
        // сложный ступенчатый цикл 
        //    if (a === "") digit = "0.";  // если первое число пустое, второго ещё нет, ставим 0 с точкой
        //    else // если первое число не пустое, возможно, уже второе число
        //      if (!signWasPressed) digit = "."; // знак ещё не нажат, значит это первое число, ставим точку
        //        else // знак поставлен, значит число второе
        //          if (b === "") digit = "0.";  // если второе пустое, ставим 0 с точкой
        //              else digit = "."; // число не пустое, ставим точку
        //    pointPressed = true; //точка поставлена
        //    digitPressed();

        // простой цикл
        if (!signWasPressed) { //знак операции ещё не был нажат, это первое число 
            if (a !== "") digit = "."; // если число уже есть
            else digit = "0."; // если числа ещё нет
        } else { //знак операции уже был нажат, это второе число 
            if (b !== "") digit = "."; // -//-
            else digit = "0."; // -//-
        }
        pointPressed = true; //точка поставлена
        digitPressed();
    }
};

btnPoint.onclick = digitPoint;

function signPlus() {
    operation = "+";
    operationChosed();
};

btnPlus.onclick = signPlus;

function signMinus() {
    operation = "-";
    operationChosed();
};

btnMinus.onclick = signMinus;

function signMulti() {
    operation = "*";
    operationChosed();
};

btnMulti.onclick = signMulti;

function signDivide() {
    operation = "/";
    operationChosed();
};

btnDivide.onclick = signDivide;

function signPrcnt() {
    operation = "%";
    operationChosed();
};

btnPrcnt.onclick = signPrcnt;

function signExp() {
    operation = "^";
    operationChosed();
};

btnExp.onclick = signExp;

function signRad() {
    operation = "(Sqrt)";
    operationChosed()
    signEqual(); // число одно, сразу выводим
};

btnRad.onclick = signRad;

function signFract() {
    operation = "(1/x)";
    operationChosed()
    signEqual(); // число одно, сразу выводим
};

btnFract.onclick = signFract;

function signPlMn() {
    if (equalPressed) { // если операция уже произведена
        a = String(result); //запоминаем как первое
        b = ""; // обнуляем, чтобы можно было продолжать вычисления
        operation = "";
        result = 0;
        equalPressed = false;
        signWasPressed = false;
    }
    if (!signWasPressed) { //если число первое
        if ((Number(a)) > 0) a = "-" + a; //если больше нуля - добавить в начало минус
        else a = String(0 - (Number(a))); // если <=0 - делаем положительным
    } else { // если второе
        if ((Number(b)) > 0) b = "-" + b;
        else b = String(0 - (Number(b)));
    }
    displayValues();
};

btnPlMn.onclick = signPlMn;

function signEqual() { // вычисляем
    if (signWasPressed) { // защита от ложных нажатий //если знак был нажат - пользователь делает вычисления, иначе нажимает кнопку просто так
        if (!equalPressed) { // вычисление новое
            math(Number(a), Number(b), operation); // перейти к вычислениям
            equalPressed = true; //вычисление совершено
        } else {
            a = result; // вычисление продолжается // отправляем результат как первое число
            math(Number(a), Number(b), operation);
        }
        displayValues(); // вывести результат
    }
};

btnEqual.onclick = signEqual;

signC = function() {
    if (equalPressed) { // если вычисление произошло
        result = result.slice(0, -1); // стираем последний символ
        if (!~a.indexOf(".")) pointPressed = false; // если стёрли точку, разрешаем новую
    } else // вычисления ещё не было
    if (!signWasPressed) { //если число первое
        a = a.slice(0, -1); // стираем последний символ
        if (!~a.indexOf(".")) pointPressed = false; // если стёрли точку, разрешаем новую
    } else { //если число второе
        b = b.slice(0, -1);
        if (!~b.indexOf(".")) pointPressed = false;
    }
    displayValues();
};

btnC.onclick = signC;

function signCE() { //очистка значения
    pointPressed = false; // разрешаем точку
    if (!signWasPressed) a = ""; // если число первое, обнуляем его
    else b = ""; //если второе
    displayValues();
};

btnCE.onclick = signCE;

function signCA() { //обнуляем все переменные //memory обнуляется отдельной кнопкой
    digit = "";
    a = "";
    b = "";
    operation = "";
    result = 0;
    signWasPressed = false;
    pointPressed = false;
    equalPressed = false;
    displayValues();
};

btnCA.onclick = signCA;

function signMemSave() { //сохранить в память
    memory = 0;
    tempMemory = 0;
    if (equalPressed) memory += result; // если операция уже произошла
    else if (!signWasPressed) memory += Number(a); // если число первое
    else memory += Number(b);
    document.getElementById("btnMemSave").getElementsByClassName("hint")[0].innerHTML = String(memory);
};

btnMemSave.onclick = signMemSave;

btnMemSave.onmouseover = function() {
    this.getElementsByClassName("hint")[0].innerHTML = String(memory);
};

function signMemPlus() { //прибавить в память
    if (equalPressed) memory += result; // если операция уже произошла
    else if (!signWasPressed) memory += Number(a); // если число первое
    else memory += Number(b);
    document.getElementById("btnMemPlus").getElementsByClassName("hint")[0].innerHTML = String(memory);
};

btnMemPlus.onclick = signMemPlus;

btnMemPlus.onmouseover = function() {
    this.getElementsByClassName("hint")[0].innerHTML = String(memory);
};


function signMemMinus() { //вычесть из памяти 
    if (equalPressed) memory -= result; // если операция уже произошла
    else if (!signWasPressed) memory -= Number(a); // если число первое
    else memory -= Number(b);
    document.getElementById("btnMemMinus").getElementsByClassName("hint")[0].innerHTML = String(memory);
};

btnMemMinus.onclick = signMemMinus;

btnMemMinus.onmouseenter = function() {
    this.getElementsByClassName("hint")[0].innerHTML = String(memory);
};

function signMemRecall() { //показать значение в памяти
    if (equalPressed) result = memory;
    else if (!signWasPressed) a = String(memory);
    else b = String(memory);
    displayValues();
    document.getElementById("btnMemRecall").getElementsByClassName("hint")[0].innerHTML = String(memory);
};

btnMemRecall.onclick = signMemRecall;

btnMemRecall.onmouseenter = function() {
    this.getElementsByClassName("hint")[0].innerHTML = String(memory);
};

function signMemClear() { //очистить значение в памяти
    memory = 0;
    tempMemory = 0;
};

btnMemClear.onclick = signMemClear;

document.addEventListener("keyup", function(keyPressed) { // управление с клавиатуры
    switch (keyPressed.keyCode) {
        case 96:
            digit0();
            break; //numpad Num0-9 -//-
        case 97:
            digit1();
            break;
        case 98:
            digit2();
            break;
        case 99:
            digit3();
            break;
        case 100:
            digit4();
            break;
        case 101:
            digit5();
            break;
        case 102:
            digit6();
            break;
        case 103:
            digit7();
            break;
        case 104:
            digit8();
            break;
        case 105:
            digit9();
            break; // -//-
        case 106:
            signMulti();
            break; // Num *
        case 107:
            signPlus();
            break; // Num +
        case 109:
            signMinus();
            break; // Num -
        case 110:
            digitPoint();
            break; // Num .
        case 108:
            signDivide();
            break; // Num /
        case 13:
            signEqual();
            break; // Num Enter
        case 8:
            signC();
            break; // Backspace
        case 46:
            signCA();
            break; // Del
    }
});

// $(function() {
//     BindHandlers();
//     count_of_new_line = 0; /*This variable is global*/
// });

// function CaretPosition(ctrl) { /*This is to get the current position of cursor*/
//     var CaretPos = 0;
//     if (document.selection) {
//         ctrl.focus();
//         var Sel = document.selection.createRange();
//         Sel.moveStart('character', -ctrl.value.length);
//         CaretPos = Sel.text.length;
//     } else if (ctrl.selectionStart || ctrl.selectionStart == '0')
//         CaretPos = ctrl.selectionStart;
//     return (CaretPos);
// }

// function BindHandlers() {
//     $('#fieldLog').on({
//         keyup: function(f) {
//             var search_value = $(this).val();
//             var cursorPosition = CaretPosition(document.getElementById('fieldLog'));
//             var search_value_before_current_cursor = search_value.substr(0, cursorPosition);
//             var latest_new_line = search_value_before_current_cursor.lastIndexOf("\n");
//             var keycode = f.keyCode;
//             if (keycode == 13) {
//                 count_of_new_line = count_of_new_line + 1;
//                 if (count_of_new_line > 3) {
//                     var max_val = search_value.substr(0, latest_new_line);
//                     $('#fieldLog').val(max_val);
//                     search_value = max_val;
//                     f.preventDefault();
//                 }
//             }
//         }
//     })
// }

btn.onclick = changeColorTheme1;

function changeColorTheme1() {
    var checkBox;
    checkBox = document.getElementById("switcher");
    if (checkBox.checked) {
        var arrayOfElements = document.getElementsByClassName("btnCalc");
        for (var index = 0; index < arrayOfElements.length; index++) {
            arrayOfElements[index].classList.add("btnCalcCyan");
        }
        var arrayOfElements = document.getElementsByClassName("btnCalcCyan");
        for (var index = 0; index < arrayOfElements.length; index++) {
            arrayOfElements[index].classList.remove("btnCalc");
        }
    } else {
        var arrayOfElements = document.getElementsByClassName("btnCalcCyan");
        for (var index = 0; index < arrayOfElements.length; index++) {
            arrayOfElements[index].classList.add("btnCalc");
        }
        var arrayOfElements = document.getElementsByClassName("btnCalc");
        for (var index = 0; index < arrayOfElements.length; index++) {
            arrayOfElements[index].classList.remove("btnCalcCyan");
        }
    }
}