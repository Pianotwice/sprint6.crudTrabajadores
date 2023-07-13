package iu.sprint6.examen.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import iu.sprint6.examen.models.Trabajador;
import iu.sprint6.examen.repositories.TrabajadorRepository;

@Service

public class TrabajadorService {
	private final TrabajadorRepository trabajadorRepository;
	
	@Autowired
	public TrabajadorService(TrabajadorRepository trabajadorRepository) {
		this.trabajadorRepository = trabajadorRepository;
	}
	
	public List<Trabajador> listarTrabajadores(){
		return trabajadorRepository.findAll();
	}
	
	//mostrar trabajador
	public Trabajador buscarTrabajador(Long id) {
		Optional<Trabajador> optionalTrabajador = trabajadorRepository.findById(id);
		if(optionalTrabajador.isPresent()) {
			return optionalTrabajador.get();
		} else {
			return null; 
		}
	}
	
	//crear trabajador
	public Trabajador crearTrabajador(Trabajador b) {
		return trabajadorRepository.save(b); 
	}
	
	//eliminar trabajador del registro
	public void eliminarTrabajador(Long id) {
		trabajadorRepository.deleteById(id); 
	}
}
