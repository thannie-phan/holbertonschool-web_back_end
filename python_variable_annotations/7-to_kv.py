#!/usr/bin/env python3
"""Define variables"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """union allows element in list to be int or float."""

    return (k, v ** 2)
