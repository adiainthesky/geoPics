import React, { useState } from 'react'
import './BasicModal.css'

const BasicModal = () => {
    const [modalState, setModalState] = useState(false);
    const toggleModalState = () => setModalState(!modalState)

    return (
        <div>
            <div className={`modalBackground modalShowing-${modalState}`}>
                <div className="modalInner">
                    <h2>Basicrmation about the site</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam modi delectus vero nostrum accusantium perspiciatis atque ad aliquid incidunt a corrupti quo quam necessitatibus enim saepe, corporis iure consectetur neque? </p>
                </div>
            </div>
            <button onClick={() => toggleModalState()}>Open modal</button>
        </div>
    )
}

export default BasicModal
