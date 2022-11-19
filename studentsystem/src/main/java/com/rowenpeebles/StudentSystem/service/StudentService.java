package com.rowenpeebles.StudentSystem.service;

import com.rowenpeebles.StudentSystem.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
