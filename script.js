<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Library</title>
    <style>
   /* Global styles */
body {
    background-color: #f8f8f8;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
	justify-content:center;
}

/* Library container */
.book-library {
    background-color: #ffffff;
	text-align:center;
    justify-content: center;
    padding: 20px;
}

/* Book block */
.book {
    text-align:center;
	margin:10px;
}

.book img {
	text-align:center;
    border-radius: 5px;
	
}

.book h2 {
    font-size: 18px;
    margin: 10px 0 5px;
	text-align: left; 
}

.book p {
    color: #777777;
    margin: 5px 0;
	text-align: left;
}
.book .price-block{
    color: white;
    text-align: center;
    background-color: rgb(46, 204, 113);
    font-weight: bold;
    margin-top: 10px;
    border-radius: 10px; /* Add this line */
}



    </style>
</head>

<body>

	<body>
	<h1>Book Library</h1>
    <div class="book-library">
        <div class="book">
            <img src="https://www.bookgeeks.in/wp-content/uploads/2018/01/Spy-in-the-Amber-by-Manohar-Malgonkar.jpg" alt="Spy in the Amber">
            <h2>Spy in the Amber</h2>
            <p>BY Manohar Malgonkar</p>
            <div class="price-block">Rs. 299</div>
        </div>
        <div class="book">
            <img src="https://www.bookgeeks.in/wp-content/uploads/2018/01/Sacred-Games-by-Vikram-Chandra.jpg" alt="Sacred Games">
            <h2>Sacred Games</h2>
            <p>by Vikram Chandra</p>
            <div class="price-block">Rs. 199</div>
        </div>
        <div class="book">
            <img src="https://www.bookgeeks.in/wp-content/uploads/2018/01/Byomkesh-Bakshi-by-Sharadindu-Bandyopadhyay.jpg" alt="Byomkesh Bakshi">
            <h2>Byomkesh Bakshi</h2>
            <p>By Sharadindu Bandyopadhyay</p>
            <div class="price-block">Rs. 249</div>
        </div>
        <!-- Add more book blocks as needed -->
    </div>
</body>

</html>