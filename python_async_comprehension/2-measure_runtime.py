#!/usr/bin/env python3
""" async generator"""
import asyncio
from typing import Generator, List
import random
from time import perf_counter
async_generator = __import__("0-async_generator").async_generator
async_comprehension = __import__("1-async_comprehension").async_comprehension



async def measure_runtime() -> float:
    """ Async Comprehension Generator """
    start_time = perf_counter()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension()
                         )
    end_time = perf_counter()
    return end_time - start_time
