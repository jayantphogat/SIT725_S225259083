const btn = document.getElementById("btn");
const list = document.getElementById("list");
const details = document.getElementById("details");

btn.addEventListener("click", async () => {
  const res = await fetch("/api/books");
  const data = await res.json();

  list.innerHTML = "";
  details.innerHTML = "";

  data.forEach(book => {
    const div = document.createElement("div");
    const price = parseFloat(book.price).toFixed(2);

    div.innerText = `${book.title} - ${price} AUD`;

    div.onclick = async () => {
      const res = await fetch(`/api/books/${book.id}`);
      const b = await res.json();

      details.innerHTML = `
        <strong>Book ID:</strong> ${b.id} <br>
        <strong>Title:</strong> ${b.title} <br>
        <strong>Author:</strong> ${b.author} <br>
        <strong>Year:</strong> ${b.year} <br>
        <strong>Genre:</strong> ${b.genre} <br>
        <strong>Summary:</strong> ${b.summary} <br>
        <strong>Price:</strong> ${parseFloat(b.price).toFixed(2)} AUD
      `;
    };

    list.appendChild(div);
  });
});