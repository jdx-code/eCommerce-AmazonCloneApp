import React, { useEffect, useReducer } from "react";
import Product from "../components/Product";
import axios from 'axios';
import logger from 'use-reducer-logger';
// import data from '../data';

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

function HomeScreen(){

    //const[products, setProducts] = useState([]);
    const[{loading, error, products}, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: ''
    });

    useEffect(()=>{
        const fetchData = async() => {

            dispatch({type: 'FETCH_REQUEST'});
            try{
                const result = await axios.get('/api/products');
                dispatch({type: 'FETCH_SUCCESS', payload: result.data})
            } catch(err){
                dispatch({type: 'FETCH_FAIL', payload: err.message});
            }

            // setProducts(result.data);
        }
        fetchData();
    }, [])

    return(
        <div>
            <h1>Featured Products</h1>
            <div className="products">
                {loading ? ( 
                    <div>Loading..</div> 
                    ) : error ? ( 
                    <div>{error}</div> 
                    ) : (
                    products.map((product)=>(
                        <div>
                            <Product key={product._id} product={product}></Product>
                        </div>                        
                    )))  
                }              
            </div>
        </div>        
    );
}

export default HomeScreen;