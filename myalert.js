class MyAlert{

    /* CONSTRUCTOR */
    constructor(options = {}){ 
        
        const { zIndex = 900 } = options;
        this.alertcontainer = this.createAlertContainer();
        this.alertblur = this.createAlertBlur();

    }
    /* Alerts Default */
    createAlertBlur(){ // Contenedor del Blur de la alerta
        const alertBlur = document.createElement('div');
        alertBlur.classList.add('alert-blur');
        document.body.prepend(alertBlur);
        return alertBlur;
    }

    createAlertContainer(){ // Contenedor de la alerta
        const alertcontainer = document.createElement('div');
        alertcontainer.classList.add('alert-container');
        alertcontainer.id = "alert-container";
        document.body.prepend(alertcontainer);

        return alertcontainer;
    }

    createAlertBox( params ){ // Caja de la alerta        
        const alertbox = document.createElement('div');
        alertbox.classList.add('alert-box');
        alertbox.id = "alert-box";
        const alertbody = this.createAlertBody( params.title, params.icon, params.iconcolor, params.subtitle, params.msgs );
        alertbox.prepend(alertbody);
        const alertfooter = this.createAlertFooter();
        alertbox.appendChild(alertfooter);

        return alertbox
    }

    createAlertBody( title, icon, iconcolor, subtitle, msgs ){ // Cuerpo de la alerta
        let AlertContainer = '';
        const alertbody = document.createElement('div');
        alertbody.classList.add('alert-body');
        alertbody.id = "alert-body";

        if (title) { // Configuramos el Título
            AlertContainer += "<h2>" + title + "</h2>";
        }

        if(icon){ // Configuramos los iconos
            const icons = { // Iconos predefinidos
                'notify': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>',
                'error': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>',
                'warning': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path><path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path></svg>',
                'success': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>',
                'info': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>',
                'question': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>',
            }
            
            const backgrounds = { // Colores de iconos predefinidos
                'notify': '#0860b7',
                'error': '#c92222',
                'warning': '#df5f18',
                'success': '#0e792e',
                'info': '#08a8ee',
                'question': '#016d94',
            }

            let icono = icons[icon] ?? icon;
            var background = '';
            
            iconcolor ? background = iconcolor : background = backgrounds[icon] ?? icon; // Tomamos el color que viene poro parametros o uno predefinido           
            AlertContainer += '<div class="icon"><div class = "backgorund-icon" style = "background-color:'+ background +';">'+ icono +'</div></div>';
        }

        if (subtitle) { // Configuramos el subtitulo
            AlertContainer += "<h5>" + subtitle + "</h5>"
        }

        if (msgs.length > 0) { // Configuramos los mensajes
            AlertContainer += '<ul>';
            msgs.forEach(function (element, index) {
                AlertContainer += '<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: '+ background +';transform: ;msFilter:;"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>' + element + "</li>";

            });
           AlertContainer += '</ul>';
        }
        
        
        alertbody.innerHTML = AlertContainer;

        return alertbody
    }

    createAlertFooter(){ // Pie de la alerta
        const alertfooter = document.createElement('div');
        alertfooter.classList.add('alert-footer');
        alertfooter.id = "alert-footer";

        alertfooter.innerHTML = `
            <div class="rd_alert_btns" id="rd_alert_btns"></div>
            <a href="#" id="btn_close" class="btn_close">Cerrar</a>
        `

        return alertfooter
    }

    launch(options = {}){ // Mostrar las alertas
        const { title = 'Alerta', icon = '', iconcolor = '', subtitle = '', msgs = [] } = options;

        const alertbox = this.createAlertBox({ title, icon, iconcolor, subtitle, msgs });
        
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        this.alertblur.classList.add('blur');
        this.alertcontainer.prepend(alertbox);
        this.alertcontainer.style.display = 'flex';

        this.alertcontainer.classList.remove("alert_animation_out");
        this.alertcontainer.classList.add('alert_animation_in');
        alertbox.classList.add('scale_animation');     
        
        /* Btn Cerrar */ 
        let btn_close = document.getElementById('btn_close');
        btn_close.addEventListener('click', (e) =>{
            e.preventDefault();
            this.close(alertbox)
        });
    }

    close(alertbox){
        if (alertbox && this.alertcontainer.contains(alertbox)) {
            document.getElementsByTagName("body")[0].style.removeProperty("overflow");
            this.alertblur.classList.remove('blur');
            this.alertcontainer.removeChild(alertbox);
            this.alertcontainer.style.display = 'none';
            
            this.alertcontainer.classList.add("alert_animation_out");
            this.alertcontainer.classList.remove("alert_animation_in");
            alertbox.classList.remove("scale_animation");

        }
    }

}