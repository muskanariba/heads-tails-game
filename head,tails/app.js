
function playgame (){
var prompt_ = prompt("Please enter heads or tails", "heads/tails").toLowerCase();
var a = Math.floor(Math.random() * 2) + 1;
var result;

if (a === 1) {
  result = "heads";
} else {
  result = "tails";
}

console.log("Random number:", a);
console.log("Result:", result);

if (prompt_ === result) {
  alert("Congratulations! you won.");
} else {
  alert("Sorry! Better luck next time!");

}


}

function playgame() {
    var prompt_ = prompt("Please enter heads or tails", "heads/tails").toLowerCase();
    var a = Math.floor(Math.random() * 2) + 1;
    var result;

    if (a === 1) {
      result = "heads";
    } else {
      result = "tails";
    }
console.log(a)
    if (prompt_ === result) {
      alert("Congratulations! you won.");
    } else {
      alert("Sorry! Better luck next time!");
    }
  }