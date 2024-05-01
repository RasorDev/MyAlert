function myAlert(data) {

    const defaultData = { //Valores por defecto
        background:'#fff', 
        title:'myAlert', 
        titleColor:'#2b2b2b',
        icon:'notify',
        iconColor:'notify',
        text:'Información', 
        textColor:'#757575',
        confirmBtn: 'active',
        confirmBtnText: 'Aceptar',
        confirmBtnColor: '#0860b7',
        confirmBtnTextColor: '#e9dada',
        deniedBtn: 'inactive',
        deniedBtnText: 'Denegar',
        deniedBtnColor: '#b51818',
        deniedBtnTextColor: '#e9dada',
        cancelBtn: 'inactive',
        cancelBtnText: 'Denegar',
        cancelBtnColor: '#b51818',
        cancelBtnTextColor: '#e9dada',
    }

    const defaultIcons = { //Iconos predefinidos
        notify: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>',
        error: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>',
        warning: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path><path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path></svg>',
        success: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>',
        question: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>',
    }

    const defaultColors = { //Colores de iconos predefinidos
        notify: '#0860b7',
        error: '#bd2d2d',
        warning: '#df5f18',
        success: '#0e792e',
        info: '#08a8ee',
        question: '#016d94',
    }

    let background = (data.background) ? data.background : defaultData.background;
    let title = (data.title) ? data.title : defaultData.title;
    let icon = (data.icon) ? (defaultIcons[data.icon]) ? defaultIcons[data.icon] : data.icon : defaultIcons[defaultData.icon];
    let iconColor = (data.iconColor) ? data.iconColor : (defaultColors[data.icon]) ? defaultColors[data.icon] : defaultColors[defaultData.icon];
    let text = (data.text) ? data.text : defaultData.text;
    /* Boton confirmar */
    let confirmBtn = (data.confirmBtn) ? data.confirmBtn : defaultData.confirmBtn;
    let confirmBtnText = (data.confirmBtnText) ? data.confirmBtnText : defaultData.confirmBtnText;
    let confirmBtnColor = (data.confirmBtnColor) ? data.confirmBtnColor : defaultData.confirmBtnColor;
    let confirmBtnTextColor = (data.confirmBtnTextColor) ? data.confirmBtnTextColor : defaultData.confirmBtnTextColor;
    let confirmButton = (confirmBtn === 'active') ? `<a href = '#' id = 'confirm-btn' class = 'confirm-btn' style = 'background-color: ${confirmBtnColor}; color: ${confirmBtnTextColor};'>${confirmBtnText}</a>` : '';
    /* Boton denegar */
    let deniedBtn = (data.deniedBtn) ? data.deniedBtn : defaultData.deniedBtn;
    let deniedBtnText = (data.deniedBtnText) ? data.deniedBtnText : defaultData.deniedBtnText;
    let deniedBtnColor = (data.deniedBtnColor) ? data.deniedBtnColor : defaultData.deniedBtnColor;
    let deniedBtnTextColor = (data.deniedBtnTextColor) ? data.deniedBtnTextColor : defaultData.deniedBtnTextColor;
    let deniedButton = (deniedBtn === 'active') ? `<a href = '#' id = 'denied-btn' class = 'denied-btn' style = 'background-color: ${deniedBtnColor}; color: ${deniedBtnTextColor};'>${deniedBtnText}</a>` : '';
    /* Boton cancelar */
    let cancelBtn = (data.cancelBtn) ? data.cancelBtn : defaultData.cancelBtn;
    let cancelBtnText = (data.cancelBtnText) ? data.cancelBtnText : defaultData.cancelBtnText;
    let cancelBtnColor = (data.cancelBtnColor) ? data.cancelBtnColor : defaultData.cancelBtnColor;
    let cancelBtnTextColor = (data.cancelBtnTextColor) ? data.cancelBtnTextColor : defaultData.cancelBtnTextColor;
    let cancelButton = (cancelBtn === 'active') ? `<a href = '#' id = 'cancel-btn' class = 'cancel-btn' style = 'background-color: ${cancelBtnColor}; color: ${cancelBtnTextColor};'>${cancelBtnText}</a>` : '';
    

    body = document.querySelector('body');
    const alerta = `
    <div id = "alert-container" class = "alert-container">
        <div id = "alert-box" class = "alert-box" style = "background-color: ${background}">
            <div id = "alert-body" class = "alert-body">
                <h2>${title}</h2>
                <div class="icon">
                    <div class = "backgorund-icon" style = "background-color: ${iconColor};">
                        ${icon}
                    </div>
                </div>
                <h5>${text}</h5>
            </div>
            <div id = "alert-footer" class = "alert-footer">
                ${confirmButton}
                ${deniedButton}
                ${cancelButton}
            </div>
        </div>
    </div>
    `
    
    
    body.innerHTML += alerta;

    myalertstatus('active'); 
    
    if (confirmButton || deniedButton) {
        return new Promise((resolve, reject) => { // Promesas de los botones
            document.getElementById('confirm-btn').addEventListener('click', () => { // Botón confirmar
                let result = { confirmed: true, denied: false, cancel: false };
                resolve(result);
                myalertstatus('inactive'); 
            });
            
            if (deniedButton) {  // Botón denegar
                document.getElementById('denied-btn').addEventListener('click', () => {
                    let result = { confirmed: false, denied: true, cancel: false };
                    resolve(result);
                    myalertstatus('inactive'); 
                });
            }

            if (cancelButton) {  // Botón cancelar
                document.getElementById('cancel-btn').addEventListener('click', () => {
                    let result = { confirmed: false, cancel: false, cancel: true };
                    resolve(result);
                    myalertstatus('inactive'); 
                });
            }

        });
    }
    
}

function myalertstatus(status){ //Activar y desactivar las alertas
    if (status == 'active') {
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
        document.getElementById('alert-container').style.display = "flex";
        document.getElementById('alert-container').classList.remove("alert_animation_out");
        document.getElementById('alert-container').classList.add("alert_animation_in");
        document.getElementById('alert-box').classList.add("alert_animation_in");
    }

    if (status == 'inactive') {
        document.getElementsByTagName('body')[0].style.removeProperty("overflow");
        document.getElementById('alert-container').style.display = "none";
        document.getElementById('alert-container').classList.add("alert_animation_out");
        document.getElementById('alert-container').classList.remove("alert_animation_in");
        document.getElementById('alert-box').classList.remove("alert_animation_in");
    }
}


