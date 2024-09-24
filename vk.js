const length = document.querySelector('#length');
const upr= document.querySelector('#upprcase');
const lwr = document.querySelector('#lowercase');
const num = document.querySelector('#number');
const spl = document.querySelector('#spl');
const inp = document.querySelector('#inp');
const copy = document.querySelector('#copy');
const make = document.querySelector('#make');

console.log(length.value)
console.log(upr.checked)
console.log(lwr.checked)
console.log(num.checked)
console.log(spl.checked)

const uprstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lwrstr="abcdefghijklmnopqrstuvwxyz";
const numstr = "0123456789"
const splstr = "!@#$%&/?\|";

make.addEventListener('click',() => {
    let str = "";
    if(upr.checked){
        str += uprstr;

    }
    if(lwr.checked){
        str += lwrstr;

    }
    if(num.checked){
        str += numstr;


    }
    if(spl.checked){
        str += splstr;


    }

    console.log(str,"str")
    let password = "";
    for(let i=0; i<=length.value; i++)
        {
        console.log(str.length,"str.length")
        let index = Math.floor(Math.random()*str.length)
        console.log(index,"index")
        console.log("Math.random()",Math.random())
        console.log("Math.random()*str.length)",Math.random()*str.length)
        console.log("Math.floor(Math.random()*str.length",Math.floor(Math.random())*str.length)
        console.log(str[index]);
        password += str[index];
    }
    console.log(password,"password");
    inp.value=password;
});
copy.addEventListener('click',()=>{
    if(inp.value==''){
        alert('please genterate password first')
    }else{
    const newele = document.createElement('textarea');
    newele.value = inp.value;
    document.body.appendChild(newele);
    newele.select();
    document.execCommand('copy');
    alert('passwoed is copy');
    newele.remove();
    }
})
