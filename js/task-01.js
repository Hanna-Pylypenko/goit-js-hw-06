const itemList = document.querySelectorAll('.item');
console.log('Number of categories: ' + itemList.length);
itemList.forEach(item => {
    const headline = item.querySelector('h2');
    console.log('Category: ' + headline.textContent);
    const insideItems = item.querySelectorAll('li');
    console.log('Elements: ' + insideItems.length)
})

// const itemHeadline = document.querySelectorAll('.item h2')
// console.log(itemHeadline);
// itemHeadline.forEach(headline => {
//     console.log('Category: ' + headline.textContent);

// })

// listElNumber.forEach(element => {
//     console.log(element '<h2>'.textContent)
// })