import React from 'react';

interface LoaderInnerProps {
    loading: boolean;
    label?: string;
}

export declare type LoaderProps = React.PropsWithChildren<LoaderInnerProps>;

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {

    const loadingMsg = ():string => {
        if (props.loading) {
            if (props.label) {
                return props.label + '...';
            }
            return 'Loading...';
        }
        return '';
    }
    return (
        <>
            {props.loading ? loadingMsg() : props.children}
        </>
    )
}

export default Loader;
