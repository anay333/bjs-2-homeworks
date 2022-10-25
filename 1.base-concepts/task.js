function solveEquation(a, b, c) {
    let arr;
    let x;
    let y;
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
      x = ((-b + Math.sqrt(d)) / (2 * a));
      y = ((-b - Math.sqrt(d)) / (2 * a));
      arr = [x, y];
    } else if (d == 0) {
      x = ((-b) / (2 * a));
      arr = [x];
    }
    else if (d < 0) {
      arr = [];
  
    } else {
      console.log('Не существует такого квадратного уравнения')
    }
    return arr;// array
  }

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
