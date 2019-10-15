const colorBtn = document.getElementById('button');
const bodyBcg = document.querySelector('body');
const valued = document.getElementById('name');
const container = document.getElementById('container');
const colors = ['yellow','red','green','#3b5998'];

colorBtn.addEventListener('click',changeColor);
function changeColor (){
 bodyBcg.style.backgroundColor = colors[3];
 //let random = Math.floor(Math.random()*colors.length)
 //bodyBcg.style.backgroundColor = colors[random];
 let item =document.createElement("p");
 item.textContent=valued.value;
 item.classList.add('container');
 container.appendChild(item);
 console.log(item);
}
/*container.addEventListener('click',function(event){
    if(event.target.classList.contains('containers')){
        event.target.addEventListener('click',function(){
            console.log('list item clicked');
        })
    }
})*/