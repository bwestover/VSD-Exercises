def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("DNA Strands must be equal length.")

    distance = 0
    for i in range(0,len(strand_a)):
        if strand_a[i] != strand_b[i]:
            distance += 1
    return distance
