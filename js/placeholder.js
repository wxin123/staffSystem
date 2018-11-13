/**
 * Created by Wallace on 2017/6/13 0013.
 */

$(function(){
    // �����֧��placeholder����jQuery�����
    if (!isSupportPlaceholder()) {
// ��������input����, ���������
        $('input').not("input[type='password']").each(
            function () {
                var self = $(this);
                var val = self.attr("placeholder");
                input(self, val);
            }
        );
        /**//* ��password������⴦��
         * 1.����һ��text��
         * 2.��ȡ�����ʧȥ�����ʱ���л�
         */
        $('input[type="password"]').each(
            function () {
                var pwdField = $(this);
                var pwdVal = pwdField.attr('placeholder');
                var pwdId = pwdField.attr('id');
// ��������input��idΪԭid���1
                pwdField.after('<input id="' + pwdId + '1" type="text" value=' + pwdVal + ' autocomplete="off" class="psd" />');
                var pwdPlaceholder = $('#' + pwdId + '1');
                pwdPlaceholder.show();
                pwdField.hide();

                pwdPlaceholder.focus(function () {
                    pwdPlaceholder.hide();
                    pwdField.show();
                    pwdField.focus();
                });

                pwdField.blur(function () {
                    if (pwdField.val() == '') {
                        pwdPlaceholder.show();
                        pwdField.hide();
                    }
                });
            }
        );
    }

// �ж�������Ƿ�֧��placeholder����
    function isSupportPlaceholder() {
        var input = document.createElement('input');
        return 'placeholder' in input;
    }

// jQuery�滻placeholder�Ĵ���
    function input(obj, val) {
        var $input = obj;
        var val = val;
        $input.attr({ value: val });
        $input.focus(function () {
            if ($input.val() == val) {
                $(this).attr({ value: "" });
            }
        }).blur(function () {
            if ($input.val() == "") {
                $(this).attr({ value: val });
            }
        });
    }
});