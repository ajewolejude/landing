

$(document).ready(function() {
    // get current URL path and assign 'active' class
    $('#dryCargoDiv').hide();
    $('#truck_type').val("")





$('#truck_type').change(function(){

            if($('#truck_type').val() == "Dry"){
                    $('#dryCargoDiv').show();




            }else if ($('#truck_type').val() == "Wet"){
                  $('#dryCargoDiv').hide();
            }else{

                $('#dryCargoDiv').hide();
                    $('#truck_sub_type').val("");
                    $('#truck_type').val("");
            }





     });






     });