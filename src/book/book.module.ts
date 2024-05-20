import { Module } from "@nestjs/common";
import { bookservise } from "./book.service";
import { bookcontroller } from "./book.controller";

@Module({
    imports :[],
    controllers : [bookcontroller],
    providers : [bookservise]
})
export class Bookmodule{}