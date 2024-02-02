import React from "react";
import FeedModal from "./FeedModal";
import FeedFotos from "./FeedFotos";

const FeedComp = () => {

    const [modalFoto,setModalFoto] = React.useState(null);

    return(
        <div>
            {modalFoto && <FeedModal photo={modalFoto} setModalFoto={setModalFoto}/>}
            <FeedFotos setModalFoto={setModalFoto}/>
        </div>
    )
}

export default FeedComp