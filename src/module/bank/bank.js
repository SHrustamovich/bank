const model = require('./model')

module.exports = {
    GET_DATA: async(_, res) => {
        try {
            const allData = await model.allData()

            if(!allData.length) {
                return res.send({
                    message: "stores not found"
                })
            } 

            res.send(allData)
        } catch(err) {
            console.log(err)
            res.json({
                status: 500,
                message: "Internal server error"
            })
        }
    },
    CREATE_DATA: async(req,res) =>{
        try {
            const { branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc } = req.body

            const newData = await model.createData(branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc)

            if(newData) {
                res.json({
                    status: 200,
                    message: "Data create"
                })
            }
        } catch(err) {
            console.log(err)
            res.json({
                status: 500,
                message: "Internal server error"
            })
        }
    },
    UPDATE_DATA: async(req,res) => {
        try{
          const {branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc,id} = req.body
          const Update = await model.dataUpdate(branch,bank_customer_id,tieto_customer_id,head_customer_id,cur_acc,id)
          if(Update) {
            res.json({
                status: 200,
                message: "Data update"
            })
        }
        }catch(err){
            console.log(err)
            res.json({
                status: 500,
                message: "Internal server error"
            })
        }
    },

    DELETE_DATA: async(req,res) => {
     try{
       const {id} = req.body
       const Delete = await model.deleteData(id)
       if(Delete){
           res.json({
               status:200,
               message:"Data delete"
           })
       }
     }catch(err){
         console.log(err)
         res.json({
             status:500,
             message:"Internal server error"
         })
     }
    }
}