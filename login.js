var idPass = false;

$('#id').on('keyup', function(){
    // alert($(this).val());  // $(this).val() == this.value
    // 아이디 입력란에 입력된 값 :  $(this).val() == this.value
   let idValue = $(this).val();
    if(idValue.length == 0){
        $('#msg_id').text('');
        idPass = false;
    } else if(idValue.length < 4){
        $('#msg_id').text('아이디는 4자 이상입니다.').css('color', '#FF0000').css('font-size', '14px');
        idPass = false;
    } else {
        $('#msg_id').text('정상적인 아이디입니다.').css('color', '#0000FF').css('font-size', '14px');
        idPass = true;
    }
    // 위에 펄스트루를 3번 써도 되고 
    // idPass = idValue.length >= 4; 이렇게 한번에 끝내도 됨
})

$('#frm_login').on('submit', function(event){
    if(idPass == false){
        alert('아이디를 확인하세요.');
        event.preventDefault(); // submit이벤트를 말함
        return;
    }

    if($('#pw').val() == ''){
        alert('비밀번호를 입력하세요.');
        event.preventDefault();
        return;
    }
})