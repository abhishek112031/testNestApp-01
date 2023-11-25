import { Controller, Delete,Get,Param,Post,Put,HttpCode,Body } from "@nestjs/common";
import { BookService } from "./book.service";
import { CreateBookDto, UpdateBookDto } from './dto/book.dto';


@Controller("book")

export class BookController{

    // public bookService:BookService=new BookService();

    constructor(private bookService:BookService){}
    //add book
    @Post("/add")
    addBook(@Body() newBookData:CreateBookDto){
       return this.bookService.addBook(newBookData)
       
    }

    //delete
    @Delete("/delete")
    deleteBook():string{
        return this.bookService.deleteBook()
        
    }

    //update
    @Put("/update")
    updateBook():string{
        return this.bookService.updateBook()      
    }

    //find all
    @Get("/findAll")
    findAllBooks():string{
        return this.bookService.findAllBooks()    
    }


    //find by id:
    // @Get("/findBookById/:bookId")
    // findBookById(@Param() params):string{
    //     console.log(params.bookId)
    //     return `this will return book id : #${params.bookId}`
    // }


}