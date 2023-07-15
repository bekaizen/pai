document.querySelector('#request-pin').addEventListener('click', (e) => {
    e.preventDefault();

    let mobileNumber = document.querySelector('input[name="mobile"]').value
    
    if ( mobileNumber.substring(0,3) != 829 && mobileNumber.substring(0,3) != 849 && mobileNumber.substring(0,3) != 809 ) {
        $('#message').html('Tu numero telefonico debe contener el codigo de area de tu region, eje: <br/> 829xxxxxx <br/> 849xxxxxx <br/> 809xxxxxx   <br/> valida tu numero telefonico e intentalo nuevamente')
    } else if ( mobileNumber.length < 10 ) {
        $('#message').text('El numero telefonico debe ser valido, por favor confirma tu numero telefonico');
        return false
    } else {
        $.ajax({
            url:"https://pagosalinstante.com/AppEnvioMovilPin",
            type: "post",    //request type,
            data: {
                mobile: mobileNumber,
            },
            success:function(result) {
                obj=JSON.parse(result);
                
                if ( obj.result == 'ok' ) {
                    OpenConfig('verificar');
                } else {
                    $('#message').text(result);
                }
            },
        });
    }
});