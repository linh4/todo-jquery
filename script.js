// check off todo items
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed')
})

// delete items
$('ul').on('click', 'span', function (e) {
  e.stopPropagation()
  $(this).parent().fadeOut(400, function () {
    $(this).remove()
  })
})

// add item
$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    let next = $(this).val()
    $('ul').append(`<li><span><i class='fa fa-trash'></i></span> ${next}</li>`)
    $(this).val("")
  }
})

// toggle input
$('.fa-plus').click(function () {
  $('input[type="text"]').fadeToggle()
})
