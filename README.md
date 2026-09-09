# Hack-O-Week V — Semester 2026–2027

## Introduction

This repository contains the **6 projects** completed as part of **Hack-O-Week V for the V Semester (2026–2027)**.

The projects cover different areas of computer science and practical application development, including **web development, database management, data analysis, mathematics for machine learning, regression, classification, machine learning model evaluation, and unsupervised learning**.

The repository contains six projects covering Hack-O-Week activities from **Week 1 to Week 10**.

### Projects Included

| No. | Folder | Project |
|-----|--------|---------|
| 1 | `Week 1 & 2` | Task Management System |
| 2 | `Week 3 & 4` | Employee Performance Analysis |
| 3 | `Week 5 & 6` | Mathematics for ML – House Price Prediction |
| 4 | `Week 7 & 8` | Student Admission Prediction |
| 5 | `Week 9` | Customer Churn Prediction |
| 6 | `Week 10` | Customer Segmentation Using Clustering |

---

# Repository Structure

```text
Hack-O-Week-V-Semester-2026-2027/
│
├── Week 1 & 2/
│   └── Task Management System
│
├── Week 3 & 4/
│   └── Employee Performance Analysis
│
├── Week 5 & 6/
│   └── Mathematics for ML – House Price Prediction
│
├── Week 7 & 8/
│   └── Student Admission Prediction
│
├── Week 9/
│   └── Customer Churn Prediction
│
├── Week 10/
│   └── Customer Segmentation Using Clustering
│
└── README.md
```

---

# Projects

## 1. Task Management System

### Folder

`Week 1 & 2/`

### Description

The **Task Management System** is a web-based application developed using **Python Flask, HTML, CSS, JavaScript, and SQLite**.

The application allows users to create, view, update, and delete tasks through an interactive web interface. Task information is stored persistently in an SQLite database.

### Objectives

- Develop a basic web application using Flask.
- Create an interactive frontend using HTML, CSS, and JavaScript.
- Connect the application to an SQLite database.
- Implement CRUD operations.
- Understand frontend and backend communication.
- Store and retrieve data from a database.

### Technologies Used

- Python
- Flask
- SQLite
- HTML
- CSS
- JavaScript

### Features

- Add tasks
- View tasks
- Update tasks
- Delete tasks
- SQLite database storage
- Interactive frontend
- Flask backend
- CRUD functionality

### Workflow

```text
User
  ↓
Web Interface
  ↓
JavaScript
  ↓
Flask Backend
  ↓
SQLite Database
  ↓
Response
  ↓
Web Interface
```

### How to Run

Open the terminal inside the `Week 1 & 2` folder.

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Run the application:

```bash
python app.py
```

Open the local URL displayed in the terminal.

### Concepts Learned

- Flask
- Routing
- HTTP requests
- CRUD operations
- SQLite
- HTML forms
- JavaScript event handling
- Frontend-backend integration

---

# 2. Employee Performance Analysis

### Folder

`Week 3 & 4/`

### Description

The **Employee Performance Analysis** project focuses on analysing employee data using Python and popular data science libraries.

The project demonstrates data loading, cleaning, statistical analysis, grouping, functions, object-oriented programming, and visualization.

### Objectives

- Load and inspect employee data.
- Handle missing values.
- Perform data preprocessing.
- Use NumPy for numerical calculations.
- Use Pandas for data manipulation.
- Apply Python functions and comprehensions.
- Implement object-oriented programming.
- Analyse employee performance.
- Create meaningful visualizations.

### Technologies Used

- Python
- NumPy
- Pandas
- Matplotlib
- Seaborn
- Jupyter Notebook
- Google Colab

### Dataset

The project uses:

```text
employee_performance.csv
```

The dataset contains employee-related information used to analyse attributes such as department, gender, salary, and performance.

### Features

- Dataset loading
- Data inspection
- Missing value handling
- Bonus calculation
- Top performer identification
- Statistical analysis
- Salary calculations
- Department-wise analysis
- Gender-wise analysis
- Data visualization

### Visualizations

The project includes:

- Bar charts
- Histograms
- Scatter plots
- Heatmaps
- Pie charts

### Workflow

```text
Employee Dataset
       ↓
Data Loading
       ↓
Data Inspection
       ↓
Data Cleaning
       ↓
Numerical Analysis
       ↓
Employee Analysis
       ↓
GroupBy Analysis
       ↓
Visualization
       ↓
Insights
```

