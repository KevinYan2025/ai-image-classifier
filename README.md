# AI-Art Classifier

This project is an AI-based image classifier that distinguishes between AI-generated and human-created art. It leverages advanced machine learning techniques and a convolutional neural network (CNN) to analyze and classify images. The project includes a React frontend for user interaction and a Flask backend for serving the trained model and handling image classification requests.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Model Training](#model-training)
- [How the Model Works](#how-the-model-works)
- [Contributing](#contributing)
- [License](#license)

## Introduction

As AI-generated content becomes more prevalent, it is important to have tools that can distinguish between AI-generated and human-created art. This project aims to provide such a tool by leveraging machine learning techniques to classify images. This has significant implications for art authentication, intellectual property rights, and the broader cultural impact of AI in creative fields.

## Features

- Classifies images as either AI-generated or human-created.
- Provides a confidence score for each classification.
- User-friendly React frontend for uploading images and viewing results.
- Flask backend for serving the trained model and handling image classification requests.

## Technologies Used

- **Languages**:
  - Python
  - JavaScript
- **Frameworks**:
  - TensorFlow
  - Keras
  - Flask
  - React
- **Libraries**:
  - OpenCV
  - scikit-learn
  - PIL (Pillow)
  - Pandas
  - NumPy
  - Tailwind CSS

## Project Structure



## Setup and Installation

### Backend

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/ai-image-classifier.git
   cd ai-image-classifier/backend
2. **Create and activate a virtual environment**:
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install the required packages**:
pip install 

4. **Run the Flask app:**:
python app.py


### Frontend

1. **Navigate to the frontend directory:**:
 cd ../frontend
2. **Install the required packages:**:
npm install

3. **Install the required packages**:
pip install 

4. **Start the development server:**:
npm run dev

## Usage

1. **Upload an image**: Use the React frontend to upload an image.
2. **View the result**: The classification result and confidence score will be displayed.

## Model Training

The model is trained using a convolutional neural network (CNN) with transfer learning from the VGG16 model. The training script preprocesses the data, applies data augmentation, and trains the model with early stopping to prevent overfitting.

