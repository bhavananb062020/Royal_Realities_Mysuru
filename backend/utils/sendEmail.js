const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (data) => {

  await resend.emails.send({
    from:"Royal Realities <contact@royalrealitiesmysuru.in>",
    to: "bhavananb2003@gmail.com",
    subject: "New Property Inquiry",
    html: `
      <h3>New Inquiry</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      ${data.message ? `<p><b>Message:</b> ${data.message}</p>` : ""}
    `
  });

};

module.exports = sendEmail;