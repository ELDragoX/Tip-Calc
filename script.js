const billInput=document.getElementById("billInput");
const tipInput =document.getElementById("tipInput");

const numberOfPeople =document.getElementById("numberOfPeople");
const totalPerPerson =document.getElementById("perPersonTotal");
let noOfPeople=Number(numberOfPeople.innerText);
function calculateBill(){
  
  let noOfPeople=Number(numberOfPeople.innerText);
  let billAmount=Number(billInput.value);
  let tip=Number(tipInput.value)
  if(tip<10){
    tip=10;
    }
  let tipAmount=billAmount*tip/100;
  let totalAmountPerPerson=(billAmount+tipAmount)/noOfPeople;
  totalPerPerson.innerText=`$${totalAmountPerPerson.toFixed(2)}`;
  
  
}

const addBtn=document.getElementById("incrementButton");
const subBtn=document.getElementById("decrementButton");


addBtn.onclick=()=>{
  
  numberOfPeople.innerText=Number( numberOfPeople.innerText)+1;
  calculateBill();
}
subBtn.onclick=()=>{
  
  if( numberOfPeople.innerText!=1){
    numberOfPeople.innerText=Number( numberOfPeople.innerText)-1;
    calculateBill();
  }
}
