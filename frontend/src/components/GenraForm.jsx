import React from 'react'

export const GenraForm = ({value , setvalue, buttonText = "Submit" , handlsubmit , handleDelete}) => {
  return (
    <div className='p-3'>
        <form onSubmit={handlsubmit}>

        <label className='block text-2xl font-sm-bold'>name</label>

        <input
          type="text"
          placeholder="Enter name"
          className="form-input py-3 p-4 rounded-sm  w-[60rem] mt-3 mb-5"
          value={value}

          onChange={(e) => setvalue(e.target.value)}
          
          />

<div className="flex justify-between">
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
            {buttonText}
          </button>





         
          </div>
        </form>
        
        {handleDelete && (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Delete
            </button>
          )}

      
        
    </div>
  )
}
