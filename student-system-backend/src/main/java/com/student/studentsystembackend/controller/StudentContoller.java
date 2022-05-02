package com.student.studentsystembackend.controller;

import com.student.studentsystembackend.model.Student;
import com.student.studentsystembackend.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class StudentContoller {

    @Autowired
    private StudentService studentService ;

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student){
        return studentService.createStudent(student);
    }

    @GetMapping("/students")
    public List<Student> getAllStudentsList(){
       return studentService.getAllStudentsList();
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id){
        boolean deleted = false;
         deleted  = studentService.deleteStudent(id);
         Map<String, Boolean> response = new HashMap<>();
         response.put("deleted", deleted);
         return ResponseEntity.ok(response);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id){
        Student student = null;
        student = studentService.getStudentById(id);
        return ResponseEntity.ok(student);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student student){
        student = studentService.updateStudent(id, student);
        return ResponseEntity.ok( student);
    }
}
