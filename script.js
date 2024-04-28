let totalPrice = document.getElementById('totalP');
let sum = 0;

function add(id) {
    let quantity = document.getElementById('q'+ id[1]);
    quantity.innerHTML = Number(quantity.innerHTML) + 1;
    let price=document.getElementById('price'+ id[1]);
    let total=document.getElementById('t'+ id[1]);
    total.innerHTML=Number(total.innerHTML) + Number(price.innerHTML);
    sum=Number(price.innerHTML) + sum;
    totalPrice.innerHTML=sum;

}
 function minusClick(id){
    let quantity = document.getElementById('q'+ id[1]);
    if(Number(quantity.innerHTML)>0){
        quantity.innerHTML=Number(quantity.innerHTML) - 1;
    
        let price=document.getElementById('price'+ id[1]);
        let total=document.getElementById('t'+ id[1]);
        total.innerHTML=Number(total.innerHTML) - Number(price.innerHTML);

        sum= sum - Number(price.innerHTML);
        totalPrice.innerHTML=sum;
    }
 }

 let deleteBtn=document.getElementsByClassName('delete-btn');
 for(let i=0 ; i<deleteBtn.length ; i++){
    deleteBtn[i].addEventListener("click",  function (){
       
       let totalId = 't' + (i + 1); 
       let total = document.getElementById(totalId);
       totalPrice.innerHTML= totalPrice.innerHTML - total.innerHTML;
       deleteBtn[i].parentElement.remove();
    })
   

 }
 
let likeButtons = document.getElementsByClassName('fa-solid fa-heart');

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function(event) {
        event.target.classList.toggle('like');

       
        
    });
}
