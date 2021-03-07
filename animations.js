function allInputsValid() {
    const inputs = [...form.querySelectorAll('input')];
    return inputs.every(input => input.checkValidity());
  }
  
  function disableButton() {
    send.disabled = true;
  }
  
  function enableButton() {
    send.disabled = false;
  }
  
  function validateAndSubmit(e) {
    e.preventDefault();
    if (!allInputsValid()) return;
    ajax(e);
  }
  
  function ajax(_e){
    disableButton();
    const http = new XMLHttpRequest();
    const url = 'http://date.jsontest.com/';
  
    http.onreadystatechange = function (){
      if (this.readyState == 4 && this.status == 200){
        modalDate.innerText = JSON.parse(this.responseText).date
        modal_container.classList.add('show');
      } else {
        enableButton();
      }
    }
    http.open('GET', url);
    http.send();
  }
  
  const send = document.getElementById('send');
  const modal_container= document.getElementById('modal_container');
  const modalDate = modal_container.querySelector('.modal-date');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const obs = document.getElementById('obs');
  const form = document.querySelector('.form-message');
  form.addEventListener('submit', validateAndSubmit);