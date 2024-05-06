import PropTypes from 'prop-types';


const CheckoutsRow = ({ checkout }) => {

    const { serviceImage, serviceName, servicePrice, bookingDate, customerMessage } = checkout;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={serviceImage} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {serviceName}
                        </div>
                    </div>
                </div>
            </td>
            <td className='w-64'>
                {customerMessage.length>0 ? customerMessage : 'Did Not wrote any messages' }
            </td>
            <td>
                ${servicePrice}
            </td>
            <td>{bookingDate}</td>
            <th>
                <button className="btn bg-primaryColor text-white">Pending</button>
            </th>
        </tr>
    );
};

CheckoutsRow.propTypes = {
    checkout: PropTypes.object,
}

export default CheckoutsRow;