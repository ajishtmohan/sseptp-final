const mediaQuery = window.matchMedia('(max-width: 1300px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!');
  } else {
    console.log('Media Query unmatched!');
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
