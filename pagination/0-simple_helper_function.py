#!/usr/bin/env python3
"""
Module
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Pagination
    """

    start: int = (page - 1) * page_size
    end: int = start + page_size
    return (start, end)
