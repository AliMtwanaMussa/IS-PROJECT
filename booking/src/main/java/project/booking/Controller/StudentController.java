package project.booking.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.booking.Model.Student;
import project.booking.Service.StudentService;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/post")
    public Student post(@RequestBody Student student){
        return studentService.post(student);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        return studentService.updateStudent(id, student);
    }

    @GetMapping("/get-student")
    public List<Student> listStudent() {
        return studentService.listStudent();
    }

    @GetMapping("/{id}")
    public Optional<Student> getById(@PathVariable Integer id){
        return studentService.getById(id);
    }

    @DeleteMapping("/delete-student")
    public void deleteStudent(@RequestBody Student student) {
     studentService.deleteStudent(student);
    }

    @GetMapping("/count")
    public ResponseEntity<Long> countStudents() {
        long count = studentService.countStudents();
        return ResponseEntity.ok().body(count);
    }
}
