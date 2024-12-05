#!/usr/bin/env python3
"""
Module
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Multiplier function
    """

    def multiplier_function(value: float) -> float:
        """
        Return the multiplier function
        """
        return value * multiplier

    return multiplier_function
