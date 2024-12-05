#!/usr/bin/env python3
"""
Module
"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Union
    """

    return (k, int(v * v))
