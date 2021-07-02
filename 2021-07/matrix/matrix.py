class Matrix:
    """Process a matrix string into columns and rows"""
    def __init__(self, matrix_string):
        self.matrix = []
        row_strings = matrix_string.splitlines()
        for row_string in row_strings:
          self.matrix.append([int(n) for n in row_string.split(" ")])

    def row(self, index):
        return self.matrix[index-1]

    def column(self, index):
        return [item[index-1] for item in self.matrix]
