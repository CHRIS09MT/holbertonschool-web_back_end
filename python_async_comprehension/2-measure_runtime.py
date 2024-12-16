#!/usr/bin/env python3
"""
2. Run time for four parallel comprehensions
-----------------------
"""

import asyncio
import random
import time


async def async_generator():
    """
    An async generator that yields 10 random numbers between 0 and 10,
    with a 1-second delay between each yield.
    """
    for _ in range(10):
        await asyncio.sleep(1)  # Asynchronous delay of 1 second
        yield random.uniform(0, 10)  # Yield a random float between 0 and 10


async def async_comprehension():
    """
    Uses async comprehension to collect 10 random numbers from async_generator.

    Returns:
        list: A list of 10 random numbers collected asynchronously
    """
    return [number async for number in async_generator()]


async def measure_runtime():
    """
    Measure the runtime of async_comprehension executed 4 times in parallel.

    Returns:
        float: Total runtime of the parallel executions
    """
    start_time = time.perf_counter()

    # Execute async_comprehension 4 times in parallel
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )

    end_time = time.perf_counter()
    return end_time - start_time


async def main():
    """
    Demonstrate the usage of measure_runtime.
    """
    runtime = await measure_runtime()
    print(f"Total runtime: {runtime:.2f} seconds")


if __name__ == "__main__":
    asyncio.run(main())
