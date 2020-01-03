# Work in progress

def spiral_matrix(size):
    matrix = [[0]*size for row in range(size)]
    y = 0
    x = 0
    for i in range(size*size):
        matrix[y][x] = i+1

        if x < size-1:
            x+=1
        else:
            y+=1

        if y == size - 1 and x == size - 1:
            # we're in the bottom right corner
            x -= 1
