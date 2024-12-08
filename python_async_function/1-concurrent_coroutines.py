#!/usr/bin/env python3
"""
Module
"""

wait_random = __import__("0-basic_async_syntax").wait_random

import asyncio
from typing import List


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
