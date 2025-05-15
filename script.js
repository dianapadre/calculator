document.addEventListener("DOMContentLoaded", () => {
  const calcForm = document.forms["calc"];
  const input = calcForm["txt"];
  const buttons = document.querySelectorAll(".num");

  buttons.forEach(button => {
    const value = button.getAttribute("data-value");
    const action = button.getAttribute("data-action");

    button.addEventListener("click", () => {
      switch (action) {
        case "clear":
          input.value = "";
          break;
        case "backspace":
          input.value = input.value.slice(0, -1);
          break;
        case "square":
          input.value = Math.pow(Number(input.value), 2);
          break;
        case "sqrt":
          input.value = Math.sqrt(Number(input.value));
          break;
        case "calculate":
          try {
            input.value = Number(eval(input.value).toFixed(2));
          } catch {
            input.value = "Error";
          }
          break;
        default:
          if (value) {
            input.value += value;
          }
          break;
      }
    });
  });
});
