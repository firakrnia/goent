import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator';
import User from 'App/Models/User';

export default class AuthController {
    public async register ({request, auth, response}: HttpContextContract){
        const validationSchema = schema.create({
            nama: schema.string({trim:true}),
            email: schema.string({trim:true}, [
                rules.email(),
                rules.maxLength(255),
                rules.unique({table: 'users', column: 'email'})
            ]),
            password: schema.string({trim:true}, [
                rules.minLength(6),
                rules.confirmed('confirm')
            ]),

        })
        
        const validatedData = await request.validate({
            schema: validationSchema
        })

        const user = await User.create(validatedData)

        const resData = {
            message: "Akun berhasil terbuat",
            data : user
        }
        await auth.login(user)

        return response.status(201).json(resData) 
    }

    public async login({ request, response, auth }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.attempt(email, password)
            return token
        } catch {
        return response.badRequest('Invalid credentials')
        }
        
    }
    
    public async logout( { response, auth}: HttpContextContract) {
        await auth.logout()
        
        return response.json({ message: 'Berhasil logout!'})
    }
}
