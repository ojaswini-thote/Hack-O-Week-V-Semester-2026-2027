# Hack-O-Week V Semester 2026–2027

A collection of nine projects completed as part of the Hack-O-Week program for Semester V. The repository covers web development, data analysis, mathematical foundations of machine learning, supervised and unsupervised learning, dimensionality reduction, ensemble methods, neural networks, and model deployment.

Each project focuses on applying theoretical concepts through practical implementations, visualizations, model evaluation, and hands-on experimentation.

## Table of Contents

1. [Project 1: Task Management System](#project-1-task-management-system)
2. [Project 2: Employee Performance Analysis](#project-2-employee-performance-analysis)
3. [Project 3: Mathematics for Machine Learning — House Price Prediction](#project-3-mathematics-for-machine-learning--house-price-prediction)
4. [Project 4: Student Admission Prediction](#project-4-student-admission-prediction)
5. [Project 5: Customer Churn Prediction](#project-5-customer-churn-prediction)
6. [Project 6: Customer Segmentation Using Clustering](#project-6-customer-segmentation-using-clustering)
7. [Project 7: Dimensionality Reduction Using PCA and t-SNE](#project-7-dimensionality-reduction-using-pca-and-t-sne)
8. [Project 8: Ensemble Methods and Model Generalization](#project-8-ensemble-methods-and-model-generalization)
9. [Project 9: Neural Networks from Scratch and Model Deployment](#project-9-neural-networks-from-scratch-and-model-deployment)

---

## Project 1: Task Management System

**Weeks:** 1 & 2

**Technologies:** Python, Flask, SQLite, HTML, CSS, JavaScript

### Overview

A web-based task management application that allows users to organize and manage tasks through a simple interface. The application uses Flask for backend functionality and SQLite for persistent data storage.

### Features

- Create and view tasks.
- Update existing task details.
- Delete tasks.
- Store task information in an SQLite database.
- Connect the frontend to the backend using JavaScript.
- Display and manage tasks through a web interface.

### Technologies Used

- Python and Flask for backend development.
- SQLite for database management.
- HTML and CSS for the user interface.
- JavaScript for frontend interactions.

### How to Run

Navigate to the project directory and install the required dependencies.

```bash
pip install -r requirements.txt
python app.py
```

Open the local URL displayed in the terminal to use the application.

---

## Project 2: Employee Performance Analysis

**Weeks:** 3 & 4

**Technologies:** Python, NumPy, Pandas, Matplotlib, Seaborn

### Overview

A data analysis project that explores employee performance and salary information using Python's data analysis and visualization libraries.

### Concepts Covered

- Data loading and inspection using Pandas.
- Handling missing values and examining datasets.
- Creating reusable functions for bonus calculation and top-performer identification.
- Object-oriented programming through an `EmployeeAnalyzer` class.
- NumPy arrays, statistical calculations, and broadcasting.
- List and dictionary comprehensions.
- Grouping and aggregation by department and gender.
- Data visualization for identifying patterns in employee data.

### Visualizations

- Bar charts for group comparisons.
- Histograms for distribution analysis.
- Scatter plots for relationships between variables.
- Heatmaps for examining correlations.
- Pie charts for categorical proportions.

### Learning Outcomes

- Apply Python programming concepts to a practical dataset.
- Perform data cleaning, transformation, and aggregation.
- Summarize employee-related metrics.
- Communicate analytical findings using visualizations.

---

## Project 3: Mathematics for Machine Learning — House Price Prediction

**Weeks:** 5 & 6

**Technologies:** Python, NumPy, Pandas, Matplotlib, Scikit-learn

### Overview

This project demonstrates how mathematical concepts support machine learning algorithms through a house price prediction example. It combines linear algebra, calculus, optimization, and model evaluation.

### Concepts Covered

- Vectors and vector magnitude.
- Matrices and dot products.
- Eigenvalues and eigenvectors.
- Derivatives and tangent interpretation.
- Gradients and contour plots.
- The chain rule.
- Feature normalization.
- Mean Squared Error (MSE).
- Gradient descent and iterative parameter updates.
- Model evaluation using the R² score.
- Comparison with a Scikit-learn regression model.
- Understanding numerical conditioning.

### Learning Outcomes

- Understand the mathematical operations behind machine learning.
- Implement a basic prediction model.
- Observe how gradient descent minimizes prediction error.
- Interpret model performance using numerical metrics and graphs.

---

## Project 4: Student Admission Prediction

**Weeks:** 7 & 8

**Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn

### Overview

A machine learning project that uses graduate admission data to predict admission chances through regression and classify applicants using a defined admission threshold.

### Dataset

Graduate Admissions dataset from Kaggle:

[Graduate Admissions Dataset](https://www.kaggle.com/datasets/mohansacharya/graduate-admissions)

### Models Implemented

**Regression models**
- Linear Regression
- Polynomial Regression
- Ridge Regression
- Lasso Regression

**Classification models**
- Logistic Regression
- K-Nearest Neighbors (KNN)

The classification task uses a `Chance_of_Admit` threshold of 0.75 to create the target classes.

### Evaluation Metrics

**Regression**
- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)
- R² score

**Classification**
- Accuracy
- Precision
- Recall
- F1-score
- Confusion matrix

### Learning Outcomes

- Understand the difference between regression and classification.
- Compare multiple machine learning algorithms.
- Evaluate prediction quality using appropriate metrics.
- Interpret classification results using confusion matrices.

---

## Project 5: Customer Churn Prediction

**Week:** 9

**Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn

### Overview

A supervised machine learning project that predicts whether a telecommunications customer is likely to discontinue a service. The project covers preprocessing, model training, evaluation, and cross-validation.

### Dataset

IBM Telco Customer Churn dataset:

[Kaggle — Telco Customer Churn](https://www.kaggle.com/datasets/blastchar/telco-customer-churn)

### Workflow

1. Load and inspect the dataset.
2. Handle missing values and convert `TotalCharges` to a numeric format.
3. Create an average monthly spending feature.
4. Encode the churn target as a binary variable.
5. Separate numerical and categorical features.
6. Apply median and most-frequent imputation as appropriate.
7. Scale numerical features and one-hot encode categorical features.
8. Train a Logistic Regression model using a preprocessing pipeline.
9. Evaluate predictions on a stratified train-test split.
10. Perform stratified cross-validation.

### Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC
- Confusion matrix
- ROC curve
- Cross-validation performance

### Learning Outcomes

- Build a complete classification workflow.
- Apply preprocessing to mixed numerical and categorical data.
- Use Scikit-learn pipelines to organize preprocessing and model training.
- Understand the importance of cross-validation and multiple evaluation metrics.

---

## Project 6: Customer Segmentation Using Clustering

**Week:** 10

**Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, SciPy

### Overview

An unsupervised machine learning project that groups customers according to their purchasing patterns, engagement, and behavioral characteristics.

### Dataset

[E-commerce User Behavior and Transaction Dataset](https://www.kaggle.com/datasets/ziya07/e-commerce-user-behavior-and-transaction-dataset)

### Models Implemented

- K-Means Clustering
- Hierarchical Clustering
- DBSCAN

### Workflow

1. Load and inspect customer behavior data.
2. Examine missing values, duplicate records, and feature distributions.
3. Select relevant customer features.
4. Apply median imputation and feature scaling.
5. Use the Elbow Method to help select the number of K-Means clusters.
6. Build K-Means and hierarchical clustering models.
7. Apply DBSCAN to identify density-based clusters and potential noise points.
8. Evaluate clustering results using appropriate metrics.
9. Visualize clusters using Principal Component Analysis (PCA).
10. Compare cluster sizes and customer profiles.

### Learning Outcomes

- Understand supervised versus unsupervised learning.
- Compare centroid-based, hierarchical, and density-based clustering.
- Explore cluster evaluation and parameter selection.
- Interpret customer segments using their behavioral characteristics.

---

## Project 7: Dimensionality Reduction Using PCA and t-SNE

**Weeks:** 11 & 12

**Technologies:** Python, NumPy, Pandas, Matplotlib, Scikit-learn

### Overview

This project explores dimensionality reduction techniques using the Scikit-learn Digits dataset. It demonstrates how high-dimensional data can be transformed into lower-dimensional representations for visualization and analysis.

### Dataset

Scikit-learn Digits dataset, containing 1,797 handwritten digit samples represented by 64 features.

The dataset is available directly through Scikit-learn, so a separate CSV file is not required.

### Techniques Implemented

**Principal Component Analysis (PCA)**
- Feature scaling.
- Explained variance analysis.
- Cumulative explained variance.
- Selection and visualization of principal components.
- Two-dimensional data representation.

**t-Distributed Stochastic Neighbor Embedding (t-SNE)**
- Nonlinear dimensionality reduction.
- Two-dimensional visualization of digit samples.
- Exploration of local similarities and class separation.

### Learning Outcomes

- Understand the purpose of dimensionality reduction.
- Compare linear and nonlinear dimensionality reduction techniques.
- Interpret explained variance in PCA.
- Visualize high-dimensional data in two dimensions.
- Understand that PCA and t-SNE produce representations with different objectives and interpretations.

---

## Project 8: Ensemble Methods and Model Generalization

**Weeks:** 13 & 14

**Technologies:** Python, NumPy, Pandas, Matplotlib, Scikit-learn, XGBoost, LightGBM

### Overview

A machine learning project focused on ensemble learning, model generalization, the bias-variance tradeoff, overfitting, underfitting, and regularization.

### Dataset

Scikit-learn Breast Cancer Wisconsin dataset, containing 569 samples, 30 features, and two target classes.

### Models Implemented

- Decision Tree Classifier as a baseline.
- Bagging Classifier.
- Gradient Boosting Classifier.
- XGBoost Classifier.
- LightGBM Classifier.
- Logistic Regression with L1 regularization.
- Logistic Regression with L2 regularization.

### Concepts Covered

**Ensemble learning**
- Bagging.
- Boosting.
- Comparison of ensemble algorithms.

**Model generalization**
- Training versus testing performance.
- Generalization gap.
- Bias-variance tradeoff.
- Overfitting and underfitting.
- Decision tree depth analysis.

**Regularization**
- L1 regularization.
- L2 regularization.
- Effect of regularization strength on model performance.

### Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC
- Confusion matrix
- Classification report
- Cross-validation performance

### Learning Outcomes

- Understand how ensemble methods combine predictive models.
- Compare bagging and boosting approaches.
- Identify signs of overfitting and underfitting.
- Examine the role of regularization in controlling model complexity.
- Compare algorithms using consistent evaluation metrics.

---

## Project 9: Neural Networks from Scratch and Model Deployment

**Weeks:** 15 & 16

**Technologies:** Python, NumPy, Pandas, Matplotlib, Scikit-learn, Pickle, Joblib

### Overview

This project introduces neural network fundamentals by implementing a small feedforward neural network using NumPy. It also explores optimization algorithms and the basics of saving, loading, and using trained models.

### Dataset

A synthetic binary classification dataset generated using Scikit-learn's `make_moons` function.

The dataset provides two-dimensional features suitable for visualizing classification boundaries.

### Concepts Covered

**Neural network fundamentals**
- Perceptrons and network layers.
- Input, hidden, and output layers.
- Activation functions, including ReLU and sigmoid.
- Forward propagation.
- Binary cross-entropy loss.
- Backpropagation and gradient calculation.

**Optimization**
- Stochastic Gradient Descent (SGD).
- Adam optimizer.
- Comparison of optimizer behavior using Scikit-learn's `MLPClassifier`.

**Implementation from scratch**
- Building a feedforward neural network with NumPy.
- Initializing weights and biases.
- Calculating predictions and loss.
- Updating parameters through backpropagation.
- Visualizing training loss and decision boundaries.

**Model deployment basics**
- Saving and loading trained models using Pickle.
- Saving and loading models using Joblib.
- Saving NumPy weights and biases in an `.npz` file.
- Reusing a fitted scaler when making predictions on new data.

### Learning Outcomes

- Understand the basic structure and working of a neural network.
- Implement forward propagation and backpropagation using NumPy.
- Understand loss functions and parameter optimization.
- Compare SGD and Adam using a neural network classifier.
- Serialize trained models and reuse them for predictions.

**Note:** Only load Pickle or Joblib files from trusted sources.

---

## Technologies and Libraries

| Category | Technologies |
|---|---|
| Programming language | Python, JavaScript |
| Web development | Flask, HTML, CSS |
| Database | SQLite |
| Data manipulation | NumPy, Pandas |
| Data visualization | Matplotlib, Seaborn |
| Machine learning | Scikit-learn |
| Gradient boosting | XGBoost, LightGBM |
| Clustering and dimensionality reduction | K-Means, Hierarchical Clustering, DBSCAN, PCA, t-SNE |
| Neural networks | NumPy, Scikit-learn MLPClassifier |
| Model serialization | Pickle, Joblib |

## Repository Structure

```text
Hack-O-Week-V-Semester-2026-2027/
├── Week 1 & 2/
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── requirements.txt
│   ├── templates/
│   └── static/
├── Week 3 & 4/
│   └── Employee_Performance_Analysis.ipynb
├── Week 5 & 6/
│   └── Math_for_ML_House_Price_Prediction.ipynb
├── Week 7 & 8/
│   └── Week_4_Student_Admission_Prediction.ipynb
├── Week 9/
│   └── Customer_Churn_Prediction.ipynb
├── Week 10/
│   ├── Customer_Segmentation_Clustering.ipynb
│   ├── requirements.txt
│   └── README.md
├── Week 11 & 12/
│   ├── Dimensionality_Reduction_PCA_tSNE.ipynb
│   ├── requirements.txt
│   └── README.md
├── Week 13 & 14/
│   └── Ensemble_Methods_XGBoost_LightGBM.ipynb
├── Week 15 & 16/
│   ├── Neural_Network_From_Scratch.ipynb
│   ├── requirements.txt
│   └── README.md
└── README.md
```

*Note: Filenames shown for some earlier projects are illustrative; keep the actual filenames present in your repository when updating this structure.*

## General Setup

Most machine learning projects can be run in Google Colab or Jupyter Notebook.

For local execution, install the relevant dependencies for the project:

```bash
pip install numpy pandas matplotlib seaborn scikit-learn scipy xgboost lightgbm joblib
```

The Task Management System has its own `requirements.txt` and should be run from its project directory.

Some datasets are loaded directly through Scikit-learn, while other projects require downloading the corresponding dataset and uploading or placing it in the notebook's expected location.

## Repository Goals

- Apply programming and data science concepts through practical projects.
- Explore data preprocessing, analysis, visualization, and interpretation.
- Implement and compare machine learning algorithms.
- Understand model evaluation, generalization, and optimization.
- Practice neural network implementation and model serialization.
- Maintain a structured collection of semester projects.

## Conclusion

This repository documents the progression from basic application development and data analysis to advanced machine learning concepts. Across nine projects, it covers supervised learning, clustering, dimensionality reduction, ensemble learning, neural networks, and model deployment fundamentals through practical implementations and visual analysis.
