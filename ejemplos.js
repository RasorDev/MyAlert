myAlert({
    background: '#eeeeee', // Fondo de la alerta
    title: 'Alerta', // Título de la alerta
    icon: 'success', // Ícono de la alerta
    iconColor: '#2b2b2b', // Fondo de los íconos de la alerta (Predefinidos: notify, error, warning, success, info, question); si el parametro no existe el color se adapta según el icon que tenga
    text: 'Texto personalizado', // Texto de la alerta
    confirmBtn: 'active', // Botón confirmar, está activo por defecto
    confirmBtnText: 'Confirmar', // Texto del botón confirmar.
    confirmBtnColor: '#2b2b2b', // Color del botón confirmar.
    confirmBtnTextColor: '',  // Color del texto del botón confirmar, blanco por defecto.
    deniedBtn: 'active',  // Botón denegar, está inactivo por defecto
    deniedBtnText: 'Denegar', // Texto del botón denegar.
    deniedBtnColor: '#b51818', // Color del botón denegar.
    deniedBtnTextColor: '', // Color del botón denegar, blanco por defecto.
    cancelBtn: 'active', // Botón cancelar, está inactivo por defecto
    cancelBtnText: 'Cancelar', // Texto del botón denegar.
    cancelBtnColor: '#b51818', // Color del botón denegar.
    cancelBtnTextColor: '', // Color del texto botón denegar, blanco por defecto.

}).then((result) => { // Ejemplo para utiliza las promesas
    (result.confirmed) ? aceptar() : '';
    (result.denied) ? denegar('denegar') : '';
    (result.cancel) ? cancelar() : '';
})

function aceptar(){
    alert('Aceptar');
}

function denegar(param){
    alert(param);
}

function cancelar(){
    alert('Cancelar');
} 


