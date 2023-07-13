package iu.sprint6.examen.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import iu.sprint6.examen.models.Trabajador;

@Repository

public interface TrabajadorRepository extends CrudRepository<Trabajador, Long> {
	List<Trabajador> findAll();
	Trabajador findByNombre(String nombre); 
	
	List<Trabajador> findAllByCargoOrderByIdDesc(String cargo);
	Long deleteByNombre(String nombre);
}
