import { useLoaderData, useNavigate } from "react-router-dom";
import "./Checkout.css"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const message = form.message.value;

        const checkoutInfo = {
            customerName: name,
            customerPhone: phone,
            customerEmail: email,
            serviceId: _id,
            serviceName: title,
            serviceImage: img,
            bookingDate: date,
            servicePrice: price,
            customerMessage: message
        }
        console.log(checkoutInfo);

        fetch('http://localhost:5000/checkouts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(checkoutInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                toast("Successfully added to cart!");
                setTimeout(() => {
                    navigate('/');
                }, 2000)
            })
    }

    return (
        <div>
            <ToastContainer />
            <div>
                <div className="hero relative" style={{ backgroundImage: 'url(https://i.ibb.co/R6J6Wjv/checkout.png)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content py-24 text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
                            <button id="checkout-button" className="btn btn-wide bg-primaryColor border-primaryColor text-white hover:bg-orange-700 hover:border-primaryColor hover:text-white absolute bottom-0 left-1/2 transform -translate-x-1/2">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-center text-3xl font-bold">Book Service: {title}</h2>
            </div>

            <div>
                <form onSubmit={handleCheckout} className="card-body">
                    {/* first name and last name */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="form-control">
                            <input name="name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                    </div>

                    {/* phone and email */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="form-control">
                            <input name="phone" type="text" placeholder="Your phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name="email" defaultValue={user?.email} type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* date and price */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="form-control">
                            <input name="date" type="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" defaultValue={'Price: $' + price} placeholder="Price" className="input input-bordered" disabled />
                        </div>
                    </div>

                    {/* message */}
                    <div className="grid grid-cols-1">
                        <textarea name="message" placeholder="Message" className="w-full textarea textarea-bordered textarea-lg" ></textarea>
                    </div>


                    <div className="form-control mt-6">
                        <input type="submit" value="Order Confirm" className="btn bg-primaryColor border-primaryColor text-white hover:bg-transparent hover:border-primaryColor hover:text-primaryColor" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;