import {Card, Option, Select} from "@mui/joy";
import {Ship} from "../../../shared/interfaces.ts";

const Sort = ({
                  data,
                  setNationFilter,
                  setLvlFilter,
                  setTypeFilter
              }: {
    data: { vehicles: Ship[] },
    setNationFilter: (nation: string | null) => void,
    setLvlFilter: (level: number | null) => void,
    setTypeFilter: (type: string | null) => void,
}) => {
    const nations: string[] = data?.vehicles.map((ship: Ship) => ship.nation.title);
    const levels: number[] = data?.vehicles.map((ship: Ship) => ship.level);
    const types: string[] = data?.vehicles.map((ship: Ship) => ship.type.title);
    const nationsSorted: string[] = Array.from(new Set(nations)).sort()
    const levelsSorted: number[] = Array.from(new Set(levels)).sort()
    const typesSorted: string[] = Array.from(new Set(types)).sort()

    const handleNationChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        console.log(event);
        setNationFilter(newValue);
    };

    const handleLvlChange = (
        event: React.SyntheticEvent | null,
        newValue: number | null,
    ) => {
        console.log(event);
        setLvlFilter(newValue);
    };

    const handleTypeChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        console.log(event);
        setTypeFilter(newValue);
    };

    return (
        <Card>
            <h1>Фильтр по нации</h1>
            <Select placeholder="Все" onChange={handleNationChange}>
                <Option value="">Все</Option>
                {nationsSorted.map((nation: string, index: number) => <Option key={index} value={nation}>{nation}</Option>)}
            </Select>

            <h1>Фильтр по уровню</h1>
            <Select placeholder="Все" onChange={handleLvlChange}>
                <Option value="Все">Все</Option>
                {levelsSorted.map((level: number, index: number) => <Option key={index} value={level}>{level}</Option>)}
            </Select>

            <h1>Фильтр по типу</h1>
            <Select placeholder="Все" onChange={handleTypeChange}>
                <Option value="Все" >Все</Option>
                {typesSorted.map((type: string, index: number) => <Option key={index} value={type}>{type}</Option>)}
            </Select>
        </Card>
    );
};

export default Sort;