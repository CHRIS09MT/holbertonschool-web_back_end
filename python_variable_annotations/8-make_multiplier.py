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
        return value * multiplier
    
    return multiplier_function
