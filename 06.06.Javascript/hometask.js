// FIRST FUNCTION: IF STATEMENTS

function numberIsEven() {

    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    if (randomNumber % 2 === 0) {
        return true;
    };

    return false;
}

console.log(numberIsEven());





// SECOND FUNCTION: FUNCTION TAKES AT LEAST 3 ARGUMENTS

function productFunc (name, price, discount) {

    if (discount === 0 || discount === undefined) {
        return `Today ${name} is for ${price} euro.`
    }

    const discountedPrice = (price - ((price/100)*discount)).toFixed(2);

    return `Special offer! Today ${name} is for ${discountedPrice} euro!`;
}

console.log(productFunc('bread', 1.65, 20));





// THIRD FUNCTION: USE OBJECT KEY AND VALUE PAIRS IN IT


const musicAlbumFunc = (albumArtist, albumName, albumYear, albumRatings) => {
    const musicAlbumDetails = {
        artist: albumArtist,
        title: albumName,
        year: albumYear,
        ratings: albumRatings
    };

    function calculateAverage(array) {
        let total = 0;
        let count = 0;
    
        array.forEach(function(item, index) {
            total += item;
            count++;
        });
    
        return Math.round(total / count);
    }

    const averageRating = calculateAverage(musicAlbumDetails.ratings);

    return `The average rating for ${albumArtist} album ${albumName} is ${averageRating}`;

}

console.log(musicAlbumFunc("Radiohead", "Kid A", 2000, [100, 100, 90, 83, 80, 40]));



