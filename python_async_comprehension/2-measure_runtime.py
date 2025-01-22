#!/usr/bin/env python3
"""
Module
"""

import asyncio
import time

async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """
    This function
    """

    start_time = time.perf_counter()

    task = [async_comprehension() for _ in range(4)]

    await asyncio.gather(*task)

    end_time = time.perf_counter()

    return end_time - start_time
