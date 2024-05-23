import { useState } from "react";
import useFetch from ".";
import './styles.css';

export default function UseFetchHookTest() {
    const [showProducts, setShowProducts] = useState(false);
    const { data, error, loading } = useFetch('https://dummyjson.com/products', {});

    function handleClick() {
        setShowProducts(!showProducts);
    }


    console.log(data, error, loading);

    return <div className='container'>
        <h1 className='header'>Use Fetch Hook</h1>
        <button onClick={handleClick} className={showProducts ? 'show-products-button open' : 'show-products-button'}>Show Products</button>
        {
            loading && <h3>Loading...</h3>
        }
        {
            error && <h3>{error}</h3>
        }
        {
            showProducts
            && data?.products?.length
            && data.products.map(product => <p key={product.id}>{product.title}</p>)

        }
    </div>
}