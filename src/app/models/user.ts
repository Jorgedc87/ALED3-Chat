export class User {
    id: number
    name: string
    email: string
    password!: string

    constructor(respuesta: any){
        this.id = Number(respuesta['id'])
        this.name = respuesta['name']
        this.email = respuesta['email']
    }
}
