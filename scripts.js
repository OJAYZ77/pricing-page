document.getElementById("monthly").addEventListener("click", () => {
  document.querySelectorAll(".plan .price").forEach((price, index) => {
    if (index === 0) price.textContent = "$399/MO";
    else if (index === 1) price.textContent = "$149/MO";
    else price.textContent = "$79/MO";
  });
});

document.getElementById("annual").addEventListener("click", () => {
  document.querySelectorAll(".plan .price").forEach((price, index) => {
    if (index === 0) price.textContent = "$3990/YEAR";
    else if (index === 1) price.textContent = "$1490/YEAR";
    else price.textContent = "$790/YEAR";
  });
});
