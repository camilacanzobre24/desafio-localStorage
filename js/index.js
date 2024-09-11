document.getElementById("buttonText").addEventListener("click", function(){
    let dato = document.getElementById("inputText").value;
    localStorage.setItem("dato", dato);
    console.log(localStorage.getItem("dato"));
    document.getElementById("inputText").value= " ";
});