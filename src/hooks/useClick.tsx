import React from 'react';

export default function useClick() {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
        setClicked(prev=> !prev);
    };
    return { clicked, handleClick };
}