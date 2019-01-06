const ballot = document.getElementById('ballot');
const me = document.getElementById('me');

function swap_me(here) {
  if (here.id !== me.id) {
    //loop to find #me
    for (let el = here.previousSibling; el != null; el = el.previousSibling) {
      if (el.id === me.id) { //#me found before here
        ballot.insertBefore(me, here.nextSibling);
        return;
      }
    }
    ballot.insertBefore(me, here);
  }

  me.getElementsByTagName('input')[0].checked = true;
}
