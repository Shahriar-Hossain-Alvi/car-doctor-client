import loginImg from "../../assets/images/login/login.svg";

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log("Working");
    }


    return (
        <div className="hero mt-8 mb-36">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={loginImg} alt="" />
                </div>


                <div className="card shrink-0 w-full max-w-md border border-dotted border-[Dark 05] p-12 w-1/2">
                    <h1 className="text-5xl text-center font-medium">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-primaryColor text-white hover:bg-transparent hover:text-primaryColor hover:border-primaryColor" type="submit" value="Sign In" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;