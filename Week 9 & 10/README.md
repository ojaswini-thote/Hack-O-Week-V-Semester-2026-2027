# Week 5 - Customer Churn Prediction

## 1. Project Overview

The Customer Churn Prediction project is a Machine Learning classification project that predicts whether a telecommunications customer is likely to leave the company.

The main focus of this project is **model evaluation and data preprocessing**. It demonstrates train/test splitting, cross-validation, confusion matrix, precision, recall, F1 score, ROC-AUC, feature engineering, feature scaling, and handling missing data.

A Logistic Regression model is used to classify customers into churn and non-churn categories.

## 2. Objectives

The main objectives of this project are:

- To understand the Machine Learning classification workflow.
- To work with a real-world customer churn dataset.
- To identify and handle missing values.
- To perform feature engineering.
- To encode categorical variables.
- To scale numerical features.
- To divide data into training and testing sets.
- To train a classification model.
- To perform cross-validation.
- To evaluate the model using multiple classification metrics.
- To understand and visualize the ROC curve and ROC-AUC score.

## 3. Technologies Used

- Python
- NumPy
- Pandas
- Matplotlib
- Seaborn
- Scikit-learn
- Google Colab

## 4. Dataset

The project uses the Telco Customer Churn dataset.

The dataset contains customer information related to:

- Customer demographics
- Tenure
- Phone services
- Internet services
- Contract type
- Payment method
- Monthly charges
- Total charges
- Churn status

Dataset file:

```text
WA_Fn-UseC_-Telco-Customer-Churn.csv
```

The target variable is:

```text
Churn
```

where:

```text
0 = No Churn
1 = Churn
```

## 5. Data Exploration

The dataset is loaded using Pandas and explored before building the Machine Learning model.

The exploration includes:

- Viewing the first few records.
- Checking the number of rows and columns.
- Checking data types.
- Checking missing values.
- Examining the distribution of the target variable.

## 6. Handling Missing Data

The `TotalCharges` column initially contains some blank values stored as text.

The column is converted into numeric format using:

```python
pd.to_numeric(df["TotalCharges"], errors="coerce")
```

After conversion, the blank values become missing values (`NaN`).

These missing numerical values are handled using median imputation:

```python
SimpleImputer(strategy="median")
```

Categorical missing values, if present, are handled using the most frequent value.

This demonstrates an important data preprocessing technique for Machine Learning.

## 7. Feature Engineering

A new feature named:

```text
Average_Monthly_Spend
```

is created using the customer's `TotalCharges` and `tenure`.

For customers with zero tenure, `MonthlyCharges` is used to avoid division by zero.

Feature engineering creates additional useful information from the existing dataset.

## 8. Target Variable Preparation

The original `Churn` values are:

```text
Yes
No
```

They are converted into numerical values:

```text
Yes → 1
No  → 0
```

This allows the target variable to be used by the classification model.

## 9. Feature Selection

The `customerID` column is removed because it is only an identifier and does not provide useful predictive information.

The remaining customer attributes are used as input features.

## 10. Feature Preprocessing

The dataset contains both numerical and categorical features.

### Numerical Features

Numerical features are processed using:

- Median imputation
- Standard scaling

### Categorical Features

Categorical features are processed using:

- Most-frequent-value imputation
- One-Hot Encoding

A `ColumnTransformer` is used to apply the appropriate preprocessing to each type of feature.

## 11. Feature Scaling

Numerical features are scaled using:

```python
StandardScaler()
```

Scaling places numerical features on a comparable scale and is useful for Machine Learning algorithms such as Logistic Regression.

## 12. Train/Test Split

The dataset is divided into:

```text
80% Training Data
20% Testing Data
```

The training data is used to train the model, while the testing data is used to evaluate its performance on unseen data.

A stratified split is used to maintain the distribution of churn and non-churn customers.

## 13. Machine Learning Model

### Logistic Regression

Logistic Regression is used as the classification model.

The model predicts whether a customer is likely to:

```text
0 → No Churn
1 → Churn
```

The preprocessing steps and classifier are combined using a Scikit-learn Pipeline.

