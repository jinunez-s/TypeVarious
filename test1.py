def next_number(n):
    n_str = str(n)
    unique_digits = set(n_str)
    next_num = n + 1
    
    while True:
        if set(str(next_num)).isdisjoint(unique_digits):
            return next_num
        next_num += 1

# Example usage:
n = 958
result = next_number(n)
print(result)  # Output will be 700000
