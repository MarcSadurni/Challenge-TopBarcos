// const send= document.getElementById('send');
// const modal_container= document.getElementById('modal_container');

// send.addEventListener('click',()=>{
//     modal_container.classList.add('show');
// });

function ajax(){
    const http = new XMLHttpRequest();
    const url = 'http://date.jsontest.com/';

    http.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById('modal_container').innerHTML = this.responseText;
        }
    }
    http.open('GET', url);
    http.send();
} 

document.getElementById('send').addEventListener('click', function(){
ajax();
modal_container.classList.add('show');
});