

$(document).ready(function() {
    // get current URL path and assign 'active' class
    $('#dryCargoDiv').hide();
    $('#purposeDiv').hide();
    $('#truck_type').val("")





$('#truck_type').change(function(){

            if($('#truck_type').val() == "Dry"){
                    $('#dryCargoDiv').show();
                    $('#purposeDiv').hide();
                     $('#purpose').val("") ;




            }else if ($('#truck_type').val() == "Wet"){
                  $('#dryCargoDiv').hide();
                  $('#purposeDiv').show();
                  $('#purpose').val("");
            }else{

                $('#dryCargoDiv').hide();
                    $('#purposeDiv').hide();
                    $('#truck_sub_type').val("");
                    $('#truck_type').val("");
                    $('#purpose').val("") ;

            }





     });

    $('#truck_sub_type').change(function(){



                if($('#truck_sub_type').val() == "Flat Bed"){
                        $('#purposeDiv').show();
                        $('#purpose').text("") ;
                }else if ($('#truck_sub_type').val() == "Low Bed"){
                      $('#purposeDiv').show();
                       $('#purpose').val("") ;
                }else{

                    $('#truck_sub_type').val("");
                    $('#purposeDiv').hide();
                     $('#purpose').val("") ;
                }





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