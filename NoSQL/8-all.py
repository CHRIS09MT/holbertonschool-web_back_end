#!/usr/bin/env python3
"""
Module
"""


def list_all(mongo_collection: list) -> list:
    """
    listing a collection
    """

    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
