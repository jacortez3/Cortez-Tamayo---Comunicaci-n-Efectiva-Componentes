  function updateOutput(text) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = `Salida: ${text}`;
  }

  function handleInputChange(event) {
    const inputValue = event.target.value;
    updateOutput(inputValue);
  }