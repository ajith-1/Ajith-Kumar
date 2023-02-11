
//Button Onclick Event Function 
function show(){

  const inputBox=document.getElementById('inputBox');
let inputValue=inputBox.value;
if(inputValue.length==0){
  alert("Please Enter Your Email")
  document.getElementById('card').style.display="none";

}
else{
document.getElementById('card').style.display="block";
}

// Fetching Value From API 

var url=`https://gorest.co.in/public/v2/users?email=${inputValue}`
fetch(url)
  .then((res)=>{
  return res.json();
}).then((data)=>{
  catdFn(data);
}).catch((error)=>{
     alert("There Is No Data From The Given Email");
})
}

// Function to display data 
function catdFn(data){
  for(let i=0;i<data.length;i++){
    document.getElementById('name').innerHTML=`${"Name : "+data[i].name}`
    document.getElementById('id').innerHTML=`${"ID : "+data[i].id}`
    document.getElementById('email').innerHTML=`${"Email : "+data[i].email}`
    document.getElementById('gender').innerHTML=`${"Gender : "+data[i].gender}`
    document.getElementById('status').innerHTML=`${"Status : "+data[i].status}`

  }
}
