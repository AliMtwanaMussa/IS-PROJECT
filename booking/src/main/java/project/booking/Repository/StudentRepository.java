package project.booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.booking.Model.Admin;
import project.booking.Model.Student;

@Repository
public interface StudentRepository  extends JpaRepository<Student, Integer> {

}
