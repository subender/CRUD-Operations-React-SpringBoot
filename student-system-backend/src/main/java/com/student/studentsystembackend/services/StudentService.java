package com.student.studentsystembackend.services;

import com.student.studentsystembackend.model.Student;

import java.util.List;

public interface StudentService {
  public   Student createStudent(Student student);

 public List<Student> getAllStudentsList();

     public boolean deleteStudent(Long id);

    public Student getStudentById(Long id);

    public Student updateStudent(Long id, Student student);
}
