const recordAlbum = [
    {
		title: 'My love',
        artiste_name: "Celin Dion",
        Number_of_track:"16",
        Social_media_links:"https://tubidy.com",
        Release_year:"2004",
	},
    {
		title: 'I can feel you',
        artiste_name: "Colonel Reyel",
        Number_of_track:"20",
        Social_media_links:"https://Youtube.com",
        Release_year:"2010",
	},
    {
		title: 'Forgive me',
        artiste_name: "Baby Golden",
        Number_of_track:"4",
        Social_media_links:"https://tubidy.com",
        Release_year:"2012",
	},
    {
		title: 'I love you',
        artiste_name: "Marshall",
        Number_of_track:"6",
        Social_media_links:"https://google.com",
        Release_year:"2016",
	},
];
console.log(recordAlbum[0].Social_media_links);

let list = `Choose (1) to show all records in the collection,
Choose (2) to add a new record,
Choose (3) to update a specific record,
Choose (4) to remove an existing record,
Choose (5) to quit the program
`;

let listOfRecords = Number(prompt(list));

let recordLists = () => {
    for (let i = 0; i < recordAlbum.length; i++) {
        let listsrecords = `Title : ${recordAlbum[i].title} \n Artiste Name : ${recordAlbum[i].artiste_name} \n Number of tracks : ${recordAlbum[i].Number_of_track} \n Social media links : ${recordAlbum[i].Social_media_links} \n Release year : ${recordAlbum[i].Release_year}`;

        alert (listsrecords);
    }
}

let addingRecord = () => {
    let Title = prompt("Enter the title of the new record");
        let ArtisteName = prompt("Enter the name of the artist of the new record");
        let NumberOfTracks = prompt("Enter the number of tracks of the new record");
        let SocialMedia = prompt("Enter the link on social media of the new record");
        let ReleaseYear = prompt("Enter the year when the record released");

        let newRecord = {
            title: Title,
            artiste_name: ArtisteName,
            Number_of_track: NumberOfTracks,
            Social_media_links: SocialMedia,
            Release_year: ReleaseYear,
        }
        
        recordAlbum.push(newRecord);
}

while (listOfRecords !== 5) {
    if (listOfRecords === 1) {
        recordLists();
    } else if (listOfRecords === 2) {
        addingRecord();
    }
}