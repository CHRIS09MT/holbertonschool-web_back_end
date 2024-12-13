#!/usr/bin/env python3
"""
Module
"""

import random
from typing import Generator


def async_generator() -> Generator[float, None, None]:
    """
    ...
    """

    for _ in range(10):
        yield random.uniform(0, 10)