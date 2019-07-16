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
  // uploadImg: (formData,config) => {
  //   return new Promise((resole, reject) => {
  //     let url= `${urlApi}/upload`;
  //     BaseModel.get(url, formData, config, function(data) {
  //       resole(data);
  //     },function(err){
  //       reject(err)
  //     })
  //   })
  // },
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
}

export default booksModel;