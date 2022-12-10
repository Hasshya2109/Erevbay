let reader1 = new FileReader(),
    picker1 = document.getElementById("demoPick1"),
    table1 = document.getElementById("demoTable1");
    credit_score_element = document.getElementById('credit_score_element');
    salary_element = document.getElementById('salary_element');
    foir_amount_element = document.getElementById('foir_amount_element');
    existing_emi_element = document.getElementById('existing_emi_element');
    eligible_amount_element = document.getElementById('eligible_amount_element');

// (B) READ CSV ON FILE PICK
picker1.onchange = () => reader1.readAsText(picker1.files[0]);

// (C) READ CSV & GENERATE TABLE
var col_counter=0;
var row_counter=0;

reader1.onloadend = () => {
  table1.innerHTML = "";

  for (let row of CSV.parse(reader1.result)) {
    let tr = table1.insertRow();
    col_counter=0;
    row_counter+=1
    for (let col of row) {
      if(col_counter!=6 && col_counter!=7){
      let td = tr.insertCell();
      td.innerHTML = col;
      col_counter+=1
    }
  }}
  row_counter-=1;
  var foir_col=6;
  var disposable_col=7;
  var existing_emi_col=3;
  var sum_of_paid_principle_col=4;
  var credit_score=637;
  var foir_amount=CSV.parse(reader1.result)[row_counter][foir_col];
  var disposible_amount=CSV.parse(reader1.result)[row_counter][disposable_col];
  var existing_emi=CSV.parse(reader1.result)[row_counter][existing_emi_col];
  var sum_of_paid_principle=CSV.parse(reader1.result)[row_counter][sum_of_paid_principle_col];
  var salary=foir_amount/0.5;
  var eligible_amount=foir_amount-sum_of_paid_principle;
  credit_score_element.innerHTML = credit_score;
  salary_element.innerHTML = salary;
  foir_amount_element.innerHTML = foir_amount;
  existing_emi_element.innerHTML = existing_emi;
  eligible_amount_element.innerHTML = eligible_amount;
  console.log(credit_score,salary,foir_amount,existing_emi,eligible_amount)
};