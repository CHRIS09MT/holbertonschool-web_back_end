#!/usr/bin/env python3
"""
Module
"""

from typing import Iterable, List, Sequence


def element_length(lst: Iterable[Sequence]) -> List[tuple[Sequence, int]]:
    """
    ...
    """
    return [(i, len(i)) for i in lst]
