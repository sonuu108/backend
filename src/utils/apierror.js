class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error =[],
        stack=""
    ){
        super(message)
        this.statusCode = statusCode;
        this.data = null;
        this.messsage= message;
        this.success = false;
        this.errors = this.errors



    }
}

export {ApiError}