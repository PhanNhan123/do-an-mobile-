import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import ProductDetail from '../../components/product';

class Product extends Component{
    render()
    {
    return (
        < ScrollView>
            <ProductDetail />
        </ScrollView>
    )}
}
export default Product;