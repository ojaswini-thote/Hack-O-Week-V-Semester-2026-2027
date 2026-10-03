# Week 13 & 14 - Ensemble Methods and Model Generalization

## Project 8

This project demonstrates **ensemble learning methods, the bias-variance trade-off, overfitting, underfitting, and regularization** using Python and Scikit-learn.

The project focuses on **Bagging and Boosting**, with specific implementations using **XGBoost and LightGBM**.

The project also studies how model complexity affects generalization and demonstrates **L1 and L2 regularization**.

---

## Objectives

- Understand ensemble learning.
- Understand Bagging.
- Understand Boosting.
- Implement Bagging using Scikit-learn.
- Implement Gradient Boosting.
- Implement XGBoost.
- Implement LightGBM.
- Understand the bias-variance trade-off.
- Identify overfitting.
- Identify underfitting.
- Understand model complexity.
- Understand L1 regularization.
- Understand L2 regularization.
- Compare different machine learning models.
- Evaluate model generalization using cross-validation.

---

## Dataset

The project uses the **Breast Cancer Wisconsin dataset** available directly through Scikit-learn.

The dataset contains:

- 569 samples
- 30 numerical features
- 2 target classes

The dataset can be loaded using:

```python
from sklearn.datasets import load_breast_cancer
```

No separate dataset download is required.

---

## Technologies Used

- Python
- NumPy
- Pandas
- Matplotlib
- Scikit-learn
- XGBoost
- LightGBM
- Google Colab
- Jupyter Notebook

---

# Ensemble Methods

Ensemble learning combines multiple machine learning models to produce a combined prediction.

The two major ensemble approaches covered in this project are:

- Bagging
- Boosting

---

# Bagging

Bagging stands for **Bootstrap Aggregating**.

Bagging trains multiple models on different bootstrap samples of the training data and combines their predictions.

The objective is to reduce model variance and improve generalization.

### Workflow

```text
Training Dataset
       ↓
Bootstrap Samples
       ↓
Multiple Base Models
       ↓
Individual Predictions
       ↓
Combine Predictions
       ↓
Final Prediction
```

### Implementation

Bagging is implemented using:

```python
BaggingClassifier
```

with Decision Trees as the base estimators.

---

# Boosting

Boosting builds models sequentially.

Each new model attempts to improve the ensemble by focusing on errors or residual information from previous models.

### Workflow

```text
Training Data
      ↓
Model 1
      ↓
Errors
      ↓
Model 2
      ↓
Errors
      ↓
Model 3
      ↓
Final Ensemble
```

The project demonstrates:

- Gradient Boosting
- XGBoost
- LightGBM

---

# XGBoost

**XGBoost** is an optimized gradient boosting algorithm based on decision trees.

The project uses parameters such as:

- `n_estimators`
- `max_depth`
- `learning_rate`
- `subsample`
- `colsample_bytree`

XGBoost is evaluated using classification metrics and cross-validation.

---

# LightGBM

**LightGBM** is a gradient boosting framework designed for efficient tree-based learning.

The project demonstrates parameters such as:

- `n_estimators`
- `learning_rate`
- `num_leaves`
- `max_depth`

LightGBM is compared with other ensemble models.

---

# Bias-Variance Trade-off

The bias-variance trade-off describes the relationship between model simplicity, model complexity, and generalization.

### High Bias

A high-bias model is generally too simple to capture the underlying patterns in the data.

This can lead to **underfitting**.

### High Variance

A high-variance model can become too closely fitted to the training data.

This can lead to **overfitting**.

### General Concept

```text
High Bias
    ↓
Model too simple
    ↓
Underfitting

Balanced Complexity
    ↓
Better Generalization

High Variance
    ↓
Model too complex
    ↓
Overfitting
```

The project demonstrates this concept by changing the depth of a Decision Tree and comparing training and testing performance.

---

# Overfitting

Overfitting occurs when a model learns the training data too closely and performs worse on unseen data.

### Possible causes

- Excessive model complexity
- Very deep decision trees
- Too many model parameters
- Insufficient regularization
- Limited training data

### Identification

Overfitting can be identified by comparing training and testing performance.

```text
Training Performance → Very High
Testing Performance  → Considerably Lower
```

The project demonstrates overfitting using a highly complex Decision Tree.

---

# Underfitting

Underfitting occurs when a model is too simple to capture the underlying patterns in the data.

### Possible causes

- Model is too simple
- Insufficient features
- Excessive regularization
- Insufficient training

### Identification

