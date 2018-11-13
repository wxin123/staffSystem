/**
 * Created by Wallace on 2017/6/13 0013.
 */
$(function(){

    $('.list-remark').slimScroll({
        height:'400px'
    });

    layui.use(['laypage','layer'],function(){
        var laypage = layui.laypage;
        var layer = layui.layer;
        laypage({
            cont: $('.page')
            ,pages: 10
        });


        $('.edit').on('click', function () {
            var index = layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                shade: 0.3,
                area: ['500px', '300px'],
                content: $('.modal-edit')
            });
            $('.sureBtn').on('click', function () {
                layer.close(index);
            });
            $('.closeBtn').on('click', function () {
                layer.close(index);
            });
        });
        $('.detail').on('click', function () {
            var index = layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                shade: 0.3,
                area: ['780px', '520px'],
                content: $('.modal-detail')
            });
            $('.sureBtn').on('click', function () {
                layer.close(index);
            });
            $('.closeBtn').on('click', function () {
                layer.close(index);
            });
        });
        $('.remark').on('click', function () {
            var index = layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                shadeClose: true,
                shade: 0.3,
                area: ['500px', '300px'],
                content: $('.modal-remark')
            });
            $('.sureBtn').on('click', function () {
                layer.close(index);
            });
            $('.closeBtn').on('click', function () {
                layer.close(index);
            });
        })

    })
})
