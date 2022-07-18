'use strict'

const search = () =>{

    const searchBox = document.getElementById("searchId").value.toUpperCase();
    const storeProds = document.getElementById("search_prods")
    const product = document.querySelectorAll(".prod")
    const prodDesc = storeProds.getElementsByTagName("p")

    for( let i = 0; i < prodDesc.Length; i++)
    {
        let match = product[i].getElementsByTagName('p')[0];

        if (match)
        {
           let textValue =  match.textContent || match.innerHTML
        
           if (textValue.toUpperCase().indexOf(searchBox) > - 1)
           {
               product[i].getElementsByClassName.display = "";
           }
           else
           {
            product[i].getElementsByClassName.display = "none";
           }
        }


    }

}