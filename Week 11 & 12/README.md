# Week 11 & 12 - Dimensionality Reduction using PCA and t-SNE

## Project 7

This project demonstrates dimensionality reduction techniques using **Principal Component Analysis (PCA)** and **t-SNE (t-distributed Stochastic Neighbor Embedding)**.

The project uses the Scikit-learn **Digits dataset**, which contains handwritten digit images represented using 64 numerical features.

The main objective is to understand how high-dimensional data can be transformed into a lower-dimensional representation for analysis and visualization.

---

## Objectives

- Understand dimensionality reduction.
- Understand the intuition behind PCA.
- Apply PCA using Scikit-learn.
- Analyse explained variance.
- Visualize high-dimensional data in two dimensions.
- Understand the intuition behind t-SNE.
- Apply t-SNE using Scikit-learn.
- Compare PCA and t-SNE.
- Interpret dimensionality reduction results.

---

## Dataset

The project uses the **Digits dataset** available directly through Scikit-learn.

The dataset contains:

- 1,797 samples
- 64 numerical features
- 10 classes
- Classes representing digits from 0 to 9

Each sample represents an 8 × 8 handwritten digit image.

The dataset can be loaded directly using:

```python
from sklearn.datasets import load_digits
```

No separate dataset download is required.

---

## Technologies Used

- Python
- NumPy
- Pandas
- Matplotlib
- Scikit-learn
- Google Colab
- Jupyter Notebook

---

## Dimensionality Reduction

Dimensionality reduction is the process of reducing the number of features in a dataset while attempting to retain useful information.

It is useful for:

- Data visualization
- Reducing computational complexity
- Removing redundant information
- Understanding high-dimensional datasets
- Preparing data for further machine learning tasks

---

# PCA

## Principal Component Analysis

PCA is a linear dimensionality reduction technique.

It transforms the original features into a new set of variables called **principal components**.

The first principal component captures the maximum possible variance in the data.

The second principal component captures the maximum remaining variance while being orthogonal to the first component.

The process continues for the remaining components.

---

## PCA Workflow

```text
Original Dataset
       ↓
Feature Scaling
       ↓
PCA
       ↓
Principal Components
       ↓
Explained Variance
       ↓
Reduced-Dimensional Data
       ↓
Visualization
```

---

## Explained Variance

The explained variance ratio indicates how much variation in the original dataset is captured by each principal component.

The cumulative explained variance can be used to understand how many components are needed to retain a desired amount of information.

---

# t-SNE

## t-distributed Stochastic Neighbor Embedding

t-SNE is a non-linear dimensionality reduction technique that is commonly used for visualization.

Its main idea is to represent similar data points close together in a lower-dimensional space while separating dissimilar points.

t-SNE is particularly useful for visualizing complex relationships and local structures in high-dimensional datasets.

---

## t-SNE Intuition

```text
High-Dimensional Data
          ↓
Identify Similarities
          ↓
Map Similar Points Close Together
          ↓
Map Dissimilar Points Further Apart
          ↓
2D Visualization
```

t-SNE mainly focuses on preserving local relationships.

---

# PCA vs t-SNE

| Feature | PCA | t-SNE |
|---|---|---|
| Type | Linear | Non-linear |
| Main purpose | Dimensionality reduction | Visualization |
| Variance information | Provides explained variance | Does not provide explained variance |
| Focus | Overall variance structure | Local relationships |
| Interpretation | Principal components | t-SNE dimensions |
| Visualization | Useful | Very useful |
| Reproducibility | Generally stable | Can depend strongly on parameters and initialization |

---

## Project Workflow

```text
Digits Dataset
      ↓
Data Loading
      ↓
Data Inspection
      ↓
Missing Value Check
      ↓
Feature Scaling
      ↓
PCA
      ↓
Explained Variance Analysis
      ↓
2D PCA Visualization
      ↓
t-SNE
      ↓
2D t-SNE Visualization
      ↓
PCA vs t-SNE Comparison
      ↓
Interpretation
```

---

## Visualizations

The project includes:

1. Sample handwritten digit images
2. PCA explained variance
3. Cumulative explained variance
4. PCA 2D visualization
5. t-SNE 2D visualization
6. PCA vs t-SNE comparison

---

## Learning Outcomes

After completing this project, the following concepts are demonstrated:

- Dimensionality reduction
- Principal Component Analysis
- Principal components
- Explained variance
- Cumulative explained variance
- Feature scaling
- t-SNE intuition
- Non-linear dimensionality reduction
- High-dimensional data visualization
- Scikit-learn implementation
- PCA vs t-SNE comparison

---

## How to Run

### Google Colab

1. Open `Dimensionality_Reduction_PCA_tSNE.ipynb` in Google Colab.
2. Run the cells sequentially.
3. The Digits dataset will be loaded automatically from Scikit-learn.
4. Observe the generated PCA and t-SNE visualizations.

### Jupyter Notebook

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
Dimensionality_Reduction_PCA_tSNE.ipynb
```

Run the cells sequentially.

---

## Conclusion

This project demonstrates how dimensionality reduction can be used to simplify and visualize high-dimensional data.

PCA provides a linear transformation that allows the amount of retained variance to be analysed, while t-SNE provides a non-linear visualization that focuses on preserving local relationships between data points.

The project provides a practical understanding of PCA, t-SNE, dimensionality reduction, and high-dimensional data visualization using Scikit-learn.
