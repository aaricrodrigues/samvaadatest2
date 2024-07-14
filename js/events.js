function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  const searchInput = document.getElementById("searchInput");
  const eventsDisplay = document.getElementById("eventsDisplay");
  const noEventsMessage = document.getElementById("noEventsMessage");

  searchInput.addEventListener("input", function() {
    const filterValue = searchInput.value.toLowerCase();
    filterCards(filterValue);
  });

  function filterCards(value) {
    const cards = eventsDisplay.getElementsByClassName("card");
    let anyVisible = false;
    for (let i = 0; i < cards.length; i++) {
      const title = cards[i].getElementsByTagName("h4")[0].innerText.toLowerCase();
      if (title.indexOf(value) > -1 || value === "") {
        cards[i].style.display = "";
        anyVisible = true;
      } else {
        cards[i].style.display = "none";
      }
    }
    if (anyVisible) {
      noEventsMessage.style.display = "none";
    } else {
      noEventsMessage.style.display = "";
    }
  }