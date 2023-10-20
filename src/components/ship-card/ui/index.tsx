import Loading from "./loading.tsx";
import Data from "./data.tsx";
import {Ship} from "../../../shared/interfaces.ts";

const ShipCard = ({loading, data}: {loading: boolean, data: Ship}) => {
    if (loading) return <Loading/>
    if (data) return <Data data={data}/>
    else return ''
};

export default ShipCard;