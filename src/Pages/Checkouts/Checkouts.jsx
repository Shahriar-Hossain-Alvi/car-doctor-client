import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CheckoutsRow from "./CheckoutsRow";

const Checkouts = () => {
    const { user } = useContext(AuthContext);
    const [checkouts, setCheckouts] = useState([]);
    console.log(user.email);
    const url = `http://localhost:5000/checkouts?customerEmail=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCheckouts(data);
            })
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Your checkouts length {checkouts.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {
                                checkouts.map(checkout => <CheckoutsRow key={checkout._id} checkout={checkout}></CheckoutsRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Checkouts;