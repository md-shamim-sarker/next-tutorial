import {useRouter} from 'next/router';
import React from 'react';

const ReviewDetails = () => {
    const router = useRouter();
    const {productId, reviewId} = router.query;
    return (
        <div>
            <h2>This is review details page.</h2>
            <h3>Product Id is {productId} and Review Id is {reviewId}.</h3>
        </div>
    );
};

export default ReviewDetails;