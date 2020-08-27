var newsList = [];
function add(val){
    if(val != ""){
        if(newsList.includes(val)){
            alert("news already exist.");
        }else{
            newsList.push(val);
            console.log("add",newsList);
            ShowForm();
        }
        document.getElementById('UpdateText').value = "";
    }else{
        alert("Please enter some news")
    }
}

function ShowForm(){
    
    text=document.createElement('input')
    text.type='text'
    text.id='t1'
    document.getElementById('UpdateMain').replaceChild(text,document.getElementById("Button_02"))
    var sub=document.createElement('button')
    sub.setAttribute('onclick','updatenews()')
    document.getElementById('UpdateMain').removeChild(document.getElementById('Button_01'))
    sub.id='b1'
    sub.style.height='auto'
    sub.style.width='auto'
    sub.innerHTML="Update"


    document.getElementById('UpdateMain').appendChild(sub)
    console.log(sub)
    
}

function updatenews(){
    if(text.value === ''){
        alert("Enter some Text");
    }
    else{
    console.log(text.value);
    var marking=document.getElementsByTagName('marquee');
   // marking.innerHTML='aaaaaa';
    console.log(marking);
    var list=document.createElement('li')
    // marking.appendChild(li);
    
    list.innerHTML=text.value
    
    marking[0].appendChild(list);
    // console.log(typeof document.getElementById('NewsTable'));
    // console.log(typeof document.getElementById('NewsTable').firstChild);

    
    document.getElementById('NewsTable').insertBefore(list,document
        .getElementById('NewsTable').firstChild)
    var button=document.createElement('button')
    button.innerHTML='Submit'
    button.setAttribute('onclick','ShowForm()')
    button.id='Button_02'
    document.getElementById('UpdateMain').appendChild(button)
    var button1=document.createElement('button')
    button1.innerHTML='remove'
    button1.setAttribute('onclick','removeNews()')
    button1.id='Button_01'
    document.getElementById('UpdateMain').appendChild(button1)
    document.getElementById('UpdateMain').removeChild(document.getElementById('b1'))
    document.getElementById('UpdateMain').removeChild(document.getElementById('t1'))
    
    }
}



function removeNews(){
    t=document.createElement('input')
    t.type='text'
    t.id='t2'
    document.getElementById('UpdateMain').replaceChild(t,document.getElementById("Button_01"))
    var s=document.createElement('button')
    s.setAttribute('onclick','removenews()')
    document.getElementById('UpdateMain').removeChild(document.getElementById('Button_02'))
    s.id='b2'
    s.style.height='auto'
    s.style.width='auto'
    s.innerHTML="Remove"
    document.getElementById('UpdateMain').appendChild(s)
    console.log(s)
    

}

function removenews(){
    if(t.value === ''){
        alert("Enter some Text");
    }
    else{
    var val = parseInt(t.value)-1
    var nu=document.createElement('button')
    nu.innerHTML='Remove'
    document.getElementById('NewsTable').removeChild(document.getElementById('NewsTable').childNodes[val]); 
    var button=document.createElement('button')
    button.innerHTML='remove'
    button.setAttribute('onclick','removeNews()')
    button.id='Button_01'
    document.getElementById('UpdateMain').appendChild(button)
    document.getElementById('UpdateMain').removeChild(document.getElementById('b2'))
    document.getElementById('UpdateMain').removeChild(document.getElementById('t2'))
    var button2=document.createElement('button')
    button2.innerHTML='Submit'
    button2.setAttribute('onclick','ShowForm()')
    button2.id='Button_02'
    document.getElementById('UpdateMain').appendChild(button2)
  
}
}



//form

function openForm() {
  
    document.getElementById("myForm").style.display = "block";
   
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  
 




function addData(name  , linkedin , insta , twiter,github) {

    document.getElementById("myForm").style.display = "none";

var sectionTeam = document.getElementById("section2");
var mainStudentDiv = document.getElementsByClassName("container mt-4")
    
    var mainStudentAdd1 = document.getElementsByClassName("row")[0] ;
    console.log(mainStudentAdd1) ;

    var memCard = document.createElement("div") ;
    memCard.className = "col-md-4 col-sm-6" ;

     var memCard1 = document.createElement("div") ;
     memCard1.className ="our-team" ;

     
     //imagediv
     var memCardimg = document.createElement("div") ;
     memCardimg.className ="pic" ;


    var memImage = document.createElement("img") ;
    memImage.src ="ooo1.jpg" ;

     memImage.alt ="Image not found" ;

     
     memCardimg.appendChild(memImage);

     //unorderlist
     var unorder = document.createElement("ul") ;
     unorder.className = "social" ;

     
     var a1 = document.createElement('a');
     a1.href = linkedin;
     a1.target = "_blank";
     a1.className = "fa fa-linkedin";

     var a2 = document.createElement('a');
     a2.href = insta;
     a2.target = "_blank";
     a2.className = "fa fa-instagram";

     
     var a3 = document.createElement('a');
     a3.href = twiter;
     a3.target = "_blank";
     a3.className = "fa fa-twitter";

     var a4 = document.createElement('a');
     a4.href = github;
     a4.target = "_blank";
     a4.className = "fa fa-github"

    
    
     var l1 = document.createElement('li');
     l1.appendChild(a1);

     var l2 = document.createElement('li');
     l2.appendChild(a2);

     var l3 = document.createElement('li');
     l3.appendChild(a3);

     var l4 = document.createElement('li');
     l4.appendChild(a4);

     unorder.appendChild(l1);
     unorder.appendChild(l2);
     unorder.appendChild(l3);
     unorder.appendChild(l4);

    //  <div class="team-content">
    //                           <h3 class="title">Yamini Vyas</h3>
    //                           <span class="post">MERN Full Stack Fellow</span>
    // </div>

    var tmCon = document.createElement('div');
    tmCon.className="team-content";
    var heading = document.createElement('h3');
    heading.innerHTML=name;
    tmCon.appendChild(heading);
    var desg = document.createElement('span');
    desg.innerHTML="MERN Full Stack Fellow";
    tmCon.appendChild(desg);

   
 
    memCard1.appendChild(memCardimg);
    memCard1.appendChild(unorder);
    memCard1.appendChild(tmCon);
 
    memCard.appendChild(memCard1);
    mainStudentAdd1.appendChild(memCard);

    mainStudentDiv.appendChild(mainStudentAdd1);

    sectionTeam.appendBefor(mainStudentDiv);

   


   

    console.log(mainStudentAdd1);
}


   
 