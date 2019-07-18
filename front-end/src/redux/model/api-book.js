import BaseModel from './base.js'

const urlApi = 'api'

const booksModel = {
  getListBooks: (filter) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/list-book`;
      BaseModel.get(url, filter, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  getBookDetail: (filter) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/book-detail`;
      BaseModel.get(url, filter, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  getChapter: (filter) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/get-chapter`;
      BaseModel.get(url, filter, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  createUser: (filter) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/user-create`;
      BaseModel.get(url, filter, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  logging: (filter) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/logging`;
      BaseModel.get(url, filter, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  createBook: (obj) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/create-book`;
      BaseModel.post(url, obj, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  getListTopic: (filter) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/list-topic`;
      BaseModel.get(url, filter, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  getBookSearch: (filter) => {
    return new Promise((resole, reject) => {
      let url= `${urlApi}/search`;
      BaseModel.get(url, filter, function(data) {
        resole(data);
      },function(err){
        reject(err)
      })
    })
  },
  
}

export default booksModel;