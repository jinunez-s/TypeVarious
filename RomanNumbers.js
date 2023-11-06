class RomanNumerals {
  static toRoman(num) {
    return "IV";
  }

  static fromRoman(str) {
    return 4;
  }
}

function convertion(a) {
  const valoresR = [
    { valor: 1000, simbolo: "M" },
    { valor: 900, simbolo: "CM" },
    { valor: 500, simbolo: "D" },
    { valor: 400, simbolo: "CD" },
    { valor: 100, simbolo: "C" },
    { valor: 90, simbolo: "XC" },
    { valor: 50, simbolo: "L" },
    { valor: 40, simbolo: "XL" },
    { valor: 10, simbolo: "X" },
    { valor: 9, simbolo: "IX" },
    { valor: 5, simbolo: "V" },
    { valor: 4, simbolo: "IV" },
    { valor: 1, simbolo: "I" },
  ];
  let result = "";
  for (let index = 0; index < valoresR.length; index++) {
    while (a >= valoresR[index].valor) {
      result += valoresR[index].simbolo;
      a -= valoresR[index].valor;
    }
  }
  return result;
}

const respuesta = convertion(928);
console.log(`La respuesta es ${respuesta}`);

function converToRoman(b) {
  //XXV
  const diccionary = [
    { valor: 1000, simbolo: "M" },
    { valor: 900, simbolo: "CM" },
    { valor: 500, simbolo: "D" },
    { valor: 400, simbolo: "CD" },
    { valor: 100, simbolo: "C" },
    { valor: 90, simbolo: "XC" },
    { valor: 50, simbolo: "L" },
    { valor: 40, simbolo: "XL" },
    { valor: 10, simbolo: "X" },
    { valor: 9, simbolo: "IX" },
    { valor: 5, simbolo: "V" },
    { valor: 4, simbolo: "IV" },
    { valor: 1, simbolo: "I" },
  ];
  let result = 0;
  var arrb = b.split("");
  var arrc = [];

  for (let e = 0; e < arrb.length; e++) {
    arrc.unshift(arrb[e]);
  }
  for (let j = 0; j < arrc.length; j++) {
    for (let x = 0; x < diccionary.length; x++) {
      let pass = j;
      if (arrc[j] == "V" && arrc[j + 1] == "I") {
        result += 4;
        j++;
        break;
      }
      if (arrc[j] == "X" && arrc[j + 1] == "I") {
        result += 9;
        j++;
        break;
      }
      if (arrc[j] == "L" && arrc[j + 1] == "X") {
        result += 40;
        j++;
        break;
      }
      if (arrc[j] == "C" && arrc[j + 1] == "X") {
        result += 90;
        j++;
        break;
      }
      if (arrc[j] == "D" && arrc[j + 1] == "C") {
        result += 400;
        j++;
        break;
      }
      if (arrc[j] == "M" && arrc[j + 1] == "C") {
        result += 900;
        j++;
        break;
      }
      if (j == pass) {
        if (arrc[j] == diccionary[x].simbolo) {
          result += diccionary[x].valor;
          break;
        }
      }
    }
  }
  return result;
}

console.log(converToRoman("CMXXVIII"));