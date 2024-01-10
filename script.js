const validateForm = () => {
    const getValue = (id) => document.getElementById(id).value;
    const setValue = (id, text) => (document.getElementById(id).textContent = text);

    const name = getValue("name");
    const phone = getValue("phone");
    const email = getValue("email");
    const needed_service = getValue("needed_service");
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    const message = getValue("message");
    const errorMessage = getValue("error-message");

    // Simple validation for name, phone, email, and message
    if ([name, phone, email, message].some((field) => field.trim() === '')) {
        setValue('error-message', 'All fields are required');
        return;
    }

    // Email validation using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setValue('error-message', 'Invalid email format');
        return;
    }

    // Phone validation using a simple regex
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phoneRegex.test(phone)) {
        setValue('error-message', 'Invalid phone number format');
        return;
    }

    // If all validations pass, submit the form (you can replace this with your actual form submission logic)
    setValue('error-message', '');
    alert('Form submitted successfully!');
    document.getElementById("contactForm").reset();
};
