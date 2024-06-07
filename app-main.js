cl("Starting Main App Code");
// Main App Code



// (A) GET HTML TABLE
let table = document.getElementById("datafromcsv");

function pLD(px) {
// (B) AJAX FETCH CSV FILE
fetch(px)
.then(res => res.text())
.then(res => csvData = res)
.then(csv => {
  table.innerHTML = "";
  for (let row of CSV.parse(csv)) {
    let tr = table.insertRow();
    for (let col of row) {
      let td = tr.insertCell();
      td.innerHTML = col;
    }
  }
});
}

// -------------------- End of file -------------------- 
  if (autorun){
cl('...autorun');
  pLD(dLS);
cl('data should be loaded');
  setTimeout(() => {
    pLF();
    cl('Links Done First Round');
  }, 1000);
}else{
    cl('No need to autorun');
}

function rmiDT(){
const element = document.getElementById("iDT");
element.remove(); // Removes thetable with the 'iDT' id
}

//rmiDT();
//goxl();
//createGrid();


cl("Reached End of app-main.js");