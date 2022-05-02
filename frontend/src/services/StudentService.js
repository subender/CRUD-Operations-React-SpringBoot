import axios from "axios";

const STUDENT_API_URL = "http://localhost:8080/api/v1/students";
class StudentServide {
  
  saveStudent(student){
    return axios.post(STUDENT_API_URL, student);
  }

  getStudent(){
    return axios.get(STUDENT_API_URL);
  }

  deleteStudent(id){
    return axios.delete(STUDENT_API_URL + "/" + id);
  }

  getStudnetById(id){
    return axios.get(STUDENT_API_URL + "/" + id);
  }

  updateStudent(student, id){
      return axios.put(STUDENT_API_URL + "/" + id , student);
  }

}

export default new StudentServide();