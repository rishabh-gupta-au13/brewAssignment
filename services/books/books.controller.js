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
            return clientError(req,res,message)
        }
          const saveOrders = await bookQuery.saveBook(
           title,
           author,
           description,
          );
          delete saveOrders.__v;
          result.meessage='Book Added Successfully';
          reply(req,res,result);
          console.log(saveOrders)
    
        } catch (err) {
          return serverError(req,res,err)
         
        }
      }

}



module.exports=new BookController()