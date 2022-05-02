package com.student.studentsystembackend.services;

import com.student.studentsystembackend.entity.StudentEntity;
import com.student.studentsystembackend.model.Student;
import com.student.studentsystembackend.repository.StudentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Student createStudent(Student student) {
        StudentEntity studentEntity =new StudentEntity();
        BeanUtils.copyProperties(student, studentEntity);
        studentRepository.save(studentEntity);
        return student;

    }

    @Override
    public List<Student> getAllStudentsList() {
       List<StudentEntity> studentEntity = studentRepository.findAll();
       List<Student> students = studentEntity.stream().map(student -> new Student(
               student.getId(),
               student.getName(),
               student.getAddress(),
               student.getSubject()))
               .collect(Collectors.toList());
       return students;
    }

    @Override
    public boolean deleteStudent(Long id) {
        StudentEntity student = studentRepository.findById(id).get();
        studentRepository.delete(student);
        return true;
    }

    @Override
    public Student getStudentById(Long id) {
        StudentEntity studentEntity = studentRepository.findById(id).get();
        Student student = new Student();
        BeanUtils.copyProperties(studentEntity , student);
        return student;
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        StudentEntity studentEntity = studentRepository.findById(id).get();
        studentEntity.setSubject(student.getSubject());
        studentEntity.setAddress(student.getAddress());
        studentEntity.setName(student.getName());

        studentRepository.save(studentEntity);


        return  student;
    }
}
