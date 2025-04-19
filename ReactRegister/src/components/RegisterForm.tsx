import "bootstrap/dist/css/bootstrap.min.css";

async function addData() {
    const username = (document.querySelector("#exampleInputEmail1") as HTMLInputElement)?.value;
    const password = (document.querySelector("#exampleInputPassword1") as HTMLInputElement)?.value;

    let body = {
        "username": username,
        "password": password
    }
    console.log(body)

    try {
        await fetch("http://127.0.0.1:5308/add_user", {
            method: "POST",
            body: JSON.stringify(body)
        })
    } catch (e) {
        console.log(e);
    }
}

const RegisterForm = () => {
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await addData();
    }

    return (
        <div>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Check me out</label>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div >
    )
}

export default RegisterForm;
