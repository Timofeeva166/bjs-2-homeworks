function parseCount(value) {
    if (!Number.parseFloat(value) || Number.parseFloat(value) == NaN) {
      throw new Error("Невалидное значение");
    } else {
      return Number.parseFloat(value);
    }
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
           }
  }
  
  class Triangle {
    constructor(a, b, c) {
      if (a + b < c || b + c < a || a + c < b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      let p = (this.a + this.b + this.c) / 2;
      let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return Number(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    }
    catch (err) {
      return {
        get area() {
          return ("Ошибка! Треугольник не существует");
        },
        get perimeter() {
          return ("Ошибка! Треугольник не существует");
        }
      }
    }
  }