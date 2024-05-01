import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;

    return (
        <div className="card card-compact p-6 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions items-center justify-end">
                    <p className="text-lg text-primaryColor font-medium">${price}</p>
                    <button className="btn btn-ghost btn-sm btn-primary hover:bg-transparent">
                        <FaArrowRight className="text-primaryColor" />
                    </button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;