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

$(document).on('ready page:load', function (){
 $('li img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';

        //Start of new code
        var index = $(this).parent('li').index();
        var html = '';
        html += img;
        html += '<div style="height:25px;clear:both;display:block;">';
        html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
        html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
        html += '</div>';


        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(html);
            var total = $('ul.row li').length + 1;
            //hide next button
            if(total == $('a.next').attr('href')){
                $('a.next').hide();
            }else{
                console.log($('a.next').attr('href'));
                $('a.next').show()
            }
            //hide previous button
            if($('a.previous').attr('href') == 0){
                $('a.previous').hide();
            }else{
                $('a.previous').show()
            }
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });
   });
});

  $(document).on('click', 'a.controls', function(){
     //this is where we add our logic
    var index = $(this).attr('href');
    var src = $('ul.row li:nth-child('+ index +') img').attr('src');
    $('.modal-body img').attr('src', src);

    var newPrevIndex = parseInt(index) - 1;
    var newNextIndex = parseInt(newPrevIndex) + 2;

    console.log(index);
    console.log(newPrevIndex);
    console.log(newNextIndex);
    if($(this).hasClass('previous')){
        $(this).attr('href', newPrevIndex);
        $('a.next').attr('href', newNextIndex);
    }
    else{
        $(this).attr('href', newNextIndex);
        $('a.previous').attr('href', newPrevIndex);
    }

    var total = $('ul.row li').length + 1;
    //hide next button
    if(total == newNextIndex){
        $('a.next').hide();
    }else{

        $('a.next').show()
    }
    //hide previous button
    if(newPrevIndex == 0){
        $('a.previous').hide();
    }else{
        $('a.previous').show()
    }

    return false;

  });




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
