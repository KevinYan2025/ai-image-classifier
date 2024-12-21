from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS
model = tf.keras.models.load_model("ai_vs_human_model.h5")

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    img = Image.open(file).convert('RGB').resize((128, 128))  # Ensure image is in RGB format
    img_array = np.array(img) / 255.0  # Normalize pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    
    prediction = model.predict(img_array)[0][0]
    label = "AI-Generated" if prediction > 0.5 else "Human-Generated"
    
    return jsonify({"prediction": label, "confidence": float(prediction)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)