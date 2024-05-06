import PropTypes from 'prop-types';

const CheckoutsRow = ({ checkout, handleDelete,handleApprove }) => {

    const { _id, serviceImage, serviceName, servicePrice, bookingDate, customerMessage, status } = checkout;

    

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle bg-primaryColor text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
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
                {customerMessage.length > 0 ? customerMessage : 'Did Not wrote any messages'}
            </td>
            <td>
                ${servicePrice}
            </td>
            <td>{bookingDate}</td>
            <th>
                {
                    status === 'confirm' ? <span className="badge py-6 rounded-lg badge-success text-white">Approved</span> :
                    <button onClick={()=>handleApprove(_id)} className="btn bg-primaryColor text-white">Approve</button>}
            </th>
        </tr>
    );
};

CheckoutsRow.propTypes = {
    checkout: PropTypes.object,
    handleDelete: PropTypes.func,
    handleApprove: PropTypes.func,
}

export default CheckoutsRow;