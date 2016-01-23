describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single item array', function(){
        expect( bubbleSort([5]) ).toEqual( [5] );
    });
    it('handles an already sorted array', function(){
        expect( bubbleSort([1,2,3,4]) ).toEqual( [1,2,3,4] );
    });
    it('handles a non sorted multi item array', function(){
        expect( bubbleSort([5,2,8,10,4,6]) ).toEqual( [2,4,5,6,8,10] );
    });
});
