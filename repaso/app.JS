document.addEventListener('DOMContentLoaded',()=>{
    const formularioUsuario = document.getElementById('formularioUsuario')    
    const mensajeBienvenida = document.getElementById('mensaje_bienvenida')
    const nombre = document.getElementById('name')
    const email = document.getElementById('email')
    const pieDepagina = document.getElementById('pieDePagina')
const edad = document.getElementById('age')

    const nombreGuardado = localStorage.getItem('nombreUsuario')

    if(nombreGuardado){
        mensajeBienvenida.textContent = `Hola ${nombreGuardado}`
        console.log(mensajeBienvenida, nombreGuardado)

    }

    if(edad){
        edad.addEventListener('input', () => {
            const edadValor = parseInt(edad.value, 10); 
            if (isNaN(edadValor) || edadValor < 0 || edadValor > 120) {
                pieDepagina.textContent = 'Por favor, ingresa una edad válida entre 0 y 120.';
                pieDepagina.classList.add('error');
            } else {
                pieDepagina.textContent = '';
                pieDepagina.classList.remove('error');
            }
        });
    }   
      if(email){
        email.addEventListener('input', () => {
            const emailValor = email.value;
            if(!emailValor){
                pieDepagina.textContent = 'El correo no puede estar vacio.';
                pieDepagina.classList.add('error');
            } else {
                pieDepagina.textContent = '';
                pieDepagina.classList.remove('error');
            }
        });
    }
    
  if(nombre){
    nombre.addEventListener('input', () => {
        const nombreValor = nombre.value.trim();
        if(nombreValor == ''){
            pieDepagina.textContent = 'El nombre debe estar vacio';
            pieDepagina.classList.add('error');
        } else {
            pieDepagina.textContent = '';
            pieDepagina.classList.remove('error');
        }
    });
  }


    formularioUsuario.addEventListener('submit',(event) =>{
        
        event.preventDefault();
        const nombreActual = nombre.value.trim();
        localStorage.setItem('nombreUsuario',nombreActual)

        mensajeBienvenida.textContent = `Hola ${nombreActual}`
        
        pieDepagina.textContent = 'datos guardados'
        pieDepagina.classList.add('success')
        formularioUsuario.reset();
    });



    nombre.addEventListener("input", vericarnombre)
    formularioUsuario.addEventListener("input", vericaremail)

    function vericarnombre(){
      const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
      const nombreValor = nombre.value;
        if(!regex.test(nombreValor)){
            nombre.setCustomValidity("El nombre no debe contener números o caracteres especiales.");
        } else if (nombreValor.length < 3){
            nombre.setCustomValidity("El nombre debe tener al menos 3 caracteres.");
        } else {
            nombre.setCustomValidity("");
        }     
    }
 

       function vericaremail(){
        const emailValor = email.value;
        if(emailValor){
            email.setCustomValidity("");
        } else {
            email.setCustomValidity("");
        }


    }

}
);