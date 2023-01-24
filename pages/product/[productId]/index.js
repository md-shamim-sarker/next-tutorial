import {useRouter} from 'next/router';
import React from 'react';

const ProductId = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h2>This is product details page. {productId}</h2>
        </div>
    );
};

export default ProductId;