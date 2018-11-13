/**
 * Created by Wallace on 2017/6/13 0013.
 */
$(function () {

    $('.scroll').slimScroll({
        height:'700px'
    });

    $('.addBtn').on('click',function(){
        var length = $('.experience').length;
        var $this = $(this);
        if(length>=3){
            return
        }
        $this.before('<input type="text" placeholder="工作经历" class="experience"/>');
    });
});
