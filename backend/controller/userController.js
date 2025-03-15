const User = require('../model/user')

// create new user 

 const  createUser =async(req , res)=>{
    try{
        const userData =new User(req.body)
        if(!userData){
            return res.status(404).json({meg:"user data not found"})
        }
          const saveData =await userData.save()
           res.status(200).json(saveData)

    }catch(error){
    res.status(500).json({error:error})
    }
} 
 
// get one data by  id 

 const getOneData = async(req,res)=>{
     try{
        const id = req.params.id;
        const userExist = await User.findById(id) ;
        if(!userExist) {
            res.status(404).json({mes:"user not found"})
        }    
        res.status(200).json(userExist)  
        } catch(error){
             res.status(500).json({error: error})
        }
}

// get all data 

 const getAllData = async (req,res)=>{
    try{

        const userData = await User.find()
        if(!userData){
            return res.status(404).json({meg:"user data not found"})
        }

        res.status(200).json(userData)

    } catch(error){
         res.status(500).json({error: error})
    }
}


// update data 

const updateUser = async (req,res)=>{
    try{
        const id =req.params.id
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if(!updateUser){
            return res.status(404).json({meg:"user data not found"})
        }

        res.status(200).json(updatedUser)

    } catch(error){
         res.status(500).json({error: error})
    }
}

const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      
      if (!userExist) {
        return res.status(404).json({ msg: "User data not found" });
      }
      
      await User.findByIdAndDelete(id);
      return res.status(200).json({ msg: "User deleted successfully" });
      
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };



module.exports = {
    createUser,
    getOneData,
    getAllData,
    updateUser,
    deleteUser,
  };

 

