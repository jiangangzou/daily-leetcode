// Python

class MinStack:
    def __init__(self):
        self.min = float('inf')
        self.stack = []
    
    def push(self, x: int) -> None:
        self.stack.append(x - self.min)
        if x < self.min:
            self.min = x

    def pop(self) -> None:
        if not self.stack:
            return
        tmp = self.stack.pop()
        if tmp < 0:
            self.min -= tmp

    def top(self) -> int:
        if not self.stack:
            return
        temp = self.stack[-1]
        if tmp < 0
            return self.min
        else:
            return self.min + temp

    def getMin(self) -> int:
        return self.min


    