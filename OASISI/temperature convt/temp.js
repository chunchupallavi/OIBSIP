document.getElementById('convertButton').addEventListener('click', () => {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');
  
    if (isNaN(input) || input.trim() === "") {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    const temperature = parseFloat(input);
    let result = '';
  
    if (unit === 'celsius') {
      result = `${temperature} °C = ${(temperature * 9 / 5 + 32).toFixed(2)} °F = ${(temperature + 273.15).toFixed(2)} K`;
    } else if (unit === 'fahrenheit') {
      result = `${temperature} °F = ${((temperature - 32) * 5 / 9).toFixed(2)} °C = ${(((temperature - 32) * 5 / 9) + 273.15).toFixed(2)} K`;
    } else if (unit === 'kelvin') {
      result = `${temperature} K = ${(temperature - 273.15).toFixed(2)} °C = ${((temperature - 273.15) * 9 / 5 + 32).toFixed(2)} °F`;
    }
  
    resultDiv.textContent = result;
  });
  function colorchange(){
    document.getElementById('convertButton').style.color ="#00000";


  }