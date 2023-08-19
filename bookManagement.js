let form = document.forms[0];
const students=[];
let count=1;
let inputs =document.querySelectorAll("form input");
 form.addEventListener("submit",addStudent);
 function addStudent(e){
    e.preventDefault();
  let name = form["name"].value;
  let email = form["email"].value;
  let gpa = form["gpa"].value;
  let age = form["age"].value;
  let degree = form["degree"].value;
  let obj = createObj(name,email,gpa,age,degree);
  addObjToArray(obj);
  addToTable(obj);

  inputs.forEach(input => {
    input.value = '';
  });
  count++;
 }

function createObj(name,email,gpa,age,degree){
    let obj ={
        "id": count,
         "name":name,
         "email":email,
         "gpa" : gpa,
         "age": age,
         "degree":degree
    }
    return obj;
}

function addObjToArray(obj){
    students.push(obj);
}

function addToTable(obj){ 
    let bid = document.getElementById("ID");
    bid.innerHTML=  bid.innerHTML+`<p>${obj.id}</p>`;
    let bname = document.getElementById("NAME");
    bname.innerHTML= bname.innerHTML+`<p>${obj.name}</p>`;
    let bemail = document.getElementById("EMAIL");
    bemail.innerHTML= bemail.innerHTML+`<p>${obj.email}</p>`;
    let bgpa = document.getElementById("GPA");
    bgpa.innerHTML= bgpa.innerHTML+`<p>${obj.gpa}</p>`;
    let bage = document.getElementById("AGE");
    bage.innerHTML=bage.innerHTML+`<p>${obj.age}</p>`;
    let bdegree = document.getElementById("DEGREE");
    bdegree.innerHTML=bdegree.innerHTML+`<p>${obj.degree}</p>`;
}