```text
Training Performance → Low
Testing Performance  → Low
```

A shallow Decision Tree is used to demonstrate the concept of underfitting.

---

# Regularization

Regularization adds a penalty to a model's objective to discourage excessive model complexity.

It can help control overfitting and improve generalization.

This project demonstrates:

- L1 Regularization
- L2 Regularization

---

# L1 Regularization

L1 regularization adds a penalty based on the absolute values of model coefficients.

It can encourage some coefficients to become exactly zero, which can produce sparse models.

L1 regularization is demonstrated using Logistic Regression.

```python
LogisticRegression(
    penalty="l1",
    solver="liblinear"
)
```

---

# L2 Regularization

L2 regularization adds a penalty based on the squared values of model coefficients.

It generally shrinks coefficients toward zero without necessarily making them exactly zero.

L2 regularization is demonstrated using Logistic Regression.

```python
LogisticRegression(
    penalty="l2"
)
```

---

# Model Evaluation

The models are evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- Confusion Matrix

Cross-validation is also used to examine model performance across multiple data splits.

---

# Cross-Validation

The project uses **5-fold cross-validation** to compare the performance of the ensemble models.

The models evaluated include:

- Decision Tree
- Bagging
- Gradient Boosting
- XGBoost
- LightGBM

Mean accuracy and standard deviation are calculated across the folds.

---

# Visualizations

The project includes:

1. Class distribution
2. Model testing accuracy comparison
3. Training vs testing accuracy
4. Generalization gap
5. Bias-variance behaviour
6. Regularization comparison
7. Cross-validation comparison
8. XGBoost confusion matrix

---

# Project Workflow

```text
Breast Cancer Dataset
          ↓
     Data Inspection
          ↓
    Train-Test Split
          ↓
     Baseline Model
          ↓
       Bagging
          ↓
       Boosting
      ↙    ↓     ↘
Gradient  XGBoost  LightGBM
Boosting
          ↓
    Model Evaluation
          ↓
  Bias-Variance Analysis
          ↓
Overfitting / Underfitting
          ↓
    L1 / L2 Regularization
          ↓
    Cross-Validation
          ↓
    Model Comparison
```

---

# Learning Outcomes

After completing this project, the following concepts are demonstrated:

- Ensemble learning
- Bagging
- Bootstrap aggregation
- Boosting
- Gradient Boosting
- XGBoost
- LightGBM
- Bias
- Variance
- Bias-variance trade-off
- Model complexity
- Overfitting
- Underfitting
- Generalization
- L1 regularization
- L2 regularization
- Cross-validation
- Model evaluation

---

# Academic Requirements Covered

| Requirement | Implementation |
|---|---|
| Bagging | `BaggingClassifier` with Decision Trees |
| Boosting | `GradientBoostingClassifier` |
| XGBoost | `XGBClassifier` |
| LightGBM | `LGBMClassifier` |
| Bias-Variance Trade-off | Decision Tree depth analysis |
| Overfitting | Complex Decision Tree |
| Underfitting | Shallow Decision Tree |
| L1 Regularization | Logistic Regression with L1 |
| L2 Regularization | Logistic Regression with L2 |
| Model Evaluation | Accuracy, Precision, Recall, F1, ROC-AUC |
| Cross-Validation | 5-fold cross-validation |
| Visualization | Accuracy, complexity, regularization and confusion matrix plots |

---

# How to Run

## Google Colab

1. Open `Ensemble_Methods_XGBoost_LightGBM.ipynb` in Google Colab.
2. Run the installation cell.
3. Run the notebook cells sequentially.
4. The Breast Cancer dataset will be loaded automatically from Scikit-learn.
5. Examine the model comparisons and visualizations.

## Jupyter Notebook

Install the required libraries:

```bash
pip install -r requirements.txt
```

Start Jupyter Notebook:

```bash
jupyter notebook
```

Open:

```text
Ensemble_Methods_XGBoost_LightGBM.ipynb
```

Run the cells sequentially.

---

# Conclusion

This project demonstrates ensemble learning and model generalization using Bagging, Boosting, XGBoost, and LightGBM.

The project also demonstrates the bias-variance trade-off by varying Decision Tree complexity and comparing training and testing performance.

Overfitting and underfitting are demonstrated using models with different levels of complexity.

Finally, L1 and L2 regularization are applied using Logistic Regression to demonstrate how regularization can control model complexity and help improve generalization.

The project provides practical experience with ensemble methods, model evaluation, bias-variance analysis, overfitting, underfitting, and regularization.
