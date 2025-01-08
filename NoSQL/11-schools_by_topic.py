#!/usr/bin/env python3
"""
Module
"""


def schools_by_topic(mongo_collection, topic):
    """
    searching
    """

    return mongo_collection.find_one({"topic": topic})
