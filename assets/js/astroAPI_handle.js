const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.astronomyapi.com/api/v2/bodies/positions?longitude=-84.39733&latitude=33.775867&elevation=1&from_date=2024-06-20&to_date=2024-06-20&time=15%3A00%3A45");
xhr.setRequestHeader("Authorization", "Basic 32f93d20-65d6-4bec-a8c3-2389e8f0fdc9:7592f83af3d2b379c8c0ce88a67f8789c22d73dac23b274257ed5f6d0e5161cb48ff8d78cc03d14ebcf8ae9c919387e5856ee8611a9d52192a86969511ebe8b2a77ce0110125168f9ac4db4299b35e10313c34afd5b95a09672f49174fd9f7844efdf81d8d59c7dc24e97820311bba20");

xhr.send(data);
console.log(xhr);