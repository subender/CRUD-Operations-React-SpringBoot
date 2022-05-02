import React from 'react'
import { useNavigate } from 'react-router-dom'
import StudentService from '../services/StudentService'
import { useState, useEffect } from 'react'

const StudentsList = () => {

  const [isLoading, setisLoading] = useState(true)
  const [students, setStudents] = useState(null)
  useEffect(() => {
    
    const  fetchData= async ()=>{
      setisLoading(true)
      try {

        const response = await StudentService.getStudent();
        
        setStudents(response.data);
        
      } catch (error) {
        console.log(error)
      }
      setisLoading(false)
    }

    fetchData();
  }, [])
  

  const navigate =  useNavigate();

  const navigateTo = ()=> navigate("/addStudent")

  const deleteStudentHandler = (id)=>{
        StudentService.deleteStudent(id).then(resp=>{
            if(students){
                setStudents(prevStu =>{
                    return prevStu.filter(stu => stu.id !== id);
                })
            }
   } ) }
  


  return (
    <div className="container my-4 mx-auto">
   <div>
<button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "onClick={navigateTo} >
   Add Student
</button>
</div>

<div>
  
<div className="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 bg-violet-200   border-b border-gray-200 text-gray-600  text-left text-sm uppercase font-bold">
                                Name
                            </th>
                            <th scope="col" className="px-5 py-3 bg-violet-200  border-b border-gray-200 text-gray-600  text-left text-sm uppercase font-bold">
                                Address
                            </th>
                            <th scope="col" className="px-5 py-3 bg-violet-200  border-b border-gray-200 text-gray-600  text-left text-sm uppercase font-bold">
                                Favourite Subject
                            </th>
                            <th scope="col" className="px-5 py-3 bg-violet-200  border-b border-gray-200 text-gray-600  text-left text-sm uppercase font-bold">
                                Actions
                            </th>
                          
                        </tr>
                    </thead>


                 
                   { !isLoading && (
                   
                   
                   <tbody>  
                      {  students.map((stu)=>(

                          
                        <tr key={stu.id} >
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                 <p className="text-gray-900 whitespace-no-wrap">
                                            {stu.name}
                                  </p>
                                    

                               
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                {stu.address}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                {stu.subject} 
                                </p>
                            </td>
                            
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right flex gap-5">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900 font-bold">
                                    Edit
                                </a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-900 font-bold" onClick={()=>deleteStudentHandler(stu.id)}>
                                    Delete
                                </a>
                            </td>
                        </tr>

                        ))}

                    </tbody>)}
                </table>
            </div>
        </div>
    </div>
</div>

</div>

    </div>
    
  )

                      }
export default StudentsList;