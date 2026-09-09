# Week 10 - Customer Segmentation Using Clustering

## Introduction

This project demonstrates a complete machine-learning workflow using **Scikit-learn** for customer segmentation.

Customer segmentation is an unsupervised machine-learning technique used to divide customers into groups based on similarities in their behaviour and characteristics. In this project, customer behaviour data is analysed and different clustering algorithms are applied to identify meaningful customer segments.

The project focuses on the Scikit-learn workflow, including data preprocessing, feature scaling, pipeline construction, clustering model building, evaluation, visualization, and interpretation.

Three clustering algorithms are implemented and compared:

- K-Means Clustering
- Hierarchical Clustering
- DBSCAN

The project demonstrates how different clustering approaches can be used to discover patterns in customer behaviour and how the resulting clusters can be interpreted for practical business applications.

---

## Objectives

The main objectives of this project are:

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

---

## Dataset

The project uses an **E-commerce User Behavior and Transaction Dataset**.

The dataset contains customer-level information related to purchasing behaviour, engagement, and online activity.

The features used for clustering include:

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

The `Noise_Flag` column is also excluded from the main clustering features because it represents noise information rather than normal customer behaviour.

---

## Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- SciPy
- Google Colab
- Jupyter Notebook

---

## Machine Learning Workflow

The project follows a complete machine-learning workflow:

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
Feature Selection
   |
   v
Missing Value Handling
   |
   v
Feature Scaling
   |
   v
Scikit-learn Pipeline
   |
   v
Clustering Algorithms
   |
   +------------------+------------------+
   |                  |                  |
   v                  v                  v
K-Means          Hierarchical         DBSCAN
   |                  |                  |
   +------------------+------------------+
                      |
                      v
                Model Evaluation
                      |
                      v
                 Visualization
                      |
                      v
                Interpretation
```

---

# Data Preprocessing

## Data Inspection

The dataset is first examined to understand:

- Number of rows and columns
- Column names
- Data types
- Missing values
- Duplicate records
- Statistical properties of the features

## Handling Missing Values

Missing numerical values are handled using median imputation.

The project uses:

```python
SimpleImputer(strategy="median")
```

This allows missing values to be replaced without removing customer records.

## Feature Scaling

The selected numerical features have different ranges and units.

Therefore, `StandardScaler` is used to standardize the features before clustering.

```python
StandardScaler()
```

Scaling is particularly important for distance-based clustering algorithms such as K-Means and DBSCAN.

---

# Scikit-learn Pipeline

A major requirement of this project is demonstrating the **Scikit-learn pipeline workflow**.

The preprocessing steps are combined using `Pipeline` and `ColumnTransformer`.

The preprocessing workflow is:

```text
Numerical Features
       |
       v
Missing Value Imputation
       |
       v
StandardScaler
       |
       v
Clustering Algorithm
```

The pipeline ensures that preprocessing is performed consistently before the clustering algorithm is applied.

Separate pipelines are created for:

- K-Means
- Hierarchical Clustering
- DBSCAN

---

# K-Means Clustering

## Overview

K-Means is an unsupervised machine-learning algorithm that divides data into a predefined number of clusters.

Each customer is assigned to the cluster whose centroid is closest to that customer.

## Elbow Method

The Elbow Method is used to determine a suitable number of clusters.

The method calculates the K-Means inertia for different values of `K`.

The inertia is plotted against the number of clusters to identify a suitable point where increasing the number of clusters provides diminishing improvement.

```text
K = 2
K = 3
K = 4
K = 5
...
K = 10
```

## K-Means Workflow

```text
Scaled Customer Data
        |
        v
Choose Number of Clusters
        |
        v
Initialize Centroids
        |
        v
Assign Customers
        |
        v
Update Centroids
        |
        v
Repeat Until Convergence
        |
        v
Final Customer Clusters
```

---

# Hierarchical Clustering

## Overview

Hierarchical clustering creates a hierarchy of clusters.

This project uses **Agglomerative Clustering**, where each customer initially forms an individual cluster and similar clusters are progressively merged.

## Dendrogram

A dendrogram is used to visualize the hierarchical relationships between observations.

Because the dataset contains a relatively large number of observations, a sample of the dataset is used for dendrogram visualization.

## Hierarchical Clustering Workflow

```text
Individual Customers
        |
        v
Calculate Similarities
        |
        v
Merge Similar Groups
        |
        v
Build Cluster Hierarchy
        |
        v
Select Number of Clusters
        |
        v
Final Customer Segments
```

---

# DBSCAN

## Overview

DBSCAN stands for **Density-Based Spatial Clustering of Applications with Noise**.

Unlike K-Means, DBSCAN does not require the number of clusters to be specified beforehand.

DBSCAN identifies groups based on the density of observations and can identify observations that do not belong to dense regions as noise.

## Important Parameters

The project uses the following DBSCAN parameters:

- `eps`
- `min_samples`

### eps

Defines the maximum distance between two observations for them to be considered neighbours.

### min_samples

Defines the minimum number of observations required to form a dense region.

## DBSCAN Workflow

```text
Customer Data
      |
      v
Identify Dense Regions
      |
      v
Create Clusters
      |
      v
Identify Sparse Points
      |
      v
