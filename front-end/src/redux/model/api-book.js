import BaseModel from './base.js'

const urlApi = 'api'

const booksModel = {
  getListBooks: () => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/list-book`;
      BaseModel.get(url, null, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  }
}

export default booksModel;