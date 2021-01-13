function sendEmail(){
    var name = document.getElementById('from_name').value,
    email = document.getElementById('from_email').value,
    message = document.getElementById('message').value;
    console.log(from_name,from_email, )
    var formParams = {
        "to_name" : "Rushikesh",
        "from_name" : name,
        "from_email" : email,
        "message" : message
    }

    emailjs.send('service_rfputuo', 'contact_rushi', formParams)
        .then(function(res) {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
}


document.getElementById('contact-form').addEventListener('submit', sendEmail);