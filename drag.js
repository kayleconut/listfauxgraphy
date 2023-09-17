window.onload = function () {

    var drake = dragula({
      isContainer: function (el) {
        return el.classList.contains('column');
      },

    moves: function (el, container, handle) {
        return handle.classList.contains('handle');
      }
    });

    const moveList = document.querySelectorAll('.handle');

    if (moveList)
    {
        moveList.forEach(move =>
        {
            move.addEventListener('touchmove', event => event.preventDefault());
        });
    }
}