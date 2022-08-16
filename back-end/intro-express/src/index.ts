import express from "express";
import cors from "cors";
import { type } from "os";

const app = express();
app.use(cors());
app.use(express.json());

type sobre={
    id:string | number,
    name:string,
    email: string,
    website: string
}

let newSobre:{
    usuario1:sobre
    usuario2:sobre
}

app.get("/exercicio1", (req, res) => {          
    res.send("Hello from Express")
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

