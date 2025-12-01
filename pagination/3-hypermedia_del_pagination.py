#!/usr/bin/env python3
"""
hypermedia function.py
"""


import csv
import math
from typing import Tuple, List, Dict


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Deletion-resilient hypermedia pagination
    """
    startIndex = (page - 1) * page_size
    endIndex = startIndex + page_size
    return (startIndex, endIndex)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        return the dictionary with key, value pair
        """
        data = self.indexed_dataset()
        assert index < len(data)
        next_index = index + page_size
        if next_index > len(data):
            next_index = len(data)
        return {
            "index": index,
            "next_index": next_index,
            "page_size": page_size,
            "data": [
                value for key, value in data.items()
                if key in range(index, next_index)
            ],
        }

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        return the right page for the dataset
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        dataset = self.dataset()
        page = dataset[start:end]
        return page if page else []

    def get_hyper(self, page: int, page_size: int) -> Dict:
        """
        returns a dictionary containing some key-value pair
        """
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.__dataset) / page_size)
        return {
            "page_size": len(data),
            "page": page,
            "data": self.get_page(page, page_size),
            "next_page": None if page == total_pages else page + 1,
            "prev_page": None if page == 1 else page - 1,
            "total_pages": total_pages,
        }
