$(document).ready(function () {
  // Validación de nombre
  $('#nombre').on('input', function () {
    const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    if (!regex.test($(this).val())) {
      $(this).removeClass('is-valid').addClass('is-invalid');
      $('#nombreError').text('El nombre solo debe contener letras.');
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
      $('#nombreError').text('');
    }
  });

  // Validación de apellidos
  $('#apellidos').on('input', function () {
    const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
    if (!regex.test($(this).val())) {
      $(this).removeClass('is-valid').addClass('is-invalid');
      $('#apellidosError').text('El apellido solo debe contener letras.');
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
      $('#apellidosError').text('');
    }
  });

  // Validación de correo electrónico
  $('#gmail').on('input', function () {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedEmails = ['@gmail.com', '@hotmail.com', '@vallegrande.edu.pe', '@outlook.com'];
    let email = $(this).val();
    let isValidEmail = false;

    // Verifica si el correo tiene uno de los dominios permitidos
    for (let domain of allowedEmails) {
      if (email.endsWith(domain)) {
        isValidEmail = true;
        break;
      }
    }

    if (!regex.test(email) || !isValidEmail) {
      $(this).removeClass('is-valid').addClass('is-invalid');
      $('#gmailError').text('Ingrese un correo electrónico válido con un dominio permitido.');
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
      $('#gmailError').text('');
    }
  });

  // Validación de teléfono
  $('#celular').on('input', function () {
    const regex = /^9[0-9]{8}$/;
    if (!regex.test($(this).val())) {
      $(this).removeClass('is-valid').addClass('is-invalid');
      $('#celularError').text('Debe comenzar con 9 y tener 9 dígitos.');
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
      $('#celularError').text('');
    }
  });

  // Validación de descripción (no vacía)
  $('#descripcion').on('input', function () {
    if ($(this).val().trim() === '') {
      $(this).removeClass('is-valid').addClass('is-invalid');
      $('#descripcionError').text('La descripción no puede estar vacía.');
    } else {
      $(this).removeClass('is-invalid').addClass('is-valid');
      $('#descripcionError').text('');
    }
  });

  // Validación final y envío del formulario
  $('#consultaForm').on('submit', function (e) {
    e.preventDefault();
    if ($('.is-invalid').length === 0) {
      Swal.fire({
        title: 'Consulta registrada',
        text: 'Su consulta ha sido registrada con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        this.submit();
      });
    } else {
      Swal.fire({
        title: 'Errores en el formulario',
        text: 'Corrija los campos marcados en rojo antes de enviar.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  });
});
