#!/usr/bin/env python3
"""multiple coroutines at the same time"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """basic async"""
    delays: List[float] = []
    for attempt in range(n):
        delays.append(await task_wait_random(max_delay))
    return sorted(delays)
