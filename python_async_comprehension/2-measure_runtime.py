#!/usr/bin/env python3
"""
Module to measure runtime of async_comprehension
"""
import asyncio
import time

async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """
    Ejecuta async_comprehension cuatro veces en paralelo sin usar asyncio.gather,
    mide el tiempo total de ejecución y lo retorna.
    """
    start_time = time.perf_counter()

    # Crear las tareas asincrónicas
    task1 = asyncio.create_task(async_comprehension())
    task2 = asyncio.create_task(async_comprehension())
    task3 = asyncio.create_task(async_comprehension())
    task4 = asyncio.create_task(async_comprehension())

    # Aguardar las tareas manualmente
    await task1
    await task2
    await task3
    await task4

    end_time = time.perf_counter()
    return end_time - start_time
