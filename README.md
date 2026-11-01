# Hack-O-Week V – Semester 2026–2027

A collection of 10 hands-on projects developed as part of Hack-O-Week V. The repository covers Python programming, data analysis, mathematics for machine learning, supervised learning, clustering, dimensionality reduction, ensemble methods, neural networks, deep learning, and generative AI.

Each project focuses on implementing concepts practically using Python and relevant libraries, along with data exploration, model development, evaluation, and visualization.

---

## Repository Structure

```text
Hack-O-Week-V-Semester-2026-2027/
│
├── Week 1 & 2/
│   └── Project 1: Task Management System
│
├── Week 3 & 4/
│   └── Project 2: Employee Performance Analysis
│
├── Week 5 & 6/
│   └── Project 3: Mathematics for Machine Learning
│
├── Week 7 & 8/
│   └── Project 4: Student Admission Prediction
│
├── Week 9/
│   └── Project 5: Customer Churn Prediction
│
├── Week 10/
│   └── Project 6: Customer Segmentation Using Clustering
│
├── Week 11 & 12/
│   └── Project 7: Dimensionality Reduction Using PCA and t-SNE
│
├── Week 13 & 14/
│   └── Project 8: Ensemble Methods and Model Generalization
│
├── Week 15 & 16/
│   └── Project 9: Neural Networks from Scratch and Model Deployment
│
├── Week 17 & 18/
│   └── Project 10: Deep Learning and Generative AI
│
└── README.md
```

---

# Projects

## Project 1: Task Management System

**Weeks:** 1 & 2

**Technologies:** Python, Flask, SQLite, SQLAlchemy, HTML, CSS, JavaScript

### Overview

A web-based task management application that allows users to create, view, update, and delete tasks. It demonstrates how a frontend communicates with a Python backend through REST API endpoints and how task information is stored persistently in a relational database.

### Features

- Create new tasks with a title and description.
- View all existing tasks.
- Update task details and status.
- Delete tasks.
- Assign task priorities: Low, Medium, and High.
- Manage task statuses: Pending, In Progress, and Completed.
- Store task information using SQLite.

### Backend Implementation

The application uses Flask to implement REST API endpoints and SQLAlchemy to interact with the SQLite database.

The API supports:
- `GET /health` – Check application status.
- `GET /tasks` – Retrieve tasks with filtering, searching, sorting, and pagination.
- `GET /tasks/<id>` – Retrieve a particular task.
- `POST /tasks` – Create a task.
- `PUT /tasks/<id>` – Update a task.
- `DELETE /tasks/<id>` – Delete a task.

---

## Project 2: Employee Performance Analysis

**Weeks:** 3 & 4

**Technologies:** Python, NumPy, Pandas, Matplotlib, Seaborn

**Dataset:** `employee_performance.csv`

### Overview

A data analysis project that explores employee performance, salary distribution, departmental statistics, and other workforce-related attributes.

The project uses Python programming fundamentals and data analysis libraries to process employee records and extract meaningful information.

### Implementation

- Load and inspect employee data using Pandas.
- Identify and handle missing values.
- Calculate employee bonuses using custom functions.
- Identify top-performing employees.
- Implement an `EmployeeAnalyzer` class using object-oriented programming.
- Perform numerical operations using NumPy.
- Calculate department-wise and gender-wise statistics using Pandas `groupby()`.
- Apply list and dictionary comprehensions.
- Generate visualizations to understand employee data.

### Visualizations

- Department-wise employee analysis.
- Salary distribution histogram.
- Salary and performance scatter plot.
- Correlation heatmap.
- Pie charts for categorical distributions.

---

## Project 3: Mathematics for Machine Learning – House Price Prediction

**Weeks:** 5 & 6

**Technologies:** Python, NumPy, Pandas, Matplotlib, Scikit-learn

**Dataset:** Synthetically generated house price dataset.

### Overview

This project demonstrates how mathematical concepts form the foundation of machine learning algorithms.

A house price prediction problem is used to connect mathematical operations with model training and prediction.

### Mathematical Concepts

- Vectors and vector magnitude.
- Matrices and matrix operations.
- Dot products.
- Eigenvalues and eigenvectors.
- Derivatives and tangent calculations.
- Gradients and contour plots.
- Chain rule.
- Feature normalization.
- Mean Squared Error (MSE).
- Gradient descent.
- Condition numbers and numerical conditioning.

