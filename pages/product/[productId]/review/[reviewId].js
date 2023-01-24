import {useRouter} from 'next/router';
import React from 'react';

const ReviewDetails = () => {
    const router = useRouter();
    const {productId, reviewId} = router.query;
    return (
        <div>
            <h2>Product Id {productId} and Review Id {reviewId}</h2>
        </div>
    );
};

export default ReviewDetails;