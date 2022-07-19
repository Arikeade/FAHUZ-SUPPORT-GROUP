function sendEmail(e) {
  e.preventDefault();
  user = document.getElementById("name");
  message = document.getElementById("message");
  phone = document.getElementById("phone");
  email = document.getElementById("email");

  Email.send({
    SecureToken: "fee46cea-99be-4e69-8958-fe704e24f534",
    To: "fahuzsg@gmail.com",
    From: `fahuzsg@gmail.com`,
    Subject: `Get in touch from ${user.value}`,
    Body: `
        <h1>${user.value} is trying to get in touch with you</h1>
        <h2>${user.value}'s email ${email.value}</h2>
        <h2>${user.value}'s Phone Number ${phone.value}</h2>
        <h2>${user.value}'s Message</h2>
        <h3>${message.value}</h3>
	`,
  }).then((message) => {
    if (message == "OK") {
      alert("Thank you, we will get back to you shortly.");
    } else {
      alert("Error Sending Email");
    }
  });
  e.target.name.value = "";
  e.target.phone.value = "";
  e.target.email.value = "";
  e.target.message.value = "";
}

