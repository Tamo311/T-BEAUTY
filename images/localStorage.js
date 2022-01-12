
//================== send information to the block by local storige

let btn=document.getElementById("submit")
let email=document.getElementById("email")
let about=document.getElementById("about")
let arr=[];
let counter=1
btn.addEventListener("click",function(e){
    e.preventDefault()
    let objUser={
        id:counter++,
        email_address:email.value,
        moreInfo:about.value
    }
    document.getElementById("user_info").style.transform="scale(1)"  
    arr.push(objUser)
    localStorage.setItem('users', JSON.stringify(arr))
    location.reload()                                      
})                              

let userInfo=JSON.parse(localStorage.getItem(`users`)) 
for(let i=0; i<userInfo.length; i++){
    let span1=document.getElementById("entered_email")
    let span2=document.getElementById("entered_MoreInfo")
    span1.innerText=userInfo[i].email_address
    span2.innerText=userInfo[i].moreInfo
    document.getElementById("user_info_h2").innerText="YOUR INFORMATION"

    //=============delete information
    function reset_info(){
        let reset=document.getElementById("reset")
    reset.addEventListener("click", ()=>{
        localStorage.clear()
        ///  location.reload()
        span1.innerText=""
        span2.innerText=""
        document.getElementById("user_info_h2").innerText="NO INFORMATION"
    })
    }  
}
reset_info()