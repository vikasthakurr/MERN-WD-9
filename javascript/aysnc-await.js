async function fetchData() {
  const response = await fetch("https://api.github.com/users/kushvijay234");

  if (!response.ok) {
    alert("Network response was not ok");
    return;
  }
  const data =  await response.json();
  console.log(data);
}
fetchData();