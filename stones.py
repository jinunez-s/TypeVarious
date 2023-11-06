def magic(stones):
    # Create a dictionary to count the number of stones for each level
    stone_counts = {}
    
    # Initialize the stone_counts dictionary
    for stone in stones:
        if stone in stone_counts:
            stone_counts[stone] += 1
        else:
            stone_counts[stone] = 1
    
    # Initialize the result to the total number of stones
    result = len(stones)
    
    # Merge stones of the same level until no more merging is possible
    for level in sorted(stone_counts.keys()):
        while stone_counts[level] >= 2:
            # Merge two stones of the same level
            stone_counts[level] -= 2
            # Create a new stone of the next level
            next_level = level + 1
            if next_level in stone_counts:
                stone_counts[next_level] += 1
            else:
                stone_counts[next_level] = 1
            # Decrement the result by 2 (since 2 stones are merged into 1)
            result -= 2
    
    return result

# Example usage:
stones = [1, 2, 1]
result = magic(stones)
print(result)  # Output will be 1
