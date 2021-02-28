// Your code here
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        console.log("Right Arrow Key Pressed")
      moveDodgerRight();
    }
  });

  function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    console.log(rightNumbers)
    let right = parseInt(rightNumbers, 10);
    console.log(right)
  
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
  } 
  
  