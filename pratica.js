const form = document.getElementById("formula")//formulario
const boton = document.getElementById("as")//Boton 
const etiqueta = document.getElementById("myTable");//tabla

boton.addEventListener('click', function () {
  if (etiqueta.style.display === 'none') {
    etiqueta.style.display = 'table'; // Mostrar la tabla
  } else {
    etiqueta.style.display = 'none'; // Ocultar la tabla
  }
});
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('email').value;
    const messa = document.getElementById('message').value;

    const newRow = etiqueta.insertRow();
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const mesaCell = newRow.insertCell(2);
    nameCell.innerHTML = name;
    ageCell.innerHTML = age;
    mesaCell.innerHTML = messa;

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});
