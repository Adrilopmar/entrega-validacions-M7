/* - llegir més / menys */
function veuremes(id){
    if(id=="mes"){
      document.getElementById("desplegar").style.display="block";
      document.getElementById("mes").style.display="none";
      // Document.getElementById("imghistoria").style.alignSelf="center";
    }
    else{
      document.getElementById("desplegar").style.display="none";
      document.getElementById("mes").style.display="inline";
      // Document.getElementById("imghistoria").style.alignSelf="flex-start";
    }
  }
  /* funcio canvi formulari registre/log in*/
  function registre(id){
    if(id=="aqui"){
      document.getElementById("register-form").style.display="block";
      document.getElementById("login-form").style.display="none";
    }
    else{
      document.getElementById("register-form").style.display="none";
      document.getElementById("login-form").style.display="block";
    }
  }
  

  $("#login-form").validate({
    rules: {
        "login-email": {
            required: true,
            email: true,
        },
        "login-password": {
            required: true,
            minlength: 8,
            secure:true
            
        }
    },
    messages: {
        "login-email": {
            required: "Aquest camp és obligatori",
            email: "Introdueix una e-mail correcte",
        },
        "login-password": {
            required: "Aquest camp és obligatori",
            minlength: "contrasenya incorrecte",
            secure: "contrasenya incorrecte"
           
        },
    }
});
$("#register-form").validate({
  rules: {
      "register-nom":{
        required:true,
        minlength: 2
      },
      "register-cognom":{
        required:true,
        minlength: 2
      },
      "register-adress":{
        required:true,
        minlength: 2
      },
      "register-telf":{
        required:true,
        minlength: 2,
        digits:true,
      },
      "register-postal":{
        required:true,
        minlength: 4,
        digits:true,
      },
      "register-provincia":{
        required:true,
      },
      "register-email": {
          required: true,
          email: true,
      },
      "register-pass": {
          required: true,
          minlength: 8,
          secure: true,
      },
      "register-conf-pass":{
        required:true,
        equalTo: "#nouPass",
      },
      "register-terms":{
        required:true
      },
  },
  messages: {
      "register-nom":{
        required: "Aquest camp és obligatori",
        minlength:"El nom ha de tenir un mínim de 2 caràcters",
      },
      "register-cognom":{
        required: "Aquest camp és obligatori",
        minlength:"El nom ha de tenir un mínim de 2 caràcters",
      },
      "register-adress":{
        required: "Aquest camp és obligatori",
        minlength:"Introdueix una adreça correcta",
      },
      "register-telf":{
        required: "Aquest camp és obligatori",
        minlength:"Existeixen numeros de telèfon tant curts? posa un real",
        digits: "introdueix un telf vàlid"
      },
      "register-postal":{
        required: "Aquest camp és obligatori",
        minlength:"El codi postal ha de tenir {0} numeros com a mínim",
        digits: "introdueix un codi postal vàlid"
      },
      "register-provincia":{
        required: "Aquest camp és obligatori",
      },
      "register-email": {
          required: "Aquest camp és obligatori",
          email: "Introdueix una e-mail correcte",
      },
      "register-password": {
          required: "Aquest camp és obligatori",
          minlength: "contrasenya ha de tenir 8 digits o més",
          
      },
      "register-conf-pass":{
        required: "Aquest camp és obligatori",
        equalTo: "Les contrasenyes no coincideixen"
      },
      "register-terms":{
        required: "Accepta els termes i les condicions",
        minlength: "Accepta els termes i les condicions"
      },
    
  }
  
}) ;
$.validator.addMethod('secure', function(value,element){
  secPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/
  return this.optional(element)
  || secPass.test(value);
}, 'La contrasenya ha de contenir majuscules, minúscules i numeros ' );
  