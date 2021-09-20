import React, { useEffect } from 'react';  

import { Table, Tag, Space, Button } from 'antd';
import { OrderListAction } from '../../../store/action/cartAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Orders() {
    const { Column, ColumnGroup } = Table;
    const dispatch = useDispatch();
    // const history = useHistory();
    const orderList = useSelector(store=>store.orderStore.data)

    console.log(orderList, "===all orders in order.list====");

    useEffect(()=> {
      dispatch(OrderListAction());
    },[]);

    const data = [
      {
        key: '1',
        name: 'John',
        phone: '01819903891',
        email: 'mizu.cse@gmail.com',
        address: 'New York No. 1 Lake Park',
        product: 'product 1',
        price: 550,
        qty: 5,
        totalPrice: 2850,
      },
      {
        key: '2',
        name: 'Jim',
        phone: '01819903891',
        email: 'mizu.cse@gmail.com',
        address: 'London No. 1 Lake Park',
        product: 'product 2',
        price: 550,
        qty: 5,
        totalPrice: 2850,
      },
      {
        key: '3',
        name: 'Joe',
        phone: '01819903891',
        email: 'mizu.cse@gmail.com',
        address: 'Sidney No. 1 Lake Park',
        product: 'product 3',
        price: 550,
        qty: 5,
        totalPrice: 2850
      },
    ];
    

    return (
        <>
            <h1>Orders</h1>
            <Table dataSource={data}>  
            <Column title="Name" dataIndex="name" key="name" /> 
            <Column title="Phone" dataIndex="phone" key="phone" />
            <Column title="email" dataIndex="email" key="email" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column title="Product" dataIndex="product" key="product" /> 
            <Column title="Price" dataIndex="price" key="price" /> 
            <Column title="Qty" dataIndex="qty" key="qty" /> 
            <Column title="Total Price" dataIndex="totalPrice" key="totalPrice" /> 
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                <a><Button type="primary">Accept</Button> </a>
                <a><Button type="danger">Delete</Button></a>
                </Space>
            )}
            />
        </Table>
        </>
    )
}

 