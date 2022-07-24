/* ------------------------------------------SIDE MENU------------------------------------------------------------- */
$('#menu').click(function() 
{ 
  $('.wNav').fadeIn(1)
  $('.blackNav').fadeIn(1) 
$('#menu').hide(0,function()
{
$("#close").css('display','block');
$(".navMenu .option1").animate({opacity:"1",paddingTop:"25px"},1100),
$(".navMenu .option2").animate({opacity:"1",paddingTop:"25px"},1300),
$(".navMenu .option3").animate({opacity:"1",paddingTop:"25px"},1500),
$(".navMenu .option4").animate({opacity:"1",paddingTop:"25px"},1700),
$(".navMenu .option5").animate({opacity:"1",paddingTop:"25px"},1900),
$(".navMenu .option6").animate({opacity:"1",paddingTop:"25px"},2000)})
})
let width=$(".blackNavv").outerWidth(true)
console.log(width);
/**/
$('#close').click(function() 
{$('.blackNav').fadeOut(1)
$('.wNav').css('left',0)
$('#close').hide(0,function()
{
$("#menu").css('display','block');
})
})
/**/
$('a[href^="#"]').click(function()
{
    let aHref = $(this).attr('href');
    let offset =$(aHref).offset().top
    console.log(offset);
    $('html,body').animate({scrollTop:offset},100);
})
$('.option1').click(function()
{
    myRequests.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44") 

    myRequests.send()    
    myRequests.addEventListener("readystatechange",function() 
    {
        if(myRequests.status==200 && myRequests.readyState==4)
        {   movies = JSON.parse(myRequests.response).results;
            displayMovies()
            console.log(movies); 
        }
    })
})
$('.option2').click(function()
{
    myRequests.open("GET","https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44") 

    myRequests.send()    
    myRequests.addEventListener("readystatechange",function() 
    {
        if(myRequests.status==200 && myRequests.readyState==4)
        {   movies = JSON.parse(myRequests.response).results;
            displayMovies()
            console.log(movies); 
        }
    })
})
$('.option3').click(function()
{
    myRequests.open("GET","https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44") 

    myRequests.send()    
    myRequests.addEventListener("readystatechange",function() 
    {
        if(myRequests.status==200 && myRequests.readyState==4)
        {   movies = JSON.parse(myRequests.response).results;
            displayMovies()
            console.log(movies); 
        }
    })
})
$('.option4').click(function()
{
    myRequests.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44") 

    myRequests.send()    
    myRequests.addEventListener("readystatechange",function() 
    {
        if(myRequests.status==200 && myRequests.readyState==4)
        {   movies = JSON.parse(myRequests.response).results;
            displayMovies()
            console.log(movies); 
        }
    })
})


/* ---------------------------------------------SEARCH---------------------------------------------------------------- */
movies=[];
let searchVal = document.getElementById("onbtn")
function search()
{
for(var i=0 ; i<movies.length; i++)
{ let cup=``;
if(movies[i].original_title.toLowerCase().includes(searchVal.value.toLowerCase())==true)
{
    cup += `<div class="col-md-6 col-lg-4 my-3 itms ">
    <div class="itm">
      <img class='w-100' src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="">
      <div class="overlay">
         <h2>${movies[i].original_title}</h2>
         <p>${movies[i].overview}</p>
         <h5>rate:${movies[i].vote_average}</h5>
         <h5>${movies[i].release_date}</h5>
      </div>
      </div>
     </div>`
}
else
{
    console.log('not found');
}
document.getElementById("myRow").innerHTML = cup
}}


/* ----------------------------------------------API----------------------------------------------------------------- */


let myRequests = new XMLHttpRequest() //1-object mogot fi ay website btedeny Methods() t5leny at3aml m3a el JSON & without RELOAD

myRequests.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44") //2-aft7 el JSON da w GET mno el data "b3ml 'connection' b3ml 7l2t wsl beny wben el database"

