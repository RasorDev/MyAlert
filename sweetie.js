let principalId = 0

function closeAlert(id){
    let el = document.getElementById('sweetie-alert-'+id)
    el.classList.add('sweetie-hide')
    setTimeout(()=>{
        el.remove()
    }, 300)
}

function simpleAlert(data){

    principalId++;

    const customData = {
        title:'Title', 
        information:'Information', 
        background:'#fff', 
        titleColor:'#2E2E2E', 
        infoColor:"#757575", 
        accept:'Aceptar', 
        position:'left-top'
    }

    let title = (data.title)? data.title : customData.title
    let information = (data.information) ?data.information : customData.information
    let background = (data.background)? data.background : customData.background
    let titleColor = (data.titleColor)? data.titleColor : customData.titleColor
    let infoColor = (data.infoColor)? data.infoColor : customData.infoColor
    let accept = (data.accept)? data.accept : customData.accept
    let position = (data.position)? data.position : customData.position

    
    body = document.querySelector('body');
    const alert_ = `
    
    <div id='sweetie-alert-`+principalId+`' style='background-color: `+background+`' class='sweetie-alert `+ position +`'>
        <p style='color:`+titleColor+` class='sweetie-title'>`+ title +`</p>
        <p style='color:`+infoColor+` ' class='sweetie-info'>`+ information +`</p>
        <div class='sweetie-btn-div'>
            <button class='sweetie-btn-1' onclick='closeAlert(`+principalId+`)'>`+accept+`
        </div>
    </div>
    
    `
    body.innerHTML += alert_
}   