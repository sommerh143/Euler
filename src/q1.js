
export function MathProb (x){
  this.x = x
}

MathProb.prototype.multipleThree = function(){
  var arrays = [];
  for(var i = 1; i < this.x; i++){
    if (i % 3 === 0) {
      arrays.push(i);
    }
  }
  return arrays;
}

MathProb.prototype.multipleFive = function(){
  var arrays = [];
  for(var i = 1; i < this.x; i++){
    if(i % 5 === 0){
      arrays.push(i);
    }
  }
  return arrays;
}

MathProb.prototype.combo = function(){
  var array3 = this.multipleThree();
  var arrays = array3.concat(this.multipleFive());
  return arrays;
}

MathProb.prototype.multipleFifteen = function(){
  var arrays = [];
  for(var i = 1; i < this.x; i++){
    if(i % 15 === 0){
      arrays.push(i);
    }
  }
  return arrays;
}

MathProb.prototype.final = function(){
  var total = 0;
  this.combo().forEach(number => total += number);
  this.multipleFifteen().forEach(number => total -= number);
  return total;
}