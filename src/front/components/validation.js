const validation = (userData) => {
    
   const errors = {};
   

    if(!/\S+@\S+\.\S+/.test(userData.username)){
            errors.username = 'El email no es válido';
    }
    if(!userData.username) {
            errors.username = 'Esta campo no puede estar vacío';
    }
    if(userData.username.length > 35) {
            errors.username = 'El email no puede superar los 35 caracteres'
    }
    if(!userData.password.match(/\d/)){
            errors.password = 'La contraseña al menos debe tener un número'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
            errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }

   return errors;
}

export default validation;
