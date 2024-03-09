import { Genra } from "../Models/genraModel.js"



export const createGenra  = async(req , res) => {



    const {name} =  req.body

    if(!name) {
        res.status(401).send("plese Fill al the fields ")
    }


    const extingenra =   await Genra.findOne({name})

    if(extingenra){
        return res.status(401).send("Genra is already exist")
    }


    const genra = await new Genra({name}).save()


    res.json(genra)



}

export const getallgera = async(req,res) => {

    try {


         const geras = await Genra.find({})
         res.status(200).json(geras)

    } catch (e) {
        console.log(e)

    }



}


export const getonegenra = async(req, res) =>{


  try {


     const genra = await Genra.findById(req.params.id)

     if(!genra){

        return res.status(401).send("Genra not found")
     }

     res.status(200).json(genra)

  }catch(e){
    console.log(e)
  }


}


export const dletedgenra = async(req ,res) => {

    try {

        const genra = await Genra.findByIdAndDelete(req.params.id)

        if(!genra){
            return res.status(401).send("Genra not found")
        }


         res.status(200).json("deleldt Succefully")

    }catch(e){
        console.log(e)
    }



}


export const updatedgenra = async(req,res) => {



     try {

        const {name}  = req.body

        const {id} = req.params


        const genra = await Genra.findOne({_id: id})

        if(!genra) {

            return res.status(401).send("Genra not found")

        }

        genra.name  = name

        const updated = await  genra.save()

        res.json(updated)



     }catch(e){
        console.log(e)
     }





}