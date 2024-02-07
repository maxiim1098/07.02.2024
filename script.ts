// // class ClassName{}
// class Point{
//  x: number
//  y: number
// }
// let a: Point = new Point()
// function func(){
//     a.x = 1
//     a.y = 2
// }
// // console.log(a)
// // console.log(func)

// class Point2{
//     width: number
//     height: number
// }
// let b: Point2 = new Point2()
// function func2(){
//     b.width = 1
//     b.height = 2
// }


class Rect{
    private x1: number
    public x2: number
    y1: number
    y2: number
    private readonly MAX_COORD = 1000
    constructor(x1?: number, y1?: number, x2?: number, y2?: number){
        this.x1 = 3
        this.x2 = 2
        this.y1 = 5
        this.y2 = 4
    }
    square(){
        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2)
    }
}


let a: Rect = new Rect(3, 2, 5, 4)
let b: Rect = new Rect()
console.log(a.square())


// a.x1 = 4
a.x2 = 6



