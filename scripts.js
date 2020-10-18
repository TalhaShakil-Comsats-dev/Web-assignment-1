
var index;

function addRow()
{
    
    var name=document.getElementById("name").value;
    
    var gender=document.querySelector("input[name='gender']:checked").value;

    var age=document.getElementById("age").value;
    
    var city=document.getElementById("city").value;

   

    var table=document.getElementById("table1");

    var action=document.createElement("a");
    action.setAttribute("href","#");
    action.appendChild(document.createTextNode("Update"));
    
    action.onclick=update;
    
    var action1=document.createElement("a");
    action1.setAttribute("href","#");
    action1.appendChild(document.createTextNode("Remove"));
    
    action1.onclick=R_row;
    
    
    var newRow=table.insertRow(1);
 
    var a=newRow.insertCell(0);
    
    var x=newRow.insertCell(1);
    
    var y=newRow.insertCell(2);
    
    var z=newRow.insertCell(3);

    var t=newRow.insertCell(4);

    t.appendChild(action);
    t.appendChild(document.createTextNode(" / "));
    t.appendChild(action1);
    
    a.innerHTML=name;
    x.innerHTML=gender;
    y.innerHTML=age;
    z.innerHTML=city;

    document.getElementById("name").value="";
    document.querySelector("input[name='gender']:checked").checked=false;
    document.getElementById("age").value="";
    document.getElementById("city").value="";

}


function resetAll()
{
    const btnAdd=document.getElementById("addbtn");
    btnAdd.disabled = false;

    const btnUpdate=document.getElementById("updatebtn");
    btnUpdate.disabled = true;
    
    
    document.getElementById("name").value="";
    document.getElementById("genderM").checked = false;
    document.getElementById("genderF").checked = false;
    document.getElementById("age").value="";
    document.getElementById("city").value="";

}


function R_row()
{
    
        var row = document.activeElement.parentNode.parentNode;
        row.parentNode.removeChild(row);
    
}

function update()
{
    index = document.activeElement.parentNode.parentNode.rowIndex;

    btnAdd=document.getElementById("addbtn");
    btnAdd.disabled=true;
    
    btnAdd=document.getElementById("updatebtn");
    btnAdd.disabled=false;

    var row = document.activeElement.parentNode.parentNode;
    document.getElementById("name").value=row.cells[0].innerHTML;
    if(row.cells[1].innerHTML == "Male") {
        document.querySelector("input[id='genderM']").checked = true;
    } else {
        document.querySelector("input[id='genderF']").checked = true;
    }
    document.getElementById("age").value=row.cells[2].innerHTML;
    document.getElementById("city").value=row.cells[3].innerHTML;
}

function updateInfo()
{
    const btnAdd=document.getElementById("addbtn");
    btnAdd.disabled = false;

    const btnUpdate=document.getElementById("updatebtn");
    btnUpdate.disabled = true;
    
    var table=document.getElementById("table1");
    
    var name=document.getElementById("name").value;
    
    var gender=document.querySelector("input[name='gender']:checked").value;

    var age=document.getElementById("age").value;
    
    var city=document.getElementById("city").value;

    

    table.rows[index].cells[0].innerHTML=name;
    table.rows[index].cells[1].innerHTML=gender;
    table.rows[index].cells[2].innerHTML=age;
    table.rows[index].cells[3].innerHTML=city;

    document.getElementById("name").value="";
    document.getElementById("genderM").checked = false;
    document.getElementById("genderF").checked = false;
    document.getElementById("age").value="";
    document.getElementById("city").value="";


}    
  
        





