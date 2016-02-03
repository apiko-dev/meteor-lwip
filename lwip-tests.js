Tinytest.add('test environment', function (test) {
  test.isTrue(
    typeof lwip !== 'undefined',
    'test environment not initialized `lwip`'
  );
});
