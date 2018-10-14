function addStudent(){
    var name = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;
    var faculty = document.querySelector('#faculty').value;
    var table = document.querySelector('#students');
    var truefalse=true;
    if(name ===""){
        document.querySelector('#name').classList.add("error"); 
        truefalse=false;
    }
    else
        document.querySelector('#name').classList.remove("error");
    
    if(surname ===""){
        document.querySelector('#surname').classList.add("error"); 
        truefalse=false;
    }
    else
    document.querySelector('#surname').classList.remove("error");

    if(truefalse==true){
    var t = table.insertRow();
    var cell1 = t.insertCell();
    var cell2 = t.insertCell();
    var cell3 = t.insertCell();
    cell1.innerHTML = name;
    cell2.innerHTML = surname;
    cell3.innerHTML = faculty;
    }

}
document.querySelector('button').addEventListener('click',addStudent);
