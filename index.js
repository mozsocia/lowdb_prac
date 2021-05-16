const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Two write a initial value
db.defaults({ posts: [], user: {}, count: 0 })
  .write()


// to add 
db.get('posts')
  .insert({ id: 4, title: 'lowdb is awesome' })
  .write()

// to see the whole database
console.log(db.getState());

// to get specific value
let result = db.get('posts')
  .value()
console.log(result);

//find a posts
let result = db.get('posts')
  .find({ id: 1 })
  .value()
console.log(result);



let result = db.get('posts')
  .remove({ id: 1 })
  .value()
console.log(db.getState());


db.get('posts')
  .find({ id: 2 })
  .assign({ title: 'hi!' })
  .write()



// let init = {
//   "posts": [
//     {
//       "id": 1,
//       "title": "lowdb is awesome"
//     },
//     {
//       "id": 2,
//       "title": "2lowdb is awesome"
//     },
//     {
//       "id": 3,
//       "title": "3lowdb is awesome"
//     }
//   ],
//     "user": { },
//   "count": 0
// }
