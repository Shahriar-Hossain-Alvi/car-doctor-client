import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CheckoutsRow from "./CheckoutsRow";
import Swal from 'sweetalert2'
import axios from "axios";

const Checkouts = () => {

    const { user } = useContext(AuthContext);
    const [checkouts, setCheckouts] = useState([]);
    const url = `http://localhost:5000/checkouts?customerEmail=${user?.email}`;



    useEffect(() => {
        //using axios
        axios.get(url, {withCredentials: true})
        .then(res=>{
            setCheckouts(res.data);
        })


        //using fetch
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setCheckouts(data);
        //     })
    }, [url]);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/checkouts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = checkouts.filter(checkout => checkout._id !== id);
                            setCheckouts(remaining);
                        }
                    })
            }
        });
    }

    const handleApprove = id => {
        Swal.fire({
            title: "Approve?",
            text: "Do you want to approve this request?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/checkouts/${id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: 'confirm' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Approved!",
                                text: "Request has been approved.",
                                icon: "success"
                            });
                            //update
                            const remaining = checkouts.filter(checkout=> checkout._id !== id);
                            const updatedCheckout = checkouts.find(checkout=> checkout._id === id);
                            updatedCheckout.status = 'confirm';
                            const newCheckouts = [updatedCheckout, ...remaining];
                            setCheckouts(newCheckouts)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h2 className="text-4xl text-center">Your total checkout items: {checkouts.length}</h2>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-base-200">
                            <tr>
                                <th>
                                    Remove
                                </th>
                                <th>Service Name</th>
                                <th>Messages</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>


                        {/* body */}
                        <tbody>
                            {
                                checkouts.map(checkout => <CheckoutsRow key={checkout._id} checkout={checkout} handleDelete={handleDelete}
                                    handleApprove={handleApprove}
                                ></CheckoutsRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkouts;