function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function search(text) {
    console.log("Searching:", text);
}

const debounceSearch = debounce(search, 2000);
debounceSearch("Aswathy")