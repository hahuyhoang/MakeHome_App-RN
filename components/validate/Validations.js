import validator from "is_js";

const CheckEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return "";
  }
};
const CheckMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `please enter valid ${key}`;
  } else {
    return "";
  }
};
export default function (data) {
  const { username, password, email, password_confirmation } = data;

  if (username !== undefined) {
    let emptyValidationText = CheckEmpty(
      username,
      "please enter your username"
    );
    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = CheckMinLength(username, 4, "username");
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }
  if (email !== undefined) {
    let emptyValidationText = CheckEmpty(email, "please enter your email");
    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return "please enter valid email";
      }
    }
  }
  if (password !== undefined) {
    let emptyValidationText = CheckEmpty(
      password,
      "please enter your password"
    );
    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = CheckMinLength(password, 5, "password min 5");
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }
  if (
    password_confirmation !== undefined &&
    password !== password_confirmation
  ) {
    let emptyValidationText = CheckEmpty(
      password,
      password_confirmation,
      "Please enter the correct password"
    );
    return emptyValidationText;
  }
}
