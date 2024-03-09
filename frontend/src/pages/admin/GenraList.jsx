

import React, { useState } from 'react'
import { useCreatGenraMutation, useDelledGenraMutation, useFecthGenraQuery, useUpdatgenraMutation } from '../../redux/api/genraApi'
import { GenraForm } from '../../components/GenraForm'

import { toast } from "react-toastify";
import Model from '../../components/Model';


const GenraList = () => {

     const {data: geners , refetch} = useFecthGenraQuery()

     const [name , setName] = useState("")
     const [selected, setSelected] = useState(null)
     const [upated, setUpdated] = useState("")
     const [modelvisile, setModelvisile] = useState(false)
     console.log(selected)
 


     const [createGenre , {isLoading , isError}]  =  useCreatGenraMutation()
     const [updategenra ]  =  useUpdatgenraMutation()
     const [dleleted ]  =  useDelledGenraMutation()

     const handleCreateGenre = async (e) => {
      e.preventDefault();
  
      if (!name) {
        toast.error("Genre name is required");
        return;
      }
  
      try {
        const result = await createGenre({ name }).unwrap();
 
  
        if (result.error) {
          toast.error(result.error);
        } else {
          setName("");
          toast.success(`${result.name} is created.`);
          refetch();
        }
      } catch (error) {
        console.error(error);
        toast.error("Creating genre failed, try again.");
      }



    }



    const handleupdaeted = async (e) => {
      e.preventDefault();
  
      if (!upated) {
        toast.error("Genre upated is required");
        return;
      }
  
      try {
        const result = await   updategenra({

          id : selected._id,
          updatedgnera : {
          name : upated
       }

        }).unwrap();
        console.log(result)
  
        if (result.error) {
          toast.error(result.error);
        } else {
          setName("");
          toast.success(`${result.name} is updated.`);
          refetch();
        }
      } catch (error) {
        console.error(error);
        toast.error("updating genre failed, try again.");
      }



    }



    const handledeltedgenra =  async() => {

      try {


         const result = await dleleted(selected._id).unwrap();

         if (result.error) {
          toast.error(result.error);
        } else {
         
          toast.success("dlted suucefullly");
          refetch();
          setSelected(null)
          setModelvisile(false)
        }

      }  catch(e){


      }
 
    }

  return (
    <div className='ml-[10rem] flex flex-col'>

      <div className='md:w-3/4 p-3'>

        <h1 className='text-2xl font-semibold mb-4'>Mange Genres</h1>
        <GenraForm  value = {name}  setvalue = {setName} handlsubmit ={handleCreateGenre}/>


        <br>
        </br>


        <div className="flex flex-wrap">
          {geners?.map((genre) => (
            <div key={genre._id}>
              <button
                className="bg-white border border-teal-500 text-teal-500 py-2 px-4 rounded-lg m-3 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                onClick={() => {
                  {
                    setModelvisile(true);
                    setSelected(genre);
                    setUpdated(genre.name);
                  }
                }}
              >
                {genre.name}
              </button>
            </div>
          ))}
        </div>



        <Model isOpen = {modelvisile}  onClose = {() => setModelvisile(false)}>

        <GenraForm 

              

        value = {upated}
        setvalue={(value)=>  setUpdated(value)}
        buttonText = "Updated"
       handlsubmit={handleupdaeted}
       handleDelete={handledeltedgenra}

        
        
        
        />
        </Model>
      
        
        
        

      </div>

      
    </div>
  )
}

export default GenraList