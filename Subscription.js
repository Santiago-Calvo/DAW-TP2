const form = document.getElementById('subscription-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const ageInput = document.getElementById('age');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const postalCodeInput = document.getElementById('postal-code');
const dniInput = document.getElementById('dni');
const formTitle = document.getElementById('form-title');

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = '';
}

function validateName() {
    const name = nameInput.value.trim();
    if (name.length < 6 || !name.includes(' ')) {
        showError(nameInput, 'El nombre completo debe tener más de 6 letras y al menos un espacio.');
        return false;
    } else {
        clearError(nameInput);
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(emailInput, 'Por favor, ingrese un email válido.');
        return false;
    } else {
        clearError(emailInput);
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres, con letras y números.');
        return false;
    } else {
        clearError(passwordInput);
        return true;
    }
}

function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
        showError(confirmPasswordInput, 'Las contraseñas no coinciden.');
        return false;
    } else {
        clearError(confirmPasswordInput);
        return true;
    }
}

function validateAge() {
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 18) {
        showError(ageInput, 'La edad debe ser un número entero mayor o igual a 18.');
        return false;
    } else {
        clearError(ageInput);
        return true;
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const phoneRegex = /^\d{7,}$/;
    if (!phoneRegex.test(phone)) {
        showError(phoneInput, 'El teléfono debe tener al menos 7 dígitos, sin espacios, guiones ni paréntesis.');
        return false;
    } else {
        clearError(phoneInput);
        return true;
    }
}

function validateAddress() {
    const address = addressInput.value.trim();
    if (address.length < 5 || !address.includes(' ')) {
        showError(addressInput, 'La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.');
        return false;
    } else {
        clearError(addressInput);
        return true;
    }
}

function validateCity() {
    const city = cityInput.value.trim();
    if (city.length < 3) {
        showError(cityInput, 'La ciudad debe tener al menos 3 caracteres.');
        return false;
    } else {
        clearError(cityInput);
        return true;
    }
}

function validatePostalCode() {
    const postalCode = postalCodeInput.value.trim();
    if (postalCode.length < 3) {
        showError(postalCodeInput, 'El código postal debe tener al menos 3 caracteres.');
        return false;
    } else {
        clearError(postalCodeInput);
        return true;
    }
}

function validateDNI() {
    const dni = dniInput.value.trim();
    const dniRegex = /^\d{7,8}$/;
    if (!dniRegex.test(dni)) {
        showError(dniInput, 'El DNI debe ser un número de 7 u 8 dígitos.');
        return false;
    } else {
        clearError(dniInput);
        return true;
    }
}

function updateFormTitle() {
    const name = nameInput.value.trim();
    formTitle.textContent = name ? `HOLA ${name}` : 'HOLA';
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
ageInput.addEventListener('blur', validateAge);
phoneInput.addEventListener('blur', validatePhone);
addressInput.addEventListener('blur', validateAddress);
cityInput.addEventListener('blur', validateCity);
postalCodeInput.addEventListener('blur', validatePostalCode);
dniInput.addEventListener('blur', validateDNI);

nameInput.addEventListener('focus', clearError);
emailInput.addEventListener('focus', clearError);
passwordInput.addEventListener('focus', clearError);
confirmPasswordInput.addEventListener('focus', clearError);
ageInput.addEventListener('focus', clearError);
phoneInput.addEventListener('focus', clearError);
addressInput.addEventListener('focus', clearError);
cityInput.addEventListener('focus', clearError);
postalCodeInput.addEventListener('focus', clearError);
dniInput.addEventListener('focus', clearError);

nameInput.addEventListener('keydown', updateFormTitle);
nameInput.addEventListener('focus', updateFormTitle);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgeValid = validateAge();
    const isPhoneValid = validatePhone();
    const isAddressValid = validateAddress();
    const isCityValid = validateCity();
    const isPostalCodeValid = validatePostalCode();
    const isDNIValid = validateDNI();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isAgeValid && isPhoneValid && isAddressValid && isCityValid && isPostalCodeValid && isDNIValid) {

        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            age: ageInput.value,
            phone: phoneInput.value.trim(),
            address: addressInput.value.trim(),
            city: cityInput.value.trim(),
            postalCode: postalCodeInput.value.trim(),
            dni: dniInput.value.trim()
        };
        alert('Formulario enviado:\n\n' + JSON.stringify(formData, null, 2));
    } else {

        const errorMessage = 'Por favor, corrija los siguientes errores:\n\n' +
            (isNameValid ? '' : '- Nombre completo: Debe tener más de 6 letras y al menos un espacio.\n') +
            (isEmailValid ? '' : '- Email: Debe tener un formato de email válido.\n') +
            (isPasswordValid ? '' : '- Contraseña: Debe tener al menos 8 caracteres, con letras y números.\n') +
            (isConfirmPasswordValid ? '' : '- Repetir contraseña: Las contraseñas no coinciden.\n') +
            (isAgeValid ? '' : '- Edad: Debe ser un número entero mayor o igual a 18.\n') +
            (isPhoneValid ? '' : '- Teléfono: Debe tener al menos 7 dígitos, sin espacios, guiones ni paréntesis.\n') +
            (isAddressValid ? '' : '- Dirección: Debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.\n') +
            (isCityValid ? '' : '- Ciudad: Debe tener al menos 3 caracteres.\n') +
            (isPostalCodeValid ? '' : '- Código Postal: Debe tener al menos 3 caracteres.\n') +
            (isDNIValid ? '' : '- DNI: Debe ser un número de 7 u 8 dígitos.\n');
        alert(errorMessage);
    }
});