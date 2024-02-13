import React from "react";
import FeedModal from "./FeedModal";
import FeedFotos from "./FeedFotos";
import Head from "../Help/Head";

const FeedComp = () => {

    const [modalFoto,setModalFoto] = React.useState(null);

    return(
        <div>
            <Head title='Fotos'/>
            {modalFoto && <FeedModal photo={modalFoto} setModalFoto={setModalFoto}/>}
            <FeedFotos setModalFoto={setModalFoto}/>
        </div>
    )
}

export default FeedComp