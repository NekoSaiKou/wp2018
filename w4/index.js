$('#list_all').click((event) => {
  event.preventDefault()
  $.ajax('ajax.php',{
    method: "get",
    data:{'func':'list','ID':'ALL'},
    success: function(data) {
      $("#list_students").html(data);
    }
  })
})

$('#search').click((event) => {
  var Std_ID = document.getElementById('search_box').value;
  event.preventDefault()
  $.ajax('ajax.php',{
    method: "get",
    data:{'func':'list','ID': Std_ID},
    success: function(data) {
      $("#search_students").html(data);
    }
  })
})

$('#add').click((event) => {
  var Std_ID = document.getElementById('add_ID_box').value;
  var Std_name = document.getElementById('add_name_box').value;
  event.preventDefault()
  $.ajax('ajax.php',{
    method: "post",
    data:{'func':'add','ID': Std_ID,'name': Std_name},
    success: function(data){
      $("#add_students").html(data);
    }
  })
})

$('#delete').click((event) => {
  var Std_ID = document.getElementById('delete_box').value;
  event.preventDefault();
  $.ajax('ajax.php',{
    method: "post",
    data:{'func':'del','ID':Std_ID},
    success:function(data){
      $('#delete_students').html(data);
    }
  })
})
