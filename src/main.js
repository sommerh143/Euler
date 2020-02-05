export var math = {

  problemOne: function(x){
    var arrays = [];
    var total = 0;
    for (var j = 0; j < arrays.length; j++) {
      total += arrays[j];
    }
    return total;
  },


  probthreearray: function(x){
    var arrays = [];
    for(var i = 1; i < x; i++){
      if (i % 3 === 0) {
        arrays.push(i);
      }
    }
    return arrays;
  },

  probfivearray: function(x){
    var arrays = [];
    for(var i = 1; i < x; i++){
      if(i % 5 === 0){
        arrays.push(i);
      }
    }
    return arrays;
  },

  probfifteenarray: function(x){
    var arrays = [];
    for(var i = 1; i < x; i++){
      if(i % 15 === 0){
        arrays.push(i);
      }
    }
    return arrays;
  },

  comboarray: function(x){
    var array3 = probthreearray(x);
    arrays = array3.concat(probfivearray(x));
    return arrays;
  }
};

// totalarray
// total