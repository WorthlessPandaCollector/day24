import express from "express";
import fs from "fs";
import type { Games } from "./domain/games";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/games", function (req, res) {
  const videogames = fs.readFileSync("./videogames.json");
  res.send(videogames);
});


const videogames = JSON.parse(fs.readFileSync("./videogames.json", "utf-8"));
const latestGame = videogames[videogames.length - 1];
let gameId = latestGame ? latestGame.gameId : 0;



app.post("/games", function (req, res) {

  // req.body has incoming JSON data.
  const name = req.body.name;
  const platform = req.body.platform;
  const releaseYear = req.body.releaseYear;
  const genre = req.body.genre;
  const ESRB = req.body.ESRB;
  const slaps = req.body.slaps;
  

  const videogame: Games = {
    name: name,
    platform: platform,
    releaseYear: releaseYear,
    genre: genre,
    ESRB: ESRB,
    slaps: slaps,
    gameId: gameId += 1
  };

  const videogames = JSON.parse(
    fs.readFileSync("./videogames.json") as any as string
  );
  videogames.push(videogame);
  fs.writeFileSync("./videogames.json", JSON.stringify(videogames));

  res.send(videogame);
  console.log(videogames)
});


app.put("/games/:id", function (req,res){
    const videogames = JSON.parse(fs.readFileSync("./videogames.json") as any as string)
    const gameToEdit = videogames.find((n)=>n.gameId===Number(req.params.id))

   
    gameToEdit.name = req.body.name;
    gameToEdit.platform = req.body.platform;
    gameToEdit.releaseYear = req.body.releaseYear;
    gameToEdit.genre = req.body.genre;
    gameToEdit.ESRB = req.body.ESRB;
    gameToEdit.slaps=  req.body.slaps

    fs.writeFileSync("./videogames.json", JSON.stringify(videogames));
    
})



app.listen("3002");
