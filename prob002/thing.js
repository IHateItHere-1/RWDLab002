// Function to fetch data from the API
const endPoint = async (endpoint) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return data;
};

const logData = (data) => {
    console.log("##############################################################")
    Array.from(data).forEach( x => console.log(x));
    console.log("##############################################################")
};

const logDataobj = (data) => {
    console.log("##############################################################")
    console.log(JSON.stringify(data));
    console.log("##############################################################")
};

endPoint()
  .then(posts => posts.map(post => post.title))
  .then(titles => titles.filter(title => title.split(' ').length > 6))
  .then(logData);

endPoint()
.then(posts => posts.map(post => post.body))
.then(bodies => bodies.join(' ')) 
.then(bodyText => bodyText.split(/\s+/))
.then(words => words.reduce((wordCount, word) => {
  wordCount[word] = (wordCount[word] || 0) + 1;
  return wordCount;
}, {}))
.then(logDataobj);
