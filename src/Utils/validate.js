export const validate = (phone) => {
    let errors = {};
    let isValid = true;

    if (!phone) {
        isValid = false;
        errors['emptyPhone'] = 'Please enter your mobile no.';
    }

    if (phone.length > 10 || phone.length < 10) {
        isValid = false;
        errors['invalidNo'] = 'Invalid mobile no.';
    }

    return {
        isValid,
        errors
    }
}