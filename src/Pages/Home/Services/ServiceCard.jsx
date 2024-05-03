// import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;

    return (
        <div className="card card-compact p-6 shadow-xl">
            <figure><img className='h-56' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions items-center justify-end">
                    <p className="text-lg text-primaryColor font-medium">${price}</p>
                    {/* <button className="btn btn-ghost btn-sm btn-primary hover:bg-transparent">
                        <FaArrowRight className="text-primaryColor" />
                    </button> */}
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary hover:bg-transparent hover:text-primaryColor hover:border-primaryColor bg-primaryColor border-primaryColor">
                            Book Now
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;