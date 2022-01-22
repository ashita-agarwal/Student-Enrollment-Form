
function addRow(){
    var nameinput = document.enrollmentform.textname.value;
    var genderinput = document.enrollmentform.gender.value;
    var emailidinput = document.enrollmentform.emailadd.value;
    var websiteLinkinput = document.enrollmentform.weblink.value;
    var checkedBoxes = document.getElementsByName("skill"); 
    
    var imginput = document.enrollmentform.img.value;
   
    var skillinput = ""; 
    for(var i=0;i<checkedBoxes.length;i++ ){
        if(checkedBoxes[i].checked){
            skillinput += checkedBoxes[i].value + ","; 
            
        }
    }
    skillinput = skillinput.slice(0,-1); 

   
    if(nameinput =="" | nameinput ==null ){
        
        window.alert("Please enter your name *Required* ");
        return false;
    }
    else if(emailidinput =="" | emailidinput ==null ){
        
        window.alert("Please enter your email id *Required* ");
        return false;
    }
    else if(websiteLinkinput =="" | websiteLinkinput ==null ){
        
        window.alert("Please enter your websiteLink *Required* ");
        return false;
    }
    else if(genderinput =="" | genderinput ==null ){
        
        window.alert("Please enter your gender *Required* ");
        return false;
    }
    else if(imginput == "" | imginput ==null ){
        
        window.alert("Please enter image link ");
        return false;
    }
    else if(skillinput.length < 1 ){
        
        window.alert("Please select atleast one skill ");
        return false;
    }
    
    
    var tr = document.createElement('tr');
    tr.id= "tablerow"; 
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = `<div  style="display:block"  > 
                        <br>
                        <p><b>${nameinput}</b><br>
                        ${genderinput}<br>
                        ${emailidinput}<br>
                        <a href = "${websiteLinkinput}" target = "_blank" > <u>${websiteLinkinput}</u></a><br>
                        ${skillinput}
                    </div> `;
                    
    td2.innerHTML = `<img src="${imginput}" width="100%" height="100%"> `;
    document.getElementById("righttable").appendChild(tr);
   
}

