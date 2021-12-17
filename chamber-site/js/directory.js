const directoryURL = 'other/directory.json'

fetch (directoryURL)
    .then ((response) => response.json())
    .then ((jsD) => {
        console.log(jsD);

        for (let i = 0; i < jsD.businesses.length; i++) {
            //create elements
            let busi = document.createElement("li");
            let num = document.createElement("li");
            let web = document.createElement("li");
            
            
            //text content 
            busi.textContent = jsD.businesses[i].name
            num.textContent = jsD.businesses[i].phone
            web.textContent = jsD.businesses[i].web_url

            let directDiv = document.getElementById("directory-b");

            let ul = document.createElement("ul")

            //append
            ul.append(busi)
            ul.append(num)
            ul.append(web)

            directDiv.append(ul);
        }



    })

    //function for when click grid button
    let count = 0;
    function gridList () {

        let button = document.getElementById("grid-list");

        if (count % 2 == 0 ) {
            document.getElementById("directory-b").setAttribute("class", "list");
            
            button.textContent = "Grid";

            count += 1;
    
        } else {
            document.getElementById("directory-b").setAttribute("class", "grid");

            button.textContent = "List";

            count+= 1;
        }
 
    }