import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import Swal from "sweetalert2"
import useAuth from "../../hooks/useAuth"

const SignUp = () => {
  const { user, setUser } = useAuth()
  const axiosPublic = useAxiosPublic()
  console.log(user)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const name = data.name
    const number = data.number
    const email = data.email
    const pin = data.password
    const balance = 0
    const role = "pending"
    console.log(name, number, email, pin)
    const info = {
      name,
      number,
      email,
      pin,
      balance,
      role,
    }
    try {
      const { data } = await axiosPublic.post("/users", info)
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `User Created successfully`,
          showConfirmButton: false,
          timer: 1500,
        })
        const userInfo = { name, number, email, pin, balance, role }
        setUser({ ...userInfo })
      }
    } catch (error) {
      console.log(error)
    }
    // console.log(data.name, data.email, data.number, data.password)
    // createUser(data.email, data.password).then((result) => {
    //   const loggedUser = result.user
    //   console.log(loggedUser)
    //   updateUserProfile(data.name, data.photoURL)
    //     .then(() => {
    //       // create user entry in the database
    //       const userInfo = {
    //         name: data.name,
    //         email: data.email,
    //         image: data.photoURL,
    //       }
    //       axiosPublic.post("/users", userInfo).then((res) => {
    //         if (res.data.insertedId) {
    //           console.log('User Added to the database')
    //           reset()
    //           Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "User Created Successfully",
    //             showConfirmButton: false,
    //             timer: 1500,
    //           })
    //           navigate("/")
    //         }
    //       })
    //     })
    //     .catch((error) => console.log(error))
    // })
  }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-start mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 text-start mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  {...register("number", {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                    pattern: /(?=.*[0-9])/,
                  })}
                  placeholder="number"
                  className="input input-bordered"
                />
                {errors.number?.type === "required" && (
                  <p className="text-red-600 mt-2">Number is required</p>
                )}
                {errors.number?.type === "minLength" && (
                  <span className="text-red-600 text-start mt-2">
                    Number must be 11 digit
                  </span>
                )}
                {errors.number?.type === "maxLength" && (
                  <span className="text-red-600 text-start mt-2">
                    Number must be 11 digit
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PIN</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    pattern: /(?=.*[0-9])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 mt-2">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 mt-2">Password must be 5 digit</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 mt-2">Password must be 5 digit</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mb-2 font-medium">
              <small>
                Already have an account ?{" "}
                <Link className="text-blue-600" to={"/"}>
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
