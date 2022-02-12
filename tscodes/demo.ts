//console.log("Hello Worlds hii bro how are you");

// Data Types
// number
// String
// Boolean
// any
// never
// datatype[] 
// number[]
// any[]


//variable 
// var - we can access inside the blocK only and outside the blocK
// let - we can access inside the blocK only

// var x:number=10;
// var y:number; // undefined
// var z="abc";
// var a;  //any type
// a=10;
// a='abc';
// a=10.5;

// var x:number=10;
// var y:String=<String><any>x;
// var msg:String='abc';  // type assertion means type type conversion
// msg.    // we can write any method

// var msg1;
// msg1='abcd';
// (msg as string). // that types also we can do conversion

// Array
// var arr:any[]={1,2,3,4,5,'abs'};


// If_else
// var x:number=10;
// var y:number=20;
// if(x>y)
// {
//     console.log(x+"  is Greater");
// }
// else
// {
//     console.log(y+"  is Greater");
// }


// var x:number=29;
// var y:number=34;
// // var z:number=x>y?x:y;
// // console.log(z+" is Greater");
// x>y?console.log(x+" is Greater"):console.log(y+ " is Greater");



// // Switch Statement
// var x: number = 7;
// switch (x) {
//     case 11:
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;

//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         console.log("Summer");
//         break;

//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("Rainy");
//         break;

//     default:
//         console.log("Incorrect Choosed");


// }


// // Loop
// var x:number=10;
// var y:number=20;
// while(x<=y){
//     console.log(x);
//     x++;
// }
 
// var z:number=5;
// var fact :number=1;
// do{
//     fact=fact*z;
//     z--;
// }while(z!=0);
// console.log(fact);



// var x:number=17;
//         break;
// for(var i:number=2; i<x;i++){
//     if(x%i==0)
//     {
//         console.log("Not a Prime Number");
//     }
// }
// if(i==x)
// console.log("Prime Number");



// // lebel brea and level Continue
// var x:number=10;
// var y:number=20;
// outer:for(var i:number=x;i<y;i++){
//     for(var j:number=2;j<i;j++){
//         if(i%j==0)
//         continue outer;
//     }
//     console.log(i);
// }


// //one Dimentional Array
// let arr:number[]=[12,20,30,40,50];
// for(var i=0; i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// for(var x of arr)
// {
//     console.log(x);
// }

// for(var y in arr)
// {
//     console.log(y);
// }


// // Two Dimentional Array
// var arr:number[][] = [[10,20,30],[40,50,60]]
// for(var x of arr)
// {
//     for(var y of x)
//     {
// console.log(y);
//     }
// }




// // Function
// function Demo():void
// {
//     console.log("Hello Function tm chal gye ho na hahhah");
// }
// Demo();



// function add(x:number,y:number):void
// {
//     console.log(x+y);
// }
// add(12,12);

// function add1(x:number, y:number):number
// {
//    return x+y;
// }
// console.log(add1(10,20));

// // Optional Parameter
// function add2(x?: number,y?:number):number
// {
//     if(y==undefined)
//     return x;
//     else
//     return x+y
// }
// console.log(add2(10,20));
// console.log(add2(10));
// console.log(add2());

// //Default values and optional values

// function add(x:number=0,y:number=0):number
// {
//     return x+y;
// }  
// console.log(add(10));
// console.log(add(10,20));
// console.log(add());

// // Variable Length Arguments
// function add(...a):number
// {
//     var sum :number=0;
//     for(var x of a)
//     {
//         sum = sum+x;
//     }
//     return sum;
// }
// console.log(add(1,2,3,4));
// console.log(add(10,20,30,40,50));
// console.log(add(1,26));



// function perform(x:number,y:number,s:String = "+")
// {
//     switch(s)
//     {
//         case "+":
//             return x+y;
//             case "-":
//             return x-y;
//             case "*":
//             return x*y;
//             case "/":
//             return x/y;
//     }
// }
// console.log(perform(10,20));
// console.log(perform(30,10,"-"));
// console.log(perform(20,50,"*"));
// console.log(perform(10,2,"/"));


// Arrow Function
// function show(msg:string)
// {
//     console.log(msg);
// }
// show("Hello Function");

// var x=(msg)=>console.log(msg);
// x("Hello Arrow Function");


// function perform(fun)
// {
//     // html data will come here 
//     fun(50,20);
// }
// let add=(x,y)=>console.log(x+y);
// let sub=(x,y)=>console.log(x-y);
// perform(add);
// perform(sub);
// let mul=(x,y)=>console.log(x*y);
// let div=(x,y)=>console.log(x/y);
// perform(mul);
// perform(div);

// // Class And Object
// class Rectangle 
// {
//     x:number=12;
//      y:number=20;
//     area()
//     {
//         console.log(this.x * this.y);
//     }
// }
// var obj = new Rectangle();
// obj.area();

// class Rectangle 
// {
//     constructor(private x?:number,private y?:number)
//     {

//     }
//     area(){
//         console.log(this.x*this.y);
//     }
//     setX(value:number)
//     {
//        this.x=value;
//     }
//     getX(){
//         return this.x;
//     }
// }
// var obj =new Rectangle(5,12);
// obj.area();
// obj.setX(2);
// var z=obj.getX();
// console.log(z);

// class Rectangle 
// {
//     constructor(private x?:number,private y?:number)
//     {

//     }
//     area(){
//         console.log(this.x*this.y);
//     }
//     set X(value:number)
//     {
//        this.x=value;
//     }
//     get X(){
//         return this.x;
//     }
// }
// var obj =new Rectangle(5,12);
// obj.X=20;
// var z=obj.X;
// console.log(z);// for compile -> tsc -t es5 demo.ts
//                // for run the program -> node demo.js


// class Rectangle 
// {
//     constructor(private _x?:number,private _y?:number)
//     {

//     }
//     area(){
//         console.log(this._x*this._y);
//     }
//     set x(value:number)
//     {
//        this._x=value;
//     }
//     get x(){
//         return this._x;
//     }
// }
// var obj =new Rectangle(5,12);
// obj.x=20;
// var z=obj.x;
// console.log(z);// for compile -> tsc -t es5 demo.ts
//                // for run the program -> node demo.js

// // Inheritance
// class Rectangle 
// {
//     constructor(protected x?:number, protected y?:number)
//     {

//     }
//     show()
//     {
//         console.log(this.x+" "+this.y);
//     }
// }
// class R extends Rectangle
// {
//     constructor(x:number,y:number)
//     {
//         super(x,y);
//     }
//     Display()
//     {
//         this.show();
//     }
// }
// var obj =new R(10,30);
// obj.Display();


// // Interface
// interface shape 
// {
//     l :number;
//     b:number;
//     area();
// }
// class Rectangle implements shape
// {
//     constructor(public l:number,public b:number )
//     {

//     }
//     area()
//     {
//         console.log(this.l*this.b);
//     }

// }
// var obj = new Rectangle(10,20);
// obj.area();

//component -> data+logic+template

//1. create a component
//2. module file entry
//3. html/css


// goto new terminal and write -> ng g c course 
// g means generate and c means component

// goto new terminal and write -> ng g s course 
// g means generate and s means service

// if you render typescript content into html content then it  is  known as String Interpolation

// if you render html content into  typescript  content then it  is  known as DOM Manipulation 

// service -  Hit to the server
