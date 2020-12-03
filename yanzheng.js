function check(){
    var name,psw;
    name=document.getElementById("yhm").value;
    psw=document.getElementById("mm").value;
    if(name=="nxj"&&psw=="123456"){
        window.location.href="./index.html";
        alert("登陆成功！");
    }
    else{
        alert("用户名或密码出错！");
    }

}