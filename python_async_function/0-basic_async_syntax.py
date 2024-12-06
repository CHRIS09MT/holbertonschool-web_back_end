#!/usr/bin/env python3
"""
Module
"""

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Functions async
    """
    count = random.uniform(0, max_delay)
    await asyncio.sleep(count)
    return count
