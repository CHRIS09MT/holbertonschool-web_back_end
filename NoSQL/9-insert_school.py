#!/usr/bin/env python3
"""
Module
"""


def insert_school(mongo_collection, **kwargs):
    """Insert arguments"""

    result = mongo_collection.insert_one(kwargs)

    return result.inserted_id
