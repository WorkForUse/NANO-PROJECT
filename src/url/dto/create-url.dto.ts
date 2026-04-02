import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateUrlDto {
    @IsNotEmpty()
    @IsUrl({}, { message: 'Please provide valid long URL' })
    longUrl: string;
}