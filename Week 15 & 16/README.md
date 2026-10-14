# Week 15 & 16 - Neural Networks from Scratch and Model Deployment

## Project 9

This project demonstrates neural network fundamentals, model training, and model deployment using Python, NumPy, and Scikit-learn.

The project covers perceptrons, activation functions, forward propagation, backpropagation, loss functions, SGD, Adam, and saving/loading trained models using pickle and joblib.

A neural network is implemented from scratch using NumPy, including forward propagation, binary cross-entropy loss, gradient calculation, and weight updates.

---

## Objectives

- Understand perceptrons and neural network architecture.
- Study activation functions such as Sigmoid and ReLU.
- Implement forward propagation using NumPy.
- Calculate binary cross-entropy loss.
- Implement backpropagation using the chain rule.
- Update weights using SGD.
- Understand the Adam optimizer.
- Compare SGD and Adam.
- Understand model serialization.
- Save and load models using pickle and joblib.
- Save and restore NumPy neural network parameters.

---

## Dataset

The project uses a synthetic two-class dataset generated using Scikit-learn's `make_moons` function.

The dataset contains two numerical features and a binary target.

It is suitable for demonstrating non-linear decision boundaries in neural networks.

---

## Technologies Used

- Python
- NumPy
- Pandas
- Matplotlib
- Scikit-learn
- pickle
- joblib
- Google Colab
- Jupyter Notebook

---

## Perceptron

A perceptron is a basic computational unit that calculates a weighted sum of inputs and applies an activation function.

The weighted sum is:

`z = wᵀx + b`

where:

- `x` represents input features.
- `w` represents weights.
- `b` represents bias.
- `z` represents the weighted sum.

The activation function transforms the weighted sum into an output.

---

## Activation Functions

### Sigmoid

The sigmoid function maps a numerical input to a value between 0 and 1.

It is used in the output layer for binary classification.

### ReLU

The Rectified Linear Unit returns zero for negative inputs and the input itself for positive inputs.

It is used in the hidden layer of the NumPy neural network.

---

## Forward Propagation

Forward propagation passes input features through the network to generate predictions.

The implemented network contains:

- Input layer: 2 features
- Hidden layer: 8 neurons using ReLU
- Output layer: 1 neuron using Sigmoid

The output represents the predicted probability of the positive class.

---

## Loss Function

The project uses binary cross-entropy to measure the difference between actual labels and predicted probabilities.

The loss is used to assess model performance and guide weight updates.

---

## Backpropagation

Backpropagation calculates gradients of the loss with respect to the network parameters.

The chain rule is used to calculate gradients through the hidden and output layers.

The gradients are then used to update weights and biases.

---

## Optimizers

### Stochastic Gradient Descent (SGD)

SGD updates model parameters using gradients to reduce the loss.

The NumPy neural network uses gradient descent updates with a fixed learning rate.

### Adam

Adam uses moving averages of gradients and squared gradients to adapt parameter updates.

The project compares SGD and Adam using Scikit-learn's `MLPClassifier`.

---

## Neural Network from Scratch

The NumPy implementation includes:

1. Weight and bias initialization
2. Forward propagation
3. ReLU and Sigmoid activation functions
4. Binary cross-entropy loss
5. Backpropagation
6. Gradient calculation
7. SGD weight updates
8. Loss visualization
9. Test-set evaluation
10. Decision boundary visualization

---

## Model Deployment Basics

Model serialization allows a trained model to be saved and loaded later without training it again.

### Pickle

The project uses Python's `pickle` module to save and load the trained Scikit-learn model and scaler.

### Joblib

The project also uses `joblib` to serialize and restore the trained model and scaler.

### NumPy Parameters

The weights and biases of the NumPy neural network are saved in an `.npz` file and loaded for later use.

Only load pickle and joblib files from trusted sources.

---

## Project Workflow

```text
Generate Dataset
       ↓
Data Preprocessing
       ↓
Train-Test Split
       ↓
Initialize Neural Network
       ↓
Forward Propagation
       ↓
Loss Calculation
       ↓
Backpropagation
       ↓
SGD Weight Updates
       ↓
Model Evaluation
       ↓
Compare SGD and Adam
       ↓
Save Model
       ↓
Load Model
       ↓
Make Predictions
```

---

## Visualizations

The project includes:

- Dataset scatter plot
- Activation function plots
- Training loss curve
- Neural network decision boundary
- SGD and Adam comparison

---

## Learning Outcomes

After completing this project, the following concepts are demonstrated:

- Perceptrons
- Weights and biases
- Neural network layers
- Sigmoid activation
- ReLU activation
- Forward propagation
- Binary cross-entropy
- Backpropagation
- Chain rule
- Gradient descent
- SGD
- Adam
- Model serialization
- Pickle
- Joblib
- Saving neural network parameters
- Model loading and prediction

---

## How to Run

### Google Colab

1. Open `Neural_Network_From_Scratch.ipynb` in Google Colab.
2. Run the notebook cells sequentially.
3. Examine the loss curve and decision boundary.
4. Compare SGD and Adam.
5. Execute the model saving and loading cells.
6. Test predictions using the restored model.

### Jupyter Notebook

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Start Jupyter Notebook:

```bash
jupyter notebook
```

Open `Neural_Network_From_Scratch.ipynb` and run the cells sequentially.

---

## Conclusion

This project demonstrates how a neural network learns through forward propagation, loss calculation, backpropagation, and weight updates.

The NumPy implementation provides a practical understanding of neural network training from scratch. The SGD and Adam comparison introduces optimization strategies, while pickle and joblib demonstrate the basics of saving, restoring, and reusing trained machine learning models.
