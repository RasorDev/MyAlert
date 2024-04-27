<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quick Alert (Examples)</title>

    <!--  GoogleFonts (Opcional) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400&display=swap" rel="stylesheet">

    <!--  BOOTSTRAP (BOTONES DE EJEMPLOS)    -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!--  CSS -->
    <link rel="stylesheet" href="myalert.css"> <!-- Solo debemos importar el archivo JS y CSS para poder usar QuickAlert -->
    <style>
        /* Opcional */
        body {
            font-family: 'Public Sans', sans-serif;
        }
    </style>
</head>

<body>

    <!-- Botones de ejemplos -->
    <div class="wrapper">
        <dv class="row">
            <div class="col-4 col-md-2">
                <a class="btn btn-primary w-100" id="only_show">Mostrar</a>
            </div>

            <div class="col-4 col-md-2">
                <a class="btn btn-primary w-100" id="alert_with_actions">Acciones</a>
            </div>

            <div class="col-4 col-md-2">
                <a class="btn btn-primary w-100" id="alert_confirm">Eliminar</a>
            </div>

            <div class="col-4 col-md-2">
                <a class="btn btn-primary w-100" id="alert_callback">Eliminar CallBack</a>
            </div>

            <div class="col-4 col-md-2">
                <a class="btn btn-primary w-100" id="alert_no_close">No Close</a>
            </div>

        </dv>
    </div>

    <script src="myalert.js"></script> <!-- Solo debemos importar el archivo JS y CSS para poder usar QuickAlert -->
    <script src="ejemplos.js"></script>
</body>

</html>