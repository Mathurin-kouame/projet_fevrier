var edit = document.getElementById("edit");
var display = document.getElementById("display");


function factorielle(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorielle(n -1);
    } 
}

edit.addEventListener('input',function factorielle(e){
    var n = parseInt(e.target.value);
    if (!isNaN(n)){
        var fact = factorielle(n)
        display.value = fact;
    }
});


