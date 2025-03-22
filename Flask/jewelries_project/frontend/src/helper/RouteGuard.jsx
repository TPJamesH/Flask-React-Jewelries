import React from 'react';
import { Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

function RouteGuard({ component: Component }) {
    const [isVerified, setIsVerified] = useState(null);

    useEffect(() => {
        async function check() {
            if ((await fetchToken()).status == 200) {
                setIsVerified((await fetchToken()).json.message);
            } else {
                setIsVerified(false);
            }
        }
        check();
    }, []);

    if (isVerified === null) {
        return <div>Loading...</div>;
    }
    else {
        return <Component />;
    }
}

export default RouteGuard