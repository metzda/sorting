describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
      expect(split([8,6])).toEqual([[8],[6]])
  });
  it('is able to split an even number of elements into two halves', function() {
      expect(split([6,7,2,3,1,4])).toEqual([[6,7,2],[3,1,4]])
  });
  it('is able to split an uneven number of elements into two halves', function() {
      expect(split([6,7,2,3,1])).toEqual([[6,7,2],[3,1]])
  });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1,3,5,7],[2,4,6,8])).toEqual([1,2,3,4,5,6,7,8])
    });
    it('is able to merge two single element arrays', function(){
        expect(merge([5],[3])).toEqual([3,5])
    });
    it('is able to merge two arrays with unequal numbers of elements', function(){
        expect(merge([1,3,5],[2,7])).toEqual([1,2,3,5,7])
    });
});

describe('Merge Sort function', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
    it('handles a single item array', function(){
        expect( mergeSort([5]) ).toEqual( [5] );
    });
    it('handles an already sorted array', function(){
        expect( mergeSort([1,2,3,4]) ).toEqual( [1,2,3,4] );
    });
    it('handles a non sorted multi item array', function(){
        expect( mergeSort([5,2,8,10,4,6]) ).toEqual( [2,4,5,6,8,10] );
    });
});

