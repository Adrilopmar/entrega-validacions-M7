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

function login(){
  var email= document.getElementById("loginEmail");
  var password = document.getElementById('loginPass');
  var correu= /^([\w\.\-\u00f1\u00E0-\u00FC]+)@([\w\.\-\u00f1\u00E0-\u00FC]*)$/g
  var fails=0;

   fails=0;
   user= email.value;
   pass= password.value;

   if( user == ('') || correu.test(user) == false){
     email.classList.add('is-invalid');
     document.getElementById('fail-mail').innerHTML=('correu malament');
     fails ++;
   }
   if(pass.length<5){
     password.classList.add('is-invalid');
     document.getElementById('fail-pass').textContent=('contrasenya malament');
     fails ++;
   }
   
   if(fails>0){
     return false;
   }
   else{
     return true
   }
}


var secPass = /(?=  .*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
function strongPass(password){
  if(secPass.test(password)){
    return true
  }
  else{
    return false
  }
}



function singIn(){
  var regNom = document.getElementById('nouNom'); 
      regCog = document.getElementById('nouCog');
      regAdress = document.getElementById('nouAdress');
      regTelf =document.getElementById('nouTelf');
      regPostal = document.getElementById('nouPostal');
      regProv = document.getElementById('nouProv');
      regMail = document.getElementById('nouMail');
      regPass = document.getElementById('nouPass');
      regConfPass = document.getElementById('nouConfPass');
      regTerm = document.getElementById('nouTermes');
      regFails =0;
      regCorreu = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      strongPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

      if(regNom.value ==('')){
        regNom.classList.add('is-invalid');
        document.getElementById('fail-reg-nom').textContent=('Aquest camp és obligatori');
        regFails ++
      }

      if(regCog.value ==('')){
        regCog.classList.add('is-invalid');
        document.getElementById('fail-reg-cog').textContent=('Aquest camp és obligatori');
        regFails ++
      }
      if(regAdress.value ==('')){
        regAdress.classList.add('is-invalid');
        document.getElementById('fail-reg-adress').textContent=('Aquest camp és obligatori');
        regFails ++
      }
      if(regTelf.value ==('')|| isNaN(regTelf.value) !== false){
        regTelf.classList.add('is-invalid');
        regFails ++
        if(regTelf.value ==('')){
          document.getElementById('fail-reg-telf').textContent=('Aquest camp és obligatori');
        }
        else{
          document.getElementById('fail-reg-telf').textContent=('Introdueix un telèfon vàlid');
        }
      }
      if(regPostal.value ==('') || isNaN(regPostal.value) !== false ){
        regPostal.classList.add('is-invalid');
        regFails ++
        if(regPostal.value ==('')){
          document.getElementById('fail-reg-post').textContent=('Aquest camp és obligatori');
        }
        else{
          document.getElementById('fail-reg-post').textContent=('Codi postal no vàlid');
        }
      }
      if(regProv.value ==('')){
        regProv.classList.add('is-invalid');
        document.getElementById('fail-reg-prov').textContent=('Aquest camp és obligatori');
        regFails ++
      }
      if(regMail.value.length >=0 ){
        if(regCorreu.test(regMail.value) == false && regMail.value.length>=1){
          document.getElementById('fail-reg-mail').textContent=('Correu invalid')
          regMail.classList.add('is-invalid');
          regFails ++
        }
        if(regMail.value==('')){
          document.getElementById('fail-reg-mail').textContent=(' Aquest camp és obligatori')
          regMail.classList.add('is-invalid');
        regFails ++
        }
      }
      if(regPass.value==('')){
          regPass.classList.add('is-invalid');
          document.getElementById('fail-reg-pass').textContent=('La contrasenya ha de tenir com ha mínim 8 caràcters');
          regFails ++
        }
      if(regPass.value!==('')){
        if(regPass.value.length<8){
          regPass.classList.add('is-invalid');
          document.getElementById('fail-reg-pass').textContent=('La contrasenya ha de tenir com ha mínim 8 caràcters');
          regFails ++
        }
        if(regPass.value.length>=8){
          goodpass = regPass.value
          if(strongPass.test(goodpass) == false){
            regPass.classList.add('is-invalid');
            document.getElementById('fail-reg-pass').textContent=('La contrasenya ha contenir majúscules, minúscules i numeros');
            regFails ++
          }
        }

      }
      
      if(regConfPass.value !== regPass.value){
        regConfPass.classList.add('is-invalid');
        document.getElementById('fail-reg-conf-pass').textContent=('Les contrasenyes no coincideixen')
        regFails ++
      }
      if(regTerm.checked !==true){
        regTerm.classList.add('is-invalid');
        document.getElementById('fail-reg-termes').textContent=('Accepta els termes i condicions')
        regFails ++
      }
      if(regFails>0){
        return false;
      }
      else{
        return true
      }
}



document.addEventListener('blur',(event) => {
  if(event.target.value!='') {
    event.target.classList.remove('is-invalid');
  }
},true);
