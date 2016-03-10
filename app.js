
var steps = 3;
var step = 1;

function enter(e) {
  if(13 != e.keyCode) return true;
  if(4 == step) return false;
  step++;
}

