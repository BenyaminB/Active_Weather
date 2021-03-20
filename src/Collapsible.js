import React, { useState } from 'react';

function Collapsible() {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="collapsible">
        {isOpen && <div className="content">SomeContent</div>}
        <button className="toggle" onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {/* {isOpen && <div className="content">SomeContent</div>} */}

    </div>
}

export default Collapsible;