Mark Noise Points
```

---

# Model Evaluation

Since clustering is an **unsupervised learning** problem, traditional classification metrics such as accuracy are not used.

The clustering algorithms are evaluated using:

- Silhouette Score
- Davies-Bouldin Index
- Calinski-Harabasz Score

---

## Silhouette Score

The Silhouette Score measures how similar an observation is to its own cluster compared with other clusters.

A higher Silhouette Score generally indicates better-defined and better-separated clusters.

---

## Davies-Bouldin Index

The Davies-Bouldin Index measures the similarity between clusters.

A lower Davies-Bouldin Index generally indicates better cluster separation.

---

## Calinski-Harabasz Score

The Calinski-Harabasz Score compares between-cluster dispersion with within-cluster dispersion.

A higher score generally indicates better-defined clusters.

---

# Algorithm Comparison

The three clustering algorithms are compared using the evaluation metrics.

| Algorithm | Silhouette Score | Davies-Bouldin Index | Calinski-Harabasz Score |
|---|---|---|---|
| K-Means | Calculated in notebook | Calculated in notebook | Calculated in notebook |
| Hierarchical Clustering | Calculated in notebook | Calculated in notebook | Calculated in notebook |
| DBSCAN | Calculated in notebook | Calculated in notebook | Calculated in notebook |

The final algorithm selection is based on the evaluation results as well as the interpretability of the generated customer segments.

For DBSCAN, noise points labelled as `-1` are excluded when calculating the standard clustering evaluation metrics.

---

# Visualization

Since the clustering process uses multiple features, it is not possible to visualize all dimensions directly.

Therefore, **Principal Component Analysis (PCA)** is used to reduce the processed feature space to two dimensions for visualization.

PCA is used only for visualization. The clustering models are trained using the selected customer features.

The project includes visualizations for:

- Feature distributions
- Correlation heatmap
- K-Means Elbow Method
- Hierarchical clustering dendrogram
- K-Means clusters
- Hierarchical clusters
- DBSCAN clusters
- Customer cluster profiles
- Algorithm comparison

---

# Customer Segment Interpretation

After clustering, customer-level feature averages are calculated for each K-Means cluster.

These profiles help understand differences in customer behaviour.

Important characteristics include:

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

### High-Value Customers

Customers with relatively high monetary value and frequent purchases.

These customers can be targeted with loyalty programs, premium offers, and personalized recommendations.

### Recently Inactive Customers

Customers with relatively high recency values who have not purchased recently.

These customers may be suitable for re-engagement campaigns.

### Frequent Customers

Customers who make purchases regularly.

Retention strategies can be used to maintain their engagement.

### Lower-Value Customers

Customers with lower spending and purchasing activity.

Promotional campaigns and targeted offers can be used to increase engagement.

The exact interpretation is based on the cluster profiles generated by the notebook.

---

# Project Workflow in Detail

```text
E-Commerce Customer Dataset
            |
            v
      Data Inspection
            |
            v
       Data Cleaning
            |
            v
      Feature Selection
            |
            v
   Missing Value Handling
            |
            v
       Feature Scaling
            |
            v
   Scikit-learn Pipeline
            |
            v
    +-------+--------+
    |       |        |
    v       v        v
 K-Means  Hierarchical  DBSCAN
    |       |        |
    +-------+--------+
            |
            v
      Model Evaluation
            |
            v
    Algorithm Comparison
            |
            v
     PCA Visualization
            |
            v
   Customer Interpretation
            |
            v
   Business Recommendations
```

---

# Project Structure

```text
Week 10/
│
├── Customer_Segmentation_Clustering.ipynb
├── E-commerce dataset CSV
├── requirements.txt
└── README.md
```

---

# How to Run

## Google Colab

1. Open `Customer_Segmentation_Clustering.ipynb` in Google Colab.
2. Upload the dataset when prompted.
3. Run the notebook cells sequentially from top to bottom.
4. Examine the generated graphs and evaluation results.
5. Use the cluster profile tables for interpretation.

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
Customer_Segmentation_Clustering.ipynb
```

Run the notebook cells sequentially.

---

# Requirements

The project requires the following Python libraries:

```text
numpy
pandas
matplotlib
seaborn
scikit-learn
scipy
```

These dependencies are also provided in `requirements.txt`.

---

# Learning Outcomes

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

---

# Academic Requirements Covered

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

# Conclusion

This project demonstrates a complete **Scikit-learn machine-learning workflow for customer segmentation**.

The project applies three different unsupervised learning algorithms: **K-Means, Hierarchical Clustering, and DBSCAN**. Data preprocessing and feature scaling are integrated with the clustering models using Scikit-learn pipelines.

The clustering results are evaluated using Silhouette Score, Davies-Bouldin Index, and Calinski-Harabasz Score. Visualizations and cluster profiles are then used to understand the characteristics of different customer groups.

The project demonstrates how unsupervised machine learning can be applied to customer behaviour data to identify meaningful segments and support business decisions such as targeted marketing, customer retention, and personalized offers.

---

# Week 10

**Project:** Customer Segmentation Using Clustering  
**Topic:** Scikit-learn Workflow and Clustering  
**Algorithms:** K-Means, Hierarchical Clustering, DBSCAN  
**Semester:** V  
**Academic Year:** 2026–2027
