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



const sendBtn = document.getElementById("form")

sendBtn.addEventListener('submit', (e) => {
      e.preventDefault()
      const name = document.querySelector(".name").value.replace(/\s+/g, ' ').trim();
      const email = document.querySelector(".email").value.replace(/\s+/g, ' ').trim();
      const asunto = document.querySelector(".asunto").value.replace(/\s+/g, ' ').trim();
      if(!name || !email || !asunto ){
         console.log('sin value')
         emptyerror();
      } else {
         console.log('con value')
         sendEmail(name, email, asunto);
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
      text: "Los campos no pueden estar vacios.",
      icon: "error"
   })
}

function success() { 
   swal({
      //title: "Email sent succesfully",
      title: "Email enviado con éxito",
      //text: "We try to reply in 24 hours",
      text: "Intentaremos responder a la brevedad.",
      icon: "success"
   })
}

// esto no es un button es un div
const switchBtn = document.getElementById('switch')

switchBtn.addEventListener('click', () => {
      switchBtn.classList.toggle('switch-active')
      document.body.classList.toggle('dark')
})

