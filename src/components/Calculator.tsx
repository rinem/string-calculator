import { useState } from 'react';
import { add } from '../utils/stringCalculator';

const App = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError(null);
        } catch (e: any) {
            setError(e.message);
            setResult(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h1 className="text-2xl font-semibold text-center mb-4">
                    String Calculator
                </h1>
                <div className="mb-4">
                    <label
                        htmlFor="numbersInput"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Enter numbers string (comma/newline separated):
                    </label>
                    <textarea
                        id="numbersInput"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="e.g. 1,2,3 or 1\n2,3 or //;\n1;2"
                    />
                </div>
                <button
                    onClick={handleCalculate}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Calculate Sum
                </button>
                {error && (
                    <div className="mt-4 p-4 bg-red-100 text-red-600 rounded-lg">
                        Error: {error}
                    </div>
                )}
                {result !== null && (
                    <div className="mt-4 p-4 bg-green-100 text-green-600 rounded-lg">
                        Result: {result}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
