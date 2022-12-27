window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)
     console.log(localstoragekeys)
     const mydiv = document.getElementById('mydiv')
     let something = ''
     console.log(mydiv)
    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
       let userDetailsObj = JSON.parse(userDetailsString);
        something += `<div>${userDetailsObj.name} : ${userDetailsObj.msg}</div>`
    }
    mydiv.innerHTML = something
})