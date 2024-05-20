import { Module } from "@nestjs/common";
import { bookservise } from "./book/book.service";
import { bookcontroller } from "./book/book.controller";
import { Bookmodule } from "./book/book.module";
 

@Module({
    imports: [Bookmodule],
     controllers:[bookcontroller],
     providers: [bookservise],
     
})
export class AppModule {}