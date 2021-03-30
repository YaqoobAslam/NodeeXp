const update = document.querySelector('#update-button')
update.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name:'Zeeshan',
      quote: 'All our dreams can come true if we have the courage to pursue them'
    })
  })
})
