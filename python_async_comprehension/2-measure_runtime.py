#!/usr/bin/env python3
"""
Module to measure runtime of async_comprehension
"""

import asyncio
import time

async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """
    ...
    """
    start_time = time.perf_counter()

    tasks = [
        asyncio.create_task(async_comprehension()),
        asyncio.create_task(async_comprehension()),
        asyncio.create_task(async_comprehension()),
        asyncio.create_task(async_comprehension()),
    ]

    for task in tasks:
        await task

    end_time = time.perf_counter()
    return end_time - start_time
