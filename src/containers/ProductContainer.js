import { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import Product from "./../components/Product";
import {actAddToCart, actChangeMessage} from './../actions/index'
class ProductContainer extends Component{
    render() {
        var {products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        var {onAddToCart, onChangeMessage} = this.props;
        if (!Array.isArray(products) || products.length === 0) {
            // Handle the case when products is not an array or is empty
            return null;
        }
        return products.map((product, index) => (
            <Product key={index} 
                     product={product}
                     onAddToCart = {onAddToCart}
                     onChangeMessage = {onChangeMessage} />
        ));
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const DispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}
export default connect(mapStateToProps, DispatchToProps)(ProductContainer);
