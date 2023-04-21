$(document).ready(onReady);

let totalAnnualSalary = 0;

function onReady() {
    console.log('testing!!');
    $('#submit-button').on('click', onSubmit);
    $('#tbody').on('click', '.deleteBtn', onDelete);

}

let currentYearlySalaryNum = 0;
function onSubmit(event) {
    event.preventDefault();
    let firstNameInput = $('#firstname-input').val();
    let lastNameInput = $('#lastname-input').val();
    let idInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input').val();

    let salaryInputNum = Number(salaryInput);

  console.log(firstNameInput);
  console.log(salaryInputNum);

  $('#tbody').append(`
  <tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${toDollarString(salaryInputNum)}</td>
    <td>
      <button class='deleteBtn'>Delete</button>
    </td>
  </tr>
  `);  

  currentYearlySalaryNum += salaryInputNum;
  
  let monthlySalary = currentYearlySalaryNum / 12;
  
  console.log(monthlySalary);

  $('#monthly-salary-total').text(monthlySalary);
  
  if (monthlySalary >= 20000) {
    
    $('#monthly-salary-total').addClass('over-budget-background')
  }
}

function onDelete() {
  $(this).closest('tr').remove();
}


function toDollarString(dollarsAsNumber) {
  let dollarString = new Intl.NumberFormat(
    'en-US', 
    { style: 'currency', currency: 'USD' }
  ).format(dollarsAsNumber);
  return dollarString;
}