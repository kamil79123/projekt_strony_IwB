const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.astronomyapi.com/api/v2/bodies/positions?longitude=-84.39733&latitude=33.775867&elevation=1&from_date=2024-06-20&to_date=2024-06-20&time=15%3A00%3A45");
xhr.setRequestHeader("Authorization", "Basic bf109177-4bdb-4868-a26c-058e8a7e7f20:7592f83af3d2b379c8c0ce88a67f8789c22d73dac23b274257ed5f6d0e5161cb48ff8d78cc03d14ebcf8ae9c919387e5856ee8611a9d52192a86969511ebe8b22f8e54fb48e11aa908c1e4e280fa9a89ac1118f19b2651e9406423f111fc5b0987c9487d0f62ac7b04e722d58e5b5baf");

xhr.send(data);
console.log(xhr);