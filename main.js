const page = document.querySelector('.page')
const URL_USERS = "http://localhost:9120/users"
fetch(URL_USERS)
   .then(res => res.json())
   .then(data => reload(data))



function reload(arr) {
     for(let item of arr){
         let box = document.createElement('div')
         let h4 = document.createElement('h4')
         let box_about = document.createElement('div')
         let text_company = document.createElement('p')
         let text_website = document.createElement('p')
         let text_phohe = document.createElement('p')
         let button = document.createElement('button') 
        
         h4.innerHTML = item.name
         text_company.innerHTML =`Company: ${item.company.name}`
         text_website.innerHTML =`Website: ${item.website}`
         text_phohe.innerHTML =`Phone: ${item.phone}`
         button.innerHTML= 'Подробнее'

         box.classList.add('box')
         box_about.classList.add('box_about')
         button.classList.add('button_more')

         page.append(box)
         box.append(h4,box_about)
         box_about.append(text_company,text_website,text_phohe,button)
         
     }
}