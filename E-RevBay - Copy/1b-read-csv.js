// (A) FILE READER + HTML ELEMENTS
let reader = new FileReader(),
    picker = document.getElementById("demoPick"),
    table = document.getElementById("demoTable");

// (B) READ CSV ON FILE PICK
picker.onchange = () => reader.readAsText(picker.files[0]);

// (C) READ CSV & GENERATE TABLE
var counter=0;
var col_counter=0;
reader.onloadend = () => {
  table.innerHTML = "";
  for (let row of CSV.parse(reader.result)) {
    console.log(row)
    let tr = table.insertRow();
    counter=0;
    col_counter+=1
    for (let col of row) {
      console.log(col) 
      if(counter!=7 && counter!=8){
      let td = tr.insertCell();
      td.innerHTML = col;
      counter+=1
    }
  }
  }
};