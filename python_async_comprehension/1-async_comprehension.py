#!/usr/bin/env python3
""" async generator"""
import asyncio
from typing import Generator, List
import random
async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """ Async Comprehension Generator """
    return [number async for number in async_generator()]
