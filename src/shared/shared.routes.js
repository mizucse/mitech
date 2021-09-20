import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
// import Dashboard from './components/dashboard/dashboard';
import PublicProducts from './components/product/product';
import ProductDetails from './components/product/product.view';
// import Categories from './components/categories/categories'; 
import Orders from './components/orders/order.list';  
// import Users from './components/users/users';  
import CartList from '../../src/admin/components/cart/cartList';

export default function UserRoutes() {
    return (
        <>
            <Switch> 
                <Route exact path="/" >
                    <PublicProducts />
                </Route> 
                <Route exact path="/product/:id" >
                    <ProductDetails />
                </Route> 
                <Route path="/orders" >
                    <Orders />
                </Route>
                <Route path="/cart" >
                    <CartList />
                </Route> 
                <Route exact path="*" >
                    Not Found
                </Route>
            </Switch>
        </>
    )
}