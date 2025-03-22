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
   switchAuthForm()
 
});

const authForm=document.querySelector('#authForm');
authForm.addEventListener('submit',(e)=>{
   e.preventDefault();
   const user={
      username: signIn ? undefined : userName.value,
      email:email.value,
      password:password.value
   };

   console.log(user)
   if(signIn){

      const allUsers=JSON.parse(localStorage.getItem('Users')) ||[];
      const existingUser=allUsers.find(
         (user)=>user.email=== email.value && user.email === email.value);
         
      if(existingUser){
         localStorage.setItem("onlineUser",JSON.stringify(existingUser));
         window.location.href='ourweb/index.html'
      }else{
         alert("Invalid credentials")
         return
      }
   }else{
      const allUsers=JSON.parse(localStorage.getItem('Users')) ||[];

      const existingUser=allUsers.find((user)=>user.username === userName.value && user.email === email.value);
      if(existingUser){
         alert(`User ${existingUser.username} Allready Exists`)
         return
      }
      if(confirmPassword.value !== password.value){
         alert("password mismatch")
         return;
      } 
      allUsers.push(user);
      localStorage.setItem('Users',JSON.stringify(allUsers))
      alert('Registration Successfully');
      switchAuthForm()
   }


  
})
 function switchAuthForm(){
   signIn = !signIn
   if(signIn){
    authButton.textContent='Sign in'
    authSwitch.innerHTML=`New to survey <a href="#" id="switchForm">Sing up </a>`
    formTitle.textContent='Sing In';
    userName.style.display='none'
    confirmPassword.style.display='none'
    userName.value=''
    email.value=''
    password.value=''
    confirmPassword.value=''

   //  console.log('click')

   }else{
    authButton.textContent='Sign Up'
    authSwitch.innerHTML=`Already have an account? <a href="#" id="switchForm">Sing In </a>`
    formTitle.textContent='Sing Up';
    userName.style.display='block'
    confirmPassword.style.display='block'
    console.log('click')
   }
 }