### Concepts Learned

- NumPy arrays
- Pandas DataFrames
- Data cleaning
- Missing value handling
- Functions
- List comprehensions
- Dictionary comprehensions
- Object-Oriented Programming
- GroupBy operations
- Statistical analysis
- Data visualization

### How to Run

Open the notebook inside the `Week 3 & 4` folder using:

- Google Colab
- Jupyter Notebook
- JupyterLab
- VS Code

Run the notebook cells sequentially.

---

# 3. Mathematics for Machine Learning – House Price Prediction

### Folder

`Week 5 & 6/`

### Description

The **Mathematics for Machine Learning – House Price Prediction** project demonstrates how mathematical concepts are used as the foundation of machine learning.

The project combines mathematical concepts such as **vectors, matrices, dot products, eigenvalues, derivatives, gradients, contour plots, and the chain rule** with a practical house price prediction problem.

### Objectives

- Understand vectors and vector magnitude.
- Perform matrix operations.
- Understand dot products.
- Calculate eigenvalues and eigenvectors.
- Understand derivatives.
- Visualize gradients and contours.
- Understand the chain rule.
- Apply mathematical concepts to machine learning.
- Implement gradient descent.
- Predict house prices.
- Evaluate model performance.

### Technologies Used

- Python
- NumPy
- Pandas
- Matplotlib
- Scikit-learn
- Jupyter Notebook
- Google Colab

### Mathematical Concepts

#### Vectors

Vectors are used to represent numerical features and perform mathematical operations.

#### Matrices

Matrices are used to represent structured data and demonstrate linear algebra operations.

#### Dot Product

The dot product is demonstrated as an important mathematical operation used in linear models.

#### Eigenvalues and Eigenvectors

Eigenvalues and eigenvectors are calculated to demonstrate important concepts from linear algebra.

#### Derivatives

Derivatives are used to understand how a function changes.

#### Gradients

Gradients are used to determine the direction of maximum change.

#### Gradient Descent

Gradient descent is implemented to minimize prediction error and optimize model parameters.

### Machine Learning Task

The project uses house-related features to predict house prices.

The workflow includes:

```text
House Price Dataset
       ↓
Data Preparation
       ↓
Feature Selection
       ↓
Normalization
       ↓
Mathematical Model
       ↓
Gradient Descent
       ↓
Prediction
       ↓
Error Calculation
       ↓
Model Evaluation
```

### Evaluation

The project uses:

- Mean Squared Error (MSE)
- R² Score

The implementation is also compared with a Scikit-learn regression model.

### Concepts Learned

- Linear algebra
- Vectors
- Matrices
- Dot products
- Eigenvalues
- Eigenvectors
- Derivatives
- Gradients
- Chain rule
- Gradient descent
- Regression
- Model evaluation

---

# 4. Student Admission Prediction

### Folder

`Week 7 & 8/`

### Description

The **Student Admission Prediction** project applies machine learning techniques to predict the probability of a student being admitted to a graduate program.

The project uses the **Graduate Admissions dataset** and demonstrates both **regression and classification** techniques.

### Objectives

- Load and preprocess admission data.
- Analyse admission-related features.
- Predict admission probability.
- Apply regression algorithms.
- Convert admission probability into admission categories.
- Apply classification algorithms.
- Compare machine learning models.
- Evaluate model performance.

### Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Scikit-learn
- Jupyter Notebook
- Google Colab

### Dataset

Dataset:

```text
Admission_Predict_Ver1.1.csv
```

The dataset contains features including:

- GRE Score
- TOEFL Score
- University Rating
- SOP
- LOR
- CGPA
- Research
- Chance of Admit

### Regression Models

The following regression models are implemented:

- Linear Regression
- Polynomial Regression
- Ridge Regression
- Lasso Regression

### Regression Metrics

The regression models are evaluated using:

- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)
- R² Score

### Classification

The `Chance of Admit` value is converted into a binary admission outcome.

```text
Chance of Admit >= 0.75 → Admitted
Chance of Admit < 0.75  → Not Admitted
```

Classification models:

- Logistic Regression
- K-Nearest Neighbors (KNN)

### Classification Metrics

The classification models are evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix

### Workflow

```text
Admission Dataset
       ↓
Data Cleaning
       ↓
Feature Selection
       ↓
Preprocessing
       ↓
Train-Test Split
       ↓
   ┌───────────────┐
   │               │
   ↓               ↓
Regression     Classification
   ↓               ↓
Model Training  Model Training
   ↓               ↓
MAE/RMSE/R²    Accuracy/Precision
               Recall/F1
               Confusion Matrix
```

