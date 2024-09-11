var products = [{
    name: 'caneta',
    value: 2.30,
    quantity: 3
  },
  {
    name: 'caderno',
    value: 13.40,
    quantity: 2
  },
  {
    name: 'borracha',
    value: 4.2,
    quantity: 5
  }
]

var total = products.reduce(calculate, 0);

function calculate(total, item) {
  return total + (item.value * item.quantity);
}

console.log(total)