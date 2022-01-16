import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator';
import User from 'App/Models/User';

export default class AuthController {
    public async register ({request, auth, response}: HttpContextContract){
        const validationSchema = schema.create({
            nama: schema.string({trim:true}),
            username: schema.string({trim:true}, [
                rules.maxLength(50),
                rules.unique({table: 'users', column: 'username'})
            ]),
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
        const { uid, password } = request.all()
        // const { uid, password } = request.only(['uid', 'password'])

        try {
            await auth.attempt(uid, password)
            return response.json( { message: 'Anda Berhasil login!' })
        } catch (error) {
            return response.json( { message: 'Username, email atau password salah!' , other: error})
        }
        
    }
    
    public async logout( { response, auth}: HttpContextContract) {
        await auth.logout()
        
        return response.json({ message: 'Berhasil logout!'})
    }
}
