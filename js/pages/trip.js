

$(document).ready(function() {
    // get current URL path and assign 'active' class
    $('#DestAddressDiv').hide();
    $('#startAddressDiv').hide();

 $('#expenseForm').hide();
          $('#remark').val("");
          $('#amount').val("");


 $("#newExpenseButton").click(function(){
      $('#expenseForm').slideDown();
    });

    $("#cancelButton").click(function(){
         $('#expenseForm').slideUp();
                   $('#remark').val("");
                   $('#amount').val("");
        });


$('#selectStartType').change(function(){

            if($('#selectStartType').val() == "Others"){
                    $('#startAddressDiv').show();
                    $('#inputStartAddressDisabled').hide();
                    $('#inputStartAddressDiv').show();
                    $('#inputStartAddressDisabled').val("");
                    $('#inputStartAddressDiv').val("");



            }else if ($('#selectStartType').val() == "Wharf"){
                    $('#startAddressDiv').show();
                    $('#inputStartAddressDisabled').show();
                    $('#inputStartAddressDiv').hide();

                    $('#inputStartAddressDiv').val("Wharf");

                    $('#inputStartAddressDisabled').val("Wharf");
            }else{
                        $('#inputStartAddressDisabled').hide();
                                $('#inputStartAddressDiv').show();
                                $('#inputStartAddressDisabled').val("");
                                $('#inputStartAddressDiv').val("");

            }





     });

    $('#selectDestType').change(function(){

            $('#DestAddressDiv').show();


             if($('#selectDestType').val() == "Upcountry"){
             $('#DestAddressDiv').show();
                $('#selectDestAddess').show();
                $('#selectDestAddess').val("");
                $('#inputDestAddess').hide();
             }


             else if($('#selectDestType').val() =="Local"){

               $('#DestAddressDiv').show();
               $('#selectDestAddess').hide();
               $('#inputDestAddressDiv').show();
               $('#inputDestAddess').show();
               $('#selectDestAddess').val("Lagos");
               $('#inputDestAddess').val("Lagos");


             }else{
                   $('#DestAddressDiv').hide();
                   $('#selectDestAddess').val("");
                   $('#inputDestAddess').val("");
             }



             });





 $('#selectDestAddess').change(function(){



             $('#inputDestAddess').val($('#selectDestAddess').val());

             });










                    $('#tonageDiv').hide();
                    $('#tonageInput').val("");



$('#tonage').change(function(){
var selectedTonage = $(this).children("option:selected").val()

            if(selectedTonage == "Other"){
                    $('#tonageDiv').show();
                   $('#tonageInput').val("");


             }else{
                $('#tonageInput').val(selectedTonage);
                $('#tonageDiv').hide();



            }





     });

});
