document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration_form');
    const messageElement = document.getElementById('message');

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Collect form data
        const name = document.getElementById('name').value.trim();
        const drinks = document.getElementById('drinks').value.trim();
        const km = document.getElementById('km').value.trim();
        const thoughts = document.getElementById('thoughts').value.trim();

        // Simple validation
        if (name === "" || drinks === "" || km === "") {
            showMessage("Name, drink, and km fields are required!", "error");
            return;
        }

        if (isNaN(drinks)) {
            showMessage("Please enter a valid number of drinks!", "error");
            return;
        }

        if (isNaN(km)) {
            showMessage("Please enter a valid number of km!", "error");
            return;
        }

        // Simulate form submission success
        setTimeout(() => {
            showMessage(`Thank you for registering, ${name}! Don't forget to bring your tricorner hat!`, "success");
            postToGoogle(name, drinks, km, thoughts)
            form.reset(); // Reset form fields after successful submission
        }, 1000);
    });

    // Function to display messages
    function showMessage(message, type) {
        messageElement.textContent = message;
        messageElement.className = type === "success" ? "message-success" : "message-error";
    }
});

function postToGoogle(name, drinks, km, thoughts) {
    var field1 = name;
    var field2 = drinks;
    var field3 = km;
    var field4 = thoughts;

    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfwG4RHIRElAibXC7KPJSLejQKWiBlYYBugeC0KADIRjPNVew/formResponse",
        
      //add your google form generated numbers below which are also the 'names' of your inputs     
      data: {
        "entry.379407764": field1,
        "entry.1104768505": field2,
        "entry.1537926268": field3,
        "entry.1723923672": field4
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact').trigger('reset');
      }
    });
    return false;
}




