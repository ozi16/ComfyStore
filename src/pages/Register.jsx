import { FormInput, SubmitBtn } from "../components"
import { Link, Form } from "react-router-dom"

const Register = () => {

    return (
        <section className="h-screen grid place-items-center ">
            <Form method="submit" className="card border-2 w-96 p-8 bg-base-100 flex flex-col gap-y-4 shadow-lg capitalize">
                <h4 className="text-center font-bold text-3xl">register</h4>
                <FormInput type='text' label='username' name='username' />
                <FormInput type='email' label='email' name='email' />
                <FormInput type='password' label='password' name='password' />
                <div className="mt-4 ">
                    <SubmitBtn type='register' />
                </div>
                <p className="text-center">already a member?
                    <Link to='/login' className="ml-2 link-primary link-hover capitalize">login</Link>
                </p>
            </Form>

        </section>
    )

}

export default Register