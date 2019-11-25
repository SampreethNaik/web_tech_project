/* for dashboard */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

/*dashboard script ends here*/

/* For login page */


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter fields';

        setTimeout(() =>msg.remove(), 3000);
    }
    else{
        const li = document.createElement('Li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));
        

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value= '';
    }

}
function showEditor(){
  document.querySelector('.iframec').style.display='block';
}

function removeEditor(){
  document.querySelector('.iframec').style.display='none';
}
/*Login page script ends here */