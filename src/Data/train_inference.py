"""
Author: Ilia Altmark
"""
import os
# import pickle
import pandas as pd
# import numpy as np
from flask import Flask, request, json, jsonify
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.neighbors import NearestNeighbors
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

K = 5
KNN = NearestNeighbors(n_neighbors=K + 1)
DATA = None

app = Flask(__name__)


@app.route('/find_k_neighbors', methods=['POST'])
def find_k_neighbors():
    """Receiving input and returning closest neigbors"""
    input_dict = json.loads(request.get_json())

    result = KNN.kneighbors(pd.DataFrame(input_dict), return_distance=False)

    return jsonify(preds=result[0][1:].tolist())


@app.route('/fit_k_neighbors', methods=['POST'])
def fit_k_neighbors():
    input_dict = json.loads(request.get_json())
    global DATA
    DATA = pd.DataFrame(input_dict)

    fit_(DATA)


def fit_(df=None):
    numerical = df.describe().columns
    categorical = set(df.columns) - set(numerical)

    df_u = df[numerical + categorical].copy()

    # pipeline for nominal features
    nominal_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='most_frequent')),
        ('onehot_encode', OneHotEncoder())])

    # pipeline for numerical features
    numerical_transformer = Pipeline(steps=[
        ('imputer', SimpleImputer(strategy='mean')),
        ('scaler', StandardScaler())])

    # uniting all pipelines for preprocessing
    transformers = ColumnTransformer([
        ('nom_enc', nominal_transformer, categorical),
        ('num_standard', numerical_transformer, numerical)
    ])

    # Transforming
    X = transformers.transform(df_u)

    # fitting
    global KNN
    KNN = KNN.fit(X)


def main():
    app.run()


if __name__ == "__main__":
    main()
