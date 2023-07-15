document.querySelector('#request-verification').addEventListener('click', (e) => {
    e.preventDefault();
    $.ajax({
        url:"https://pagosalinstante.com/AppMovilPinVerificar", 
        type: "post",    //request type,
        data: {
            pin_code: $('#pin_code').val(),
        },
        success:function(result, textStatus, jqXHR) {
            obj=JSON.parse(result);
            if(jqXHR.status == 200) {
                if ( obj.result == 'ok' )
                {
                    alert('Tu numero fue verificado satisfactor2iamente!')
                } else {
                    $('#message').text(obj.result)
                }
            }
        }
    });
});