// reference 
// nodemail https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer

    const form = document.getElementById("contact-form");

    const formEvent = form.addEventListener("submit", (event) => {
      event.preventDefault();
      let mail = new FormData(form);
      sendMail(mail);
    });
    
    const sendMail = (mail) => {
      fetch("/send", {
        method: "post",
        body: mail,
      }).then((response) => {
        return response.json();
      });
    };

    