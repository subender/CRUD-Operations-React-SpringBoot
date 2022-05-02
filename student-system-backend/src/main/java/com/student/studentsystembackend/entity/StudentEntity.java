package com.student.studentsystembackend.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "students")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    private String name;
    private String address;
    private String subject;
}
