import fetch from 'node-fetch';
import { Signature, PrivateKey, isReady, Field } from 'snarkyjs'

export default async function handler(req, res) {
  try {
    await isReady;

    const pk = await PrivateKey.random();

    const response = await fetch(`https://www.bitstamp.net/api/v2/ticker/ethusd/`);
    const data = await response.json();
    const priceInt = parseInt(data.last.replaceAll('.',''));;

    const price = new Field(priceInt);
    const signature = new Signature(price, pk);
    const key = pk.toPublicKey();

    res.status(200).json({price, signature, key});
  } catch (error) {
    res.status(500).json({ error });
  }
}