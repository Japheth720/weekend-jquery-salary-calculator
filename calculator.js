$(document).ready(onReady);

function onReady() {
    console.log('testing!!');
    $('#submit-button').on('click', onSubmit);
    $('#tbody').on('click', '.deleteBtn', onDelete);

}


function onSubmit() {
    event.preventDefault();
    let firstNameInput = $('#firstname-input').val();
    let lastNameInput = $('#lastname-input').val();
    let idInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input').val();


    $('#tbody').append(`
    <tr>
      <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idInput}</td>
      <td>${titleInput}</td>
      <td>${salaryInput}</td>
      <td>
        <button class='deleteBtn'>Delete</button>
      </td>
    </tr>
    `);
}

function onDelete() {
 $(this).closest('tr').remove();
}