import react from "react";

import "../CSS/skeletons.css";


function Skeletons() {
    return (
        <div className="Skeletons">
            <div class="bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
    )
}

export { Skeletons };