import axios from'axios';

class StudentService {




getResponse(){
 return axios.get('http://localhost:8000')
}

fileUpload(file){
   return axios.post('http://localhost:8000/candidates/upload',file)
}

}
export default  new  StudentService();