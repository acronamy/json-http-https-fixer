import * as path from "path";

interface Location{
    /**
     * The location of the input src json
    */
    in:string;
    /**
     * The location of the output dump 
     */
    out:string;
}

const map:Location = {
    in: path.join(__dirname, './in'),
    out: path.join(__dirname, './out')
}


type io = "file" | "stream";
interface Behavior {
    /**
     * Where does the data come from?
     */
    input: io;
    /**
     * How is the data handled?
    */
    output: io;
}

const behavior:Behavior = {
    input:"file",
    output:"file"
}

export { map, behavior }