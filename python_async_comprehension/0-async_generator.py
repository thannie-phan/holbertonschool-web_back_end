#!/usr/bin/env python3
""" async generator"""
import asyncio
from typing import AsyncGenerator
import random


async def async_generator() -> AsyncGenerator[float, None]:
    """ Async Generator """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
