// Ctrl C + V > index.html
function cl(tx) { console.log(tx); }
cl("Welcome to the Bridging.App");

// Change 3rd & 4th Cols to Links in table
function namesToLinks(px) {
  let table, tr, i;
  table = document.getElementById(px);
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    var makeLink = table.rows[i].cells[2].innerHTML;
    var makeLink2 = table.rows[i].cells[3].innerHTML;
    var web = makeLink.link(table.rows[i].cells[2].innerHTML);
    var web2 = makeLink2.link(table.rows[i].cells[3].innerHTML);
    table.rows[i].cells[3].innerHTML = web2;
    table.rows[i].cells[2].innerHTML = web;
  }
}


function pLF() {
  if (document.getElementById("datafromcsv")) {
    cl("Making names Links...");
    //pLD(theCSVsheet);
    namesToLinks("datafromcsv");
    cl("Done with links");
  } else {
    cl("No iDT (initialDataTable) exists");
  }
}

// -------------------- Index End -------------------- 




// -------------------- End of file -------------------- 
cl("Version:" + varVer);
cl("Timestamp: " + BATSV);
cl("Reached End of app-interface.js");