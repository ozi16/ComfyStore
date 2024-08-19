import { SubmitBtn, FormInput } from "../components"
import { Link, Form } from "react-router-dom"

const Login = () => {
    return (
        <section className="h-screen grid place-items-center">
            <Form method="post" className=" card w-96 p-8 flex flex-col bg-base-100 gap-y-4 shadow-lg capitalize" >
                <h4 className="text-center text-3xl font-bold">login</h4>
                <FormInput type='email' label='email' name='identifier' defaultValue='test@test' />
                <FormInput type='password' label='password' name='password' defaultValue='secret' />
                <div className="mt-4">
                    <SubmitBtn text='login' />
                </div>
                <button type="button" className="btn btn-secondary btn-block capitalize">guest</button>
                <div className="text-center normal-case">
                    <p>Not a member yet?{''}
                        <Link to='/register' className="ml-2 link-primary link-hover capitalize ">register</Link>
                    </p>
                </div>
            </Form>
        </section>
    )
}

export default Login