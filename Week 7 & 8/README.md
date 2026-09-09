# Week 7 & 8 - Student Admission Prediction

## 1. Project Overview

The Student Admission Prediction project is a Machine Learning project that predicts a student's chance of admission based on academic and application-related factors.

The project demonstrates both **regression and classification** techniques using a real Graduate Admissions dataset. Regression models are used to predict the continuous admission probability, while classification models are used to predict whether a student is likely to be admitted or not.

## 2. Objectives

The main objectives of this project are:

- To understand regression and classification problems.
- To work with a real-world dataset.
- To perform data preprocessing and analysis.
- To apply multiple Machine Learning algorithms.
- To predict the chance of admission.
- To classify students based on their admission probability.
- To compare the performance of different Machine Learning models.
- To understand different model evaluation metrics.
- To visualize model performance.

## 3. Technologies Used

- **Python** - Programming language
- **NumPy** - Numerical computations
- **Pandas** - Data manipulation and analysis
- **Matplotlib** - Data visualization
- **Seaborn** - Statistical visualization
- **Scikit-learn** - Machine Learning
- **Google Colab** - Development environment

## 4. Dataset

The project uses the **Graduate Admissions dataset**.

The dataset contains information about students and their graduate admission applications.

The main features include:

| Feature | Description |
|---|---|
| GRE Score | Graduate Record Examination score |
| TOEFL Score | TOEFL examination score |
| University Rating | Rating of the university |
| SOP | Statement of Purpose strength |
| LOR | Letter of Recommendation strength |
| CGPA | Undergraduate CGPA |
| Research | Research experience |
| Chance of Admit | Estimated chance of admission |

Dataset file:

```text
Admission_Predict_Ver1.1.csv
```

## 5. Data Preprocessing

The dataset is first loaded and inspected.

The preprocessing steps include:

- Checking the dataset structure.
- Checking data types.
- Checking for missing values.
- Handling missing values where required.
- Selecting relevant features.
- Removing the serial number from the prediction features.
- Separating input features and target variables.

## 6. Regression Problem

The first part of the project treats admission prediction as a **regression problem**.

The target variable is:

```text
Chance_of_Admit
```

The objective is to predict the continuous admission probability based on the student's academic and application-related features.

## 7. Regression Models

Four regression models are implemented:

### 7.1 Linear Regression

Linear Regression is used to model the relationship between the input features and the chance of admission.

### 7.2 Polynomial Regression

Polynomial Regression is used to model possible nonlinear relationships between the features and admission probability.

### 7.3 Ridge Regression

Ridge Regression is used as a regularized version of linear regression. It helps control the effect of large model coefficients.

### 7.4 Lasso Regression

Lasso Regression applies regularization and can reduce the contribution of less important features.

## 8. Regression Evaluation

The regression models are evaluated using:

### Mean Absolute Error (MAE)

MAE measures the average absolute difference between the actual and predicted values.

### Root Mean Squared Error (RMSE)

RMSE measures prediction error while giving greater importance to larger errors.

### R² Score

R² measures how well the model explains the variation in the target variable.

The results of the four regression models are compared using these metrics.

## 9. Classification Problem

The second part of the project converts the admission prediction into a **binary classification problem**.

A threshold of `0.75` is used:

```text
Chance of Admit >= 0.75 → Admitted (1)

Chance of Admit < 0.75 → Not Admitted (0)
```

This allows classification algorithms to predict whether a student is likely to be admitted.

## 10. Classification Models

Two classification models are implemented:

### 10.1 Logistic Regression

Logistic Regression is used to classify students into admitted and not-admitted categories.

### 10.2 K-Nearest Neighbors (KNN)

KNN classifies a student based on the characteristics of nearby observations in the feature space.

## 11. Classification Evaluation

The classification models are evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix

### Accuracy

Measures the overall percentage of correct predictions.

### Precision

Measures how many of the students predicted as admitted were actually admitted.

### Recall

Measures how many of the actual admitted students were correctly identified.

### F1 Score

Provides a combined measure of precision and recall.

### Confusion Matrix

Shows the number of correct and incorrect predictions for each class.

## 12. Feature Scaling

Feature scaling is performed using `StandardScaler`.

Scaling is important because the features have different numerical ranges. Standardization puts numerical features on a comparable scale before applying the Machine Learning models.

## 13. Visualizations

The project includes visualizations such as:

- Regression model comparison using R² score.
- Classification model comparison.
- Logistic Regression confusion matrix.
- KNN confusion matrix.

These visualizations make it easier to compare model performance.

## 14. Project Workflow

```text
Load Dataset
     ↓
Explore Dataset
     ↓
Check Missing Values
     ↓
Preprocess Data
     ↓
Select Features
     ↓
Train/Test Split
     ↓
Regression Models
     ↓
Evaluate Regression Models
     ↓
Create Admission Classes
     ↓
Classification Models
     ↓
Evaluate Classification Models
     ↓
Create Confusion Matrices
     ↓
Compare Results
     ↓
Final Conclusion
```

## 15. How to Run the Project

The project was developed using Google Colab.

### Step 1: Open the Notebook

Open:

```text
Week_4_Student_Admission_Prediction.ipynb
```

using Google Colab.

### Step 2: Upload the Dataset

Upload:

```text
Admission_Predict_Ver1.1.csv
```

when requested by the notebook.

### Step 3: Run the Notebook

Run all cells from top to bottom.

In Google Colab, you can use:

```text
Runtime → Run all
```

### Step 4: View the Results

The notebook will display:

- Dataset information.
- Statistical analysis.
- Regression results.
- Classification results.
- Model comparison tables.
- Confusion matrices.
- Performance graphs.
- Final model comparison.

## 16. Learning Outcomes

After completing this project, the following concepts were understood:

- Difference between regression and classification.
- Loading and exploring a real-world dataset.
- Data preprocessing.
- Handling missing values.
- Feature selection.
- Feature scaling.
- Linear Regression.
- Polynomial Regression.
- Ridge Regression.
- Lasso Regression.
- Logistic Regression.
- K-Nearest Neighbors.
- MAE, RMSE and R².
- Accuracy, precision, recall and F1 score.
- Confusion matrices.
- Comparing Machine Learning models.

## 17. Conclusion

The Student Admission Prediction project demonstrates how Machine Learning can be used to analyze academic and application-related information to predict admission outcomes.

Both regression and classification approaches are implemented, allowing different Machine Learning algorithms to be compared. The project also demonstrates the importance of preprocessing, feature scaling, model evaluation, and visualization when developing Machine Learning solutions.
