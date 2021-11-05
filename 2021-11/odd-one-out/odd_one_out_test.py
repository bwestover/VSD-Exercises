import unittest
import pytest
import time

from odd_one_out import odd_one_out
from generate_odd_one_out_array import generate_odd_one_out_array


class OddOneOutTest(unittest.TestCase):
    def test_small_array(self):
        self.assertEqual(odd_one_out([1,1,2,2,3,4,4]), 3)

    def test_unordered_array(self):
        self.assertEqual(odd_one_out([80, 365, 16, 16, 4, 1024, 4, 1024, 16, 80, 16]), 365)

    def test_odd_count_greater_than_1(self):
        self.assertEqual(odd_one_out([80, 16, 4, 1024, 4, 1024, 16, 80, 16]), 16)

class OddOneOutBigTest(unittest.TestCase):
    def setUp(self):
        self.big_array = generate_odd_one_out_array(10_000, 1)
        #self.huge_array = generate_odd_one_out_array(500_000, 1)

    @pytest.mark.execution_timeout(10)
    def test_big_array(self):
        self.assertEqual(odd_one_out(self.big_array), 7578)


class OddOneOutHugeTest(unittest.TestCase):
    def setUp(self):
        self.huge_array = generate_odd_one_out_array(500_000, 1)

    @pytest.mark.execution_timeout(10)
    def test_huge_array(self):
        self.assertEqual(odd_one_out(self.huge_array), 439196)

if __name__ == "__main__":
    unittest.main()

