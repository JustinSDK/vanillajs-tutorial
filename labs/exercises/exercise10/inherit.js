function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.PI = 3.14159; 

Circle.prototype.area = function() {
    return this.r * this.r * Circle.PI;
};

function Cylinder(x, y, r, h) {
    Circle.call(this, x, y, r); // 呼叫父建構式
    this.h = h;
}

// 實作原型繼承


// 設定原型物件之constructor為目前建構式


// 以下在 new 時會再建構，不需要留在原型物件上

// 共用的物件方法設定在 prototype 上


var cylinder = new Cylinder(0, 0, 10, 20);
console.log(cylinder.area());
console.log(cylinder.volumn());