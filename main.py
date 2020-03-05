
num_char=2
fl = open("Quotables/author-quote.txt",'r',encoding="utf8")
fl.seek(0)
from collections import Counter
c=Counter()
for qi in range(1000):
    ln = fl.readline()
    q = ln.split("\t")[1]
    for i in range(len(q)-num_char+1):
        c[q[i:i+num_char]]+=1

for k, v in reversed(sorted(c.items(), key=lambda item: item[1])):
    if(v>50):
        print("{}{}".format(k,"*"*int(v/100)))
