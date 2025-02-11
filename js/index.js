window.onload = (ev) => {
    const value = document.querySelector("#cantidad");
    const input = document.querySelector("#precio");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
      value.textContent = event.target.value;
    });
  }