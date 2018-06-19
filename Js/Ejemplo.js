$(function() {
    //alert('Cargo');
    $('#Enviar').click(function() {
        console.log("Has pinchado el boton!");
        var No = $('#Nombre').val(); //Nombre
        var Ap = $('#Ape').val();
        var Ed = $('#Edad').val();
        console.log(No + "  " + Ap + "  " + Ed);
        var Dataa = 'Nombre=' + No + '&Ape=' + Ap + '&Edad=' + Ed;
        var Url = 'Php/Eje.php';

        $.ajax({
            type: 'post',
            url: Url,
            data: Dataa,
            beforeSend: function() {
                console.log('Procesando  petición....');
            },
            success: function(respuesta) {
                $('#res').html(respuesta);
            },
            error: function() {
                console.log('Ha salido algo mal,revisa por favor...');
            }
        });
    });
})