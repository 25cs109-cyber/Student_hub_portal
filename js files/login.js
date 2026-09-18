const form=document.querySelector("form")

form.addEventListener("submit", function(event){

      const email=document.getElementById("login-email").value.trim();
      const password=document.getElementById("login-password").value.trim();
      
      if(email=== "" || password ===""){


          alert("Please enter password & emailID");
          event.defaultPrevented();
          return;
      }

      const confirmLogin=confirm("Continue process?");


      if(!confirmLogin){
      event.defaultPrevented();
      return;
      }

      alert("login successfully!!")
});