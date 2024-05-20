import { Body, Controller, Post, Put } from "@nestjs/common";
import { bookservise } from "./book.service";
import {book } from "./data/book.dto";


@Controller("book")
export class bookcontroller{

    constructor(private bookservise : bookservise){
        
    }
    
    
    @Put("/update")
    updatebook(@Body() book : book): String{
        return this.bookservise.updatebookservice(book);
    }
    
    @Post("/add")
    addbook(@Body() book : book){
         return this.bookservise.addbookservice(book);
    }

}

function uuid(): string {
    throw new Error("Function not implemented.");
}
