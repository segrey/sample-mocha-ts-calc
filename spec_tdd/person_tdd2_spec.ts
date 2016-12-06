suite('Person', () => {
    test('#getAge', () => {
        var result:number = 28;
        var expectedResult:number = 28;
        if (result !== expectedResult) {
            throw new Error('Expected: 28, got: ' + result);
        }
    })
});
