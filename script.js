const fullname= document.getElementById("name").value.trim()
const email= document.getElementById("email").value.trim()
const updates= document.getElementById(".updates").checked
const submit= document.querySelector("button")

function checkInputs(){
    if(fullname==="" && email==="" && !updates){
        alert("please enter your details correctly")
    }
    else{
        alert("sign-up successful")
    }
}

submit.onclick=checkInputs;



