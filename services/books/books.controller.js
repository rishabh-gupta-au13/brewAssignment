const bookQuery=require('../../dataAdaptor/query/books.query');
const {serverError,clientError,reply}=require('../../utilities/response');
class BookController{
    async addBook(req, res) {
        try {
        const result={}
        const {title,author,description}=req.body;
        const checkIfBookExist=await bookQuery.getBook(title);
        if(checkIfBookExist){
            const message="Book Already Exists"
            return clientError(req,res,message,409)
        }
          const saveOrders = await bookQuery.saveBook(
           title,
           author,
           description,
          );
          
          result.meessage='Book Added Successfully';
          result.title=saveOrders.title;

          reply(req,res,result);
          console.log(saveOrders)
    
        } catch (err) {
          return serverError(req,res,err)
         
        }
      }
    async getBook(req,res){
        try{
            let  checkIfBookExist
            if(req.query.title){
                checkIfBookExist=await bookQuery.getBookByTitle(req.query.title);
            }else{
                checkIfBookExist=await bookQuery.getAllBooks();

            }
            
            if(!checkIfBookExist){
                return clientError(req,res,"Book With This Title Don't Exist",404)
            }
            return reply(req,res,checkIfBookExist);


        }catch(err){
            return serverError(req,res,err)
           
        }
       


    };
    async updateBook(req,res){
        try{
    
            await bookQuery.updateBook(req.query,req.body)
            
            return reply(req,res,`Book With ${req.query.title} Updated Successfully`);


        }catch(err){
            return serverError(req,res,err)
           
        }
       


    }
    async deleteBook(req,res){
        try{
    
            await bookQuery.deleteBook(req.query.title)
            
            return reply(req,res,`Book With ${req.query.title} Deleted Successfully`);


        }catch(err){
            return serverError(req,res,err)
           
        }
       


    }

}



module.exports=new BookController()