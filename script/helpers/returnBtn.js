export const returnBtn = document.createElement('a');
returnBtn.style.display = 'block';
returnBtn.textContent = 'Back to main';
returnBtn.href = '../index.html';
document.body.prepend(returnBtn);

// returnBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(document.location);
//   // history.pushState({}, '', '../index.html');
//   // document.location.href = '../index.html';
// });