### Concepts Learned

- Regression
- Classification
- Feature preprocessing
- Standardization
- Train-test splitting
- Model comparison
- Evaluation metrics
- Confusion matrix
- Predictive modelling

---

# 5. Customer Churn Prediction

### Folder

`Week 9/`

### Description

The **Customer Churn Prediction** project uses machine learning to predict whether a customer is likely to leave a telecommunications service.

The project demonstrates a complete machine learning workflow including **data preprocessing, missing value handling, feature engineering, encoding, scaling, train-test splitting, classification, cross-validation, confusion matrix analysis, and ROC-AUC evaluation**.

### Objectives

- Understand customer churn data.
- Handle missing data.
- Perform feature engineering.
- Encode categorical variables.
- Scale numerical features.
- Split the dataset into training and testing sets.
- Train a classification model.
- Evaluate model performance.
- Perform cross-validation.
- Analyse ROC-AUC.

### Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Scikit-learn
- Jupyter Notebook
- Google Colab

### Dataset

Dataset:

```text
WA_Fn-UseC_-Telco-Customer-Churn.csv
```

The dataset contains customer information such as:

- Customer demographics
- Services used
- Contract information
- Payment method
- Monthly charges
- Total charges
- Tenure
- Churn status

### Data Preprocessing

#### Missing Values

`TotalCharges` is converted into a numerical format.

Values that cannot be converted are treated as missing values and are later handled using **median imputation**.

#### Feature Engineering

A new feature called:

```text
Average_Monthly_Spend
```

is created using total charges and customer tenure.

#### Target Encoding

The `Churn` column is converted into numerical values:

```text
Yes → 1
No  → 0
```

#### Categorical Encoding

Categorical variables are converted into numerical features using **One-Hot Encoding**.

#### Feature Scaling

Numerical features are standardized using:

```text
StandardScaler
```

### Machine Learning Model

The project uses **Logistic Regression** for binary classification.

A Scikit-learn pipeline is used to combine preprocessing and model training.

### Train-Test Split

The dataset is divided into:

```text
80% → Training Data
20% → Testing Data
```

A stratified split is used to maintain the class distribution.

### Evaluation Metrics

The model is evaluated using:

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- Confusion Matrix

### Cross-Validation

The project uses **5-Fold Stratified Cross-Validation**.

The following are evaluated:

- Cross-validation Accuracy
- Cross-validation ROC-AUC

### Visualizations

The project includes:

- Confusion Matrix
- ROC Curve
- Cross-validation performance plot

### Workflow

```text
Telco Customer Dataset
          ↓
Data Inspection
          ↓
Missing Value Handling
          ↓
Feature Engineering
          ↓
Categorical Encoding
          ↓
Feature Scaling
          ↓
Train-Test Split
          ↓
Logistic Regression
          ↓
Model Evaluation
          ↓
Cross-Validation
          ↓
Final Analysis
```

### Concepts Learned

- Binary classification
- Data preprocessing
- Missing value handling
- Feature engineering
- One-Hot Encoding
- Feature scaling
- Train-test splitting
- Stratified cross-validation
- Confusion matrix
- Precision
- Recall
- F1 Score
- ROC Curve
- ROC-AUC

---

# 6. Customer Segmentation Using Clustering

### Folder

`Week 10/`

### Description

The **Customer Segmentation Using Clustering** project demonstrates a complete **machine-learning workflow using Scikit-learn** for customer segmentation.

Customer segmentation is an unsupervised machine-learning technique used to divide customers into groups based on similarities in their behaviour and characteristics.

The project applies and compares three clustering algorithms:

- K-Means Clustering
- Hierarchical Clustering
- DBSCAN

The workflow includes data inspection, data cleaning, feature selection, missing value handling, feature scaling, Scikit-learn pipelines, clustering, model evaluation, visualization, and interpretation.

### Objectives

- Understand and explore customer behaviour data.
- Perform data cleaning and preprocessing.
- Handle missing values.
- Select relevant features for clustering.
- Standardize numerical features.
- Build preprocessing pipelines using Scikit-learn.
- Apply K-Means clustering.
- Apply Hierarchical Clustering.
- Apply DBSCAN.
- Evaluate clustering performance.
- Visualize the generated clusters.
- Compare different clustering algorithms.
- Interpret the resulting customer segments.
- Demonstrate a complete Scikit-learn machine-learning workflow.

### Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- SciPy
- Jupyter Notebook
- Google Colab

### Dataset

The project uses an **E-commerce User Behavior and Transaction Dataset**.

The dataset contains customer-level information related to purchasing behaviour, engagement, and online activity.

The main features used for clustering include:

- `Recency`
- `Frequency`
- `Monetary`
- `Avg_Order_Value`
- `Session_Count`
- `Avg_Session_Duration`
- `Pages_Viewed`
- `Clicks`
- `Campaign_Response`
- `Wishlist_Adds`
- `Cart_Abandon_Rate`
- `Returns`

The `Customer_ID` column is treated as an identifier and is not used for clustering.

The `Noise_Flag` column is excluded from the main clustering features because it represents noise information rather than normal customer behaviour.

### Data Preprocessing

The project performs the following preprocessing steps:

- Data inspection
- Duplicate checking
- Missing value handling
- Feature selection
- Numerical feature scaling

Missing numerical values are handled using median imputation.

The selected numerical features are standardized using:

```text
StandardScaler
```

### Scikit-learn Pipeline

The project demonstrates the use of Scikit-learn `Pipeline` and `ColumnTransformer`.

The preprocessing workflow is:

```text
Numerical Features
       ↓
Missing Value Imputation
       ↓
StandardScaler
       ↓
Clustering Algorithm
```

Separate pipelines are used for the clustering algorithms so that preprocessing is applied consistently.

### K-Means Clustering

K-Means is an unsupervised learning algorithm that divides observations into a predefined number of clusters.

The **Elbow Method** is used to examine different values of K and help select a suitable number of clusters.

The project then trains a K-Means model using a Scikit-learn pipeline and assigns each customer to a cluster.

### Hierarchical Clustering

The project uses **Agglomerative Hierarchical Clustering**.

A dendrogram is generated to visualize the hierarchical structure of the customer data.

A sample of the dataset is used for the dendrogram visualization so that it remains readable and computationally manageable.

### DBSCAN

DBSCAN stands for **Density-Based Spatial Clustering of Applications with Noise**.

Unlike K-Means, DBSCAN does not require the number of clusters to be specified beforehand.

DBSCAN identifies dense groups of observations and can also identify observations that do not belong to sufficiently dense regions as noise.

The main parameters used are:

- `eps`
- `min_samples`

### Model Evaluation

Because clustering is an **unsupervised learning** problem, traditional classification accuracy is not used.

The clustering algorithms are evaluated using:

- Silhouette Score
- Davies-Bouldin Index
- Calinski-Harabasz Score

A higher Silhouette Score and Calinski-Harabasz Score generally indicate better-defined clusters, while a lower Davies-Bouldin Index is generally preferred.

### Visualization

The project includes:

- Feature distribution plots
- Correlation heatmap
- K-Means Elbow Method
- Hierarchical clustering dendrogram
- K-Means cluster visualization
- Hierarchical cluster visualization
- DBSCAN cluster visualization
- PCA-based two-dimensional visualization
- Cluster profile comparison

PCA is used only to visualize the multi-dimensional clustering results in two dimensions. The clustering models are trained using the selected customer features.

### Customer Segment Interpretation

After clustering, customer-level feature averages are calculated for the generated groups.

Important characteristics used for interpretation include:

- Recency
- Purchase frequency
- Monetary value
- Average order value
- Session activity
- Website engagement
- Wishlist activity
- Cart abandonment
- Returns

Possible customer segments may include:

- High-value customers
- Frequent customers
- Recently inactive customers
- Lower-value customers

The exact interpretation is based on the cluster profiles produced by the notebook.

### Workflow

```text
E-Commerce Customer Dataset
            ↓
      Data Inspection
            ↓
       Data Cleaning
            ↓
      Feature Selection
            ↓
   Missing Value Handling
            ↓
       Feature Scaling
            ↓
   Scikit-learn Pipeline
            ↓
    ┌────────┼────────┐
    ↓        ↓        ↓
 K-Means  Hierarchical DBSCAN
    ↓        ↓        ↓
    └────────┼────────┘
             ↓
      Model Evaluation
             ↓
    Algorithm Comparison
             ↓
     PCA Visualization
             ↓
   Customer Interpretation
```

### Project Structure

