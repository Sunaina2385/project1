window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector("#main-box").style.display = "block";
        },
        2000 
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#main-box").style.display = "none";
});