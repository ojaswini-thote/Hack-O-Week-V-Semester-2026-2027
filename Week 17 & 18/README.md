# Project 10: Deep Learning and Generative AI

**Weeks:** 17 & 18  
**Framework:** PyTorch  
**Domain:** Deep Learning, Computer Vision, Natural Language Processing and Generative AI

## Overview

This project explores deep learning architectures and generative AI techniques through practical implementations using PyTorch and Hugging Face Transformers.

The project progresses from basic tensor operations and neural network training to image classification, sequence modeling, transfer learning, sentiment analysis, and text generation.

Different datasets and pretrained models are used to demonstrate how deep learning architectures process different types of data, learn patterns, and generate predictions.

## Project Objectives

- Understand PyTorch tensors and automatic differentiation.
- Implement neural networks and training loops.
- Build CNN models for image classification.
- Explore RNN, LSTM, and GRU architectures for sequential data.
- Apply regularization techniques to reduce overfitting.
- Implement transfer learning using pretrained CNN models.
- Perform NLP tasks using Hugging Face Transformers.
- Experiment with Large Language Models for text generation.

---

## 1. PyTorch Fundamentals and Automatic Differentiation

**Framework:** PyTorch

### Implementation

This section introduces PyTorch and its tensor-based computation system.

The implementation demonstrates:
- Creating scalar, vector, matrix, and multidimensional tensors.
- Performing mathematical and matrix operations.
- Reshaping and transposing tensors.
- Calculating gradients using Autograd.
- Implementing gradient descent to minimize a mathematical loss function.

### What Does It Do?

A simple mathematical function is used:

\[
f(x)=(x-5)^2
\]

The implementation starts with an initial value of \(x=0\) and repeatedly updates it using gradient descent.

The objective is to find the value of \(x\) that minimizes the function. The optimization process approaches \(x=5\), where the loss becomes zero.

This demonstrates how PyTorch calculates gradients automatically and how optimization is used during neural network training.

**Dataset:** No external dataset is required. A mathematical function is used for demonstration.

---

## 2. Basic Neural Network and Training Loop

**Framework:** PyTorch  
**Model:** Feedforward Neural Network (Multilayer Perceptron)

### Dataset

**Make Moons Dataset**

Generated using Scikit-learn's `make_moons()` function.

- 1,200 samples.
- 2 numerical input features.
- 2 target classes.
- Synthetic binary classification dataset.

### What Does the Model Do?

The model classifies two-dimensional data points into one of two categories.

The dataset contains two interleaving crescent-shaped groups, making it useful for demonstrating nonlinear classification.

The neural network contains:
- Input layer with 2 features.
- First hidden layer with 16 neurons.
- Second hidden layer with 8 neurons.
- ReLU activation functions.
- Output layer with 1 neuron.

### Implementation

1. Generate the synthetic dataset.
2. Split the data into training and testing sets.
3. Standardize the input features.
4. Construct the neural network using `nn.Module`.
5. Use Binary Cross-Entropy with Logits Loss.
6. Train the model using the Adam optimizer.
7. Evaluate training and testing accuracy.
8. Visualize the training and testing loss.

**Objective:** Understand how a neural network learns relationships between input features and target classes through forward propagation, backpropagation, and parameter optimization.

---

## 3. Convolutional Neural Network (CNN) for Image Classification

**Framework:** PyTorch  
**Model:** Custom Convolutional Neural Network

### Dataset

**Fashion-MNIST**

Fashion-MNIST is an image classification dataset containing grayscale clothing images.

- 60,000 training images.
- 10,000 testing images.
- Image dimensions: 28 × 28 pixels.
- 10 clothing categories.

The notebook uses a subset of 10,000 training images and 2,000 testing images to keep training manageable.

### What Does the Model Do?

The CNN identifies the type of clothing shown in an image.

It classifies images into one of ten categories:

- T-shirt/top
- Trouser
- Pullover
- Dress
- Coat
- Sandal
- Shirt
- Sneaker
- Bag
- Ankle boot

### Model Architecture

The CNN consists of:

1. Convolutional layer with 32 filters.
2. Batch normalization and ReLU activation.
3. Max pooling.
4. Convolutional layer with 64 filters.
5. Batch normalization and ReLU activation.
6. Max pooling.
7. Flattening layer.
8. Fully connected layer with 128 neurons.
9. Dropout.
10. Output layer with 10 neurons.

### Implementation

