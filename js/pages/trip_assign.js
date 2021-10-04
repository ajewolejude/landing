

$(document).ready(function() {




$('#selectTruck').change(function(){
                        var id = $('#selectTruck').val();
                         var real_url = "/truck/"+id+"/workers";

                                 $.ajax({
                                     type:'GET',
                                     url : real_url,
                                     success: function(data){


                                        var real_url2 = "/truck/"+data.driver_id+"/driver";
                                        var real_url3 = "/truck/"+data.mate_id+"/mate";

                                           $.ajax({
                                                 type:'GET',
                                                 url : real_url2,
                                                 success: function(data2){
                                                    $('#inputDriver').val(data2.id);
                                                    $('#inputDriverDisabled').val(data2.first_name+" "+data2.last_name);

                                                 },
                                                  error: function(jqXHR, exception) {

                                                    if (jqXHR.status === 0) {
                                                        alert('Not connect.\n Verify Network.');
                                                    } else if (jqXHR.status == 404) {
                                                        alert('Requested page not found. [404]');
                                                    } else if (jqXHR.status == 500) {
                                                        alert('Not connected.\n You need internet connection.');
                                                    } else if (exception === 'parsererror') {
                                                        alert('Requested JSON parse failed.');
                                                    } else if (exception === 'timeout') {
                                                        alert('Time out error.');
                                                    } else if (exception === 'abort') {
                                                        alert('Ajax request aborted.');
                                                    } else {
                                                        alert('Uncaught Error.\n' + jqXHR.responseText);
                                                    }
                                                }

                                             });


                                           $.ajax({
                                                type:'GET',
                                                url : real_url3,
                                                success: function(data3){

                                                   $('#inputMate').val(data3.id);
                                                   $('#inputMateDisabled').val(data3.first_name+" "+data3.last_name);

                                                },
                                                 error: function(jqXHR, exception) {

                                                   if (jqXHR.status === 0) {
                                                       alert('Not connect.\n Verify Network.');
                                                   } else if (jqXHR.status == 404) {
                                                       alert('Requested page not found. [404]');
                                                   } else if (jqXHR.status == 500) {
                                                       alert('Not connected.\n You need internet connection.');
                                                   } else if (exception === 'parsererror') {
                                                       alert('Requested JSON parse failed.');
                                                   } else if (exception === 'timeout') {
                                                       alert('Time out error.');
                                                   } else if (exception === 'abort') {
                                                       alert('Ajax request aborted.');
                                                   } else {
                                                       alert('Uncaught Error.\n' + jqXHR.responseText);
                                                   }
                                               }

                                            });








                                     },
                                      error: function(jqXHR, exception) {

                                                                                                if (jqXHR.status === 0) {
                                                                                                    alert('Not connect.\n Verify Network.');
                                                                                                } else if (jqXHR.status == 404) {
                                                                                                    alert('Requested page not found. [404]');
                                                                                                } else if (jqXHR.status == 500) {
                                                                                                    alert('Not connected.\n You need internet connection.');
                                                                                                } else if (exception === 'parsererror') {
                                                                                                    alert('Requested JSON parse failed.');
                                                                                                } else if (exception === 'timeout') {
                                                                                                    alert('Time out error.');
                                                                                                } else if (exception === 'abort') {
                                                                                                    alert('Ajax request aborted.');
                                                                                                } else {
                                                                                                    alert('Uncaught Error.\n' + jqXHR.responseText);
                                                                                                }
                                                                                            }

                                 });




                     });




});



