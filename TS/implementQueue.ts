class MyQueue {
    private S1;
    private S2;
    constructor() {
        this.S1 = [];
        this.S2 = [];
    }
    public push(x: number): void {
        while (this.S1.length) {
            this.S2.push(this.S1.pop());
        }
        this.S1.push(x);
        while (this.S2.length) {
            this.S1.push(this.S2.pop());
        }
    }
    public pop(): number | null {
        if (this.S1.length == 0) return null;
        return this.S1.pop();
    }
    public peek(): number {
        return this.S1[this.S1.length - 1];
    }
    public empty(): boolean {
        return this.S1.length == 0;
    }
}
//    implementQueue
