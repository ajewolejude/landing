

$(document).ready(function() {
    // get current URL path and assign 'active' class
    $('#repairForm').hide();
          $('#fault').val("");
          $('#fault_type').val("");
          $('#action').val("");
          $('#remark').val("");
          $('#technician').val("");
          $('#date_of_start').val("");
          $('#date_of_end').val("");
          $('#status').val("");
          $('#date_of_endDiv').hide();

    $('#date_of_endDiv').hide();


    $("#newRepairButton").click(function(){
      $('#repairForm').slideDown();
    });

    $("#cancelButton").click(function(){
      $('#repairForm').slideUp();
      $('#fault').val("");
      $('#fault_type').val("");
      $('#action').val("");
      $('#remark').val("");
      $('#technician').val("");
      $('#date_of_start').val("");
      $('#date_of_end').val("");
      $('#status').val("");
      $('#date_of_endDiv').hide();
    });



    $('#status').change(function(){

                    if($('#status').val() == "End"){
                            $('#date_of_endDiv').show();
                            $('#date_of_end').val("") ;
                    }else {
                          $('#date_of_endDiv').hide();
                         $('#date_of_end').val("") ;
                    }





             });


// for parts
    $('#partForm').hide();
          $('#name').val("");
          $('#amount').val("");
          $('#quantity').val("");
          $('#date_of_reg').val("");
          $('#comment').val("");



    $("#newPartButton").click(function(){
      $('#partForm').slideDown();
    });

    $("#cancelPartButton").click(function(){
    $('#partForm').slideUp();
       $('#name').val("");
                $('#amount').val("");
                $('#quantity').val("");
                $('#date_of_reg').val("");
                $('#comment').val("");

    });





     });