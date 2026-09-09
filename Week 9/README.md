# Week 9 - Customer Churn Prediction

## Introduction

This project focuses on using machine learning to predict whether a customer is likely to leave a telecommunications service.

Customer churn prediction is an important machine learning application for businesses because identifying customers who are likely to leave can help organizations take appropriate retention measures.

The project demonstrates a complete machine-learning workflow including data preprocessing, missing value handling, feature engineering, feature encoding, feature scaling, train-test splitting, model building, model evaluation, and cross-validation.

A Logistic Regression model is used for binary classification, where the target variable represents whether a customer has churned or not.

---

## Objectives

The main objectives of this project are:

- Understand and explore customer churn data.
- Perform data cleaning and preprocessing.
- Handle missing values.
- Perform feature engineering.
- Convert categorical data into numerical form.
- Scale numerical features.
- Split the dataset into training and testing sets.
- Build a classification model.
- Evaluate model performance using multiple metrics.
- Use cross-validation to evaluate model stability.
- Analyse the confusion matrix.
- Evaluate the model using ROC-AUC.
- Visualize the model performance.

---

## Dataset

The project uses the **IBM Telco Customer Churn dataset**.

Dataset file:

```text
WA_Fn-UseC_-Telco-Customer-Churn.csv
```

The dataset contains customer information related to:

- Customer demographics
- Services used
- Contract information
- Payment information
- Monthly charges
- Total charges
- Tenure
- Churn status

The target variable is:

```text
Churn
```

The target contains two possible values:

```text
Yes → Customer Churned
No  → Customer Did Not Churn
```

---

## Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Scikit-learn
- Google Colab
- Jupyter Notebook

---

# Machine Learning Workflow

The project follows the following machine-learning workflow:

```text
Dataset
   |
   v
Data Inspection
   |
   v
Data Cleaning
   |
   v
Missing Value Handling
   |
   v
Feature Engineering
   |
   v
Categorical Encoding
   |
   v
Feature Scaling
   |
   v
Train-Test Split
   |
   v
Logistic Regression
   |
   v
Model Evaluation
   |
   v
Cross-Validation
   |
   v
Final Analysis
```

---

# Data Preprocessing

## Data Inspection

The dataset is first inspected to understand:

- Number of rows and columns
- Column names
- Data types
- Missing values
- Statistical information
- Distribution of the target variable

---

## Handling Missing Values

The `TotalCharges` column is converted from text to numerical format.

Values that cannot be converted are treated as missing values.

These missing numerical values are handled using **median imputation**.

The project uses:

```python
SimpleImputer(strategy="median")
```

This allows the model to use the available customer records without unnecessarily removing rows containing missing values.

---

# Feature Engineering

A new feature called:

```text
Average_Monthly_Spend
```

is created using the customer's total charges and tenure.

This feature provides an additional representation of the customer's average spending behaviour.

For customers with zero tenure, the monthly charges value is used to avoid division by zero.

---

# Target Encoding

The `Churn` target variable is converted into numerical values.

```text
Yes → 1
No  → 0
```

This allows the classification algorithm to work with the target variable numerically.

---

# Feature Encoding

The dataset contains several categorical variables.

These categorical features are converted into numerical features using **One-Hot Encoding**.

One-Hot Encoding creates separate binary features for the different categories.

---

# Feature Scaling

Numerical features are standardized using:

```text
StandardScaler
```

Scaling helps ensure that numerical features with different ranges do not disproportionately influence the machine-learning model.

---

# Preprocessing Pipeline

The preprocessing operations are combined using a Scikit-learn pipeline.

The numerical features use:

```text
Median Imputation
       |
       v
StandardScaler
```

The categorical features use:

```text
Most-Frequent Imputation
       |
       v
One-Hot Encoding
```

A `ColumnTransformer` is used to apply the appropriate preprocessing to numerical and categorical features.

---

# Train-Test Split

The dataset is divided into training and testing data.

```text
80% → Training Data
20% → Testing Data
```

A stratified split is used so that the distribution of churned and non-churned customers is maintained in both datasets.

---

# Machine Learning Model

## Logistic Regression

Logistic Regression is used as the classification algorithm.

It is suitable for this project because the target variable has two classes:

```text
0 → No Churn
1 → Churn
```

The preprocessing steps and Logistic Regression model are combined into a Scikit-learn pipeline.

```text
Customer Data
      |
      v
Preprocessing
      |
      v
Feature Scaling
      |
      v
Logistic Regression
      |
      v
Churn Prediction
```

---

# Model Evaluation

The model is evaluated using multiple classification metrics.

The following metrics are calculated:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- Confusion Matrix

---

## Accuracy

Accuracy measures the proportion of correctly classified customers out of all customers.

```text
Accuracy =
Correct Predictions / Total Predictions
```

---

## Precision

Precision measures how many of the customers predicted as churners actually churned.

High precision means that the model produces fewer false positive churn predictions.

---

## Recall

Recall measures how many of the actual churners were correctly identified by the model.

Recall is particularly important in churn prediction because missing a customer who is likely to leave may result in a lost retention opportunity.

---

## F1 Score

F1 Score combines Precision and Recall into a single metric.

It is useful when both false positives and false negatives are important.

---

## ROC-AUC

ROC-AUC measures how well the model distinguishes between customers who churn and customers who do not churn.

A higher ROC-AUC generally indicates better classification performance.

---

