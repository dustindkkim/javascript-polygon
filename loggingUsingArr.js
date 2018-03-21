function getcheckerror(){
    for(let n = 0; n < arguments.length; n++){
      if(typeof arguments[n] !== "number"){
        return "숫자형 타입만 계산이 가능합니다.";
      }
      else if(arguments[n] <= 0){
        return "길이가 0보다 커야 합니다.";
      } 
    }
    if(arguments.length === 0){
      return "정확한 인자의 갯수를 입력하세요";
    }
    return true;
}
  
  //원의 넓이
  function getWidthCircle(radius){
      let result = radius * radius * Math.PI;
      return result;
  }
  
  //사각형의 넓이
  function getWidthSquare(base, height){
      let result = base * height;
      return result;
  }
      
  //사달꼴의 넓이
  function getWidthTrapezoid(base, uppbase, height){
      let result = (base + uppbase) * height * 0.5;
      return result;
  }

var count = 0;
function getArea(polygon,...args){
  (function(){
      count++
      console.log("계산이" + count + "번 일어났습니다");
  }());
  
  let check = getcheckerror(...args);
  if(check !== true){
    return check;
  }
  
  if(polygon === 'circle'){
    let arr = [];
    for(let radius = args[0]; radius <= args[1]; radius ++){
      arr.push(getWidthCircle(radius));
    }
    if(typeof args[1] !== "number"){
      return getWidthCircle(args[0]);
    }
    return arr;
  }
  else if(polygon === 'rect'){
    return getWidthSquare(args[0], args[1]);
  }
  else if(polygon === 'trapezoid'){
    return getWidthTrapezoid(args[0], args[1], args[2]);
  }
}
  
console.log(getArea('circle',1));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid',10,15,12));
console.log(getArea('circle', 1,5));    



// //getCircle()
// > 계산이 1번 일어났습니다.

// //getCircle()
// > 계산이 2번 일어났습니다.

// //getArea('circle',2)
// > 계산이 3번 일어났습니다.

// //getArea('rect',2,3)
// > 계산이 4번 일어났습니다.

// //getReport() //getReport가 불려지면, 함수 호출된 순서를 출력한다.
// > 계산수행순서 : circle, circle, circle, rect