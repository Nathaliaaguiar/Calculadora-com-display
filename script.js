
    function appendToDisplay(value) {
      document.getElementById('display').textContent += value;
    }

    function clearDisplay() {
      document.getElementById('display').textContent = '';
    }

    function calculate() {
      try {
        document.getElementById('display').textContent = eval(document.getElementById('display').textContent);
      } catch(error) {
        document.getElementById('display').textContent = 'Erro';
      }
    }
  