- Load and preprocess Fashion-MNIST images.
- Extract image features through convolution operations.
- Reduce spatial dimensions using max pooling.
- Train the CNN using Cross-Entropy Loss and Adam.
- Predict clothing categories.
- Evaluate classification accuracy and generate a classification report.
- Visualize training and testing loss.

**Objective:** Understand how CNNs automatically learn visual features such as edges, shapes, and patterns to classify images.

---

## 4. Sequence Modeling Using RNN, LSTM and GRU

**Framework:** PyTorch  
**Models:** Simple RNN, LSTM and GRU

### Dataset

**Synthetic Sequential Dataset**

Generated using NumPy.

- 3,000 samples.
- 20 time steps per sequence.
- 1 numerical feature at each time step.
- 2 target classes.

The target is assigned according to the average value of each sequence:

- Class 1: Sequence average is positive.
- Class 0: Sequence average is zero or negative.

### What Do the Models Do?

The models learn to process ordered numerical sequences and predict whether the average value of a sequence is positive or non-positive.

Three recurrent architectures are implemented and compared:

**Simple RNN**

Processes sequential inputs while maintaining a hidden state that carries information from previous time steps.

**LSTM (Long Short-Term Memory)**

Uses memory cells and gating mechanisms to control how information is stored, updated, and forgotten.

**GRU (Gated Recurrent Unit)**

Uses update and reset gates to control information flow through the sequence.

### Implementation

1. Generate synthetic sequential data.
2. Split the data into training and testing sets.
3. Build separate RNN, LSTM, and GRU models.
4. Train each model using Cross-Entropy Loss.
5. Optimize using Adam.
6. Evaluate testing accuracy.
7. Compare training loss across all three architectures.

**Objective:** Understand how recurrent neural networks process sequential information and compare the behavior of different recurrent architectures.

---

## 5. Deep Learning Regularization

**Framework:** PyTorch  
**Model:** Regularized CNN

### Dataset

**Fashion-MNIST**

The same Fashion-MNIST dataset used in the CNN section is reused.

For this experiment:
- 7,000 images are used for training.
- 1,000 images are used for validation.

### What Does the Model Do?

The experiment trains a CNN for clothing image classification while applying techniques that help prevent overfitting.

Three regularization techniques are demonstrated:

**Dropout**

Randomly disables a proportion of neurons during training to reduce dependence on specific neurons.

**Batch Normalization**

Normalizes intermediate activations within the network to help stabilize and improve training.

**Early Stopping**

Monitors validation loss and stops training when validation performance stops improving.

The model restores the weights corresponding to the best validation loss.

### Implementation

- Build a CNN containing batch normalization and dropout.
- Divide the dataset into training and validation sets.
- Monitor training and validation loss.
- Apply early stopping with a patience value of 2.
- Restore the best-performing model weights.
- Visualize training and validation loss.

**Objective:** Demonstrate how regularization techniques help neural networks generalize better to unseen data.

---

## 6. Transfer Learning Using Pretrained ResNet18

**Framework:** PyTorch and Torchvision  
**Model:** ResNet18

### Dataset

**CIFAR-10**

CIFAR-10 is an image classification dataset containing 60,000 color images.

- 50,000 training images.
- 10,000 testing images.
- Image dimensions: 32 × 32 pixels.
- 10 object categories.

The notebook uses:
- 2,000 training images.
- 500 testing images.

### What Does the Model Do?

The experiment uses a pretrained ResNet18 model to classify images into the ten CIFAR-10 categories.

The model initially contains visual features learned from ImageNet.

Instead of training the entire network from scratch:
1. Load pretrained ResNet18 weights.
2. Freeze the pretrained feature extraction layers.
3. Replace the final fully connected layer with a new layer containing 10 output neurons.
4. Train the new classification layer using CIFAR-10.
5. Evaluate the model on the test subset.

### Implementation

- Download CIFAR-10.
- Resize images to 224 × 224 pixels.
- Normalize images using ImageNet mean and standard deviation.
- Load pretrained ResNet18.
- Freeze existing network parameters.
- Replace the final classification layer.
- Train the new layer using Adam.
- Evaluate training and testing accuracy.

**Objective:** Understand how pretrained models can reuse previously learned visual features for a new image classification task.

**Note:** This implementation demonstrates feature extraction using transfer learning. It does not unfreeze the pretrained layers for full fine-tuning.

---

## 7. Natural Language Processing Using Hugging Face Transformers

