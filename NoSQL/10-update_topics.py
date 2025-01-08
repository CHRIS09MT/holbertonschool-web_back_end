#!/usr/bin/env python3
"""
Module
"""


def update_topics(mongo_collection, name, topics):
    """
    updating
    """

    return mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
