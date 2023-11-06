#py -m pip install numpy
import numpy as np

msg = "Roll a dice"

# print(msg)
print("=================Random number============")
print(np.random.randint(1,11))
print("================= If else block============")
n = 1
n += 1
n = None
n=4
if n == 2:
    n-=1
elif n ==4:
    print("Almost there rockie")
else:
    n=1
print("================= While loop============")

n = 6
while n < 10:
    print(n)
    n+=1
print("================= For loop============")
for i in range(6):
    print(i)

print("================= For loop with range defined============")
for i in range(5,15):
    print(i)
print("============ For loop with reverse decrement==========")
for i in range(10,2,-2):
    print(i)

print("============Math Package==========")
import math
print(math.floor(10/21))
print(math.sqrt(1000))

print("============Arrays==========")
arr=[1,2,3]
arr.append(4)
arr.append(5)
arr.append(11)
arr.append(8)


print(arr)

arr.pop()
arr.append(1)
arr.append(2)
arr.sort()
print(arr)
print("============Arrays #2 ==========")
nums= [1,4,7,9]
for i in range(len(nums)):
    print(nums[i])

for n in nums:
    print(n)
print("============Arrays #3 ==========")
for i, n in enumerate(nums):
    print(i,n)

print("============Arrays #4 ==========")
nums1 = [10,3,50]
nums2 = [2,40,6]
for n1, n2 in zip(nums1, nums2):
    print(n1, n2)
print("============Arrays #5 ==========")
arrFor = [i+i for i in range(5)]
print(arrFor)
print("============String ==========")
s = "abcdefg"
print(s[0:3])
print( 'This letter is in the index 3:  ' + s[3])
print('Complete string is: ' + s)

print("============String #2 ==========")
arregloDeString = ["John ", " is ", " not ",  " a ", " alien"]
print("-".join(arregloDeString))

print("============Objecto con Set() ==========")
myset = set()

myset.add(100)
myset.add(55)
print(myset)
print(len(myset))

print (1 in myset)
print(100 in myset)
print("============Objecto con Set() ==========")
print(set([1,2,4,4,3,3,4,5,6,2]))
mysetTwo = { i for i in range(10)}
print(mysetTwo)

print("============Objecto con for ==========")
myMap = {"alice": 90, "bob":70, "Charlie":32, "Megan": 23, "Kiko": 25, "Vian": 21}

for key in myMap:
    print(key, myMap[key])
for val in myMap.values():
    print(val)
print("============Objecto Verificando ==========")
for key in myMap:
    if(myMap[key] > 32):
        print(key)

print("============Objecto con items ==========")

for key, val in myMap.items():
    print(key, val)


print("============ Tuples ==========")
tup = (1,2,3, 23,3300, 234, 54)
print(tup)
print(tup[0])
print(tup[2])
print(tup[-1])

print("============ Key hash map/set ==========")
myMap = {(1,2): 3}
print(myMap[1,2])

mySeet = set()
mySeet.add((1,2))
mySeet.add(4)
mySeet.add((1,5))
print((1,2) in mySeet)
print((1,5) in mySeet)

