import unittest
import pytest

from min_max_subarray import min_max_subarray
from pseudorandom_array import generate_pseudorandom_array

class MinMaxSubarrayTest(unittest.TestCase):
    def test_small_array(self):
        self.assertEqual(min_max_subarray([1,2,3,4,5], 2), 4)

    def test_unordered_array(self):
        self.assertEqual(min_max_subarray([80, 365, 16, 4, 1024], 3), 16)

    def test_big_array_small_subarrays(self):
        big_array = generate_pseudorandom_array(65535)
        self.assertEqual(min_max_subarray(big_array, 8), 822971)

    def test_big_array_big_subarrays(self):
        big_array = generate_pseudorandom_array(65535)
        self.assertEqual(min_max_subarray(big_array, 4096), 763)

    @pytest.mark.execution_timeout(10)
    def test_huge_array(self):
        huge_array = generate_pseudorandom_array(1_000_000)
        self.assertEqual(min_max_subarray(huge_array, 100_000), 69)


if __name__ == "__main__":
    unittest.main()
