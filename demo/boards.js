  function addCard(e) {
    var el = e;
    var category = el.parentElement.parentElement.parentElement.parentElement.id;
    var items = el.parentElement.parentElement;
    var count = el.parentElement.parentElement.parentElement.querySelector('.head').querySelector('.count');
    var lastId = items.firstChild.id;
    var id = items.children.length;
    $(count).text(id);
    var hasComment = (Math.random() >= 0.5) ? '<a href="#"><i class="fa fa-comment-o"></i></a>' : '';
    var hasCalendar = (Math.random() >= 0.5) ? '<a href="#"><i class="fa fa-calendar"></i></a>' : '';
    var tmpl = '<div class="box" id="'+category+'c'+id+'">' +
    '<p class="title">'+ faker.lorem.sentence() +'</p>' +
    '<p class="meta">' +
    '<img src="https://placehold.it/28x28">' +
    '<a href="#"><i class="fa fa-bars"></i></a>' +
    hasComment +
    hasCalendar +
    '</p>' +
    '</div>';
    $(items).prepend(tmpl);
  }
