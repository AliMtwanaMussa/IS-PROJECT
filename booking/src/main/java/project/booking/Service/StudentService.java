package project.booking.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.booking.Model.Student;
import project.booking.Repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    public StudentRepository studentRepository;

    public Student post(Student student){
        return studentRepository.save(student);
    }

    public Optional<Student> getById(Integer id) {
        return studentRepository.findById(id);
    }

    public Student updateStudent(int id, Student student) {
        Optional<Student> existingStudent = studentRepository.findById((id));
        if (existingStudent.isPresent()) {
            Student updatedStudent = existingStudent.get();
            updatedStudent.setFullName(student.getFullName());
            updatedStudent.setEmail(student.getEmail());
            updatedStudent.setPhoneNumber(student.getPhoneNumber());
            updatedStudent.setFirstDate(student.getFirstDate());
            // Update other fields as necessary
            return studentRepository.save(updatedStudent);
        } else {
            throw new RuntimeException("Booking not found with id " + id);
        }
    }

    public List<Student> listStudent() {
        return studentRepository.findAll();
    }

    public void deleteStudents(Student student) {
        studentRepository.delete(student);
    }

    public long countStudents() {
        return studentRepository.count();
    }


    public void deleteStudent(Student student) {
        studentRepository.delete(student);
    }
}
