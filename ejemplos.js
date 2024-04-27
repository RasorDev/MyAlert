const myalert = new MyAlert();

var only_show = document.getElementById("only_show");

only_show.addEventListener("click", function (e) {
  e.preventDefault();
  myalert.launch({    
    title: "Probanding",
    icon: 'question',
    iconcolor: '',
    subtitle: 'Esto es un subtitulo'
  });
});
