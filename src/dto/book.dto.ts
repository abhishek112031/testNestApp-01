import { IsNotEmpty,IsInt, IsString, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateBookDto {
     
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ default: "Book Title" })
    title:string;  
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ default: "Author Name" })
    author:string;

    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ default: 1000 })
    price:number;
    
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ default: true })
    status:boolean;
}

import { PartialType } from '@nestjs/mapped-types';
export class UpdateBookDto extends PartialType(CreateBookDto) { }