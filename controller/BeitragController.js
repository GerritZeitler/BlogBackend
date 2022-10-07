import { readFromFile, writeIntoFile } from "../util/fileStorage.js"

export const getBeitraege = (req, res) => {
    readFromFile('beitraege.json')
        .then(data => res.status(200).json(JSON.parse(data)))
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
}

export const addBeitrag = (req, res) => {
    const beitrag = {
        Photo: req.file.path,
        Beitragstext: req.body.profilename
    }
    readFromFile('beitraege.json')
        .then(data => JSON.parse(data))
        .then(obj => {
            obj.push(beitrag)
            writeIntoFile('beitraege.json', JSON.stringify(obj))
                .then(() => res.status(200).end())
                .catch(err => {
                    console.log(err)
                    res.status(500).end()
                })
        })
}