import { registerUser, getBook } from './api/noAuth.js'
import { loginUser } from './api/basicAuth.js'
import { editUser, delUser } from './api/tokenAuth.js'
import { CancelToken } from 'apisauce'

const source = CancelToken.source()
//const token ='Udmci8uQg-kEogp27imq-jKSPeLmZKnd9_yhRBsxXnw'

const register = async (cancelToken)=>{
    const user = {
        "email": "jrs@jrs.com",
        "first_name": "Jody",
        "last_name": "Ray",
        "password": "123"
    }
    const {error} = await registerUser(user, cancelToken)
    console.log(error?error:"It works")
}
// register(source.token)//Worked
// console.log(source.token)


const login = async (cancelToken) =>{
    let email = 'jrs@jrs.com'
    let password = '123'
    const {user, error} = await loginUser(email, password, cancelToken)
    console.log(error?error:"It works")
    console.log(user)
}
// login(source.token)//worked
// console.log(source.token)


const edit = async (cancelToken) =>{
    const userEdit={
        'first_name': "El Jody"
    }
    const {error} = await editUser(token, userEdit, cancelToken)
    console.log(error?error:"It Worked")
    console.log(user)
}
// edit(source.token)//worked
// console.log(source.token)


const delThisUser = async (cancelToken) =>{
    const {error} = await delUser(token, cancelToken)
    console.log(error?error:"It Worked")
    console.log(source.token)
 }
//delThisUser(source.token)//worked


const findBook = async (cancelToken)=>{
    const {book, error} = await getBook(25, cancelToken)
    console.log(error?error:"It works")
    console.log(book)
}
//findBook(source.token)//worked