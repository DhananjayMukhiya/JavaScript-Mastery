console.log("Learning fetch");

// fetch('https://api.github.com/users/dhananjaymukhiya')
//   .then(res => res.json())
//   .then(data => console.log(data))

async function getData() {
  const res = await fetch('https://api.github.com/users/dhananjaymukhiya');
  const data = await res.json();
  console.log(data.followers);
}

getData()