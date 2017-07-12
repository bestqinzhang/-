function show(){
    $('tbody').children().remove();
    $.ajax({
        url:'/admin/getallnews',
        type:'get',
        success:function(data){
            for(var i=0;i<data.length;i++){
                var tr = $('<tr></tr>');
                var time=data[i].time.split("T")[0]
                console.log(data)
                $('<td></td>').text(data[i].id).appendTo(tr);
                $('<td></td>').text(data[i].title).appendTo(tr);
                $('<td></td>').text(time).appendTo(tr);
                var btn = $('<button data-toggle="modal" data-target=".bs-example-modal-lg"></button>').text('删除').addClass('btn btn-danger btn-delete')
                var td = $('<td></td>');
                btn.appendTo(td);
                td.appendTo(tr);
                tr.appendTo($('tbody'));
                }
            }
        })
}

// 显示所有数据
$(document).ready(function(){
    show()
});




//点击删除
$('tbody').on('click','button',function(e){
    // console.log($(this).parent().parent().find('td').eq(0).text())
    delID = $(this).parent().prevAll().eq(2).html();
    $('#myModal').modal("show");

    e.stopPropagation();

})

 $('#myModal .btn-danger').eq(0).click(function(){

     $.ajax({
            url:'/admin/delete',
            type:'post',
            data:{id:delID},
            success:function(data){

                }
            })
      $("#myModal").modal("hide");
      show();
 })
 //添加
isInsert=true;

//修改

$('tbody').on('click','tr',function(){
    var num=$('tr').index($(this))-1;
    newsid=$(this).find('td').eq(0).html();
    $.ajax({
        url:'/admin/getallnews',
        type:'get',
        success:function(data){
            // console.log($(data)[num].id)
            var time=data[num].time.split("T")[0]

            $('#title_val').val($(data)[num].title);
            $('#textarea_val').val($(data)[num].content);
            $('#address_val').val($(data)[num].地址);
            $('#src_val').val($(data)[num].src);
            $('#time_val').val(time);
            $('#news_type').val($(data)[num].type);
            isInsert = false;
        }
    });
})

$('.addNew').click(function(){
    if(isInsert){
        $.ajax({
        url:'/admin/addnews',
        type:'post',
        data:{
            title:$('#title_val').val(),
            content:$('#textarea_val').val(),
            address:$('#address_val').val(),
            src:$('#src_val').val(),
            time:$('#time_val').val(),
            type:$('#type_val').val()
        },
        success:function(){
            show();
            $('#title_val').val('');
            $('#textarea_val').val('');
            $('#address_val').val('');
            $('#src_val').val('');
            $('#time_val').val('');
            $('#type_val').val('');
        }
    });
    }else{
        $.ajax({
        url:'/admin/modify',
        type:'post',
        data:{
            title:$('#title_val').val(),
            content:$('#textarea_val').val(),
            address:$('#address_val').val(),
            src:$('#src_val').val(),
            time:$('#time_val').val(),
            type:$('#type_val').val(),
            id:newsid
        },
        success:function(){
            $('#title_val').val('');
            $('#textarea_val').val('');
            $('#address_val').val('');
            $('#src_val').val('');
            $('#time_val').val('');
            $('#type_val').val('');
            id=0;
            show();
            isInsert = true;
        }
    });
    }
})






