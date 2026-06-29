const asynchandler=(reqesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqesthandler(req,res,next)).
        catch((err)=>nexterr())

    }
}


export {asynchandler}

// const asynchandler = (fn) => async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message :err.message;
//         })
        
//     }

