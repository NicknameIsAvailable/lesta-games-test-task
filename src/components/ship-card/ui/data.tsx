import {Ship} from "../../../shared/interfaces.ts";
import {Card} from "@mui/joy";

const Data = ({data}: {data: Ship}) => {
    return (
        <Card className="flex flex-col gap-4 w-1/3 p-6">
            <div className="bg-black/30 border-gray-500/30 border-2 min-h-20 rounded-2xl">
                <img src={data.icons.large} alt={data.title} className="w-full"/>
            </div>
            <h1 className="font-bold text-2xl">
                {data?.title}
            </h1>
            <div className="flex justify-between">
                <h2 className="font-bold text-xl">
                    {data?.type.name}
                </h2>
                <h2 className="text-green-500 font-bold text-xl">
                    {data?.level} lvl
                </h2>
            </div>
            <div className="flex justify-between bg-gray-500 p-2 rounded-xl align-center">
                <img src={data?.nation.icons.small} alt={data.nation.name}/>
                <h2 className="text-white font-bold text-xl">
                    {data?.nation.name}
                </h2>
            </div>
            <p className="font-medium text-md">
                {data?.description.slice(0, 150)}...
            </p>
        </Card>
    );
};

export default Data;