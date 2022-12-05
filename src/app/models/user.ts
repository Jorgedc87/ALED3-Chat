export class User {
    id: number
    name: string
    email: string
    birthday: Date
    password!: string
    bio!: string

    constructor(respuesta: any){
        this.id = Number(respuesta['id'])
        this.name = respuesta['name']
        this.email = respuesta['email']
        this.birthday = respuesta['birthday']
        this.bio = respuesta['bio']
    }
}
