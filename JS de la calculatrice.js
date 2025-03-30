var ope = ["+", "-", "/", "*", "."];
var zero = "0";
var lastOpe = "";
// Liste des touches du clavier et leurs valeurs correspondantes
const keyMapping = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "÷",
  ".": ".",
  "=": "=",
  "(": "(",
  ")": ")",
  Enter: "=",
  " ": "C",
  Backspace: "⌫",
  "±": "±",
};

function appendValue(val) {
  const lastChar = display.value.slice(-1);
  if (display.value === "Erreur") {
    display.value = "";
  }
  if (display.value[0] === "0") {
    if (display.value[1] === "val") {
      display.value[0] = "";
    }
  }
  if (ope.includes(val) && ope.includes(lastChar)) {
    return;
  }
  if (ope.includes(val)) {
    if (val === "." && lastOpe === ".") {
      return;
    }
    lastOpe = val;
  }
  document.getElementById("display").value += val;
}
function Inversion() {
  const display = document.getElementById("display");
  let currentValue = display.value;

  if (lastOpe === "") {
    if (currentValue[0] === "-") {
      display.value = currentValue.slice(1);
    } else {
      display.value = "-" + currentValue;
    }
  } else {
  }
}
function calculate() {
  const display = document.getElementById("display");
  if (display.value === "0+0") {
    display.value = "La tête à toto";
  } else if (display.value === "69") {
    display.value = "Euh..., Ok mec";
  } else {
    try {
      // Utilisation de eval pour le calcul (attention en production pour des raisons de sécurité)
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Erreur";
    }
  }
}

// tous clear
function clearDisplay() {
  document.getElementById("display").value = "";
}

// clear un élément
function OneClearDisplay() {
  let OldValeur = document.getElementById("display");
  OldValeur.value = OldValeur.value.slice(0, -1);
}
// Fonction pour gérer les événements du clavier
function handleKeyboardEvent(event) {
  const key = event.key;

  // Vérifier si la touche est une touche valide dans keyMapping
  if (keyMapping[key] !== undefined) {
    const value = keyMapping[key];

    if (key === "Backspace") {
      OneClearDisplay();
    } else if (key === " ") {
      clearDisplay();
    } else if (key === "Enter") {
      calculate();
    } else if (key === "±") {
      Inversion();
    } else {
      // Ajouter la valeur à l'affichage
      appendValue(value);
    }
  }
}

document.addEventListener("keydown", handleKeyboardEvent);
