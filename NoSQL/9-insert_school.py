#!/usr/bin/env python3
"""Insert a document into a MongoDB collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document into the specified collection.
    mongo_collection is like db.school
    **kwargs collects any number of keyword arguments as a dictionary.
    return by insert a single arg and also auto-gen id"""
    # Insert the document and return the new document's ID
    return mongo_collection.insert_one(kwargs).inserted_id
