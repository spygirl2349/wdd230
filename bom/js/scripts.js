document.getElementById("addChapter").addEventListener("click", myFunction)
function myFunction (){
    let favChap = document.getElementById("favchap").value;
    if (favChap !== "") {
        const newBTN = document.createElement("button");
        newBTN.innerHTML = "\u274c"

        const newLI = document.createElement("li");
        newLI.textContent = favChap;
        newLI.appendChild(newBTN);

        document.querySelector(".list").appendChild(newLI);

        newBTN.addEventListener("click", function(e) {
            document.querySelector(".list").removeChild(newLI);
        })

        document.getElementById("favchap").value = "";

        
    };
};

