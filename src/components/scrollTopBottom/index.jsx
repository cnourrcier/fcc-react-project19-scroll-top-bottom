import { useRef } from 'react';
import useFetch from '../useFetch/index';
import './styles.css';

export default function ScrollTopBottom() {
    const { data, error, loading } = useFetch('https://dummyjson.com/products?limit=100', {});
    const bottomRef = useRef(null);

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    if (loading) {
        return <p>Loading...</p>
    };

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className='container'>
            <h1>Scroll To Top And Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button className='button' onClick={handleScrollToBottom}>Scroll To Bottom</button>
            <ul className='product-list'>
                {
                    data?.products?.length
                        ? data.products.map(product => <li key={product.id} className='product'>{product.title}</li>)
                        : null
                }
            </ul>
            <button className='button' onClick={handleScrollToTop}>Scroll To Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page</h3>
        </div>
    )
}