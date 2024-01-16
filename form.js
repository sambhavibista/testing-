function formData(){
    // e.preventDefault();    

    var full_name = document.getElementById('f_name');
    document.getElementById('f_info').innerHTML = "hello";
    // full_name.style.backgroundColor = "red";
    var f_style = full_name.style;
    full_name.style.fontSize = "20px";
    f_style.backgroundColor ="red";
    f_style.fontSize = "35px";

    console.log(full_name.value);

    var email = document.getElementById('email');
    var email_msg = document.getElementById('e_info');
    // email.style.backgroundColor = "yellow";
    var f_email = email.style;
    f_email.backgroundColor ="dark-blue";
    f_email.fontSize="35px";
    email_msg.innerHTML = "hi";
    console.log(email.value);

    var password = document.getElementById('pass');
    var p_msg = document.getElementById('p_info');
    var f_pass = password.style;
    f_pass.backgroundColor ="green";
    f_pass.fontSize="40px";
    // password.style.backgroundColor = "green";
    p_msg.innerHTML = "okay";
    console.log(password.value);

    var btn = document.getElementById("f_button");
    btn.style.transform='scaleX(0.5)';
    btn.style.transition='all 1s ease-in';
    btn.style.transform='rotate(360deg)';

}
