const inpEl =document.getElementById("input-el");
const invalidEl = document.getElementById("invalid-el");
function validiteemail(){
    var regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(inpEl.value);
    if(!regExp.test(inpEl.value)){
        invalidEl.textContent = "Valid email required";
        inpEl.style.backgroundColor = '#FFE8E6';
        inpEl.style.borderColor = '#BE7C7D';
    }
    else{
        window.location.href = 'index2.html';
    }
}