### Model Implementation

A house price prediction model is developed using mathematical operations and gradient descent.

The project also compares the implementation with Scikit-learn to understand how mathematical optimization is applied in practical machine learning.

### Evaluation

- Mean Squared Error.
- R² score.
- Prediction comparisons.
- Gradient descent visualization.
- Loss and optimization analysis.

---

## Project 4: Student Admission Prediction

**Weeks:** 7 & 8

**Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn

**Dataset:** Graduate Admissions Dataset

**Dataset Source:** [Graduate Admissions – Kaggle](https://www.kaggle.com/datasets/mohansacharya/graduate-admissions)

**Dataset File:** `Admission_Predict_Ver1.1.csv`

### Overview

A supervised machine learning project that predicts the likelihood of a student receiving admission to a university based on academic and application-related attributes.

The project implements both regression and classification algorithms.

### Dataset Features

The dataset includes:
- GRE Score.
- TOEFL Score.
- University Rating.
- Statement of Purpose (SOP).
- Letter of Recommendation (LOR).
- CGPA.
- Research Experience.
- Chance of Admit.

### Regression Models

The regression task predicts the numerical Chance of Admit value.

Implemented algorithms:
- Linear Regression.
- Polynomial Regression.
- Ridge Regression.
- Lasso Regression.

**Evaluation Metrics:**
- Mean Absolute Error (MAE).
- Root Mean Squared Error (RMSE).
- R² Score.

### Classification Models

The continuous admission probability is converted into a binary classification target:

- Chance of Admit >= 0.75: Admitted (1).
- Chance of Admit < 0.75: Not Admitted (0).

Implemented algorithms:
- Logistic Regression.
- K-Nearest Neighbors (KNN).

**Evaluation Metrics:**
- Accuracy.
- Precision.
- Recall.
- F1 Score.
- Confusion Matrix.

---

## Project 5: Customer Churn Prediction

**Week:** 9

**Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn

**Dataset:** IBM Telco Customer Churn Dataset

**Dataset Source:** [Telco Customer Churn – Kaggle](https://www.kaggle.com/datasets/blastchar/telco-customer-churn)

**Alternative Dataset Source:** [IBM Telco Customer Churn – GitHub](https://github.com/IBM/telco-customer-churn-on-icp4d/blob/master/data/Telco-Customer-Churn.csv)

**Dataset File:** `WA_Fn-UseC_-Telco-Customer-Churn.csv`

### Overview

A binary classification project that predicts whether a telecommunications customer is likely to discontinue their subscription.

The project uses customer demographics, subscribed services, contract information, and billing details to identify potential churn.

### Data Preprocessing

- Inspect dataset structure and missing values.
- Convert `TotalCharges` into a numerical format.
- Handle missing values created during numerical conversion.
- Create an `Average_Monthly_Spend` feature using total charges and tenure, with monthly charges as a fallback for zero-tenure customers.
- Convert the Churn target into binary values.
- Remove the customer ID column.
- Apply median imputation and StandardScaler to numerical features.
- Apply most-frequent imputation and OneHotEncoder to categorical features.
- Combine preprocessing and classification using a Scikit-learn Pipeline and ColumnTransformer.

### Model

**Logistic Regression**

The model learns patterns in customer information to classify customers as:

- Churn (1).
- No Churn (0).

### Evaluation

- Accuracy.
- Precision.
- Recall.
- F1 Score.
- ROC-AUC.
- Confusion Matrix.
- ROC Curve.
- Five-fold Stratified Cross-Validation.

---

## Project 6: Customer Segmentation Using Clustering

**Week:** 10

**Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, SciPy

**Dataset:** E-commerce User Behavior and Transaction Dataset

**Dataset Source:** [E-commerce User Behavior and Transaction Dataset – Kaggle](https://www.kaggle.com/datasets/ziya07/e-commerce-user-behavior-and-transaction-dataset)

### Overview

An unsupervised machine learning project that groups customers according to their purchasing patterns, transaction frequency, website engagement, and other behavioral characteristics.

Unlike supervised learning, clustering does not require predefined target labels. The algorithms identify groups based on similarities in the input features.

### Dataset Features

The dataset contains customer-related attributes such as:

- Recency.
- Frequency.
- Monetary.
- Average Order Value.
- Session Count.
- Average Session Duration.
- Pages Viewed.
- Clicks.
- Campaign Response.
- Wishlist Adds.
- Cart Abandonment Rate.
- Returns.

Customer identifiers and noise-related fields are excluded from the selected clustering features.

### Data Preprocessing

- Inspect the dataset and identify missing values.
- Check for duplicate records.
- Select relevant customer behavior features.
- Apply median imputation.
- Standardize numerical features using StandardScaler.
- Explore feature distributions and relationships.

### Clustering Algorithms

**1. K-Means Clustering**

- Apply the Elbow Method to investigate the appropriate cluster count.
- Implement K-Means with five clusters.
- Analyze customer groups and their characteristics.

**2. Hierarchical Clustering**

- Generate a dendrogram using a sample of the dataset.
- Apply Agglomerative Clustering with five clusters.
- Compare the resulting customer groups.

**3. DBSCAN**

- Apply density-based clustering.
- Use `eps=1.5` and `min_samples=10`.
- Identify dense customer groups and noise points.
- Evaluate clustering while accounting for noise labels.

### Visualization and Evaluation

- Elbow Method plot.
- Hierarchical clustering dendrogram.
- PCA-based two-dimensional cluster visualization.
- Cluster size comparison.
- Customer segment profiles.
- Comparison of clustering algorithms.

---

## Project 7: Dimensionality Reduction Using PCA and t-SNE

**Weeks:** 11 & 12

**Technologies:** Python, NumPy, Pandas, Matplotlib, Scikit-learn

**Dataset:** Scikit-learn Digits Dataset

**Dataset Source:** Built into Scikit-learn.

### Overview

A dimensionality reduction project that explores how high-dimensional data can be represented using fewer features while retaining useful information.

The project uses handwritten digit images to demonstrate and compare PCA and t-SNE.

### Dataset Description

The Digits dataset contains:
- 1,797 handwritten digit samples.
- 64 numerical features per sample.
- 10 classes representing digits from 0 to 9.
- Each image is represented as an 8 × 8 pixel array.

### Principal Component Analysis (PCA)

PCA is a linear dimensionality reduction technique that transforms correlated features into a smaller set of uncorrelated principal components.

Implementation includes:
- Feature scaling.
- PCA with all available components.
- Explained variance analysis.
- Cumulative explained variance.
- Two-dimensional PCA visualization.
- Interpretation of retained information.

### t-Distributed Stochastic Neighbor Embedding (t-SNE)

t-SNE is a nonlinear dimensionality reduction technique that focuses on preserving local similarities between data points.

Implementation:
- Apply t-SNE to the scaled digit dataset.
- Reduce the data to two dimensions.
- Use perplexity = 30.
- Set random state = 42.
- Use PCA initialization and automatic learning rate.
- Visualize handwritten digit classes.

### Comparison

Compare PCA and t-SNE based on:
- Linear versus nonlinear transformations.
- Preservation of global and local structures.
- Visualization of digit clusters.
- Interpretability of reduced dimensions.

---

## Project 8: Ensemble Methods and Model Generalization

**Weeks:** 13 & 14

**Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, XGBoost, LightGBM

**Dataset:** Breast Cancer Wisconsin Dataset

**Dataset Source:** Built into Scikit-learn.

### Overview

A supervised machine learning project that explores ensemble learning techniques and model generalization.

The project compares individual decision trees with ensemble methods and examines how model complexity, regularization, and cross-validation influence predictive performance.

### Dataset Description

The Breast Cancer Wisconsin dataset contains:
- 569 samples.
- 30 numerical features.
- Two target classes: Malignant and Benign.

### Models Implemented

**1. Decision Tree Classifier**

Used as a baseline model to understand tree-based classification.

**2. Bagging Classifier**

Combines multiple models trained on different bootstrap samples to reduce prediction variance.

**3. Gradient Boosting Classifier**

Builds an ensemble sequentially, where subsequent models attempt to correct errors made by earlier models.

**4. XGBoost Classifier**

Implements gradient-boosted decision trees with additional optimization and regularization capabilities.

**5. LightGBM Classifier**

Uses a gradient boosting framework designed for efficient tree-based learning.

### Model Generalization

- Compare training and testing accuracy.
- Calculate generalization gaps.
- Study overfitting using deep decision trees.
- Study underfitting using shallow decision trees.
- Investigate the effects of tree depth.

### Regularization

Implement Logistic Regression with:
- L1 regularization.
- L2 regularization.
- Different regularization strengths using C values.
- StandardScaler for feature scaling.

### Evaluation

- Accuracy.
- Precision.
- Recall.
- F1 Score.
- ROC-AUC.
- Confusion Matrix.
- Classification Report.
- Five-fold Cross-Validation.

---

## Project 9: Neural Networks from Scratch and Model Deployment

**Weeks:** 15 & 16

**Technologies:** Python, NumPy, Pandas, Matplotlib, Scikit-learn, Joblib, Pickle

**Dataset:** Synthetically generated two-moons dataset using Scikit-learn.

### Overview

This project implements a basic neural network from scratch using NumPy and compares its performance with Scikit-learn's MLPClassifier.

It also demonstrates how trained machine learning models can be saved and loaded for later use.

### Dataset Description

The `make_moons()` function generates a synthetic binary classification dataset.

Dataset configuration:
- 1,000 samples.
- Two input features.
- Two classes.
- Noise = 0.2.
- Random state = 42.

The two-moons dataset provides a nonlinear classification problem suitable for demonstrating neural network decision boundaries.

### Neural Network from Scratch

The neural network is implemented using NumPy without using a deep learning framework.

**Architecture:**

- Input layer: 2 neurons.
- Hidden layer: 8 neurons with ReLU activation.
- Output layer: 1 neuron with Sigmoid activation.

### Implementation

- Initialize weights and biases.
- Perform forward propagation.
- Apply ReLU and Sigmoid activation functions.
- Calculate Binary Cross-Entropy loss.
- Perform backpropagation using the chain rule.
- Update weights using Stochastic Gradient Descent.
- Train for 2,000 epochs with a learning rate of 0.05.

### Model Evaluation

- Training loss visualization.
- Classification accuracy.
- Decision boundary visualization.

### Scikit-learn Comparison

Use `MLPClassifier` to compare neural network training with two optimization methods:

- Stochastic Gradient Descent (SGD).
- Adaptive Moment Estimation (Adam).

### Model Deployment and Saving

Demonstrate model persistence using:
- Pickle.
- Joblib.
- NumPy `.npz` files.

The project saves and reloads the trained Scikit-learn model, feature scaler, and NumPy network parameters.

**Note:** Pickle and Joblib files should only be loaded from trusted sources.

---

## Project 10: Deep Learning and Generative AI

**Weeks:** 17 & 18

**Technologies:** Python, PyTorch, Torchvision, Hugging Face Transformers, NumPy, Pandas, Matplotlib, Scikit-learn

**Notebook:** `Deep_Learning_and_Generative_AI.ipynb`

### Overview

A practical introduction to deep learning and generative AI covering neural network fundamentals, convolutional neural networks, sequence modeling, regularization, transfer learning, transformer-based NLP, and text generation.

The project uses PyTorch for neural network implementation and Hugging Face Transformers for pretrained language models.

### 1. PyTorch Fundamentals

Introduces the basic operations required to build and train neural networks.

Implementation includes:
- Creating PyTorch tensors.
- Tensor arithmetic and mathematical operations.
- Automatic differentiation using Autograd.
- Calculating gradients.
- Demonstrating gradient descent on the function \(f(x)=(x-5)^2\).

### 2. Multilayer Perceptron (MLP)

**Dataset:** Synthetic two-moons dataset generated using Scikit-learn.

Dataset configuration:
- 1,200 samples.
- Two input features.
- Two classes.

**Architecture:**

- Input layer: 2 neurons.
- Hidden layer 1: 16 neurons.
- Hidden layer 2: 8 neurons.
- Output layer: 1 neuron.

**Implementation:**
- ReLU activation.
- Binary Cross-Entropy with Logits loss.
- Adam optimizer.
- Training for 30 epochs.
- Training loss and accuracy visualization.

### 3. Convolutional Neural Network (CNN)

**Dataset:** Fashion-MNIST

**Dataset Source:** Built into Torchvision.

Fashion-MNIST contains 70,000 grayscale clothing images:
- 60,000 training images.
- 10,000 testing images.
- Image dimensions: 28 × 28 pixels.
- 10 clothing categories.

The notebook uses a subset of 10,000 training images and 2,000 testing images to keep the experiment manageable.

**CNN Architecture:**

- Convolutional layer with 32 filters.
- Batch Normalization.
- ReLU activation.
- Max Pooling.
- Convolutional layer with 64 filters.
- Batch Normalization.
- ReLU activation.
- Max Pooling.
- Flatten layer.
- Fully connected layer with 128 neurons.
- ReLU activation.
- Dropout.
- Output layer with 10 neurons.

**Implementation:**
- Image classification using Cross-Entropy loss.
- Training with an optimizer.
- Testing on the selected Fashion-MNIST subset.
- Classification report and accuracy evaluation.

### 4. Sequence Modeling: RNN, LSTM, and GRU

**Dataset:** Synthetically generated sequential data using NumPy.

Dataset configuration:
- 3,000 sequences.
- 20 time steps per sequence.
- One feature per time step.

**Target Generation:**

Each sequence is assigned a binary label based on its mean:

- Mean greater than zero: Class 1.
- Mean less than or equal to zero: Class 0.

**Models Implemented:**

- Recurrent Neural Network (RNN).
- Long Short-Term Memory (LSTM).
- Gated Recurrent Unit (GRU).

The models learn to classify sequences based on their temporal information.

**Comparison:**
- Train each model for five epochs.
- Compare classification accuracy.
- Compare training loss.

### 5. Regularization and Early Stopping

**Dataset:** Fashion-MNIST.

The notebook uses a subset of 7,000 training images and 1,000 validation images.

**Techniques Implemented:**

- Dropout with a probability of 0.4.
- Batch Normalization.
- Early Stopping with patience = 2.
- Restoration of the best model weights.

The experiment demonstrates how regularization techniques can help reduce overfitting and improve model generalization.

Training and validation loss are plotted to observe model behavior.

### 6. Transfer Learning Using ResNet18

**Dataset:** CIFAR-10

**Dataset Source:** Built into Torchvision.

CIFAR-10 contains 60,000 color images across 10 classes:
- 50,000 training images.
- 10,000 testing images.
- Image dimensions: 32 × 32 pixels.

The notebook uses a subset of 2,000 training images and 500 testing images.

**Pretrained Model:** ResNet18 with ImageNet pretrained weights.

**Implementation:**

- Load the pretrained ResNet18 model.
- Resize CIFAR-10 images to 224 × 224.
- Normalize images using ImageNet mean and standard deviation.
- Freeze the pretrained ResNet18 parameters.
- Replace the final fully connected layer with a new 10-class output layer.
- Train the newly added classification layer.

This experiment demonstrates **transfer learning through feature extraction**, rather than full fine-tuning of the pretrained network.

### 7. Hugging Face Transformers – Sentiment Analysis

**Pretrained Model:** `distilbert/distilbert-base-uncased-finetuned-sst-2-english`

**Framework:** Hugging Face Transformers.

The notebook uses a pretrained DistilBERT sentiment classification pipeline to analyze three manually written English sentences.

**Output:**
- POSITIVE or NEGATIVE sentiment.
- Confidence score for the prediction.

No external dataset is used in this demonstration.

### 8. Generative AI – Text Generation

**Pretrained Model:** `sshleifer/tiny-gpt2`

**Framework:** Hugging Face Transformers.

The notebook demonstrates text generation using a lightweight pretrained GPT-2 model.

**Prompt:**

"Artificial intelligence is changing education because"

The model generates a continuation of the supplied prompt.

Generation configuration includes:
- Maximum new tokens: 50.
- Temperature: 0.8.

This is an inference demonstration using a pretrained language model, not a model training experiment.

### 9. Optional OpenAI API Integration

The notebook includes an optional section demonstrating how to connect to an OpenAI language model through the OpenAI Python SDK.

**Model:** `gpt-4.1-mini`

The example uses:
- OpenAI Python SDK.
- API key stored in Google Colab Secrets.
- `OPENAI_API_KEY` environment variable.

This section is optional and requires an API key. It is not required to complete the other notebook experiments.

---

# Technologies Used

| Category | Technologies |
|---|---|
| Programming Language | Python |
| Web Development | Flask, HTML, CSS, JavaScript |
| Data Analysis | NumPy, Pandas |
| Data Visualization | Matplotlib, Seaborn |
| Machine Learning | Scikit-learn |
| Clustering | K-Means, Hierarchical Clustering, DBSCAN |
| Dimensionality Reduction | PCA, t-SNE |
| Ensemble Learning | Bagging, Gradient Boosting, XGBoost, LightGBM |
| Deep Learning | PyTorch, Torchvision |
| Neural Networks | NumPy, Scikit-learn MLPClassifier |
| NLP and Transformers | Hugging Face Transformers, DistilBERT |
| Generative AI | Tiny GPT-2, optional OpenAI API |
| Database | SQLite |
| Backend | Flask, SQLAlchemy |
| Model Persistence | Pickle, Joblib, NumPy NPZ |

---

# Installation and Setup

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/Hack-O-Week-V-Semester-2026-2027.git
```

Navigate into the repository:

```bash
cd Hack-O-Week-V-Semester-2026-2027
```

## 2. Set Up Python

It is recommended to create a separate virtual environment for projects that require Python dependencies.

```bash
python -m venv venv
```

Activate the environment.

**macOS / Linux:**

```bash
source venv/bin/activate
```

**Windows:**

```bash
venv\Scripts\activate
```

## 3. Install Dependencies

Each project may have its own `requirements.txt` file.

Navigate to the relevant project directory and install its dependencies:

```bash
pip install -r requirements.txt
```

For projects using Google Colab, open the corresponding `.ipynb` notebook in Google Colab and run the cells in order.

## 4. Run the Task Management System

Navigate to the Week 1 & 2 directory:

```bash
cd "Week 1 & 2"
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Run the Flask application:

```bash
python app.py
```

Open the local URL displayed in the terminal to access the application.

---

# Running the Notebooks

The data science, machine learning, and deep learning projects are provided as Jupyter notebooks.

You can run them using:

- Google Colab.
- Jupyter Notebook.
- JupyterLab.
- VS Code with the Jupyter extension.

For Google Colab:

1. Open [Google Colab](https://colab.research.google.com/).
2. Upload the required `.ipynb` notebook.
3. Select a suitable runtime.
4. Install any required dependencies if they are not already available.
5. Upload the required CSV dataset when prompted, if applicable.
6. Run the notebook cells sequentially.

Some notebooks download datasets or pretrained model weights during execution. These downloads are stored in the runtime environment and may need to be repeated after a runtime reset.

---

# Learning Outcomes

Through these projects, the following concepts and practical skills were explored:

- Building REST APIs using Flask.
- Working with relational databases and SQLAlchemy.
- Data cleaning, preprocessing, and exploratory data analysis.
- Applying NumPy and Pandas for numerical and tabular operations.
- Understanding mathematical foundations of machine learning.
- Implementing regression and classification algorithms.
- Evaluating supervised learning models using appropriate metrics.
- Applying clustering algorithms for customer segmentation.
- Reducing dimensionality using PCA and t-SNE.
- Understanding ensemble learning and model generalization.
- Implementing a neural network from scratch using NumPy.
- Saving and loading trained machine learning models.
- Building neural networks using PyTorch.
- Implementing CNN, RNN, LSTM, and GRU architectures.
- Applying regularization and transfer learning.
- Using pretrained transformer models for sentiment analysis.
- Exploring generative AI through pretrained language models.

---

# Repository Notes

- Each project is organized into its respective week folder.
- Notebooks should be executed in sequence to ensure that variables and dependencies are initialized correctly.
- Some projects require external datasets, while others use built-in Scikit-learn or Torchvision datasets or synthetically generated data.
- Deep learning projects may download pretrained weights and datasets during execution.
- The optional OpenAI API experiment requires a valid API key.
- Dataset files and generated model files may not be included in the repository if they are downloaded or generated during execution.

---

# Author

**Ojaswini Thote**

B.Tech – Computer Science and Engineering

Symbiosis Institute of Technology, Nagpur

---

*Hack-O-Week V – Semester 2026–2027*
