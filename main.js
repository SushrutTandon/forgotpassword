document.getElementById("button").addEventListener("click", ChangePW);

function ChangePW(){
  if(document.getElementById("one").value === document.getElementById("two").value && document.getElementById("one").value !== ''){
    alert('Pw has been reset.');
  }
}