import React, { useImperativeHandle, useState } from 'react'

import { forwardRef } from 'react'

const Child = forwardRef((props, ref) => {
    const [myToggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alteration() {
            setToggle(!myToggle);
        }
    })
    )


    return (
        <div>
            <button>Child Button</button>
            {myToggle && <h1>Toggle from parent to child</h1>}
        </div>
    )
})

export default Child;
