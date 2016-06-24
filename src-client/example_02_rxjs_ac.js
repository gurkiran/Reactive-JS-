import $ from 'jquery';

const $title = $('#title');
const $results = $('#results');

//------------------
// Library ( faking an ajax promise)

function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, 'Item 1', `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 1000));
    })
}