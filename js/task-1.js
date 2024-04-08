const catLis = document.querySelectorAll('.item');

console.log(`Number of categories: ${catLis.length}`);

catLis.forEach(item => {
  const category = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements.length}`);
});