# Confusion Matrix

A confusion matrix is used to visualize the classification results.

It contains:

```text
                    Predicted
                 No Churn  Churn

Actual No Churn     TN       FP

Actual Churn       FN       TP
```

Where:

- `TN` = True Negative
- `FP` = False Positive
- `FN` = False Negative
- `TP` = True Positive

The confusion matrix helps identify the types of classification errors made by the model.

---

# Cross-Validation

To evaluate whether the model performs consistently across different subsets of the dataset, **5-Fold Stratified Cross-Validation** is performed.

The dataset is divided into five folds.

```text
Fold 1 → Testing
Fold 2 → Testing
Fold 3 → Testing
Fold 4 → Testing
Fold 5 → Testing
```

Each fold is used as the validation set once while the remaining folds are used for training.

The project evaluates:

- Cross-validation Accuracy
- Cross-validation ROC-AUC

This provides a more reliable estimate of model performance than relying only on a single train-test split.

---

# Visualizations

The project includes visualizations to help understand the model results.

The main visualizations include:

- Confusion Matrix
- ROC Curve
- Cross-validation performance plot

These visualizations provide a clearer understanding of model performance and classification behaviour.

---

# Project Workflow in Detail

```text
Telco Customer Dataset
          |
          v
     Data Inspection
          |
          v
      Data Cleaning
          |
          v
 Missing Value Handling
          |
          v
   Feature Engineering
          |
          v
  Categorical Encoding
          |
          v
    Feature Scaling
          |
          v
   Train-Test Split
          |
          v
  Logistic Regression
          |
          v
   Model Prediction
          |
          v
     Model Evaluation
          |
          v
   Confusion Matrix
          |
          v
      ROC-AUC
          |
          v
   5-Fold Cross-Validation
          |
          v
      Final Analysis
```

---

# Key Features of the Project

The project demonstrates:

- Data preprocessing
- Missing value handling
- Feature engineering
- Numerical feature scaling
- Categorical feature encoding
- Train-test splitting
- Stratified sampling
- Logistic Regression
- Classification
- Confusion Matrix
- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- ROC Curve
- 5-Fold Cross-Validation

---

# Project Structure

```text
Week 9/
│
├── Week_5_Customer_Churn_Prediction.ipynb
├── WA_Fn-UseC_-Telco-Customer-Churn.csv
└── README.md
```

---

# How to Run

## Google Colab

1. Open `Week_5_Customer_Churn_Prediction.ipynb` in Google Colab.
2. Upload the dataset:

```text
WA_Fn-UseC_-Telco-Customer-Churn.csv
```

3. Run the notebook cells sequentially from top to bottom.
4. Examine the preprocessing steps, model results, evaluation metrics, and visualizations.

---

## Jupyter Notebook

Install the required libraries:

```bash
pip install pandas numpy matplotlib scikit-learn
```

Start Jupyter Notebook:

```bash
jupyter notebook
```

Open:

```text
Week_5_Customer_Churn_Prediction.ipynb
```

Make sure the dataset is present in the same folder as the notebook.

Run the notebook cells sequentially.

---

# Requirements

The project requires the following Python libraries:

```text
numpy
pandas
matplotlib
scikit-learn
```

---

# Learning Outcomes

After completing this project, the following concepts are demonstrated:

- Supervised machine learning
- Binary classification
- Data preprocessing
- Missing value handling
- Feature engineering
- Numerical feature scaling
- One-Hot Encoding
- SimpleImputer
- StandardScaler
- ColumnTransformer
- Scikit-learn Pipeline
- Train-test splitting
- Stratified sampling
- Logistic Regression
- Confusion Matrix
- Accuracy
- Precision
- Recall
- F1 Score
- ROC Curve
- ROC-AUC
- Cross-validation
- Model evaluation

---

# Academic Requirements Covered

| Requirement | Implementation |
|---|---|
| Train-Test Split | 80/20 stratified split |
| Cross-Validation | 5-Fold Stratified Cross-Validation |
| Confusion Matrix | Implemented |
| Precision | Calculated |
| Recall | Calculated |
| F1 Score | Calculated |
| ROC-AUC | Calculated |
| Feature Engineering | `Average_Monthly_Spend` |
| Feature Scaling | `StandardScaler` |
| Missing Data Handling | `SimpleImputer` |
| Categorical Encoding | `OneHotEncoder` |
| Model Building | Logistic Regression |
| Machine Learning Pipeline | Scikit-learn Pipeline and ColumnTransformer |

---

# Conclusion

This project demonstrates a complete machine-learning workflow for predicting customer churn.

The process begins with data inspection and preprocessing, followed by missing value handling, feature engineering, categorical encoding, and feature scaling. A Logistic Regression model is then trained using an 80/20 stratified train-test split.

The model is evaluated using Accuracy, Precision, Recall, F1 Score, Confusion Matrix, and ROC-AUC. Five-fold Stratified Cross-Validation is also performed to examine the consistency of the model across different subsets of the dataset.

The project provides practical experience in building and evaluating a binary classification model and demonstrates how machine learning can be applied to customer churn prediction.

---

# Week 9

**Project:** Customer Churn Prediction  
**Topic:** Machine Learning Model Evaluation and Preprocessing  
**Model:** Logistic Regression  
**Dataset:** IBM Telco Customer Churn Dataset  
**Semester:** V  
**Academic Year:** 2026–2027
