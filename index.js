const inputs = {
  "input-1": "error-1",
  "input-2": "error-2",
  "input-3": "error-3",
  "input-4": "error-4"
}


const error1 = document.getElementById('error-1');
const error2 = document.getElementById('error-2');
const error3 = document.getElementById('error-3');
const error4 = document.getElementById('error-4');

const btn = document.getElementById('form-btn');

function formHandler() {

  for (const inputId of Object.keys(inputs)) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(inputs[inputId]);
    if (input.value === '' || (inputId === 'input-3' && !validator.isEmail(input.value))) {
      input.classList.add('form-input-error');
      error.style.display = 'block';
    }
    else {
      input.classList.remove('form-input-error');
      error.style.display = 'none';
    };
  }
  
}