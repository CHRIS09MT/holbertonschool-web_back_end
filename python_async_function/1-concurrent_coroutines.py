#!/usr/bin/env python3
"""
Module
"""

import asyncio
from typing import List

wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    ...
    """

    task = [wait_random(max_delay) for i in range(n)]

    delays = []

    for completed in asyncio.as_completed(task):
        delay = await completed
        delays.append(delay)

    return delays
