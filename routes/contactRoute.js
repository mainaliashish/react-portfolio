const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (request, response) => {
  let data = request.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return response.json({ msg: "Please fill all the fields." });
  } else if (res.status === 200) {
    setBanner(res.data.msg);
    toast.success(res.data.msg);
    setBool(false);

    setName("");
    setEmail("");
    setMessage("");
  }
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "ashishmainalee@gmail.com",
      password: "",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "ashishmainalee@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Information</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message Description </h3>
            <p>${data.message}</p>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return response
          .status(400)
          .json({ msg: "Please fill all the fields." });
      response.status(200).json({ msg: "Thank you for contacting.." });
    } catch (error) {
      if (error)
        return response.status(500).json({ msg: "There is a server error" });
    }
  });
});

module.exports = router;
