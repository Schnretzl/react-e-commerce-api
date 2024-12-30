import { func, number } from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = ({ customerId, onOrderSelect }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (customerId) {
            const fetchedOrders = [
                { id: 101, date: '2021-01-01' },
                { id: 102, date: '2021-01-15' },
                { id: 103, date: '2021-02-08' }
            ];
            setOrders(fetchedOrders);
         
            axios.get(`http://localhost:3000/customers/${customerId}/orders`)
                .then(data => setOrders(data));
        }
    }, [customerId]);

    return (
        <div className='order-list'>
            <h3>Orders</h3>
            <ul>
                {orders.map(order => (
                    <li key={order.id} onClick={() => onOrderSelect(order.id)}>
                        Order ID: {order.id}, Date: {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

OrderList.propTypes = {
    customerId: number,
    onOrderSelect: func
};

export default OrderList;