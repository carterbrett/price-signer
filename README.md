## Price Signer
This NextJS server contains API route which queries the price of 'ETHUSD' from Bitstamp. Using SnarkyJS, it then converts the returned price to a `Field` element, signs the price, and returns both along with the corresponding public key.
