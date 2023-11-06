function main() {
   
    console.log('%c HI', 'color: firebrick')

    let breeds = [];
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    
    fetch(imgUrl)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        data.message.forEach(renderImage)
    })

    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    fetch(breedUrl)
    .then((res)=>res.json())
    .then((data)=> {
        for (let breed in data.message){
            breeds.push(breed)
            renderBreeds(breed)
        }
        console.log(data)
    })
    
    let select = document.querySelector('#breed-dropdown')
    select.addEventListener('change', function(e){
        console.log(e.target.value);
        const filterBreeds = breeds.filter((breed)=>breed[0]===e.target.value);
        let ul = document.querySelector('#dog-breeds');
        ul.innerHTML = '';
        filterBreeds.forEach(renderBreeds)


    })

    
}

function renderImage (image){
    let imageContainer = document.querySelector("#dog-image-container")
    let img = document.createElement('img');
    img.src = image;
    imageContainer.append(img)
}

function renderBreeds(breed){
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li')
    li.textContent = breed
    ul.append(li);

    li.addEventListener('click', function (){
        li.style.color = 'lime'
     })
}



document.addEventListener('DOMContentLoaded', main)
