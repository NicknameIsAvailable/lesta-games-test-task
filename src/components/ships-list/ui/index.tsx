import GET_GLOSSARY from "../api";
import { useQuery } from "@apollo/client";
import ShipCard from "../../ship-card/ui";
import { Ship } from "../../../shared/interfaces.ts";
import { useState } from "react";
import Sort from "../../sort/ui";
import { Button } from "@mui/joy";

const ShipsList = () => {
    const [count, setCount] = useState(21);
    const [nationFilter, setNationFilter] = useState<string | null>("");
    const [lvlFilter, setLvlFilter] = useState<number | null>(0);
    const [typeFilter, setTypeFilter] = useState<string | null>("");

    const { loading, error, data } = useQuery(GET_GLOSSARY);

    if (loading) console.log("loading", loading);
    if (error) console.log("error", error);
    if (!data) console.log("no data");

    const showMore = () => setCount(count + 21);

    const filteredData = data?.vehicles.filter((item: Ship) => {
        return (
            (lvlFilter === 0 || item.level === lvlFilter) &&
            (nationFilter === null || nationFilter === "" || item.nation.name.toLowerCase().includes(nationFilter.toLowerCase())) &&
            (typeFilter === null || typeFilter === "" || item.type.name.toLowerCase().includes(typeFilter.toLowerCase()))
        );
    });

    return (
        <div>
            <Sort data={data} setNationFilter={setNationFilter} setLvlFilter={setLvlFilter} setTypeFilter={setTypeFilter} />
            <div className="flex flex-wrap mt-4">
                {!loading ? (
                    filteredData?.slice(0, count).map((vehicle: Ship, index: number) => (
                        <ShipCard key={index} data={vehicle} loading={loading} />
                    ))
                ) : (
                    <div className="flex justify-center items-center w-full h-screen">
                        <h1 className="font-bold text-4xl text-sky-300 m-auto">Загрузка...</h1>
                    </div>
                )}
            </div>

            <div className="py-4 mx-auto w-full flex justify-center">
                <Button onClick={showMore} variant="soft">
                    Больше
                </Button>
            </div>
        </div>
    );
};

export default ShipsList;
