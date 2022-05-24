
async function fetchData(){

    var response = await fetch("/MOCK_DATA.json")
    var data = await response.json()
    return data; 
}

async function showData(){
    var data = await fetchData();
    console.log(data)
    var content = document.querySelector(".content")




    for(let i=0;i<data.length;i++){

        function updateImage(id){

            window.location.href="/HTML/imageUpdateForm.html"
            console.log("click")
           
        }

        var div = document.createElement("div")
            div.classList.add("imageDiv")

        var buttonContainer = document.createElement("div")
            buttonContainer.classList.add("buttonContainer")
        var img = document.createElement("img")
        var update = document.createElement("button")
            update.classList.add("gallaryButton")
            update.innerText="Update"
            // update.onclick=updateImage(i);
        var Delete = document.createElement("button")
            Delete.classList.add("gallaryButton")
            Delete.innerText="delete"
        img.src=data[i].image
        buttonContainer.append(update,Delete)
        div.append(img,buttonContainer)
        content.append(div)
    }
}

showData();


