function sortByLength (array) {
    array.sort((x, y) => {
      if (x.length > y.length) {
        return 1;
      }
      if (x.length < y.length) {
        return -1;
      }
      return 0;
    });
    return array;
  }
  