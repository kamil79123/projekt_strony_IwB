const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.astronomyapi.com/api/v2/bodies/positions?longitude=-84.39733&latitude=33.775867&elevation=1&from_date=2024-06-20&to_date=2024-06-20&time=15%3A00%3A45");
xhr.setRequestHeader("Authorization", "Basic MzJmOTNkMjAtNjVkNi00YmVjLWE4YzMtMjM4OWU4ZjBmZGM5Ojc1OTJmODNhZjNkMmIzNzljOGMwY2U4OGE2N2Y4Nzg5YzIyZDczZGFjMjNiMjc0MjU3ZWQ1ZjZkMGU1MTYxY2I0OGZmOGQ3OGNjMDNkMTRlYmNmOGFlOWM5MTkzODdlNTg1NmVlODYxMWE5ZDUyMTkyYTg2OTY5NTExZWJlOGIyYTc3Y2UwMTEwMTI1MTY4ZjlhYzRkYjQyOTliMzVlMTAzMTNjMzRhZmQ1Yjk1YTA5NjcyZjQ5MTc0ZmQ5Zjc4NDRlZmRmODFkOGQ1OWM3ZGMyNGU5NzgyMDMxMWJiYTIw");

xhr.send(data);
console.log(xhr);