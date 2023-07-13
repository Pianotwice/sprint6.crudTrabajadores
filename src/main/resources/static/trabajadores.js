// URL de la API
const apiUrlListar = "http://localhost:8081/trabajador/listar/";
const apiUrlMostrar = "http://localhost:8081/trabajador/mostrar/";
const apiUrlEliminar = "http://localhost:8081/trabajador/eliminar?id=";

// Instancia de Vue
new Vue({
  el: "#app",
  data: {
    trabajadores: [],
    detalleTrabajador: null
  },
  mounted() {
    // Llamada a la API para obtener la lista de trabajadores
    axios.get(apiUrlListar)
      .then(response => {
        this.trabajadores = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    mostrarDetalle(id) {
      // Llamada a la API para obtener el detalle del trabajador
      axios.get(apiUrlMostrar + id)
        .then(response => {
          this.detalleTrabajador = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
      eliminar(id) {
      // Llamada a la API para obtener el detalle del trabajador
      axios.delete(apiUrlEliminar + id)
        .then(response => {
    
     	Swal.fire({
            icon: "success",
            title: "Trabajador Eliminado",
            text: "El trabajador se eliminó correctamente."
          }).then(() => {
            // Redirigir a la página de trabajadores.html después de aceptar
            window.location.href = "trabajadores.html";
          });    
    
        })
        .catch(error => {         
            Swal.fire({
            icon: "error",
            title: "Error al eliminar trabajadore",
            text: "Ocurrió un error al eliminar el trabajador."
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

