// let snake = [
//     [2,2],
//     [2,2],
//     [3,3],
//     [4,3],
//     [5,3],
//     [6,3],
// ];

// let x = 20;
// let y = 24;
// var canvas = document.getElementById("monCarr");
// var context = canvas.getContext("2d");
// var whidtSquare =20;
// var heighSquare =20;
// let inter = null;
// let direction = 39;
// let incX = 1;
// let incY = 0;
// context.fillStyle ="yellow";

// context.fillRect(x *  whidtSquare, y * heighSquare ,  whidtSquare , heighSquare);

// function drow(snake){
//     context.clearRect(0, 0 , canvas.width , canvas.height)
//     for(let i = 0; i < snake.length; i++){
//         const[x,y] = snake[i];
//         context.fillStyle ="red";
//         context.fillRect(
//             x * whidtSquare, 
//             y * heighSquare,   
//                 whidtSquare , 
//                 heighSquare
            
//         );
//     }
// }
// drow(snake);

// function changeDirection(keyCode){

//     if (keyCode == 39 && direction !=37){
//         incX = 1;
//         incY = 0;
//     }
//     if(keyCode == 37 && direction != 39){
//         incX = -1;
//         incY = 0;
//     }
//      if(keyCode == 38 && direction !=40){
//         incX = 0;
//         incY = -1;
//      }
//      if(keyCode == 40 && direction !=38){
//         incX = 0;
//         incY = 1;
  
//   direction = keyCode;   
// }

//  }
// function mouveSnake(){
//     let (x,y) =snake[snake.length-1];
//     snake.shift();
//     snake.push([x +incX],[y +incY]);
// }
// document.addEventListener("keyup",(e)=>{
//     console.log(e.keyCode)
//     changeDirection(e.keyCode)
// })

// setInterval(() =>{
//     mooveSnake()
//     drow(snake);
// },500);
