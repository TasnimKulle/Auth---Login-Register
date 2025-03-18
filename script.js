const formTitle=document.querySelector('#form-title');

const userName=document.querySelector('#username');

const email=document.querySelector('#email');

const password=document.querySelector('#password');

const confirmPassword=document.querySelector('#confirmPassword')

const authButton=document.querySelector('#authButton');

const authSwitch=document.querySelector('#authSwitch');

const switchForm=document.querySelector('#switchForm')
 let signIn = true

document.body.addEventListener('click',(e)=>{

   if(e.target.id != "switchForm") return;
    signIn = !signIn
   if(signIn){
    authButton.textContent='Sign in'
    authSwitch.innerHTML=`New to survey <a href="#" id="switchForm">Sing up </a>`
    formTitle.textContent='Sing In';
    userName.style.display='none'
    confirmPassword.style.display='none'
    console.log('click')

   }else{
    authButton.textContent='Sign Up'
    authSwitch.innerHTML=`Already have an account? <a href="#" id="switchForm">Sing In </a>`
    formTitle.textContent='Sing Up';
    userName.style.display='block'
    confirmPassword.style.display='block'
    console.log('click')
   }
})