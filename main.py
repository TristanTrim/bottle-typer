
from collections import Counter
fl = open("Quotables/author-quote.txt",'r',encoding="utf8")

num_char=1
for num_char in range(1,8):
    fl.seek(0)
    print("\n{}glyph frequencies:".format(num_char))
    c=Counter()
    for qi in range(10000):
        ln = fl.readline()
        q = ln.split("\t")[1]
        for i in range(len(q)-num_char+1):
            chrs = q[i:i+num_char]
            #if(chrs.find(" ")==-1): #no spaces
            c[chrs]+=1

    divver = 100
    for i,(k,v) in enumerate(reversed(sorted(c.items(), key=lambda item: item[1]))):
        if(i==0):
            divver = v/70
        if(i==50):
            break
        print("{}|{}|{}".format(k,v,"*"*int(v/divver)))
