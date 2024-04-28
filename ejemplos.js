const myalert = new MyAlert();

var only_show = document.getElementById("only_show");

only_show.addEventListener("click", function (e) {
  e.preventDefault();
  myalert.launch({    
    title: "MyAlert",
    icon: 'question',
    //iconcolor: '#2b2b2b',
    subtitle: 'Esto es un subtitulo personalizado.',
    //msgs: ['mensaje 1', 'mensaje 2', 'mensaje 3']
  });
});
