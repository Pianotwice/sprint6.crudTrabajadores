package iu.sprint6.examen;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import iu.sprint6.examen.models.Trabajador;
import iu.sprint6.examen.services.TrabajadorService;

@RestController
@RequestMapping("/trabajador")

public class TrabajadorController {
	private final TrabajadorService trabajadorService;
	
	@Autowired
	public TrabajadorController(TrabajadorService trabajadorService) {
		this.trabajadorService = trabajadorService;
	}
	
	//el listado de trabajadores
	@RequestMapping(value="/listar", method = RequestMethod.GET)
	public List<Trabajador> listarTrabajadores() {
		return trabajadorService.listarTrabajadores();
	}
	
	//mostrar trabajadores
	@GetMapping("/mostrar/{id}")
	public Trabajador mostrarTrabajador(@PathVariable("id") Long id ) {
		return trabajadorService.buscarTrabajador(id);
	}
	
	//creamos a los trabajadores
	@PostMapping("/crear")
	public Trabajador crearTrabajador(@RequestBody Trabajador user) {	
		return trabajadorService.crearTrabajador(user); 
	}
	
	//Eliminamos a los trabajadores
	@RequestMapping(value="/eliminar", method=RequestMethod.DELETE)
	public String eliminarTrabajador(@RequestParam Long id) {	
		trabajadorService.eliminarTrabajador(id); 
		return "Se ha eliminado el registro del trabajador exitosamente.";
	}
}


