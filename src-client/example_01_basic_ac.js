import $ from 'jquery';

const $title = $('#title');
const $results = $('#results');

let oldQuery = null;
let lastTimeout = null;
let newQueryId = 0;

$title.on('keyup', e => {
    const title = e.target.value;
    
    if(title == oldQuery) {
        return;
    }

    oldQuery = title;   

    if(lastTimeout) {
        window.clearTimeout(lastTimeout);
    }

    let ourQueryId = ++newQueryId;
    lastTimeout = window.setTimeout(() => {
         getItems(title).then( items => {
             if(ourQueryId != newQueryId)
                return;
            $results.empty();
            const $items = items.map(item => $('<li />').text(item));
            $results.append($items); 
        })
    }, 500)

   
})

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