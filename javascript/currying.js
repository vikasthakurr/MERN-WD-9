function autoMailer(to, subject, body) {
  console.log(`Sending Mail to ${to}with subject ${subject} and body ${body}`);
}
autoMailer("Test Mail", "thankyou for shopping with us");
// function autoMailer(to, subject, body) {
//   console.log(`Sending Mail to ${to}with subject ${subject} and body ${body}`);
// }
// autoMailer("Test Mail", "thankyou for shopping with us");

function autoMailer(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `Sending Mail to ${to}with subject ${subject} and body ${body}`,
      );
    };
  };
}
autoMailer("abc@gmail.com")("shopping confirmation");
