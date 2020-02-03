import React, { useState } from 'react';

function ItemOne(props) {
    return <button {...props}>{props.children}</button>;
}
export default function Demo(props) {
    const [bool, setBool] = useState(true);

    return (
        <>
            <span>Demo</span>
            <ItemOne onClick={e => setBool(!bool)}>
                <b>{bool.toString()}</b>
            </ItemOne>
        </>
    );
}
