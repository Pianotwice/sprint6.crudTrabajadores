// URL de la API
const apiUrlCrear = "http://localhost:8081/trabajador/crear";

// Instancia de Vue
new Vue({
  el: "#app",
  data: {
    nuevoTrabajador: {
      nombre: "",
      apellido: "",
      cargo: ""
    }
  },
  methods: {
    guardarTrabajador() {
      // Llamada a la API para guardar el trabajador utilizando el método POST
      axios.post(apiUrlCrear, this.nuevoTrabajador)
        .then(response => {
          console.log("Trabajador guardado:", response.data);
          Swal.fire({
            icon: "success",
            title: "Trabajador creado",
            text: "El trabajador se creó correctamente."
          }).then(() => {
            // Redirigir a la página de trabajadores.html después de aceptar
            window.location.href = "trabajadores.html";
          });
        })
        .catch(error => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Error al crear trabajador",
            text: "Ocurrió un error al crear el trabajador."
          });
        });
    }
  }
});

const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
});

/* Ahora estos a continuación harán que los links a las
redes sociales que se encuentran ocultas abajo aparezcan
haciendo uso del scroll */

window.addEventListener('scroll', function() {
    let socialIcons = document.getElementById('social-icons');
    let windowHeight = window.innerHeight;
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Ajusta la posición de los elementos .social al llegar al final de la página
    if (scrollPosition >= document.body.offsetHeight - windowHeight) {
        socialIcons.style.bottom = '20px'; // Muestra los elementos .social
    } else {
        socialIcons.style.bottom = '-50px'; // Oculta los elementos .social
    }
});