## 14. Model Evaluation

The model is evaluated using multiple metrics.

### Accuracy

Measures the percentage of total predictions that are correct.

### Precision

Measures how many customers predicted as churn customers actually churned.

### Recall

Measures how many actual churn customers were correctly identified.

### F1 Score

Combines precision and recall into a single performance measure.

## 15. Confusion Matrix

A confusion matrix is created to analyze the model's predictions.

It contains:

- True Positives
- True Negatives
- False Positives
- False Negatives

A heatmap is used to visualize the confusion matrix.

## 16. ROC-AUC

The project calculates the ROC-AUC score.

The ROC curve represents the relationship between:

```text
True Positive Rate
```

and

```text
False Positive Rate
```

The AUC value represents the model's ability to distinguish between churn and non-churn customers.

A higher ROC-AUC generally indicates better classification performance.

## 17. Cross-Validation

The project uses **5-Fold Stratified Cross-Validation**.

The dataset is divided into five folds. The model is trained and evaluated multiple times, using a different fold for validation each time.

The process can be represented as:

```text
Dataset
   ↓
Divide into 5 Folds
   ↓
Train on 4 Folds
   ↓
Validate on 1 Fold
   ↓
Repeat 5 Times
   ↓
Calculate Mean Performance
```

Stratification helps maintain the class distribution in each fold.

## 18. Cross-Validation Metrics

Cross-validation is performed using:

- Accuracy
- ROC-AUC

The mean score is calculated to provide an overall estimate of model performance.

The standard deviation of the accuracy scores is also calculated.

## 19. Visualizations

The project includes:

- Confusion Matrix
- ROC Curve
- Five-Fold Cross-Validation Accuracy Plot

These visualizations help understand the model's performance.

## 20. Project Workflow

```text
Load Dataset
      ↓
Explore Dataset
      ↓
Check Missing Values
      ↓
Convert TotalCharges to Numeric
      ↓
Handle Missing Data
      ↓
Feature Engineering
      ↓
Prepare Target Variable
      ↓
Remove Customer ID
      ↓
Separate Numerical and Categorical Features
      ↓
Imputation
      ↓
Feature Scaling
      ↓
One-Hot Encoding
      ↓
Train/Test Split
      ↓
Train Logistic Regression
      ↓
Generate Predictions
      ↓
Evaluate Model
      ↓
Confusion Matrix
      ↓
ROC-AUC and ROC Curve
      ↓
5-Fold Cross-Validation
      ↓
Final Results
```

## 21. How to Run the Project

The project was developed using Google Colab.

### Step 1: Open the Notebook

Open:

```text
Customer_Churn_Prediction.ipynb
```

using Google Colab.

### Step 2: Upload the Dataset

Upload:

```text
WA_Fn-UseC_-Telco-Customer-Churn.csv
```

when requested by the notebook.

### Step 3: Run the Notebook

Run all cells from top to bottom.

In Google Colab, select:

```text
Runtime → Run all
```

### Step 4: View the Results

The notebook displays:

- Dataset information
- Missing-value analysis
- Feature engineering results
- Model evaluation metrics
- Classification report
- Confusion matrix
- ROC-AUC score
- ROC curve
- Cross-validation scores
- Final summary

## 22. Learning Outcomes

After completing this project, the following concepts were understood:

- Data exploration
- Missing-data handling
- Feature engineering
- Feature scaling
- Categorical encoding
- Train/test splitting
- Stratified sampling
- Logistic Regression
- Machine Learning pipelines
- Cross-validation
- Confusion matrices
- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- ROC curves
- Model evaluation

## 23. Conclusion

The Customer Churn Prediction project demonstrates a complete Machine Learning classification workflow with a focus on preprocessing and model evaluation.

The project handles missing data, performs feature engineering, scales numerical features, encodes categorical variables, and trains a Logistic Regression model.

The model is evaluated using train/test splitting, precision, recall, F1 score, confusion matrix, ROC-AUC, and 5-fold cross-validation. These techniques provide a detailed understanding of the model's performance and reliability.
