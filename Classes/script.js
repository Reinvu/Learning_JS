class Car {
    constructor (manufacturer, model, year, averageSpeed) {
        this.manufacturer = manufacturer
        this.model = model
        this.year = year
        this.averageSpeed = averageSpeed
    }

    get infoCar() {
        return `
        Производитель: ${this.manufacturer}
        Модель: ${this.model}
        Год выпуска: ${this.year} г.
        Средняя скорость: ${this.averageSpeed} км/ч
        `
    }

    way(distance) {
        let time = distance / this.averageSpeed
        let i = time
        while(i > 4) {
            i = i - 4
            time += 1
        }
        console.log(`Время до прибытия ${time} часов`)
    }
}

const car1 = new Car("Toyota", "Hilux", 2000, 110)
console.log(car1.infoCar)
car1.way(1200)



class Rectangle {
    constructor(x1=2, y1=10, x2=12, y2=4) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }
    
    getRectangleInfo() {
        console.log(`Левая верхняя точка: x1=${this.x1}, y1=${this.y1}`)
        console.log(`Правая нижняя точка: x2=${this.x2}, y2=${this.y2}`)
    }

    getWidth() {
        return this.x2 - this.x1
    }

    getHeight() {
        return this.y1 - this.y2
    }

    getArea() {
        console.log("Площадь прямоугольника:", this.getWidth() * this.getHeight())
    }

    getPerimeter() {
        console.log("Периметр прямоугольника:", 2 * (this.getWidth() * this.getHeight()))
    }
}

const rectangle = new Rectangle()
rectangle.getRectangleInfo()
console.log("Ширина прямоугольника:", rectangle.getWidth())
console.log("Высота прямоугольника:", rectangle.getHeight())
rectangle.getArea()
rectangle.getPerimeter()


