document.getElementById('saveButton').addEventListener('click', function() {
    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),
        question1: parseInt(document.getElementById('question1').value),
        question2: parseInt(document.getElementById('question2').value),
        question3: parseInt(document.getElementById('question3').value),
        question4: parseInt(document.getElementById('question4').value),
        question5: parseInt(document.getElementById('question5').value)
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phonePattern.test(formData.phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return;
    }

    if (formData.address === '') {
        alert("Address cannot be empty.");
        return;
    }

    formData.address = formData.address.replace(/\s+/g, ' ').trim();


    console.log(formData);

    const average = (formData.question1 + formData.question2 + formData.question3 + formData.question4 + formData.question5) / 5;

    const resultsDiv = document.createElement('section');

    let averageColor = '';
    if (average >= 0 && average <= 3.4) {
        averageColor = 'red';
    } else if (average >= 3.5 && average <= 7.1) {
        averageColor = 'orange';
    } else if (average >= 7.2 && average <= 10) {
        averageColor = 'green';
    }

    resultsDiv.innerHTML = `
    <div class="container review-container" data-aos="fade-up" data-aos-delay="100">
        <p>First Name: ${formData.firstName}</p>
        <p>Last Name: ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p style="color:${averageColor}">Average Rating: ${average.toFixed(2)}</p>
    </div>
    `;

    // document.body.appendChild(resultsDiv);
    document.getElementById('review-wrapper').appendChild(resultsDiv);
});
