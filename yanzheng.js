function check(){
    var name,psw;
    name=document.getElementById("yhm").value;
    psw=document.getElementById("mm").value;
    if(name=="nxj"&&psw=="123456"){
        alert("登录成功！");
        window.location.href="./index.html";
    }
    else{
        alert("用户名或密码出错！");
        return;
    }
}