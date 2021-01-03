import http from "../http-common";

class twnService {
  getList() {
    return http.get("list.json");
  }
  getArticle(){
    return http.get("article.json");
  }

}

export default new twnService();