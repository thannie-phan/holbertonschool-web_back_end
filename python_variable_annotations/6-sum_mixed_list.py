#!/usr/bin/env python3
"""Define variables"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """union allows element in list to be int or float."""

    return sum(mxd_lst)
