const button = document.querySelector('.submit-button');

button.addEventListener('click', () => {
	const inputValue = document.getElementById('input').value;
	const input = document.getElementById('input');

	if(validateEmail(inputValue)) {
		console.log(`Submitting email address: ${inputValue}`);
		input.classList.remove('error');
	}
	else {
		input.classList.add('error');
		const errorText = document.querySelector('.container-left');
		errorText.innerHTML += '<br /><span class="error">Please provide a valid email</span>';
	}
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}