const links = document.getElementById("link")
links.addEventListener('click', () => {
   console.log(links[1])
   console.log('0')
   const active = document.getElementById('nav')
   active.classList.remove('openNav')
})


   const btnMenu = document.getElementById('menu')
   btnMenu.addEventListener('click', () => {
      const active = document.getElementById('nav')   
      active.classList.toggle('openNav')
   })



const sendBtn = document.querySelector(".send-btn")

sendBtn.addEventListener('click', (e) => {
      const name = document.querySelector(".name")
      const email = document.querySelector(".email")
      const asunto = document.querySelector(".asunto")
      e.preventDefault()
      if(name.value == "" || email.value == "" || asunto.value == ""){
         console.log('sin value')
         emptyerror();
      } else {
         console.log('con value')
         sendEmail(name.value, email.value, asunto.value);
         success();
      }
   })
   





function sendEmail(name, email, asunto) {
   emailjs.send("service_ejrwrqh","template_icifu4k",{
      name,
      email,
      asunto
      });
}

function emptyerror() { 
   swal({
      title: "Oh No....",
      text: "Fields cannot be empty!",
      icon: "error"
   })
}

function success() { 
   swal({
      title: "Email sent succesfully",
      text: "We try to reply in 24 hours",
      icon: "success"
   })
}


const switchBtn = document.getElementById('switch')

switchBtn.addEventListener('click', () => {
      switchBtn.classList.toggle('switch-active')
   document.body.classList.toggle('dark')
  
})

