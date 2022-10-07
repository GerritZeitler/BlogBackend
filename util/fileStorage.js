import fs from 'fs'

export const readFromFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err)
                reject(err)
            else
                resolve(data)
        })
    })
}

export const writeIntoFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(true)
        })
    })
}