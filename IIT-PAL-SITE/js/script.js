const data = {
  physics: {
    title: 'Physics (Class XI & XII)',
    playlists: [
      { title: 'Modern Physics (XII)', playlistId: 'PLFEORgF3jsokn9SiSIDnqlfl0bE_aLni7' },
      { title: 'Motion in a Straight Line', videoId: 'O7kTOkri4AE' }
    ]
  },
  chemistry: {
    title: 'Chemistry (Class XI & XII)',
    playlists: [
      { title: 'Surface Chemistry', playlistId: 'PL5oCdOafm7vR3cXn0cBlpLMPbY6kr2y4z' },
      { title: 'Biomolecules', videoId: '-68wiww7p6M' }
    ]
  },
  math: {
    title: 'Maths (Class XI & XII)',
    playlists: [
      { title: 'Matrix & Determinants', videoId: 'y6h0-2A4Hkc' },
      { title: 'Probability', videoId: '_ay1OlR19_8' }
    ]
  }
};

function showSubject(subject) {
  const section = data[subject];
  const container = document.getElementById('content');
  container.innerHTML = `<h2>${section.title}</h2>`;
  section.playlists.forEach(item => {
    container.innerHTML += `<h3>${item.title}</h3>`;
    if (item.playlistId) {
      container.innerHTML += `<iframe width="560" height="315"
        src="https://www.youtube.com/embed/videoseries?list=${item.playlistId}"
        frameborder="0" allowfullscreen></iframe>`;
    } else {
      container.innerHTML += `<iframe width="560" height="315"
        src="https://www.youtube.com/embed/${item.videoId}"
        frameborder="0" allowfullscreen></iframe>`;
    }
  });
}

