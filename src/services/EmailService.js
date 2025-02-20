const validateEmail = (payload) =>
  request({
    method: "POST",
    url: 'https://dummyurl.com/email/validate/email/',
    data: payload,
  });

const validateOtp = (payload) =>
    request({
      method: "POST",
      url: 'https://dummyurl.com/email/validate/otp/',
      data: payload,
    });

export default {
    validateEmail,
    validateOtp
};
