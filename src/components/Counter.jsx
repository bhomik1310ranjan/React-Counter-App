import { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);

    function decrementHandler() {
        setValue((currentValue) => currentValue - 1);
    }

    function incrementHandler() {
        setValue((currentValue) => currentValue + 1);
    }

    function resetHandler() {
        setValue(0);
    }

    return (
        <div className="flex flex-col items-center gap-y-8">
            <p className="font-medium text-2xl text-white tracking-wider uppercase">
                Counter
            </p>
            <div className="flex items-center gap-x-6 bg-white rounded-md py-2">
                <button
                    type="button"
                    onClick={decrementHandler}
                    className="font-bold text-3xl border-r border-black px-6"
                >
                    -
                </button>
                <p className="font-medium text-4xl">{value}</p>
                <button
                    type="button"
                    onClick={incrementHandler}
                    className="font-bold text-3xl border-l border-black px-6"
                >
                    +
                </button>
            </div>
            <button
                type="button"
                onClick={resetHandler}
                className="font-medium text-xl text-white tracking-wider bg-blackWith33 px-4 py-1.5 border rounded-md hover:text-black hover:bg-white transition-colors duration-300 ease-in"
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;
