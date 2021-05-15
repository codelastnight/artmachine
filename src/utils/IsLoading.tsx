import React, {useState} from 'react';
import Anime from 'animejs';

import '../scss/components/isLoading.module.scss'


export const IsLoading = (WrappedComponent, loadingMessage) => {
    function HOC(props) {
        const [isLoading,setLoading] = useState(true);
        const setLoadingState = isComponentLoading => {
            setLoading(isComponentLoading)
        }
        return (
            <>
                {isLoading && 
                <div className="isloading__wrapper">
                    {loadingMessage}
                </div>
                }
                <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        )
    }
    return HOC;
}