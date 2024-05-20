import { Injectable } from "@nestjs/common";
import { book } from "./data/book.dto";
import { v4 as uuidv4}  from 'uuid';


@Injectable()
export class bookservise{
    addbookservice(book: book) {
        throw new Error("Method not implemented.");
    }
     
    public books : book [] = [];
    
    
    //addbook
     addbook(book: book) : string{
        this.books.push(book);
        return "book added";
        }

    //updatebook
    updatebookservice(book : book) : string{
        let index = this.books.findIndex((currentbook) => {
            return currentbook.id == book.id;
        })
        this.books[index] = book;
        return 'book updated';
        }
    
}

function add(arg0: string): (target: bookservise, propertyKey: "addbook", descriptor: TypedPropertyDescriptor<(book: book) => void>) => void | TypedPropertyDescriptor<(book: book) => void> {
    throw new Error("Function not implemented.");
}
