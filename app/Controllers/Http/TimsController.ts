import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tim from 'App/Models/Tim'

export default class TimsController {
    public async store({request, response}: HttpContextContract) {
        const data = Tim.create({
            namaTim: request.input('nama_tim')
        })
    return response.json(data)
    }

    public async update({request}: HttpContextContract) {
        const logoTim = request.file('logo_tim')
        
        if(!logoTim) {
            return 'Mohon upload gambar'
        }

        const path = await logoTim.move(Application.publicPath('images'))

        return path
    }
}
