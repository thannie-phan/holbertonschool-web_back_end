#!/usr/bin/env python3
"""Define variables"""
from typing import List, Union, Tuple, Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """takes a float, returns func that times a float by that number."""

    def multiplier_function(value: float) -> float:
        return value * multiplier
    return multiplier_function
