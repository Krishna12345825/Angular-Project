//console.log("Hello Worlds hii bro how are you");
var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.l = l;
        this.b = b;
    }
    Rectangle.prototype.area = function () {
        console.log(this.l * this.b);
    };
    return Rectangle;
}());
var obj = new Rectangle(10, 20);
obj.area();
