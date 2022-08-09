import { Body, ConsoleLogger, Controller,Post } from "@nestjs/common";
import { AuthService } from "./auth.service"; 
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){
        
    }
     
    @Post('signup')

    signup(@Body() dto:AuthDto
        // @Body('email')email: string,
    )
        {       
        //    console.log({password:typeof dto.password});           
            return this.authService.signup(dto);
        }




    @Post('signin')
    signin(){
        return this.authService.login()
    }
}