const Loading = () => {
    return (
        <div className="flex flex-col w-1/3 h-96 p-6 gap-4">
            <div className="animate-pulse bg-gray-200 h-40 w-full rounded-2xl"/>
            <div className="animate-pulse bg-gray-200 h-14 w-full rounded-2xl"/>
            <div className="animate-pulse bg-gray-200 h-4 w-full rounded-2xl"/>
            <div className="animate-pulse bg-gray-200 h-4 w-full rounded-2xl"/>
        </div>
    );
};

export default Loading;