import React, { useState } from 'react';

function App() {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState("");

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', image);

        const response = await fetch('http://127.0.0.1:8080/predict', {  // Specify the backend URL
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        setResult(`${data.prediction} (${(data.confidence * 100).toFixed(2)}%)`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">Image Classifier</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <input 
                    type="file" 
                    onChange={handleImageChange} 
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                <button 
                    onClick={handleSubmit} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
                {result && (
                    <p className="mt-4 text-lg font-semibold">
                        Result: {result}
                    </p>
                )}
            </div>
            <div className="mt-8 max-w-2xl text-center">
                <p className="text-lg">
                    This project is important because it leverages advanced machine learning techniques to distinguish between AI-generated and human-created art. As AI-generated content becomes more prevalent, tools like this can help in identifying and understanding the origins of digital artworks. This has significant implications for art authentication, intellectual property rights, and the broader cultural impact of AI in creative fields.
                </p>
            </div>
        </div>
    );
}

export default App;