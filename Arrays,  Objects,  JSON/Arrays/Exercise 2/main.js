const songs = [];

for(let i = 1; i<= 3 ; i++){
    const song = prompt("Enter a song: ");
    songs.push(song);
}
document.write(songs);
document.write("<hr>");

songs.splice(1,1);

document.write(songs);

