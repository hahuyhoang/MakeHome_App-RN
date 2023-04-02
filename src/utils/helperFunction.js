// screen nay de show cac message
import { showMessage } from "react-native-flash-message";

const showError = (message) => {
  showMessage({
    type: "danger",
    icon: "danger",
    message,
  });
};
const showSuccess = (message) => {
  showMessage({
    type: "success",
    icon: "success",
    message,
    backgroundColor:"#2596be"
  });
};

export { showError, showSuccess };