```text
Week 10/
│
├── Customer_Segmentation_Clustering.ipynb
├── E-commerce dataset CSV
├── requirements.txt
└── README.md
```

### How to Run

#### Google Colab

1. Open `Customer_Segmentation_Clustering.ipynb` in Google Colab.
2. Upload the dataset when prompted.
3. Run the notebook cells sequentially from top to bottom.
4. Examine the generated visualizations and evaluation results.
5. Use the cluster profile tables for interpretation.

#### Jupyter Notebook

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
Customer_Segmentation_Clustering.ipynb
```

Run the notebook cells sequentially.

### Learning Outcomes

After completing this project, the following concepts are demonstrated:

- Unsupervised machine learning
- Customer segmentation
- Data exploration
- Data cleaning
- Missing value handling
- Feature selection
- Feature scaling
- StandardScaler
- SimpleImputer
- ColumnTransformer
- Scikit-learn Pipeline
- K-Means Clustering
- Elbow Method
- Hierarchical Clustering
- Agglomerative Clustering
- Dendrogram
- DBSCAN
- Noise and outlier detection
- Silhouette Score
- Davies-Bouldin Index
- Calinski-Harabasz Score
- PCA visualization
- Cluster interpretation
- Business-oriented analysis

### Academic Requirements Covered

| Requirement | Implementation |
|---|---|
| Complete Scikit-learn workflow | Data preprocessing, pipeline, model building, evaluation and interpretation |
| Preprocessing | Missing value imputation and feature scaling |
| Scikit-learn Pipelines | `Pipeline` and `ColumnTransformer` |
| K-Means | Implemented with Elbow Method |
| Hierarchical Clustering | Agglomerative Clustering and dendrogram |
| DBSCAN | Density-based clustering and noise detection |
| Model Evaluation | Silhouette, Davies-Bouldin and Calinski-Harabasz |
| Visualization | Elbow plot, dendrogram, PCA cluster plots and profiles |
| Interpretation | Customer cluster profiling and business interpretation |

---

# Overall Technologies

The six projects collectively use the following technologies:

### Programming Languages

- Python
- JavaScript
- HTML
- CSS

### Web Development

- Flask
- SQLite

### Data Science

- NumPy
- Pandas
- Matplotlib
- Seaborn

### Machine Learning

- Scikit-learn
- Linear Regression
- Polynomial Regression
- Ridge Regression
- Lasso Regression
- Logistic Regression
- K-Nearest Neighbors
- K-Means
- Hierarchical Clustering
- DBSCAN
- Gradient Descent

### Development Platforms

- Visual Studio Code
- Jupyter Notebook
- Google Colab

---

# Overall Learning Outcomes

After completing these six projects, the following practical skills were developed:

- Python programming
- Web application development
- Database management
- CRUD operations
- Frontend-backend integration
- Data cleaning
- Data preprocessing
- Exploratory data analysis
- Data visualization
- Object-oriented programming
- NumPy operations
- Pandas data manipulation
- Linear algebra for machine learning
- Regression
- Classification
- Unsupervised learning
- Clustering
- Feature engineering
- Feature scaling
- Missing value handling
- Train-test splitting
- Cross-validation
- Confusion matrix analysis
- Precision and Recall
- F1 Score
- ROC-AUC
- K-Means Clustering
- Hierarchical Clustering
- DBSCAN
- Clustering evaluation
- Machine learning model evaluation

---

# Conclusion

The **Hack-O-Week V** projects provide a practical progression through different areas of computer science and machine learning.

The **Task Management System** introduces web development, backend programming, and database operations. The **Employee Performance Analysis** project develops skills in data manipulation, statistical analysis, and visualization. The **Mathematics for Machine Learning – House Price Prediction** project connects mathematical concepts with machine learning. The **Student Admission Prediction** project demonstrates regression and classification techniques. The **Customer Churn Prediction** project implements a complete machine learning pipeline with preprocessing, feature engineering, cross-validation, and multiple evaluation metrics. Finally, the **Customer Segmentation Using Clustering** project demonstrates an unsupervised machine-learning workflow using Scikit-learn, including K-Means, Hierarchical Clustering, DBSCAN, evaluation, visualization, and interpretation.

Together, these six projects demonstrate the practical application of programming, web development, data analysis, mathematics, supervised machine learning, and unsupervised machine learning concepts.

---

# Hack-O-Week V

**Semester:** V  
**Academic Year:** 2026–2027  
**Number of Projects:** 6
