const btn = document.querySelector('button');
const q = document.querySelector('p')
const a = document.querySelector('h1')
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const url = `${corsProxy}https://favqs.com/api/qotd`;

const Fetch = async ()=>{
	 const res = await fetch(url);
    const data = await res.json();
	q.innerHTML = `${data.quote.body}`
	a.innerHTML = `<span></span> ${data.quote.author}`
}

const fetchData = async () => {
  try {
   const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    Fetch()
    // Now you can update the DOM with the quote and author
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

Fetch()
btn.addEventListener('click', fetchData);
