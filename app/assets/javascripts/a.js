function createFunction(child)
{
    $("#parent_field").val(child);
}

function editFunction(childObj)
{
    $('.edit_category').attr('id', "edit_category_"+childObj);
    $('.edit_category').attr('action', "/categories/"+childObj); // .submit()
    $('.edit_category').attr('method', "put");
    $.get("/categories/get_category", {'id': childObj}, function(data) {
        console.log(data.name);
        $("#cat_name_field").val(data.name);
    },"json");
    $("#category_edit").modal("hide");
}

var ready;
ready = function() {
  $("#photo_link").on("click", function() {
     $('#imagepreview').attr('src', $(this).find('img').attr('src')); // here asign the image to the modal when the user click the enlarge link
     $('#photo_modal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
  });

  $(".pop").on("click", function() {
     $('#imagepreview').attr('src', $(this).find('img').attr('src')); // here asign the image to the modal when the user click the enlarge link
     $('#photo_modal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
  });
}
$(document).ready(ready);
$(document).on('page:load', ready);

// $(function(childObj) {
//   $('#category_edit').on('shown.bs.modal', function (event) {
//     console.log($(this));
//     $(this).attr('id', "edit_category_"+childObj);
//     $(this).attr('action', "/categories/"+childObj);
//     $(this).attr('method', "patch");
//     $.get("get_category.js", {'id': 86}, function( data ) {
//       // $( ".result" ).html( data );
//       console.log(data);
//     });
//   });
// })