myRequests.send()    //3-bb3t el REQUEST 
/*
myRequests.readyState  //->bit2aked en kul el 'states' bta3t el request mr biha w 'lazem kul el mral tnfz s7'
myRequests.status     //->just for cheking of URL only
readystatechange     //->el event da bi4t8l m3 kul t8ieer fi el readyState
*/
myRequests.addEventListener("readystatechange",function() //for checking that data is complite and true
{
    if(myRequests.status==200 && myRequests.readyState==4)
    {   movies = JSON.parse(myRequests.response).results;
        displayMovies()
        console.log(movies); //el data btegy by it
    }
})

function displayMovies()
{
    let cup = ``;
 for(let i=0 ; i<movies.length ; i++)
 {
    cup += `<div class="col-md-6 col-lg-4 my-3 itms ">
    <div class="itm">
      <img class='w-100' src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="">
      <div class="overlay">
         <h2>${movies[i].original_title}</h2>
         <p>${movies[i].overview}</p>
         <h5>rate : ${movies[i].vote_average}</h5>
         <h5>${movies[i].release_date}</h5>
      </div>
      </div>
     </div>`
 }   
 document.getElementById("myRow").innerHTML = cup
}


/* --------------------------------------------------------VALIDATION FORM----------------------------------------------------------------- */

//====NAME=========================================
let userName = document.getElementById('validationServer01')
let regexName = /[A-Z][a-z]/
userName.addEventListener('keyup',function()
{
   let test1 = regexName.test(userName.value)
   console.log(test1);
   if(test1==false)
   {
    userName.classList.add('is-invalid')
    userName.classList.remove('is-valid')
   }
   else
   {
    userName.classList.remove('is-invalid')
    userName.classList.add('is-valid')
   }
})
//=====EMAIL=========================================
let userEmail = document.getElementById('validationServer02')
let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
userEmail.addEventListener('keyup',function()
{
    let test2 = regexEmail.test(userEmail.value)
    if(test2==false)
    {
        userEmail.classList.add('is-invalid')
        userEmail.classList.remove('is-valid')
    }
    else
    {
        userEmail.classList.remove('is-invalid')
        userEmail.classList.add('is-valid')
    }
})

// =====PHONE=======================================
let userPhone = document.getElementById('validationServer03')
let regexPhone =/01[0125][0-9]{8}/
let alertPhone = document.getElementById('alertPhone')
userPhone.addEventListener('keyup',function()
{ 
    let test3  = regexPhone.test(userPhone.value)
    if(test3==false)
    {   userPhone.classList.add('is-invalid')
        // alertPhone.style.cssText = `display:block !important`
    } 
    else
    {   userPhone.classList.remove('is-invalid')
        userPhone.classList.add('is-valid')
        // alertPhone.style.cssText = `display:none !important`
    }
})
//====AGE=========================================
let userAge = document.getElementById('validationServer04')
let regexAge = /^(1[0-9]|[2-9][0-9])$/
userAge.addEventListener('keyup',function()
{
    let test4 = regexAge.test(userAge.value)
    if(test4==false)
    {
        userAge.classList.add('is-invalid')
        userAge.classList.remove('is-valid')
    }
    else
    {
        userAge.classList.remove('is-invalid')
        userAge.classList.add('is-valid')
    }
})
//====PASSWORD=========================================
let userPass = document.getElementById('validationServer05')
let regexPass = /^[A-Za-z 0-9]\w{7,14}$/
userPass.addEventListener('keyup',function()
{
    let test5 = regexPass.test(userPass.value)
    if(test5==false)
    {
        userPass.classList.add('is-invalid')
        userPass.classList.remove('is-valid')
    }
    else
    {
        userPass.classList.remove('is-invalid')
        userPass.classList.add('is-valid')
    }
})
//====CONFIRM PASSWORD=================================
let userConfirmPass = document.getElementById('validationServer06')
userConfirmPass.addEventListener('keyup',function()
{  
    if(userConfirmPass.value!=userPass.value)
{
   
    userConfirmPass.classList.add('is-invalid')
    userConfirmPass.classList.remove('is-valid')
}else{
    userConfirmPass.classList.add('is-valid')
    userConfirmPass.classList.remove('is-invalid')
}
})
