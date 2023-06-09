// Object Construct
function construct(arg1, arg2) {
  return {
    arg1: "x",
    arg2: "y"
    
  }
}

// Nth Term
function nthElement(arr,n) {
  return arr[n-1];

}

// onClick - for HTML
function changeHeader1(header) {
  document.getElementById(header).innerText = 'Why would you do that';
  
}

function changeHeader2(header) {
  document.getElementById(header).innerText = 'REALLY?';
  
}

function rmBody(body) {
  document.getElementById(body).remove();
  
}