**Framework:** Hugging Face Transformers  
**Model:** DistilBERT

### Dataset / Input

The implementation uses three manually provided English text samples rather than an external dataset.

The examples contain positive and negative statements about projects and presentations.

### What Does the Model Do?

The pretrained DistilBERT model performs sentiment analysis on input text.

It determines whether a given statement expresses:

- Positive sentiment.
- Negative sentiment.

For each input, the model returns a predicted sentiment label and confidence score.

### Implementation

1. Load the pretrained DistilBERT sentiment analysis model.
2. Provide sample text inputs.
3. Tokenize the input text.
4. Process the tokens using the transformer model.
5. Generate sentiment predictions.
6. Display the predicted label and confidence score.

### Model Details

The implementation uses:

`distilbert/distilbert-base-uncased-finetuned-sst-2-english`

This is a pretrained DistilBERT checkpoint fine-tuned for binary sentiment classification.

**Objective:** Understand how pretrained transformer models can perform NLP tasks without training a language model from scratch.

---

## 8. Text Generation Using a Pretrained Language Model

**Framework:** Hugging Face Transformers  
**Model:** Tiny GPT-2

### Dataset / Input

A manually provided text prompt is used:

"Artificial intelligence is changing education because"

No separate training dataset is required because the model uses pretrained weights.

### What Does the Model Do?

The GPT-2 model generates additional text based on the given prompt.

It predicts subsequent tokens based on the preceding text and produces a continuation.

### Implementation

1. Load the pretrained Tiny GPT-2 model.
2. Provide an input prompt.
3. Generate up to 50 additional tokens.
4. Apply sampling with a temperature of 0.8.
5. Display the generated text.

**Objective:** Understand the fundamentals of autoregressive language generation and how pretrained language models generate text.

**Note:** The `sshleifer/tiny-gpt2` checkpoint is a lightweight demonstration model. It is intended to illustrate the generation workflow rather than produce high-quality long-form content.

---

## 9. Optional LLM API Integration

**Technology:** OpenAI API

### What Does It Do?

This optional experiment demonstrates how an application can communicate with a hosted Large Language Model through an API.

The example sends a prompt requesting a three-point summary of why regularization is useful in deep learning.

The API returns a generated response that is displayed in the notebook.

### Implementation

- Install the OpenAI Python SDK.
- Access the API key securely through Google Colab Secrets.
- Initialize the OpenAI client.
- Send a text prompt.
- Receive and display the generated response.

**Objective:** Understand how external LLM APIs can be integrated into Python applications for text generation, summarization, and question answering.

**Note:** This section is optional and requires an API key. The project also includes an open-model text generation demonstration using Hugging Face.

---

## Technologies and Libraries

| Category | Technologies |
|---|---|
| Programming Language | Python |
| Deep Learning | PyTorch |
| Computer Vision | Torchvision |
| Numerical Computing | NumPy |
| Data Analysis | Pandas |
| Visualization | Matplotlib |
| Machine Learning | Scikit-learn |
| NLP | Hugging Face Transformers |
| Pretrained CNN | ResNet18 |
| Transformer Model | DistilBERT |
| Language Model | GPT-2 |
| Optional API | OpenAI API |


## Installation and Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Open the Notebook

Open `Deep_Learning_and_Generative_AI.ipynb` using Jupyter Notebook or upload it to Google Colab.

### 3. Execute the Notebook

Run the cells sequentially.

**Recommended Environment:** Google Colab with GPU acceleration enabled.

Internet access is required to download datasets and pretrained model weights.

## Expected Outcomes

By completing this project, the following practical skills will be demonstrated:

- Creating and manipulating tensors using PyTorch.
- Calculating gradients using automatic differentiation.
- Building and training neural networks.
- Performing image classification using CNNs.
- Comparing RNN, LSTM, and GRU architectures.
- Applying regularization techniques.
- Reusing pretrained models through transfer learning.
- Performing sentiment analysis using DistilBERT.
- Generating text using GPT-2.
- Integrating LLM APIs into Python applications.

## Conclusion

This project demonstrates the practical application of deep learning and generative AI techniques across different domains.

It begins with PyTorch fundamentals and progresses through neural network training, image classification, sequential data processing, regularization, and transfer learning.

It also introduces transformer-based NLP and Large Language Models through pretrained models and API integration.

By working with different datasets and model architectures, the project provides an understanding of how deep learning systems learn from images, numerical sequences, and text to perform classification and generation tasks.
