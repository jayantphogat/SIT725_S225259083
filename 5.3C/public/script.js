const btn = document.getElementById("btn");
const list = document.getElementById("list");
const details = document.getElementById("details");

btn.addEventListener("click", async () => {
  const res = await fetch("/api/books");
  const data = await res.json();

  list.innerHTML = "";

  data.forEach(book => {
    const div = document.createElement("div");

    const price = parseFloat(book.price.$numberDecimal).toFixed(2);
    div.innerText = `${book.title} ${price} AUD`;

    div.style.cursor = "pointer"; // makes it look clickable

    div.onclick = async () => {
      const res = await fetch(`/api/books/${book.id}`);
      const b = await res.json();

      details.innerHTML = `
        Title: ${b.title} <br>
        Author: ${b.author} <br>
        Year: ${b.year} <br>
        Genre: ${b.genre} <br>
        Summary: ${b.summary} <br>
        Price: ${parseFloat(b.price.$numberDecimal).toFixed(2)} AUD
      `;
    };

    list.appendChild(div);
  });
});