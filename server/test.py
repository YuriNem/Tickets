l = list(map(float, input('Input list in string: ').split()))
lIndex = []

maxItem = l[0]

for i in range(len(l)):
    if l[i] > maxItem:
        maxItem = l[i]
        lIndex = [i]

    elif l[i] == maxItem:
        lIndex = lIndex + [i]

print(lIndex)

lnew = []
for i in range(len(l)):
    if l[i] != maxItem:
        lnew = lnew + [l[i]]

print(lnew)