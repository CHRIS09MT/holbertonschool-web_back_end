#!/usr/bin/env python3
"""
Module
"""


def schools_by_topic(mongo_collection, topic):
    """
    searching
    """

    return list(mongo_collection.find({"topics": topic}))
