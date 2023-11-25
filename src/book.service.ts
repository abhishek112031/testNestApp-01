import { Injectable } from "@nestjs/common"

@Injectable()
export class BookService{
    // addBook(newBook):string{
    //     return "this will add book"
    // }

    addBook(newBook){
        return newBook
    }

    
    deleteBook():string{
        return "this will delete book"
    }

    updateBook():string{
        return "this will update book"
    }


    findAllBooks():string{
        return "this will findall books"
    }


}